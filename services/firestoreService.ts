import { doc, getDoc, setDoc, updateDoc, collection, query, orderBy, limit, getDocs, where, serverTimestamp, addDoc, Timestamp, writeBatch, db, onSnapshot, deleteDoc, runTransaction } from '../firebase';
import { FIRESTORE_COLLECTIONS } from '../constants';
import type { UserProfile, LeaderboardEntry, ShameWallEntry, ChatMessage } from '../types';
import { ShameReason } from '../types';
import { getCurrentWeekId, getPreviousWeekId, getTodayDateString, getNextWeekId } from '../utils/dateUtils';
import type { User } from 'firebase/auth';

export const createUserProfile = async (
    user: User,
    profileData: {
        firstName: string;
        lastName: string;
        thaiName: string;
        speakingLevel: string;
        readingLevel: string;
        learningGoal: string;
    }
): Promise<UserProfile> => {
    const userRef = doc(db, FIRESTORE_COLLECTIONS.USERS, user.uid);
    const today = getTodayDateString();
    const weekId = getCurrentWeekId();

    const newUserProfile: UserProfile = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        ...profileData,
        hasCompletedOnboardingV2: false,
        totalPoints: 10,
        weeklyPoints: { [weekId]: 10 },
        currentStreak: 1,
        lastActivityDate: today,
        testScores: {},
        testRetakes: {},
        flashcardProgress: {},
    };

    await setDoc(userRef, newUserProfile);
    return newUserProfile;
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
    const userRef = doc(db, FIRESTORE_COLLECTIONS.USERS, uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
        return docSnap.data() as UserProfile;
    }
    return null;
};

export const updateUserProfile = async (uid: string, data: Partial<UserProfile>): Promise<void> => {
    const userRef = doc(db, FIRESTORE_COLLECTIONS.USERS, uid);
    await updateDoc(userRef, data);
};

export const addPoints = async (uid: string, points: number, activity: string): Promise<void> => {
    if (!uid || points <= 0) return;

    console.log(`Adding ${points} points for ${activity}`);

    const userRef = doc(db, FIRESTORE_COLLECTIONS.USERS, uid);
    const weekId = getCurrentWeekId();
    const today = getTodayDateString();

    // Use transaction to prevent race conditions when adding points concurrently
    await runTransaction(db, async (transaction) => {
        const docSnap = await transaction.get(userRef);
        if (!docSnap.exists()) {
            throw new Error('User profile does not exist');
        }

        const userProfile = docSnap.data() as UserProfile;

        // Apply half points (rounded down) for specific user
        const adjustedPoints = userProfile.email === 'declanmarkwright@gmail.com'
            ? Math.floor(points / 2)
            : points;

        const newTotalPoints = (userProfile.totalPoints || 0) + adjustedPoints;
        const newWeeklyPoints = (userProfile.weeklyPoints?.[weekId] || 0) + adjustedPoints;

        transaction.update(userRef, {
            totalPoints: newTotalPoints,
            [`weeklyPoints.${weekId}`]: newWeeklyPoints,
            lastActivityDate: today,
        });
    });
};


export const getAllAssignedAvatars = async (): Promise<string[]> => {
    const usersRef = collection(db, FIRESTORE_COLLECTIONS.USERS);
    const q = query(usersRef, where('fallbackAvatar', '!=', null));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data().fallbackAvatar).filter(Boolean) as string[];
};

