import React, { useEffect, useRef, useState } from 'react';
import type { ChatMessage, UserProfile } from '../types';
import * as firestoreService from '../services/firestoreService';
import { isAdmin } from '../utils/adminUtils';
import { XIcon } from './Icons';
import { getFallbackAvatar } from '../utils/avatarUtils';

interface ChatFeedProps {
    currentUser: { uid: string; email: string | null } | null;
    currentUserProfile: UserProfile | null;
}

const ChatAvatar: React.FC<{ message: ChatMessage }> = ({ message }) => {
    const [currentPhotoURL, setCurrentPhotoURL] = useState<string | null>(message.photoURL || null);
    const [currentFallbackAvatar, setCurrentFallbackAvatar] = useState<string | null>(null);

    useEffect(() => {
        if (!message.uid) {
            return;
        }

        // Fetch current user profile to get latest photoURL and fallback avatar
        const fetchCurrentProfile = async () => {
            try {
                const profile = await firestoreService.getUserProfile(message.uid!);
                setCurrentPhotoURL(profile.photoURL);
                setCurrentFallbackAvatar(profile.fallbackAvatar || null);
            } catch (error) {
                console.error('Error fetching profile for chat avatar:', error);
                setCurrentPhotoURL(message.photoURL || null);
            }
        };
        fetchCurrentProfile();
    }, [message.uid, message.photoURL]);

    const avatarSrc = currentFallbackAvatar || currentPhotoURL || getFallbackAvatar(currentFallbackAvatar);

    return (
        <img
            src={avatarSrc}
            alt={message.displayName}
            className="w-6 h-6 rounded-full border border-warm-white/20"
        />
    );
};

export const ChatFeed: React.FC<ChatFeedProps> = ({ currentUser, currentUserProfile }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [text, setText] = useState('');
    const listRef = useRef<HTMLDivElement | null>(null);
    const userIsAdmin = isAdmin(currentUser?.email);

    useEffect(() => {
        // Cleanup old messages (best-effort)
        firestoreService.cleanupOldChatMessages().catch(() => {});
        const unsub = firestoreService.subscribeToChat((msgs) => {
            setMessages(msgs);
            // Auto-scroll
            requestAnimationFrame(() => {
                if (listRef.current) {
                    listRef.current.scrollTop = listRef.current.scrollHeight;
                }
            });
        }, 200);
        return () => unsub();
    }, []);

    const canSend = !!currentUser && !!currentUserProfile && text.trim().length > 0;

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        const content = text.trim();
        if (!canSend) return;

        // Clear text immediately to prevent duplicate sends
        setText('');

        try {
            await firestoreService.postChatMessage({
                uid: currentUser!.uid,
                displayName: currentUserProfile!.displayName || currentUserProfile!.firstName,
                photoURL: currentUserProfile!.fallbackAvatar || currentUserProfile!.photoURL || null,
                text: content,
                isSystem: false,
            });
        } catch (e) {
            alert('Failed to send message');
            // Restore message on failure so user can retry
            setText(content);
        }
    };

    const handleDeleteMessage = async (messageId: string | undefined) => {
        if (!messageId || !userIsAdmin) return;
        if (!confirm('Delete this message?')) return;
        try {
            await firestoreService.deleteChatMessage(messageId);
        } catch (e) {
            alert('Failed to delete message');
            console.error(e);
        }
    };

    return (
        <div className="bg-warm-white/5 border border-warm-white/10">
            <div className="p-3 border-b border-warm-white/10">
                <h3 className="font-heading text-2xl text-warm-white uppercase">Community Chat</h3>
                <p className="text-xs text-warm-white/60">Auto-deletes messages older than 2 weeks</p>
            </div>
            <div ref={listRef} className="max-h-80 overflow-y-auto p-3 space-y-2">
                {messages.length === 0 && (
                    <p className="text-warm-white/60 text-sm">No messages yet. Say hi!</p>
                )}
                {messages.map((m) => (
                    <div key={m.id} className={`flex items-start gap-2 group ${m.isSystem ? 'opacity-80' : ''}`}>
                        {!m.isSystem && <ChatAvatar message={m} />}
                        <div className={`p-2 flex-1 ${m.isSystem ? 'bg-warm-white/10 text-warm-white' : 'bg-warm-white text-charcoal-ink'}`}>
                            <p className="text-xs font-bold mb-0.5">{m.isSystem ? 'System' : m.displayName}</p>
                            <p className="text-sm whitespace-pre-wrap">{m.text}</p>
                        </div>
                        {userIsAdmin && m.id && (
                            <button
                                onClick={() => handleDeleteMessage(m.id)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-500/20 text-red-400 self-start"
                                title="Delete message"
                            >
                                <XIcon className="w-3 h-3" />
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSend} className="flex items-center gap-2 p-3 border-t border-warm-white/10">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write a message..."
                    className="flex-1 p-2 bg-transparent border border-warm-white/20 text-warm-white"
                />
                <button type="submit" disabled={!canSend} className="px-3 py-2 bg-vibrant-orange text-charcoal-ink font-bold uppercase disabled:opacity-50">Send</button>
            </form>
        </div>
    );
};

export default ChatFeed;


