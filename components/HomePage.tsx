import React, { useState, useEffect } from 'react';
import type { Language, Lesson, LeaderboardEntry, ShameWallEntry } from '../types';
import { UNITS } from '../data/curriculum/units';
import { UI_STRINGS } from '../data/uiStrings';
import { ArrowLeftIcon, MicrophoneIcon, BookOpenIcon, PencilIcon, CheckCircleIcon, DocumentTextIcon, XIcon } from './Icons';
import { useAuth } from '../contexts/AuthContext';
import * as firestoreService from '../services/firestoreService';
import { Leaderboard } from './Leaderboard';
import { ShameWall } from './ShameWall';
import { ProfileModal } from './ProfileModal';
import ErrorBoundary from './ErrorBoundary';
import { ChatFeed } from './ChatFeed';
import EditProfileModal from './EditProfileModal';
import { findAvailableAvatar } from '../utils/avatarUtils';

interface HomePageProps {
    language: Language;
    onSelectLesson: (lesson: Lesson) => void;
    onStartConversationPractice: () => void;
    onStartWritingPractice: () => void;
    onStartReadingPractice: () => void;
    onBack: () => void;
    onRestartOnboarding?: () => void;
    onShowInstallInstructions?: () => void;
    onChangeLanguage?: (language: Language) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ language, onSelectLesson, onStartConversationPractice, onStartWritingPractice, onStartReadingPractice, onBack, onRestartOnboarding, onShowInstallInstructions, onChangeLanguage }) => {
    const { user, userProfile, signOut } = useAuth();
    const [expandedUnit, setExpandedUnit] = useState<number | null>(UNITS[0]?.id ?? null);
    
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [weeklyWinner, setWeeklyWinner] = useState<LeaderboardEntry | null>(null);
    const [shameWall, setShameWall] = useState<ShameWallEntry[]>([]);
    const [selectedUid, setSelectedUid] = useState<string | null>(null);
    const [isThaiLooped, setIsThaiLooped] = useState<boolean>(false);
    const [showEditProfile, setShowEditProfile] = useState<boolean>(false);
    const [showVersionModal, setShowVersionModal] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                await refreshLeaderboard();
                // This logic would ideally be in a secure backend.
                await firestoreService.updateWeeklyLoserOnShameWall();
                const shameWallEntries = await firestoreService.getShameWall();
                setShameWall(shameWallEntries);
                // Announce weekly winner if not already
                await firestoreService.ensureWeeklyWinnerAnnouncement();
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        const hasClass = document.documentElement.classList.contains('thai-looped') || document.body.classList.contains('thai-looped');
        setIsThaiLooped(hasClass);
    }, []);

    const refreshLeaderboard = async () => {
        const { leaderboard, weeklyWinner } = await firestoreService.getLeaderboard();
        setLeaderboard(leaderboard);
        setWeeklyWinner(weeklyWinner);
    };


    const handleSignOutAndBack = async () => {
        await signOut();
        onBack();
    };

    const handlePracticeReadingClick = () => {
        onStartReadingPractice();
    };

    const toggleThaiLooped = () => {
        const next = !isThaiLooped;
        setIsThaiLooped(next);
        document.documentElement.classList.toggle('thai-looped', next);
        document.body.classList.toggle('thai-looped', next);
        try {
            localStorage.setItem('thaiTalk-thai-looped-font', next ? 'true' : 'false');
        } catch (e) {}
    };

    return (
        <div className="w-full max-w-6xl mx-auto py-8">
            <header className="px-2 mb-8">
                <div className="text-center">
                    <h1 className="font-heading text-4xl md:text-5xl text-warm-white uppercase">{UI_STRINGS.homeTitle[language.code]}</h1>
                    <h2 className="font-thai text-warm-white/50 text-5xl md:text-6xl -mt-4">บทเรียน</h2>
                </div>
                
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Leaderboard - First on mobile, sidebar on desktop */}
                <aside className="md:col-start-3 md:row-start-1">
                    <Leaderboard
                        entries={leaderboard}
                        weeklyWinner={weeklyWinner}
                        currentUserId={user?.uid || null}
                        currentUserProfile={userProfile}
                        language={language}
                        onSelectUser={(uid) => setSelectedUid(uid)}
                        onIconClick={(uid) => setSelectedUid(uid)}
                    />
                    <ShameWall entries={shameWall} onEntryDeleted={async () => {
                        const shameWallEntries = await firestoreService.getShameWall();
                        setShameWall(shameWallEntries);
                    }} />
                </aside>

                {/* Main Content: Lessons & Practice */}
                <div className="md:col-span-2 md:col-start-1">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                        <button
                            onClick={onStartConversationPractice}
                            className="flex flex-col items-center justify-center p-4 h-40 bg-warm-white/5 hover:bg-warm-white/10 text-warm-white font-bold uppercase active:scale-95 transition-transform duration-150 group border-2 border-warm-white/10"
                        >
                            <MicrophoneIcon className="w-10 h-10 mb-2" />
                            <span className="text-lg text-center">{UI_STRINGS.practiceConversation[language.code]}</span>
                        </button>
                        <button
                            onClick={onStartWritingPractice}
                            className="flex flex-col items-center justify-center p-4 h-40 bg-warm-white/5 hover:bg-warm-white/10 text-warm-white font-bold uppercase active:scale-95 transition-transform duration-150 group border-2 border-warm-white/10"
                        >
                            <PencilIcon className="w-10 h-10 mb-2" />
                            <span className="text-lg text-center">{UI_STRINGS.practiceWriting[language.code]}</span>
                        </button>
                        <button
                            onClick={handlePracticeReadingClick}
                            className="flex flex-col items-center justify-center p-4 h-40 bg-warm-white/5 hover:bg-warm-white/10 text-warm-white font-bold uppercase active:scale-95 transition-transform duration-150 group border-2 border-warm-white/10"
                        >
                            <DocumentTextIcon className="w-10 h-10 mb-2" />
                            <span className="text-lg text-center">{UI_STRINGS.practiceReading[language.code]}</span>
                        </button>
                    </div>

                    <main className="space-y-6">
                        {UNITS.map(unit => (
                            <div key={unit.id} className="bg-warm-white/5 border border-warm-white/10">
                                <button 
                                    className="w-full p-6 text-left flex justify-between items-center"
                                    onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
                                    aria-expanded={expandedUnit === unit.id}
                                >
                                    <div>
                                        <p className="text-vibrant-orange font-sans font-bold uppercase text-sm">{UI_STRINGS.unit[language.code]} {unit.id}</p>
                                        <h3 className="font-heading text-3xl text-warm-white">{unit.title[language.code]}</h3>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 text-warm-white transition-transform duration-300 ${expandedUnit === unit.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {expandedUnit === unit.id && (
                                    <div className="p-1 md:p-6 md:pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                                        {unit.lessons.map(lesson => {
                                            const score = userProfile?.testScores?.[lesson.id];
                                            const isCompleted = score !== undefined;

                                            return (
                                                <button 
                                                    key={lesson.id}
                                                    onClick={() => onSelectLesson(lesson)}
                                                    className={`w-full flex items-start p-4 text-charcoal-ink transition-colors rounded-none ${
                                                        isCompleted 
                                                        ? 'bg-warm-white/40 hover:bg-warm-white/50' 
                                                        : 'bg-warm-white active:bg-vibrant-orange active:text-warm-white group'
                                                    }`}
                                                >
                                                    {isCompleted ? (
                                                        <CheckCircleIcon className="w-6 h-6 text-vibrant-orange mr-4 mt-1 flex-shrink-0" />
                                                    ) : (
                                                        <BookOpenIcon className="w-6 h-6 text-vibrant-orange mr-4 mt-1 flex-shrink-0 group-active:text-warm-white" />
                                                    )}
                                                    <div className={`text-left flex-grow ${isCompleted ? 'opacity-70' : ''}`}>
                                                        <p className="font-bold text-lg">{lesson.id}: {lesson.title[language.code]}</p>
                                                    </div>
                                                    {isCompleted && (
                                                        <div className="text-right ml-2">
                                                            <p className="text-xs font-bold uppercase text-charcoal-ink/60">{UI_STRINGS.scoreLabel[language.code]}</p>
                                                            <p className="font-bold text-xl text-vibrant-orange">{score}<span className="text-sm text-charcoal-ink/80">/100</span></p>
                                                        </div>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </main>
                </div>
            </div>
            
            <div className="md:col-span-3 mt-8">
                <ChatFeed currentUser={user} currentUserProfile={userProfile} />
            </div>

            <div className="text-center mt-12">
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <button onClick={handleSignOutAndBack} className="text-vibrant-orange hover:underline font-semibold flex items-center gap-2">
                        <ArrowLeftIcon />
                        {UI_STRINGS.changeLanguage[language.code]}
                    </button>
                    {userProfile && (
                        <button onClick={() => setShowEditProfile(true)} className="text-warm-white/80 hover:underline text-sm">
                            {UI_STRINGS.editProfile?.[language.code] || 'Edit Profile'}
                        </button>
                    )}
                    {onRestartOnboarding && (
                        <button onClick={onRestartOnboarding} className="text-warm-white/80 hover:underline text-sm">
                            {UI_STRINGS.restartOnboarding?.[language.code] || 'Restart Onboarding'}
                        </button>
                    )}
                    {onShowInstallInstructions && (
                        <button onClick={onShowInstallInstructions} className="text-warm-white/80 hover:underline text-sm">
                            {UI_STRINGS.installApp?.[language.code] || 'Install App'}
                        </button>
                    )}
                    <button onClick={toggleThaiLooped} className="text-warm-white/60 hover:text-warm-white hover:underline text-sm" aria-pressed={isThaiLooped}>
                        {isThaiLooped ? UI_STRINGS.thaiLoopsOn[language.code] : UI_STRINGS.thaiLoopsOff[language.code]}
                    </button>
                </div>
                <div className="mt-4">
                    <button onClick={() => setShowVersionModal(true)} className="text-warm-white/40 hover:text-warm-white/60 hover:underline text-xs">
                        version 1.1.0
                    </button>
                </div>
            </div>

            {selectedUid && user && userProfile && (
                <ErrorBoundary
                    fallback={
                        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                            <div className="bg-charcoal-ink border-2 border-warm-white/20 p-6 w-full max-w-md text-warm-white text-center">
                                <p className="mb-4">Something went wrong.</p>
                                <button onClick={() => setSelectedUid(null)} className="px-4 py-2 bg-vibrant-orange text-warm-white font-bold uppercase">Close</button>
                            </div>
                        </div>
                    }
                >
                    <ProfileModal
                        selectedUserId={selectedUid}
                        currentUserId={user.uid}
                        currentUserProfile={userProfile}
                        onClose={() => setSelectedUid(null)}
                        onActionCompleted={refreshLeaderboard}
                    />
                </ErrorBoundary>
            )}

            {showEditProfile && userProfile && (
                <EditProfileModal isOpen={showEditProfile} onClose={() => setShowEditProfile(false)} profile={userProfile} language={language} onChangeLanguage={(l) => onChangeLanguage && onChangeLanguage(l)} />
            )}

            {showVersionModal && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-charcoal-ink border-2 border-warm-white/20 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
                        <div className="sticky top-0 bg-charcoal-ink border-b border-warm-white/20 p-4 flex justify-between items-center">
                            <h2 className="font-heading text-2xl text-warm-white uppercase">release notes</h2>
                            <button onClick={() => setShowVersionModal(false)} className="text-warm-white/60 hover:text-warm-white">
                                <XIcon className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-6 space-y-8">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-warm-white/80 text-sm font-bold">version 1.0</h3>
                                    <span className="text-warm-white/50 text-xs">tuesday, nov 4 2025</span>
                                </div>
                                <p className="text-warm-white/70 text-sm">app released! enjoy.</p>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-warm-white/80 text-sm font-bold">version 1.1</h3>
                                    <span className="text-warm-white/50 text-xs">thursday, nov 6 2025</span>
                                </div>
                                <div className="space-y-4 text-sm">
                                    <div>
                                        <p className="text-warm-white/80 font-semibold mb-2">new things:</p>
                                        <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                            <li>5 new lessons (1.6-1.10)</li>
                                            <li>audio analysis & structured feedback for conversations</li>
                                            <li>new cultural note added to lesson 1.4 on the verb len</li>
                                            <li>back gesture support added on android and ios</li>
                                            <li>install app from homepage</li>
                                            <li>new random option for no review cards in lessons</li>
                                            <li>all new rendering engine for handwriting practice, use on tablets for best results</li>
                                            <li>new shame wall mercy rule: 2,000+ points/week keeps you off the wall, even if you're in last place</li>
                                            <li>added ability to switch between "profile pictures" for other users</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="text-warm-white/80 font-semibold mb-2">issues/fixes:</p>
                                        <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                            <li>flashcard sets now worth 5 points</li>
                                            <li>lesson 1.1: "yang" → "not yet" (vocab)</li>
                                            <li>lesson 1.4: "nawn" → "non" (romanization)</li>
                                            <li>fixed shame wall issue with color tinting</li>
                                            <li>solved logic concern that gave people with high streaks too many points</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="text-warm-white/80 font-semibold mb-2">coming soon:</p>
                                        <ul className="text-warm-white/70 space-y-1 list-disc list-inside">
                                            <li>more lessons: 1.11 through 1.20 will be coming in the next few days</li>
                                            <li>more reading lessons soon also! very important more reading practice (lessons 6 & 8)</li>
                                            <li>bug fix for issue with saved handwiring anaylisis</li>
                                            <li>looking ahead to version 2.0: culture lessons, i'm very excited about this! you'll be able to learn vocabulary directly from music videos, movies, tiktok, and recent news events! any ideas on how to implement this are appreciated as i work on how to build out this feature</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};