export const getLeaderboard = async (): Promise<{ leaderboard: LeaderboardEntry[], weeklyWinner: LeaderboardEntry | null }> => {
    const usersRef = collection(db, FIRESTORE_COLLECTIONS.USERS);
    const currentWeekField = `weeklyPoints.${getCurrentWeekId()}`;
    const previousWeekField = `weeklyPoints.${getPreviousWeekId()}`;
    
    // Get current leaderboard - filter for users with points to avoid orderBy issues
    const q = query(usersRef, where(currentWeekField, '>=', 0), orderBy(currentWeekField, 'desc'), limit(10));
    let querySnapshot;
    try {
        querySnapshot = await getDocs(q);
    } catch (error) {
        // If orderBy fails (e.g., no index), fall back to fetching all and sorting client-side
        console.warn("Leaderboard query failed, falling back to client-side sort:", error);
        const allUsersQuery = query(usersRef, limit(100));
        const allDocs = await getDocs(allUsersQuery);
        const sorted = allDocs.docs
            .map(doc => doc.data() as UserProfile)
            .filter(profile => (profile.weeklyPoints?.[getCurrentWeekId()] || 0) > 0)
            .sort((a, b) => (b.weeklyPoints?.[getCurrentWeekId()] || 0) - (a.weeklyPoints?.[getCurrentWeekId()] || 0))
            .slice(0, 10);
        const leaderboard = sorted.map(data => ({
            uid: data.uid,
            displayName: data.displayName || data.firstName,
            firstName: data.firstName || '',
            thaiName: data.thaiName || '',
            photoURL: data.photoURL || '',
            fallbackAvatar: data.fallbackAvatar || null,
            weeklyScore: data.weeklyPoints?.[getCurrentWeekId()] || 0,
        }));
        return { leaderboard, weeklyWinner: null };
    }
    
    const leaderboard: LeaderboardEntry[] = querySnapshot.docs.map(doc => {
        const data = doc.data() as UserProfile;
        return {
            uid: data.uid,
            displayName: data.displayName || data.firstName,
            firstName: data.firstName || '',
            thaiName: data.thaiName || '',
            photoURL: data.photoURL || '',
            fallbackAvatar: data.fallbackAvatar || null,
            weeklyScore: data.weeklyPoints?.[getCurrentWeekId()] || 0,
        };
    });

    // Get previous week's winner
    let weeklyWinner: LeaderboardEntry | null = null;
    try {
        const winnerQuery = query(usersRef, where(previousWeekField, '>=', 0), orderBy(previousWeekField, 'desc'), limit(1));
        const winnerSnapshot = await getDocs(winnerQuery);
        if (!winnerSnapshot.empty) {
            const winnerData = winnerSnapshot.docs[0].data() as UserProfile;
            if ((winnerData.weeklyPoints?.[getPreviousWeekId()] || 0) > 0) {
                weeklyWinner = {
                    uid: winnerData.uid,
                    displayName: winnerData.displayName || winnerData.firstName,
                    firstName: winnerData.firstName || '',
                    thaiName: winnerData.thaiName || '',
                    photoURL: winnerData.photoURL || '',
                    fallbackAvatar: winnerData.fallbackAvatar || null,
                    weeklyScore: winnerData.weeklyPoints?.[getPreviousWeekId()] || 0,
                };
            }
        }
    } catch (error) {
        console.warn("Previous week winner query failed:", error);
    }

    return { leaderboard, weeklyWinner };
};

export const getShameWall = async (): Promise<ShameWallEntry[]> => {
    const shameWallRef = collection(db, FIRESTORE_COLLECTIONS.SHAME_WALL);
    const now = Timestamp.now();
    const q = query(shameWallRef, where('expires', '>', now), orderBy('expires', 'desc'));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ShameWallEntry));
};

export const deleteShameWallEntry = async (entryId: string): Promise<void> => {
    const entryRef = doc(db, FIRESTORE_COLLECTIONS.SHAME_WALL, entryId);
    await deleteDoc(entryRef);
};

export const deleteChatMessage = async (messageId: string): Promise<void> => {
    const messageRef = doc(db, FIRESTORE_COLLECTIONS.CHAT_MESSAGES, messageId);
    await deleteDoc(messageRef);
};


