import React, { useState } from 'react';
import type { UserProfile, Language } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { XIcon } from './Icons';
import { UI_STRINGS, SUPPORTED_LANGUAGES } from '../data/uiStrings';

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    profile: UserProfile;
    language: Language;
    onChangeLanguage: (language: Language) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose, profile, language, onChangeLanguage }) => {
    const { updateUserProfile, deleteAccount } = useAuth();
    const [firstName, setFirstName] = useState(profile.firstName || '');
    const [lastName, setLastName] = useState(profile.lastName || '');
    const [thaiName, setThaiName] = useState(profile.thaiName || '');
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const lang = language.code;

    if (!isOpen) return null;

    const handleSave = async () => {
        setBusy(true);
        setError(null);
        try {
            const nothingChanged =
                firstName.trim() === (profile.firstName || '') &&
                lastName.trim() === (profile.lastName || '') &&
                thaiName.trim() === (profile.thaiName || '');
            if (nothingChanged) {
                onClose();
                return;
            }
            await updateUserProfile({ firstName: firstName.trim(), lastName: lastName.trim(), thaiName: thaiName.trim() });
            onClose();
        } catch (e: any) {
            setError(e?.message || 'Failed to save profile. Please try again.');
        } finally {
            setBusy(false);
        }
    };

    const handleDeleteAccount = async () => {
        // Simple confirmation prompt
        if (!confirm(UI_STRINGS.confirmDeleteAccount?.[lang] || 'Delete your account? This cannot be undone.')) return;
        setBusy(true);
        setError(null);
        try {
            await deleteAccount();
            // App will transition due to auth state change
        } catch (e: any) {
            setError(e?.message || (UI_STRINGS.deleteAccountFailed?.[lang] || 'Failed to delete account.'));
        } finally {
            setBusy(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-charcoal-ink border-2 border-warm-white/20 p-6 w-full max-w-md text-warm-white relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-warm-white/60 hover:text-warm-white">
                    <XIcon className="w-6 h-6" />
                </button>
                <h3 className="font-heading text-2xl uppercase mb-4">Edit Profile</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold mb-2">{UI_STRINGS.authFirstNameLabel[lang]}</label>
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-3 bg-warm-white/10 border-2 border-warm-white/20 rounded-none focus:border-vibrant-orange outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">{UI_STRINGS.authLastNameLabel[lang]}</label>
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full p-3 bg-warm-white/10 border-2 border-warm-white/20 rounded-none focus:border-vibrant-orange outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">{UI_STRINGS.authThaiNameLabel[lang]}</label>
                        <input value={thaiName} onChange={(e) => setThaiName(e.target.value)} className="w-full p-3 bg-warm-white/10 border-2 border-warm-white/20 rounded-none focus:border-vibrant-orange outline-none font-thai" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">{UI_STRINGS.languageLabel?.[lang] || 'Language'}</label>
                        <select
                            value={language.code}
                            onChange={(e) => {
                                const nxt = SUPPORTED_LANGUAGES.find(l => l.code === e.target.value as any);
                                if (nxt) onChangeLanguage(nxt);
                            }}
                            className="w-full p-3 bg-warm-white/10 border-2 border-warm-white/20 rounded-none focus:border-vibrant-orange outline-none text-warm-white"
                        >
                            {SUPPORTED_LANGUAGES.map(l => (
                                <option key={l.code} value={l.code} className="bg-charcoal-ink text-warm-white">{l.nativeName}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {error && <p className="text-red-400 text-sm mt-3" role="alert">{error}</p>}
                <div className="mt-6 flex gap-3 flex-wrap">
                    <button type="button" onClick={onClose} className="flex-1 py-3 bg-warm-white/10 border border-warm-white/20 uppercase font-bold">{UI_STRINGS.close[lang]}</button>
                    <button type="button" onClick={handleSave} disabled={busy} className="flex-1 py-3 bg-vibrant-orange text-charcoal-ink uppercase font-bold disabled:opacity-50">{UI_STRINGS.saveLabel?.[lang] || 'Save'}</button>
                </div>
                <div className="mt-4">
                    <button type="button" onClick={handleDeleteAccount} disabled={busy} className="w-full py-3 bg-red-600/80 hover:bg-red-600 text-warm-white uppercase font-bold disabled:opacity-50">
                        {UI_STRINGS.deleteAccount?.[lang] || 'Delete Account'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfileModal;


