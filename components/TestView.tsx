import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Language, Lesson, VocabularyItem, TestQuestion, TestQuestionType, VocabMCQuestion, AppMCQuestion, AppFillBlankQuestion, ListeningSection, TestResult, RegradeQuestionData, RegradeResult } from '../types';
import * as geminiService from '../services/geminiService';
import { UI_STRINGS } from '../data/uiStrings';
import { DocumentTextIcon, CheckIcon, XIcon, PlayIcon, PauseIcon } from './Icons';
import { decode, decodeAudioData } from '../utils/audio';
import { useAuth } from '../contexts/AuthContext';
import { usePoints } from '../contexts/PointsContext';
import * as firestoreService from '../services/firestoreService';

interface TestViewProps {
  lesson: Lesson;
  language: Language;
  onFinish: () => void;
}

type TestState = 'rules' | 'loading' | 'testing' | 'finished' | 'error';

const LoadingSpinner: React.FC<{className?: string}> = ({className}) => (
    <div className={`animate-spin rounded-full border-b-2 border-current ${className}`}></div>
);

const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

const generateVocabQuestions = (vocabulary: VocabularyItem[], langCode: Language['code']): VocabMCQuestion[] => {
    const shuffledVocab = shuffleArray(vocabulary);
    const questions: VocabMCQuestion[] = [];
    if (vocabulary.length < 4) return []; // Need at least 4 items for distractors

    // 3 questions: Native to Thai
    for (let i = 0; i < 3 && i < shuffledVocab.length; i++) {
        const correctItem = shuffledVocab[i];
        const distractors = shuffledVocab.filter(item => item.thai !== correctItem.thai).slice(0, 2);
        const options = shuffleArray([correctItem.thai, ...distractors.map(d => d.thai)]);
        questions.push({
            type: TestQuestionType.VOCAB_MC,
            question: `Which Thai word means "${correctItem.translations[langCode]}"?`,
            options,
            correctAnswer: correctItem.thai,
            points: 5,
        });
    }

    // 2 questions: Thai to Native
    const remainingVocab = shuffledVocab.slice(3);
    for (let i = 0; i < 2 && i < remainingVocab.length; i++) {
        const correctItem = remainingVocab[i];
        const distractors = shuffledVocab.filter(item => item.thai !== correctItem.thai).slice(0, 2);
        const options = shuffleArray([
            correctItem.translations[langCode],
            ...distractors.map(d => d.translations[langCode])
        ]);
        questions.push({
            type: TestQuestionType.VOCAB_MC,
            question: `What is the meaning of "${correctItem.thai}"?`,
            options,
            correctAnswer: correctItem.translations[langCode],
            points: 5,
        });
    }

    return shuffleArray(questions);
};

