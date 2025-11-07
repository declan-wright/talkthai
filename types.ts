

export enum LanguageCode {
  ENGLISH = 'en',
  FRENCH = 'fr',
  PORTUGUESE = 'pt-BR',
  MANDARIN = 'zh-TW',
}

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
}

// --- Types for Conversation Practice Feature ---
export interface ConversationTopic {
  id: number;
  translations: Record<LanguageCode, { title: string; scenario: string; }>;
  emoji: string;
  level: 'Beginner' | 'Intermediate' | 'Expert';
}

export interface Transcript {
    speaker: 'user' | 'model';
    text: string;
    isFinal: boolean;
}

// --- Types for New Curriculum Structure ---
export type LocalizedString = Record<LanguageCode, string>;

export interface Unit {
    id: number;
    title: LocalizedString;
    lessons: Lesson[];
}

export interface Lesson {
    id: string; // e.g., "1.0", "1.1"
    title: LocalizedString;
    vocabulary: VocabularyItem[];
    worksheet: WorksheetItem[];
    listeningSpeaking: ListeningSpeakingExercise | null;
}

export interface VocabularyItem {
    thai: string;
    phonetic: string;
    translations: LocalizedString;
    // audioSrc: string; can be added later
}

export type WorksheetItem = MatchingExerciseData | FillInTheBlankExerciseData | MultipleChoiceExerciseData | CulturalNoteData | JumbledSentenceExerciseData;

export enum ExerciseType {
    MATCHING = 'MATCHING',
    FILL_IN_THE_BLANK = 'FILL_IN_THE_BLANK',
    MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
    CULTURAL_NOTE = 'CULTURAL_NOTE',
    JUMBLED_SENTENCE = 'JUMBLED_SENTENCE',
}

interface BaseExercise {
    type: ExerciseType;
    prompt?: LocalizedString;
}

export interface MatchingExerciseData extends BaseExercise {
    type: ExerciseType.MATCHING;
    prompt: LocalizedString;
    pairs: Array<{
        prompt: LocalizedString;
        answer: LocalizedString;
    }>;
}

export interface FillInTheBlankExerciseData extends BaseExercise {
    type: ExerciseType.FILL_IN_THE_BLANK;
    prompt: LocalizedString;
    sentences: Array<{
        start: LocalizedString;
        end: LocalizedString;
        correctAnswer: string;
        options?: string[]; // Optional: for dropdown-style fill-in-the-blank
    }>;
}

export interface MultipleChoiceExerciseData extends BaseExercise {
    type: ExerciseType.MULTIPLE_CHOICE;
    prompt: LocalizedString;
    questions: Array<{
        question: LocalizedString;
        options: LocalizedString[];
        correctIndex: number;
    }>;
}

export interface CulturalNoteData extends BaseExercise {
    type: ExerciseType.CULTURAL_NOTE;
    title: LocalizedString;
    content: LocalizedString;
}

export interface JumbledSentenceExerciseData extends BaseExercise {
    type: ExerciseType.JUMBLED_SENTENCE;
    prompt: LocalizedString;
    sentences: Array<{
        correctOrder: string[];
        tokens?: string[];
        hint?: LocalizedString;
    }>;
}

// --- Types for Listening & Speaking ---
export interface ConversationScriptItem {
    speaker: string;
    line: LocalizedString;
}

export interface ListeningSpeakingExercise {
    conversation: ConversationScriptItem[];
    comprehensionQuestions: MultipleChoiceExerciseData;
    speakingPrompt: LocalizedString;
    phoneticPrompt: LocalizedString;
}

export interface SpeakingFeedback {
    isRecognizable: boolean;
    reasoning: string;
    overallScore: number;
    overallFeedback: string;
    pronunciationScore: number;
    pronunciationFeedback: string;
    fluencyScore: number;
    fluencyFeedback: string;
    toneScore: number;
    toneFeedback: string;
    keyRecommendation: string;
}

