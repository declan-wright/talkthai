/**
 * Thai Character Definitions
 * Comprehensive data structure for all Thai consonants used in the reading lessons
 */

export enum ConsonantClass {
  HIGH = 'HIGH',
  MID = 'MID',
  LOW = 'LOW',
}

export interface ThaiConsonant {
  character: string;
  phonetic: string;
  name: string; // e.g., "khɔ̌ɔ khày"
  nameWord: string; // e.g., "ไก่" (chicken)
  class: ConsonantClass;
  audioFile: string; // Path to audio file
  isLessCommon?: boolean; // Characters taught later
}

// High Consonants (10 total)
export const HIGH_CONSONANTS: ThaiConsonant[] = [
  {
    character: 'ข',
    phonetic: 'kh',
    name: 'khɔ̌ɔ khày',
    nameWord: 'ไข่',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/kh-khɔ̌ɔ-khày.wav',
  },
  {
    character: 'ฉ',
    phonetic: 'ch',
    name: 'chɔ̌ɔ chìŋ',
    nameWord: 'ฉิ่ง',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/ch-chɔ̌ɔ-chìŋ.wav',
  },
  {
    character: 'ถ',
    phonetic: 'th',
    name: 'thɔ̌ɔ thŭŋ',
    nameWord: 'ถุง',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/th-thɔ̌ɔ-thŭŋ.wav',
  },
  {
    character: 'ผ',
    phonetic: 'ph',
    name: 'phɔ̌ɔ phɯ̂ŋ',
    nameWord: 'ผึ้ง',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/ph-phɔ̌ɔ-phɯ̂ŋ.wav',
  },
  {
    character: 'ฝ',
    phonetic: 'f',
    name: 'fɔ̌ɔ fǎa',
    nameWord: 'ฝา',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/f-fɔ̌ɔ-fǎa.wav',
  },
  {
    character: 'ส',
    phonetic: 's',
    name: 'sɔ̌ɔ sɯ̌a',
    nameWord: 'เสือ',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/s-sɔ̌ɔ-sɯ̌a.wav',
  },
  {
    character: 'ห',
    phonetic: 'h',
    name: 'hɔ̌ɔ hìip',
    nameWord: 'หีบ',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/h-hɔ̌ɔ-hìip.wav',
  },
  {
    character: 'ศ',
    phonetic: 's',
    name: 'sɔ̌ɔ sǎalaa',
    nameWord: 'ศาลา',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/s-sɔ̌ɔ-sǎalaa.wav',
    isLessCommon: true,
  },
  {
    character: 'ษ',
    phonetic: 's',
    name: 'sɔ̌ɔ rɯɯsǐi',
    nameWord: 'ฤๅษี',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/s-sɔ̌ɔ-rɯɯsǐi.wav',
    isLessCommon: true,
  },
  {
    character: 'ซ',
    phonetic: 's',
    name: 'sɔɔ sôo',
    nameWord: 'โซ่',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/s-sɔɔ-sôo.wav',
    isLessCommon: true,
  },
];

// Mid Consonants (9 total, using 7 for now)
export const MID_CONSONANTS: ThaiConsonant[] = [
  {
    character: 'ก',
    phonetic: 'k',
    name: 'kɔɔ kày',
    nameWord: 'ไก่',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/k-kɔɔ-kày.wav',
  },
  {
    character: 'จ',
    phonetic: 'c',
    name: 'cɔɔ caan',
    nameWord: 'จาน',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/c-cɔɔ-caan.wav',
  },
  {
    character: 'ฎ',
    phonetic: 'd',
    name: 'dɔɔ chadaa',
    nameWord: 'ชฎา',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/d-dɔɔ-chadaa.wav',
    isLessCommon: true,
  },
  {
    character: 'ฏ',
    phonetic: 't',
    name: 'tɔɔ patàk',
    nameWord: 'ปฏัก',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/t-tɔɔ-patàk.wav',
    isLessCommon: true,
  },
  {
    character: 'ด',
    phonetic: 'd',
    name: 'dɔɔ dèk',
    nameWord: 'เด็ก',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/d-dɔɔ-dèk.wav',
  },
  {
    character: 'ต',
    phonetic: 't',
    name: 'tɔɔ tào',
    nameWord: 'เต่า',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/t-tɔɔ-tào.wav',
  },
  {
    character: 'บ',
    phonetic: 'b',
    name: 'bɔɔ baymáy',
    nameWord: 'ใบไม้',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/b-bɔɔ-baymáy.wav',
  },
  {
    character: 'ป',
    phonetic: 'p',
    name: 'pɔɔ plaa',
    nameWord: 'ปลา',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/p-pɔɔ-plaa.wav',
  },
  {
    character: 'อ',
    phonetic: '∅',
    name: 'ɔɔ àaŋ',
    nameWord: 'อ่าง',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/∅-ɔɔ-àaŋ.wav',
  },
];

