import React from 'react';
import type { Language } from '../types';
import { CHANGELOG_ENTRIES, CHANGELOG_UI_STRINGS, UPDATE_NOTIFICATION_STRINGS } from '../data/changelogData';

interface UpdateNotificationProps {
    isOpen: boolean;
    onClose: () => void;
    onViewMore: () => void;
    language: Language;
}

const LAST_SEEN_VERSION_KEY = 'thai-talk-last-seen-version';

export const UpdateNotification: React.FC<UpdateNotificationProps> = ({ isOpen, onClose, onViewMore, language }) => {
    if (!isOpen) return null;

    const langCode = language.code;
    const latestEntry = CHANGELOG_ENTRIES[0]; // First entry is the latest due to reordering

    if (!latestEntry) return null;

    const handleClose = () => {
        // Mark this version as seen
        localStorage.setItem(LAST_SEEN_VERSION_KEY, latestEntry.version);
        onClose();
    };

    const handleViewMore = () => {
        // Mark this version as seen
        localStorage.setItem(LAST_SEEN_VERSION_KEY, latestEntry.version);
        onViewMore();
    };

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-charcoal-ink border-2 border-vibrant-orange w-full max-w-lg max-h-[80vh] overflow-y-auto">
                <div className="p-6">
                    <div className="text-center mb-6">
                        <h2 className="font-heading text-2xl text-warm-white uppercase mb-2">
                            {UPDATE_NOTIFICATION_STRINGS.title[langCode]}
                        </h2>
                        <p className="text-warm-white/60 text-sm uppercase">
                            {UPDATE_NOTIFICATION_STRINGS.subtitle[langCode]}
                        </p>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-warm-white/80 text-sm font-bold">
                                {CHANGELOG_UI_STRINGS.version[langCode]} {latestEntry.version}
                            </h3>
                            <span className="text-warm-white/50 text-xs">{latestEntry.date}</span>
                        </div>

                        {latestEntry.description && (
                            <p className="text-warm-white/70 text-sm mb-4">{latestEntry.description[langCode]}</p>
                        )}

                        {(latestEntry.newThings || latestEntry.fixes || latestEntry.comingSoon) && (
                            <div className="space-y-4 text-sm">
                                {latestEntry.newThings && (
                                    <div>
                                        <p className="text-warm-white/80 font-semibold mb-2">
                                            {CHANGELOG_UI_STRINGS.newThings[langCode]}
                                        </p>
                                        <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                            {latestEntry.newThings[langCode].map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {latestEntry.fixes && (
                                    <div>
                                        <p className="text-warm-white/80 font-semibold mb-2">
                                            {CHANGELOG_UI_STRINGS.fixes[langCode]}
                                        </p>
                                        <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                            {latestEntry.fixes[langCode].map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {latestEntry.comingSoon && (
                                    <div>
                                        <p className="text-warm-white/80 font-semibold mb-2">
                                            {CHANGELOG_UI_STRINGS.comingSoon[langCode]}
                                        </p>
                                        <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                            {latestEntry.comingSoon[langCode].map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={handleClose}
                            className="flex-1 px-6 py-3 bg-vibrant-orange text-warm-white font-bold uppercase hover:bg-vibrant-orange/90 transition-colors"
                        >
                            {UPDATE_NOTIFICATION_STRINGS.letsGo[langCode]}
                        </button>
                        <button
                            onClick={handleViewMore}
                            className="flex-1 px-6 py-3 border-2 border-warm-white/20 text-warm-white font-bold uppercase hover:border-warm-white/40 transition-colors"
                        >
                            {UPDATE_NOTIFICATION_STRINGS.viewMore[langCode]}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper function to check if there's a new version
export const hasNewVersion = (): boolean => {
    const latestEntry = CHANGELOG_ENTRIES[0];
    if (!latestEntry) return false;

    const lastSeenVersion = localStorage.getItem(LAST_SEEN_VERSION_KEY);
    return lastSeenVersion !== latestEntry.version;
};

// Helper function to get the latest version
export const getLatestVersion = (): string => {
    const latestEntry = CHANGELOG_ENTRIES[0];
    return latestEntry?.version || '';
};

