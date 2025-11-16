import React, { useState, useMemo, useEffect, useCallback } from 'react';
import type { Language, VocabularyItem } from '../types';
import { CheckIcon, XIcon, KeyboardIcon } from './Icons';
import { UI_STRINGS } from '../data/uiStrings';
import { romanizationToZhuyin, isZhuyinEnabled } from '../services/zhuyinService';

interface FlashcardsProps {
  cardSet: VocabularyItem[];
  language: Language;
  onCardResult: (card: VocabularyItem, result: 'correct' | 'incorrect') => void;
  onSetComplete: () => void;
  onExit: () => void;
  reviewCards?: Set<string>; // Optional set of Thai words that are review cards
}

const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

export const Flashcards: React.FC<FlashcardsProps> = ({ cardSet, language, onCardResult, onSetComplete, onExit, reviewCards }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showPhoneticOnFront, setShowPhoneticOnFront] = useState(true);
    const [showShortcuts, setShowShortcuts] = useState(true);
    const [zhuyinEnabled, setZhuyinEnabledState] = useState(false);

    const [unseenDeck, setUnseenDeck] = useState<VocabularyItem[]>(() => shuffleArray(cardSet));
    const [mistakeDeck, setMistakeDeck] = useState<VocabularyItem[]>([]);

    const [passTotal, setPassTotal] = useState(cardSet.length);
    const [passCurrent, setPassCurrent] = useState(1);

    const currentCard = unseenDeck[0];
    const isReviewCard = reviewCards ? reviewCards.has(currentCard?.thai) : false;

    // Check Zhuyin preference on mount
    useEffect(() => {
        setZhuyinEnabledState(isZhuyinEnabled());
    }, []);

    // Convert phonetic to Zhuyin if enabled
    const displayPhonetic = useMemo(() => {
        if (!currentCard) return '';
        return zhuyinEnabled ? romanizationToZhuyin(currentCard.phonetic) : currentCard.phonetic;
    }, [currentCard, zhuyinEnabled]);

    const processAnswer = useCallback((isCorrect: boolean) => {
        if (!currentCard) return;

        onCardResult(currentCard, isCorrect ? 'correct' : 'incorrect');

        const remainingUnseen = unseenDeck.slice(1);
        const updatedMistakes = isCorrect ? mistakeDeck : [...mistakeDeck, currentCard];

        setIsFlipped(false);

        // Use a timeout to allow the flip animation to start before the card changes
        setTimeout(() => {
            if (remainingUnseen.length > 0) {
                setUnseenDeck(remainingUnseen);
                setMistakeDeck(updatedMistakes);
                setPassCurrent(p => p + 1);
            } else if (updatedMistakes.length > 0) {
                // No more unseen cards, but there were mistakes. Start another review pass.
                // Keep looping until all cards are answered correctly.
                const newReviewDeck = shuffleArray(updatedMistakes);
                setUnseenDeck(newReviewDeck);
                setMistakeDeck([]); // Clear mistakes for the new review pass
                setPassTotal(newReviewDeck.length);
                setPassCurrent(1);
            } else {
                // No more unseen cards and no mistakes. The set is complete.
                onSetComplete();
            }
        }, 150); // 150ms delay

    }, [currentCard, onCardResult, unseenDeck, mistakeDeck, onSetComplete]);

    const handleCorrect = useCallback(() => processAnswer(true), [processAnswer]);
    const handleIncorrect = useCallback(() => processAnswer(false), [processAnswer]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!currentCard) return;

            switch (event.code) {
                case 'Space':
                    event.preventDefault();
                    setIsFlipped(prev => !prev);
                    break;
                case 'ArrowRight':
                case 'KeyG': // G for "Good"
                    event.preventDefault();
                    if(isFlipped) handleCorrect();
                    break;
                case 'ArrowLeft':
                case 'KeyW': // W for "Wrong"
                    event.preventDefault();
                    if(isFlipped) handleIncorrect();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentCard, isFlipped, handleCorrect, handleIncorrect]);

    if (!currentCard) {
        return (
            <div className="text-center">
                <h3 className="text-2xl font-bold">Set Complete!</h3>
                <p>Loading next set...</p>
            </div>
        );
    }
    
    const FrontContent = (
        <>
            <p className="font-thai text-5xl">{currentCard.thai}</p>
            {showPhoneticOnFront && <p className="text-xl text-charcoal-ink/50 mt-2">{displayPhonetic}</p>}
        </>
    );

    const BackContent = (
        <>
            <p className="text-3xl font-bold">{currentCard.translations[language.code]}</p>
            {!showPhoneticOnFront && <p className="text-xl text-warm-white/70 mt-2">{displayPhonetic}</p>}
        </>
    );

    const progressPercent = passTotal > 0 ? ((passCurrent - 1) / passTotal) * 100 : 0;

    return (
        <div className="w-full max-w-lg flex flex-col items-center">
            {/* Progress Bar */}
            <div className="w-full mb-4">
                <div className="flex justify-between items-center text-sm text-charcoal-ink/60 mb-1">
                    <span>Progress</span>
                    <span>Card {passCurrent} of {passTotal}</span>
                </div>
                <div className="w-full bg-light-grey h-2 rounded-none">
                    <div className="bg-vibrant-orange h-2 transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
                </div>
            </div>

            {/* Review Badge */}
            {isReviewCard && (
                <div className="w-full mb-3 bg-vibrant-orange/10 border border-vibrant-orange/30 p-2 rounded-none">
                    <p className="text-xs font-bold text-vibrant-orange uppercase tracking-wide text-center">
                        Review Card (From previous lessons)
                    </p>
                </div>
            )}

            {/* The Card */}
            <div 
                className="relative w-full h-64 border-4 border-vibrant-orange cursor-pointer mb-4 bg-warm-white rounded-none"
                onClick={() => setIsFlipped(!isFlipped)}
                style={{ perspective: '1000px' }}
                aria-live="polite"
            >
                {/* Front Side */}
                <div 
                    className="absolute w-full h-full flex flex-col items-center justify-center p-4 text-center transition-transform duration-500"
                    style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                    {FrontContent}
                </div>
                {/* Back Side */}
                 <div 
                    className="absolute w-full h-full flex flex-col items-center justify-center p-4 text-center bg-vibrant-orange text-warm-white transition-transform duration-500 rounded-none"
                    style={{ transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                    {BackContent}
                </div>
            </div>
            
            {/* Controls */}
            {isFlipped && (
                <div className="grid grid-cols-2 gap-4 w-full h-24">
                     <button onClick={handleIncorrect} className="flex flex-col items-center justify-center bg-warm-white text-charcoal-ink border-2 border-light-grey font-bold rounded-none active:scale-95 active:border-charcoal-ink transition-all">
                        <XIcon className="w-8 h-8 text-charcoal-ink/80"/>
                        <span className="mt-1 text-sm">{UI_STRINGS.flashcardWrong[language.code]}</span>
                     </button>
                      <button onClick={handleCorrect} className="flex flex-col items-center justify-center bg-warm-white text-vibrant-orange border-2 border-vibrant-orange font-bold rounded-none active:scale-95 active:bg-vibrant-orange/10 transition-colors">
                        <CheckIcon className="w-8 h-8 text-vibrant-orange"/>
                        <span className="mt-1 text-sm">{UI_STRINGS.flashcardRight[language.code]}</span>
                     </button>
                </div>
            )}
             {!isFlipped && (
                <div className="w-full h-24 flex items-center justify-center">
                    <p className="text-charcoal-ink/60">Click card to flip</p>
                </div>
            )}
            
            {/* Meta Controls and Info */}
            <div className="w-full text-xs text-charcoal-ink/50 mt-4 space-y-2">
                 <div className="flex justify-center items-center gap-4 flex-wrap">
                    <label className="flex items-center cursor-pointer select-none">
                        <input 
                            type="checkbox" 
                            checked={showPhoneticOnFront} 
                            onChange={() => setShowPhoneticOnFront(p => !p)} 
                            className="sr-only peer"
                        />
                        <div className="w-5 h-5 border-2 border-charcoal-ink/30 rounded-sm flex items-center justify-center mr-2 peer-checked:border-vibrant-orange peer-checked:bg-vibrant-orange transition-colors">
                            <CheckIcon className={`w-3 h-3 text-warm-white transition-opacity ${showPhoneticOnFront ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                        Show phonetics on front
                    </label>
                    <button onClick={() => setShowShortcuts(s => !s)} className="text-charcoal-ink/60 hover:underline">
                        {showShortcuts ? 'Hide shortcuts' : 'Show shortcuts'}
                    </button>
                    <button onClick={onExit} className="font-bold text-vibrant-orange hover:underline">
                        Exit Flashcards
                    </button>
                </div>
                {showShortcuts && (
                    <div className="hidden sm:flex items-center justify-center gap-2 p-2 bg-light-grey/50 rounded-md">
                        <KeyboardIcon className="w-4 h-4" />
                        <span>Shortcuts: <strong>Space</strong> to flip, <strong>←</strong> / <strong>W</strong> for wrong, <strong>→</strong> / <strong>G</strong> for right</span>
                    </div>
                )}
            </div>
        </div>
    );
};