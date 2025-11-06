
import { Unit, LanguageCode } from '../../types';
import { lesson_1_0 } from './unit-1/lesson-1-0';
import { lesson_1_1 } from './unit-1/lesson-1-1';
import { lesson_1_2 } from './unit-1/lesson-1-2';
import { lesson_1_3 } from './unit-1/lesson-1-3';
import { lesson_1_4 } from './unit-1/lesson-1-4';
import { lesson_1_5 } from './unit-1/lesson-1-5';
import { lesson_1_6 } from './unit-1/lesson-1-6';
import { lesson_1_7 } from './unit-1/lesson-1-7';
import { lesson_1_8 } from './unit-1/lesson-1-8';
import { lesson_1_9 } from './unit-1/lesson-1-9';
import { lesson_1_10 } from './unit-1/lesson-1-10';
import { lesson_1_11 } from './unit-1/lesson-1-11';

export const UNITS: Unit[] = [
    {
        id: 1,
        title: {
            [LanguageCode.ENGLISH]: "Essential Foundations",
            [LanguageCode.FRENCH]: "Fondations Essentielles",
            [LanguageCode.PORTUGUESE]: "Fundações Essenciais",
            [LanguageCode.MANDARIN]: "必要基礎",
        },
        lessons: [
            lesson_1_0,
            lesson_1_1,
            lesson_1_2,
            lesson_1_3,
            lesson_1_4,
            lesson_1_5,
            lesson_1_6,
            lesson_1_7,
            lesson_1_8,
            lesson_1_9,
            lesson_1_10,
            lesson_1_11,
            // Future lessons (1.12 - 1.20) will be added here
        ]
    },
    // Future units (2-6) will be added here
];