export const addStreakBrokenToShameWall = async (userProfile: UserProfile): Promise<void> => {
    const shameWallRef = collection(db, FIRESTORE_COLLECTIONS.SHAME_WALL);
    const now = Timestamp.now();

    // First, remove any existing active streak-broken entries for this user
    const existingQuery = query(
        shameWallRef,
        where('uid', '==', userProfile.uid),
        where('reason', '==', ShameReason.STREAK_BROKEN),
        where('expires', '>', now)
    );
    const existingEntries = await getDocs(existingQuery);
    const batch = writeBatch(db);
    existingEntries.docs.forEach(doc => batch.delete(doc.ref));
    if (!existingEntries.empty) {
        await batch.commit();
    }

    // Now add the new entry
    // Calculate midnight of the next day
    const nowDate = new Date();
    const tomorrowMidnight = new Date(nowDate);
    tomorrowMidnight.setDate(tomorrowMidnight.getDate() + 1);
    tomorrowMidnight.setHours(0, 0, 0, 0);
    const expires = Timestamp.fromMillis(tomorrowMidnight.getTime());

    const message = `${userProfile.firstName} broke a ${userProfile.currentStreak}-day streak. Expect fewer points in the future.`;

    await addDoc(shameWallRef, {
        uid: userProfile.uid,
        displayName: userProfile.displayName || userProfile.firstName,
        firstName: userProfile.firstName || '',
        thaiName: userProfile.thaiName || '',
        photoURL: userProfile.photoURL,
        reason: ShameReason.STREAK_BROKEN,
        message,
        timestamp: serverTimestamp(),
        expires,
    });
};

// NOTE: This is a client-side simulation of a backend job.
// In a production app, this would be a scheduled Cloud Function.
export const updateWeeklyLoserOnShameWall = async (): Promise<void> => {
    const prevWeekId = getPreviousWeekId();

    // Check if we've already processed the loser for this week using the announcements collection
    const loserDocId = `loser-${prevWeekId}`;
    const loserRef = doc(db, FIRESTORE_COLLECTIONS.ANNOUNCEMENTS, loserDocId);
    const loserSnap = await getDoc(loserRef);
    if (loserSnap.exists()) {
        console.log("Loser for last week has already been posted.");
        return; // already processed
    }

    const usersRef = collection(db, FIRESTORE_COLLECTIONS.USERS);
    const previousWeekField = `weeklyPoints.${prevWeekId}`;

    // Find user with the lowest score last week (but greater than 0)
    const q = query(
        usersRef,
        where(previousWeekField, '>', 0),
        orderBy(previousWeekField, 'asc'),
        limit(1)
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        console.log("No users with points last week to determine a loser.");
        return; // No one played last week
    }

    const loser = querySnapshot.docs[0].data() as UserProfile;
    const loserWeeklyPoints = loser.weeklyPoints?.[prevWeekId] || 0;

    // Don't add to shame wall if they earned over 2,000 points
    if (loserWeeklyPoints > 2000) {
        console.log(`Loser ${loser.firstName} earned ${loserWeeklyPoints} points (>2000), sparing them from the shame wall.`);
        // Still mark as processed so we don't check again
        await setDoc(loserRef, { processed: true, timestamp: serverTimestamp() });
        return;
    }

    const now = Timestamp.now();
    const expires = Timestamp.fromMillis(now.toMillis() + 7 * 24 * 60 * 60 * 1000); // Expires in 7 days
    const message = `${loser.firstName} didn't put in the work last week.`;

    const shameWallRef = collection(db, FIRESTORE_COLLECTIONS.SHAME_WALL);
    await addDoc(shameWallRef, {
        uid: loser.uid,
        displayName: loser.displayName || loser.firstName,
        firstName: loser.firstName || '',
        thaiName: loser.thaiName || '',
        photoURL: loser.photoURL,
        reason: ShameReason.LOSER,
        message,
        timestamp: serverTimestamp(),
        expires,
    });

    // Mark as processed
    await setDoc(loserRef, { createdAt: serverTimestamp(), weekId: prevWeekId });
    console.log(`Added ${loser.firstName} to shame wall as weekly loser.`);
};

