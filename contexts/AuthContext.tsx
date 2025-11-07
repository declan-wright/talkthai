import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import type { User } from 'firebase/auth';
import { onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut, GoogleAuthProvider, auth } from '../firebase';
import { deleteUser } from 'firebase/auth';
import type { UserProfile } from '../types';
import * as firestoreService from '../services/firestoreService';
import { getTodayDateString, isYesterday } from '../utils/dateUtils';

interface AuthContextType {
    user: User | null;
    userProfile: UserProfile | null;
    loading: boolean;
    signInWithGoogle: () => Promise<User | null>;
    signOut: () => Promise<void>;
    updateUserProfile: (profileData: Partial<UserProfile>) => Promise<void>;
    reloadProfile: () => Promise<void>;
    deleteAccount: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the GoogleAuthProvider instance here, where it's used.
const googleProvider = new GoogleAuthProvider();

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const streakUpdateInProgressRef = useRef<string | null>(null); // Track ongoing streak updates by uid

    const reloadProfile = useCallback(async () => {
        if (!user) return;
        const profile = await firestoreService.getUserProfile(user.uid);
        setUserProfile(profile);
    }, [user]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);
                let profile = await firestoreService.getUserProfile(user.uid);

                if (profile) {
                    // Check for daily streak - prevent concurrent updates
                    const today = getTodayDateString();
                    if (profile.lastActivityDate !== today) {
                        // Check if another update is already in progress for this user
                        if (streakUpdateInProgressRef.current === user.uid) {
                            // Skip this update, another one is already processing
                            setUserProfile(profile);
                            setLoading(false);
                            return;
                        }
                        
                        // Mark that we're updating this user's streak
                        streakUpdateInProgressRef.current = user.uid;
                        
                        try {
                            if (isYesterday(profile.lastActivityDate)) {
                                // Continue streak
                                const newStreak = profile.currentStreak + 1;
                                // Logarithmic streak bonus: starts at 10, approaches 100 asymptotically
                                // Formula: 100 * (1 - e^(-streak/15))
                                // Day 1: ~6.5, Day 7: ~37, Day 15: ~63, Day 30: ~86, Day 60: ~98, approaches 100
                                const pointsToAdd = Math.round(100 * (1 - Math.exp(-newStreak / 15)));
                                await firestoreService.updateUserProfile(user.uid, {
                                    currentStreak: newStreak,
                                    lastActivityDate: today
                                });
                                await firestoreService.addPoints(user.uid, pointsToAdd, `${newStreak}-day streak bonus!`);
                            } else {
                                // Streak broken
                                const newStreak = 1;
                                // Day 1 bonus with logarithmic formula
                                const pointsToAdd = Math.round(100 * (1 - Math.exp(-1 / 15)));
                                await firestoreService.updateUserProfile(user.uid, {
                                    currentStreak: newStreak,
                                    lastActivityDate: today
                                });
                                await firestoreService.addPoints(user.uid, pointsToAdd, 'New 1-day streak!');
                                await firestoreService.addStreakBrokenToShameWall(profile);
                            }
                            // Re-fetch profile after updates
                            profile = await firestoreService.getUserProfile(user.uid);
                        } finally {
                            // Clear the lock after update completes
                            if (streakUpdateInProgressRef.current === user.uid) {
                                streakUpdateInProgressRef.current = null;
                            }
                        }
                    }

                    // Apply loan penalty at week start if scheduled
                    try {
                        const applied = await firestoreService.applyLoanPenaltyIfNeeded(user.uid);
                        if (applied) {
                            profile = await firestoreService.getUserProfile(user.uid);
                        }
                    } catch (e) {
                        // best-effort; ignore
                    }
                }
                setUserProfile(profile);

            } else {
                setUser(null);
                setUserProfile(null);
                streakUpdateInProgressRef.current = null; // Clear lock when user logs out
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async (): Promise<User | null> => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            return result.user;
        } catch (error) {
            console.error("Error signing in with Google: ", error);
            return null;
        }
    };
    
    const signOut = async (): Promise<void> => {
        try {
            await firebaseSignOut(auth);
            setUser(null);
            setUserProfile(null);
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const updateUserProfile = async (profileData: Partial<UserProfile>): Promise<void> => {
        if (!user) return;
        try {
            // If nothing changed, skip write
            const current = userProfile || (await firestoreService.getUserProfile(user.uid));
            if (!current) return;

            const next: UserProfile = {
                ...current,
                ...profileData,
                // deep-merge common nested maps to avoid clobbering
                weeklyPoints: { ...(current.weeklyPoints || {}), ...(profileData.weeklyPoints || {}) },
                testScores: { ...(current.testScores || {}), ...(profileData.testScores || {}) },
                flashcardProgress: { ...(current.flashcardProgress || {}), ...(profileData.flashcardProgress || {}) },
                conversationPracticeCounts: { ...(current.conversationPracticeCounts || {}), ...(profileData.conversationPracticeCounts || {}) },
            };

            // Shallow compare to avoid redundant writes
            const changed = JSON.stringify(current) !== JSON.stringify(next);
            if (!changed) {
                setUserProfile(current);
                return;
            }

            await firestoreService.updateUserProfile(user.uid, profileData);
            // Optimistically update local state without re-fetching
            setUserProfile(next);
        } catch (error) {
            console.error("Error updating profile: ", error);
            throw error;
        }
    };

    const deleteAccount = async (): Promise<void> => {
        if (!user) return;
        try {
            // Best-effort: remove Firestore profile first
            await firestoreService.deleteUserAccount(user.uid);
        } catch (e) {
            // ignore, continue to auth deletion
        }
        try {
            await deleteUser(user);
        } catch (e) {
            // If requires recent login, rethrow for UI to handle
            throw e as any;
        } finally {
            setUser(null);
            setUserProfile(null);
        }
    };

    const value = { user, userProfile, loading, signInWithGoogle, signOut, updateUserProfile, reloadProfile, deleteAccount };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};