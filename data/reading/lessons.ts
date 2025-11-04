/**
 * Reading Lessons Data Structure
 * Defines all reading lessons following the framework specification
 */

import { LanguageCode, type LocalizedString } from '../../types';
import {
  TAUGHT_HIGH_CONSONANTS,
  TAUGHT_MID_CONSONANTS,
  TAUGHT_LOW_CONSONANTS_SHARED,
  TAUGHT_LOW_CONSONANTS_UNIQUE,
  ALL_HIGH_CONSONANTS,
  ALL_MID_CONSONANTS,
  ALL_LOW_CONSONANTS,
  type ThaiConsonant
} from './characters';

export enum ReadingLessonType {
  INTRODUCTION = 'INTRODUCTION',
  CONSONANT_LESSON = 'CONSONANT_LESSON',
  PRACTICE = 'PRACTICE',
}

export interface ReadingPage {
  title: string; // UI string key
  body?: string; // UI string key (optional)
  content?: string; // UI string key for additional content
  footer?: string; // UI string key (optional)
  type: 'text' | 'overview' | 'character-list' | 'comparison' | 'special';
  data?: any; // Additional data for dynamic content
}

export interface ReadingLesson {
  id: string;
  type: ReadingLessonType;
  title: LocalizedString;
  description?: LocalizedString;
  pages: ReadingPage[];
  practiceCharacters?: ThaiConsonant[]; // Characters to practice
  practiceAnswerOptions?: string[]; // Phonetic options for practice
}

// =============================================================================
// PART 0: INTRODUCTION
// =============================================================================

export const INTRODUCTION_LESSON: ReadingLesson = {
  id: '0',
  type: ReadingLessonType.INTRODUCTION,
  title: {
    [LanguageCode.ENGLISH]: 'Introduction',
    [LanguageCode.FRENCH]: 'Introduction',
    [LanguageCode.PORTUGUESE]: 'Introdução',
    [LanguageCode.MANDARIN]: '介紹',
  },
  pages: [
    {
      title: 'reading.intro.page1.title',
      body: 'reading.intro.page1.body',
      footer: 'reading.intro.page1.footer',
      type: 'text'
    },
    {
      title: 'reading.intro.page2.title',
      body: 'reading.intro.page2.body',
      footer: 'reading.intro.page2.footer',
      type: 'special',
      data: {
        thaiExample: 'สวัสดี',
        phoneticExample: 'sawàt dii'
      }
    },
    {
      title: 'reading.intro.page3.title',
      body: 'reading.intro.page3.body',
      type: 'special',
      data: {
        example: {
          thai: 'kâa',
          consonant: 'k',
          vowel: 'aa',
          tone: '^'
        }
      }
    },
    {
      title: 'reading.intro.page4.title',
      body: 'reading.intro.page4.body',
      footer: 'reading.intro.page4.footer',
      type: 'text'
    }
  ]
};

// =============================================================================
// PART 1: CONSONANTS
// =============================================================================

// Lesson 1: High Consonants
export const LESSON_1_HIGH_CONSONANTS: ReadingLesson = {
  id: '1',
  type: ReadingLessonType.CONSONANT_LESSON,
  title: {
    [LanguageCode.ENGLISH]: 'High Consonants',
    [LanguageCode.FRENCH]: 'Consonnes Hautes',
    [LanguageCode.PORTUGUESE]: 'Consoantes Altas',
    [LanguageCode.MANDARIN]: '高輔音',
  },
  pages: [
    {
      title: 'reading.lesson1.page1.title',
      body: 'reading.lesson1.page1.body',
      type: 'special',
      data: {
        consonantCounts: {
          high: ALL_HIGH_CONSONANTS.length,
          mid: ALL_MID_CONSONANTS.length,
          low: ALL_LOW_CONSONANTS.length,
          total: ALL_HIGH_CONSONANTS.length + ALL_MID_CONSONANTS.length + ALL_LOW_CONSONANTS.length
        }
      }
    },
    {
      title: 'reading.lesson1.page2.title',
      body: 'reading.lesson1.page2.body',
      type: 'overview',
      data: {
        highConsonants: ALL_HIGH_CONSONANTS,
        midConsonants: ALL_MID_CONSONANTS,
        lowConsonants: ALL_LOW_CONSONANTS
      }
    },
    {
      title: 'reading.lesson1.page3.title',
      body: 'reading.lesson1.page3.body',
      type: 'overview',
      data: {
        highConsonants: ALL_HIGH_CONSONANTS,
        midConsonants: ALL_MID_CONSONANTS,
        lowConsonants: ALL_LOW_CONSONANTS,
        highlightLessCommon: true
      }
    },
    {
      title: 'reading.lesson1.page4.title',
      body: 'reading.lesson1.page4.body',
      type: 'character-list',
      data: {
        characters: TAUGHT_HIGH_CONSONANTS
      }
    },
    {
      title: 'reading.lesson1.page5.title',
      body: 'reading.lesson1.page5.body',
      type: 'special',
      data: {
        exampleCharacter: 'ก',
        exampleName: 'kɔɔ kày',
        exampleWord: 'ไก่'
      }
    },
    {
      title: 'reading.lesson1.page6.title',
      body: 'reading.lesson1.page6.body',
      type: 'text'
    }
  ],
  practiceCharacters: TAUGHT_HIGH_CONSONANTS,
  practiceAnswerOptions: ['kh', 'ch', 'h', 'ph', 's', 'th', 'f']
};

