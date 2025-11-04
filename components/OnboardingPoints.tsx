import React, { useState } from 'react';
import { ArrowRightIcon, ChatBubbleIcon, PencilIcon, BookOpenIcon, FlashIcon, XIcon } from './Icons';
import { UI_STRINGS } from '../data/uiStrings';
import type { Language } from '../types';

interface OnboardingPointsProps {
  onNext: () => void;
  language: Language;
}

export const OnboardingPoints: React.FC<OnboardingPointsProps> = ({ onNext, language }) => {
  const [showModal, setShowModal] = useState(false);

  const handleNextClick = () => {
    setShowModal(true);
  };

  const handleGiveUp = () => {
    window.location.href = 'https://www.google.com';
  };

  const handleContinue = () => {
    setShowModal(false);
    onNext();
  };
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col justify-center min-h-[90vh] text-warm-white p-4 text-center">
      <div className="mb-8">
        <h1 className="font-heading text-4xl md:text-5xl uppercase">{UI_STRINGS.onboardingPathTitle[language.code]}</h1>
        <p className="font-thai text-warm-white/40 text-4xl -mt-2">เส้นทาง</p>
      </div>

      <div className="bg-warm-white/5 border border-warm-white/10 p-6 rounded-none mb-6">
        <h2 className="font-heading text-2xl uppercase text-vibrant-orange mb-2">{UI_STRINGS.onboarding1HourPerDay[language.code]}</h2>
        <p className="text-base text-warm-white/80 mb-2">
          {UI_STRINGS.onboardingActivityDescription[language.code]}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {/* Flashcards */}
        <div className="bg-warm-white/5 border border-warm-white/10 p-5 rounded-none">
          <div className="flex items-center gap-3 mb-3">
            <FlashIcon className="w-8 h-8 text-vibrant-orange" />
            <div className="text-left">
              <h3 className="font-heading text-lg uppercase">Flashcards</h3>
              <p className="text-sm text-warm-white/60">{UI_STRINGS.fifteenMinutes[language.code]}</p>
            </div>
          </div>
          <p className="text-left text-sm text-warm-white/70">{UI_STRINGS.onboardingFlashcardsDescription[language.code]}</p>
        </div>

        {/* Conversation */}
        <div className="bg-warm-white/5 border border-warm-white/10 p-5 rounded-none">
          <div className="flex items-center gap-3 mb-3">
            <ChatBubbleIcon className="w-8 h-8 text-vibrant-orange" />
            <div className="text-left">
              <h3 className="font-heading text-lg uppercase">Conversation</h3>
              <p className="text-sm text-warm-white/60">{UI_STRINGS.fifteenMinutes[language.code]}</p>
            </div>
          </div>
          <p className="text-left text-sm text-warm-white/70">{UI_STRINGS.onboardingConversationDescription[language.code]}</p>
        </div>

        {/* Worksheets */}
        <div className="bg-warm-white/5 border border-warm-white/10 p-5 rounded-none">
          <div className="flex items-center gap-3 mb-3">
            <BookOpenIcon className="w-8 h-8 text-vibrant-orange" />
            <div className="text-left">
              <h3 className="font-heading text-lg uppercase">Worksheets</h3>
              <p className="text-sm text-warm-white/60">{UI_STRINGS.fifteenMinutes[language.code]}</p>
            </div>
          </div>
          <p className="text-left text-sm text-warm-white/70">{UI_STRINGS.onboardingWorksheetsDescription[language.code]}</p>
        </div>

        {/* Writing */}
        <div className="bg-warm-white/5 border border-warm-white/10 p-5 rounded-none">
          <div className="flex items-center gap-3 mb-3">
            <PencilIcon className="w-8 h-8 text-vibrant-orange" />
            <div className="text-left">
              <h3 className="font-heading text-lg uppercase">Writing</h3>
              <p className="text-sm text-warm-white/60">{UI_STRINGS.fifteenMinutes[language.code]}</p>
            </div>
          </div>
          <p className="text-left text-sm text-warm-white/70">{UI_STRINGS.onboardingWritingDescription[language.code]}</p>
        </div>
      </div>

      <div className="bg-warm-white/5 border border-warm-white/10 p-5 rounded-none mb-6 text-left">
        <p className="text-lg font-bold mb-2">{UI_STRINGS.onboardingPointsTitle[language.code]}</p>
        <p className="text-warm-white/70 text-sm">
          {UI_STRINGS.onboardingPointsDescription[language.code]}
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={handleNextClick}
          className="bg-vibrant-orange text-warm-white font-bold py-4 px-8 uppercase flex items-center gap-3 mx-auto group active:scale-95 transition-transform duration-150"
        >
          {UI_STRINGS.theStakes[language.code]}
          <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Commitment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-charcoal-ink/90 flex items-center justify-center z-50 p-4">
          <div className="bg-warm-white w-full max-w-md p-8 rounded-none border-2 border-vibrant-orange relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-charcoal-ink/50 hover:text-charcoal-ink"
            >
              <XIcon className="w-6 h-6" />
            </button>

            <h2 className="font-heading text-3xl uppercase text-charcoal-ink mb-4 text-center">
              {UI_STRINGS.areYouSure[language.code]}
            </h2>
            <p className="font-thai text-charcoal-ink/50 text-2xl text-center -mt-2 mb-6">แน่ใจหรือ</p>

            <p className="text-charcoal-ink text-center mb-8 text-lg">
              {UI_STRINGS.onboardingCommitmentWarning[language.code]}
            </p>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleGiveUp}
                className="bg-warm-white text-charcoal-ink border-2 border-charcoal-ink/20 font-bold py-3 px-6 uppercase hover:bg-charcoal-ink/5 active:scale-95 transition-all"
              >
                {UI_STRINGS.giveUpNow[language.code]}
              </button>
              <button
                onClick={handleContinue}
                className="bg-vibrant-orange text-warm-white font-bold py-3 px-6 uppercase active:scale-95 transition-transform"
              >
                {UI_STRINGS.continueAnyways[language.code]}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
