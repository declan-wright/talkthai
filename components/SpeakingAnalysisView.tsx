import React from 'react';
import type { Language, SpeakingFeedback } from '../types';
import { UI_STRINGS } from '../data/uiStrings';

interface SpeakingAnalysisViewProps {
  feedback: SpeakingFeedback;
  language: Language;
  onTryAgain: () => void;
}

const FeedbackCategory: React.FC<{ title: string, score: number, feedbackText: string }> = ({ title, score, feedbackText }) => {
    const totalStars = 5;
    return (
        <div className="bg-light-grey/50 p-4 rounded-none">
            <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-lg">{title}</h4>
                <div className="flex">
                    {[...Array(totalStars)].map((_, index) => {
                        const starClass = index < score ? "text-vibrant-orange" : "text-charcoal-ink/20";
                        return (
                            <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 fill-current ${starClass}`} viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        );
                    })}
                </div>
            </div>
            <p className="text-charcoal-ink/80">{feedbackText}</p>
        </div>
    );
};


export const SpeakingAnalysisView: React.FC<SpeakingAnalysisViewProps> = ({ feedback, language, onTryAgain }) => {
  if (!feedback.isRecognizable) {
    return (
      <div className="w-full bg-warm-white p-4 sm:p-6 border border-light-grey rounded-none mt-6 text-center">
        <h3 className="font-heading text-2xl uppercase mb-4">{UI_STRINGS.unableToAnalyze[language.code]}</h3>
        <p className="text-charcoal-ink/80 mb-6">{feedback.reasoning || "The audio provided did not seem to be an attempt to say the requested phrase. Please try again."}</p>
        <button
          onClick={onTryAgain}
          className="bg-charcoal-ink text-warm-white font-bold py-3 px-8 uppercase text-lg active:scale-95 transition-transform rounded-none"
        >
          {UI_STRINGS.tryAgain[language.code]}
        </button>
      </div>
    );
  }
  
  return (
    <div className="w-full bg-warm-white p-4 sm:p-6 border border-light-grey rounded-none mt-6">
        <h3 className="font-heading text-2xl uppercase text-center mb-6">{UI_STRINGS.speakingFeedback[language.code]}</h3>
        <div className="space-y-6">
            <div className="space-y-4">
                <FeedbackCategory title={UI_STRINGS.pronunciation[language.code]} score={feedback.pronunciationScore} feedbackText={feedback.pronunciationFeedback} />
                <FeedbackCategory title={UI_STRINGS.fluency[language.code]} score={feedback.fluencyScore} feedbackText={feedback.fluencyFeedback} />
                <FeedbackCategory title={UI_STRINGS.tone[language.code]} score={feedback.toneScore} feedbackText={feedback.toneFeedback} />
            </div>

             <div>
                <h4 className="font-bold text-lg mb-2 text-center">{UI_STRINGS.keyRecommendation[language.code]}</h4>
                <div className="bg-vibrant-orange/10 p-4 rounded-none text-center">
                    <p className="font-semibold">{feedback.keyRecommendation}</p>
                </div>
            </div>

            <div className="text-center pt-4">
                <button
                    onClick={onTryAgain}
                    className="bg-charcoal-ink text-warm-white font-bold py-3 px-8 uppercase text-lg active:scale-95 transition-transform rounded-none"
                >
                    {UI_STRINGS.tryAgain[language.code]}
                </button>
            </div>
        </div>
    </div>
  );
};