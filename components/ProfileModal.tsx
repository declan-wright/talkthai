import React, { useEffect, useMemo, useState } from 'react';
import type { UserProfile } from '../types';
import * as firestoreService from '../services/firestoreService';
import { getCurrentWeekId } from '../utils/dateUtils';
import { TrophyIcon, FlashIcon, XIcon } from './Icons';
import { CoinFlipAnimation } from './CoinFlipAnimation';

const FALLBACK_AVATARS = [
    '/avatar1.jpg',
    '/avatar2.jpg',
    '/avatar3.jpg',
    '/avatar4.jpg',
];

interface ProfileModalProps {
    selectedUserId: string;
    currentUserId: string;
    currentUserProfile: UserProfile;
    onClose: () => void;
    onActionCompleted?: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ selectedUserId, currentUserId, currentUserProfile, onClose, onActionCompleted }) => {
    // All hooks must be declared before any early returns
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [donateAmount, setDonateAmount] = useState<number>(0);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [imageError, setImageError] = useState(false);
    const [coinFlipResult, setCoinFlipResult] = useState<'double' | 'nothing' | null>(null);

    const isSelf = selectedUserId === currentUserId;
    const weekId = getCurrentWeekId();

    const currentUserWeekly = useMemo(() => currentUserProfile?.weeklyPoints?.[weekId] || 0, [currentUserProfile, weekId]);

    useEffect(() => {
        let mounted = true;
        const run = async () => {
            setLoading(true);
            setError(null);
            try {
            const p = await firestoreService.getUserProfile(selectedUserId);
            if (mounted) {
                setProfile(p);
                }
            } catch (e: any) {
                if (mounted) {
                    setError(e?.message || 'Failed to load profile.');
                    setProfile(null);
                }
            } finally {
                if (mounted) setLoading(false);
            }
        };
        run();
        return () => {
            mounted = false;
        };
    }, [selectedUserId]);

    if (loading) {
        return (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                <div className="bg-charcoal-ink border border-warm-white/10 p-6 w-full max-w-md text-warm-white rounded-none text-center">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <div className="bg-charcoal-ink border border-warm-white/10 p-6 w-full max-w-md text-warm-white text-center">
                    <p className="mb-4">{error}</p>
                    <button onClick={onClose} className="px-4 py-2 bg-vibrant-orange text-warm-white font-bold uppercase">Close</button>
                </div>
            </div>
        );
    }

    if (!profile) return null;

    const weeklyPoints = profile.weeklyPoints?.[weekId] || 0;

    const handleDonate = async () => {
        const amt = Math.floor(donateAmount);
        if (amt <= 0) return;
        if (amt > currentUserWeekly) {
            alert('You do not have enough weekly points.');
            return;
        }
        try {
            setBusy(true);
            await firestoreService.donateWeeklyPoints(currentUserId, selectedUserId, amt);
            await firestoreService.postChatMessage({ uid: null, displayName: 'System', text: `${currentUserProfile.displayName || currentUserProfile.firstName} donated ${amt} points to ${profile.displayName || profile.firstName}.`, isSystem: true });
            onActionCompleted && onActionCompleted();
            onClose();
        } catch (e: any) {
            alert(e?.message || 'Donation failed');
        } finally {
            setBusy(false);
        }
    };

    const handleStreakEnder = async () => {
        if (currentUserWeekly < 500) {
            alert('You need 500 weekly points to end a streak.');
            return;
        }
        if (!confirm(`Spend 500 points to end ${profile.displayName || profile.firstName}'s streak?`)) return;
        try {
            setBusy(true);
            await firestoreService.endUserStreak(currentUserId, selectedUserId);
            await firestoreService.postChatMessage({ uid: null, displayName: 'System', text: `${currentUserProfile.displayName || currentUserProfile.firstName} ended ${profile.displayName || profile.firstName}'s streak.`, isSystem: true });
            onActionCompleted && onActionCompleted();
            onClose();
        } catch (e: any) {
            alert(e?.message || 'Action failed');
        } finally {
            setBusy(false);
        }
    };

    const handleDeleteAllPoints = async () => {
        if (!confirm('Are you sure you want to delete all your points? This cannot be undone.')) return;
        try {
            setBusy(true);
            await firestoreService.deleteAllPointsForUser(currentUserId);
            await firestoreService.postChatMessage({ uid: null, displayName: 'System', text: `${currentUserProfile.displayName || currentUserProfile.firstName} deleted all their points. Bold move.`, isSystem: true });
            onActionCompleted && onActionCompleted();
            onClose();
        } finally {
            setBusy(false);
        }
    };

    const handleDoubleOrNothing = async () => {
        if (!confirm('Double or nothing your weekly points?')) return;
        try {
            setBusy(true);
            const result = await firestoreService.doubleOrNothingWeekly(currentUserId);
            
            // Show coin flip animation
            setCoinFlipResult(result);
            
            // Post to chat after animation completes
            const name = currentUserProfile.displayName || currentUserProfile.firstName;
            if (result === 'double') {
                await firestoreService.postChatMessage({ uid: null, displayName: 'System', text: `${name} doubled their weekly points in a coin flip!`, isSystem: true });
            } else {
                await firestoreService.postChatMessage({ uid: null, displayName: 'System', text: `${name} lost everything in a coin flip. Ouch.`, isSystem: true });
            }
        } finally {
            setBusy(false);
        }
    };

    const handleCoinFlipComplete = () => {
        setCoinFlipResult(null);
        onActionCompleted && onActionCompleted();
        onClose();
    };

    const handleLoan = async () => {
        if (!confirm('Take a 50-point loan now and start next week at -75?')) return;
        try {
            setBusy(true);
            await firestoreService.requestLoanPoints(currentUserId);
            await firestoreService.postChatMessage({ uid: null, displayName: 'System', text: `${currentUserProfile.displayName || currentUserProfile.firstName} loaned points to get ahead. Next week starts at -75.`, isSystem: true });
            onActionCompleted && onActionCompleted();
            onClose();
        } catch (e: any) {
            alert(e?.message || 'Loan failed');
        } finally {
            setBusy(false);
        }
    };

    // Fallback avatar
    const getFallbackAvatar = () => {
        const hash = selectedUserId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return FALLBACK_AVATARS[hash % FALLBACK_AVATARS.length];
    };

    const displayName = profile.firstName || profile.displayName;

    return (
        <>
            {coinFlipResult && (
                <CoinFlipAnimation result={coinFlipResult} onComplete={handleCoinFlipComplete} />
            )}
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-charcoal-ink border border-warm-white/10 p-6 w-full max-w-md text-warm-white relative rounded-none" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-warm-white/60 hover:text-warm-white z-10">
                    <XIcon className="w-6 h-6" />
                </button>

                {/* Profile header */}
                <div className="flex items-center gap-4 mb-6">
                    {(!profile.photoURL || imageError) ? (
                        <img src={getFallbackAvatar()} alt={displayName} className="w-16 h-16 rounded-full border-2 border-vibrant-orange object-cover" />
                    ) : (
                        <img src={profile.photoURL} alt={displayName} className="w-16 h-16 rounded-full border-2 border-vibrant-orange object-cover" onError={() => setImageError(true)} />
                    )}
                    <div className="flex-grow">
                        <h3 className="font-heading text-3xl uppercase">{displayName}</h3>
                        <p className="font-thai text-warm-white/40 text-xl">{profile.thaiName || 'ไม่มีชื่อไทย'}</p>
                    </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-warm-white/5 border border-warm-white/10 p-4 text-center rounded-none">
                        <p className="text-xs text-warm-white/60 uppercase mb-1">Streak</p>
                        <p className="font-heading text-2xl text-vibrant-orange">{profile.currentStreak}</p>
                    </div>
                    <div className="bg-warm-white/5 border border-warm-white/10 p-4 text-center rounded-none">
                        <p className="text-xs text-warm-white/60 uppercase mb-1">Weekly</p>
                        <p className="font-heading text-2xl text-warm-white">{weeklyPoints}</p>
                    </div>
                    <div className="bg-warm-white/5 border border-warm-white/10 p-4 text-center rounded-none">
                        <p className="text-xs text-warm-white/60 uppercase mb-1">Lifetime</p>
                        <p className="font-heading text-2xl text-warm-white">{profile.totalPoints}</p>
                    </div>
                </div>

                {!isSelf ? (
                    <div className="space-y-4">
                        {/* Donate section */}
                        <div className="bg-warm-white/5 p-4 border border-warm-white/10 rounded-none">
                            <div className="flex items-center gap-2 mb-3">
                                <TrophyIcon className="w-5 h-5 text-vibrant-orange" />
                                <p className="font-heading text-lg uppercase">Donate Points</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    min={1}
                                    value={donateAmount}
                                    onChange={(e) => setDonateAmount(Number(e.target.value))}
                                    className="flex-grow p-3 bg-warm-white/10 border-2 border-warm-white/20 text-warm-white font-bold text-lg rounded-none"
                                    placeholder="Amount"
                                />
                                <button
                                    onClick={handleDonate}
                                    disabled={busy || donateAmount <= 0 || donateAmount > currentUserWeekly}
                                    className="px-4 py-3 bg-vibrant-orange text-warm-white font-bold uppercase disabled:opacity-50 active:scale-95 transition-transform rounded-none"
                                >
                                    Give
                                </button>
                            </div>
                            <p className="text-xs text-warm-white/60 mt-2">Available to donate: {currentUserWeekly} points</p>
                        </div>

                        {/* Streak Ender */}
                        <div className="bg-warm-white/5 p-4 border border-warm-white/10 rounded-none">
                            <div className="flex items-center gap-2 mb-3">
                                <FlashIcon className="w-5 h-5 text-vibrant-orange" />
                                <p className="font-heading text-lg uppercase">Streak Ender</p>
                            </div>
                            <p className="text-sm text-warm-white/70 mb-3">End their {profile.currentStreak}-day streak and send them to the Shame Wall.</p>
                            <button
                                onClick={handleStreakEnder}
                                disabled={busy || currentUserWeekly < 500}
                                className="w-full px-4 py-3 bg-vibrant-orange text-warm-white font-bold uppercase disabled:opacity-50 active:scale-95 transition-transform rounded-none"
                            >
                                Pay 500 Points
                            </button>
                            {currentUserWeekly < 500 && (
                                <p className="text-xs text-warm-white/60 mt-2">Need 500 weekly points (you have {currentUserWeekly})</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <p className="font-heading text-sm uppercase text-warm-white/60 mb-2">Risk & Reward Tools</p>

                        {/* Double or Nothing - Featured */}
                        <div
                            className={`bg-warm-white/5 border border-warm-white/10 p-4 transition-colors rounded-none ${busy ? 'opacity-50' : 'hover:bg-warm-white/10 cursor-pointer'}`}
                            onClick={!busy ? handleDoubleOrNothing : undefined}
                        >
                            <div className="flex items-center gap-3">
                                <FlashIcon className="w-8 h-8 text-vibrant-orange" />
                                <div>
                                    <p className="font-heading text-xl uppercase">Double or Nothing</p>
                                    <p className="text-sm text-warm-white/70">Coin flip: 2x weekly points or lose all</p>
                                </div>
                            </div>
                        </div>

                        {/* Loan */}
                        <div
                            className={`bg-warm-white/5 border border-warm-white/10 p-4 transition-colors rounded-none ${!currentUserProfile.loanPenaltyWeekId ? 'hover:bg-warm-white/10 cursor-pointer' : 'opacity-50'}`}
                            onClick={!currentUserProfile.loanPenaltyWeekId && !busy ? handleLoan : undefined}
                        >
                            <div className="flex items-center gap-3">
                                <TrophyIcon className="w-6 h-6 text-warm-white" />
                                <div>
                                    <p className="font-heading text-lg uppercase">Loan Points</p>
                                    <p className="text-sm text-warm-white/70">+50 now, start next week at -75</p>
                                    {currentUserProfile.loanPenaltyWeekId && (
                                        <p className="text-xs text-vibrant-orange mt-1">Loan pending for week {currentUserProfile.loanPenaltyWeekId}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Delete All */}
                        <div
                            className={`bg-warm-white/5 border border-warm-white/10 p-4 transition-colors rounded-none ${busy ? 'opacity-50' : 'hover:bg-warm-white/10 cursor-pointer'}`}
                            onClick={!busy ? handleDeleteAllPoints : undefined}
                        >
                            <div className="flex items-center gap-3">
                                <XIcon className="w-6 h-6 text-vibrant-orange" />
                                <div>
                                    <p className="font-heading text-lg uppercase">Delete All Points</p>
                                    <p className="text-sm text-warm-white/60">Start from zero. Bold move.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-6 text-center">
                    <button onClick={onClose} className="text-warm-white/60 hover:text-warm-white uppercase text-sm font-bold">Close</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProfileModal;


