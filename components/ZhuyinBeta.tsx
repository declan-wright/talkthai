import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon } from './Icons';
import { isZhuyinEnabled, setZhuyinEnabled } from '../services/zhuyinService';
import type { Language } from '../types';
import { LanguageCode } from '../types';

interface ZhuyinBetaProps {
  language: Language;
  onBack: () => void;
}

export const ZhuyinBeta: React.FC<ZhuyinBetaProps> = ({ language, onBack }) => {
  const [zhuyinOn, setZhuyinOn] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setZhuyinOn(isZhuyinEnabled());
  }, []);

  const handleToggle = () => {
    const newValue = !zhuyinOn;
    setZhuyinOn(newValue);
    setZhuyinEnabled(newValue);
  };

  const isMandarin = language.code === LanguageCode.MANDARIN;

  const steps = [
    {
      title: isMandarin ? '什麼是注音化？' : 'What is Zhuyinization?',
      content: isMandarin
        ? '這是一個實驗性功能，將泰語的羅馬拼音轉換成注音符號，幫助台灣華語使用者理解泰語發音。這個系統可能並非所有情況都完全準確，因為泰語有一些華語中不存在的音。'
        : 'This is an experimental feature that converts Thai romanization to Zhuyin (Bopomofo), helping Taiwanese Mandarin speakers understand Thai pronunciation. This system may not be perfectly accurate in all scenarios, as Thai has sounds that do not exist in Mandarin.'
    },
    {
      title: isMandarin ? '新發明的注音符號' : 'Invented Zhuyin Symbols',
      content: isMandarin
        ? '由於泰語有華語中不存在的音，我們使用了以下符號來表示它們：\n\nX = /ɯ/ 音\n這是 ㄨ (/u/) 的不圓唇版本。在泰語中出現於 ดื、ผื 等字。X 的形狀類似交叉的 ㄨ。\n\nさ = /ɔ/ 音\nㄛ (/o/) 的更開口版本。在泰語中出現於 ก็อ、น็อ 等字。さ 的曲線形狀與 ㄛ 相似，代表更開放的音。\n\nㄜ = /ə/ 音（輕聲）\n用於表示泰語的輕聲母音。'
        : 'Since Thai has sounds that don\'t exist in Mandarin, we use these symbols to represent them:\n\nX = /ɯ/ sound\nThis is the unrounded version of ㄨ (/u/). Found in Thai characters like ดื, ผื. The X shape resembles a crossed ㄨ.\n\nさ = /ɔ/ sound\nA more open version of ㄛ (/o/). Found in Thai characters like ก็อ, น็อ. The curved shape of さ resembles ㄛ and represents a more open sound.\n\nㄜ = /ə/ sound (schwa)\nUsed for Thai\'s neutral vowel sound.'
    },
    {
      title: isMandarin ? '聲調對應' : 'Tone Mapping',
      content: isMandarin
        ? '泰語有五個聲調，我們將它們對應到最接近的華語聲調：\n\n降調 (â) → ˋ（第四聲）- 非常接近\n升調 (ǎ) → ˊ（第二聲）- 非常接近\n高調 (á) → 無標記（第一聲）- 相當接近\n低調 (à) → ˇ（第三聲）- 部分相似\n中調（無標記）→ ˙（輕聲）- 不太相似\n\n重要提醒：泰語和華語的聲調系統並不完全相同。這些對應只是近似值，實際發音還需要聆聽真實的泰語來學習。'
        : 'Thai has five tones, which we map to the closest Mandarin tones:\n\nFalling (â) → ˋ (Tone 4) - Excellent match\nRising (ǎ) → ˊ (Tone 2) - Excellent match\nHigh (á) → (no mark) (Tone 1) - Good match\nLow (à) → ˇ (Tone 3) - Partial match\nMid (no mark) → ˙ (Neutral) - Weak match\n\nImportant: Thai and Mandarin tone systems are not identical. These mappings are approximations, and you should listen to real Thai pronunciation to learn the true tones.'
    },
    {
      title: isMandarin ? '如何使用' : 'How to Use',
      content: isMandarin
        ? '當你啟用注音化功能後，字卡中的羅馬拼音會被轉換成注音符號，讓你更容易理解發音。\n\n範例：\n羅馬拼音：sà-wàt-dii kráp\n注音化：ㄙㄚˇㄨㄚˇㄉㄧ˙ ㄍㄖㄚㄅ\n\n範例：\n羅馬拼音：hɔ̂ŋ-náam\n注音化：ㄏさㄥˋㄋㄚㄇ\n\n這只是一個輔助工具。要真正提升泰語能力，學習泰文字母才是最好的方法。'
        : 'When you enable Zhuyinization, romanization in flashcards will be converted to Zhuyin, making pronunciation easier to understand.\n\nExample:\nRomanization: sà-wàt-dii kráp\nZhuyinization: ㄙㄚˇㄨㄚˇㄉㄧ˙ ㄍㄖㄚㄅ\n\nExample:\nRomanization: hɔ̂ŋ-náam\nZhuyinization: ㄏさㄥˋㄋㄚㄇ\n\nThis is just an aid. To truly improve your Thai proficiency, learning Thai script is the best approach.'
    },
    {
      title: isMandarin ? '學習泰文字母' : 'Learn Thai Script',
      content: isMandarin
        ? '雖然注音化可以幫助你快速開始，但學習真正的泰文字母才是長久之計。對華語使用者來說，學習泰文字母並不困難，而且是提升泰語能力的唯一有效方法。\n\n你可以立即在「閱讀」標籤中開始練習泰文字母！\n\n準備好了嗎？使用下方的開關啟用或關閉注音化功能。'
        : 'While Zhuyinization can help you get started quickly, learning actual Thai script is the best long-term solution. For Mandarin speakers, learning Thai script is not difficult, and it\'s truly the only effective way to improve your Thai proficiency.\n\nYou can start practicing Thai script right now in the Reading tab!\n\nReady? Use the toggle below to enable or disable Zhuyinization.'
    }
  ];

  return (
    <div className="min-h-screen bg-charcoal-ink text-warm-white p-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="p-2 hover:bg-warm-white/10 transition-colors"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold uppercase ml-4">
            {isMandarin ? '注音化測試版' : 'Zhuyin Beta'}
          </h1>
        </div>

        {/* Beta Notice */}
        <div className="bg-vibrant-orange/20 border-2 border-vibrant-orange/40 p-4 mb-8">
          <h2 className="font-bold text-lg mb-2">
            {isMandarin ? '測試版功能' : 'Beta Feature'}
          </h2>
          <p className="text-sm leading-relaxed">
            {isMandarin
              ? '這是一個實驗性功能，可能並非所有情況都完全準確。此功能將泰語羅馬拼音轉換成注音符號，幫助台灣華語使用者理解發音。'
              : 'This is an experimental feature that may not work accurately in all scenarios. It converts Thai romanization to Zhuyin to help Taiwanese Mandarin speakers understand pronunciation.'}
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mb-8 gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 max-w-[60px] transition-colors ${
                index === currentStep
                  ? 'bg-vibrant-orange'
                  : index < currentStep
                  ? 'bg-vibrant-orange/50'
                  : 'bg-warm-white/20'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="bg-warm-white/5 border-2 border-warm-white/10 p-6 mb-8 min-h-[400px] flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-vibrant-orange">
            {steps[currentStep].title}
          </h2>
          <div className="flex-1">
            <p className="leading-relaxed whitespace-pre-line text-base">
              {steps[currentStep].content}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-4 mt-6">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex-1 py-3 bg-warm-white/10 border-2 border-warm-white/20 hover:bg-warm-white/20 uppercase font-bold transition-colors"
              >
                {isMandarin ? '上一步' : 'Previous'}
              </button>
            )}
            {currentStep < steps.length - 1 && (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex-1 py-3 bg-vibrant-orange text-charcoal-ink uppercase font-bold hover:bg-vibrant-orange/90 transition-colors"
              >
                {isMandarin ? '下一步' : 'Next'}
              </button>
            )}
          </div>
        </div>

        {/* Toggle section */}
        <div className="bg-warm-white/5 border-2 border-warm-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">
                {isMandarin ? '啟用注音化' : 'Enable Zhuyinization'}
              </h3>
              <p className="text-sm text-warm-white/70">
                {isMandarin
                  ? '在字卡中顯示注音符號而非羅馬拼音'
                  : 'Show Zhuyin instead of romanization in flashcards'}
              </p>
            </div>
            <button
              onClick={handleToggle}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                zhuyinOn ? 'bg-vibrant-orange' : 'bg-warm-white/20'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-warm-white rounded-full transition-transform ${
                  zhuyinOn ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-center text-sm text-warm-white/60">
          <p>
            {isMandarin
              ? '你隨時可以在此頁面開啟或關閉注音化功能'
              : 'You can enable or disable Zhuyinization anytime on this page'}
          </p>
        </div>
      </div>
    </div>
  );
};
