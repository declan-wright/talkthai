import React, { useEffect } from 'react';
import type { Language, VocabularyItem, HandwritingFeedback } from '../types';
import { UI_STRINGS } from '../data/uiStrings';

interface WritingAnalysisViewProps {
  word: VocabularyItem;
  language: Language;
  isLoading: boolean;
  feedback: HandwritingFeedback | null;
  error: string | null;
  imageSrc: string;
  onBackToPractice: () => void;
  onBackToLessons: () => void;
  onAnalyzed: (score: number) => void;
}

const ProgressBar = () => (
    <div className="w-full bg-charcoal-ink/10 rounded-none h-4 border border-light-grey overflow-hidden">
        <div className="bg-vibrant-orange h-full animate-progress-bar" style={{animationDuration: '10s'}}></div>
    </div>
);

const StarRating: React.FC<{ score: number }> = ({ score }) => {
    const totalStars = 5;
    return (
        <div className="flex items-center">
            {[...Array(totalStars)].map((_, index) => {
                const starClass = index < score ? "text-vibrant-orange" : "text-charcoal-ink/20";
                return (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 fill-current ${starClass}`} viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                );
            })}
             <span className="ml-2 font-bold text-lg">{score} / 5</span>
        </div>
    );
};

export const WritingAnalysisView: React.FC<WritingAnalysisViewProps> = ({ word, language, isLoading, feedback, error, imageSrc, onBackToPractice, onBackToLessons, onAnalyzed }) => {

  useEffect(() => {
    if (feedback && feedback.isCorrectWord) {
        onAnalyzed(feedback.overallScore);
    }
  }, [feedback, onAnalyzed]);

  return (
    <div className="w-full h-full flex flex-col max-w-4xl mx-auto bg-warm-white text-charcoal-ink rounded-none border border-light-grey overflow-hidden" style={{height: '90vh'}}>
        <header className="p-4 border-b border-light-grey flex justify-between items-center flex-shrink-0">
            <div>
              <h2 className="font-heading text-xl uppercase">{UI_STRINGS.writingFeedback[language.code]}: <span className="font-thai">{word.thai}</span></h2>
            </div>
            <button onClick={onBackToLessons} className="text-sm font-medium text-vibrant-orange hover:underline">
                {UI_STRINGS.chooseAnotherLesson[language.code]}
            </button>
        </header>

        <main className="flex-1 p-6 overflow-y-auto no-scrollbar">
            <div className="w-full max-w-3xl mx-auto">
                <div className="flex flex-col items-center mb-8">
                    <h3 className="font-bold text-lg mb-2">{UI_STRINGS.yourAttempt[language.code]}</h3>
                    <div className="w-full max-w-md p-2 border-2 border-dashed border-light-grey">
                        <img src={imageSrc} alt="User's handwriting" className="w-full h-auto" />
                    </div>
                </div>

                <div>
                    {isLoading && (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-full max-w-sm">
                                <p className="mb-4 text-charcoal-ink/70 font-bold">{UI_STRINGS.analyzingWriting[language.code]}</p>
                                <ProgressBar />
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
                        !feedback.isCorrectWord ? (
                            <div className="flex flex-col items-center justify-center h-full text-center p-4">
                                <h3 className="font-bold text-xl mb-2">{UI_STRINGS.unableToAnalyze[language.code]}</h3>
                                <p className="text-charcoal-ink/80">{feedback.reasoning || "The image does not appear to contain the requested Thai word. Please try again."}</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{UI_STRINGS.overallAssessment[language.code]}</h3>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-light-grey/50 p-3">
                                        <StarRating score={feedback.overallScore} />
                                        <p className="text-charcoal-ink/80 italic">"{feedback.overallComment}"</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-2">{UI_STRINGS.wordByWordAnalysis[language.code]}</h3>
                                    <div className="space-y-3">
                                        {feedback.wordAnalysis.map((item, index) => (
                                            <div key={index} className="grid grid-cols-[auto,1fr] gap-x-4 border-b border-light-grey pb-3">
                                                <div className="font-thai text-5xl text-vibrant-orange flex items-center justify-center p-2">{item.word}</div>
                                                <div>
                                                    <p><strong className="font-bold">{UI_STRINGS.good[language.code]}</strong> {item.positiveFeedback}</p>
                                                    <p><strong className="font-bold">{UI_STRINGS.tip[language.code]}</strong> {item.improvementTip}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                 <div>
                                    <h3 className="font-bold text-lg mb-2">{UI_STRINGS.keyRecommendation[language.code]}</h3>
                                    <div className="bg-vibrant-orange/10 p-4">
                                        <p className="font-semibold">{feedback.keyRecommendation}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    )}
                </div>
            </div>
        </main>
        {!isLoading && (
             <footer className="p-4 border-t border-light-grey flex-shrink-0 text-center">
                <button onClick={onBackToPractice} className="bg-vibrant-orange text-warm-white font-bold py-3 px-6 uppercase active:scale-95 transition-transform">
                     {UI_STRINGS.practiceAnotherWord[language.code]}
                </button>
             </footer>
        )}
    </div>
  );
};