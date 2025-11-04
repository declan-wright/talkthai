import React from 'react';
import { type ConversationTopic, type Language, type Transcript, LanguageCode } from '../types';
import { SYSTEM_PROMPT_TEMPLATE, UI_STRINGS } from '../data/uiStrings';
import { useGeminiLive } from '../hooks/useGeminiLive';
import { MicrophoneIcon } from './Icons';
import { WaveformVisualizer } from './WaveformVisualizer';

interface ConversationProps {
  lesson: ConversationTopic;
  language: Language;
  onFinish: (audioBlob: globalThis.Blob, transcript: Transcript[], durationSeconds: number) => void;
}

const StopIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 6h12v12H6z"></path>
    </svg>
);

const LoadingSpinner = () => (
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-warm-white"></div>
);

export const Conversation: React.FC<ConversationProps> = ({ lesson, language, onFinish }) => {
  const systemInstruction = SYSTEM_PROMPT_TEMPLATE
    .replace('{{NATIVE_LANGUAGE}}', language.name)
    .replace('{{SCENARIO}}', lesson.translations[LanguageCode.ENGLISH].scenario);
  
  const { connectionState, ConnectionState, transcripts, error, startSession, closeSession, analyserNode } = useGeminiLive({ systemInstruction, onSessionEnd: onFinish });

  const isSessionActive = connectionState === ConnectionState.CONNECTING || connectionState === ConnectionState.CONNECTED;

  const getStatusText = () => {
    switch (connectionState) {
        case ConnectionState.IDLE:
        case ConnectionState.CLOSED:
            return UI_STRINGS.statusTapToStart[language.code];
        case ConnectionState.CONNECTING:
            return UI_STRINGS.statusConnecting[language.code];
        case ConnectionState.CONNECTED:
            return UI_STRINGS.statusListening[language.code];
        case ConnectionState.ERROR:
            return `${UI_STRINGS.statusError[language.code]}: ${error || 'Unknown error'}`;
        default:
            return "";
    }
  }

  const renderMicIcon = () => {
    switch (connectionState) {
        case ConnectionState.CONNECTING:
            return <LoadingSpinner />;
        case ConnectionState.CONNECTED:
            return analyserNode ?
                <WaveformVisualizer analyserNode={analyserNode} /> :
                <StopIcon />; // Fallback
        default:
            return <MicrophoneIcon className="h-10 w-10" />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col max-w-3xl mx-auto bg-charcoal-ink" style={{height: '90vh'}}>
      <header className="p-4 border-b border-warm-white/20 flex justify-between items-center flex-shrink-0 text-warm-white">
        <div className="text-left">
          <h2 className="font-heading text-2xl uppercase">{lesson.translations[language.code].title}</h2>
          <p className="text-warm-white/60">{UI_STRINGS.practicingFrom[language.code]} {language.name}</p>
        </div>
        <button 
          onClick={closeSession} 
          className="text-sm font-medium text-vibrant-orange hover:underline disabled:text-vibrant-orange/50 disabled:no-underline"
          disabled={!isSessionActive}
        >
          {UI_STRINGS.finishAndAnalyze[language.code]}
        </button>
      </header>
      
      <main className="flex-1 p-6 overflow-y-auto no-scrollbar">
        <div className="space-y-4">
            {transcripts.length === 0 && !isSessionActive && (
                <div className="text-center text-warm-white/70 flex flex-col items-center justify-center h-full">
                    <p className="text-lg">{UI_STRINGS.pressToStart[language.code]}</p>
                </div>
            )}
            {transcripts.map((t, index) => (
            <div key={index} className={`flex ${t.speaker === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-md p-3 rounded-md ${t.speaker === 'user' ? 'bg-vibrant-orange text-warm-white' : 'bg-warm-white text-charcoal-ink'} ${!t.isFinal ? 'opacity-70' : ''}`}>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-charcoal-ink flex-shrink-0">
        <button 
            onClick={isSessionActive ? closeSession : startSession}
            disabled={connectionState === ConnectionState.CONNECTING}
            className={`w-full h-40 flex flex-col items-center justify-center text-warm-white transition-colors duration-200 focus:outline-none 
                ${connectionState === ConnectionState.CONNECTED ? 'bg-vibrant-orange' : 'bg-warm-white/5 hover:bg-warm-white/10'}
                ${connectionState === ConnectionState.CONNECTING ? 'bg-warm-white/5 cursor-not-allowed' : ''}
            `}
            aria-label={isSessionActive ? 'Stop session' : 'Start session'}
        >
            <div className="h-10 flex items-center justify-center">
                {renderMicIcon()}
            </div>
            <p className="text-sm text-warm-white/60 h-5 mt-4">{getStatusText()}</p>
        </button>
      </footer>
    </div>
  );
};