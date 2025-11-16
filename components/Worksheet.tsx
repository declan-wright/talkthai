

import React, { useState, useEffect, useRef, useMemo } from 'react';
import type { Language, Lesson, WorksheetItem, MatchingExerciseData, FillInTheBlankExerciseData, MultipleChoiceExerciseData, CulturalNoteData, JumbledSentenceExerciseData } from '../types';
import { ExerciseType } from '../types';
import { UI_STRINGS } from '../data/uiStrings';
import { LightbulbIcon, CheckIcon, XIcon } from './Icons';
import { MarkdownRenderer } from './MarkdownRenderer';
import * as geminiService from '../services/geminiService';
import { useAuth } from '../contexts/AuthContext';
import { usePoints } from '../contexts/PointsContext';
import * as firestoreService from '../services/firestoreService';
import { UNITS } from '../data/curriculum/units';
import { getReviewWorksheet } from '../utils/spacedRepetition';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// --- Cultural Note Component ---
const CulturalNote: React.FC<{ data: CulturalNoteData, lang: Language['code'] }> = ({ data, lang }) => {
    return (
        <div className="my-4">
            <div className="flex items-start gap-3 mb-2">
                <LightbulbIcon className="w-6 h-6 text-vibrant-orange flex-shrink-0" />
                <h3 className="font-bold text-charcoal-ink">{data.title[lang]}</h3>
            </div>
            <MarkdownRenderer content={data.content[lang]} className="text-charcoal-ink/80" />
        </div>
    );
};

