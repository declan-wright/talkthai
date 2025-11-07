
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
import { lesson_1_12 } from './unit-1/lesson-1-12';
import { lesson_1_13 } from './unit-1/lesson-1-13';
import { lesson_1_14 } from './unit-1/lesson-1-14';
import { lesson_1_15 } from './unit-1/lesson-1-15';
import { lesson_1_16 } from './unit-1/lesson-1-16';
import { lesson_1_17 } from './unit-1/lesson-1-17';
import { lesson_1_18 } from './unit-1/lesson-1-18';
import { lesson_1_19 } from './unit-1/lesson-1-19';
import { lesson_1_20 } from './unit-1/lesson-1-20';
import { lesson_1_21 } from './unit-1/lesson-1-21';
import { lesson_2_0 } from './unit-2/lesson-2-0';

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
            lesson_1_12,
            lesson_1_13,
            lesson_1_14,
            lesson_1_15,
            lesson_1_16,
            lesson_1_17,
            lesson_1_18,
            lesson_1_19,
            lesson_1_20,
            lesson_1_21,
        ]
    },
    {
        id: 2,
        title: {
            [LanguageCode.ENGLISH]: "Expanding Daily Life",
            [LanguageCode.FRENCH]: "Élargir la vie quotidienne",
            [LanguageCode.PORTUGUESE]: "Expandindo a Vida Diária",
            [LanguageCode.MANDARIN]: "擴展日常生活",
        },
        lessons: [
            lesson_2_0,
        ]
    },
    {
        id: 3,
        title: {
            [LanguageCode.ENGLISH]: "Culture & Nuance",
            [LanguageCode.FRENCH]: "Culture & Nuance",
            [LanguageCode.PORTUGUESE]: "Cultura & Nuances",
            [LanguageCode.MANDARIN]: "文化與細微差別",
        },
        lessons: []
    },
    {
        id: 4,
        title: {
            [LanguageCode.ENGLISH]: "Specialized & Academic Language",
            [LanguageCode.FRENCH]: "Langue Spécialisée & Académique",
            [LanguageCode.PORTUGUESE]: "Linguagem Especializada & Acadêmica",
            [LanguageCode.MANDARIN]: "專業與學術語言",
        },
        lessons: []
    },
    {
        id: 5,
        title: {
            [LanguageCode.ENGLISH]: "Advanced Expression",
            [LanguageCode.FRENCH]: "Expression Avancée",
            [LanguageCode.PORTUGUESE]: "Expressão Avançada",
            [LanguageCode.MANDARIN]: "高級表達",
        },
        lessons: []
    },
    {
        id: 6,
        title: {
            [LanguageCode.ENGLISH]: "Mastering Native Speech",
            [LanguageCode.FRENCH]: "Maîtriser le Discours Natif",
            [LanguageCode.PORTUGUESE]: "Dominando a Fala Nativa",
            [LanguageCode.MANDARIN]: "掌握母語水平",
        },
        lessons: []
    },
];