// Lesson 2: Mid Consonants
export const LESSON_2_MID_CONSONANTS: ReadingLesson = {
  id: '2',
  type: ReadingLessonType.CONSONANT_LESSON,
  title: {
    [LanguageCode.ENGLISH]: 'Mid Consonants',
    [LanguageCode.FRENCH]: 'Consonnes Moyennes',
    [LanguageCode.PORTUGUESE]: 'Consoantes Médias',
    [LanguageCode.MANDARIN]: '中輔音',
  },
  pages: [
    {
      title: 'reading.lesson2.page1.title',
      body: 'reading.lesson2.page1.body',
      type: 'character-list',
      data: {
        characters: TAUGHT_MID_CONSONANTS
      }
    },
    {
      title: 'reading.lesson2.page2.title',
      body: 'reading.lesson2.page2.body',
      type: 'special',
      data: {
        aspiratedExamples: [
          { nonAspirated: 'kaa', aspirated: 'khaa', audioFiles: ['kaa.mp3', 'khaa.mp3'] },
          { nonAspirated: 'taa', aspirated: 'thaa', audioFiles: ['taa.mp3', 'thaa.mp3'] },
          { nonAspirated: 'caa', aspirated: 'chaa', audioFiles: ['caa.mp3', 'chaa.mp3'] },
          { nonAspirated: 'paa', aspirated: 'phaa', audioFiles: ['paa.mp3', 'phaa.mp3'] }
        ]
      }
    }
  ],
  practiceCharacters: TAUGHT_MID_CONSONANTS,
  practiceAnswerOptions: ['k', 'c', 'd', 't', 'b', 'p', '∅', 'kh', 'ch']
};

// Lesson 2.5: Practice (High & Mid)
export const LESSON_2_5_PRACTICE: ReadingLesson = {
  id: '2.5',
  type: ReadingLessonType.PRACTICE,
  title: {
    [LanguageCode.ENGLISH]: 'Practice: High & Mid Consonants',
    [LanguageCode.FRENCH]: 'Pratique: Consonnes Hautes & Moyennes',
    [LanguageCode.PORTUGUESE]: 'Prática: Consoantes Altas & Médias',
    [LanguageCode.MANDARIN]: '練習：高輔音和中輔音',
  },
  pages: [
    {
      title: 'reading.lesson2_5.page1.title',
      type: 'character-list',
      data: {
        characters: [...TAUGHT_HIGH_CONSONANTS, ...TAUGHT_MID_CONSONANTS]
      }
    }
  ],
  practiceCharacters: [...TAUGHT_HIGH_CONSONANTS, ...TAUGHT_MID_CONSONANTS],
  practiceAnswerOptions: ['k', 'kh', 'c', 'ch', 'd', 't', 'b', 'p', 'ph', 'f', 's', 'h', 'th', '∅']
};

