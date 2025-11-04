import React from 'react';
import { ArrowRightIcon, ClockIcon, UsersIcon, TrophyIcon } from './Icons';
import { UI_STRINGS } from '../data/uiStrings';
import type { Language } from '../types';

interface OnboardingIntroProps {
  onNext: () => void;
  language: Language;
}

export const OnboardingIntro: React.FC<OnboardingIntroProps> = ({ onNext, language }) => {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col justify-center min-h-[90vh] text-warm-white p-4 text-center">
      <div className="mb-8">
        <h1 className="font-heading text-4xl md:text-5xl uppercase">{UI_STRINGS.onboardingIntroTitle[language.code]}</h1>
        <p className="font-thai text-warm-white/40 text-4xl -mt-2">ความจริง</p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-warm-white/5 border border-warm-white/10 p-6">
          <div className="flex items-center gap-4 mb-3">
            <ClockIcon className="w-10 h-10 text-vibrant-orange" />
            <h2 className="font-heading text-xl uppercase text-left">{UI_STRINGS.onboardingTimeTitle[language.code]}</h2>
          </div>
          <p className="text-left text-base text-warm-white/80">
            {UI_STRINGS.onboardingTimeDescription[language.code]}
          </p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-left text-warm-white/70 text-sm">
            <p>→ {UI_STRINGS.onboardingTime30Min[language.code]}</p>
            <p>→ {UI_STRINGS.onboardingTime1Hour[language.code]}</p>
            <p>→ {UI_STRINGS.onboardingTime90Min[language.code]}</p>
          </div>
        </div>

        <div className="bg-warm-white/5 border border-warm-white/10 p-6">
          <div className="flex items-center gap-4 mb-3">
            <UsersIcon className="w-10 h-10 text-vibrant-orange" />
            <h2 className="font-heading text-xl uppercase text-left">{UI_STRINGS.onboardingAccountabilityTitle[language.code]}</h2>
          </div>
          <p className="text-left text-base text-warm-white/80">
            {UI_STRINGS.onboardingAccountabilityDescription[language.code]}
          </p>
        </div>

        <div className="bg-warm-white/5 border border-warm-white/10 p-6">
          <div className="flex items-center gap-4 mb-3">
            <TrophyIcon className="w-10 h-10 text-vibrant-orange" />
            <h2 className="font-heading text-xl uppercase text-left">{UI_STRINGS.onboardingCompetitionTitle[language.code]}</h2>
          </div>
          <p className="text-left text-base text-warm-white/80">
            {UI_STRINGS.onboardingCompetitionDescription[language.code]}
          </p>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onNext}
          className="bg-vibrant-orange text-warm-white font-bold py-4 px-8 uppercase flex items-center gap-3 mx-auto group active:scale-95 transition-transform duration-150"
        >
          {UI_STRINGS.howItWorks[language.code]}
          <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
