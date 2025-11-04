import React from 'react';
import { AddToHomeScreenIcon, IosShareIcon, MoreVertIcon, ArrowRightIcon } from './Icons';
import type { Language } from '../types';
import { UI_STRINGS } from '../data/uiStrings';

interface InstallInstructionsProps {
  onComplete: () => void;
  language: Language;
  installPrompt: any;
}

const StringWithHighlights: React.FC<{ text: string; quote?: boolean }> = ({ text, quote = false }) => {
    const parts = text.split(/(\*\*.*?\*\*)/g).filter(part => part);
    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    const content = <strong key={index} className="text-vibrant-orange">{part.slice(2, -2)}</strong>;
                    return quote ? <React.Fragment key={index}>'{content}'</React.Fragment> : content;
                }
                return <span key={index}>{part}</span>;
            })}
        </>
    );
};


export const InstallInstructions: React.FC<InstallInstructionsProps> = ({ onComplete, language, installPrompt }) => {
  const langCode = language.code;

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    // The userChoice property is a Promise that resolves to an object with an outcome property
    const { outcome } = await installPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    // We can't use the prompt again, but we could hide the button or take other action
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col justify-center min-h-[90vh] text-warm-white p-4">
      <div className="text-center mb-8">
        <h1 className="font-heading text-4xl md:text-5xl uppercase">{UI_STRINGS.installTitle[langCode]}</h1>
        <p className="text-warm-white/70 mt-2">{UI_STRINGS.installDescription[langCode]}</p>
      </div>

      {installPrompt && (
        <div className="text-center mb-8">
            <button
                onClick={handleInstallClick}
                className="bg-vibrant-orange text-warm-white font-bold py-4 px-8 uppercase flex items-center gap-3 mx-auto group active:scale-95 transition-transform duration-150 mb-4"
            >
                <AddToHomeScreenIcon />
                {UI_STRINGS.installApp[langCode]}
            </button>
            <p className="text-warm-white/60">{UI_STRINGS.installOrFollow[langCode]}</p>
        </div>
      )}

      <div className="space-y-8">
        {/* iOS / Safari Instructions */}
        <div className="bg-warm-white/5 p-6 rounded-none">
          <h2 className="font-bold text-2xl mb-4">{UI_STRINGS.installIosTitle[langCode]}</h2>
          <ol className="text-left space-y-3">
            <li><StringWithHighlights text={UI_STRINGS.installIosStep1[langCode]} /> <IosShareIcon /></li>
            <li><StringWithHighlights text={UI_STRINGS.installIosStep2[langCode]} quote={true}/> <AddToHomeScreenIcon /></li>
          </ol>
        </div>

        {/* Android / Chrome Instructions */}
        <div className="bg-warm-white/5 p-6 rounded-none">
          <h2 className="font-bold text-2xl mb-4">{UI_STRINGS.installAndroidTitle[langCode]}</h2>
           <ol className="text-left space-y-3">
            <li><StringWithHighlights text={UI_STRINGS.installAndroidStep1[langCode]} /> <MoreVertIcon /></li>
            <li><StringWithHighlights text={UI_STRINGS.installAndroidStep2[langCode]} quote={true} /></li>
          </ol>
        </div>
      </div>

      <div className="text-center mt-12">
        <button 
          onClick={onComplete}
          className="bg-vibrant-orange text-warm-white font-bold py-4 px-8 uppercase flex items-center gap-3 mx-auto group active:scale-95 transition-transform duration-150"
        >
          {UI_STRINGS.installContinue[langCode]}
          <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};