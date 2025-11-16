import React, { useState, useMemo, useEffect } from 'react';
import { Language, Lesson, VocabularyItem } from '../types';
import { UI_STRINGS } from '../data/uiStrings';
import { Flashcards } from './Flashcards';
import { SparklesIcon } from './Icons';
import { useAuth } from '../contexts/AuthContext';
import { usePoints } from '../contexts/PointsContext';
import * as firestoreService from '../services/firestoreService';
import { UNITS } from '../data/curriculum/units';
import { getReviewVocabulary } from '../utils/spacedRepetition';
import { romanizationToZhuyin, isZhuyinEnabled } from '../services/zhuyinService';

interface VocabularyProps {
    lesson: Lesson;
    language: Language;
    onStudyStateChange: (isStudying: boolean) => void;
}

const ProgressRow: React.FC<{ color: string; label: string; count: number }> = ({ color, label, count }) => (
    <div className="flex items-center justify-between text-sm">
        <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-3 ${color}`}></div>
            <span>{label}</span>
        </div>
        <span className="font-bold">{count}</span>
    </div>
);

const StudyProgress: React.FC<{ progress: { new: number, learning: number, almost: number, mastered: number }, total: number, language: Language }> = ({ progress, total, language }) => {
    // Calculate mastery with partial credit: learning = 1/3, almost = 2/3, mastered = 3/3
    const masteredPercent = total > 0
        ? Math.round(((progress.learning * (1/3) + progress.almost * (2/3) + progress.mastered) / total) * 100)
        : 0;
    
    return (
        <div className="bg-warm-white p-4 mb-6 border border-light-grey text-charcoal-ink rounded-none">
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-heading text-2xl">Studying Progress</h3>
                <span className="font-bold text-lg text-charcoal-ink/80">{masteredPercent}% Mastered</span>
            </div>
            <div className="w-full bg-light-grey h-2 mb-4 rounded-none">
                <div className="bg-vibrant-orange h-2" style={{ width: `${masteredPercent}%` }}></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                <ProgressRow color="bg-charcoal-ink/30" label={UI_STRINGS.progressNew[language.code]} count={progress.new} />
                <ProgressRow color="bg-vibrant-orange/40" label={UI_STRINGS.progressLearning[language.code]} count={progress.learning} />
                <ProgressRow color="bg-vibrant-orange/70" label={UI_STRINGS.progressAlmost[language.code]} count={progress.almost} />
                <ProgressRow color="bg-vibrant-orange" label={UI_STRINGS.progressMastered[language.code]} count={progress.mastered} />
            </div>
        </div>
    );
};

const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

export const Vocabulary: React.FC<VocabularyProps> = ({ lesson, language, onStudyStateChange }) => {
    const { user, userProfile, updateUserProfile } = useAuth();
    const { showPoints } = usePoints();
    const [isStudying, setIsStudying] = useState(false);
    const [seenInSession, setSeenInSession] = useState<Set<string>>(new Set());
    const [activeSet, setActiveSet] = useState<VocabularyItem[]>([]);
    const [reviewCards, setReviewCards] = useState<Set<string>>(new Set()); // Track which cards are review cards
    const [zhuyinEnabled, setZhuyinEnabledState] = useState(false);
    const [mistakesInSession, setMistakesInSession] = useState<Record<string, number>>({}); // Track mistakes per word
    const [practicingStarredOnly, setPracticingStarredOnly] = useState(false); // Track if practicing starred cards only

    // Local state for starred words with optimistic updates
    const [localStarredWords, setLocalStarredWords] = useState<Set<string>>(new Set());

    // Sync local starred words with userProfile
    useEffect(() => {
        setLocalStarredWords(new Set(userProfile?.starredWords || []));
    }, [userProfile?.starredWords]);

    // Check Zhuyin preference on mount
    useEffect(() => {
        setZhuyinEnabledState(isZhuyinEnabled());
    }, []);

    const studyProgress = useMemo(() => {
        return userProfile?.flashcardProgress?.[lesson.id] || {};
    }, [userProfile, lesson.id]);

    // Use local starred words for immediate UI updates
    const starredWords = localStarredWords;

    useEffect(() => {
        onStudyStateChange(isStudying);
    }, [isStudying, onStudyStateChange]);

    const totalCards = lesson.vocabulary.length;

    const progressCounts = useMemo(() => {
        let counts = { new: 0, learning: 0, almost: 0, mastered: 0 };
        for (const item of lesson.vocabulary) {
            const streak = studyProgress[item.thai] || 0;
            
            if (streak >= 3) {
                counts.mastered++;
            } else if (streak === 1 || streak === 2) {
                counts.almost++;
            } else if (streak === 0 && studyProgress.hasOwnProperty(item.thai)) {
                // hasOwnProperty check distinguishes unseen (new) from seen-but-wrong (learning)
                counts.learning++;
            } else {
                counts.new++;
            }
        }
        return counts;
    }, [studyProgress, lesson.vocabulary]);
    
    const toggleStarWord = async (thaiWord: string) => {
        if (!user) return;

        const currentStarred = userProfile?.starredWords || [];
        const newStarred = currentStarred.includes(thaiWord)
            ? currentStarred.filter(w => w !== thaiWord)
            : [...currentStarred, thaiWord];

        // Optimistically update local state immediately for instant UI feedback
        setLocalStarredWords(new Set(newStarred));

        try {
            await updateUserProfile({
                starredWords: newStarred
            });
        } catch (error) {
            console.error('Failed to update starred words:', error);
            // Revert optimistic update on error
            setLocalStarredWords(new Set(currentStarred));
        }
    };

    const generateAndSetActiveSet = (currentProgress: Record<string, number>, starredOnly: boolean = false) => {
        const SET_SIZE = 7;

        // If practicing starred only, filter to starred words
        let availableVocab = starredOnly
            ? lesson.vocabulary.filter(item => starredWords.has(item.thai))
            : lesson.vocabulary;

        const notMastered = availableVocab.filter(item => (currentProgress[item.thai] || 0) < 3);

        const learningCards = notMastered.filter(item => (currentProgress[item.thai] || 0) === 0 && currentProgress.hasOwnProperty(item.thai));
        const almostCards = notMastered.filter(item => (currentProgress[item.thai] || 0) > 0);
        const newCards = notMastered.filter(item => !currentProgress.hasOwnProperty(item.thai));

        let potentialSet = [ ...learningCards, ...almostCards, ...newCards ];

        if (starredOnly) {
            // If practicing starred only, don't include review cards from other lessons
            let nextSet = shuffleArray(potentialSet).slice(0, SET_SIZE);
            if (nextSet.length > 0) {
                setActiveSet(nextSet);
                setReviewCards(new Set());
            } else {
                setIsStudying(false);
            }
            return;
        }

        // 20% chance to skip review cards
        const skipReviewCards = Math.random() < 0.2;

        // Get review cards from previous lessons (unless skipping)
        const reviewVocab = skipReviewCards ? [] : getReviewVocabulary(UNITS, lesson.id, starredWords);
        const reviewCardsSet = new Set(reviewVocab.map(v => v.thai));

        // Calculate how many cards from current lesson to include
        const currentLessonCardCount = Math.min(SET_SIZE - reviewVocab.length, potentialSet.length);

        // Select cards from current lesson
        let nextSet = shuffleArray(potentialSet).slice(0, currentLessonCardCount);

        // Add review cards (if not skipping)
        nextSet = [...nextSet, ...reviewVocab];

        // Shuffle the combined set
        nextSet = shuffleArray(nextSet);

        if (nextSet.length > 0) {
            setActiveSet(nextSet);
            setReviewCards(reviewCardsSet);
        } else {
            setIsStudying(false);
        }
    };
    
    const handleStartSession = (starredOnly: boolean = false) => {
        let progress = studyProgress;
        if (progressCounts.mastered === totalCards) {
            progress = {};
            if (user) {
                updateUserProfile({
                    flashcardProgress: {
                        ...userProfile?.flashcardProgress,
                        [lesson.id]: {}
                    }
                });
            }
        }
        generateAndSetActiveSet(progress, starredOnly);
        setIsStudying(true);
        setSeenInSession(new Set());
        setMistakesInSession({});
        setPracticingStarredOnly(starredOnly);
    };

    const handleCardResult = async (card: VocabularyItem, result: 'correct' | 'incorrect') => {
        if (!user) return;

        const { thai } = card;

        // Track mistakes for auto-starring
        if (result === 'incorrect') {
            const newMistakeCount = (mistakesInSession[thai] || 0) + 1;
            setMistakesInSession(prev => ({ ...prev, [thai]: newMistakeCount }));
            console.log(`Word "${thai}" mistake count: ${newMistakeCount}`);

            // Auto-star if 3 or more mistakes during this session
            if (newMistakeCount >= 3 && !starredWords.has(thai)) {
                console.log(`Auto-starring word "${thai}" after ${newMistakeCount} mistakes`);
                await toggleStarWord(thai);
            }
        }

        // Don't update progress for review cards (from previous lessons)
        if (reviewCards.has(thai)) {
            setSeenInSession(prev => new Set(prev).add(thai));
            return;
        }

        const currentStreak = studyProgress[thai] || 0;
        const newStreak = result === 'correct' ? currentStreak + 1 : 0;

        const updatedLessonProgress = { ...studyProgress, [thai]: newStreak };

        try {
            await updateUserProfile({
                flashcardProgress: {
                    ...userProfile?.flashcardProgress,
                    [lesson.id]: updatedLessonProgress
                }
            });
        } catch (error) {
            console.error('Failed to save flashcard progress:', error);
        }
        setSeenInSession(prev => new Set(prev).add(thai));
    };
    
    const handleSetComplete = () => {
        if (user) {
            firestoreService.addPoints(user.uid, 5, 'Flashcard Set');
            showPoints(5);
        }
        setIsStudying(false);
    };

    if (isStudying) {
        return (
             <div className="flex flex-col items-center justify-center h-full p-4">
                <Flashcards
                    key={activeSet.map(c => c.thai).join('-')}
                    cardSet={activeSet}
                    language={language}
                    onCardResult={handleCardResult}
                    onSetComplete={handleSetComplete}
                    onExit={() => setIsStudying(false)}
                    reviewCards={reviewCards}
                />
            </div>
        )
    }

    const allMastered = progressCounts.mastered === totalCards;
    const buttonText = allMastered
        ? UI_STRINGS.practiceFlashcards[language.code]
        : (Object.keys(studyProgress).length > 0 ? UI_STRINGS.continuePracticing[language.code] : UI_STRINGS.practiceFlashcards[language.code]);

    const hasStarredWords = starredWords.size > 0;
    const starredWordsInLesson = lesson.vocabulary.filter(item => starredWords.has(item.thai)).length;

    return (
        <div>
            {totalCards > 0 && <StudyProgress progress={progressCounts} total={totalCards} language={language} />}
            <div className="flex justify-end mb-6 gap-3">
                {hasStarredWords && starredWordsInLesson > 0 && (
                    <button
                        onClick={() => handleStartSession(true)}
                        disabled={starredWordsInLesson === 0}
                        className="bg-vibrant-orange text-warm-white font-bold py-2 px-4 uppercase text-sm flex items-center gap-2 active:scale-95 transition-transform disabled:bg-vibrant-orange/50 rounded-none"
                    >
                        <SparklesIcon />
                        Practice Starred Flashcards Only
                    </button>
                )}
                <button
                    onClick={() => handleStartSession(false)}
                    disabled={totalCards === 0}
                    className="bg-vibrant-orange text-warm-white font-bold py-2 px-4 uppercase text-sm flex items-center gap-2 active:scale-95 transition-transform disabled:bg-vibrant-orange/50 rounded-none"
                >
                    <SparklesIcon />
                    {buttonText}
                </button>
            </div>
            <div className="space-y-3">
                {lesson.vocabulary.map((item, index) => {
                    const displayPhonetic = zhuyinEnabled ? romanizationToZhuyin(item.phonetic) : item.phonetic;
                    const isStarred = starredWords.has(item.thai);
                    return (
                        <div
                            key={index}
                            onClick={() => toggleStarWord(item.thai)}
                            className="grid grid-cols-3 gap-4 p-3 border-b border-light-grey items-center cursor-pointer hover:bg-warm-white/50 transition-colors"
                        >
                            <div className={`font-thai text-xl ${isStarred ? 'text-vibrant-orange' : ''}`}>{item.thai}</div>
                            <div className={`${isStarred ? 'text-vibrant-orange' : 'text-charcoal-ink/60'}`}>{displayPhonetic}</div>
                            <div className={`${isStarred ? 'text-vibrant-orange' : 'text-charcoal-ink/80'}`}>{item.translations[language.code]}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};