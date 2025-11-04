import React, { useEffect, useState } from 'react';

interface CoinFlipAnimationProps {
    result: 'double' | 'nothing';
    onComplete: () => void;
}

export const CoinFlipAnimation: React.FC<CoinFlipAnimationProps> = ({ result, onComplete }) => {
    const [flipping, setFlipping] = useState(true);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        // Flip for 2 seconds
        const flipTimer = setTimeout(() => {
            setFlipping(false);
            setShowResult(true);
        }, 2000);

        // Show result for 1.5 seconds, then complete
        const completeTimer = setTimeout(() => {
            onComplete();
        }, 3500);

        return () => {
            clearTimeout(flipTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    const isWin = result === 'double';

    return (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[60]">
            <div className="text-center">
                {/* Coin */}
                <div className="flex items-center justify-center mb-8">
                    <div 
                        className={`relative w-32 h-32 ${flipping ? 'animate-coin-flip' : ''}`}
                        style={{
                            transformStyle: 'preserve-3d',
                            animation: flipping ? 'coinFlip 0.5s linear infinite' : 'none'
                        }}
                    >
                        {/* Coin Face */}
                        <div 
                            className={`absolute inset-0 border-4 flex items-center justify-center font-heading text-5xl transition-all duration-500 ${
                                showResult 
                                    ? isWin 
                                        ? 'bg-vibrant-orange border-vibrant-orange text-warm-white scale-110' 
                                        : 'bg-warm-white/10 border-warm-white/20 text-warm-white/40 scale-90'
                                    : 'bg-warm-white border-vibrant-orange text-charcoal-ink'
                            }`}
                            style={{
                                clipPath: 'circle(50%)',
                            }}
                        >
                            {showResult ? (isWin ? '2X' : '0') : '?'}
                        </div>
                    </div>
                </div>

                {/* Text */}
                {showResult && (
                    <div className="animate-fade-in">
                        <p className={`font-heading text-4xl uppercase mb-2 ${isWin ? 'text-vibrant-orange' : 'text-warm-white/40'}`}>
                            {isWin ? 'DOUBLED!' : 'NOTHING!'}
                        </p>
                        <p className="text-warm-white/60 text-lg">
                            {isWin ? 'Your points have been doubled' : 'All weekly points lost'}
                        </p>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes coinFlip {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(360deg); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-coin-flip {
                    animation: coinFlip 0.5s linear infinite;
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
        </div>
    );
};