// ---- Social Actions & Chat ----

export const donateWeeklyPoints = async (fromUid: string, toUid: string, amount: number): Promise<void> => {
    if (!fromUid || !toUid || fromUid === toUid) return;
    if (!Number.isFinite(amount) || amount <= 0) return;
    const weekId = getCurrentWeekId();

    const fromRef = doc(db, FIRESTORE_COLLECTIONS.USERS, fromUid);
    const toRef = doc(db, FIRESTORE_COLLECTIONS.USERS, toUid);

    await runTransaction(db, async (tx) => {
        const fromSnap = await tx.get(fromRef);
        const toSnap = await tx.get(toRef);
        if (!fromSnap.exists() || !toSnap.exists()) return;
        const fromData = fromSnap.data() as UserProfile;
        const toData = toSnap.data() as UserProfile;

        const fromWeekly = fromData.weeklyPoints?.[weekId] || 0;
        if (fromWeekly < amount) {
            throw new Error('Insufficient weekly points');
        }

        const updates: Record<string, unknown> = {};
        updates[`weeklyPoints.${weekId}`] = fromWeekly - amount;
        tx.update(fromRef, updates);

        const toWeekly = toData.weeklyPoints?.[weekId] || 0;
        const toUpdates: Record<string, unknown> = {};
        toUpdates[`weeklyPoints.${weekId}`] = toWeekly + amount;
        tx.update(toRef, toUpdates);
    });
};

export const endUserStreak = async (actorUid: string, targetUid: string): Promise<void> => {
    if (!actorUid || !targetUid || actorUid === targetUid) return;
    const weekId = getCurrentWeekId();
    const cost = 500;

    const actorRef = doc(db, FIRESTORE_COLLECTIONS.USERS, actorUid);
    const targetRef = doc(db, FIRESTORE_COLLECTIONS.USERS, targetUid);

    await runTransaction(db, async (tx) => {
        const actorSnap = await tx.get(actorRef);
        const targetSnap = await tx.get(targetRef);
        if (!actorSnap.exists() || !targetSnap.exists()) return;
        const actor = actorSnap.data() as UserProfile;
        const target = targetSnap.data() as UserProfile;

        const actorWeekly = actor.weeklyPoints?.[weekId] || 0;
        if (actorWeekly < cost) {
            throw new Error('Insufficient weekly points');
        }

        const actorUpdates: Record<string, unknown> = {};
        actorUpdates[`weeklyPoints.${weekId}`] = actorWeekly - cost;
        tx.update(actorRef, actorUpdates);

        tx.update(targetRef, { currentStreak: 0 });
    });
};

export const deleteAllPointsForUser = async (uid: string): Promise<void> => {
    if (!uid) return;
    const userRef = doc(db, FIRESTORE_COLLECTIONS.USERS, uid);
    const snap = await getDoc(userRef);
    if (!snap.exists()) return;
    await updateDoc(userRef, {
        totalPoints: 0,
        weeklyPoints: {},
    });
};

export const doubleOrNothingWeekly = async (uid: string): Promise<'double' | 'nothing'> => {
    if (!uid) return 'nothing';
    const weekId = getCurrentWeekId();
    const userRef = doc(db, FIRESTORE_COLLECTIONS.USERS, uid);
    let result: 'double' | 'nothing' = 'nothing';

    await runTransaction(db, async (tx) => {
        const snap = await tx.get(userRef);
        if (!snap.exists()) return;
        const user = snap.data() as UserProfile;
        const weekly = user.weeklyPoints?.[weekId] || 0;
        if (weekly <= 0) return;
        const win = Math.random() >= 0.6; // 😈 secretly rigged - 40% chance to win, 60% chance to lose
        result = win ? 'double' : 'nothing';
        const updates: Record<string, unknown> = {};
        updates[`weeklyPoints.${weekId}`] = win ? weekly * 2 : 0;
        tx.update(userRef, updates);
    });

    return result;
};

