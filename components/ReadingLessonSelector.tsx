import React from 'react';
import type { Language } from '../types';
import { ALL_READING_LESSONS, type ReadingLesson, ReadingLessonType } from '../data/reading/lessons';
import { READING_UI_STRINGS } from '../data/readingUIStrings';
import { ArrowLeftIcon, BookOpenIcon } from './Icons';

interface ReadingLessonSelectorProps {
  onSelect: (lesson: ReadingLesson) => void;
  onBack: () => void;
  language: Language;
}

export const ReadingLessonSelector: React.FC<ReadingLessonSelectorProps> = ({ onSelect, onBack, language }) => {
  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <div className="text-center mb-10">
        <h2 className="font-heading text-5xl md:text-6xl text-warm-white uppercase">
          {READING_UI_STRINGS['reading.selector.title'][language.code]}
        </h2>
        <p className="text-warm-white/70 mt-3 text-lg">
          {READING_UI_STRINGS['reading.selector.subtitle'][language.code]}
        </p>
      </div>

      <div className="space-y-10">
        {/* Introduction Section */}
        {ALL_READING_LESSONS.filter(l => l.type === ReadingLessonType.INTRODUCTION).map((lesson) => (
          <div key={lesson.id} className="mb-10">
            <button
              onClick={() => onSelect(lesson)}
              className="w-full flex items-center p-4 bg-vibrant-orange rounded-none border border-vibrant-orange text-warm-white hover:bg-charcoal-ink hover:border-charcoal-ink transition-colors duration-150 group"
            >
              <BookOpenIcon className="w-8 h-8 text-warm-white mr-5" />
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold">{lesson.title[language.code]}</h3>
              </div>
            </button>
          </div>
        ))}

        {/* Characters Section */}
        <div>
          <div className="flex items-center mb-4">
            <span className="bg-warm-white text-charcoal-ink font-bold py-1 px-3 text-sm uppercase">
              {READING_UI_STRINGS['reading.section.characters'][language.code]}
            </span>
          </div>
          <div className="space-y-3">
            {ALL_READING_LESSONS.filter(l => l.type !== ReadingLessonType.INTRODUCTION).map((lesson) => {
              const isPractice = lesson.type === ReadingLessonType.PRACTICE;

              return (
                <div key={lesson.id} className={isPractice ? 'ml-6' : ''}>
                  <button
                    onClick={() => onSelect(lesson)}
                    className="w-full flex items-center p-4 bg-warm-white rounded-none border border-light-grey text-charcoal-ink active:bg-vibrant-orange active:text-warm-white transition-colors duration-150 group"
                  >
                    <BookOpenIcon className="w-8 h-8 text-vibrant-orange mr-5 group-active:text-warm-white" />
                    <div className="text-left flex-1">
                      <h3 className="text-xl font-bold">
                        {!isPractice && `Lesson ${lesson.id}: `}
                        {isPractice && `Practice ${lesson.id}: `}
                        {lesson.title[language.code]}
                      </h3>
                      {lesson.description && (
                        <p className="text-charcoal-ink/70 text-sm mt-1">
                          {lesson.description[language.code]}
                        </p>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button onClick={onBack} className="text-vibrant-orange hover:underline font-semibold flex items-center gap-2 mx-auto">
          <ArrowLeftIcon />
          {READING_UI_STRINGS['reading.backToLessons'][language.code]}
        </button>
      </div>
    </div>
  );
};
