import React from 'react';
import type { Language, Lesson } from '../types';
import { LanguageCode } from '../types';
import { UNITS } from '../data/curriculum/units';
import { UI_STRINGS } from '../data/uiStrings';
import { ArrowLeftIcon, BookOpenIcon, UsersIcon } from './Icons';
import { useAuth } from '../contexts/AuthContext';

interface WritingLessonSelectorProps {
  onSelect: (lesson: Lesson) => void;
  onBack: () => void;
  language: Language;
}

export const WritingLessonSelector: React.FC<WritingLessonSelectorProps> = ({ onSelect, onBack, language }) => {
  const { userProfile } = useAuth();

  const handlePracticeName = () => {
    if (!userProfile) return;

    const myNameTranslations = {
        [LanguageCode.ENGLISH]: UI_STRINGS.myName[LanguageCode.ENGLISH],
        [LanguageCode.FRENCH]: UI_STRINGS.myName[LanguageCode.FRENCH],
        [LanguageCode.PORTUGUESE]: UI_STRINGS.myName[LanguageCode.PORTUGUESE],
        [LanguageCode.MANDARIN]: UI_STRINGS.myName[LanguageCode.MANDARIN],
    };
    
    const practiceMyNameTranslations = {
        [LanguageCode.ENGLISH]: UI_STRINGS.practiceMyName[LanguageCode.ENGLISH],
        [LanguageCode.FRENCH]: UI_STRINGS.practiceMyName[LanguageCode.FRENCH],
        [LanguageCode.PORTUGUESE]: UI_STRINGS.practiceMyName[LanguageCode.PORTUGUESE],
        [LanguageCode.MANDARIN]: UI_STRINGS.practiceMyName[LanguageCode.MANDARIN],
    };

    const nameLesson: Lesson = {
      id: "my-name",
      title: practiceMyNameTranslations,
      vocabulary: [
        {
          thai: userProfile.thaiName,
          phonetic: userProfile.firstName,
          translations: myNameTranslations,
        }
      ],
      worksheet: [],
      listeningSpeaking: null,
    };
    onSelect(nameLesson);
  };


  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <div className="text-center mb-10">
        <h2 className="font-heading text-5xl md:text-6xl text-warm-white uppercase">{UI_STRINGS.chooseWritingLesson[language.code]}</h2>
      </div>
      
      <div className="space-y-10">
        {userProfile && userProfile.thaiName && (
           <div className="mb-10">
                <div className="flex items-center mb-4">
                    <span className="bg-vibrant-orange text-warm-white font-bold py-1 px-3 text-sm uppercase">{UI_STRINGS.personal[language.code]}</span>
                </div>
                <button
                    onClick={handlePracticeName}
                    className="w-full flex items-center p-4 bg-warm-white rounded-none border border-light-grey text-charcoal-ink active:bg-vibrant-orange active:text-warm-white transition-colors duration-150 group"
                  >
                    <UsersIcon className="w-8 h-8 text-vibrant-orange mr-5 group-active:text-warm-white" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold">{UI_STRINGS.practiceMyName[language.code]}</h3>
                      <p className="font-thai text-charcoal-ink/70">{userProfile.thaiName}</p>
                    </div>
                  </button>
            </div>
        )}

        {UNITS.map(unit => (
            <div key={unit.id}>
                <div className="flex items-center mb-4">
                    <span className="bg-warm-white text-charcoal-ink font-bold py-1 px-3 text-sm uppercase">{UI_STRINGS.unit[language.code]} {unit.id}: {unit.title[language.code]}</span>
                </div>
                <div className="space-y-3">
                    {unit.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => onSelect(lesson)}
                        className="w-full flex items-center p-4 bg-warm-white rounded-none border border-light-grey text-charcoal-ink active:bg-vibrant-orange active:text-warm-white transition-colors duration-150 group"
                      >
                        <BookOpenIcon className="w-8 h-8 text-vibrant-orange mr-5 group-active:text-warm-white" />
                        <div className="text-left">
                          <h3 className="text-xl font-bold">{lesson.id}: {lesson.title[language.code]}</h3>
                        </div>
                      </button>
                    ))}
                </div>
            </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button onClick={onBack} className="text-vibrant-orange hover:underline font-semibold flex items-center gap-2 mx-auto">
          <ArrowLeftIcon />
          {UI_STRINGS.backToHome[language.code]}
        </button>
      </div>
    </div>
  );
};