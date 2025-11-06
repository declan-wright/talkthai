import React, { useState } from 'react';
import type { Language } from '../types';
import { type ReadingLesson, ReadingLessonType } from '../data/reading/lessons';
import { ConsonantClass, type ThaiConsonant, type ThaiVowel, type VowelPosition } from '../data/reading/characters';
import { READING_UI_STRINGS } from '../data/readingUIStrings';
import { ArrowLeftIcon } from './Icons';

interface ReadingLessonViewProps {
  lesson: ReadingLesson;
  language: Language;
  onBack: () => void;
  onStartPractice: () => void;
}

export const ReadingLessonView: React.FC<ReadingLessonViewProps> = ({
  lesson,
  language,
  onBack,
  onStartPractice
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const currentPage = lesson.pages[currentPageIndex];
  const isLastPage = currentPageIndex === lesson.pages.length - 1;

  const handleNext = () => {
    if (isLastPage) {
      // For introduction, go back to lesson selector
      if (lesson.type === ReadingLessonType.INTRODUCTION) {
        onBack();
      } else {
        // For other lessons, start practice
        onStartPractice();
      }
    } else {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const playAudio = (audioFile: string) => {
    const audio = new Audio(audioFile);
    audio.play().catch(err => console.error('Audio playback failed:', err));
  };

  const renderPageContent = () => {
    const title = READING_UI_STRINGS[currentPage.title]?.[language.code] || currentPage.title;
    const body = currentPage.body ? READING_UI_STRINGS[currentPage.body]?.[language.code] || currentPage.body : null;
    const footer = currentPage.footer ? READING_UI_STRINGS[currentPage.footer]?.[language.code] || currentPage.footer : null;

    switch (currentPage.type) {
      case 'text':
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
            {body && <p className="text-charcoal-ink leading-relaxed text-lg">{body}</p>}
            {footer && (
              <div className="mt-8 p-4 bg-light-grey border border-light-grey">
                <p className="text-charcoal-ink font-medium">{footer}</p>
              </div>
            )}
          </div>
        );

      case 'character-list':
        const characters: ThaiConsonant[] = currentPage.data?.characters || [];
        const vowels: ThaiVowel[] = currentPage.data?.vowels || [];

        // Handle vowels
        if (vowels.length > 0) {
          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
              {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

              <div className="border border-light-grey overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead className="bg-light-grey">
                    <tr>
                      <th className="px-3 sm:px-4 py-3 text-left font-bold text-charcoal-ink whitespace-nowrap">Vowel</th>
                      <th className="px-3 sm:px-4 py-3 text-left font-bold text-charcoal-ink whitespace-nowrap">Sound</th>
                      <th className="px-3 sm:px-4 py-3 text-center font-bold text-charcoal-ink whitespace-nowrap">Play</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vowels.map((vowel, idx) => (
                      <tr key={idx} className="border-t border-light-grey hover:bg-warm-white">
                        <td className="px-3 sm:px-4 py-3 font-thai text-3xl sm:text-4xl text-charcoal-ink">{vowel.exampleWithKɔɔ}</td>
                        <td className="px-3 sm:px-4 py-3 text-base sm:text-lg font-mono text-charcoal-ink whitespace-nowrap">{vowel.phonetic}</td>
                        <td className="px-3 sm:px-4 py-3 text-center">
                          <button
                            onClick={() => playAudio(vowel.audioFile)}
                            className="w-10 h-10 flex items-center justify-center bg-vibrant-orange text-warm-white hover:bg-charcoal-ink transition-colors"
                            aria-label={`Play ${vowel.phonetic}`}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }

        // Handle characters (consonants)
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
            {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

            <div className="border border-light-grey overflow-x-auto">
              <table className="w-full min-w-max">
                <thead className="bg-light-grey">
                  <tr>
                    <th className="px-3 sm:px-4 py-3 text-left font-bold text-charcoal-ink whitespace-nowrap">Character</th>
                    <th className="px-3 sm:px-4 py-3 text-left font-bold text-charcoal-ink whitespace-nowrap">Sound</th>
                    <th className="px-3 sm:px-4 py-3 text-left font-bold text-charcoal-ink whitespace-nowrap">Name</th>
                    <th className="px-3 sm:px-4 py-3 text-center font-bold text-charcoal-ink whitespace-nowrap">Play</th>
                  </tr>
                </thead>
                <tbody>
                  {characters.map((char, idx) => (
                    <tr key={idx} className="border-t border-light-grey hover:bg-warm-white">
                      <td className="px-3 sm:px-4 py-3 font-thai text-3xl sm:text-4xl text-charcoal-ink">{char.character}</td>
                      <td className="px-3 sm:px-4 py-3 text-base sm:text-lg font-mono text-charcoal-ink whitespace-nowrap">{char.phonetic}</td>
                      <td className="px-3 sm:px-4 py-3 text-sm sm:text-base text-charcoal-ink">{char.name}</td>
                      <td className="px-3 sm:px-4 py-3 text-center">
                        <button
                          onClick={() => playAudio(char.audioFile)}
                          className="w-10 h-10 flex items-center justify-center bg-vibrant-orange text-warm-white hover:bg-charcoal-ink transition-colors"
                          aria-label={`Play ${char.name}`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'overview':
        const highConsonants = currentPage.data?.highConsonants || [];
        const midConsonants = currentPage.data?.midConsonants || [];
        const lowConsonants = currentPage.data?.lowConsonants || [];
        const highlightLessCommon = currentPage.data?.highlightLessCommon || false;

        const renderConsonantRow = (chars: ThaiConsonant[], colorClass: string) => (
          <div className="flex flex-wrap gap-2">
            {chars.map((char, idx) => (
              <span
                key={idx}
                className={`font-thai text-2xl px-3 py-2 ${
                  highlightLessCommon && char.isLessCommon
                    ? 'text-charcoal-ink/30'
                    : 'text-charcoal-ink'
                }`}
              >
                {char.character}
              </span>
            ))}
          </div>
        );

        return (
          <div className="space-y-6">
            <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
            {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

            <div className="space-y-4">
              <div className="border border-light-grey bg-green-50 p-4">
                <div className="font-bold text-charcoal-ink mb-2">
                  {READING_UI_STRINGS['reading.class.high'][language.code]} ({highConsonants.length})
                </div>
                {renderConsonantRow(highConsonants, 'green-500')}
              </div>

              <div className="border border-light-grey bg-red-50 p-4">
                <div className="font-bold text-charcoal-ink mb-2">
                  {READING_UI_STRINGS['reading.class.mid'][language.code]} ({midConsonants.length})
                </div>
                {renderConsonantRow(midConsonants, 'red-500')}
              </div>

              <div className="border border-light-grey bg-blue-50 p-4">
                <div className="font-bold text-charcoal-ink mb-2">
                  {READING_UI_STRINGS['reading.class.low'][language.code]} ({lowConsonants.length})
                </div>
                {renderConsonantRow(lowConsonants, 'blue-500')}
              </div>
            </div>
          </div>
        );

      case 'comparison':
        const comparisons = currentPage.data?.comparisons || [];
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
            {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

            <div className="border border-light-grey overflow-x-auto">
              <table className="w-full min-w-max">
                <thead className="bg-light-grey">
                  <tr>
                    <th className="px-3 sm:px-4 py-3 text-left font-bold text-charcoal-ink whitespace-nowrap">Sound</th>
                    <th className="px-3 sm:px-4 py-3 text-left font-bold text-charcoal-ink whitespace-nowrap">Low</th>
                    <th className="px-3 sm:px-4 py-3 text-left font-bold text-charcoal-ink whitespace-nowrap">High</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comp: any, idx: number) => (
                    <tr key={idx} className="border-t border-light-grey">
                      <td className="px-3 sm:px-4 py-3 font-mono text-base sm:text-lg text-charcoal-ink whitespace-nowrap">{comp.phonetic}</td>
                      <td className="px-3 sm:px-4 py-3 font-thai text-3xl sm:text-4xl text-charcoal-ink">{comp.low}</td>
                      <td className="px-3 sm:px-4 py-3 font-thai text-3xl sm:text-4xl text-charcoal-ink">{comp.high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'special':
        // Handle special page types (intro examples, aspiration, ŋ pronunciation)
        if (currentPage.data?.thaiExample && currentPage.data?.phoneticExample) {
          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>

              <div className="text-center space-y-6 py-8">
                <div className="font-thai text-6xl text-charcoal-ink">
                  {currentPage.data.thaiExample}
                </div>
                {body && <p className="text-charcoal-ink leading-relaxed px-4">{body}</p>}
                <div className="font-mono text-4xl text-vibrant-orange">
                  {currentPage.data.phoneticExample}
                </div>
              </div>

              {footer && (
                <div className="p-4 bg-light-grey border border-light-grey">
                  <p className="text-charcoal-ink">{footer}</p>
                </div>
              )}
            </div>
          );
        }

        if (currentPage.data?.example) {
          const ex = currentPage.data.example;
          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
              {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

              <div className="bg-warm-white border border-light-grey p-8 text-center">
                <div className="text-5xl font-mono text-charcoal-ink mb-6">{ex.thai}</div>
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-left">
                  <div>
                    <div className="text-sm text-charcoal-ink/60 uppercase font-bold">
                      {READING_UI_STRINGS['reading.consonant'][language.code]}
                    </div>
                    <div className="text-2xl font-mono text-charcoal-ink">{ex.consonant}</div>
                  </div>
                  <div>
                    <div className="text-sm text-charcoal-ink/60 uppercase font-bold">
                      {READING_UI_STRINGS['reading.vowel'][language.code]}
                    </div>
                    <div className="text-2xl font-mono text-charcoal-ink">{ex.vowel}</div>
                  </div>
                  <div>
                    <div className="text-sm text-charcoal-ink/60 uppercase font-bold">
                      {READING_UI_STRINGS['reading.tone'][language.code]}
                    </div>
                    <div className="text-2xl font-mono text-charcoal-ink">{ex.tone}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        if (currentPage.data?.aspiratedExamples) {
          const examples = currentPage.data.aspiratedExamples;
          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
              {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-charcoal-ink mb-4 text-center">Non-aspirated</h3>
                  <div className="space-y-2">
                    {examples.map((ex: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => playAudio(`/audio/characters/${ex.audioFiles[0]}`)}
                        className="w-full py-3 px-4 bg-light-grey text-charcoal-ink font-mono text-xl hover:bg-vibrant-orange hover:text-warm-white transition-colors"
                      >
                        {ex.nonAspirated}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal-ink mb-4 text-center">Aspirated</h3>
                  <div className="space-y-2">
                    {examples.map((ex: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => playAudio(`/audio/characters/${ex.audioFiles[1]}`)}
                        className="w-full py-3 px-4 bg-light-grey text-charcoal-ink font-mono text-xl hover:bg-vibrant-orange hover:text-warm-white transition-colors"
                      >
                        {ex.aspirated}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        if (currentPage.data?.character && currentPage.data?.audioExamples) {
          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
              {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

              <div className="text-center space-y-6 py-6">
                <div className="font-thai text-7xl text-charcoal-ink mb-4">
                  {currentPage.data.character}
                </div>
                <div className="text-2xl text-charcoal-ink/70 font-mono">
                  {currentPage.data.name}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">
                  {currentPage.data.audioExamples.map((audioFile: string, idx: number) => {
                    const label = audioFile.replace('.mp3', '').replace('ŋ', 'ŋ');
                    return (
                      <button
                        key={idx}
                        onClick={() => playAudio(`/audio/characters/${audioFile}`)}
                        className="py-4 px-6 bg-vibrant-orange text-warm-white font-mono text-xl hover:bg-charcoal-ink transition-colors"
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }

        if (currentPage.data?.sharedConsonants && currentPage.data?.uniqueConsonants) {
          const shared = currentPage.data.sharedConsonants;
          const unique = currentPage.data.uniqueConsonants;
          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
              {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

              <div className="grid grid-cols-2 gap-6">
                <div className="border border-light-grey bg-orange-50 p-4">
                  <h3 className="font-bold text-charcoal-ink mb-3">Part 1: Shared</h3>
                  <div className="flex flex-wrap gap-2">
                    {shared.map((char: ThaiConsonant, idx: number) => (
                      <span key={idx} className="font-thai text-3xl text-charcoal-ink">
                        {char.character}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border border-light-grey bg-blue-50 p-4">
                  <h3 className="font-bold text-charcoal-ink mb-3">Part 2: Unique</h3>
                  <div className="flex flex-wrap gap-2">
                    {unique.map((char: ThaiConsonant, idx: number) => (
                      <span key={idx} className="font-thai text-3xl text-charcoal-ink">
                        {char.character}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        // Vowel Placement Page
        if (currentPage.data?.vowelPlacementExamples) {
          const examples = currentPage.data.vowelPlacementExamples;
          const groupedByPosition: Record<string, typeof examples> = {
            top: [],
            bottom: [],
            left: [],
            right: [],
            'left-right': [],
            'top-right': [],
            'top-left-right': []
          };

          examples.forEach((ex: any) => {
            if (groupedByPosition[ex.position]) {
              groupedByPosition[ex.position].push(ex);
            }
          });

          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
              {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(groupedByPosition).map(([position, items]) => {
                  if (items.length === 0) return null;

                  const positionLabel = position
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' and ');

                  return (
                    <div key={position} className="border border-light-grey p-4 bg-warm-white">
                      <h3 className="font-bold text-charcoal-ink mb-3">{positionLabel}:</h3>
                      <div className="space-y-2">
                        {items.map((item: any, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => playAudio(item.audioFile)}
                            className="w-full px-4 py-3 bg-light-grey hover:bg-vibrant-orange hover:text-warm-white transition-colors flex items-center justify-between group"
                          >
                            <span className="font-thai text-2xl text-charcoal-ink group-hover:text-warm-white">{item.thai}</span>
                            <span className="font-mono text-lg text-charcoal-ink group-hover:text-warm-white">{item.phonetic}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }

        // Vowel Types Page
        if (currentPage.data?.vowelTypes) {
          const types = currentPage.data.vowelTypes;
          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
              {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

              <div className="space-y-4">
                {types.map((type: any, idx: number) => (
                  <div key={idx} className="border border-light-grey p-4 bg-warm-white">
                    <h3 className="font-bold text-charcoal-ink mb-2">
                      {READING_UI_STRINGS[type.title]?.[language.code] || type.title}
                    </h3>
                    <p className="text-charcoal-ink/70">
                      {READING_UI_STRINGS[type.example]?.[language.code] || type.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        // Intro Examples (Lesson 7 Page 1)
        if (currentPage.data?.introExamples) {
          const examples = currentPage.data.introExamples;
          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
              {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

              <div className="border border-light-grey p-4 bg-warm-white">
                <h3 className="font-bold text-charcoal-ink mb-4 text-center">Long Vowel + Ending Consonant</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {examples.map((example: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => playAudio(example.audioFile)}
                      className="px-4 py-3 bg-light-grey hover:bg-vibrant-orange hover:text-warm-white transition-colors flex items-center justify-between group"
                    >
                      <span className="font-thai text-2xl text-charcoal-ink group-hover:text-warm-white">{example.thai}</span>
                      <span className="font-mono text-lg text-charcoal-ink group-hover:text-warm-white">{example.phonetic}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        // Live Ending Consonants (Lesson 7 Page 2)
        if (currentPage.data?.liveEndingConsonants) {
          const examples = currentPage.data.liveEndingConsonants;
          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
              {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

              <div className="border border-light-grey overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead className="bg-light-grey">
                    <tr>
                      <th className="px-3 sm:px-4 py-3 text-left font-bold text-charcoal-ink whitespace-nowrap">Ending</th>
                      <th className="px-3 sm:px-4 py-3 text-left font-bold text-charcoal-ink whitespace-nowrap">Example</th>
                      <th className="px-3 sm:px-4 py-3 text-center font-bold text-charcoal-ink whitespace-nowrap">Play</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examples.map((example: any, idx: number) => (
                      <tr key={idx} className="border-t border-light-grey hover:bg-warm-white">
                        <td className="px-3 sm:px-4 py-3 font-mono text-lg text-charcoal-ink whitespace-nowrap">
                          {example.phonetic.match(/[nmŋyw]$/)?.[0] || ''}
                        </td>
                        <td className="px-3 sm:px-4 py-3">
                          <div className="flex items-center gap-3">
                            <span className="font-thai text-2xl sm:text-3xl text-charcoal-ink">{example.thai}</span>
                            <span className="font-mono text-base text-charcoal-ink/70">
                              {example.phonetic}
                              {example.meaning && ` (${example.meaning})`}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 sm:px-4 py-3 text-center">
                          <button
                            onClick={() => playAudio(example.audioFile)}
                            className="w-10 h-10 flex items-center justify-center bg-vibrant-orange text-warm-white hover:bg-charcoal-ink transition-colors"
                            aria-label={`Play ${example.phonetic}`}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }

        // Dead Ending Consonants (Lesson 7 Page 3)
        if (currentPage.data?.deadEndingConsonants) {
          const examples = currentPage.data.deadEndingConsonants;
          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
              {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

              <div className="border border-light-grey overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead className="bg-light-grey">
                    <tr>
                      <th className="px-3 sm:px-4 py-3 text-left font-bold text-charcoal-ink whitespace-nowrap">Ending</th>
                      <th className="px-3 sm:px-4 py-3 text-left font-bold text-charcoal-ink whitespace-nowrap">Example</th>
                      <th className="px-3 sm:px-4 py-3 text-center font-bold text-charcoal-ink whitespace-nowrap">Play</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examples.map((example: any, idx: number) => (
                      <tr key={idx} className="border-t border-light-grey hover:bg-warm-white">
                        <td className="px-3 sm:px-4 py-3 font-mono text-lg text-charcoal-ink whitespace-nowrap">
                          {example.phonetic.match(/[kpt]$/)?.[0] || ''}
                        </td>
                        <td className="px-3 sm:px-4 py-3">
                          <div className="flex items-center gap-3">
                            <span className="font-thai text-2xl sm:text-3xl text-charcoal-ink">{example.thai}</span>
                            <span className="font-mono text-base text-charcoal-ink/70">
                              {example.phonetic}
                              {example.meaning && ` (${example.meaning})`}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 sm:px-4 py-3 text-center">
                          <button
                            onClick={() => playAudio(example.audioFile)}
                            className="w-10 h-10 flex items-center justify-center bg-vibrant-orange text-warm-white hover:bg-charcoal-ink transition-colors"
                            aria-label={`Play ${example.phonetic}`}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }

        // Ending Consonant Details (Lesson 7 Pages 4-6)
        if (currentPage.data?.endingType && currentPage.data?.examples) {
          const { endingType, mainConsonant, otherConsonants, examples } = currentPage.data;
          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
              {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Main/Sometimes Box */}
                <div className="border border-light-grey p-4 bg-warm-white">
                  <h3 className="font-bold text-charcoal-ink mb-4 text-center">Dead Ending Consonant {endingType}</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-sm text-charcoal-ink/60 uppercase font-bold mb-2">Main Consonant</div>
                      <div className="font-thai text-5xl text-charcoal-ink">{mainConsonant}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-charcoal-ink/60 uppercase font-bold mb-2">Sometimes</div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {otherConsonants.map((char: string, idx: number) => (
                          <span key={idx} className="font-thai text-2xl text-charcoal-ink">
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Examples Box */}
                <div className="border border-light-grey p-4 bg-warm-white">
                  <h3 className="font-bold text-charcoal-ink mb-4 text-center">Example</h3>
                  <div className="space-y-2">
                    {examples.map((example: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => playAudio(example.audioFile)}
                        className="w-full px-4 py-3 bg-light-grey hover:bg-vibrant-orange hover:text-warm-white transition-colors flex items-center justify-between group"
                      >
                        <span className="font-thai text-2xl text-charcoal-ink group-hover:text-warm-white">{example.thai}</span>
                        <span className="font-mono text-lg text-charcoal-ink group-hover:text-warm-white">{example.phonetic}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        // Vowel Changes (Lesson 7 Page 7)
        if (currentPage.data?.vowelChanges) {
          const changes = currentPage.data.vowelChanges;
          return (
            <div className="space-y-6">
              <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
              {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}

              <div className="border border-light-grey p-4 bg-warm-white">
                <h3 className="font-bold text-charcoal-ink mb-4 text-center">Long Vowel with Ending Consonant</h3>
                <div className="space-y-6">
                  {changes.map((change: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-center gap-4 pb-4 border-b border-light-grey last:border-b-0">
                      {/* Before */}
                      <div className="text-center">
                        <div className="font-thai text-3xl text-charcoal-ink">{change.before}</div>
                        <div className="font-mono text-sm text-charcoal-ink/70 mt-1">{change.beforePhonetic}</div>
                      </div>

                      {/* Plus Sign */}
                      <div className="text-2xl text-charcoal-ink/60">+</div>

                      {/* Ending */}
                      <div className="text-center">
                        <div className="font-thai text-3xl text-charcoal-ink">{change.ending}</div>
                        <div className="font-mono text-sm text-charcoal-ink/70 mt-1">{change.ending}</div>
                      </div>

                      {/* Arrow */}
                      <div className="text-2xl text-charcoal-ink/60">→</div>

                      {/* After */}
                      <div className="text-center">
                        <div className="font-thai text-3xl text-charcoal-ink">{change.after}</div>
                        <div className="font-mono text-sm text-charcoal-ink/70 mt-1">{change.afterPhonetic}</div>
                      </div>

                      {/* Note */}
                      {change.note && (
                        <div className="text-xs text-charcoal-ink/60 italic ml-2">
                          {READING_UI_STRINGS[change.note]?.[language.code] || change.note}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        // Default special case
        return (
          <div className="space-y-6">
            <h2 className="font-heading text-3xl uppercase text-charcoal-ink">{title}</h2>
            {body && <p className="text-charcoal-ink leading-relaxed">{body}</p>}
          </div>
        );

      default:
        return <div>Unknown page type</div>;
    }
  };

  const isPracticeLesson = lesson.type === ReadingLessonType.CONSONANT_LESSON || lesson.type === ReadingLessonType.VOWEL_LESSON || lesson.type === ReadingLessonType.PRACTICE;

  return (
    <div className="w-full h-full flex flex-col max-w-5xl mx-auto bg-warm-white text-charcoal-ink border border-light-grey overflow-hidden" style={{ height: '90vh' }}>
      <header className="p-4 border-b border-light-grey flex-shrink-0">
        <button
          onClick={onBack}
          className="text-sm font-medium text-vibrant-orange hover:underline flex items-center gap-2 mb-2"
        >
          <ArrowLeftIcon />
          {READING_UI_STRINGS['reading.backToLessons'][language.code]}
        </button>
        <h2 className="font-heading text-xl md:text-2xl uppercase">
          {lesson.title[language.code]}
        </h2>
        <div className="text-sm text-charcoal-ink/60 mt-1">
          Page {currentPageIndex + 1} of {lesson.pages.length}
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar p-6">
        {renderPageContent()}
      </main>

      <footer className="p-3 sm:p-4 border-t border-light-grey flex-shrink-0">
        {/* Progress dots - top on mobile, centered */}
        <div className="flex justify-center gap-1.5 sm:hidden mb-3">
          {lesson.pages.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full ${
                idx === currentPageIndex ? 'bg-vibrant-orange' : 'bg-light-grey'
              }`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center gap-2 sm:gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentPageIndex === 0}
            className="px-4 py-2.5 sm:px-6 sm:py-3 bg-light-grey text-charcoal-ink font-bold uppercase text-sm sm:text-base disabled:opacity-30 disabled:cursor-not-allowed hover:bg-charcoal-ink hover:text-warm-white transition-colors flex-shrink-0"
          >
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">◀</span>
          </button>

          {/* Progress dots - centered on desktop */}
          <div className="hidden sm:flex gap-2">
            {lesson.pages.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentPageIndex ? 'bg-vibrant-orange' : 'bg-light-grey'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-4 py-2.5 sm:px-6 sm:py-3 bg-vibrant-orange text-warm-white font-bold uppercase text-sm sm:text-base hover:bg-charcoal-ink transition-colors flex-shrink-0"
          >
            {isLastPage
              ? isPracticeLesson
                ? (
                  <>
                    <span className="hidden sm:inline">{READING_UI_STRINGS['reading.startPractice'][language.code]}</span>
                    <span className="sm:hidden">Practice</span>
                  </>
                )
                : 'Continue'
              : (
                <>
                  <span className="hidden sm:inline">Next</span>
                  <span className="sm:hidden">▶</span>
                </>
              )}
          </button>
        </div>
      </footer>
    </div>
  );
};
