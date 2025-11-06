export const FALLBACK_AVATARS = [
    '/avatar1.png',
    '/avatar2.jpg',
    '/avatar3.jpg',
    '/avatar4.jpg',
    '/avatar5.jpg',
    '/avatar6.jpg',
    '/avatar7.jpg',
];

/**
 * Get a fallback avatar for a user
 * If the user has a stored fallback avatar, use that
 * Otherwise, return a default one (caller should assign and save a unique one)
 */
export const getFallbackAvatar = (userFallbackAvatar?: string | null): string => {
    if (userFallbackAvatar) {
        return userFallbackAvatar;
    }
    // Default to first avatar if none assigned yet
    return FALLBACK_AVATARS[0];
};

/**
 * Find an available avatar that's not already assigned to another user
 */
export const findAvailableAvatar = (takenAvatars: string[]): string => {
    const takenSet = new Set(takenAvatars);
    const availableAvatars = FALLBACK_AVATARS.filter(
        avatar => !takenSet.has(avatar)
    );

    if (availableAvatars.length === 0) {
        // All avatars taken, pick a random one
        return FALLBACK_AVATARS[Math.floor(Math.random() * FALLBACK_AVATARS.length)];
    }

    // Return a random available avatar
    return availableAvatars[Math.floor(Math.random() * availableAvatars.length)];
};
