import React from 'react';
import type { Language } from '../types';
import { LanguageCode } from '../types';
// Fix: Corrected import path for SUPPORTED_LANGUAGES.
import { SUPPORTED_LANGUAGES, UI_STRINGS } from '../data/uiStrings';
import { ArrowRightIcon } from './Icons';

interface LanguageSelectorProps {
  onSelect: (language: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => {
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col justify-center min-h-[90vh]">
      <div className="text-center mb-12">
        <h1 className="font-heading text-warm-white text-5xl md:text-6xl uppercase">{UI_STRINGS.welcomeTitle[LanguageCode.ENGLISH]}</h1>
        <h2 className="font-thai text-warm-white/50 text-6xl md:text-7xl -mt-4">ยินดีต้อนรับ</h2>
      </div>
      <div className="space-y-3">
        {SUPPORTED_LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onSelect(lang)}
            className="w-full flex justify-between items-center p-6 bg-warm-white text-charcoal-ink rounded-none border border-light-grey active:bg-vibrant-orange active:text-warm-white transition-colors duration-150 group"
          >
            <div className="text-left">
              <p className="font-bold text-xl">{lang.nativeName}</p>
              <p className="text-charcoal-ink/70">{lang.name}</p>
            </div>
            <ArrowRightIcon className="text-vibrant-orange group-active:text-warm-white" />
          </button>
        ))}
      </div>
    </div>
  );
};