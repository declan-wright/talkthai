import React from 'react';
import type { Language, ConversationTopic, ConversationFeedback } from '../types';
import { UI_STRINGS } from '../data/uiStrings';
import { ConversationAnalysisView } from './ConversationAnalysisView';

interface AnalysisViewProps {
  lesson: ConversationTopic;
  language: Language;
  isLoading: boolean;
  feedback: ConversationFeedback | null;
  error: string | null;
  onBack: () => void;
}

const ProgressBar = () => (
    <div className="w-full bg-charcoal-ink/10 rounded-none h-4 border border-light-grey overflow-hidden">
        <div className="bg-vibrant-orange h-full animate-progress-bar"></div>
    </div>
);


 


export const AnalysisView: React.FC<AnalysisViewProps> = ({ lesson, language, isLoading, feedback, error, onBack }) => {
  return (
    <div className="w-full h-full flex flex-col max-w-3xl mx-auto bg-warm-white text-charcoal-ink rounded-none border border-light-grey overflow-hidden" style={{height: '90vh'}}>
        <header className="p-4 border-b border-light-grey flex justify-between items-center flex-shrink-0">
            <div>
            <h2 className="font-heading text-xl uppercase">{UI_STRINGS.feedback[language.code]}: {lesson.translations[language.code].title}</h2>
            </div>
            <button 
                onClick={onBack} 
                className="text-sm font-medium text-vibrant-orange hover:underline"
                >
                {UI_STRINGS.backToTopics[language.code]}
            </button>
        </header>

        <main className="flex-1 p-6 overflow-y-auto no-scrollbar">
            {isLoading && (
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="w-full max-w-sm">
                        <p className="mb-4 text-charcoal-ink/70 font-bold">{UI_STRINGS.analyzing[language.code]}</p>
                        <ProgressBar />
                        <p className="mt-4 text-sm text-charcoal-ink/50">{UI_STRINGS.analyzingSub[language.code]}</p>
                    </div>
                </div>
            )}
            {error && (
                 <div className="flex flex-col items-center justify-center h-full text-center text-red-500">
                    <p className="font-semibold">{UI_STRINGS.analysisFailed[language.code]}</p>
                    <p className="text-sm ">{error}</p>
                </div>
            )}
            {feedback && (
                <ConversationAnalysisView 
                    feedback={feedback} 
                    language={language} 
                    onTryAgain={onBack}
                />
            )}
        </main>
    </div>
  );
};
