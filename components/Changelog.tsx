import React from 'react';
import { XIcon } from './Icons';

interface ChangelogProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Changelog: React.FC<ChangelogProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-charcoal-ink border-2 border-warm-white/20 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
                <div className="sticky top-0 bg-charcoal-ink border-b border-warm-white/20 p-4 flex justify-between items-center">
                    <h2 className="font-heading text-2xl text-warm-white uppercase">release notes</h2>
                    <button onClick={onClose} className="text-warm-white/60 hover:text-warm-white">
                        <XIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6 space-y-8">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-warm-white/80 text-sm font-bold">version 1.0</h3>
                            <span className="text-warm-white/50 text-xs">tuesday, nov 4 2025</span>
                        </div>
                        <p className="text-warm-white/70 text-sm">app released! enjoy.</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-warm-white/80 text-sm font-bold">version 1.1</h3>
                            <span className="text-warm-white/50 text-xs">thursday, nov 6 2025</span>
                        </div>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-warm-white/80 font-semibold mb-2">new things:</p>
                                <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                    <li>5 new lessons (1.6-1.10)</li>
                                    <li>audio analysis & structured feedback for conversations</li>
                                    <li>new cultural note added to lesson 1.4 on the verb len</li>
                                    <li>back gesture support added on android and ios</li>
                                    <li>install app from homepage</li>
                                    <li>new random option for no review cards in lessons</li>
                                    <li>all new rendering engine for handwriting practice, use on tablets for best results</li>
                                    <li>new shame wall mercy rule: 2,000+ points/week keeps you off the wall, even if you're in last place</li>
                                    <li>added ability to switch between "profile pictures" for other users</li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-warm-white/80 font-semibold mb-2">issues/fixes:</p>
                                <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                    <li>flashcard sets now worth 5 points</li>
                                    <li>lesson 1.1: "yang" → "not yet" (vocab)</li>
                                    <li>lesson 1.4: "nawn" → "non" (romanization)</li>
                                    <li>fixed shame wall issue with color tinting</li>
                                    <li>solved logic concern that gave people with high streaks too many points</li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-warm-white/80 font-semibold mb-2">coming soon:</p>
                                <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                    <li>more lessons: 1.11 through 1.20 will be coming in the next few days</li>
                                    <li>more reading lessons soon also! very important more reading practice (lessons 6 & 8)</li>
                                    <li>bug fix for issue with saved handwiring anaylisis</li>
                                    <li>looking ahead to version 2.0: culture lessons, i'm very excited about this! you'll be able to learn vocabulary directly from music videos, movies, tiktok, and recent news events! any ideas on how to implement this are appreciated as i work on how to build out this feature</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-warm-white/80 text-sm font-bold">version 1.2.0</h3>
                            <span className="text-warm-white/50 text-xs">friday, nov 8 2025</span>
                        </div>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-warm-white/80 font-semibold mb-2">new things:</p>
                                <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                    <li>conversation progress tracking - see how many times you've practiced each scenario (10 practices per lesson)</li>
                                    <li>overall conversation progress bar showing total completion percentage</li>
                                    <li>total time spent in conversations displayed at the top of conversation selector</li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-warm-white/80 font-semibold mb-2">issues/fixes:</p>
                                <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                    <li>fixed API keys and security rules</li>
                                    <li>fixed bug with handwriting analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-warm-white/80 text-sm font-bold">version 1.2.1</h3>
                            <span className="text-warm-white/50 text-xs">thursday, nov 7 2025</span>
                        </div>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-warm-white/80 font-semibold mb-2">new things:</p>
                                <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                    <li>10 new lessons (1.11-1.20)</li>
                                    <li>new unit 2 with first lesson (2.0)</li>
                                    <li>logarithmic streak bonuses - earn up to 100 bonus points per day for maintaining long streaks</li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-warm-white/80 font-semibold mb-2">issues/fixes:</p>
                                <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                    <li>fixed color of completed lessons on home page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
