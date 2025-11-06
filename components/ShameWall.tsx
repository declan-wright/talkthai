import React, { useState, useEffect } from 'react';
import type { ShameWallEntry, UserProfile } from '../types';
import { ShameReason } from '../types';
import { BrokenHeartIcon, XIcon } from './Icons';
import { isAdmin } from '../utils/adminUtils';
import { useAuth } from '../contexts/AuthContext';
import * as firestoreService from '../services/firestoreService';
import { getFallbackAvatar } from '../utils/avatarUtils';

interface ShameWallProps {
    entries: ShameWallEntry[];
    onEntryDeleted?: () => void;
}

const ShameProfileImage: React.FC<{ entry: ShameWallEntry }> = ({ entry }) => {
    const [imageError, setImageError] = useState(false);
    const [currentPhotoURL, setCurrentPhotoURL] = useState<string | null>(entry.photoURL);
    const [currentFallbackAvatar, setCurrentFallbackAvatar] = useState<string | null>(null);
    const displayName = entry.thaiName || entry.firstName || entry.displayName;

    useEffect(() => {
        // Fetch current user profile to check if they've switched to fallback
        const fetchCurrentProfile = async () => {
            try {
                const profile = await firestoreService.getUserProfile(entry.uid);
                setCurrentPhotoURL(profile.photoURL);
                setCurrentFallbackAvatar(profile.fallbackAvatar || null);
            } catch (error) {
                console.error('Error fetching profile for shame wall:', error);
                setCurrentPhotoURL(entry.photoURL);
            }
        };
        fetchCurrentProfile();
    }, [entry.uid, entry.photoURL]);

    if (!currentPhotoURL || imageError) {
        return (
            <img
                src={getFallbackAvatar(currentFallbackAvatar)}
                alt={displayName}
                className="w-10 h-10 rounded-full border-2 border-vibrant-red/50 object-cover grayscale"
                style={{ filter: 'sepia(100%) saturate(500%) hue-rotate(-50deg)' }}
                loading="lazy"
            />
        );
    }

    return (
        <img
            src={currentPhotoURL}
            alt={displayName}
            className="w-10 h-10 rounded-full border-2 border-vibrant-red/50 object-cover"
            style={{ filter: 'sepia(100%) saturate(500%) hue-rotate(-50deg)' }}
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
        <div className="bg-charcoal-ink border-2 border-vibrant-red/50 p-4 mt-8">
            <h3 className="font-heading text-2xl text-vibrant-red text-center uppercase mb-4">The Shame Wall</h3>
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
                                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-vibrant-red/20 text-vibrant-red"
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
