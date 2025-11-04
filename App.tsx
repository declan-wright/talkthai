import React, { useState, useEffect, useCallback } from 'react';
import { type Language, type Lesson, type ConversationTopic, type Transcript, LanguageCode, VocabularyItem, HandwritingFeedback, UserProfile } from './types';
import { SUPPORTED_LANGUAGES } from './data/uiStrings';
import { LanguageSelector } from './components/LanguageSelector';
import { ConversationPracticeSelector } from './components/ConversationPracticeSelector';
import { Conversation } from './components/Conversation';
import { AnalysisView } from './components/AnalysisView';
import { InstallInstructions } from './components/InstallInstructions';
import { HomePage } from './components/HomePage';
import { LessonView } from './components/LessonView';
import { WritingLessonSelector } from './components/WritingLessonSelector';
import { WritingPractice } from './components/WritingPractice';
import { WritingAnalysisView } from './components/WritingAnalysisView';
import { ReadingLessonSelector } from './components/ReadingLessonSelector';
import { ReadingLessonView } from './components/ReadingLessonView';
import { ReadingPractice } from './components/ReadingPractice';
import type { ReadingLesson } from './data/reading/lessons';
import { useAuth } from './contexts/AuthContext';
import { usePoints } from './contexts/PointsContext';
import { AuthScreen } from './components/AuthScreen';
import { OnboardingIntro } from './components/OnboardingIntro';
import { OnboardingPoints } from './components/OnboardingPoints';
import { OnboardingCommitment } from './components/OnboardingCommitment';
import * as geminiService from './services/geminiService';
import * as firestoreService from './services/firestoreService';

enum AppState {
  SELECTING_LANGUAGE,
  AUTHENTICATING,
  ONBOARDING_INTRO,
  ONBOARDING_POINTS,
  ONBOARDING_COMMITMENT,
  SHOWING_INSTALL_INSTRUCTIONS,
  HOME,
  SELECTING_CONVERSATION_TOPIC,
  IN_CONVERSATION,
  ANALYZING_FEEDBACK,
  VIEWING_LESSON,
  SELECTING_WRITING_LESSON,
  IN_WRITING_PRACTICE,
  ANALYZING_WRITING_FEEDBACK,
  SELECTING_READING_LESSON,
  VIEWING_READING_LESSON,
  IN_READING_PRACTICE,
}

const LANGUAGE_KEY = 'thai-talk-language-preference'; // For non-logged-in users
const INSTALL_SEEN_KEY = 'thai-talk-install-seen';