export const TestView: React.FC<TestViewProps> = ({ lesson, language, onFinish }) => {
    const { user, userProfile, updateUserProfile } = useAuth();
    const { showPoints } = usePoints();
    const [testState, setTestState] = useState<TestState>('rules');
    const [error, setError] = useState<string | null>(null);
    const [allQuestions, setAllQuestions] = useState<TestQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
    const [results, setResults] = useState<TestResult[]>([]);
    const [showExitWarning, setShowExitWarning] = useState(false);
    const [hasAgreed, setHasAgreed] = useState(false);
    const [showRegradeModal, setShowRegradeModal] = useState(false);
    const [isRegrading, setIsRegrading] = useState(false);
    const [regradeResults, setRegradeResults] = useState<RegradeResult[] | null>(null);
    const [expandedExplanations, setExpandedExplanations] = useState<Set<number>>(new Set());
    const testContainerRef = useRef<HTMLDivElement>(null);
    const hasInitiatedTest = useRef(false);
    const hasCheated = useRef(false);
    const loadingStartedRef = useRef(false);
    const questionsReadyRef = useRef(false);
    const loadingIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const langCode = language.code;

    // Determine if this is a retake
    const previousScore = userProfile?.testScores?.[lesson.id];
    const hasRetaken = userProfile?.testRetakes?.[lesson.id] ?? false;
    const isRetake = previousScore !== undefined && !hasRetaken;
    const canRetake = previousScore !== undefined && !hasRetaken;

    // Push initial state when component mounts for back button protection
    useEffect(() => {
        window.history.pushState({ testInProgress: true }, '');
    }, []);

    // Start loading test in background as soon as component mounts (rules screen)
    useEffect(() => {
        if (loadingStartedRef.current) return;
        loadingStartedRef.current = true;
        
        const setupTest = async () => {
            try {
                const vocabQs = generateVocabQuestions(lesson.vocabulary, langCode);
                const { applicationQuestions, listeningSection } = await geminiService.generateTestQuestions(lesson, language);
                
                const combinedQuestions: TestQuestion[] = shuffleArray([
                    ...vocabQs,
                    ...applicationQuestions
                ]);

                // Always put listening section last
                combinedQuestions.push(listeningSection);

                setAllQuestions(combinedQuestions);
                questionsReadyRef.current = true;
                // Don't automatically transition - wait for user to click "Continue"
            } catch (e) {
                console.error("Test generation failed:", e);
                setError(e instanceof Error ? e.message : UI_STRINGS.testGenerationError[langCode]);
                setTestState('error');
            }
        };
        setupTest();
    }, [lesson, language, langCode]);

    // Request fullscreen - must be called directly from user interaction
    const requestFullscreen = async () => {
        try {
            if (testContainerRef.current) {
                if (testContainerRef.current.requestFullscreen) {
                    await testContainerRef.current.requestFullscreen();
                } else if ((testContainerRef.current as any).webkitRequestFullscreen) {
                    await (testContainerRef.current as any).webkitRequestFullscreen();
                } else if ((testContainerRef.current as any).mozRequestFullScreen) {
                    await (testContainerRef.current as any).mozRequestFullScreen();
                } else if ((testContainerRef.current as any).msRequestFullscreen) {
                    await (testContainerRef.current as any).msRequestFullscreen();
                }
            }
        } catch (e) {
            console.log("Fullscreen request failed or not supported:", e);
            // Continue anyway - fullscreen is preferred but not required
        }
    };

    // Handle "Continue" button - start test
    const handleStartTest = async () => {
        // Request fullscreen immediately (must be in direct response to user click)
        await requestFullscreen();
        
        // Check if questions are loaded
        if (!questionsReadyRef.current) {
            // Still loading, show loading screen
            setTestState('loading');
            // Wait for questions to be ready
            loadingIntervalRef.current = setInterval(() => {
                if (questionsReadyRef.current) {
                    if (loadingIntervalRef.current) {
                        clearInterval(loadingIntervalRef.current);
                        loadingIntervalRef.current = null;
                    }
                    startTest();
                }
            }, 100);
        } else {
            // Questions ready, start immediately
            startTest();
        }
    };

    // Cleanup interval on unmount
    useEffect(() => {
        return () => {
            if (loadingIntervalRef.current) {
                clearInterval(loadingIntervalRef.current);
            }
        };
    }, []);

    const startTest = () => {
        hasInitiatedTest.current = true;
        hasCheated.current = false;
        setTestState('testing');
    };

    // Handle focus/blur to detect cheating
    useEffect(() => {
        if (testState !== 'testing') return;

        const handleBlur = () => {
            if (hasInitiatedTest.current && !hasCheated.current) {
                hasCheated.current = true;
                exitFullscreen();
                window.history.replaceState(null, '');
                alert(UI_STRINGS.testCheatingDetected[langCode]);
                onFinish();
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden && hasInitiatedTest.current && !hasCheated.current) {
                hasCheated.current = true;
                exitFullscreen();
                window.history.replaceState(null, '');
                alert(UI_STRINGS.testCheatingDetected[langCode]);
                onFinish();
            }
        };

        window.addEventListener('blur', handleBlur);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('blur', handleBlur);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [testState, langCode, onFinish]);

    // Handle back button - protect all test states except finished and error
    useEffect(() => {
        // Only protect during rules, loading, and testing states
        if (testState === 'finished' || testState === 'error') return;

        const handlePopState = (e: PopStateEvent) => {
            // Push state back so we don't actually navigate
            window.history.pushState({ testInProgress: true }, '');
            
            // If already testing, show warning dialog
            if (testState === 'testing') {
                setShowExitWarning(true);
            } else {
                // For rules or loading state, just exit immediately
                hasCheated.current = true;
                window.history.replaceState(null, '');
                onFinish();
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [testState, onFinish]);

    const exitFullscreen = async () => {
        try {
            if (document.fullscreenElement) {
                await document.exitFullscreen();
            } else if ((document as any).webkitFullscreenElement) {
                await (document as any).webkitExitFullscreen();
            } else if ((document as any).mozFullScreenElement) {
                await (document as any).mozCancelFullScreen();
            } else if ((document as any).msFullscreenElement) {
                await (document as any).msExitFullscreen();
            }
        } catch (e) {
            console.log("Exit fullscreen failed:", e);
        }
    };

    const handleConfirmExit = () => {
        setShowExitWarning(false);
        hasCheated.current = true;
        exitFullscreen();
        // Replace history state to allow normal navigation
        window.history.replaceState(null, '');
        onFinish();
    };

    const handleCancelExit = () => {
        setShowExitWarning(false);
        // Don't do anything, stay in test
    };

    const handleAnswerChange = (index: number, answer: any) => {
        setUserAnswers(prev => ({ ...prev, [index]: answer }));
    };

    const isCurrentQuestionAnswered = useMemo(() => {
        const currentQuestion = allQuestions[currentQuestionIndex];
        if (!currentQuestion) return false;
        
        const answer = userAnswers[currentQuestionIndex];
        
        switch(currentQuestion.type) {
            case TestQuestionType.VOCAB_MC:
            case TestQuestionType.APP_MC:
                return answer !== undefined && answer !== null;
            case TestQuestionType.APP_FILL_BLANK:
                return answer !== undefined && answer !== null && answer.trim() !== '';
            case TestQuestionType.LISTENING:
                // Check if all sub-questions are answered
                if (!answer) return false;
                return currentQuestion.questions.every((_, index) => 
                    answer[index] !== undefined && answer[index] !== null
                );
            default:
                return false;
        }
    }, [allQuestions, currentQuestionIndex, userAnswers]);

    const handleNext = async () => {
        if (currentQuestionIndex < allQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // Finish test
            const finalResults: TestResult[] = allQuestions.map((q, index) => {
                let isCorrect = false;
                let questionText = `Question ${index + 1}`;
                let pointsAwarded = 0;
                let pointsPossible = q.points;
                
                switch(q.type) {
                    case TestQuestionType.VOCAB_MC:
                    case TestQuestionType.APP_MC:
                        isCorrect = userAnswers[index] === q.correctAnswer;
                        questionText = q.question;
                        pointsAwarded = isCorrect ? q.points : 0;
                        break;
                    case TestQuestionType.APP_FILL_BLANK:
                        isCorrect = userAnswers[index]?.trim() === q.correctAnswer;
                        questionText = `${q.start} ___ ${q.end}`;
                        pointsAwarded = isCorrect ? q.points : 0;
                        break;
                    case TestQuestionType.LISTENING:
                        const listeningAnswers = userAnswers[index] || {};
                        let correctCount = 0;
                        q.questions.forEach((lq, lqIndex) => {
                            if (listeningAnswers[lqIndex] === lq.correctAnswer) {
                                correctCount++;
                            }
                        });
                        isCorrect = correctCount === q.questions.length;
                        pointsAwarded = correctCount * q.points;
                        pointsPossible = q.questions.length * q.points;
                        questionText = UI_STRINGS.listeningSectionTitle[langCode];
                        break;
                }
                
                return {
                    questionText,
                    isCorrect,
                    pointsAwarded,
                    pointsPossible,
                };
            });
            
            let totalScore = finalResults.reduce((acc, r) => acc + r.pointsAwarded, 0) + 1; // +1 free point to make total 100

            // Cap score at 80 if this is a retake
            const cappedScore = isRetake ? Math.min(totalScore, 80) : totalScore;

            if (user) {
                const updates: Record<string, any> = { 
                    testScores: { ...userProfile?.testScores, [lesson.id]: cappedScore }
                };
                
                // Calculate points to award - only the difference for retakes
                let pointsToAward = cappedScore;
                if (isRetake && previousScore !== undefined) {
                    // Only award the positive difference between new and old score
                    pointsToAward = Math.max(0, cappedScore - previousScore);
                    updates.testRetakes = { ...userProfile?.testRetakes, [lesson.id]: true };
                }
                
                await updateUserProfile(updates);
                
                if (pointsToAward > 0) {
                    await firestoreService.addPoints(user.uid, pointsToAward, `Lesson ${lesson.id} Test${isRetake ? ' (Retake)' : ''}`);
                    showPoints(pointsToAward);
                }
            }

            setResults(finalResults);
            setTestState('finished');
            hasInitiatedTest.current = false;
            await exitFullscreen();
            
            // Replace history state to allow normal back navigation after test completion
            window.history.replaceState(null, '');
        }
    };

    const totalScore = useMemo(() => results.reduce((acc, r) => acc + r.pointsAwarded, 0), [results]);

    // Regrade handlers
    const handleStartRegrade = async () => {
        setIsRegrading(true);
        
        try {
            // Collect all fill-in-the-blank questions that were marked incorrect
            const questionsToRegrade: RegradeQuestionData[] = [];
            
            allQuestions.forEach((q, index) => {
                if (q.type === TestQuestionType.APP_FILL_BLANK && results[index] && !results[index].isCorrect) {
                    questionsToRegrade.push({
                        questionIndex: index,
                        questionType: q.type,
                        questionText: `${q.start} ___ ${q.end}`,
                        userAnswer: userAnswers[index] || '',
                        correctAnswer: q.correctAnswer
                    });
                }
            });

            if (questionsToRegrade.length === 0) {
                // No questions to regrade, show message
                setRegradeResults([]);
                setIsRegrading(false);
                return;
            }

            // Call the regrade service
            const regradeData = await geminiService.regradeTestQuestions(questionsToRegrade, language);
            setRegradeResults(regradeData);
        } catch (error) {
            console.error('Regrading failed:', error);
            alert('Failed to regrade test. Please try again.');
        } finally {
            setIsRegrading(false);
        }
    };

    const handleSaveRegradeScore = async () => {
        if (!regradeResults || !user) return;

        // Calculate new results
        const newResults = [...results];
        let pointsChange = 0;

        regradeResults.forEach((regradeResult) => {
            if (regradeResult.newIsCorrect && !results[regradeResult.questionIndex].isCorrect) {
                // Question changed from incorrect to correct
                const question = allQuestions[regradeResult.questionIndex];
                newResults[regradeResult.questionIndex] = {
                    ...results[regradeResult.questionIndex],
                    isCorrect: true,
                    pointsAwarded: question.points
                };
                pointsChange += question.points;
            }
        });

        const newTotalScore = newResults.reduce((acc, r) => acc + r.pointsAwarded, 0);

        // Update user profile and firestore
        await updateUserProfile({ 
            testScores: { ...userProfile?.testScores, [lesson.id]: newTotalScore }
        });
        
        if (pointsChange > 0) {
            await firestoreService.addPoints(user.uid, pointsChange, `Lesson ${lesson.id} Test Regrade`);
            showPoints(pointsChange);
        }

        // Update local results
        setResults(newResults);
        setShowRegradeModal(false);
        setRegradeResults(null);
    };

    const toggleExplanation = (questionIndex: number) => {
        const newExpanded = new Set(expandedExplanations);
        if (newExpanded.has(questionIndex)) {
            newExpanded.delete(questionIndex);
        } else {
            newExpanded.add(questionIndex);
        }
        setExpandedExplanations(newExpanded);
    };

    const canRegrade = useMemo(() => {
        // Check if there are any fill-in-the-blank questions that were marked incorrect
        return allQuestions.some((q, index) => 
            q.type === TestQuestionType.APP_FILL_BLANK && 
            results[index] && 
            !results[index].isCorrect
        );
    }, [allQuestions, results]);

    // Rules screen
    if (testState === 'rules') {
        const paragraphs = UI_STRINGS.testRulesExplanation[langCode].split('\n\n');
        
        return (
            <div ref={testContainerRef} className="h-full bg-warm-white overflow-y-auto">
                <div className="flex flex-col items-center min-h-full p-8 py-12">
                    <div className="max-w-3xl w-full">
                        <h2 className="font-heading text-3xl uppercase mb-8 text-charcoal-ink text-center">{UI_STRINGS.testRulesTitle[langCode]}</h2>
                        
                        
                        <div className="space-y-6 mb-10 text-charcoal-ink">
                            {paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-left leading-relaxed text-base">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        
                        {/* Agreement Checkbox */}
                        <div className="mb-8 border-2 border-charcoal-ink p-6 bg-light-grey">
                            <label className="flex items-start gap-4 cursor-pointer">
                                <input 
                                    type="checkbox"
                                    checked={hasAgreed}
                                    onChange={(e) => setHasAgreed(e.target.checked)}
                                    className="mt-1 w-5 h-5 flex-shrink-0 cursor-pointer accent-vibrant-orange"
                                />
                                <span className="text-charcoal-ink text-base leading-relaxed">
                                    {UI_STRINGS.testRulesCheckbox[langCode]}
                                </span>
                            </label>
                        </div>

                        <div className="text-center pb-8">
                            <button 
                                onClick={handleStartTest}
                                disabled={!hasAgreed}
                                className="bg-vibrant-orange text-warm-white font-bold py-3 px-8 uppercase text-lg active:scale-95 transition-transform rounded-none disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
                            >
                                {UI_STRINGS.testRulesUnderstand[langCode]}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Loading screen (if test not ready after clicking "I Understand")
    if (testState === 'loading') {
        return (
            <div ref={testContainerRef} className="flex flex-col items-center justify-center h-full text-center p-6 bg-warm-white">
                <LoadingSpinner className="w-12 h-12 text-vibrant-orange" />
                <h3 className="text-xl font-bold mt-4 text-charcoal-ink/80">{UI_STRINGS.generatingTest[langCode]}</h3>
            </div>
        );
    }

    // Error screen
    if (testState === 'error') {
        return (
            <div ref={testContainerRef} className="flex flex-col items-center justify-center h-full text-center text-red-600 p-6 bg-light-grey">
                <h3 className="font-bold text-xl">{UI_STRINGS.testGenerationError[langCode]}</h3>
                <p className="mt-2">{error}</p>
                <button onClick={onFinish} className="mt-6 bg-charcoal-ink text-warm-white font-bold py-2 px-6 uppercase">
                    {UI_STRINGS.backToLesson[langCode]}
                </button>
            </div>
        );
    }
    
    // Results screen
    if (testState === 'finished') {
        const actualScore = totalScore;
        const cappedScore = isRetake ? Math.min(actualScore, 80) : actualScore;
        const wasCapped = isRetake && actualScore > 80;
        
        return (
            <div ref={testContainerRef} className="p-4 md:p-8 overflow-y-auto no-scrollbar bg-warm-white">
                <div className="text-center">
                    <DocumentTextIcon className="w-16 h-16 mx-auto text-vibrant-orange" />
                    <h2 className="font-heading text-4xl uppercase mt-4">{UI_STRINGS.testResultsTitle[langCode]}</h2>
                    <p className="text-lg text-charcoal-ink/80 mt-2">{UI_STRINGS.yourScore[langCode]}</p>
                    <p className="text-8xl font-bold my-4">{cappedScore}<span className="text-4xl text-charcoal-ink/50">/100</span></p>
                    
                    {/* Show retake information */}
                    {isRetake && (
                        <div className="max-w-md mx-auto mb-4">
                            <p className="text-sm text-charcoal-ink/70">
                                {wasCapped 
                                    ? `Raw score: ${actualScore} (capped at 80 for retakes)`
                                    : 'Retake score'
                                }
                            </p>
                        </div>
                    )}
                </div>
                <div className="max-w-md mx-auto my-8 space-y-2">
                    {results.map((result, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-light-grey border-2 border-charcoal-ink rounded-none">
                           <span className="text-charcoal-ink/80">Question {index + 1}</span>
                           {result.isCorrect ? 
                            <span className="font-bold text-green-600 flex items-center gap-2"><CheckIcon className="w-5 h-5"/> Correct</span> :
                            <span className="font-bold text-red-600 flex items-center gap-2"><XIcon className="w-4 h-4"/> Incorrect</span>
                           }
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8 space-y-4">
                    {canRegrade && (
                        <button 
                            onClick={() => setShowRegradeModal(true)} 
                            className="bg-charcoal-ink text-warm-white font-bold py-3 px-8 uppercase text-lg active:scale-95 transition-transform rounded-none"
                        >
                            {UI_STRINGS.regradeTest[langCode]}
                        </button>
                    )}
                    <button onClick={onFinish} className="bg-vibrant-orange text-warm-white font-bold py-3 px-8 uppercase text-lg active:scale-95 transition-transform rounded-none block mx-auto">
                        {UI_STRINGS.backToLesson[langCode]}
                    </button>
                </div>

                {/* Regrade Modal */}
                {showRegradeModal && (
                    <div className="fixed inset-0 bg-charcoal-ink/80 flex items-center justify-center z-50 p-4 overflow-y-auto animate-fadeIn">
                        <div className="bg-warm-white p-6 max-w-2xl w-full border-2 border-vibrant-orange max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
                            {!regradeResults ? (
                                // Initial state - show description and start button
                                <>
                                    <h3 className="font-heading text-3xl uppercase mb-4 text-charcoal-ink">{UI_STRINGS.regradeModalTitle[langCode]}</h3>
                                    <p className="text-charcoal-ink mb-6 leading-relaxed">{UI_STRINGS.regradeModalDescription[langCode]}</p>
                                    <div className="flex gap-4">
                                        <button 
                                            onClick={handleStartRegrade}
                                            disabled={isRegrading}
                                            className="flex-1 bg-vibrant-orange text-warm-white font-bold py-3 px-6 uppercase active:scale-95 transition-transform rounded-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isRegrading && <LoadingSpinner className="w-5 h-5" />}
                                            {isRegrading ? UI_STRINGS.regrading[langCode] : UI_STRINGS.startRegrading[langCode]}
                                        </button>
                                        <button 
                                            onClick={() => setShowRegradeModal(false)}
                                            disabled={isRegrading}
                                            className="flex-1 bg-charcoal-ink text-warm-white font-bold py-3 px-6 uppercase active:scale-95 transition-transform rounded-none disabled:opacity-50"
                                        >
                                            {UI_STRINGS.close[langCode]}
                                        </button>
                                    </div>
                                </>
                            ) : (
                                // Results state - show regrade results
                                <>
                                    <h3 className="font-heading text-3xl uppercase mb-6 text-charcoal-ink">{UI_STRINGS.regradeResults[langCode]}</h3>
                                    
                                    {regradeResults.length === 0 ? (
                                        <p className="text-charcoal-ink mb-6">{UI_STRINGS.regradeNoChanges[langCode]}</p>
                                    ) : (
                                        <>
                                            {regradeResults.filter(r => r.newIsCorrect).length > 0 ? (
                                                <>
                                                    <div className="mb-6 p-4 bg-light-grey border-2 border-charcoal-ink rounded-none">
                                                        <p className="text-charcoal-ink font-bold mb-4 uppercase">
                                                            {UI_STRINGS.regradeChangesFound[langCode].replace('{count}', String(regradeResults.filter(r => r.newIsCorrect).length))}
                                                        </p>
                                                        <div className="space-y-3">
                                                            {regradeResults.map((result) => (
                                                                <div key={result.questionIndex} className="bg-warm-white p-4 border-2 border-charcoal-ink rounded-none">
                                                                    <div className="flex justify-between items-start mb-2">
                                                                        <span className="text-charcoal-ink font-semibold">Question {result.questionIndex + 1}</span>
                                                                        <span className={`font-bold text-sm px-3 py-1 uppercase ${result.newIsCorrect ? 'bg-vibrant-orange text-warm-white' : 'bg-light-grey text-charcoal-ink'}`}>
                                                                            {result.newIsCorrect ? UI_STRINGS.changedToCorrect[langCode] : UI_STRINGS.remainedIncorrect[langCode]}
                                                                        </span>
                                                                    </div>
                                                                    <p className="text-sm text-charcoal-ink/70 mb-2">
                                                                        {allQuestions[result.questionIndex].type === TestQuestionType.APP_FILL_BLANK 
                                                                            ? `${(allQuestions[result.questionIndex] as AppFillBlankQuestion).start} ${userAnswers[result.questionIndex]} ${(allQuestions[result.questionIndex] as AppFillBlankQuestion).end}`
                                                                            : results[result.questionIndex].questionText}
                                                                    </p>
                                                                    <button 
                                                                        onClick={() => toggleExplanation(result.questionIndex)}
                                                                        className="text-vibrant-orange text-sm font-semibold hover:underline"
                                                                    >
                                                                        {expandedExplanations.has(result.questionIndex) ? UI_STRINGS.hideWhy[langCode] : UI_STRINGS.seeWhy[langCode]}
                                                                    </button>
                                                                    {expandedExplanations.has(result.questionIndex) && (
                                                                        <div className="mt-3 p-3 bg-light-grey border-2 border-charcoal-ink rounded-none transition-all duration-300 ease-in-out">
                                                                            <p className="text-charcoal-ink text-sm">{result.explanation}</p>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="mb-6 p-4 bg-light-grey border-2 border-charcoal-ink rounded-none">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-charcoal-ink font-semibold uppercase">{UI_STRINGS.newScore[langCode]}</span>
                                                            <span className="text-4xl font-bold text-vibrant-orange">
                                                                {totalScore + regradeResults.filter(r => r.newIsCorrect).reduce((acc, r) => acc + allQuestions[r.questionIndex].points, 0)}
                                                                <span className="text-xl text-charcoal-ink/50">/100</span>
                                                            </span>
                                                        </div>
                                                        <div className="flex justify-between items-center mt-2 text-sm text-charcoal-ink/60">
                                                            <span>{UI_STRINGS.originalScore[langCode]}</span>
                                                            <span>{totalScore}/100</span>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="mb-6 p-4 bg-light-grey border-2 border-charcoal-ink rounded-none">
                                                    <p className="text-charcoal-ink">{UI_STRINGS.regradeNoChanges[langCode]}</p>
                                                </div>
                                            )}
                                        </>
                                    )}

                                    <div className="flex gap-4">
                                        {regradeResults.filter(r => r.newIsCorrect).length > 0 && (
                                            <button 
                                                onClick={handleSaveRegradeScore}
                                                className="flex-1 bg-vibrant-orange text-warm-white font-bold py-3 px-6 uppercase active:scale-95 transition-transform rounded-none"
                                            >
                                                {UI_STRINGS.saveNewScore[langCode]}
                                            </button>
                                        )}
                                        <button 
                                            onClick={() => {
                                                setShowRegradeModal(false);
                                                setRegradeResults(null);
                                                setExpandedExplanations(new Set());
                                            }}
                                            className="flex-1 bg-charcoal-ink text-warm-white font-bold py-3 px-6 uppercase active:scale-95 transition-transform rounded-none"
                                        >
                                            {UI_STRINGS.close[langCode]}
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Testing screen
    const currentQuestion = allQuestions[currentQuestionIndex];
    if (!currentQuestion) return null;

    const progressPercent = (currentQuestionIndex / allQuestions.length) * 100;

    return (
        <div ref={testContainerRef} className="flex flex-col h-full bg-warm-white">
            {/* Exit Warning Modal */}
            {showExitWarning && (
                <div className="fixed inset-0 bg-charcoal-ink/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-warm-white p-6 max-w-md w-full border-2 border-vibrant-orange">
                        <h3 className="font-heading text-2xl uppercase mb-4 text-charcoal-ink">{UI_STRINGS.testExitWarningTitle[langCode]}</h3>
                        <p className="text-charcoal-ink mb-6">{UI_STRINGS.testExitWarningMessage[langCode]}</p>
                        <div className="flex gap-4">
                            <button 
                                onClick={handleCancelExit}
                                className="flex-1 bg-vibrant-orange text-warm-white font-bold py-3 px-6 uppercase active:scale-95 transition-transform rounded-none"
                            >
                                {UI_STRINGS.testExitWarningStay[langCode]}
                            </button>
                            <button 
                                onClick={handleConfirmExit}
                                className="flex-1 bg-charcoal-ink text-warm-white font-bold py-3 px-6 uppercase active:scale-95 transition-transform rounded-none"
                            >
                                {UI_STRINGS.testExitWarningLeave[langCode]}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="p-4 border-b border-light-grey">
                <div className="flex justify-between items-center text-sm text-charcoal-ink/60 mb-1">
                    <span className="font-bold">Lesson {lesson.id} Test</span>
                    <span>Question {currentQuestionIndex + 1} of {allQuestions.length}</span>
                </div>
                <div className="w-full bg-light-grey h-2 rounded-none">
                    <div className="bg-vibrant-orange h-2 transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
                </div>
            </div>

            <div className="flex-1 p-4 md:p-8 overflow-y-auto no-scrollbar">
                {currentQuestion.type === TestQuestionType.VOCAB_MC && <MCQuestionView question={currentQuestion} answer={userAnswers[currentQuestionIndex]} onAnswer={(ans) => handleAnswerChange(currentQuestionIndex, ans)} />}
                {currentQuestion.type === TestQuestionType.APP_MC && <MCQuestionView question={currentQuestion} answer={userAnswers[currentQuestionIndex]} onAnswer={(ans) => handleAnswerChange(currentQuestionIndex, ans)} />}
                {currentQuestion.type === TestQuestionType.APP_FILL_BLANK && <FillBlankView question={currentQuestion} answer={userAnswers[currentQuestionIndex]} onAnswer={(ans) => handleAnswerChange(currentQuestionIndex, ans)} />}
                {currentQuestion.type === TestQuestionType.LISTENING && <ListeningView section={currentQuestion} answers={userAnswers[currentQuestionIndex] || {}} onAnswer={(ans) => handleAnswerChange(currentQuestionIndex, ans)} language={language} />}
            </div>

            <div className="p-4 border-t border-light-grey flex justify-end">
                <button 
                    onClick={handleNext} 
                    disabled={!isCurrentQuestionAnswered}
                    className="bg-vibrant-orange text-warm-white font-bold py-3 px-8 uppercase text-lg active:scale-95 transition-transform rounded-none disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                    {currentQuestionIndex === allQuestions.length - 1 ? UI_STRINGS.finishTest[langCode] : UI_STRINGS.nextQuestion[langCode]}
                </button>
            </div>
        </div>
    );
};

// --- Question Type Views ---

const MCQuestionView: React.FC<{question: VocabMCQuestion | AppMCQuestion, answer: string, onAnswer: (answer: string) => void}> = ({question, answer, onAnswer}) => {
    return (
        <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold mb-6 text-center">{question.question}</p>
            <div className="space-y-3">
                {question.options.map((option, index) => (
                    <button 
                        key={index}
                        onClick={() => onAnswer(option)}
                        className={`w-full p-4 border text-left text-lg rounded-none transition-all duration-150 ${answer === option ? 'bg-vibrant-orange text-warm-white border-vibrant-orange scale-105' : 'bg-warm-white hover:bg-light-grey border-light-grey'}`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
};

const FillBlankView: React.FC<{question: AppFillBlankQuestion, answer: string, onAnswer: (answer: string) => void}> = ({question, answer, onAnswer}) => {
    const [isConverting, setIsConverting] = useState(false);

    const handleConvert = async () => {
        if (!answer || isConverting) return;
        setIsConverting(true);
        try {
            const thaiText = await geminiService.convertRomanizationToThai(answer);
            onAnswer(thaiText);
        } catch(e) {
            console.error("Conversion failed", e);
        } finally {
            setIsConverting(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto text-center">
            <div className="text-xl md:text-2xl font-semibold mb-8 flex flex-wrap items-center justify-center gap-2">
                <span>{question.start}</span>
                <div className="relative inline-block">
                    <input 
                        type="text"
                        value={answer || ''}
                        onChange={(e) => onAnswer(e.target.value)}
                        className={`border-b-2 bg-transparent w-40 text-center font-bold font-thai text-2xl transition-colors border-charcoal-ink focus:outline-none focus:border-vibrant-orange pr-14`}
                    />
                    <button 
                        onClick={handleConvert} 
                        disabled={isConverting} 
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-vibrant-orange hover:underline disabled:text-charcoal-ink/40 disabled:no-underline"
                        title="Convert Romanized text to Thai"
                    >
                        {isConverting ? '...' : 'Convert'}
                    </button>
                </div>
                <span>{question.end}</span>
            </div>
        </div>
    );
};

const ListeningView: React.FC<{section: ListeningSection, answers: Record<number, string>, onAnswer: (answers: Record<number, string>) => void, language: Language}> = ({section, answers, onAnswer, language}) => {
    const [audioState, setAudioState] = useState<'idle' | 'playing' | 'error'>('idle');
    const audioContextRef = useRef<AudioContext | null>(null);
    const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
    const audioBufferRef = useRef<AudioBuffer | null>(null);
    
    useEffect(() => {
        const decodeAudio = async () => {
            try {
                if (!audioContextRef.current) {
                    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
                }
                const audioBuffer = await decodeAudioData(decode(section.audioBase64), audioContextRef.current, 24000, 1);
                audioBufferRef.current = audioBuffer;
            } catch (e) {
                console.error("Audio decoding failed:", e);
                setAudioState('error');
            }
        };
        decodeAudio();
        return () => {
            audioSourceRef.current?.stop();
        }
    }, [section.audioBase64]);

    const handlePlay = () => {
        if (audioState === 'playing' || !audioBufferRef.current || !audioContextRef.current) return;
        
        audioSourceRef.current?.stop();
        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBufferRef.current;
        source.connect(audioContextRef.current.destination);
        source.onended = () => setAudioState('idle');
        source.start(0);
        audioSourceRef.current = source;
        setAudioState('playing');
    };

    const handleAnswer = (qIndex: number, answer: string) => {
        onAnswer({ ...answers, [qIndex]: answer });
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-3xl uppercase text-center">{UI_STRINGS.listeningSectionTitle[language.code]}</h3>
            <p className="text-center text-charcoal-ink/70 mb-6">{UI_STRINGS.listenToAudio[language.code]}</p>
            <div className="flex justify-center mb-8">
                <button onClick={handlePlay} disabled={audioState === 'playing'} className="bg-charcoal-ink text-warm-white w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 active:scale-90 transition-transform disabled:opacity-50">
                    {audioState === 'playing' ? <PauseIcon className="w-10 h-10"/> : <PlayIcon className="w-10 h-10"/>}
                </button>
            </div>
            <div className="space-y-8">
                {section.questions.map((q, index) => (
                    <div key={index}>
                         <p className="text-lg font-semibold mb-3">{index + 1}. {q.question}</p>
                         <div className="space-y-2">
                             {q.options.map((opt, optIndex) => (
                                 <button 
                                     key={optIndex}
                                     onClick={() => handleAnswer(index, opt)}
                                     className={`w-full p-3 border text-left rounded-none transition-all duration-150 ${answers[index] === opt ? 'bg-vibrant-orange text-warm-white border-vibrant-orange' : 'bg-warm-white hover:bg-light-grey border-light-grey'}`}
                                 >
                                     {opt}
                                 </button>
                             ))}
                         </div>
                    </div>
                ))}
            </div>
        </div>
    )
};