// Low Consonants - Shared (sounds that also exist in high consonants)
export const LOW_CONSONANTS_SHARED: ThaiConsonant[] = [
  {
    character: 'ค',
    phonetic: 'kh',
    name: 'khɔɔ khwaay',
    nameWord: 'ควาย',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/kh-khɔɔ-khwaay.wav',
  },
  {
    character: 'ช',
    phonetic: 'ch',
    name: 'chɔɔ cháaŋ',
    nameWord: 'ช้าง',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/ch-chɔɔ-cháaŋ.wav',
  },
  {
    character: 'ซ',
    phonetic: 's',
    name: 'sɔɔ sôo',
    nameWord: 'โซ่',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/s-sɔɔ-sôo.wav',
  },
  {
    character: 'ท',
    phonetic: 'th',
    name: 'thɔɔ thaháan',
    nameWord: 'ทหาร',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/th-thɔɔ-thaháan.wav',
  },
  {
    character: 'พ',
    phonetic: 'ph',
    name: 'phɔɔ phaan',
    nameWord: 'พาน',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/ph-phɔɔ-phaan.wav',
  },
  {
    character: 'ฟ',
    phonetic: 'f',
    name: 'fɔɔ fan',
    nameWord: 'ฟัน',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/f-fɔɔ-fan.wav',
  },
];

// Low Consonants - Unique (sounds only in low consonants)
export const LOW_CONSONANTS_UNIQUE: ThaiConsonant[] = [
  {
    character: 'ง',
    phonetic: 'ŋ',
    name: 'ŋɔɔ ŋuu',
    nameWord: 'งู',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/ŋ-ŋɔɔ-ŋuu.wav',
  },
  {
    character: 'ญ',
    phonetic: 'y',
    name: 'yɔɔ yǐŋ',
    nameWord: 'หญิง',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/y-yɔɔ-yǐŋ.wav',
  },
  {
    character: 'ณ',
    phonetic: 'n',
    name: 'nɔɔ neen',
    nameWord: 'เณร',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/n-nɔɔ-neen.wav',
    isLessCommon: true,
  },
  {
    character: 'น',
    phonetic: 'n',
    name: 'nɔɔ nǔu',
    nameWord: 'หนู',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/n-nɔɔ-nǔu.wav',
  },
  {
    character: 'ม',
    phonetic: 'm',
    name: 'mɔɔ máa',
    nameWord: 'ม้า',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/m-mɔɔ-máa.wav',
  },
  {
    character: 'ย',
    phonetic: 'y',
    name: 'yɔɔ yák',
    nameWord: 'ยักษ์',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/y-yɔɔ-yák.wav',
  },
  {
    character: 'ร',
    phonetic: 'r',
    name: 'rɔɔ rɯa',
    nameWord: 'เรือ',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/r-rɔɔ-rɯa.wav',
  },
  {
    character: 'ล',
    phonetic: 'l',
    name: 'lɔɔ liŋ',
    nameWord: 'ลิง',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/l-lɔɔ-liŋ.wav',
  },
  {
    character: 'ว',
    phonetic: 'w',
    name: 'wɔɔ wɛ̌ɛn',
    nameWord: 'แหวน',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/w-wɔɔ-wɛ̌ɛn.wav',
  },
  {
    character: 'ฬ',
    phonetic: 'l',
    name: 'lɔɔ culaa',
    nameWord: 'จุฬา',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/l-lɔɔ-culaa.wav',
    isLessCommon: true,
  },
  {
    character: 'ฮ',
    phonetic: 'h',
    name: 'hɔɔ nǒkkùuk',
    nameWord: 'นกฮูก',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/h-hɔɔ-nǒkkùuk.wav',
  },
];