const App: React.FC = () => {
  const { user, userProfile, loading: authLoading, updateUserProfile } = useAuth();
  const { showPoints } = usePoints();
  const [appState, setAppState] = useState<AppState>(AppState.SELECTING_LANGUAGE);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedConversationTopic, setSelectedConversationTopic] = useState<ConversationTopic | null>(null);

  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [feedback, setFeedback] = useState<string | HandwritingFeedback | null>(null);
  const [feedbackError, setFeedbackError] = useState<string | null>(null);
  
  const [analysisData, setAnalysisData] = useState<{audio: globalThis.Blob, transcript: Transcript[]} | null>(null);

  // State for Writing Practice
  const [selectedWritingLesson, setSelectedWritingLesson] = useState<Lesson | null>(null);
  const [analysisWritingData, setAnalysisWritingData] = useState<{ imageData: string; mimeType: string; word: VocabularyItem } | null>(null);

  // State for Reading Practice
  const [selectedReadingLesson, setSelectedReadingLesson] = useState<ReadingLesson | null>(null);
  const [showReadingPractice, setShowReadingPractice] = useState(false);

  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
        e.preventDefault();
        setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => {
        window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);
  
  useEffect(() => {
    if (authLoading) return;

    const inInitialGate = appState === AppState.SELECTING_LANGUAGE || appState === AppState.AUTHENTICATING;

    if (user && userProfile) {
        if (!inInitialGate) return; // Do not override manual navigation once past initial gates

        // Determine language from saved preference when signed in
        let lang: Language | null = selectedLanguage;
        try {
            const savedLangJson = localStorage.getItem(LANGUAGE_KEY);
            if (savedLangJson) {
                const savedLang = JSON.parse(savedLangJson) as Language;
                const validLanguage = SUPPORTED_LANGUAGES.find(l => l.code === savedLang.code) || null;
                if (validLanguage) lang = validLanguage;
            }
        } catch (e) {
            console.error("Failed to parse from localStorage", e);
        }
        setSelectedLanguage(lang || SUPPORTED_LANGUAGES[0]);
        if (!userProfile.hasCompletedOnboardingV2) {
            setAppState(AppState.ONBOARDING_INTRO);
        } else {
            const hasSeenInstall = localStorage.getItem(INSTALL_SEEN_KEY) === 'true';
            setAppState(hasSeenInstall ? AppState.HOME : AppState.SHOWING_INSTALL_INSTRUCTIONS);
        }
    } else if (user && !userProfile) {
        setAppState(AppState.AUTHENTICATING);
    } else {
        // No user, check local storage for language preference
        if (!inInitialGate) return; // Avoid overriding manual navigation for signed-out flows
        try {
            const savedLangJson = localStorage.getItem(LANGUAGE_KEY);
            if (savedLangJson) {
                const savedLang = JSON.parse(savedLangJson) as Language;
                const validLanguage = SUPPORTED_LANGUAGES.find(l => l.code === savedLang.code);
                if (validLanguage) {
                    setSelectedLanguage(validLanguage);
                    setAppState(AppState.AUTHENTICATING);
                } else {
                    setAppState(AppState.SELECTING_LANGUAGE);
                }
            } else {
                setAppState(AppState.SELECTING_LANGUAGE);
            }
        } catch (e) {
            console.error("Failed to parse from localStorage", e);
            setAppState(AppState.SELECTING_LANGUAGE);
        }
    }
}, [authLoading, user, userProfile, selectedLanguage, appState]);


  useEffect(() => {
    const body = document.body;
    if (selectedLanguage?.code === LanguageCode.MANDARIN) {
        body.classList.add('lang-zh-TW');
    } else {
        body.classList.remove('lang-zh-TW');
    }
  }, [selectedLanguage]);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    try {
      localStorage.setItem(LANGUAGE_KEY, JSON.stringify(language));
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
    setAppState(AppState.AUTHENTICATING);
  };

  const handleAuthSuccess = () => {
     // The useEffect hook will now handle navigation based on userProfile status
  };
  
  const handleOnboardingComplete = async () => {
      try {
          await updateUserProfile({ hasCompletedOnboardingV2: true });
      } catch (error) {
          console.error("Error completing onboarding:", error);
      } finally {
          // Navigate immediately regardless of profile update timing
          const hasSeenInstall = localStorage.getItem(INSTALL_SEEN_KEY) === 'true';
          setAppState(hasSeenInstall ? AppState.HOME : AppState.SHOWING_INSTALL_INSTRUCTIONS);
      }
  };

  const handleInstallComplete = () => {
    try {
      localStorage.setItem(INSTALL_SEEN_KEY, 'true');
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
    setAppState(AppState.HOME);
  };
  
  const handleStartConversationPractice = () => {
    setAppState(AppState.SELECTING_CONVERSATION_TOPIC);
  };
  
  const handleStartWritingPractice = () => {
    setAppState(AppState.SELECTING_WRITING_LESSON);
  };

  const handleStartReadingPractice = () => {
    setAppState(AppState.SELECTING_READING_LESSON);
  };

  const handleReadingLessonSelect = (lesson: ReadingLesson) => {
    setSelectedReadingLesson(lesson);
    setShowReadingPractice(false);
    setAppState(AppState.VIEWING_READING_LESSON);
  };

  const handleStartReadingPracticeMode = () => {
    setShowReadingPractice(true);
    setAppState(AppState.IN_READING_PRACTICE);
  };

  const handleRestartOnboarding = () => {
    // Allow users to revisit the onboarding screens at any time
    setAppState(AppState.ONBOARDING_INTRO);
  };

  const handleChangeLanguage = (language: Language) => {
    setSelectedLanguage(language);
    try {
      localStorage.setItem(LANGUAGE_KEY, JSON.stringify(language));
    } catch (e) {}
  };

  const handleConversationTopicSelect = (topic: ConversationTopic) => {
    setSelectedConversationTopic(topic);
    setAppState(AppState.IN_CONVERSATION);
  };

  const handleFinishConversation = (audioBlob: globalThis.Blob, transcript: Transcript[], durationSeconds: number) => {
    if (user) {
        const points = Math.round((durationSeconds / 60) * 6);
        if (points > 0) {
            firestoreService.addPoints(user.uid, points, 'Conversation Practice');
            showPoints(points);
        }
    }
    setAnalysisData({ audio: audioBlob, transcript });
    setAppState(AppState.ANALYZING_FEEDBACK);
  };
  
  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setAppState(AppState.VIEWING_LESSON);
  };

  const handleWritingLessonSelect = (lesson: Lesson) => {
    setSelectedWritingLesson(lesson);
    setAppState(AppState.IN_WRITING_PRACTICE);
  }

  const handleFinishWriting = (imageData: string, mimeType: string, word: VocabularyItem) => {
    setAnalysisWritingData({ imageData, mimeType, word });
    setAppState(AppState.ANALYZING_WRITING_FEEDBACK);
  };

  const handleWritingAnalyzed = useCallback((score: number) => {
    if (user) {
      firestoreService.addPoints(user.uid, score, "Writing Practice");
      showPoints(score);
    }
  }, [user, showPoints]);

  const handleBackToHome = () => {
    setAppState(AppState.HOME);
    setSelectedLesson(null);
    setSelectedConversationTopic(null);
    setSelectedWritingLesson(null);
    setSelectedReadingLesson(null);
    setAnalysisWritingData(null);
    setShowReadingPractice(false);
  };
  
  const handleBackToLanguage = () => {
    setSelectedLanguage(null);
    try {
        localStorage.removeItem(LANGUAGE_KEY);
    } catch (e) {
        console.error("Failed to clear localStorage", e);
    }
    setAppState(AppState.SELECTING_LANGUAGE);
  };

  const generateAudioFeedback = useCallback(async () => {
    if (!analysisData || !selectedLanguage || !selectedConversationTopic) return;

    setIsLoadingFeedback(true);
    setFeedback(null);
    setFeedbackError(null);

    try {
        const result = await geminiService.generateConversationFeedback(
            analysisData.audio,
            analysisData.transcript,
            selectedLanguage,
            selectedConversationTopic
        );
        setFeedback(result);
    } catch (e) {
        setFeedbackError(e instanceof Error ? e.message : 'An unknown error occurred while generating feedback.');
    } finally {
        setIsLoadingFeedback(false);
    }
  }, [analysisData, selectedLanguage, selectedConversationTopic]);


  const generateWritingFeedback = useCallback(async () => {
    if (!analysisWritingData || !selectedLanguage) return;

    setIsLoadingFeedback(true);
    setFeedback(null);
    setFeedbackError(null);

    try {
        const { imageData, mimeType, word } = analysisWritingData;
        const result = await geminiService.generateHandwritingFeedback(
            imageData,
            mimeType,
            word,
            selectedLanguage
        );
        setFeedback(result);
    } catch (e) {
        setFeedbackError(e instanceof Error ? e.message : 'An unknown error occurred while generating feedback.');
    } finally {
        setIsLoadingFeedback(false);
    }
  }, [analysisWritingData, selectedLanguage]);


  useEffect(() => {
    if (appState === AppState.ANALYZING_FEEDBACK && !feedback && !isLoadingFeedback) {
        generateAudioFeedback();
    }
  }, [appState, feedback, isLoadingFeedback, generateAudioFeedback]);

  useEffect(() => {
    if (appState === AppState.ANALYZING_WRITING_FEEDBACK && !feedback && !isLoadingFeedback) {
        generateWritingFeedback();
    }
  }, [appState, feedback, isLoadingFeedback, generateWritingFeedback]);

  const renderContent = () => {
    if (authLoading) {
        return <div className="flex items-center justify-center h-screen"><p className="text-warm-white">Loading...</p></div>;
    }

    if (!selectedLanguage || appState === AppState.SELECTING_LANGUAGE) {
        return <LanguageSelector onSelect={handleLanguageSelect} />;
    }

    switch (appState) {
      case AppState.AUTHENTICATING:
        return <AuthScreen language={selectedLanguage} onAuthSuccess={handleAuthSuccess} onBack={handleBackToLanguage} />;
      case AppState.ONBOARDING_INTRO:
        return <OnboardingIntro language={selectedLanguage} onNext={() => setAppState(AppState.ONBOARDING_POINTS)} />;
      case AppState.ONBOARDING_POINTS:
        return <OnboardingPoints language={selectedLanguage} onNext={() => setAppState(AppState.ONBOARDING_COMMITMENT)} />;
      case AppState.ONBOARDING_COMMITMENT:
        return <OnboardingCommitment language={selectedLanguage} onNext={handleOnboardingComplete} />;
      case AppState.SHOWING_INSTALL_INSTRUCTIONS:
        return <InstallInstructions onComplete={handleInstallComplete} language={selectedLanguage} installPrompt={installPrompt} />;
      case AppState.HOME:
        return <HomePage language={selectedLanguage} onSelectLesson={handleLessonSelect} onStartConversationPractice={handleStartConversationPractice} onStartWritingPractice={handleStartWritingPractice} onStartReadingPractice={handleStartReadingPractice} onBack={handleBackToLanguage} onRestartOnboarding={handleRestartOnboarding} onChangeLanguage={handleChangeLanguage}/>;
      case AppState.VIEWING_LESSON:
        return <LessonView lesson={selectedLesson!} language={selectedLanguage} onBack={handleBackToHome} />;
      case AppState.SELECTING_CONVERSATION_TOPIC:
        return <ConversationPracticeSelector onSelect={handleConversationTopicSelect} onBack={handleBackToHome} language={selectedLanguage} />;
      case AppState.IN_CONVERSATION:
        return <Conversation lesson={selectedConversationTopic!} language={selectedLanguage} onFinish={handleFinishConversation} />;
      case AppState.ANALYZING_FEEDBACK:
        return <AnalysisView lesson={selectedConversationTopic!} language={selectedLanguage} isLoading={isLoadingFeedback} feedback={feedback as string | null} error={feedbackError} onBack={() => setAppState(AppState.SELECTING_CONVERSATION_TOPIC)} />
      case AppState.SELECTING_WRITING_LESSON:
        return <WritingLessonSelector language={selectedLanguage} onSelect={handleWritingLessonSelect} onBack={handleBackToHome} />;
      case AppState.IN_WRITING_PRACTICE:
        return <WritingPractice lesson={selectedWritingLesson!} language={selectedLanguage} onFinish={handleFinishWriting} onBack={() => setAppState(AppState.SELECTING_WRITING_LESSON)} />;
      case AppState.ANALYZING_WRITING_FEEDBACK:
        return <WritingAnalysisView 
                  word={analysisWritingData!.word} 
                  language={selectedLanguage} 
                  isLoading={isLoadingFeedback} 
                  feedback={feedback as HandwritingFeedback | null} 
                  error={feedbackError} 
                  imageSrc={`data:${analysisWritingData!.mimeType};base64,${analysisWritingData!.imageData}`}
                  onBackToPractice={() => {
                    setFeedback(null);
                    setFeedbackError(null);
                    setAppState(AppState.IN_WRITING_PRACTICE);
                  }}
                  onBackToLessons={() => setAppState(AppState.SELECTING_WRITING_LESSON)}
                  onAnalyzed={handleWritingAnalyzed}
                />
      case AppState.SELECTING_READING_LESSON:
        return <ReadingLessonSelector language={selectedLanguage} onSelect={handleReadingLessonSelect} onBack={handleBackToHome} />;
      case AppState.VIEWING_READING_LESSON:
        return <ReadingLessonView lesson={selectedReadingLesson!} language={selectedLanguage} onBack={() => setAppState(AppState.SELECTING_READING_LESSON)} onStartPractice={handleStartReadingPracticeMode} />;
      case AppState.IN_READING_PRACTICE:
        return <ReadingPractice lesson={selectedReadingLesson!} language={selectedLanguage} onBack={() => setAppState(AppState.SELECTING_READING_LESSON)} />;
      default:
        return <LanguageSelector onSelect={handleLanguageSelect} />;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-start justify-center p-4 font-sans">
        {renderContent()}
    </div>
  );
};

export default App;