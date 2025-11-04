import React, { useState, useEffect } from 'react';
import type { Language } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { ArrowLeftIcon } from './Icons';
import { UI_STRINGS } from '../data/uiStrings';
import * as geminiService from '../services/geminiService';
import * as firestoreService from '../services/firestoreService';

interface RadioOptionProps {
    name: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    subLabel?: string;
}

const RadioOption: React.FC<RadioOptionProps> = ({ name, value, checked, onChange, label, subLabel }) => (
    <label className={`w-full flex items-center p-4 bg-warm-white/10 border-2 rounded-none transition-colors cursor-pointer ${checked ? 'border-vibrant-orange' : 'border-warm-white/20 hover:border-warm-white/40'}`}>
        <input 
            type="radio" 
            name={name} 
            value={value}
            checked={checked}
            onChange={onChange}
            className="hidden"
        />
        <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mr-4 flex items-center justify-center ${checked ? 'border-vibrant-orange' : 'border-warm-white/50'}`}>
            {checked && <div className="w-3 h-3 bg-vibrant-orange rounded-full"></div>}
        </div>
        <div>
            <span className="font-bold">{label}</span>
            {subLabel && <p className="text-sm text-warm-white/60">{subLabel}</p>}
        </div>
    </label>
);

interface AuthScreenProps {
  language: Language;
  onAuthSuccess: () => void;
  onBack: () => void;
}

const ThaiNameHelpModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onUseName: (name: string) => void;
    language: Language;
}> = ({ isOpen, onClose, onUseName, language }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [translatedName, setTranslatedName] = useState<string | null>(null);
    const [isTranslating, setIsTranslating] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);

    const langCode = language.code;

    const loadingMessages = [
        UI_STRINGS.modalLoading1[langCode],
        UI_STRINGS.modalLoading2[langCode],
        UI_STRINGS.modalLoading3[langCode],
        UI_STRINGS.modalLoading4[langCode],
        UI_STRINGS.modalLoading5[langCode],
        UI_STRINGS.modalLoading6[langCode],
    ];

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;
        if (isTranslating) {
            interval = setInterval(() => {
                setLoadingMessageIndex(prevIndex => (prevIndex + 1) % loadingMessages.length);
            }, 1500);
        } else {
            setLoadingMessageIndex(0);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isTranslating, loadingMessages.length]);
    
    const handleTranslate = async () => {
        if (!firstName.trim() || !lastName.trim()) {
            setError(UI_STRINGS.modalErrorBothNames[langCode]);
            return;
        }
        setIsTranslating(true);
        setError(null);
        setTranslatedName(null);

        try {
            const fullName = await geminiService.translateNameToThai(firstName.trim(), lastName.trim());
            setTranslatedName(fullName);
        } catch (e) {
            console.error("Translation error:", e);
            setError(UI_STRINGS.modalErrorConvert[langCode]);
        } finally {
            setIsTranslating(false);
        }
    };

    const handleUseName = () => {
        if (translatedName) {
            onUseName(translatedName);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-charcoal-ink/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-charcoal-ink border-2 border-warm-white/20 p-8 rounded-none max-w-md w-full text-warm-white" onClick={(e) => e.stopPropagation()}>
                <h2 className="font-heading text-2xl uppercase mb-2">{UI_STRINGS.modalTitle[langCode]}</h2>
                <p className="text-warm-white/70 mb-6">{UI_STRINGS.modalSubtitle[langCode]}</p>

                {!translatedName && (
                    <div className="space-y-4">
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={UI_STRINGS.modalFirstNamePlaceholder[langCode]} className="w-full p-3 bg-warm-white/10 border-2 border-warm-white/20 rounded-none focus:border-vibrant-orange outline-none"/>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={UI_STRINGS.modalLastNamePlaceholder[langCode]} className="w-full p-3 bg-warm-white/10 border-2 border-warm-white/20 rounded-none focus:border-vibrant-orange outline-none"/>
                        <button onClick={handleTranslate} disabled={isTranslating} className="w-full p-4 bg-vibrant-orange font-bold uppercase disabled:opacity-50 min-h-[56px]">
                            {isTranslating ? loadingMessages[loadingMessageIndex] : UI_STRINGS.modalConvertButton[langCode]}
                        </button>
                    </div>
                )}

                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                
                {translatedName && (
                    <div className="text-center">
                        <p className="text-warm-white/80">{UI_STRINGS.modalResultHeader[langCode]}</p>
                        <p className="font-thai text-4xl my-4 p-4 bg-warm-white/10 rounded-none">{translatedName}</p>
                        <p className="text-sm text-warm-white/60 mb-6">{UI_STRINGS.modalResultSubtext[langCode]}</p>
                        <button onClick={handleUseName} className="w-full p-4 bg-vibrant-orange font-bold uppercase">
                            {UI_STRINGS.modalUseThisName[langCode]}
                        </button>
                    </div>
                )}
                 <button onClick={onClose} className="w-full text-center mt-4 text-warm-white/60 hover:underline">
                    {UI_STRINGS.modalClose[langCode]}
                </button>
            </div>
        </div>
    );
};


export const AuthScreen: React.FC<AuthScreenProps> = ({ language, onAuthSuccess, onBack }) => {
    const { signInWithGoogle, loading } = useAuth();
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [step, setStep] = useState(1);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [thaiName, setThaiName] = useState('');
    const [formErrors, setFormErrors] = useState<{ firstName?: string; lastName?: string; thaiName?: string }>({});
    
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

    const [speakingLevel, setSpeakingLevel] = useState('');
    const [readingLevel, setReadingLevel] = useState('');
    const [learningGoal, setLearningGoal] = useState('');

    const langCode = language.code;

    const validateProfile = () => {
        const errors: { firstName?: string; lastName?: string; thaiName?: string } = {};
        const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
        const thaiNameRegex = /^[\u0E00-\u0E7F\s]{2,50}$/;

        if (!firstName.trim()) {
            errors.firstName = UI_STRINGS.authErrorFirstNameRequired[langCode];
        } else if (!nameRegex.test(firstName)) {
            errors.firstName = UI_STRINGS.authErrorFirstNameInvalid[langCode];
        }

        if (!lastName.trim()) {
            errors.lastName = UI_STRINGS.authErrorLastNameRequired[langCode];
        } else if (!nameRegex.test(lastName)) {
            errors.lastName = UI_STRINGS.authErrorLastNameInvalid[langCode];
        }

        if (!thaiName.trim()) {
            errors.thaiName = UI_STRINGS.authErrorThaiNameRequired[langCode];
        } else if (!thaiNameRegex.test(thaiName)) {
            errors.thaiName = UI_STRINGS.authErrorThaiNameInvalid[langCode];
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    
    const handleNext = () => {
        if (validateProfile()) {
            setStep(2);
        }
    };

    const handleCreateProfile = async () => {
        setError(null);
        setIsSigningIn(true);
        try {
            const user = await signInWithGoogle();
            if (user) {
                // Now create the profile in Firestore
                await firestoreService.createUserProfile(user, {
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    thaiName: thaiName.trim(),
                    speakingLevel,
                    readingLevel,
                    learningGoal,
                });
                onAuthSuccess();
            } else {
                setError(UI_STRINGS.authErrorCancelled[langCode]);
            }
        } catch(e) {
             setError(UI_STRINGS.authErrorFailed[langCode]);
        } finally {
            setIsSigningIn(false);
        }
    };

    const handleExistingUserSignIn = async () => {
        setError(null);
        setIsSigningIn(true);
        try {
            const user = await signInWithGoogle();
            if (user) {
                // Check if profile exists
                const profile = await firestoreService.getUserProfile(user.uid);
                if (profile) {
                    // Profile exists, proceed to success
                    onAuthSuccess();
                } else {
                    // No profile found, user needs to complete the form
                    setError(UI_STRINGS.authErrorFailed[langCode]);
                }
            } else {
                setError(UI_STRINGS.authErrorCancelled[langCode]);
            }
        } catch(e) {
             setError(UI_STRINGS.authErrorFailed[langCode]);
        } finally {
            setIsSigningIn(false);
        }
    };
    
    return (
        <div className="w-full max-w-lg mx-auto flex flex-col justify-center min-h-[90vh] text-warm-white p-4">
             <ThaiNameHelpModal 
                isOpen={isHelpModalOpen}
                onClose={() => setIsHelpModalOpen(false)}
                onUseName={(name) => setThaiName(name)}
                language={language}
            />
            {step === 1 && (
                <>
                    <div className="text-center mb-12">
                        <h1 className="font-heading text-5xl md:text-6xl uppercase">{UI_STRINGS.authProfileTitle[langCode]}</h1>
                        <p className="text-warm-white/70 mt-2">{UI_STRINGS.authProfileSubtitle[langCode]}</p>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-bold mb-2">{UI_STRINGS.authFirstNameLabel[langCode]}</label>
                            <input 
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full p-4 bg-warm-white/10 border-2 border-warm-white/20 rounded-none focus:border-vibrant-orange focus:ring-0 focus:outline-none transition-colors"
                                placeholder={UI_STRINGS.authFirstNamePlaceholder[langCode]}
                                aria-required="true"
                                aria-invalid={!!formErrors.firstName}
                            />
                            {formErrors.firstName && <p className="text-red-400 text-sm mt-1" role="alert">{formErrors.firstName}</p>}
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-bold mb-2">{UI_STRINGS.authLastNameLabel[langCode]}</label>
                            <input 
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full p-4 bg-warm-white/10 border-2 border-warm-white/20 rounded-none focus:border-vibrant-orange focus:ring-0 focus:outline-none transition-colors"
                                placeholder={UI_STRINGS.authLastNamePlaceholder[langCode]}
                                aria-required="true"
                                aria-invalid={!!formErrors.lastName}
                            />
                            {formErrors.lastName && <p className="text-red-400 text-sm mt-1" role="alert">{formErrors.lastName}</p>}
                        </div>
                        <div>
                            <label htmlFor="thaiName" className="block text-sm font-bold mb-2">
                                {UI_STRINGS.authThaiNameLabel[langCode]}
                                <button onClick={() => setIsHelpModalOpen(true)} className="ml-2 text-vibrant-orange text-xs underline font-normal">{UI_STRINGS.authThaiNameHelp[langCode]}</button>
                            </label>
                            <input 
                                type="text"
                                id="thaiName"
                                value={thaiName}
                                onChange={(e) => setThaiName(e.target.value)}
                                className="w-full p-4 bg-warm-white/10 border-2 border-warm-white/20 rounded-none focus:border-vibrant-orange focus:ring-0 focus:outline-none transition-colors font-thai"
                                placeholder={UI_STRINGS.authThaiNamePlaceholder[langCode]}
                                aria-required="true"
                                aria-invalid={!!formErrors.thaiName}
                            />
                            {formErrors.thaiName && <p className="text-red-400 text-sm mt-1" role="alert">{formErrors.thaiName}</p>}
                        </div>
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-full flex justify-center items-center p-6 bg-vibrant-orange text-warm-white rounded-none active:scale-95 transition-all duration-150 group font-bold text-xl uppercase"
                    >
                        {UI_STRINGS.authNext[langCode]}
                    </button>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-warm-white/20"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-charcoal-ink text-warm-white/60">OR</span>
                        </div>
                    </div>

                    <button
                        onClick={handleExistingUserSignIn}
                        disabled={isSigningIn}
                        className="w-full flex justify-center items-center p-4 bg-warm-white/10 hover:bg-warm-white/20 text-warm-white rounded-none active:scale-95 transition-all duration-150 disabled:opacity-50 font-semibold border-2 border-warm-white/20"
                    >
                        {isSigningIn ? UI_STRINGS.authSigningIn[langCode] : UI_STRINGS.authExistingUserButton[langCode]}
                    </button>
                    {error && <p className="text-red-400 text-center mt-4" role="alert">{error}</p>}
                    
                    <div className="text-center mt-12">
                        <button onClick={onBack} className="text-vibrant-orange hover:underline font-semibold flex items-center gap-2 mx-auto">
                            <ArrowLeftIcon />
                            {UI_STRINGS.changeLanguage[language.code]}
                        </button>
                    </div>
                </>
            )}

            {step === 2 && (
                 <>
                    <div className="text-center mb-10">
                        <h1 className="font-heading text-4xl md:text-5xl uppercase">{UI_STRINGS.authAboutTitle[langCode]}</h1>
                        <p className="text-warm-white/70 mt-2">{UI_STRINGS.authAboutSubtitle[langCode]}</p>
                    </div>

                    <div className="space-y-6 mb-8">
                         <div>
                            <h2 className="text-lg font-bold mb-3">{UI_STRINGS.authThaiLevelQuestion[langCode]}</h2>
                            <div className="space-y-2">
                                <RadioOption name="speakingLevel" value="beginner" checked={speakingLevel === 'beginner'} onChange={(e) => setSpeakingLevel(e.target.value)} label={UI_STRINGS.authThaiLevelOption1[langCode]} subLabel={UI_STRINGS.authThaiLevelOption1Sub[langCode]} />
                                <RadioOption name="speakingLevel" value="intermediate" checked={speakingLevel === 'intermediate'} onChange={(e) => setSpeakingLevel(e.target.value)} label={UI_STRINGS.authThaiLevelOption2[langCode]} subLabel={UI_STRINGS.authThaiLevelOption2Sub[langCode]} />
                                <RadioOption name="speakingLevel" value="advanced" checked={speakingLevel === 'advanced'} onChange={(e) => setSpeakingLevel(e.target.value)} label={UI_STRINGS.authThaiLevelOption3[langCode]} subLabel={UI_STRINGS.authThaiLevelOption3Sub[langCode]} />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold mb-3">{UI_STRINGS.authReadingQuestion[langCode]}</h2>
                            <div className="space-y-2">
                                <RadioOption name="readingLevel" value="beginner" checked={readingLevel === 'beginner'} onChange={(e) => setReadingLevel(e.target.value)} label={UI_STRINGS.authReadingOption1[langCode]} subLabel={UI_STRINGS.authReadingOption1Sub[langCode]} />
                                <RadioOption name="readingLevel" value="intermediate" checked={readingLevel === 'intermediate'} onChange={(e) => setReadingLevel(e.target.value)} label={UI_STRINGS.authReadingOption2[langCode]} subLabel={UI_STRINGS.authReadingOption2Sub[langCode]} />
                                <RadioOption name="readingLevel" value="advanced" checked={readingLevel === 'advanced'} onChange={(e) => setReadingLevel(e.target.value)} label={UI_STRINGS.authReadingOption3[langCode]} subLabel={UI_STRINGS.authReadingOption3Sub[langCode]} />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold mb-3">{UI_STRINGS.authGoalQuestion[langCode]}</h2>
                            <div className="space-y-2">
                                <RadioOption name="learningGoal" value="survival" checked={learningGoal === 'survival'} onChange={(e) => setLearningGoal(e.target.value)} label={UI_STRINGS.authGoalOption1[langCode]} subLabel={UI_STRINGS.authGoalOption1Sub[langCode]} />
                                <RadioOption name="learningGoal" value="social" checked={learningGoal === 'social'} onChange={(e) => setLearningGoal(e.target.value)} label={UI_STRINGS.authGoalOption2[langCode]} subLabel={UI_STRINGS.authGoalOption2Sub[langCode]} />
                                <RadioOption name="learningGoal" value="fluent" checked={learningGoal === 'fluent'} onChange={(e) => setLearningGoal(e.target.value)} label={UI_STRINGS.authGoalOption3[langCode]} subLabel={UI_STRINGS.authGoalOption3Sub[langCode]} />
                            </div>
                        </div>
                    </div>
                    
                    <button
                        onClick={handleCreateProfile}
                        disabled={isSigningIn || loading || !speakingLevel || !readingLevel || !learningGoal}
                        className="w-full flex justify-center items-center gap-4 p-6 bg-vibrant-orange text-warm-white rounded-none active:scale-95 transition-all duration-150 group disabled:opacity-50 font-bold text-xl uppercase"
                    >
                        <span>
                            {isSigningIn || loading ? UI_STRINGS.authCreatingProfile[langCode] : UI_STRINGS.authCreateProfile[langCode]}
                        </span>
                    </button>
                    {error && <p className="text-red-400 text-center mt-4" role="alert">{error}</p>}

                    <div className="text-center mt-8">
                        <button onClick={() => setStep(1)} className="text-vibrant-orange hover:underline font-semibold flex items-center gap-2 mx-auto">
                            <ArrowLeftIcon />
                            {UI_STRINGS.authBack[langCode]}
                        </button>
                    </div>
                 </>
            )}
        </div>
    );
};