// Aggregate all consonants
export const ALL_HIGH_CONSONANTS = HIGH_CONSONANTS;
export const ALL_MID_CONSONANTS = MID_CONSONANTS;
export const ALL_LOW_CONSONANTS = [...LOW_CONSONANTS_SHARED, ...LOW_CONSONANTS_UNIQUE];

// For the lessons, filter out less common initially
export const TAUGHT_HIGH_CONSONANTS = HIGH_CONSONANTS.filter(c => !c.isLessCommon);
export const TAUGHT_MID_CONSONANTS = MID_CONSONANTS.filter(c => !c.isLessCommon);
export const TAUGHT_LOW_CONSONANTS_SHARED = LOW_CONSONANTS_SHARED;
export const TAUGHT_LOW_CONSONANTS_UNIQUE = LOW_CONSONANTS_UNIQUE.filter(c => !c.isLessCommon);

// Phonetic options for practice (used as answer choices)
export const CONSONANT_PHONETIC_OPTIONS = [
  'k', 'kh', 'c', 'ch', 'd', 't', 'b', 'p',
  'ph', 'f', 's', 'h', 'th', 'n', 'm', 'y',
  'r', 'l', 'w', 'ŋ', '∅'
];

// =============================================================================
// VOWELS
// =============================================================================

export enum VowelType {
  LONG = 'LONG',
  SHORT = 'SHORT',
  OTHER_LONG = 'OTHER_LONG',
}

export type VowelPosition = 'top' | 'bottom' | 'left' | 'right' | 'left-right' | 'top-right' | 'top-left-right';

export interface VowelSyllable {
  syllable: string; // Thai syllable (e.g., "กา", "ดา")
  consonant: ThaiConsonant;
  audioFile: string; // Path to audio file for this specific syllable
}

export interface ThaiVowel {
  vowelMarks: string; // The vowel marks (e.g., "า", "ี", "เ-")
  phonetic: string; // The phonetic symbol (e.g., "aa", "ii", "ee")
  type: VowelType;
  position: VowelPosition;
  exampleWithKɔɔ: string; // Example with ก (e.g., "กา", "กี", "เก")
  audioFile: string; // Path to audio file
  practiceSyllables: VowelSyllable[]; // Pre-defined syllables for practice
}

// Vowel placement examples with ก
export const VOWEL_PLACEMENT_EXAMPLES = [
  // Top
  { thai: 'กี', phonetic: 'kii', position: 'top' as VowelPosition, audioFile: '/audio/vowels/placement-kii.wav' },
  { thai: 'กิ', phonetic: 'ki', position: 'top' as VowelPosition, audioFile: '/audio/vowels/placement-ki.wav' },
  // Bottom
  { thai: 'กู', phonetic: 'kuu', position: 'bottom' as VowelPosition, audioFile: '/audio/vowels/placement-kuu.wav' },
  { thai: 'กุ', phonetic: 'kù', position: 'bottom' as VowelPosition, audioFile: '/audio/vowels/placement-ku.wav' },
  // Left
  { thai: 'โก', phonetic: 'koo', position: 'left' as VowelPosition, audioFile: '/audio/vowels/placement-koo.wav' },
  { thai: 'เก', phonetic: 'kee', position: 'left' as VowelPosition, audioFile: '/audio/vowels/placement-kee.wav' },
  // Right
  { thai: 'กา', phonetic: 'kaa', position: 'right' as VowelPosition, audioFile: '/audio/vowels/placement-kaa.wav' },
  { thai: 'กอ', phonetic: 'kɔɔ', position: 'right' as VowelPosition, audioFile: '/audio/vowels/placement-kɔɔ.wav' },
  // Left and Right
  { thai: 'เกอ', phonetic: 'kəə', position: 'left-right' as VowelPosition, audioFile: '/audio/vowels/placement-kəə.wav' },
  { thai: 'แกะ', phonetic: 'kɛ̀', position: 'left-right' as VowelPosition, audioFile: '/audio/vowels/placement-kɛ̀.wav' },
  // Top Right
  { thai: 'กือ', phonetic: 'kɯɯ', position: 'top-right' as VowelPosition, audioFile: '/audio/vowels/placement-kɯɯ.wav' },
  { thai: 'กำ', phonetic: 'kam', position: 'top-right' as VowelPosition, audioFile: '/audio/vowels/placement-kam.wav' },
  // Top, Left and Right
  { thai: 'เกีย', phonetic: 'kia', position: 'top-left-right' as VowelPosition, audioFile: '/audio/vowels/placement-kia.wav' },
  { thai: 'เกือ', phonetic: 'kɯa', position: 'top-left-right' as VowelPosition, audioFile: '/audio/vowels/placement-kɯa.wav' },
];

