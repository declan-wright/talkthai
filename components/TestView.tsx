import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Language, Lesson, VocabularyItem, TestQuestion, TestQuestionType, VocabMCQuestion, AppMCQuestion, AppFillBlankQuestion, ListeningSection, TestResult } from '../types';
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
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [allQuestions, setAllQuestions] = useState<TestQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
    const [isFinished, setIsFinished] = useState(false);
    const [results, setResults] = useState<TestResult[]>([]);

    const langCode = language.code;

    useEffect(() => {
        const setupTest = async () => {
            setIsLoading(true);
            setError(null);
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
            } catch (e) {
                console.error("Test generation failed:", e);
                setError(e instanceof Error ? e.message : UI_STRINGS.testGenerationError[langCode]);
            } finally {
                setIsLoading(false);
            }
        };
        setupTest();
    }, [lesson, language, langCode]);

    const handleAnswerChange = (index: number, answer: any) => {
        setUserAnswers(prev => ({ ...prev, [index]: answer }));
    };

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
            
            const totalScore = finalResults.reduce((acc, r) => acc + r.pointsAwarded, 0);

            if (user) {
                await updateUserProfile({ 
                    testScores: { ...userProfile?.testScores, [lesson.id]: totalScore }
                });
                if (totalScore > 0) {
                    await firestoreService.addPoints(user.uid, totalScore, `Lesson ${lesson.id} Test`);
                    showPoints(totalScore);
                }
            }

            setResults(finalResults);
            setIsFinished(true);
        }
    };

    const totalScore = useMemo(() => results.reduce((acc, r) => acc + r.pointsAwarded, 0), [results]);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
                <LoadingSpinner className="w-12 h-12 text-vibrant-orange" />
                <h3 className="text-xl font-bold mt-4 text-charcoal-ink/80">{UI_STRINGS.generatingTest[langCode]}</h3>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center text-red-600 p-6 bg-red-500/10">
                <h3 className="font-bold text-xl">{UI_STRINGS.testGenerationError[langCode]}</h3>
                <p className="mt-2">{error}</p>
                <button onClick={onFinish} className="mt-6 bg-charcoal-ink text-warm-white font-bold py-2 px-6 uppercase">
                    {UI_STRINGS.backToLesson[langCode]}
                </button>
            </div>
        );
    }
    
    if (isFinished) {
        return (
            <div className="p-4 md:p-8 overflow-y-auto no-scrollbar">
                <div className="text-center">
                    <DocumentTextIcon className="w-16 h-16 mx-auto text-vibrant-orange" />
                    <h2 className="font-heading text-4xl uppercase mt-4">{UI_STRINGS.testResultsTitle[langCode]}</h2>
                    <p className="text-lg text-charcoal-ink/80 mt-2">{UI_STRINGS.yourScore[langCode]}</p>
                    <p className="text-8xl font-bold my-4">{totalScore}<span className="text-4xl text-charcoal-ink/50">/100</span></p>
                </div>
                <div className="max-w-md mx-auto my-8 space-y-2">
                    {results.map((result, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-light-grey/50 rounded-none">
                           <span className="text-charcoal-ink/80">Question {index + 1}</span>
                           {result.isCorrect ? 
                            <span className="font-bold text-green-600 flex items-center gap-2"><CheckIcon className="w-5 h-5"/> Correct</span> :
                            <span className="font-bold text-red-600 flex items-center gap-2"><XIcon className="w-4 h-4"/> Incorrect</span>
                           }
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button onClick={onFinish} className="bg-vibrant-orange text-warm-white font-bold py-3 px-8 uppercase text-lg active:scale-95 transition-transform rounded-none">
                        {UI_STRINGS.backToLesson[langCode]}
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = allQuestions[currentQuestionIndex];
    if (!currentQuestion) return null;

    const progressPercent = (currentQuestionIndex / allQuestions.length) * 100;

    return (
        <div className="flex flex-col h-full">
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
                <button onClick={handleNext} className="bg-vibrant-orange text-warm-white font-bold py-3 px-8 uppercase text-lg active:scale-95 transition-transform rounded-none">
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
                        className={`w-full p-4 border text-left text-lg rounded-none transition-all duration-150 ${answer === option ? 'bg-vibrant-orange text-warm-white border-vibrant-orange scale-105' : 'bg-warm-white hover:bg-light-grey/50 border-light-grey'}`}
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
                        className={`border-b-2 bg-transparent w-40 text-center font-bold font-thai text-2xl transition-colors border-charcoal-ink/50 focus:outline-none focus:border-vibrant-orange pr-14`}
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
                                     className={`w-full p-3 border text-left rounded-none transition-all duration-150 ${answers[index] === opt ? 'bg-vibrant-orange text-warm-white border-vibrant-orange' : 'bg-warm-white hover:bg-light-grey/50 border-light-grey'}`}
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