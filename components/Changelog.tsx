import React from 'react';
import type { Language } from '../types';
import { XIcon } from './Icons';
import { CHANGELOG_ENTRIES, CHANGELOG_UI_STRINGS } from '../data/changelogData';

interface ChangelogProps {
    isOpen: boolean;
    onClose: () => void;
    language: Language;
}

export const Changelog: React.FC<ChangelogProps> = ({ isOpen, onClose, language }) => {
    if (!isOpen) return null;

    const langCode = language.code;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-charcoal-ink border-2 border-warm-white/20 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
                <div className="sticky top-0 bg-charcoal-ink border-b border-warm-white/20 p-4 flex justify-between items-center">
                    <h2 className="font-heading text-2xl text-warm-white uppercase">
                        {CHANGELOG_UI_STRINGS.title[langCode]}
                    </h2>
                    <button onClick={onClose} className="text-warm-white/60 hover:text-warm-white">
                        <XIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6 space-y-8">
                    {CHANGELOG_ENTRIES.map((entry, idx) => (
                        <div key={idx}>
                            {idx > 0 && <div className="border-t border-warm-white/10 -mx-6 mb-8"></div>}
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-warm-white/80 text-sm font-bold">
                                    {CHANGELOG_UI_STRINGS.version[langCode]} {entry.version}
                                </h3>
                                <span className="text-warm-white/50 text-xs">{entry.date}</span>
                            </div>

                            {entry.highlight && (
                                <p className="text-warm-white/70 text-sm mb-4">
                                    {entry.highlight[langCode]}
                                </p>
                            )}

                            {entry.description && (
                                <p className="text-warm-white/70 text-sm">{entry.description[langCode]}</p>
                            )}

                            {(entry.newThings || entry.fixes || entry.comingSoon) && (
                                <div className="space-y-4 text-sm">
                                    {entry.newThings && (
                                        <div>
                                            <p className="text-warm-white/80 font-semibold mb-2">
                                                {CHANGELOG_UI_STRINGS.newThings[langCode]}
                                            </p>
                                            <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                                {entry.newThings[langCode].map((item, itemIdx) => (
                                                    <li key={itemIdx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {entry.fixes && (
                                        <div>
                                            <p className="text-warm-white/80 font-semibold mb-2">
                                                {CHANGELOG_UI_STRINGS.fixes[langCode]}
                                            </p>
                                            <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                                {entry.fixes[langCode].map((item, itemIdx) => (
                                                    <li key={itemIdx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {entry.comingSoon && (
                                        <div>
                                            <p className="text-warm-white/80 font-semibold mb-2">
                                                {CHANGELOG_UI_STRINGS.comingSoon[langCode]}
                                            </p>
                                            <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                                {entry.comingSoon[langCode].map((item, itemIdx) => (
                                                    <li key={itemIdx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