export interface ConversationFeedback {
    isRecognizable: boolean;
    reasoning: string;
    overallScore: number;
    overallFeedback: string;
    pronunciationScore: number;
    pronunciationFeedback: string;
    fluencyScore: number;
    fluencyFeedback: string;
    toneScore: number;
    toneFeedback: string;
    keyRecommendation: string;
}


// --- Types for Handwriting Feedback ---
export interface HandwritingWordAnalysis {
    word: string;
    positiveFeedback: string;
    improvementTip: string;
}

export interface HandwritingFeedback {
    isCorrectWord: boolean;
    reasoning: string;
    overallScore: number; // Score from 1 to 5
    overallComment: string;
    wordAnalysis: HandwritingWordAnalysis[];
    keyRecommendation: string;
}

// --- Types for Test Module ---
export type TestQuestion = VocabMCQuestion | AppMCQuestion | AppFillBlankQuestion | ListeningSection;

export enum TestQuestionType {
    VOCAB_MC = 'VOCAB_MC',
    APP_MC = 'APP_MC',
    APP_FILL_BLANK = 'APP_FILL_BLANK',
    LISTENING = 'LISTENING'
}

interface BaseTestQuestion {
    type: TestQuestionType;
    points: number;
}

export interface VocabMCQuestion extends BaseTestQuestion {
    type: TestQuestionType.VOCAB_MC;
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface AppMCQuestion extends BaseTestQuestion {
    type: TestQuestionType.APP_MC;
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface AppFillBlankQuestion extends BaseTestQuestion {
    type: TestQuestionType.APP_FILL_BLANK;
    start: string;
    end: string;
    correctAnswer: string;
}

export interface ListeningSection extends BaseTestQuestion {
    type: TestQuestionType.LISTENING;
    audioBase64: string;
    questions: Array<{
        question: string;
        options: string[];
        correctAnswer: string;
    }>;
}

export interface TestResult {
    questionText: string;
    isCorrect: boolean;
    pointsAwarded: number;
    pointsPossible: number;
}

// --- Types for User Profile & Gamification ---
export interface UserProfile {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    originalPhotoURL?: string | null; // Store original photo to allow restoring
    fallbackAvatar?: string | null; // Store assigned fallback avatar to ensure uniqueness
    firstName: string;
    lastName: string;
    thaiName: string;
    speakingLevel: string;
    readingLevel: string;
    learningGoal: string;
    hasCompletedOnboardingV2: boolean;
    
    // Gamification
    totalPoints: number;
    weeklyPoints: Record<string, number>; // e.g., { "2024-32": 150 }
    currentStreak: number;
    lastActivityDate: string; // YYYY-MM-DD

    // Loans and penalties
    loanPenaltyWeekId?: string | null; // Week when a negative starting balance should apply
    loanPenaltyAmount?: number | null; // Amount to start negative by, e.g., 75

    // Progress
    testScores: Record<string, number>; // { "lessonId": score }
    flashcardProgress: Record<string, Record<string, number>>; // { "lessonId": { "thai_word": streak } }
    // Conversation Progress
    conversationPracticeCounts?: Record<string, number>; // { "topicId": count }
    conversationTotalTimeMs?: number; // total accumulated conversation time in ms
}

export interface LeaderboardEntry {
    uid: string;
    displayName: string;
    firstName: string;
    thaiName: string;
    photoURL: string;
    fallbackAvatar?: string | null;
    weeklyScore: number;
}

export enum ShameReason {
    LOSER = 'loser',
    STREAK_BROKEN = 'streak_broken',
    STREAK_ENDED = 'streak_ended',
}

export interface ShameWallEntry {
    id?: string; // Firestore document ID
    uid: string;
    displayName: string;
    firstName: string;
    thaiName: string;
    photoURL: string;
    reason: ShameReason;
    message: string;
    timestamp: any; // Firestore timestamp
    expires: any; // Firestore timestamp
}

// --- Types for Chat ---
export interface ChatMessage {
    id?: string;
    uid: string | null; // null for system messages
    displayName: string;
    photoURL?: string | null;
    text: string;
    createdAt: any; // Firestore timestamp
    isSystem?: boolean;
}