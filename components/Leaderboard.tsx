import React, { useState, useEffect, useRef } from 'react';
import type { LeaderboardEntry, UserProfile, Language } from '../types';
import { CrownIcon } from './Icons';
import { getDaysLeftInWeek } from '../utils/dateUtils';
import { UI_STRINGS } from '../data/uiStrings';
import { getFallbackAvatar } from '../utils/avatarUtils';

interface LeaderboardProps {
    entries: LeaderboardEntry[];
    weeklyWinner: LeaderboardEntry | null;
    currentUserId: string | null;
    currentUserProfile: UserProfile | null;
    language: Language;
    onSelectUser?: (uid: string) => void;
    onIconClick?: (uid: string) => void;
}

const ProfileImage: React.FC<{ entry: LeaderboardEntry & { fallbackAvatar?: string } }> = ({ entry }) => {
    const [imageError, setImageError] = useState(false);
    const displayName = entry.thaiName || entry.firstName || entry.displayName;

    // If user has selected a fallback avatar, use that instead of photoURL
    const avatarSrc = entry.fallbackAvatar || entry.photoURL;

    if (!avatarSrc || imageError) {
        return (
            <img
                src={getFallbackAvatar(entry.fallbackAvatar)}
                alt={displayName}
                className="w-10 h-10 rounded-full border-2 border-warm-white/20 object-cover"
                loading="lazy"
            />
        );
    }

    return (
        <img
            src={avatarSrc}
            alt={displayName}
            className="w-10 h-10 rounded-full border-2 border-warm-white/20 object-cover"
            onError={() => setImageError(true)}
            loading="lazy"
        />
    );
};

const LeaderboardName: React.FC<{ entry: LeaderboardEntry }> = ({ entry }) => {
    const [showThai, setShowThai] = useState(true);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        // Random interval between 10-20 seconds
        const getRandomInterval = () => Math.random() * 10000 + 10000;

        const scheduleNextSwitch = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = window.setTimeout(() => {
                setShowThai(prev => !prev);
                scheduleNextSwitch();
            }, getRandomInterval());
        };

        scheduleNextSwitch();
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        };
    }, []);

    const thaiName = entry.thaiName || entry.firstName || entry.displayName;
    const englishName = entry.firstName || entry.displayName;

    return (
        <span className="flex-grow font-semibold truncate transition-opacity duration-300">
            {showThai ? thaiName : englishName}
        </span>
    );
};

export const Leaderboard: React.FC<LeaderboardProps> = ({ entries, weeklyWinner, currentUserId, currentUserProfile, language, onSelectUser, onIconClick }) => {
    const daysLeft = getDaysLeftInWeek();
    const daysText = daysLeft === 1 ? UI_STRINGS.day[language.code] : UI_STRINGS.days[language.code];
    const daysLeftText = daysLeft === 0 ? UI_STRINGS.lastDay[language.code] : UI_STRINGS.daysLeft[language.code].replace('{daysLeft}', daysLeft.toString()).replace('{daysText}', daysText);

    return (
        <div className="bg-warm-white/5 border border-warm-white/10 p-4">
            {currentUserProfile && (
                <div className="text-center mb-4 text-sm text-warm-white/70">
                    <p>{UI_STRINGS.signedInAs[language.code]} {currentUserProfile.displayName || currentUserProfile.email}</p>
                    <p className="font-bold text-lg text-vibrant-orange">{currentUserProfile.currentStreak}{UI_STRINGS.dayStreak[language.code]}</p>
                </div>
            )}
            <h3 className="font-heading text-2xl text-warm-white text-center uppercase mb-2">{UI_STRINGS.weeklyLeaderboard[language.code]}</h3>
            <p className="text-center text-warm-white/60 text-sm mb-4">
                {daysLeftText}
            </p>

            {weeklyWinner && (
                <div className="mb-4 p-3 bg-vibrant-orange/10 border border-vibrant-orange text-center">
                    <p className="text-sm font-bold uppercase text-vibrant-orange">{UI_STRINGS.lastWeekWinner[language.code]}</p>
                    <div className="flex items-center justify-center gap-2">
                         <CrownIcon className="w-5 h-5 text-vibrant-orange" />
                         <p className="font-bold text-warm-white">{weeklyWinner.thaiName || weeklyWinner.firstName || weeklyWinner.displayName}</p>
                    </div>
                </div>
            )}

            <div className="space-y-2">
                {entries.length === 0 && (
                    <p className="text-center text-warm-white/50 py-4">{UI_STRINGS.noPointsYet[language.code]}</p>
                )}
                {entries.map((entry, index) => {
                    const isCurrentUser = entry.uid === currentUserId;
                    return (
                        <div key={entry.uid} onClick={() => onSelectUser && onSelectUser(entry.uid)} className={`flex items-center gap-4 p-2 rounded-none transition-colors cursor-pointer ${isCurrentUser ? 'bg-vibrant-orange' : 'hover:bg-warm-white/10'}`}>
                            <span className="font-bold text-lg w-6 text-center">{index + 1}</span>
                            <div onClick={(e) => {
                                e.stopPropagation();
                                onIconClick?.(entry.uid);
                            }}>
                                <ProfileImage entry={entry} />
                            </div>
                            <LeaderboardName entry={entry} />
                            <span className="font-bold text-lg">{entry.weeklyScore.toLocaleString()} {UI_STRINGS.pointsAbbreviation[language.code]}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
