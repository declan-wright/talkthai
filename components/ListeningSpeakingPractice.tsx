import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { Language, ListeningSpeakingExercise, SpeakingFeedback, Lesson } from '../types';
import { UI_STRINGS } from '../data/uiStrings';
import { decode, decodeAudioData } from '../utils/audio';
import { PlayIcon, PauseIcon, CheckIcon, XIcon, MicrophoneIcon } from './Icons';
import { SpeakingAnalysisView } from './SpeakingAnalysisView';
import * as geminiService from '../services/geminiService';
import { UNITS } from '../data/curriculum/units';
import { useAuth } from '../contexts/AuthContext';
import { usePoints } from '../contexts/PointsContext';
import * as firestoreService from '../services/firestoreService';

interface ListeningSpeakingPracticeProps {
    exercise: ListeningSpeakingExercise;
    language: Language;
    lesson: Lesson | null;
}

const LoadingSpinner: React.FC<{className?: string}> = ({className}) => (
    <div className={`animate-spin rounded-full border-b-2 border-current ${className}`}></div>
);

export const ListeningSpeakingPractice: React.FC<ListeningSpeakingPracticeProps> = ({ exercise, language, lesson }) => {
    const langCode = language.code;
    const { user, userProfile } = useAuth();
    const { showPoints } = usePoints();

    // Content Generation State
    const [dynamicExercise, setDynamicExercise] = useState<ListeningSpeakingExercise | null>(null);
    const [isGeneratingContent, setIsGeneratingContent] = useState(true);
    const [generationError, setGenerationError] = useState<string | null>(null);
    
    // Listening state
    const [audioState, setAudioState] = useState<'idle' | 'loading' | 'playing' | 'paused' | 'error'>('idle');
    const audioContextRef = useRef<AudioContext | null>(null);
    const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
    const [conversationAudioBuffer, setConversationAudioBuffer] = useState<AudioBuffer | null>(null);
    const [audioError, setAudioError] = useState('');
    
    // Quiz state
    const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>([]);
    const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
    const [quizError, setQuizError] = useState<string | null>(null);

    // Speaking state
    const [isRecording, setIsRecording] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [speakingFeedback, setSpeakingFeedback] = useState<SpeakingFeedback | null>(null);
    const [speakingError, setSpeakingError] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    useEffect(() => {
        const generateContentAndPreloadAudio = async () => {
            setIsGeneratingContent(true);
            setGenerationError(null);
            setAudioState('idle');
            setConversationAudioBuffer(null);
            setQuizAnswers([]);
            setIsQuizSubmitted(false);
            setQuizError(null);

            try {
                // Get completed lesson info to provide context to the model
                const completedLessonInfo = userProfile?.testScores 
                    ? Object.keys(userProfile.testScores).map(id => {
                        const lesson = UNITS.flatMap(u => u.lessons).find(l => l.id === id);
                        return lesson ? { id, title: lesson.title[langCode] } : null;
                      }).filter(Boolean) as { id: string; title: string }[]
                    : [];

                const generatedContent = await geminiService.generateDynamicListeningExercise(language, completedLessonInfo, lesson);
                
                setDynamicExercise({
                    ...exercise,
                    conversation: generatedContent.conversation,
                    comprehensionQuestions: generatedContent.comprehensionQuestions,
                });
                setQuizAnswers(Array(generatedContent.comprehensionQuestions.questions.length).fill(null));
                setIsGeneratingContent(false); 

                setAudioState('loading');
                setAudioError('');
                try {
                    const base64Audio = await geminiService.generateSpeechForConversation(generatedContent.conversation, langCode);
                    
                    const audioContext = audioContextRef.current || new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
                    if (!audioContextRef.current) audioContextRef.current = audioContext;

                    const audioBuffer = await decodeAudioData(decode(base64Audio), audioContext, 24000, 1);
                    setConversationAudioBuffer(audioBuffer);
                    setAudioState('idle'); 
                } catch (err) {
                    console.error("TTS Preload Error:", err);
                    setAudioError(err instanceof Error ? err.message : "Failed to generate audio.");
                    setAudioState('error');
                }

            } catch (e) {
                console.error("Failed to generate lesson content:", e);
                setGenerationError(e instanceof Error ? e.message : "Could not load lesson content.");
                setIsGeneratingContent(false);
            }
        };

        generateContentAndPreloadAudio();

        return () => { 
            if (audioSourceRef.current) {
                audioSourceRef.current.stop();
            }
            if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
                audioContextRef.current.close().catch(console.error);
            }
            if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
                mediaRecorderRef.current.stop();
            }
        };
    }, [exercise, language, langCode, user, userProfile, lesson]);

    const handlePlayPause = useCallback(async () => {
        if (audioState === 'loading' || !conversationAudioBuffer) return;

        const audioCtx = audioContextRef.current;
        if (audioCtx) {
            if (audioState === 'playing') {
                audioCtx.suspend().then(() => setAudioState('paused'));
                return;
            } else if (audioState === 'paused') {
                audioCtx.resume().then(() => setAudioState('playing'));
                return;
            }
        }
        
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        const audioContext = audioContextRef.current;
        if (audioContext.state === 'suspended') {
            await audioContext.resume();
        }

        if (audioSourceRef.current) {
            audioSourceRef.current.disconnect();
        }

        const source = audioContext.createBufferSource();
        source.buffer = conversationAudioBuffer;
        source.connect(audioContext.destination);
        source.onended = () => { 
            setAudioState('idle');
            audioSourceRef.current = null;
        };
        source.start(0);
        audioSourceRef.current = source;
        setAudioState('playing');
    }, [audioState, conversationAudioBuffer]);
    
    const handleQuizSelect = (qIndex: number, oIndex: number) => {
        if (isQuizSubmitted) return;
        const newAnswers = [...quizAnswers];
        newAnswers[qIndex] = oIndex;
        setQuizAnswers(newAnswers);
    };

    const handleCheckQuiz = () => {
        if (!dynamicExercise) return;
        
        // Validate that all questions have been answered
        const allQuestionsAnswered = quizAnswers.every(answer => answer !== null);
        if (!allQuestionsAnswered) {
            setQuizError("Please answer all questions before submitting.");
            return;
        }
        
        setQuizError(null);
        let correctCount = 0;
        dynamicExercise.comprehensionQuestions.questions.forEach((q, qIndex) => {
            if (quizAnswers[qIndex] === q.correctIndex) {
                correctCount++;
            }
        });
        if (user && correctCount > 0) {
            firestoreService.addPoints(user.uid, correctCount, 'Listening Comprehension');
            showPoints(correctCount);
        }
        setIsQuizSubmitted(true);
    };

    const analyzeRecording = useCallback(async (audioBlob: Blob) => {
        if (!dynamicExercise) return;
        setIsAnalyzing(true);
        setSpeakingError(null);
        setSpeakingFeedback(null);

        if (audioBlob.size < 1000) { 
            setSpeakingError("Recording is too short. Please try again, speaking clearly for at least a second.");
            setIsAnalyzing(false);
            return;
        }

        try {
            const feedback = await geminiService.analyzeSpokenPhrase(
                audioBlob,
                dynamicExercise.speakingPrompt,
                dynamicExercise.phoneticPrompt,
                language
            );
            setSpeakingFeedback(feedback);
            if (user && feedback.isRecognizable) {
                firestoreService.addPoints(user.uid, 8, 'Speaking Analysis');
                showPoints(8);
            }

        } catch (err) {
            console.error("Analysis error:", err);
            setSpeakingError(err instanceof Error ? err.message : "Failed to analyze audio.");
        } finally {
            setIsAnalyzing(false);
        }
    }, [dynamicExercise, language, user]);

    const handleRecordToggle = useCallback(async () => {
        if (isRecording) {
            mediaRecorderRef.current?.stop();
            setIsRecording(false);
        } else {
            setSpeakingFeedback(null);
            setSpeakingError(null);
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const options = { mimeType: 'audio/webm' };
                mediaRecorderRef.current = new MediaRecorder(stream, options);
                audioChunksRef.current = [];

                mediaRecorderRef.current.ondataavailable = event => {
                    if (event.data.size > 0) audioChunksRef.current.push(event.data);
                };
                
                mediaRecorderRef.current.onstop = () => {
                    stream.getTracks().forEach(track => track.stop());
                    if (audioChunksRef.current.length > 0) {
                        const audioBlob = new Blob(audioChunksRef.current, { type: options.mimeType });
                        analyzeRecording(audioBlob);
                    }
                    audioChunksRef.current = [];
                };
                
                mediaRecorderRef.current.start();
                setIsRecording(true);
            } catch (err) {
                console.error("Mic access error:", err);
                setSpeakingError("Could not access microphone. Please check permissions.");
            }
        }
    }, [isRecording, analyzeRecording]);
    
    if (isGeneratingContent) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-center">
                <LoadingSpinner className="w-12 h-12 text-vibrant-orange" />
                <p className="mt-4 text-charcoal-ink/70 font-bold">Downloading lesson files. This may take a moment...</p>
            </div>
        );
    }

    if (generationError) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-center text-red-500 p-4 bg-red-500/10">
                <p className="font-semibold">Lesson Generation Failed</p>
                <p className="text-sm ">{generationError}</p>
            </div>
        );
    }

    if (!dynamicExercise) {
        return <div className="text-center p-8 text-charcoal-ink/50">No lesson content available.</div>;
    }

    const { comprehensionQuestions, speakingPrompt, phoneticPrompt } = dynamicExercise;

    return (
        <div className="space-y-12">
            {/* Part 1: Listening Comprehension */}
            <section>
                <h3 className="font-heading text-2xl uppercase border-b-2 border-light-grey pb-2 mb-4">1. Listening Comprehension</h3>
                <div className="flex items-center gap-4 bg-light-grey/50 p-4 rounded-none">
                    <button onClick={handlePlayPause} disabled={audioState === 'loading'} className="bg-vibrant-orange text-warm-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 active:scale-90 transition-transform disabled:opacity-50">
                        {audioState === 'loading' && <LoadingSpinner className="w-8 h-8"/>}
                        {(audioState === 'playing' || audioState === 'paused') && <PauseIcon className="w-8 h-8"/>}
                        {audioState === 'idle' && <PlayIcon className="w-8 h-8"/>}
                        {audioState === 'error' && <XIcon className="w-8 h-8"/>}
                    </button>
                    <div>
                        <p className="font-bold">Listen to the Conversation</p>
                        <p className="text-sm text-charcoal-ink/70">A short dialogue between two speakers.</p>
                        {audioError && <p className="text-sm text-red-600 font-semibold">{audioError}</p>}
                    </div>
                </div>
                
                <div className="mt-6 space-y-6">
                    {comprehensionQuestions.questions.map((q, qIndex) => (
                        <div key={qIndex}>
                            <p className="mb-3 font-semibold text-lg">{qIndex + 1}. {q.question[langCode]}</p>
                            <div className="flex flex-col space-y-2">
                                {q.options.map((option, oIndex) => {
                                    const isSelected = quizAnswers[qIndex] === oIndex;
                                    const isCorrectAnswer = q.correctIndex === oIndex;
                                    let buttonClass = "border-light-grey hover:bg-light-grey/50";
                                    let icon = null;

                                    if (isQuizSubmitted) {
                                        if (isSelected && isCorrectAnswer) {
                                            buttonClass = "bg-vibrant-orange/10 border-vibrant-orange text-charcoal-ink font-bold";
                                            icon = <CheckIcon className="w-6 h-6 text-green-600" />;
                                        } else if (isSelected && !isCorrectAnswer) {
                                            buttonClass = "bg-charcoal-ink/10 border-charcoal-ink/30 text-charcoal-ink/70 line-through";
                                            icon = <XIcon className="w-5 h-5 text-red-600" />;
                                        } else if (isCorrectAnswer) {
                                            buttonClass = "border-vibrant-orange border-2";
                                        }
                                    } else if (isSelected) {
                                        buttonClass = "bg-vibrant-orange text-warm-white border-vibrant-orange";
                                    }

                                    return (
                                        <button 
                                            key={oIndex} 
                                            onClick={() => handleQuizSelect(qIndex, oIndex)}
                                            disabled={isQuizSubmitted}
                                            className={`p-3 border text-left transition-colors rounded-none flex justify-between items-center ${buttonClass}`}
                                        >
                                            <span>{option[langCode]}</span>
                                            {icon}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-6">
                    {quizError && <p className="text-red-600 font-semibold mb-2">{quizError}</p>}
                    <button 
                        onClick={handleCheckQuiz} 
                        disabled={isQuizSubmitted || (dynamicExercise && quizAnswers.some(answer => answer === null))} 
                        className="bg-charcoal-ink text-warm-white font-bold py-2 px-6 uppercase text-sm disabled:opacity-50"
                    >
                        Check Answers
                    </button>
                </div>
            </section>

            {/* Part 2: Speaking Challenge */}
            <section>
                 <h3 className="font-heading text-2xl uppercase border-b-2 border-light-grey pb-2 mb-4">2. Speaking Challenge</h3>
                 <div className="text-center bg-light-grey/50 p-6 rounded-none">
                     <p className="text-charcoal-ink/70 mb-2">{UI_STRINGS.speakingInstruction[langCode]}</p>
                     <p className="font-thai text-5xl my-2">{speakingPrompt[langCode]}</p>
                     <p className="text-charcoal-ink/60 text-lg">{phoneticPrompt[langCode]}</p>
                 </div>

                 <div className="flex flex-col items-center justify-center gap-4 mt-6">
                     <button 
                        onClick={handleRecordToggle} 
                        disabled={isAnalyzing}
                        className={`flex items-center justify-center gap-3 w-48 h-16 font-bold text-lg uppercase transition-colors rounded-none disabled:opacity-50 ${isRecording ? 'bg-red-600 text-white' : 'bg-charcoal-ink text-warm-white'}`}
                    >
                        {isRecording ? (
                            <>
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                </span>
                                Stop
                            </>
                        ) : (
                           isAnalyzing ? (
                                <>
                                    <LoadingSpinner className="w-6 h-6"/>
                                    Analyzing...
                                </>
                           ) : (
                                <>
                                    <MicrophoneIcon className="w-6 h-6"/>
                                    Record
                                </>
                           )
                        )}
                     </button>
                 </div>
                 {speakingError && <p className="text-red-600 text-center font-semibold mt-4">{speakingError}</p>}
                 {speakingFeedback && <SpeakingAnalysisView feedback={speakingFeedback} language={language} onTryAgain={() => setSpeakingFeedback(null)} />}
            </section>
        </div>
    );
};