export const requestLoanPoints = async (uid: string): Promise<void> => {
    if (!uid) return;
    const weekId = getCurrentWeekId();
    const nextWeekId = getNextWeekId();
    const userRef = doc(db, FIRESTORE_COLLECTIONS.USERS, uid);

    await runTransaction(db, async (tx) => {
        const snap = await tx.get(userRef);
        if (!snap.exists()) return;
        const user = snap.data() as UserProfile;

        // Prevent multiple loans stacking
        if (user.loanPenaltyWeekId) return;

        const weekly = user.weeklyPoints?.[weekId] || 0;
        const updates: Record<string, unknown> = {};
        updates[`weeklyPoints.${weekId}`] = weekly + 50;
        updates['loanPenaltyWeekId'] = nextWeekId;
        updates['loanPenaltyAmount'] = 75;
        tx.update(userRef, updates);
    });
};

// ---- Chat APIs ----

export const postChatMessage = async (params: { uid: string | null; displayName: string; photoURL?: string | null; text: string; isSystem?: boolean; }): Promise<void> => {
    const { uid, displayName, photoURL = null, text, isSystem = false } = params;
    const chatRef = collection(db, FIRESTORE_COLLECTIONS.CHAT_MESSAGES);
    await addDoc(chatRef, {
        uid: uid || null,
        displayName,
        photoURL: photoURL || null,
        text,
        isSystem,
        createdAt: serverTimestamp(),
    });
};

export const subscribeToChat = (onChange: (messages: ChatMessage[]) => void, maxItems: number = 100) => {
    const twoWeeksMs = 14 * 24 * 60 * 60 * 1000;
    const cutoff = Timestamp.fromMillis(Date.now() - twoWeeksMs);
    const chatRef = collection(db, FIRESTORE_COLLECTIONS.CHAT_MESSAGES);
    const q = query(chatRef, where('createdAt', '>=', cutoff), orderBy('createdAt', 'desc'), limit(maxItems));
    return onSnapshot(q, (snapshot) => {
        const items: ChatMessage[] = snapshot.docs.map(docSnap => {
            const data = docSnap.data() as any;
            return {
                id: docSnap.id,
                uid: data.uid ?? null,
                displayName: data.displayName,
                photoURL: data.photoURL ?? null,
                text: data.text,
                createdAt: data.createdAt,
                isSystem: !!data.isSystem,
            } as ChatMessage;
        });
        onChange(items.reverse()); // oldest first
    });
};

export const cleanupOldChatMessages = async (): Promise<void> => {
    const twoWeeksMs = 14 * 24 * 60 * 60 * 1000;
    const cutoff = Timestamp.fromMillis(Date.now() - twoWeeksMs);
    const chatRef = collection(db, FIRESTORE_COLLECTIONS.CHAT_MESSAGES);
    const q = query(chatRef, where('createdAt', '<', cutoff), orderBy('createdAt', 'asc'), limit(200));
    const snap = await getDocs(q);
    const batch = writeBatch(db);
    snap.docs.forEach(d => batch.delete(d.ref));
    if (!snap.empty) {
        await batch.commit();
    }
};

export const cleanupExpiredShameWallEntries = async (): Promise<void> => {
    const shameWallRef = collection(db, FIRESTORE_COLLECTIONS.SHAME_WALL);
    const now = Timestamp.now();
    const q = query(shameWallRef, where('expires', '<=', now), orderBy('expires', 'asc'), limit(100));
    const snap = await getDocs(q);
    const batch = writeBatch(db);
    snap.docs.forEach(d => batch.delete(d.ref));
    if (!snap.empty) {
        await batch.commit();
        console.log(`Cleaned up ${snap.docs.length} expired shame wall entries`);
    }
};