// --- Matching Exercise Component ---
const MatchingExercise: React.FC<{ 
    data: MatchingExerciseData, 
    lang: Language['code'], 
    answers?: Record<number, number>,
    onChange: (answers: Record<number, number>) => void,
    submission: { results: boolean[] } | null,
}> = ({ data, lang, answers = {}, onChange, submission }) => {
    const [selectedPrompt, setSelectedPrompt] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const promptRefs = useRef<(HTMLDivElement | null)[]>([]);
    const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    const [shuffledAnswers, setShuffledAnswers] = useState<{ originalIndex: number, data: any }[]>([]);

    useEffect(() => {
        promptRefs.current = promptRefs.current.slice(0, data.pairs.length);
        answerRefs.current = answerRefs.current.slice(0, data.pairs.length);
        const answersToShuffle = data.pairs.map((p, index) => ({ originalIndex: index, data: p.answer }));
        setShuffledAnswers(shuffleArray(answersToShuffle));
    }, [data.pairs]);

    const handlePromptClick = (index: number) => {
        if (submission) return;
        if (answers[index] !== undefined) {
             const newAnswers = {...answers};
             delete newAnswers[index];
             onChange(newAnswers);
        }
        setSelectedPrompt(index === selectedPrompt ? null : index);
    };

    const handleAnswerClick = (shuffledIndex: number) => {
        if (submission || selectedPrompt === null) return;
        const originalAnswerIndex = shuffledAnswers[shuffledIndex].originalIndex;
        onChange({ ...answers, [selectedPrompt]: originalAnswerIndex });
        setSelectedPrompt(null);
    };

    const getLineCoords = (promptIndex: number, answerShuffledIndex: number) => {
        const container = containerRef.current?.getBoundingClientRect();
        const promptEl = promptRefs.current[promptIndex]?.getBoundingClientRect();
        const answerEl = answerRefs.current[answerShuffledIndex]?.getBoundingClientRect();
        if (!container || !promptEl || !answerEl) return null;

        return {
            x1: promptEl.right - container.left,
            y1: promptEl.top + promptEl.height / 2 - container.top,
            x2: answerEl.left - container.left,
            y2: answerEl.top + answerEl.height / 2 - container.top,
        };
    };

    return (
        <div>
            <h3 className="font-bold text-lg mb-4">{data.prompt[lang]}</h3>
            <div className="relative" ref={containerRef}>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="space-y-2">
                        {data.pairs.map((pair, index) => (
                            <div key={index} ref={el => { promptRefs.current[index] = el; }}>
                                <button
                                    onClick={() => handlePromptClick(index)}
                                    disabled={!!submission}
                                    className={`w-full text-left p-3 border rounded-none transition-colors ${selectedPrompt === index ? 'bg-charcoal-ink text-warm-white border-charcoal-ink' : 'bg-warm-white hover:bg-light-grey/50 border-light-grey'}`}
                                >
                                    {pair.prompt[lang]}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-2">
                        {shuffledAnswers.map((answer, sIndex) => (
                           <div key={answer.originalIndex} ref={el => { answerRefs.current[sIndex] = el; }}>
                             <button
                                onClick={() => handleAnswerClick(sIndex)}
                                disabled={!!submission || selectedPrompt === null}
                                className="w-full text-left p-3 border rounded-none transition-colors font-thai bg-light-grey/50 border-light-grey disabled:cursor-not-allowed enabled:hover:bg-vibrant-orange/20"
                             >
                                 {answer.data[lang]}
                             </button>
                           </div>
                        ))}
                    </div>
                </div>
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    {Object.entries(answers).map(([promptIdxStr, answerIdx]) => {
                        const promptIndex = parseInt(promptIdxStr, 10);
                        const shuffledAnswerIndex = shuffledAnswers.findIndex(a => a.originalIndex === answerIdx);
                        if (shuffledAnswerIndex === -1) return null;

                        const coords = getLineCoords(promptIndex, shuffledAnswerIndex);
                        if (!coords) return null;
                        
                        let strokeColor = 'stroke-vibrant-orange/80';
                        if (submission?.results) {
                            strokeColor = submission.results[promptIndex] ? 'stroke-green-500' : 'stroke-red-500';
                        }
                        
                        return (
                            <line 
                                key={`${promptIndex}-${answerIdx}`}
                                x1={coords.x1} y1={coords.y1}
                                x2={coords.x2} y2={coords.y2}
                                className={`stroke-[3px] transition-colors ${strokeColor}`}
                            />
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};


// --- Fill In The Blank Exercise Component ---
const FillInTheBlankExercise: React.FC<{ 
    data: FillInTheBlankExerciseData, 
    lang: Language['code'],
    answers: string[],
    onChange: (answers: string[]) => void,
    submission: { results: boolean[] } | null
}> = ({ data, lang, answers, onChange, submission }) => {
    const [convertingIndex, setConvertingIndex] = useState<number | null>(null);

    const handleConvert = async (index: number, romanizedText: string) => {
        if (!romanizedText || convertingIndex === index) return;
        setConvertingIndex(index);
        try {
            const thaiText = await geminiService.convertRomanizationToThai(romanizedText);
            const newAnswers = [...(answers || [])];
            newAnswers[index] = thaiText;
            onChange(newAnswers);
        } catch (e) {
            console.error("Conversion failed", e);
        } finally {
            setConvertingIndex(null);
        }
    };
    
    const handleChange = (index: number, value: string) => {
        const newAnswers = [...(answers || [])];
        newAnswers[index] = value;
        onChange(newAnswers);
    };

    return (
        <div>
            <h3 className="font-bold text-lg mb-4">{data.prompt[lang]}</h3>
            <div className="space-y-3">
                {data.sentences.map((sentence, index) => {
                    const isCorrect = submission?.results[index];
                    const containerBorder = submission ? (isCorrect ? 'border-green-500' : 'border-red-500') : 'border-light-grey';
                    
                    return (
                        <div key={index} className={`flex flex-wrap items-center gap-2 p-4 border rounded-none ${containerBorder}`}>
                            <span>{sentence.start[lang]}</span>
                            <div className="relative inline-block">
                                <input 
                                    type="text"
                                    value={answers?.[index] || ''}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    disabled={!!submission}
                                    className={`border-b-2 bg-transparent w-40 text-center font-bold font-thai text-lg transition-colors border-charcoal-ink/50 focus:outline-none focus:border-vibrant-orange pr-14`}
                                />
                                <button
                                    onClick={() => handleConvert(index, answers?.[index] || '')}
                                    disabled={!!submission || convertingIndex === index}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-vibrant-orange hover:underline disabled:text-charcoal-ink/40 disabled:no-underline"
                                    title="Convert Romanized text to Thai"
                                >
                                    {convertingIndex === index ? '...' : UI_STRINGS.convertButton[lang]}
                                </button>
                            </div>
                            <span>{sentence.end[lang]}</span>
                            {submission && !isCorrect && (
                                <span className="text-green-600 font-bold text-sm ml-auto">({UI_STRINGS.answerLabel[lang]} {sentence.correctAnswer})</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// --- Multiple Choice Exercise Component ---
const MultipleChoiceExercise: React.FC<{ 
    data: MultipleChoiceExerciseData, 
    lang: Language['code'],
    answers: (number | null)[],
    onChange: (answers: (number | null)[]) => void,
    submission: { results: boolean[] } | null
}> = ({ data, lang, answers, onChange, submission }) => {
    
    const handleSelect = (qIndex: number, oIndex: number) => {
        if (submission) return;
        const newAnswers = [...(answers || Array(data.questions.length).fill(null))];
        newAnswers[qIndex] = oIndex;
        onChange(newAnswers);
    };

    return (
        <div>
            <h3 className="font-bold text-lg mb-4">{data.prompt[lang]}</h3>
            <div className="space-y-6">
                {data.questions.map((q, qIndex) => (
                    <div key={qIndex}>
                        <p className="mb-3 font-semibold text-lg">{qIndex + 1}. {q.question[lang]}</p>
                        <div className="flex flex-col space-y-2">
                            {q.options.map((option, oIndex) => {
                                const isSelected = answers?.[qIndex] === oIndex;
                                const isCorrectAnswer = q.correctIndex === oIndex;
                                let buttonClass = "border-light-grey hover:bg-light-grey/50";
                                let icon = null;

                                if (submission) {
                                    if (isSelected && isCorrectAnswer) {
                                        buttonClass = "bg-vibrant-orange/10 border-vibrant-orange text-charcoal-ink font-bold";
                                        icon = <CheckIcon className="w-6 h-6 text-green-600" />;
                                    } else if (isSelected && !isCorrectAnswer) {
                                        buttonClass = "bg-charcoal-ink/10 border-charcoal-ink/30 text-charcoal-ink/70 line-through";
                                        icon = <XIcon className="w-5 h-5 text-red-600" />;
                                    } else if (isCorrectAnswer) {
                                        buttonClass = "border-vibrant-orange border-2";
                                    }
                                } else if (isSelected) {
                                    buttonClass = "bg-vibrant-orange text-warm-white border-vibrant-orange";
                                }

                                return (
                                    <button 
                                        key={oIndex} 
                                        onClick={() => handleSelect(qIndex, oIndex)}
                                        disabled={!!submission}
                                        className={`p-3 border text-left transition-colors rounded-none flex justify-between items-center ${buttonClass}`}
                                    >
                                        <span>{option[lang]}</span>
                                        {icon}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Jumbled Sentence Exercise Component ---
const JumbledSentenceExercise: React.FC<{
    data: JumbledSentenceExerciseData,
    lang: Language['code'],
    answers?: string[][],
    onChange: (answers: string[][]) => void,
    submission: { results: boolean[] } | null
}> = ({ data, lang, answers, onChange, submission }) => {
    const [initialized, setInitialized] = useState(false);
    // Track word bank (unused words) and sentence (arranged words) separately
    const [wordBanks, setWordBanks] = useState<string[][]>([]);
    const [sentences, setSentences] = useState<string[][]>([]);

    useEffect(() => {
        if (initialized) return;
        // Initialize: all words in bank, empty sentences
        const initialBanks = data.sentences.map(s => {
            const tokens = (s.tokens && s.tokens.length === s.correctOrder.length) ? [...s.tokens] : shuffleArray(s.correctOrder);
            return tokens;
        });
        const initialSentences = data.sentences.map(() => []);
        
        if (!answers || answers.length === 0) {
            setWordBanks(initialBanks);
            setSentences(initialSentences);
            onChange(initialSentences);
        } else {
            // Reconstruct word banks from answers
            const reconstructedBanks = data.sentences.map((s, sIndex) => {
                const allTokens = (s.tokens && s.tokens.length === s.correctOrder.length) ? [...s.tokens] : [...s.correctOrder];
                const usedTokens = answers[sIndex] || [];
                return allTokens.filter(tok => !usedTokens.includes(tok));
            });
            setWordBanks(reconstructedBanks);
            setSentences(answers);
        }
        setInitialized(true);
    }, [answers, data.sentences, initialized, onChange]);

    const handleTapWordFromBank = (sIndex: number, wordIndex: number) => {
        if (submission) return;
        const newBanks = [...wordBanks];
        const newSentences = [...sentences];
        
        const word = newBanks[sIndex][wordIndex];
        newBanks[sIndex] = newBanks[sIndex].filter((_, i) => i !== wordIndex);
        newSentences[sIndex] = [...newSentences[sIndex], word];
        
        setWordBanks(newBanks);
        setSentences(newSentences);
        onChange(newSentences);
    };

    const handleTapWordFromSentence = (sIndex: number, wordIndex: number) => {
        if (submission) return;
        const newBanks = [...wordBanks];
        const newSentences = [...sentences];
        
        const word = newSentences[sIndex][wordIndex];
        newSentences[sIndex] = newSentences[sIndex].filter((_, i) => i !== wordIndex);
        newBanks[sIndex] = [...newBanks[sIndex], word];
        
        setWordBanks(newBanks);
        setSentences(newSentences);
        onChange(newSentences);
    };

    const handleReorderInSentence = (sIndex: number, fromIndex: number, toIndex: number) => {
        if (submission) return;
        const newSentences = [...sentences];
        const current = [...newSentences[sIndex]];
        const moved = current.splice(fromIndex, 1)[0];
        current.splice(toIndex, 0, moved);
        newSentences[sIndex] = current;
        setSentences(newSentences);
        onChange(newSentences);
    };

    const dragState = useRef<{ sIndex: number; fromArea: 'bank' | 'sentence'; fromIndex: number } | null>(null);

    return (
        <div>
            <h3 className="font-bold text-lg mb-4">{data.prompt[lang]}</h3>
            <div className="space-y-6">
                {data.sentences.map((s, sIndex) => {
                    const isCorrect = submission?.results?.[sIndex] ?? null;
                    const containerBorder = submission ? (isCorrect ? 'border-green-500' : 'border-red-500') : 'border-light-grey';
                    
                    return (
                        <div key={sIndex} className={`p-4 border rounded-none ${containerBorder}`}>
                            {s.hint && (
                                <p className="mb-3 text-charcoal-ink/70 italic">{s.hint[lang]}</p>
                            )}
                            
                            {/* Word Bank */}
                            <div className="mb-4">
                                <p className="text-xs text-charcoal-ink/60 mb-2 font-semibold uppercase tracking-wide">{UI_STRINGS.wordBank[lang]}</p>
                                <div 
                                    className="flex flex-wrap gap-2 min-h-[3rem] p-3 bg-light-grey/30 border border-light-grey/50 rounded-none"
                                    onDragOver={(e) => { if (!submission) { e.preventDefault(); } }}
                                    onDrop={(e) => {
                                        e.preventDefault();
                                        if (!submission && dragState.current && dragState.current.sIndex === sIndex) {
                                            const { fromArea, fromIndex } = dragState.current;
                                            if (fromArea === 'sentence') {
                                                // Move from sentence back to bank
                                                handleTapWordFromSentence(sIndex, fromIndex);
                                            }
                                        }
                                        dragState.current = null;
                                    }}
                                >
                                    {wordBanks[sIndex]?.map((tok, tIndex) => (
                                        <div
                                            key={`${tok}-${tIndex}`}
                                            draggable={!submission}
                                            onClick={() => handleTapWordFromBank(sIndex, tIndex)}
                                            onDragStart={() => { 
                                                dragState.current = { sIndex, fromArea: 'bank', fromIndex: tIndex }; 
                                            }}
                                            className={`px-3 py-2 border border-charcoal-ink/30 rounded-none bg-warm-white select-none font-thai transition-colors ${
                                                submission 
                                                    ? 'opacity-80 cursor-default' 
                                                    : 'cursor-pointer hover:bg-vibrant-orange/20 hover:border-vibrant-orange active:scale-95'
                                            }`}
                                            title={submission ? undefined : 'Tap or drag to add to sentence'}
                                        >
                                            {tok}
                                        </div>
                                    ))}
                                    {(!wordBanks[sIndex] || wordBanks[sIndex].length === 0) && (
                                        <span className="text-charcoal-ink/40 italic text-sm">{UI_STRINGS.tapToRemove[lang]}</span>
                                    )}
                                </div>
                            </div>

                            {/* Sentence Area */}
                            <div>
                                <p className="text-xs text-charcoal-ink/60 mb-2 font-semibold uppercase tracking-wide">{UI_STRINGS.yourSentence[lang]}</p>
                                <div 
                                    className="flex flex-wrap gap-2 min-h-[3rem] p-3 bg-warm-white border-2 border-charcoal-ink/20 rounded-none"
                                    onDragOver={(e) => { if (!submission) { e.preventDefault(); } }}
                                    onDrop={(e) => {
                                        e.preventDefault();
                                        if (!submission && dragState.current && dragState.current.sIndex === sIndex) {
                                            const { fromArea, fromIndex } = dragState.current;
                                            if (fromArea === 'bank') {
                                                // Move from bank to sentence
                                                handleTapWordFromBank(sIndex, fromIndex);
                                            }
                                        }
                                        dragState.current = null;
                                    }}
                                >
                                    {sentences[sIndex]?.map((tok, tIndex) => (
                                        <div
                                            key={`${tok}-${tIndex}`}
                                            draggable={!submission}
                                            onClick={() => handleTapWordFromSentence(sIndex, tIndex)}
                                            onDragStart={() => { 
                                                dragState.current = { sIndex, fromArea: 'sentence', fromIndex: tIndex }; 
                                            }}
                                            onDragOver={(e) => { 
                                                if (!submission) { e.preventDefault(); } 
                                            }}
                                            onDrop={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                if (!submission && dragState.current && dragState.current.sIndex === sIndex) {
                                                    const { fromArea, fromIndex } = dragState.current;
                                                    if (fromArea === 'sentence') {
                                                        // Reorder within sentence
                                                        handleReorderInSentence(sIndex, fromIndex, tIndex);
                                                    } else if (fromArea === 'bank') {
                                                        // Insert from bank at specific position
                                                        const newBanks = [...wordBanks];
                                                        const newSentences = [...sentences];
                                                        const word = newBanks[sIndex][fromIndex];
                                                        newBanks[sIndex] = newBanks[sIndex].filter((_, i) => i !== fromIndex);
                                                        newSentences[sIndex] = [...newSentences[sIndex]];
                                                        newSentences[sIndex].splice(tIndex, 0, word);
                                                        setWordBanks(newBanks);
                                                        setSentences(newSentences);
                                                        onChange(newSentences);
                                                    }
                                                }
                                                dragState.current = null;
                                            }}
                                            className={`px-3 py-2 border border-vibrant-orange/50 rounded-none bg-vibrant-orange/5 select-none font-thai transition-colors ${
                                                submission 
                                                    ? 'opacity-80 cursor-default' 
                                                    : 'cursor-pointer hover:bg-vibrant-orange/20 hover:border-vibrant-orange active:scale-95'
                                            }`}
                                            title={submission ? undefined : 'Tap to remove or drag to reorder'}
                                        >
                                            {tok}
                                        </div>
                                    ))}
                                    {(!sentences[sIndex] || sentences[sIndex].length === 0) && (
                                        <span className="text-charcoal-ink/40 italic text-sm">{UI_STRINGS.tapToBuild[lang]}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


interface WorksheetProps {
  lesson: Lesson;
  language: Language;
}

export const Worksheet: React.FC<WorksheetProps> = ({ lesson, language }) => {
    const { user } = useAuth();
    const { showPoints } = usePoints();
    const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
    const [submissionStatus, setSubmissionStatus] = useState<Record<string | number, any>>({});
    const [isLoadingProgress, setIsLoadingProgress] = useState(true);

    // Get review worksheet and create combined worksheet with review item inserted
    // Also create a mapping from combined index to original index
    const { worksheetWithReview, reviewExerciseIndex, indexMapping } = useMemo(() => {
        const reviewItem = getReviewWorksheet(UNITS, lesson.id);

        if (!reviewItem) {
            const mapping = lesson.worksheet.map((_, idx) => idx);
            return {
                worksheetWithReview: lesson.worksheet,
                reviewExerciseIndex: -1,
                indexMapping: mapping
            };
        }

        // Randomly insert the review item (but not as cultural note)
        const nonCulturalIndices = lesson.worksheet
            .map((item, index) => ({ item, index }))
            .filter(({ item }) => item.type !== ExerciseType.CULTURAL_NOTE)
            .map(({ index }) => index);

        if (nonCulturalIndices.length === 0) {
            // If all exercises are cultural notes, just append
            const mapping = lesson.worksheet.map((_, idx) => idx);
            mapping.push(-1); // Review exercise doesn't map to original
            return {
                worksheetWithReview: [...lesson.worksheet, reviewItem],
                reviewExerciseIndex: lesson.worksheet.length,
                indexMapping: mapping
            };
        }

        // Pick a random position among non-cultural exercises
        const randomPosition = nonCulturalIndices[Math.floor(Math.random() * nonCulturalIndices.length)];

        // Insert the review item at that position
        const combined = [...lesson.worksheet];
        combined.splice(randomPosition, 0, reviewItem);

        // Create mapping: combined[i] -> original[mapping[i]]
        // Items before review keep their index, review maps to -1, items after shift by -1
        const mapping: number[] = [];
        for (let i = 0; i < combined.length; i++) {
            if (i < randomPosition) {
                mapping.push(i); // Before review: same index
            } else if (i === randomPosition) {
                mapping.push(-1); // Review exercise
            } else {
                mapping.push(i - 1); // After review: shifted back by 1
            }
        }

        return { worksheetWithReview: combined, reviewExerciseIndex: randomPosition, indexMapping: mapping };
    }, [lesson.id, lesson.worksheet]);

    // Load worksheet progress from Firestore on mount
    useEffect(() => {
        const loadProgress = async () => {
            if (!user?.uid) {
                setIsLoadingProgress(false);
                return;
            }

            try {
                // Load progress saved with original indices
                const savedProgress = await firestoreService.getWorksheetProgress(user.uid, lesson.id);
                console.log('[Worksheet] Loaded saved progress:', savedProgress);
                console.log('[Worksheet] Index mapping:', indexMapping);

                // Map from original indices to current combined indices
                const mappedProgress: Record<number, any> = {};
                indexMapping.forEach((originalIdx, combinedIdx) => {
                    if (originalIdx !== -1 && savedProgress[originalIdx]) {
                        console.log(`[Worksheet] Mapping: original[${originalIdx}] -> combined[${combinedIdx}]`);
                        mappedProgress[combinedIdx] = savedProgress[originalIdx];
                    }
                });

                console.log('[Worksheet] Mapped progress to display:', mappedProgress);
                setSubmissionStatus(mappedProgress);
            } catch (error) {
                console.error('Failed to load worksheet progress:', error);
            } finally {
                setIsLoadingProgress(false);
            }
        };

        loadProgress();
    }, [user?.uid, lesson.id, indexMapping]);

    const handleAnswerChange = (exerciseIndex: number, answers: any) => {
        if (submissionStatus[exerciseIndex]) return;
        setUserAnswers(prev => ({ ...prev, [exerciseIndex]: answers }));
    };

    const handleCheckExercise = async (exerciseIndex: number) => {
        const exercise = worksheetWithReview[exerciseIndex];
        const answers = userAnswers[exerciseIndex];
        const isReviewExercise = exerciseIndex === reviewExerciseIndex;

        let exerciseResults: boolean[] = [];
        let correctCount = 0;

        switch (exercise.type) {
            case ExerciseType.MATCHING: {
                exerciseResults = exercise.pairs.map((pair, pIndex) => answers?.[pIndex] === pIndex);
                correctCount = exerciseResults.filter(Boolean).length;
                break;
            }
            case ExerciseType.FILL_IN_THE_BLANK: {
                exerciseResults = exercise.sentences.map((s, sIndex) => {
                    const correctOptions = s.correctAnswer.split('/').map(opt => opt.trim());
                    const userAnswer = answers?.[sIndex]?.trim() || '';
                    return correctOptions.includes(userAnswer);
                });
                correctCount = exerciseResults.filter(Boolean).length;
                break;
            }
            case ExerciseType.MULTIPLE_CHOICE: {
                exerciseResults = exercise.questions.map((q, qIndex) => answers?.[qIndex] === q.correctIndex);
                correctCount = exerciseResults.filter(Boolean).length;
                break;
            }
            case ExerciseType.JUMBLED_SENTENCE: {
                exerciseResults = exercise.sentences.map((s, sIndex) => {
                    const userOrder: string[] = answers?.[sIndex] || [];
                    if (userOrder.length !== s.correctOrder.length) return false;
                    return userOrder.every((tok, i) => tok === s.correctOrder[i]);
                });
                correctCount = exerciseResults.filter(Boolean).length;
                break;
            }
            case ExerciseType.CULTURAL_NOTE:
                return; // No checking needed for cultural notes
        }

        const submissionData = { type: exercise.type, results: exerciseResults };

        setSubmissionStatus(prev => ({
            ...prev,
            [exerciseIndex]: submissionData
        }));

        // Save to Firestore using original index (skip review exercises)
        const originalIndex = indexMapping[exerciseIndex];
        console.log(`[Worksheet] Saving: combined[${exerciseIndex}] -> original[${originalIndex}]`, submissionData);
        if (user?.uid && originalIndex !== -1) {
            try {
                await firestoreService.saveWorksheetExerciseSubmission(
                    user.uid,
                    lesson.id,
                    originalIndex,
                    submissionData
                );
                console.log('[Worksheet] Saved successfully');
            } catch (error) {
                console.error('Failed to save worksheet progress:', error);
            }
        } else {
            console.log('[Worksheet] Skipping save (review exercise or no user)');
        }

        if (user && correctCount > 0 && !isReviewExercise) {
            firestoreService.addPoints(user.uid, correctCount, "Worksheet");
            showPoints(correctCount);
        }
    };

    const handleResetExercise = async (exerciseIndex: number) => {
        setUserAnswers(prev => {
            const newAnswers = { ...prev };
            delete newAnswers[exerciseIndex];
            return newAnswers;
        });
        setSubmissionStatus(prev => {
            const newStatus = { ...prev };
            delete newStatus[exerciseIndex];
            return newStatus;
        });

        // Clear from Firestore using original index (skip review exercises)
        const originalIndex = indexMapping[exerciseIndex];
        if (user?.uid && originalIndex !== -1) {
            try {
                await firestoreService.clearWorksheetExerciseSubmission(
                    user.uid,
                    lesson.id,
                    originalIndex
                );
            } catch (error) {
                console.error('Failed to clear worksheet progress:', error);
            }
        }
    };
    
    const renderOverallProgress = () => {
        let totalCorrect = 0;
        let totalQuestions = 0;
        let submittedCount = 0;

        worksheetWithReview.forEach((exercise, index) => {
            if (exercise.type === ExerciseType.CULTURAL_NOTE) return;

            const isReviewExercise = index === reviewExerciseIndex;
            if (isReviewExercise) return;

            const submission = submissionStatus[index];
            if (!submission) return;

            submittedCount++;
            const results = submission.results || [];
            totalCorrect += results.filter(Boolean).length;

            switch (exercise.type) {
                case ExerciseType.MATCHING:
                    totalQuestions += exercise.pairs.length;
                    break;
                case ExerciseType.FILL_IN_THE_BLANK:
                    totalQuestions += exercise.sentences.length;
                    break;
                case ExerciseType.MULTIPLE_CHOICE:
                    totalQuestions += exercise.questions.length;
                    break;
                case ExerciseType.JUMBLED_SENTENCE:
                    totalQuestions += exercise.sentences.length;
                    break;
            }
        });

        if (submittedCount === 0) return null;

        const score = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
        const isPerfect = totalCorrect === totalQuestions;

        return (
            <div className="p-4 mb-8 text-center rounded-none bg-light-grey/50 border-light-grey border-2">
                <h2 className="text-2xl font-bold">{isPerfect ? UI_STRINGS.correct[language.code] : UI_STRINGS.results[language.code]}</h2>
                <p className="text-lg">{UI_STRINGS.scoreMessage[language.code].replace('{correct}', totalCorrect.toString()).replace('{total}', totalQuestions.toString()).replace('{percent}', score.toString())}</p>
            </div>
        );
    };

  if (isLoadingProgress) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-charcoal-ink/60">Loading worksheet...</div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {renderOverallProgress()}
      {worksheetWithReview.map((exercise, index) => {
        const isReviewExercise = index === reviewExerciseIndex;
        let exerciseContent;
        switch (exercise.type) {
            case ExerciseType.MATCHING:
                exerciseContent = <MatchingExercise 
                    data={exercise} 
                    lang={language.code}
                    answers={userAnswers[index]}
                    onChange={(answers: any) => handleAnswerChange(index, answers)}
                    submission={submissionStatus?.[index]}
                />;
                break;
            case ExerciseType.FILL_IN_THE_BLANK:
                exerciseContent = <FillInTheBlankExercise 
                    data={exercise} 
                    lang={language.code}
                    answers={userAnswers[index]}
                    onChange={(answers: any) => handleAnswerChange(index, answers)}
                    submission={submissionStatus?.[index]}
                />;
                break;
            case ExerciseType.MULTIPLE_CHOICE:
                exerciseContent = <MultipleChoiceExercise 
                    data={exercise} 
                    lang={language.code}
                    answers={userAnswers[index]}
                    onChange={(answers: any) => handleAnswerChange(index, answers)}
                    submission={submissionStatus?.[index]}
                />;
                break;
            case ExerciseType.CULTURAL_NOTE:
                exerciseContent = <CulturalNote data={exercise} lang={language.code} />;
                break;
            case ExerciseType.JUMBLED_SENTENCE:
                exerciseContent = <JumbledSentenceExercise
                    data={exercise}
                    lang={language.code}
                    answers={userAnswers[index]}
                    onChange={(answers: any) => handleAnswerChange(index, answers)}
                    submission={submissionStatus?.[index]}
                />;
                break;
            default:
                exerciseContent = null;
        }

        const isSubmitted = !!submissionStatus[index];
        const isCulturalNote = exercise.type === ExerciseType.CULTURAL_NOTE;

        return (
          <div key={index} className={`p-4 sm:p-6 border-b-2 border-light-grey last:border-b-0 ${isReviewExercise ? 'relative' : ''}`}>
             {isReviewExercise && (
                <div className="mb-4 bg-vibrant-orange/10 border border-vibrant-orange/30 p-3 rounded-none">
                    <p className="text-sm font-bold text-vibrant-orange uppercase tracking-wide">
                        Review Exercise (Not counted in score)
                    </p>
                </div>
             )}
             {exerciseContent}
             {!isCulturalNote && (
                <div className="flex justify-center mt-6">
                    {!isSubmitted ? (
                        <button
                            onClick={() => handleCheckExercise(index)}
                            className="bg-vibrant-orange text-warm-white font-bold py-2 px-6 uppercase active:scale-95 transition-transform rounded-none"
                        >
                            {UI_STRINGS.checkAnswers[language.code]}
                        </button>
                    ) : (
                        <button
                            onClick={() => handleResetExercise(index)}
                            className="bg-charcoal-ink text-warm-white font-bold py-2 px-6 uppercase active:scale-95 transition-transform rounded-none"
                        >
                            {UI_STRINGS.tryAgain[language.code]}
                        </button>
                    )}
                </div>
             )}
          </div>
        );
      })}
    </div>
  );
};