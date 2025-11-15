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
    audioFile: '/audio/characters/kh-khɔ̌ɔ-khày.opus',
  },
  {
    character: 'ฉ',
    phonetic: 'ch',
    name: 'chɔ̌ɔ chìŋ',
    nameWord: 'ฉิ่ง',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/ch-chɔ̌ɔ-chìŋ.opus',
  },
  {
    character: 'ถ',
    phonetic: 'th',
    name: 'thɔ̌ɔ thŭŋ',
    nameWord: 'ถุง',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/th-thɔ̌ɔ-thŭŋ.opus',
  },
  {
    character: 'ผ',
    phonetic: 'ph',
    name: 'phɔ̌ɔ phɯ̂ŋ',
    nameWord: 'ผึ้ง',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/ph-phɔ̌ɔ-phɯ̂ŋ.opus',
  },
  {
    character: 'ฝ',
    phonetic: 'f',
    name: 'fɔ̌ɔ fǎa',
    nameWord: 'ฝา',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/f-fɔ̌ɔ-fǎa.opus',
  },
  {
    character: 'ส',
    phonetic: 's',
    name: 'sɔ̌ɔ sɯ̌a',
    nameWord: 'เสือ',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/s-sɔ̌ɔ-sɯ̌a.opus',
  },
  {
    character: 'ห',
    phonetic: 'h',
    name: 'hɔ̌ɔ hìip',
    nameWord: 'หีบ',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/h-hɔ̌ɔ-hìip.opus',
  },
  {
    character: 'ศ',
    phonetic: 's',
    name: 'sɔ̌ɔ sǎalaa',
    nameWord: 'ศาลา',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/s-sɔ̌ɔ-sǎalaa.opus',
    isLessCommon: true,
  },
  {
    character: 'ษ',
    phonetic: 's',
    name: 'sɔ̌ɔ rɯɯsǐi',
    nameWord: 'ฤๅษี',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/s-sɔ̌ɔ-rɯɯsǐi.opus',
    isLessCommon: true,
  },
  {
    character: 'ซ',
    phonetic: 's',
    name: 'sɔɔ sôo',
    nameWord: 'โซ่',
    class: ConsonantClass.HIGH,
    audioFile: '/audio/characters/s-sɔɔ-sôo.opus',
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
    audioFile: '/audio/characters/k-kɔɔ-kày.opus',
  },
  {
    character: 'จ',
    phonetic: 'c',
    name: 'cɔɔ caan',
    nameWord: 'จาน',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/c-cɔɔ-caan.opus',
  },
  {
    character: 'ฎ',
    phonetic: 'd',
    name: 'dɔɔ chadaa',
    nameWord: 'ชฎา',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/d-dɔɔ-chadaa.opus',
    isLessCommon: true,
  },
  {
    character: 'ฏ',
    phonetic: 't',
    name: 'tɔɔ patàk',
    nameWord: 'ปฏัก',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/t-tɔɔ-patàk.opus',
    isLessCommon: true,
  },
  {
    character: 'ด',
    phonetic: 'd',
    name: 'dɔɔ dèk',
    nameWord: 'เด็ก',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/d-dɔɔ-dèk.opus',
  },
  {
    character: 'ต',
    phonetic: 't',
    name: 'tɔɔ tào',
    nameWord: 'เต่า',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/t-tɔɔ-tào.opus',
  },
  {
    character: 'บ',
    phonetic: 'b',
    name: 'bɔɔ baymáy',
    nameWord: 'ใบไม้',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/b-bɔɔ-baymáy.opus',
  },
  {
    character: 'ป',
    phonetic: 'p',
    name: 'pɔɔ plaa',
    nameWord: 'ปลา',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/p-pɔɔ-plaa.opus',
  },
  {
    character: 'อ',
    phonetic: '∅',
    name: 'ɔɔ àaŋ',
    nameWord: 'อ่าง',
    class: ConsonantClass.MID,
    audioFile: '/audio/characters/∅-ɔɔ-àaŋ.opus',
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
    audioFile: '/audio/characters/kh-khɔɔ-khwaay.opus',
  },
  {
    character: 'ช',
    phonetic: 'ch',
    name: 'chɔɔ cháaŋ',
    nameWord: 'ช้าง',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/ch-chɔɔ-cháaŋ.opus',
  },
  {
    character: 'ซ',
    phonetic: 's',
    name: 'sɔɔ sôo',
    nameWord: 'โซ่',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/s-sɔɔ-sôo.opus',
  },
  {
    character: 'ท',
    phonetic: 'th',
    name: 'thɔɔ thaháan',
    nameWord: 'ทหาร',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/th-thɔɔ-thaháan.opus',
  },
  {
    character: 'พ',
    phonetic: 'ph',
    name: 'phɔɔ phaan',
    nameWord: 'พาน',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/ph-phɔɔ-phaan.opus',
  },
  {
    character: 'ฟ',
    phonetic: 'f',
    name: 'fɔɔ fan',
    nameWord: 'ฟัน',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/f-fɔɔ-fan.opus',
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
    audioFile: '/audio/characters/ŋ-ŋɔɔ-ŋuu.opus',
  },
  {
    character: 'ญ',
    phonetic: 'y',
    name: 'yɔɔ yǐŋ',
    nameWord: 'หญิง',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/y-yɔɔ-yǐŋ.opus',
  },
  {
    character: 'ณ',
    phonetic: 'n',
    name: 'nɔɔ neen',
    nameWord: 'เณร',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/n-nɔɔ-neen.opus',
    isLessCommon: true,
  },
  {
    character: 'น',
    phonetic: 'n',
    name: 'nɔɔ nǔu',
    nameWord: 'หนู',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/n-nɔɔ-nǔu.opus',
  },
  {
    character: 'ม',
    phonetic: 'm',
    name: 'mɔɔ máa',
    nameWord: 'ม้า',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/m-mɔɔ-máa.opus',
  },
  {
    character: 'ย',
    phonetic: 'y',
    name: 'yɔɔ yák',
    nameWord: 'ยักษ์',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/y-yɔɔ-yák.opus',
  },
  {
    character: 'ร',
    phonetic: 'r',
    name: 'rɔɔ rɯa',
    nameWord: 'เรือ',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/r-rɔɔ-rɯa.opus',
  },
  {
    character: 'ล',
    phonetic: 'l',
    name: 'lɔɔ liŋ',
    nameWord: 'ลิง',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/l-lɔɔ-liŋ.opus',
  },
  {
    character: 'ว',
    phonetic: 'w',
    name: 'wɔɔ wɛ̌ɛn',
    nameWord: 'แหวน',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/w-wɔɔ-wɛ̌ɛn.opus',
  },
  {
    character: 'ฬ',
    phonetic: 'l',
    name: 'lɔɔ culaa',
    nameWord: 'จุฬา',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/l-lɔɔ-culaa.opus',
    isLessCommon: true,
  },
  {
    character: 'ฮ',
    phonetic: 'h',
    name: 'hɔɔ nǒkkùuk',
    nameWord: 'นกฮูก',
    class: ConsonantClass.LOW,
    audioFile: '/audio/characters/h-hɔɔ-nǒkkùuk.opus',
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
  { thai: 'กี', phonetic: 'kii', position: 'top' as VowelPosition, audioFile: '/audio/vowels/placement-kii.opus' },
  { thai: 'กิ', phonetic: 'ki', position: 'top' as VowelPosition, audioFile: '/audio/vowels/placement-ki.opus' },
  // Bottom
  { thai: 'กู', phonetic: 'kuu', position: 'bottom' as VowelPosition, audioFile: '/audio/vowels/placement-kuu.opus' },
  { thai: 'กุ', phonetic: 'kù', position: 'bottom' as VowelPosition, audioFile: '/audio/vowels/placement-ku.opus' },
  // Left
  { thai: 'โก', phonetic: 'koo', position: 'left' as VowelPosition, audioFile: '/audio/vowels/placement-koo.opus' },
  { thai: 'เก', phonetic: 'kee', position: 'left' as VowelPosition, audioFile: '/audio/vowels/placement-kee.opus' },
  // Right
  { thai: 'กา', phonetic: 'kaa', position: 'right' as VowelPosition, audioFile: '/audio/vowels/placement-kaa.opus' },
  { thai: 'กอ', phonetic: 'kɔɔ', position: 'right' as VowelPosition, audioFile: '/audio/vowels/placement-kɔɔ.opus' },
  // Left and Right
  { thai: 'เกอ', phonetic: 'kəə', position: 'left-right' as VowelPosition, audioFile: '/audio/vowels/placement-kəə.opus' },
  { thai: 'แกะ', phonetic: 'kɛ̀', position: 'left-right' as VowelPosition, audioFile: '/audio/vowels/placement-kɛ̀.opus' },
  // Top Right
  { thai: 'กือ', phonetic: 'kɯɯ', position: 'top-right' as VowelPosition, audioFile: '/audio/vowels/placement-kɯɯ.opus' },
  { thai: 'กำ', phonetic: 'kam', position: 'top-right' as VowelPosition, audioFile: '/audio/vowels/placement-kam.opus' },
  // Top, Left and Right
  { thai: 'เกีย', phonetic: 'kia', position: 'top-left-right' as VowelPosition, audioFile: '/audio/vowels/placement-kia.opus' },
  { thai: 'เกือ', phonetic: 'kɯa', position: 'top-left-right' as VowelPosition, audioFile: '/audio/vowels/placement-kɯa.opus' },
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
    audioFile: '/audio/vowels/aa.opus',
    practiceSyllables: [
      { syllable: 'กา', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kaa.opus' },
      { syllable: 'ดา', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/daa.opus' },
      { syllable: 'ตา', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/taa.opus' },
      { syllable: 'บา', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/baa.opus' },
      { syllable: 'ปา', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/paa.opus' },
      { syllable: 'นา', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/naa.opus' },
      { syllable: 'มา', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/maa.opus' },
      { syllable: 'รา', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/raa.opus' },
      { syllable: 'ลา', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/laa.opus' },
    ],
  },
  {
    vowelMarks: 'ี',
    phonetic: 'ii',
    type: VowelType.LONG,
    position: 'top',
    exampleWithKɔɔ: 'กี',
    audioFile: '/audio/vowels/ii.opus',
    practiceSyllables: [
      { syllable: 'กี', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kii.opus' },
      { syllable: 'ดี', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dii.opus' },
      { syllable: 'ตี', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tii.opus' },
      { syllable: 'บี', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bii.opus' },
      { syllable: 'ปี', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pii.opus' },
      { syllable: 'นี', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nii.opus' },
      { syllable: 'มี', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mii.opus' },
      { syllable: 'รี', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rii.opus' },
      { syllable: 'ลี', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/lii.opus' },
    ],
  },
  {
    vowelMarks: 'ู',
    phonetic: 'uu',
    type: VowelType.LONG,
    position: 'top',
    exampleWithKɔɔ: 'กู',
    audioFile: '/audio/vowels/uu.opus',
    practiceSyllables: [
      { syllable: 'กู', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kuu.opus' },
      { syllable: 'ดู', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/duu.opus' },
      { syllable: 'ตู', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tuu.opus' },
      { syllable: 'บู', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/buu.opus' },
      { syllable: 'ปู', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/puu.opus' },
      { syllable: 'นู', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nuu.opus' },
      { syllable: 'มู', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/muu.opus' },
      { syllable: 'รู', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/ruu.opus' },
      { syllable: 'ลู', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/luu.opus' },
    ],
  },
  {
    vowelMarks: 'ือ',
    phonetic: 'ɯɯ',
    type: VowelType.LONG,
    position: 'top-right',
    exampleWithKɔɔ: 'กือ',
    audioFile: '/audio/vowels/ɯɯ.opus',
    practiceSyllables: [
      { syllable: 'กือ', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kɯɯ.opus' },
      { syllable: 'ดือ', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dɯɯ.opus' },
      { syllable: 'ตือ', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tɯɯ.opus' },
      { syllable: 'บือ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bɯɯ.opus' },
      { syllable: 'ปือ', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pɯɯ.opus' },
      { syllable: 'นือ', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nɯɯ.opus' },
      { syllable: 'มือ', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mɯɯ.opus' },
      { syllable: 'รือ', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rɯɯ.opus' },
      { syllable: 'ลือ', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/lɯɯ.opus' },
    ],
  },
  {
    vowelMarks: 'เ-',
    phonetic: 'ee',
    type: VowelType.LONG,
    position: 'left',
    exampleWithKɔɔ: 'เก',
    audioFile: '/audio/vowels/ee.opus',
    practiceSyllables: [
      { syllable: 'เก', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kee.opus' },
      { syllable: 'เด', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dee.opus' },
      { syllable: 'เต', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tee.opus' },
      { syllable: 'เบ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bee.opus' },
      { syllable: 'เป', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pee.opus' },
      { syllable: 'เน', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nee.opus' },
      { syllable: 'เม', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mee.opus' },
      { syllable: 'เร', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/ree.opus' },
      { syllable: 'เล', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/lee.opus' },
    ],
  },
  {
    vowelMarks: 'แ-',
    phonetic: 'ɛɛ',
    type: VowelType.LONG,
    position: 'left',
    exampleWithKɔɔ: 'แก',
    audioFile: '/audio/vowels/ɛɛ.opus',
    practiceSyllables: [
      { syllable: 'แก', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kɛɛ.opus' },
      { syllable: 'แด', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dɛɛ.opus' },
      { syllable: 'แต', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tɛɛ.opus' },
      { syllable: 'แบ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bɛɛ.opus' },
      { syllable: 'แป', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pɛɛ.opus' },
      { syllable: 'แน', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nɛɛ.opus' },
      { syllable: 'แม', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mɛɛ.opus' },
      { syllable: 'แร', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rɛɛ.opus' },
      { syllable: 'แล', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/lɛɛ.opus' },
    ],
  },
  {
    vowelMarks: 'โ-',
    phonetic: 'oo',
    type: VowelType.LONG,
    position: 'left',
    exampleWithKɔɔ: 'โก',
    audioFile: '/audio/vowels/oo.opus',
    practiceSyllables: [
      { syllable: 'โก', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/koo.opus' },
      { syllable: 'โด', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/doo.opus' },
      { syllable: 'โต', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/too.opus' },
      { syllable: 'โบ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/boo.opus' },
      { syllable: 'โป', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/poo.opus' },
      { syllable: 'โน', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/noo.opus' },
      { syllable: 'โม', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/moo.opus' },
      { syllable: 'โร', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/roo.opus' },
      { syllable: 'โล', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/loo.opus' },
    ],
  },
  {
    vowelMarks: 'อ',
    phonetic: 'ɔɔ',
    type: VowelType.LONG,
    position: 'right',
    exampleWithKɔɔ: 'กอ',
    audioFile: '/audio/vowels/ɔɔ.opus',
    practiceSyllables: [
      { syllable: 'กอ', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kɔɔ.opus' },
      { syllable: 'ดอ', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dɔɔ.opus' },
      { syllable: 'ตอ', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tɔɔ.opus' },
      { syllable: 'บอ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bɔɔ.opus' },
      { syllable: 'ปอ', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pɔɔ.opus' },
      { syllable: 'นอ', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nɔɔ.opus' },
      { syllable: 'มอ', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mɔɔ.opus' },
      { syllable: 'รอ', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rɔɔ.opus' },
      { syllable: 'ลอ', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/lɔɔ.opus' },
    ],
  },
  {
    vowelMarks: 'เ-อ',
    phonetic: 'əə',
    type: VowelType.LONG,
    position: 'left-right',
    exampleWithKɔɔ: 'เกอ',
    audioFile: '/audio/vowels/əə.opus',
    practiceSyllables: [
      { syllable: 'เกอ', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kəə.opus' },
      { syllable: 'เดอ', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dəə.opus' },
      { syllable: 'เตอ', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/təə.opus' },
      { syllable: 'เบอ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bəə.opus' },
      { syllable: 'เปอ', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pəə.opus' },
      { syllable: 'เนอ', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nəə.opus' },
      { syllable: 'เมอ', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/məə.opus' },
      { syllable: 'เรอ', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rəə.opus' },
      { syllable: 'เลอ', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/ləə.opus' },
    ],
  },
];

// Other Long Vowels (diphthongs and special vowels) with practice syllables
export const OTHER_LONG_VOWELS: ThaiVowel[] = [
  {
    vowelMarks: 'ไ-',
    phonetic: 'ai',
    type: VowelType.OTHER_LONG,
    position: 'left',
    exampleWithKɔɔ: 'ไก',
    audioFile: '/audio/vowels/ai.opus',
    practiceSyllables: [
      { syllable: 'ไก', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kai.opus' },
      { syllable: 'ได', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dai.opus' },
      { syllable: 'ไต', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tai.opus' },
      { syllable: 'ไป', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pai.opus' },
      { syllable: 'ไน', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nai.opus' },
      { syllable: 'ไม', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mai.opus' },
      { syllable: 'ไร', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rai.opus' },
      { syllable: 'ไล', consonant: getConsonant('ล'), audioFile: '/audio/vowels/syllables/lai.opus' },
    ],
  },
  {
    vowelMarks: 'ใ-',
    phonetic: 'ai',
    type: VowelType.OTHER_LONG,
    position: 'left',
    exampleWithKɔɔ: 'ใก',
    audioFile: '/audio/vowels/ai2.opus',
    practiceSyllables: [
      { syllable: 'ใคร', consonant: getConsonant('ค'), audioFile: '/audio/vowels/syllables/khrai.opus' },
      { syllable: 'ใช่', consonant: getConsonant('ช'), audioFile: '/audio/vowels/syllables/châi.opus' },
      { syllable: 'ใหญ่', consonant: getConsonant('ย'), audioFile: '/audio/vowels/syllables/yài.opus' },
      { syllable: 'ใน', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nai.opus' },
      { syllable: 'ใหม่', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mài.opus' },
      { syllable: 'ใส่', consonant: getConsonant('ส'), audioFile: '/audio/vowels/syllables/sài.opus' },
      { syllable: 'ใกล้', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/klái.opus' },
      { syllable: 'ใจ', consonant: getConsonant('จ'), audioFile: '/audio/vowels/syllables/jai.opus' },
    ],
  },
  {
    vowelMarks: 'เ-า',
    phonetic: 'ao',
    type: VowelType.OTHER_LONG,
    position: 'left',
    exampleWithKɔɔ: 'เกา',
    audioFile: '/audio/vowels/ao.opus',
    practiceSyllables: [
      { syllable: 'เกา', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kao.opus' },
      { syllable: 'เดา', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dao.opus' },
      { syllable: 'เตา', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tao.opus' },
      { syllable: 'เบา', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bao.opus' },
      { syllable: 'เปา', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pao.opus' },
      { syllable: 'เนา', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nao.opus' },
      { syllable: 'เมา', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mao.opus' },
      { syllable: 'เรา', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rao.opus' },
    ],
  },
  {
    vowelMarks: '-ำ',
    phonetic: 'am',
    type: VowelType.OTHER_LONG,
    position: 'top-right',
    exampleWithKɔɔ: 'กำ',
    audioFile: '/audio/vowels/am.opus',
    practiceSyllables: [
      { syllable: 'กำ', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kam.opus' },
      { syllable: 'ดำ', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dam.opus' },
      { syllable: 'ตำ', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tam.opus' },
      { syllable: 'บำ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bam.opus' },
      { syllable: 'ปำ', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pam.opus' },
      { syllable: 'นำ', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nam.opus' },
      { syllable: 'มำ', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mam.opus' },
      { syllable: 'รำ', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/ram.opus' },
    ],
  },
  {
    vowelMarks: 'เ-ีย',
    phonetic: 'ia',
    type: VowelType.OTHER_LONG,
    position: 'left-top',
    exampleWithKɔɔ: 'เกีย',
    audioFile: '/audio/vowels/ia.opus',
    practiceSyllables: [
      { syllable: 'เกีย', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kia.opus' },
      { syllable: 'เดีย', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dia.opus' },
      { syllable: 'เตีย', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tia.opus' },
      { syllable: 'เบีย', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bia.opus' },
      { syllable: 'เปีย', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pia.opus' },
      { syllable: 'เนีย', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nia.opus' },
      { syllable: 'เมีย', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mia.opus' },
      { syllable: 'เรีย', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/ria.opus' },
    ],
  },
  {
    vowelMarks: 'ัว',
    phonetic: 'ua',
    type: VowelType.OTHER_LONG,
    position: 'top',
    exampleWithKɔɔ: 'กัว',
    audioFile: '/audio/vowels/ua.opus',
    practiceSyllables: [
      { syllable: 'กัว', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kua.opus' },
      { syllable: 'ดัว', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dua.opus' },
      { syllable: 'ตัว', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tua.opus' },
      { syllable: 'บัว', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bua.opus' },
      { syllable: 'ปัว', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pua.opus' },
      { syllable: 'นัว', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nua.opus' },
      { syllable: 'มัว', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mua.opus' },
      { syllable: 'รัว', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rua.opus' },
    ],
  },
  {
    vowelMarks: 'เ-ือ',
    phonetic: 'ɯa',
    type: VowelType.OTHER_LONG,
    position: 'left-top',
    exampleWithKɔɔ: 'เกือ',
    audioFile: '/audio/vowels/ɯa.opus',
    practiceSyllables: [
      { syllable: 'เกือ', consonant: getConsonant('ก'), audioFile: '/audio/vowels/syllables/kɯa.opus' },
      { syllable: 'เดือ', consonant: getConsonant('ด'), audioFile: '/audio/vowels/syllables/dɯa.opus' },
      { syllable: 'เตือ', consonant: getConsonant('ต'), audioFile: '/audio/vowels/syllables/tɯa.opus' },
      { syllable: 'เบือ', consonant: getConsonant('บ'), audioFile: '/audio/vowels/syllables/bɯa.opus' },
      { syllable: 'เปือ', consonant: getConsonant('ป'), audioFile: '/audio/vowels/syllables/pɯa.opus' },
      { syllable: 'เนือ', consonant: getConsonant('น'), audioFile: '/audio/vowels/syllables/nɯa.opus' },
      { syllable: 'เมือ', consonant: getConsonant('ม'), audioFile: '/audio/vowels/syllables/mɯa.opus' },
      { syllable: 'เรือ', consonant: getConsonant('ร'), audioFile: '/audio/vowels/syllables/rɯa.opus' },
    ],
  },
];

// Vowel phonetic options for practice
export const VOWEL_PHONETIC_OPTIONS = ['aa', 'ii', 'uu', 'ɯɯ', 'ee', 'ɛɛ', 'oo', 'ɔɔ', 'əə', 'ai', 'ao', 'am', 'ia', 'ua', 'ɯa'];

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
  { thai: 'นอน', phonetic: 'nɔɔn', meaning: 'Sleep', audioFile: '/audio/vowels/endings/nɔɔn.opus' },
  { thai: 'โมง', phonetic: 'mooŋ', meaning: 'Hour', audioFile: '/audio/vowels/endings/mooŋ.opus' },
  { thai: 'สาม', phonetic: 'sǎam', meaning: 'Three', audioFile: '/audio/vowels/endings/sǎam.opus' },
  { thai: 'ง่าย', phonetic: 'ŋâay', meaning: 'Easy', audioFile: '/audio/vowels/endings/ŋâay.opus' },
  { thai: 'ยาว', phonetic: 'yaaw', meaning: 'Long', audioFile: '/audio/vowels/endings/yaaw.opus' },
];

export const DEAD_ENDING_CONSONANTS: EndingConsonantExample[] = [
  { thai: 'ยาก', phonetic: 'yâak', meaning: 'Difficult', audioFile: '/audio/vowels/endings/yâak.opus' },
  { thai: 'ชอบ', phonetic: 'chɔ̂ɔp', meaning: 'Like', audioFile: '/audio/vowels/endings/chɔ̂ɔp.opus' },
  { thai: 'พูด', phonetic: 'phûut', meaning: 'Speak', audioFile: '/audio/vowels/endings/phûut.opus' },
];

export const ENDING_K_EXAMPLES: EndingConsonantExample[] = [
  { thai: 'ยาก', phonetic: 'yâak', audioFile: '/audio/vowels/endings/yâak.opus' },
  { thai: 'มาก', phonetic: 'mâak', audioFile: '/audio/vowels/endings/mâak.opus' },
  { thai: 'ออก', phonetic: 'ɔ̀ɔk', audioFile: '/audio/vowels/endings/ɔ̀ɔk.opus' },
  { thai: 'ลูก', phonetic: 'lûuk', audioFile: '/audio/vowels/endings/lûuk.opus' },
];

export const ENDING_P_EXAMPLES: EndingConsonantExample[] = [
  { thai: 'ชอบ', phonetic: 'chɔ̂ɔp', audioFile: '/audio/vowels/endings/chɔ̂ɔp.opus' },
  { thai: 'อาบ', phonetic: 'àap', audioFile: '/audio/vowels/endings/àap.opus' },
  { thai: 'ดาบ', phonetic: 'dàap', audioFile: '/audio/vowels/endings/dàap.opus' },
  { thai: 'รูป', phonetic: 'rûup', audioFile: '/audio/vowels/endings/rûup.opus' },
];

export const ENDING_T_EXAMPLES: EndingConsonantExample[] = [
  { thai: 'พูด', phonetic: 'phûut', audioFile: '/audio/vowels/endings/phûut.opus' },
  { thai: 'แปด', phonetic: 'pɛ̀ɛt', audioFile: '/audio/vowels/endings/pɛ̀ɛt.opus' },
  { thai: 'กอด', phonetic: 'kɔ̀ɔt', audioFile: '/audio/vowels/endings/kɔ̀ɔt.opus' },
  { thai: 'ขาด', phonetic: 'khàat', audioFile: '/audio/vowels/endings/khàat.opus' },
];

export const INTRO_EXAMPLES: EndingConsonantExample[] = [
  { thai: 'กีก', phonetic: 'kiik', audioFile: '/audio/vowels/endings/kiik.opus' },
  { thai: 'ดาบ', phonetic: 'dàap', audioFile: '/audio/vowels/endings/dàap.opus' },
  { thai: 'ฟาด', phonetic: 'fàat', audioFile: '/audio/vowels/endings/fàat.opus' },
  { thai: 'โลง', phonetic: 'looŋ', audioFile: '/audio/vowels/endings/looŋ.opus' },
  { thai: 'ยาน', phonetic: 'yaan', audioFile: '/audio/vowels/endings/yaan.opus' },
  { thai: 'ทีม', phonetic: 'thiim', audioFile: '/audio/vowels/endings/thiim.opus' },
  { thai: 'กาว', phonetic: 'kaaw', audioFile: '/audio/vowels/endings/kaaw.opus' },
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
  { thai: 'นอน', phonetic: 'nɔɔn', endingSound: 'n', audioFile: '/audio/vowels/endings/nɔɔn.opus' },
  { thai: 'ยาน', phonetic: 'yaan', endingSound: 'n', audioFile: '/audio/vowels/endings/yaan.opus' },
  { thai: 'เกิน', phonetic: 'kəən', endingSound: 'n', audioFile: '/audio/vowels/endings/kəən.opus' },
  
  // ŋ endings
  { thai: 'โมง', phonetic: 'mooŋ', endingSound: 'ŋ', audioFile: '/audio/vowels/endings/mooŋ.opus' },
  { thai: 'โลง', phonetic: 'looŋ', endingSound: 'ŋ', audioFile: '/audio/vowels/endings/looŋ.opus' },
  
  // m endings
  { thai: 'สาม', phonetic: 'sǎam', endingSound: 'm', audioFile: '/audio/vowels/endings/sǎam.opus' },
  { thai: 'ทีม', phonetic: 'thiim', endingSound: 'm', audioFile: '/audio/vowels/endings/thiim.opus' },
  
  // y endings
  { thai: 'ง่าย', phonetic: 'ŋâay', endingSound: 'y', audioFile: '/audio/vowels/endings/ŋâay.opus' },
  { thai: 'เคย', phonetic: 'khəəy', endingSound: 'y', audioFile: '/audio/vowels/endings/khəəy.opus' },
  
  // w endings
  { thai: 'ยาว', phonetic: 'yaaw', endingSound: 'w', audioFile: '/audio/vowels/endings/yaaw.opus' },
  { thai: 'กาว', phonetic: 'kaaw', endingSound: 'w', audioFile: '/audio/vowels/endings/kaaw.opus' },
  
  // k endings
  { thai: 'ยาก', phonetic: 'yâak', endingSound: 'k', audioFile: '/audio/vowels/endings/yâak.opus' },
  { thai: 'มาก', phonetic: 'mâak', endingSound: 'k', audioFile: '/audio/vowels/endings/mâak.opus' },
  { thai: 'ออก', phonetic: 'ɔ̀ɔk', endingSound: 'k', audioFile: '/audio/vowels/endings/ɔ̀ɔk.opus' },
  { thai: 'ลูก', phonetic: 'lûuk', endingSound: 'k', audioFile: '/audio/vowels/endings/lûuk.opus' },
  { thai: 'กีก', phonetic: 'kiik', endingSound: 'k', audioFile: '/audio/vowels/endings/kiik.opus' },
  
  // p endings
  { thai: 'ชอบ', phonetic: 'chɔ̂ɔp', endingSound: 'p', audioFile: '/audio/vowels/endings/chɔ̂ɔp.opus' },
  { thai: 'อาบ', phonetic: 'àap', endingSound: 'p', audioFile: '/audio/vowels/endings/àap.opus' },
  { thai: 'ดาบ', phonetic: 'dàap', endingSound: 'p', audioFile: '/audio/vowels/endings/dàap.opus' },
  { thai: 'รูป', phonetic: 'rûup', endingSound: 'p', audioFile: '/audio/vowels/endings/rûup.opus' },
  
  // t endings
  { thai: 'พูด', phonetic: 'phûut', endingSound: 't', audioFile: '/audio/vowels/endings/phûut.opus' },
  { thai: 'แปด', phonetic: 'pɛ̀ɛt', endingSound: 't', audioFile: '/audio/vowels/endings/pɛ̀ɛt.opus' },
  { thai: 'กอด', phonetic: 'kɔ̀ɔt', endingSound: 't', audioFile: '/audio/vowels/endings/kɔ̀ɔt.opus' },
  { thai: 'ขาด', phonetic: 'khàat', endingSound: 't', audioFile: '/audio/vowels/endings/khàat.opus' },
  { thai: 'ฟาด', phonetic: 'fàat', endingSound: 't', audioFile: '/audio/vowels/endings/fàat.opus' },
  { thai: 'กวด', phonetic: 'kùat', endingSound: 't', audioFile: '/audio/vowels/endings/kùat.opus' },
];
