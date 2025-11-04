import React, { useEffect, useState } from 'react';

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

interface PointsNotificationProps {
    points: number;
    notificationId: number;
    onComplete: (id: number) => void;
}

const COLORS = ['#FF6B35', '#F7931E', '#FDB913', '#FFD700'];

export const PointsNotification: React.FC<PointsNotificationProps> = ({ points, notificationId, onComplete }) => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        let isMounted = true; // Track if component is mounted
        let animationFrameId: number | null = null;
        let initialFrameId: number | null = null;
        
        // Wait for next animation frame to ensure component is painted before starting animation
        initialFrameId = requestAnimationFrame(() => {
            if (!isMounted) return;
            
            // Generate particles
            const newParticles: Particle[] = [];
            const particleCount = 12;
            
            for (let i = 0; i < particleCount; i++) {
                const angle = (Math.PI * 2 * i) / particleCount;
                const velocity = 2 + Math.random() * 2;
                newParticles.push({
                    id: i,
                    x: 0,
                    y: 0,
                    color: COLORS[Math.floor(Math.random() * COLORS.length)],
                    velocity: {
                        x: Math.cos(angle) * velocity,
                        y: Math.sin(angle) * velocity - 1, // Slight upward bias
                    },
                    rotation: Math.random() * 360,
                    rotationSpeed: (Math.random() - 0.5) * 10,
                    scale: 0.6 + Math.random() * 0.4,
                });
            }
            setParticles(newParticles);

            // Animate particles
            let frame = 0;
            const gravity = 0.15;
            
            const animate = () => {
                frame++;
                
                if (!isMounted) return;
                
                setParticles(prev => 
                    prev.map(p => {
                        // Apply gravity to velocity
                        const newVelocity = {
                            x: p.velocity.x * 0.99, // Air resistance
                            y: p.velocity.y + gravity, // Gravity acceleration
                        };
                        return {
                            ...p,
                            x: p.x + newVelocity.x,
                            y: p.y + newVelocity.y,
                            velocity: newVelocity,
                            rotation: p.rotation + p.rotationSpeed,
                            scale: p.scale * 0.97, // Fade out
                        };
                    })
                );

                if (frame < 50 && isMounted) {
                    animationFrameId = requestAnimationFrame(animate);
                }
            };
            animationFrameId = requestAnimationFrame(animate);
        });

        // Fade out text
        const fadeTimer = setTimeout(() => {
            if (isMounted) setOpacity(0);
        }, 800);

        // Complete animation
        const completeTimer = setTimeout(() => {
            if (isMounted) onComplete(notificationId);
        }, 1500);
        
        // Cleanup function to prevent memory leaks
        return () => {
            isMounted = false;
            if (initialFrameId !== null) {
                cancelAnimationFrame(initialFrameId);
            }
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete, notificationId]);

    return (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
            <div className="relative">
                {/* Points text */}
                <div 
                    className="text-3xl font-bold text-vibrant-orange transition-all duration-500"
                    style={{ 
                        opacity,
                        transform: `translateY(${opacity === 0 ? '-20px' : '0px'})`,
                    }}
                >
                    +{points} {points === 1 ? 'Point' : 'Points'}
                </div>
                
                {/* Particles */}
                {particles.map(p => (
                    <div
                        key={p.id}
                        className="absolute top-1/2 left-1/2 w-3 h-3 rounded-sm"
                        style={{
                            backgroundColor: p.color,
                            transform: `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg) scale(${p.scale})`,
                            transformOrigin: 'center',
                            opacity: Math.max(0, Math.min(1, p.scale * 1.5)), // Fix: Fade out particles as they shrink
                            willChange: 'transform, opacity', // Fix: Optimize rendering performance
                            boxShadow: `0 0 4px ${p.color}`, // Fix: Add glow effect for better visibility
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

