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
