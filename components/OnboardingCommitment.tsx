import React from 'react';
import { ArrowRightIcon, TrophyIcon, BrokenHeartIcon, CrownIcon } from './Icons';
import { UI_STRINGS } from '../data/uiStrings';
import type { Language } from '../types';

interface OnboardingCommitmentProps {
  onNext: () => void;
  language: Language;
}

export const OnboardingCommitment: React.FC<OnboardingCommitmentProps> = ({ onNext, language }) => {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col justify-center min-h-[90vh] text-warm-white p-4 text-center">
      <div className="mb-8">
        <h1 className="font-heading text-4xl md:text-5xl uppercase">{UI_STRINGS.theStakes[language.code]}</h1>
        <p className="font-thai text-warm-white/40 text-4xl -mt-2">การแข่งขัน</p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-warm-white/5 border border-warm-white/10 p-6">
          <div className="flex items-center gap-4 mb-3">
            <CrownIcon className="w-10 h-10 text-vibrant-orange" />
            <h2 className="font-heading text-xl uppercase text-left">{UI_STRINGS.weeklyLeaderboard[language.code]}</h2>
          </div>
          <p className="text-left text-base text-warm-white/80 mb-2">
            {UI_STRINGS.onboardingLeaderboardDescription[language.code]}
          </p>
          <p className="text-left text-sm text-warm-white/60">
            {UI_STRINGS.onboardingProgressVisibleMessage[language.code]}
          </p>
        </div>

        <div className="bg-warm-white/5 border border-warm-white/10 p-6">
          <div className="flex items-center gap-4 mb-3">
            <BrokenHeartIcon className="w-10 h-10 text-red-400" />
            <h2 className="font-heading text-xl uppercase text-left text-warm-white">{UI_STRINGS.shameWallTitle[language.code]}</h2>
          </div>
          <p className="text-left text-base text-warm-white/80 mb-2">
            {UI_STRINGS.onboardingShameWallDescription[language.code]}
          </p>
          <p className="text-left text-sm text-warm-white/60">
            {UI_STRINGS.onboardingShameWallStreakMessage[language.code]}
          </p>
        </div>

        <div className="bg-warm-white/5 border border-warm-white/10 p-6">
          <div className="flex items-center gap-4 mb-3">
            <TrophyIcon className="w-10 h-10 text-vibrant-orange" />
            <h2 className="font-heading text-xl uppercase text-left">{UI_STRINGS.onboardingShowUpTitle[language.code]}</h2>
          </div>
          <p className="text-left text-base text-warm-white/80">
            {UI_STRINGS.onboardingShowUpDescription[language.code]}
          </p>
        </div>
      </div>

      <div className="bg-warm-white/5 border border-warm-white/10 p-6 mb-8 text-left">
        <p className="font-heading text-2xl uppercase text-vibrant-orange mb-2">
          {UI_STRINGS.onboardingDontBeLast[language.code]}
        </p>
        <p className="text-base text-warm-white/80">
          {UI_STRINGS.onboardingFearOfLosingMessage[language.code]}
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={onNext}
          className="bg-vibrant-orange text-warm-white font-bold py-4 px-8 uppercase flex items-center gap-3 mx-auto group active:scale-95 transition-transform duration-150"
        >
          {UI_STRINGS.startLearning[language.code]}
          <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
