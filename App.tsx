import React, { useState, useEffect, useCallback } from 'react';
import { type Language, type Lesson, type ConversationTopic, type Transcript, LanguageCode, VocabularyItem, HandwritingFeedback, ConversationFeedback, UserProfile } from './types';
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

interface NavigationHistoryItem {
  state: AppState;
  data?: {
    lesson?: Lesson | null;
    conversationTopic?: ConversationTopic | null;
    writingLesson?: Lesson | null;
    readingLesson?: ReadingLesson | null;
    analysisData?: {audio: globalThis.Blob, transcript: Transcript[]} | null;
    analysisWritingData?: { imageData: string; mimeType: string; word: VocabularyItem } | null;
    showReadingPractice?: boolean;
  };
}

const LANGUAGE_KEY = 'thai-talk-language-preference'; // For non-logged-in users
const INSTALL_SEEN_KEY = 'thai-talk-install-seen';

const App: React.FC = () => {
  const { user, userProfile, loading: authLoading, updateUserProfile, reloadProfile } = useAuth();
  const { showPoints } = usePoints();
  const [appState, setAppState] = useState<AppState>(AppState.SELECTING_LANGUAGE);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedConversationTopic, setSelectedConversationTopic] = useState<ConversationTopic | null>(null);

  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [feedback, setFeedback] = useState<ConversationFeedback | HandwritingFeedback | null>(null);
  const [feedbackError, setFeedbackError] = useState<string | null>(null);

  const [analysisData, setAnalysisData] = useState<{audio: globalThis.Blob, transcript: Transcript[]} | null>(null);

  // State for Writing Practice
  const [selectedWritingLesson, setSelectedWritingLesson] = useState<Lesson | null>(null);
  const [analysisWritingData, setAnalysisWritingData] = useState<{ imageData: string; mimeType: string; word: VocabularyItem } | null>(null);

  // State for Reading Practice
  const [selectedReadingLesson, setSelectedReadingLesson] = useState<ReadingLesson | null>(null);
  const [showReadingPractice, setShowReadingPractice] = useState(false);

  const [installPrompt, setInstallPrompt] = useState<any>(null);

  // Navigation history for back gesture support
  const [navigationHistory, setNavigationHistory] = useState<NavigationHistoryItem[]>([]);
  const isNavigatingBack = React.useRef(false);

  // Helper function to navigate with history tracking
  const navigateToState = useCallback((newState: AppState, data?: NavigationHistoryItem['data']) => {
    if (isNavigatingBack.current) {
      // Don't add to history when navigating back
      isNavigatingBack.current = false;
      return;
    }

    // Add current state to history before navigating
    const currentHistoryItem: NavigationHistoryItem = {
      state: appState,
      data: {
        lesson: selectedLesson,
        conversationTopic: selectedConversationTopic,
        writingLesson: selectedWritingLesson,
        readingLesson: selectedReadingLesson,
        analysisData,
        analysisWritingData,
        showReadingPractice,
      },
    };

    setNavigationHistory(prev => [...prev, currentHistoryItem]);
    setAppState(newState);

    // Update state based on new navigation data
    if (data) {
      if (data.lesson !== undefined) setSelectedLesson(data.lesson || null);
      if (data.conversationTopic !== undefined) setSelectedConversationTopic(data.conversationTopic || null);
      if (data.writingLesson !== undefined) setSelectedWritingLesson(data.writingLesson || null);
      if (data.readingLesson !== undefined) setSelectedReadingLesson(data.readingLesson || null);
      if (data.analysisData !== undefined) setAnalysisData(data.analysisData || null);
      if (data.analysisWritingData !== undefined) setAnalysisWritingData(data.analysisWritingData || null);
      if (data.showReadingPractice !== undefined) setShowReadingPractice(data.showReadingPractice);
    }

    // Push a new history entry to enable back gesture
    window.history.pushState({ appState: newState }, '');
  }, [appState, selectedLesson, selectedConversationTopic, selectedWritingLesson, selectedReadingLesson, analysisData, analysisWritingData, showReadingPractice]);

  // Handle browser back button / Android back gesture
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault();

      if (navigationHistory.length > 0) {
        isNavigatingBack.current = true;
        const previousItem = navigationHistory[navigationHistory.length - 1];

        // Restore previous state
        setAppState(previousItem.state);
        if (previousItem.data) {
          if (previousItem.data.lesson !== undefined) setSelectedLesson(previousItem.data.lesson || null);
          if (previousItem.data.conversationTopic !== undefined) setSelectedConversationTopic(previousItem.data.conversationTopic || null);
          if (previousItem.data.writingLesson !== undefined) setSelectedWritingLesson(previousItem.data.writingLesson || null);
          if (previousItem.data.readingLesson !== undefined) setSelectedReadingLesson(previousItem.data.readingLesson || null);
          if (previousItem.data.analysisData !== undefined) setAnalysisData(previousItem.data.analysisData || null);
          if (previousItem.data.analysisWritingData !== undefined) setAnalysisWritingData(previousItem.data.analysisWritingData || null);
          if (previousItem.data.showReadingPractice !== undefined) setShowReadingPractice(previousItem.data.showReadingPractice);
        }

        // Remove the last item from history
        setNavigationHistory(prev => prev.slice(0, -1));
      } else {
        // If no history, go to home or exit
        if (appState !== AppState.HOME) {
          isNavigatingBack.current = true;
          setAppState(AppState.HOME);
          setSelectedLesson(null);
          setSelectedConversationTopic(null);
          setSelectedWritingLesson(null);
          setSelectedReadingLesson(null);
          setAnalysisWritingData(null);
          setShowReadingPractice(false);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initialize with a history entry
    if (window.history.state === null) {
      window.history.replaceState({ appState }, '');
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigationHistory, appState]);

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
    navigateToState(AppState.AUTHENTICATING);
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
    navigateToState(AppState.SELECTING_CONVERSATION_TOPIC);
  };

  const handleStartWritingPractice = () => {
    navigateToState(AppState.SELECTING_WRITING_LESSON);
  };

  const handleStartReadingPractice = () => {
    navigateToState(AppState.SELECTING_READING_LESSON);
  };

  const handleReadingLessonSelect = (lesson: ReadingLesson) => {
    setSelectedReadingLesson(lesson);
    setShowReadingPractice(false);
    navigateToState(AppState.VIEWING_READING_LESSON, { readingLesson: lesson, showReadingPractice: false });
  };

  const handleStartReadingPracticeMode = () => {
    setShowReadingPractice(true);
    navigateToState(AppState.IN_READING_PRACTICE, { showReadingPractice: true });
  };

  const handleRestartOnboarding = () => {
    // Allow users to revisit the onboarding screens at any time
    navigateToState(AppState.ONBOARDING_INTRO);
  };

  const handleShowInstallInstructions = () => {
    navigateToState(AppState.SHOWING_INSTALL_INSTRUCTIONS);
  };

  const handleChangeLanguage = (language: Language) => {
    setSelectedLanguage(language);
    try {
      localStorage.setItem(LANGUAGE_KEY, JSON.stringify(language));
    } catch (e) {}
  };

  const handleConversationTopicSelect = (topic: ConversationTopic) => {
    setSelectedConversationTopic(topic);
    navigateToState(AppState.IN_CONVERSATION, { conversationTopic: topic });
  };

  const handleFinishConversation = async (audioBlob: globalThis.Blob, transcript: Transcript[], durationSeconds: number) => {
    if (user) {
        const points = Math.round((durationSeconds / 60) * 6);
        if (points > 0) {
            firestoreService.addPoints(user.uid, points, 'Conversation Practice');
            showPoints(points);
        }
        try {
            if (selectedConversationTopic) {
                await firestoreService.incrementConversationProgress(user.uid, selectedConversationTopic.id, durationSeconds);
                await reloadProfile();
            }
        } catch (e) {
            console.warn('Failed to update conversation progress', e);
        }
    }
    const data = { audio: audioBlob, transcript };
    setAnalysisData(data);
    navigateToState(AppState.ANALYZING_FEEDBACK, { analysisData: data });
  };

  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    navigateToState(AppState.VIEWING_LESSON, { lesson });
  };

  const handleWritingLessonSelect = (lesson: Lesson) => {
    setSelectedWritingLesson(lesson);
    navigateToState(AppState.IN_WRITING_PRACTICE, { writingLesson: lesson });
  }

  const handleFinishWriting = (imageData: string, mimeType: string, word: VocabularyItem) => {
    const data = { imageData, mimeType, word };
    setAnalysisWritingData(data);
    navigateToState(AppState.ANALYZING_WRITING_FEEDBACK, { analysisWritingData: data });
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
            selectedLanguage,
            selectedConversationTopic
        );
        setFeedback(result);
        
        // Award points for conversation analysis (stacks with time-based points)
        if (user && result.isRecognizable) {
            firestoreService.addPoints(user.uid, 8, 'Conversation Analysis');
            showPoints(8);
        }
    } catch (e) {
        setFeedbackError(e instanceof Error ? e.message : 'An unknown error occurred while generating feedback.');
    } finally {
        setIsLoadingFeedback(false);
    }
  }, [analysisData, selectedLanguage, selectedConversationTopic, user, showPoints]);


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
    if (appState === AppState.ANALYZING_WRITING_FEEDBACK) {
        // Clear old feedback when new writing data arrives
        if (feedback || feedbackError) {
            setFeedback(null);
            setFeedbackError(null);
        }
        if (!isLoadingFeedback) {
            generateWritingFeedback();
        }
    }
  }, [appState, analysisWritingData]);

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
        return <OnboardingIntro language={selectedLanguage} onNext={() => navigateToState(AppState.ONBOARDING_POINTS)} />;
      case AppState.ONBOARDING_POINTS:
        return <OnboardingPoints language={selectedLanguage} onNext={() => navigateToState(AppState.ONBOARDING_COMMITMENT)} />;
      case AppState.ONBOARDING_COMMITMENT:
        return <OnboardingCommitment language={selectedLanguage} onNext={handleOnboardingComplete} />;
      case AppState.SHOWING_INSTALL_INSTRUCTIONS:
        return <InstallInstructions onComplete={handleInstallComplete} language={selectedLanguage} installPrompt={installPrompt} />;
      case AppState.HOME:
        return <HomePage language={selectedLanguage} onSelectLesson={handleLessonSelect} onStartConversationPractice={handleStartConversationPractice} onStartWritingPractice={handleStartWritingPractice} onStartReadingPractice={handleStartReadingPractice} onBack={handleBackToLanguage} onRestartOnboarding={handleRestartOnboarding} onShowInstallInstructions={handleShowInstallInstructions} onChangeLanguage={handleChangeLanguage}/>;
      case AppState.VIEWING_LESSON:
        return <LessonView lesson={selectedLesson!} language={selectedLanguage} onBack={handleBackToHome} />;
      case AppState.SELECTING_CONVERSATION_TOPIC:
        return <ConversationPracticeSelector onSelect={handleConversationTopicSelect} onBack={handleBackToHome} language={selectedLanguage} />;
      case AppState.IN_CONVERSATION:
        return <Conversation lesson={selectedConversationTopic!} language={selectedLanguage} onFinish={handleFinishConversation} />;
      case AppState.ANALYZING_FEEDBACK:
        return <AnalysisView lesson={selectedConversationTopic!} language={selectedLanguage} isLoading={isLoadingFeedback} feedback={feedback as ConversationFeedback | null} error={feedbackError} onBack={() => window.history.back()} />
      case AppState.SELECTING_WRITING_LESSON:
        return <WritingLessonSelector language={selectedLanguage} onSelect={handleWritingLessonSelect} onBack={handleBackToHome} />;
      case AppState.IN_WRITING_PRACTICE:
        return <WritingPractice lesson={selectedWritingLesson!} language={selectedLanguage} onFinish={handleFinishWriting} onBack={() => window.history.back()} />;
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
                    window.history.back();
                  }}
                  onBackToLessons={() => window.history.back()}
                  onAnalyzed={handleWritingAnalyzed}
                />
      case AppState.SELECTING_READING_LESSON:
        return <ReadingLessonSelector language={selectedLanguage} onSelect={handleReadingLessonSelect} onBack={handleBackToHome} />;
      case AppState.VIEWING_READING_LESSON:
        return <ReadingLessonView lesson={selectedReadingLesson!} language={selectedLanguage} onBack={() => window.history.back()} onStartPractice={handleStartReadingPracticeMode} />;
      case AppState.IN_READING_PRACTICE:
        return <ReadingPractice lesson={selectedReadingLesson!} language={selectedLanguage} onBack={() => window.history.back()} />;
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