// Lesson 3: Low Consonants "Shared"
export const LESSON_3_LOW_SHARED: ReadingLesson = {
  id: '3',
  type: ReadingLessonType.CONSONANT_LESSON,
  title: {
    [LanguageCode.ENGLISH]: 'Low Consonants "Shared"',
    [LanguageCode.FRENCH]: 'Consonnes Basses "Partagées"',
    [LanguageCode.PORTUGUESE]: 'Consoantes Baixas "Compartilhadas"',
    [LanguageCode.MANDARIN]: '低輔音「共享」',
  },
  pages: [
    {
      title: 'reading.lesson3.page1.title',
      body: 'reading.lesson3.page1.body',
      type: 'special',
      data: {
        sharedConsonants: TAUGHT_LOW_CONSONANTS_SHARED,
        uniqueConsonants: TAUGHT_LOW_CONSONANTS_UNIQUE
      }
    },
    {
      title: 'reading.lesson3.page2.title',
      body: 'reading.lesson3.page2.body',
      type: 'special',
      data: {
        sharedConsonants: TAUGHT_LOW_CONSONANTS_SHARED,
        uniqueConsonants: TAUGHT_LOW_CONSONANTS_UNIQUE
      }
    },
    {
      title: 'reading.lesson3.page3.title',
      body: 'reading.lesson3.page3.body',
      type: 'comparison',
      data: {
        comparisons: [
          { phonetic: 'kh', low: 'ค', high: 'ข' },
          { phonetic: 'ch', low: 'ช', high: 'ฉ' },
          { phonetic: 's', low: 'ซ', high: 'ส' },
          { phonetic: 'th', low: 'ท', high: 'ถ' },
          { phonetic: 'ph', low: 'พ', high: 'ผ' },
          { phonetic: 'f', low: 'ฟ', high: 'ฝ' }
        ]
      }
    },
    {
      title: 'reading.lesson3.page4.title',
      body: 'reading.lesson3.page4.body',
      type: 'character-list',
      data: {
        characters: TAUGHT_LOW_CONSONANTS_SHARED
      }
    }
  ],
  practiceCharacters: TAUGHT_LOW_CONSONANTS_SHARED,
  practiceAnswerOptions: ['kh', 'ch', 's', 'th', 'ph', 'f', 'h']
};

// Lesson 3.5: Practice (High, Mid, & Low Shared)
export const LESSON_3_5_PRACTICE: ReadingLesson = {
  id: '3.5',
  type: ReadingLessonType.PRACTICE,
  title: {
    [LanguageCode.ENGLISH]: 'Practice: High, Mid, & Shared Low',
    [LanguageCode.FRENCH]: 'Pratique: Hautes, Moyennes & Basses Partagées',
    [LanguageCode.PORTUGUESE]: 'Prática: Altas, Médias & Baixas Compartilhadas',
    [LanguageCode.MANDARIN]: '練習：高、中和共享低輔音',
  },
  pages: [
    {
      title: 'reading.lesson3_5.page1.title',
      type: 'character-list',
      data: {
        characters: [...TAUGHT_HIGH_CONSONANTS, ...TAUGHT_MID_CONSONANTS, ...TAUGHT_LOW_CONSONANTS_SHARED]
      }
    }
  ],
  practiceCharacters: [...TAUGHT_HIGH_CONSONANTS, ...TAUGHT_MID_CONSONANTS, ...TAUGHT_LOW_CONSONANTS_SHARED],
  practiceAnswerOptions: ['k', 'kh', 'c', 'ch', 'd', 't', 'b', 'p', 'ph', 'f', 's', 'h', 'th', '∅']
};

// Lesson 4: Low Consonants "Unique"
export const LESSON_4_LOW_UNIQUE: ReadingLesson = {
  id: '4',
  type: ReadingLessonType.CONSONANT_LESSON,
  title: {
    [LanguageCode.ENGLISH]: 'Low Consonants "Unique"',
    [LanguageCode.FRENCH]: 'Consonnes Basses "Uniques"',
    [LanguageCode.PORTUGUESE]: 'Consoantes Baixas "Únicas"',
    [LanguageCode.MANDARIN]: '低輔音「獨特」',
  },
  pages: [
    {
      title: 'reading.lesson4.page1.title',
      body: 'reading.lesson4.page1.body',
      type: 'special',
      data: {
        sharedConsonants: TAUGHT_LOW_CONSONANTS_SHARED,
        uniqueConsonants: TAUGHT_LOW_CONSONANTS_UNIQUE
      }
    },
    {
      title: 'reading.lesson4.page2.title',
      body: 'reading.lesson4.page2.body',
      type: 'special',
      data: {
        character: 'ง',
        name: 'ŋɔɔ ŋuu',
        audioExamples: ['ŋaa.mp3', 'ŋii.mp3', 'ŋuu.mp3', 'ŋoo.mp3']
      }
    },
    {
      title: 'reading.lesson4.page3.title',
      body: 'reading.lesson4.page3.body',
      type: 'character-list',
      data: {
        characters: TAUGHT_LOW_CONSONANTS_UNIQUE
      }
    }
  ],
  practiceCharacters: TAUGHT_LOW_CONSONANTS_UNIQUE,
  practiceAnswerOptions: ['ŋ', 'y', 'n', 'm', 'r', 'l', 'w', 'h']
};

// =============================================================================
// ALL LESSONS
// =============================================================================

export const ALL_READING_LESSONS: ReadingLesson[] = [
  INTRODUCTION_LESSON,
  LESSON_1_HIGH_CONSONANTS,
  LESSON_2_MID_CONSONANTS,
  LESSON_2_5_PRACTICE,
  LESSON_3_LOW_SHARED,
  LESSON_3_5_PRACTICE,
  LESSON_4_LOW_UNIQUE
];
