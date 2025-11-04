import React, { useState } from 'react';
import type { ShameWallEntry } from '../types';
import { ShameReason } from '../types';
import { BrokenHeartIcon, XIcon } from './Icons';
import { isAdmin } from '../utils/adminUtils';
import { useAuth } from '../contexts/AuthContext';
import * as firestoreService from '../services/firestoreService';

interface ShameWallProps {
    entries: ShameWallEntry[];
    onEntryDeleted?: () => void;
}

const FALLBACK_AVATARS = [
    '/avatar1.jpg',
    '/avatar2.jpg',
    '/avatar3.jpg',
    '/avatar4.jpg',
];

const ShameProfileImage: React.FC<{ entry: ShameWallEntry }> = ({ entry }) => {
    const [imageError, setImageError] = useState(false);
    const displayName = entry.thaiName || entry.firstName || entry.displayName;

    // Use uid to consistently assign the same fallback avatar to each user
    const getFallbackAvatar = () => {
        const hash = entry.uid.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return FALLBACK_AVATARS[hash % FALLBACK_AVATARS.length];
    };

    if (!entry.photoURL || imageError) {
        return (
            <img
                src={getFallbackAvatar()}
                alt={displayName}
                className="w-10 h-10 rounded-full border-2 border-red-500/50 object-cover grayscale"
                loading="lazy"
            />
        );
    }

    return (
        <img
            src={entry.photoURL}
            alt={displayName}
            className="w-10 h-10 rounded-full border-2 border-red-500/50 object-cover"
            onError={() => setImageError(true)}
            loading="lazy"
        />
    );
};

export const ShameWall: React.FC<ShameWallProps> = ({ entries, onEntryDeleted }) => {
    const { user } = useAuth();
    const userIsAdmin = isAdmin(user?.email);

    const handleDelete = async (entryId: string | undefined) => {
        if (!entryId || !userIsAdmin) return;
        if (!confirm('Delete this shame wall entry?')) return;
        try {
            await firestoreService.deleteShameWallEntry(entryId);
            onEntryDeleted?.();
        } catch (e) {
            alert('Failed to delete entry');
            console.error(e);
        }
    };

    if (entries.length === 0) {
        return null;
    }

    return (
        <div className="bg-charcoal-ink border-2 border-red-500/50 p-4 mt-8">
            <h3 className="font-heading text-2xl text-red-400 text-center uppercase mb-4">The Shame Wall</h3>
            <div className="space-y-4">
                {entries.map((entry) => {
                    const displayName = entry.thaiName || entry.firstName || entry.displayName;
                    return (
                        <div key={`${entry.uid}-${entry.reason}-${entry.timestamp?.seconds || Date.now()}`} className="flex items-center gap-4 p-2 bg-warm-white/5 rounded-none relative group">
                            <ShameProfileImage entry={entry} />
                            <div className="flex-1">
                                <p className="font-bold text-warm-white">{displayName}</p>
                                <p className="text-sm text-warm-white/70 italic">"{entry.message}"</p>
                            </div>
                            {userIsAdmin && entry.id && (
                                <button
                                    onClick={() => handleDelete(entry.id)}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-500/20 text-red-400"
                                    title="Delete entry"
                                >
                                    <XIcon className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