// Helper function to get consonant reference (will be populated after consonants are defined)
const getConsonant = (char: string): ThaiConsonant => {
  const allConsonants = [...MID_CONSONANTS, ...LOW_CONSONANTS_UNIQUE];
  return allConsonants.find(c => c.character === char)!;
};

// Long Vowels with practice syllables
export const LONG_VOWELS: ThaiVowel[] = [
  {
    vowelMarks: 'า',
    phonetic: 'aa',
    type: VowelType.LONG,
    position: 'right',
    exampleWithKɔɔ: 'กา',
    audioFile: '/audio/vowels/aa.wav',
    practiceSyllables: [
      { syllable: 'กา', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kaa.wav' },
      { syllable: 'ดา', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/daa.wav' },
      { syllable: 'ตา', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/taa.wav' },
      { syllable: 'บา', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/baa.wav' },
      { syllable: 'ปา', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/paa.wav' },
      { syllable: 'นา', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/naa.wav' },
      { syllable: 'มา', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/maa.wav' },
      { syllable: 'รา', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/raa.wav' },
      { syllable: 'ลา', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/laa.wav' },
    ],
  },
  {
    vowelMarks: 'ี',
    phonetic: 'ii',
    type: VowelType.LONG,
    position: 'top',
    exampleWithKɔɔ: 'กี',
    audioFile: '/audio/vowels/ii.wav',
    practiceSyllables: [
      { syllable: 'กี', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kii.wav' },
      { syllable: 'ดี', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dii.wav' },
      { syllable: 'ตี', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tii.wav' },
      { syllable: 'บี', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bii.wav' },
      { syllable: 'ปี', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pii.wav' },
      { syllable: 'นี', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nii.wav' },
      { syllable: 'มี', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mii.wav' },
      { syllable: 'รี', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rii.wav' },
      { syllable: 'ลี', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/lii.wav' },
    ],
  },
  {
    vowelMarks: 'ู',
    phonetic: 'uu',
    type: VowelType.LONG,
    position: 'top',
    exampleWithKɔɔ: 'กู',
    audioFile: '/audio/vowels/uu.wav',
    practiceSyllables: [
      { syllable: 'กู', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kuu.wav' },
      { syllable: 'ดู', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/duu.wav' },
      { syllable: 'ตู', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tuu.wav' },
      { syllable: 'บู', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/buu.wav' },
      { syllable: 'ปู', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/puu.wav' },
      { syllable: 'นู', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nuu.wav' },
      { syllable: 'มู', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/muu.wav' },
      { syllable: 'รู', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/ruu.wav' },
      { syllable: 'ลู', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/luu.wav' },
    ],
  },
  {
    vowelMarks: 'ือ',
    phonetic: 'ɯɯ',
    type: VowelType.LONG,
    position: 'top-right',
    exampleWithKɔɔ: 'กือ',
    audioFile: '/audio/vowels/ɯɯ.wav',
    practiceSyllables: [
      { syllable: 'กือ', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kɯɯ.wav' },
      { syllable: 'ดือ', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dɯɯ.wav' },
      { syllable: 'ตือ', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tɯɯ.wav' },
      { syllable: 'บือ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bɯɯ.wav' },
      { syllable: 'ปือ', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pɯɯ.wav' },
      { syllable: 'นือ', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nɯɯ.wav' },
      { syllable: 'มือ', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mɯɯ.wav' },
      { syllable: 'รือ', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rɯɯ.wav' },
      { syllable: 'ลือ', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/lɯɯ.wav' },
    ],
  },
  {
    vowelMarks: 'เ-',
    phonetic: 'ee',
    type: VowelType.LONG,
    position: 'left',
    exampleWithKɔɔ: 'เก',
    audioFile: '/audio/vowels/ee.wav',
    practiceSyllables: [
      { syllable: 'เก', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kee.wav' },
      { syllable: 'เด', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dee.wav' },
      { syllable: 'เต', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tee.wav' },
      { syllable: 'เบ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bee.wav' },
      { syllable: 'เป', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pee.wav' },
      { syllable: 'เน', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nee.wav' },
      { syllable: 'เม', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mee.wav' },
      { syllable: 'เร', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/ree.wav' },
      { syllable: 'เล', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/lee.wav' },
    ],
  },
  {
    vowelMarks: 'แ-',
    phonetic: 'ɛɛ',
    type: VowelType.LONG,
    position: 'left',
    exampleWithKɔɔ: 'แก',
    audioFile: '/audio/vowels/ɛɛ.wav',
    practiceSyllables: [
      { syllable: 'แก', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kɛɛ.wav' },
      { syllable: 'แด', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dɛɛ.wav' },
      { syllable: 'แต', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tɛɛ.wav' },
      { syllable: 'แบ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bɛɛ.wav' },
      { syllable: 'แป', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pɛɛ.wav' },
      { syllable: 'แน', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nɛɛ.wav' },
      { syllable: 'แม', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mɛɛ.wav' },
      { syllable: 'แร', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rɛɛ.wav' },
      { syllable: 'แล', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/lɛɛ.wav' },
    ],
  },
  {
    vowelMarks: 'โ-',
    phonetic: 'oo',
    type: VowelType.LONG,
    position: 'left',
    exampleWithKɔɔ: 'โก',
    audioFile: '/audio/vowels/oo.wav',
    practiceSyllables: [
      { syllable: 'โก', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/koo.wav' },
      { syllable: 'โด', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/doo.wav' },
      { syllable: 'โต', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/too.wav' },
      { syllable: 'โบ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/boo.wav' },
      { syllable: 'โป', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/poo.wav' },
      { syllable: 'โน', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/noo.wav' },
      { syllable: 'โม', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/moo.wav' },
      { syllable: 'โร', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/roo.wav' },
      { syllable: 'โล', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/loo.wav' },
    ],
  },
  {
    vowelMarks: 'อ',
    phonetic: 'ɔɔ',
    type: VowelType.LONG,
    position: 'right',
    exampleWithKɔɔ: 'กอ',
    audioFile: '/audio/vowels/ɔɔ.wav',
    practiceSyllables: [
      { syllable: 'กอ', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kɔɔ.wav' },
      { syllable: 'ดอ', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dɔɔ.wav' },
      { syllable: 'ตอ', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tɔɔ.wav' },
      { syllable: 'บอ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bɔɔ.wav' },
      { syllable: 'ปอ', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pɔɔ.wav' },
      { syllable: 'นอ', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nɔɔ.wav' },
      { syllable: 'มอ', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mɔɔ.wav' },
      { syllable: 'รอ', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rɔɔ.wav' },
      { syllable: 'ลอ', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/lɔɔ.wav' },
    ],
  },
  {
    vowelMarks: 'เ-อ',
    phonetic: 'əə',
    type: VowelType.LONG,
    position: 'left-right',
    exampleWithKɔɔ: 'เกอ',
    audioFile: '/audio/vowels/əə.wav',
    practiceSyllables: [
      { syllable: 'เกอ', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kəə.wav' },
      { syllable: 'เดอ', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dəə.wav' },
      { syllable: 'เตอ', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/təə.wav' },
      { syllable: 'เบอ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bəə.wav' },
      { syllable: 'เปอ', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pəə.wav' },
      { syllable: 'เนอ', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nəə.wav' },
      { syllable: 'เมอ', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/məə.wav' },
      { syllable: 'เรอ', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rəə.wav' },
      { syllable: 'เลอ', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/ləə.wav' },
    ],
  },
];

// Vowel phonetic options for practice
export const VOWEL_PHONETIC_OPTIONS = ['aa', 'ii', 'uu', 'ɯɯ', 'ee', 'ɛɛ', 'oo', 'ɔɔ', 'əə'];

// =============================================================================
// ENDING CONSONANTS (Lesson 7)
// =============================================================================

export interface EndingConsonantExample {
  thai: string;
  phonetic: string;
  meaning?: string;
  audioFile: string;
}

export const LIVE_ENDING_CONSONANTS: EndingConsonantExample[] = [
  { thai: 'นอน', phonetic: 'nɔɔn', meaning: 'Sleep', audioFile: '/audio/vowels/endings/nɔɔn.wav' },
  { thai: 'โมง', phonetic: 'mooŋ', meaning: 'Hour', audioFile: '/audio/vowels/endings/mooŋ.wav' },
  { thai: 'สาม', phonetic: 'sǎam', meaning: 'Three', audioFile: '/audio/vowels/endings/sǎam.wav' },
  { thai: 'ง่าย', phonetic: 'ŋâay', meaning: 'Easy', audioFile: '/audio/vowels/endings/ŋâay.wav' },
  { thai: 'ยาว', phonetic: 'yaaw', meaning: 'Long', audioFile: '/audio/vowels/endings/yaaw.wav' },
];

export const DEAD_ENDING_CONSONANTS: EndingConsonantExample[] = [
  { thai: 'ยาก', phonetic: 'yâak', meaning: 'Difficult', audioFile: '/audio/vowels/endings/yâak.wav' },
  { thai: 'ชอบ', phonetic: 'chɔ̂ɔp', meaning: 'Like', audioFile: '/audio/vowels/endings/chɔ̂ɔp.wav' },
  { thai: 'พูด', phonetic: 'phûut', meaning: 'Speak', audioFile: '/audio/vowels/endings/phûut.wav' },
];

export const ENDING_K_EXAMPLES: EndingConsonantExample[] = [
  { thai: 'ยาก', phonetic: 'yâak', audioFile: '/audio/vowels/endings/yâak.wav' },
  { thai: 'มาก', phonetic: 'mâak', audioFile: '/audio/vowels/endings/mâak.wav' },
  { thai: 'ออก', phonetic: 'ɔ̀ɔk', audioFile: '/audio/vowels/endings/ɔ̀ɔk.wav' },
  { thai: 'ลูก', phonetic: 'lûuk', audioFile: '/audio/vowels/endings/lûuk.wav' },
];

export const ENDING_P_EXAMPLES: EndingConsonantExample[] = [
  { thai: 'ชอบ', phonetic: 'chɔ̂ɔp', audioFile: '/audio/vowels/endings/chɔ̂ɔp.wav' },
  { thai: 'อาบ', phonetic: 'àap', audioFile: '/audio/vowels/endings/àap.wav' },
  { thai: 'ดาบ', phonetic: 'dàap', audioFile: '/audio/vowels/endings/dàap.wav' },
  { thai: 'รูป', phonetic: 'rûup', audioFile: '/audio/vowels/endings/rûup.wav' },
];

export const ENDING_T_EXAMPLES: EndingConsonantExample[] = [
  { thai: 'พูด', phonetic: 'phûut', audioFile: '/audio/vowels/endings/phûut.wav' },
  { thai: 'แปด', phonetic: 'pɛ̀ɛt', audioFile: '/audio/vowels/endings/pɛ̀ɛt.wav' },
  { thai: 'กอด', phonetic: 'kɔ̀ɔt', audioFile: '/audio/vowels/endings/kɔ̀ɔt.wav' },
  { thai: 'ขาด', phonetic: 'khàat', audioFile: '/audio/vowels/endings/khàat.wav' },
];

export const INTRO_EXAMPLES: EndingConsonantExample[] = [
  { thai: 'กีก', phonetic: 'kiik', audioFile: '/audio/vowels/endings/kiik.wav' },
  { thai: 'ดาบ', phonetic: 'dàap', audioFile: '/audio/vowels/endings/dàap.wav' },
  { thai: 'ฟาด', phonetic: 'fàat', audioFile: '/audio/vowels/endings/fàat.wav' },
  { thai: 'โลง', phonetic: 'looŋ', audioFile: '/audio/vowels/endings/looŋ.wav' },
  { thai: 'ยาน', phonetic: 'yaan', audioFile: '/audio/vowels/endings/yaan.wav' },
  { thai: 'ทีม', phonetic: 'thiim', audioFile: '/audio/vowels/endings/thiim.wav' },
  { thai: 'กาว', phonetic: 'kaaw', audioFile: '/audio/vowels/endings/kaaw.wav' },
];

// Ending Consonant Practice Words (for Practice 7)
export interface EndingConsonantPracticeWord {
  thai: string;
  phonetic: string;
  endingSound: string;
  audioFile: string;
}

export const ENDING_CONSONANT_PRACTICE_WORDS: EndingConsonantPracticeWord[] = [
  // n endings
  { thai: 'นอน', phonetic: 'nɔɔn', endingSound: 'n', audioFile: '/audio/vowels/endings/nɔɔn.wav' },
  { thai: 'ยาน', phonetic: 'yaan', endingSound: 'n', audioFile: '/audio/vowels/endings/yaan.wav' },
  { thai: 'เกิน', phonetic: 'kəən', endingSound: 'n', audioFile: '/audio/vowels/endings/kəən.wav' },
  
  // ŋ endings
  { thai: 'โมง', phonetic: 'mooŋ', endingSound: 'ŋ', audioFile: '/audio/vowels/endings/mooŋ.wav' },
  { thai: 'โลง', phonetic: 'looŋ', endingSound: 'ŋ', audioFile: '/audio/vowels/endings/looŋ.wav' },
  
  // m endings
  { thai: 'สาม', phonetic: 'sǎam', endingSound: 'm', audioFile: '/audio/vowels/endings/sǎam.wav' },
  { thai: 'ทีม', phonetic: 'thiim', endingSound: 'm', audioFile: '/audio/vowels/endings/thiim.wav' },
  
  // y endings
  { thai: 'ง่าย', phonetic: 'ŋâay', endingSound: 'y', audioFile: '/audio/vowels/endings/ŋâay.wav' },
  { thai: 'เคย', phonetic: 'khəəy', endingSound: 'y', audioFile: '/audio/vowels/endings/khəəy.wav' },
  
  // w endings
  { thai: 'ยาว', phonetic: 'yaaw', endingSound: 'w', audioFile: '/audio/vowels/endings/yaaw.wav' },
  { thai: 'กาว', phonetic: 'kaaw', endingSound: 'w', audioFile: '/audio/vowels/endings/kaaw.wav' },
  
  // k endings
  { thai: 'ยาก', phonetic: 'yâak', endingSound: 'k', audioFile: '/audio/vowels/endings/yâak.wav' },
  { thai: 'มาก', phonetic: 'mâak', endingSound: 'k', audioFile: '/audio/vowels/endings/mâak.wav' },
  { thai: 'ออก', phonetic: 'ɔ̀ɔk', endingSound: 'k', audioFile: '/audio/vowels/endings/ɔ̀ɔk.wav' },
  { thai: 'ลูก', phonetic: 'lûuk', endingSound: 'k', audioFile: '/audio/vowels/endings/lûuk.wav' },
  { thai: 'กีก', phonetic: 'kiik', endingSound: 'k', audioFile: '/audio/vowels/endings/kiik.wav' },
  
  // p endings
  { thai: 'ชอบ', phonetic: 'chɔ̂ɔp', endingSound: 'p', audioFile: '/audio/vowels/endings/chɔ̂ɔp.wav' },
  { thai: 'อาบ', phonetic: 'àap', endingSound: 'p', audioFile: '/audio/vowels/endings/àap.wav' },
  { thai: 'ดาบ', phonetic: 'dàap', endingSound: 'p', audioFile: '/audio/vowels/endings/dàap.wav' },
  { thai: 'รูป', phonetic: 'rûup', endingSound: 'p', audioFile: '/audio/vowels/endings/rûup.wav' },
  
  // t endings
  { thai: 'พูด', phonetic: 'phûut', endingSound: 't', audioFile: '/audio/vowels/endings/phûut.wav' },
  { thai: 'แปด', phonetic: 'pɛ̀ɛt', endingSound: 't', audioFile: '/audio/vowels/endings/pɛ̀ɛt.wav' },
  { thai: 'กอด', phonetic: 'kɔ̀ɔt', endingSound: 't', audioFile: '/audio/vowels/endings/kɔ̀ɔt.wav' },
  { thai: 'ขาด', phonetic: 'khàat', endingSound: 't', audioFile: '/audio/vowels/endings/khàat.wav' },
  { thai: 'ฟาด', phonetic: 'fàat', endingSound: 't', audioFile: '/audio/vowels/endings/fàat.wav' },
  { thai: 'กวด', phonetic: 'kùat', endingSound: 't', audioFile: '/audio/vowels/endings/kùat.wav' },
];
