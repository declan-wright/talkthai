import React, { useEffect, useState } from 'react';
import type { Language } from '../types';

interface Particle {
    id: number;
    x: number;
    y: number;
    color: string;
    velocity: { x: number; y: number };
    rotation: number;
    rotationSpeed: number;
    scale: number;
}

interface StreakCelebrationProps {
    isOpen: boolean;
    onClose: () => void;
    streakDays: number;
    bonusPoints: number;
    language: Language;
}

const COLORS = ['#FF6B35', '#F7931E', '#FDB913', '#FFD700'];

const STREAK_STRINGS = {
    title: {
        en: 'Congratulations',
        fr: 'Félicitations',
        'pt-BR': 'Parabéns',
        'zh-TW': '恭喜',
    },
    streakExtended: {
        en: (days: number) => `You've extended your streak to ${days} ${days === 1 ? 'day' : 'days'}`,
        fr: (days: number) => `Vous avez étendu votre série à ${days} ${days === 1 ? 'jour' : 'jours'}`,
        'pt-BR': (days: number) => `Você estendeu sua sequência para ${days} ${days === 1 ? 'dia' : 'dias'}`,
        'zh-TW': (days: number) => `你已將連勝延長至 ${days} 天`,
    },
    bonusAwarded: {
        en: (points: number) => `We've awarded you ${points} bonus ${points === 1 ? 'point' : 'points'}`,
        fr: (points: number) => `Nous vous avons attribué ${points} ${points === 1 ? 'point bonus' : 'points bonus'}`,
        'pt-BR': (points: number) => `Nós concedemos ${points} ${points === 1 ? 'ponto bônus' : 'pontos bônus'}`,
        'zh-TW': (points: number) => `我們已授予您 ${points} 點獎勵積分`,
    },
    continue: {
        en: 'Continue',
        fr: 'Continuer',
        'pt-BR': 'Continuar',
        'zh-TW': '繼續',
    },
};

export const StreakCelebration: React.FC<StreakCelebrationProps> = ({
    isOpen,
    onClose,
    streakDays,
    bonusPoints,
    language,
}) => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        if (!isOpen) return;

        let isMounted = true;
        let animationFrameId: number | null = null;
        let initialFrameId: number | null = null;

        initialFrameId = requestAnimationFrame(() => {
            if (!isMounted) return;

            // Generate particles
            const newParticles: Particle[] = [];
            const particleCount = 30;

            for (let i = 0; i < particleCount; i++) {
                const angle = (Math.PI * 2 * i) / particleCount;
                const velocity = 3 + Math.random() * 3;
                newParticles.push({
                    id: i,
                    x: 0,
                    y: 0,
                    color: COLORS[Math.floor(Math.random() * COLORS.length)],
                    velocity: {
                        x: Math.cos(angle) * velocity,
                        y: Math.sin(angle) * velocity - 2,
                    },
                    rotation: Math.random() * 360,
                    rotationSpeed: (Math.random() - 0.5) * 10,
                    scale: 0.6 + Math.random() * 0.6,
                });
            }
            setParticles(newParticles);

            // Animate particles
            let frame = 0;
            const gravity = 0.2;

            const animate = () => {
                frame++;

                if (!isMounted) return;

                setParticles((prev) =>
                    prev.map((p) => {
                        const newVelocity = {
                            x: p.velocity.x * 0.99,
                            y: p.velocity.y + gravity,
                        };
                        return {
                            ...p,
                            x: p.x + newVelocity.x,
                            y: p.y + newVelocity.y,
                            velocity: newVelocity,
                            rotation: p.rotation + p.rotationSpeed,
                            scale: p.scale * 0.97,
                        };
                    })
                );

                if (frame < 80 && isMounted) {
                    animationFrameId = requestAnimationFrame(animate);
                }
            };
            animationFrameId = requestAnimationFrame(animate);
        });

        return () => {
            isMounted = false;
            if (initialFrameId !== null) {
                cancelAnimationFrame(initialFrameId);
            }
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const langCode = language.code;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-charcoal-ink border-2 border-vibrant-orange w-full max-w-md relative">
                {/* Confetti particles positioned at modal center */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                    <div className="relative">
                        {particles.map((p) => (
                            <div
                                key={p.id}
                                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-sm"
                                style={{
                                    backgroundColor: p.color,
                                    transform: `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg) scale(${p.scale})`,
                                    transformOrigin: 'center',
                                    opacity: Math.max(0, Math.min(1, p.scale * 1.5)),
                                    willChange: 'transform, opacity',
                                    boxShadow: `0 0 4px ${p.color}`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 relative z-10">
                    <div className="text-center">
                        <h2 className="font-heading text-2xl sm:text-3xl text-warm-white uppercase mb-3 sm:mb-4">
                            {STREAK_STRINGS.title[langCode]}
                        </h2>
                        <p className="text-warm-white text-base sm:text-lg mb-2 sm:mb-3 px-2">
                            {STREAK_STRINGS.streakExtended[langCode](streakDays)}
                        </p>
                        <p className="text-vibrant-orange text-lg sm:text-xl font-bold mb-6 sm:mb-8 px-2">
                            {STREAK_STRINGS.bonusAwarded[langCode](bonusPoints)}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full px-6 py-3 bg-vibrant-orange text-warm-white font-bold uppercase hover:bg-vibrant-orange/90 transition-colors"
                    >
                        {STREAK_STRINGS.continue[langCode]}
                    </button>
                </div>
            </div>
        </div>
    );
};
