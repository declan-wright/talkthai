import { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import type { LiveServerMessage, Blob } from '@google/genai';
import { createBlob, decode, decodeAudioData, createWavBlob } from '../utils/audio';
import { getGeminiApiKey } from '../utils/env';
import type { Transcript } from '../types';

// Define a local LiveSession interface as it's not exported from the library.
interface LiveSession {
  close: () => void;
  sendRealtimeInput: (input: { media: Blob }) => void;
}

enum ConnectionState {
  IDLE,
  CONNECTING,
  CONNECTED,
  CLOSED,
  ERROR,
}

interface UseGeminiLiveProps {
    systemInstruction: string;
    onSessionEnd?: (audioBlob: globalThis.Blob, transcript: Transcript[], durationSeconds: number) => void;
}

export const useGeminiLive = ({ systemInstruction, onSessionEnd }: UseGeminiLiveProps) => {
  const [connectionState, setConnectionState] = useState<ConnectionState>(ConnectionState.IDLE);
  const [transcripts, setTranscripts] = useState<Transcript[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  const sessionPromiseRef = useRef<Promise<LiveSession> | null>(null);
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const mediaStreamSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const audioChunksRef = useRef<Float32Array[]>([]);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sessionStartTimeRef = useRef<number | null>(null);

  const currentInputTranscriptionRef = useRef('');
  const currentOutputTranscriptionRef = useRef('');
  const nextStartTimeRef = useRef(0);
  const audioSourcesRef = useRef(new Set<AudioBufferSourceNode>());

  const cleanupLiveSession = useCallback(() => {
    sessionPromiseRef.current?.then((session) => {
      session.close();
      sessionPromiseRef.current = null;
    });

    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    mediaStreamRef.current = null;

    mediaStreamSourceRef.current?.disconnect();
    scriptProcessorRef.current?.disconnect();
    analyserRef.current?.disconnect();
    analyserRef.current = null;
    setAnalyser(null);
    
    if (inputAudioContextRef.current?.state !== 'closed') {
        inputAudioContextRef.current?.close().catch(console.error);
    }
    if (outputAudioContextRef.current?.state !== 'closed') {
        outputAudioContextRef.current?.close().catch(console.error);
    }

    audioSourcesRef.current.forEach(source => source.stop());
    audioSourcesRef.current.clear();
    nextStartTimeRef.current = 0;
    
    setConnectionState(ConnectionState.IDLE);
    currentInputTranscriptionRef.current = '';
    currentOutputTranscriptionRef.current = '';
    sessionStartTimeRef.current = null;
  }, []);

  const closeSession = useCallback(() => {
    if (onSessionEnd && audioChunksRef.current.length > 0) {
        const totalLength = audioChunksRef.current.reduce((acc, val) => acc + val.length, 0);
        const concatenatedAudio = new Float32Array(totalLength);
        let offset = 0;
        for (const chunk of audioChunksRef.current) {
            concatenatedAudio.set(chunk, offset);
            offset += chunk.length;
        }
        const audioBlob = createWavBlob(concatenatedAudio, 16000);
        const durationSeconds = sessionStartTimeRef.current ? (Date.now() - sessionStartTimeRef.current) / 1000 : 0;
        onSessionEnd(audioBlob, transcripts, durationSeconds);
    }
    audioChunksRef.current = [];
    cleanupLiveSession();
  }, [onSessionEnd, transcripts, cleanupLiveSession]);

  const startSession = useCallback(async () => {
    if (connectionState !== ConnectionState.IDLE && connectionState !== ConnectionState.CLOSED) {
      return;
    }
    setConnectionState(ConnectionState.CONNECTING);
    setTranscripts([]);
    setError(null);
    audioChunksRef.current = [];
    setAnalyser(null);
    sessionStartTimeRef.current = Date.now();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      const ai = new GoogleGenAI({ apiKey: getGeminiApiKey() });

      sessionPromiseRef.current = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          inputAudioTranscription: {},
          outputAudioTranscription: {},
          systemInstruction,
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
        },
        callbacks: {
          onopen: () => {
            setConnectionState(ConnectionState.CONNECTED);
            
            inputAudioContextRef.current = new ((window as any).AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
            outputAudioContextRef.current = new ((window as any).AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
            
            // Create and set up AnalyserNode
            const newAnalyser = inputAudioContextRef.current.createAnalyser();
            newAnalyser.fftSize = 2048;
            analyserRef.current = newAnalyser;
            setAnalyser(newAnalyser);
            
            mediaStreamSourceRef.current = inputAudioContextRef.current.createMediaStreamSource(stream);
            scriptProcessorRef.current = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);
            
            scriptProcessorRef.current.onaudioprocess = (audioProcessingEvent) => {
              const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
              audioChunksRef.current.push(new Float32Array(inputData)); // Store a copy for analysis
              const pcmBlob = createBlob(inputData);
              sessionPromiseRef.current?.then((session) => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            // Updated audio graph for visualization
            mediaStreamSourceRef.current.connect(newAnalyser);
            newAnalyser.connect(scriptProcessorRef.current);
            scriptProcessorRef.current.connect(inputAudioContextRef.current.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            // Handle transcriptions
            if (message.serverContent?.inputTranscription) {
                const text = message.serverContent.inputTranscription.text;
                const isFinal = false;
                currentInputTranscriptionRef.current += text;
                setTranscripts(prev => {
                    const last = prev[prev.length - 1];
                    if (last?.speaker === 'user' && !last.isFinal) {
                        return [...prev.slice(0, -1), { speaker: 'user', text: currentInputTranscriptionRef.current, isFinal }];
                    }
                    return [...prev, { speaker: 'user', text: currentInputTranscriptionRef.current, isFinal }];
                });
            }

            if (message.serverContent?.outputTranscription) {
                const text = message.serverContent.outputTranscription.text;
                const isFinal = false;
                currentOutputTranscriptionRef.current += text;
                setTranscripts(prev => {
                    const last = prev[prev.length - 1];
                    if (last?.speaker === 'model' && !last.isFinal) {
                        return [...prev.slice(0, -1), { speaker: 'model', text: currentOutputTranscriptionRef.current, isFinal }];
                    }
                    return [...prev, { speaker: 'model', text: currentOutputTranscriptionRef.current, isFinal }];
                });
            }

            // Handle turn completion
            if (message.serverContent?.turnComplete) {
                setTranscripts(prev => prev.map(t => t.isFinal ? t : { ...t, isFinal: true }));
                currentInputTranscriptionRef.current = '';
                currentOutputTranscriptionRef.current = '';
            }

            // Handle interruption
            if (message.serverContent?.interrupted) {
                for (const source of audioSourcesRef.current.values()) {
                    source.stop();
                    audioSourcesRef.current.delete(source);
                }
                nextStartTimeRef.current = 0;
            }

            // Handle audio playback
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio && outputAudioContextRef.current) {
                const audioContext = outputAudioContextRef.current;
                nextStartTimeRef.current = Math.max(nextStartTimeRef.current, audioContext.currentTime);
                const audioBuffer = await decodeAudioData(decode(base64Audio), audioContext, 24000, 1);
                const source = audioContext.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(audioContext.destination);
                source.addEventListener('ended', () => {
                  audioSourcesRef.current.delete(source);
                });
                source.start(nextStartTimeRef.current);
                nextStartTimeRef.current += audioBuffer.duration;
                audioSourcesRef.current.add(source);
            }
          },
          onerror: (e: ErrorEvent) => {
            setError(e.message);
            setConnectionState(ConnectionState.ERROR);
            cleanupLiveSession();
          },
          onclose: () => {
            setConnectionState(ConnectionState.IDLE);
          },
        },
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      setConnectionState(ConnectionState.ERROR);
    }
  }, [systemInstruction, cleanupLiveSession]);

  useEffect(() => {
    return () => {
        cleanupLiveSession();
    };
  }, [cleanupLiveSession]);


  return {
    connectionState,
    ConnectionState,
    transcripts,
    error,
    startSession,
    closeSession,
    analyserNode: analyser,
  };
};