export const ensureWeeklyWinnerAnnouncement = async (): Promise<void> => {
    const prevWeekId = getPreviousWeekId();
    const annDocId = `winner-${prevWeekId}`;
    const annRef = doc(db, FIRESTORE_COLLECTIONS.ANNOUNCEMENTS, annDocId);

    // Use a transaction to prevent race conditions
    try {
        await runTransaction(db, async (transaction) => {
            const annSnap = await transaction.get(annRef);
            if (annSnap.exists()) return; // already announced

            // Compute winner for previous week
            const usersRef = collection(db, FIRESTORE_COLLECTIONS.USERS);
            const previousWeekField = `weeklyPoints.${prevWeekId}`;
            const winnerQuery = query(usersRef, where(previousWeekField, '>=', 0), orderBy(previousWeekField, 'desc'), limit(1));
            const winnerSnapshot = await getDocs(winnerQuery);
            if (winnerSnapshot.empty) return;
            const winner = winnerSnapshot.docs[0].data() as UserProfile;
            const points = winner.weeklyPoints?.[prevWeekId] || 0;
            if (points <= 0) return;

            const msg = `This week's winner is ${winner.displayName || winner.firstName} with ${points} points. You will receive 50 baht for your effort studying.`;

            // Mark as processed first to prevent duplicate posts
            transaction.set(annRef, { createdAt: serverTimestamp(), weekId: prevWeekId });

            // Post the message outside the transaction
            await postChatMessage({ uid: null, displayName: 'System', text: msg, isSystem: true });
        });
    } catch (e) {
        console.warn('Failed to announce weekly winner', e);
    }
};

// Apply loan penalty at week start if scheduled. Returns true if applied.
export const applyLoanPenaltyIfNeeded = async (uid: string): Promise<boolean> => {
    if (!uid) return false;
    const weekId = getCurrentWeekId();
    const userRef = doc(db, FIRESTORE_COLLECTIONS.USERS, uid);
    let applied = false;
    await runTransaction(db, async (tx) => {
        const snap = await tx.get(userRef);
        if (!snap.exists()) return;
        const user = snap.data() as UserProfile;
        if (!user.loanPenaltyWeekId || user.loanPenaltyWeekId !== weekId) return;
        const penalty = Math.abs(user.loanPenaltyAmount || 75);
        const currentWeekly = user.weeklyPoints?.[weekId] || 0;
        const updates: Record<string, unknown> = {};
        updates[`weeklyPoints.${weekId}`] = currentWeekly - penalty;
        updates['loanPenaltyWeekId'] = null;
        updates['loanPenaltyAmount'] = null;
        tx.update(userRef, updates);
        applied = true;
    });
    return applied;
};

// ---- Account Management ----
export const deleteUserAccount = async (uid: string): Promise<void> => {
    if (!uid) return;
    const userRef = doc(db, FIRESTORE_COLLECTIONS.USERS, uid);
    try {
        await deleteDoc(userRef);
    } catch (e) {
        // bubble up, caller may choose to ignore
        throw e;
    }
};

// ---- Conversation Progress ----

export const incrementConversationProgress = async (
    uid: string,
    topicId: number,
    durationSeconds: number
): Promise<void> => {
    if (!uid || !Number.isFinite(topicId)) return;
    const userRef = doc(db, FIRESTORE_COLLECTIONS.USERS, uid);
    const timeMsToAdd = Math.max(0, Math.round(durationSeconds * 1000));

    await runTransaction(db, async (tx) => {
        const snap = await tx.get(userRef);
        if (!snap.exists()) return;
        const current = snap.data() as UserProfile;

        const currentCounts = current.conversationPracticeCounts || {};
        const currentCountForTopic = Number(currentCounts[String(topicId)] || 0);
        const nextCounts = { ...currentCounts, [String(topicId)]: currentCountForTopic + 1 } as Record<string, number>;

        const currentTime = Number(current.conversationTotalTimeMs || 0);
        const nextTime = currentTime + timeMsToAdd;

        tx.update(userRef, {
            conversationPracticeCounts: nextCounts,
            conversationTotalTimeMs: nextTime,
        });
    });
};