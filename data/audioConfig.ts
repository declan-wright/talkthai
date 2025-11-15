/**
 * Unified Audio Generation Configuration for Thai Learning App
 *
 * This file contains all audio files that need to be generated for the Thai reading lessons.
 * The unified script will use this configuration to generate any missing audio files.
 *
 * Add new audio requirements here and run the unified script to generate them.
 */

import {
  ALL_HIGH_CONSONANTS,
  ALL_MID_CONSONANTS,
  ALL_LOW_CONSONANTS,
  LONG_VOWELS,
  OTHER_LONG_VOWELS,
  VOWEL_PLACEMENT_EXAMPLES,
  LIVE_ENDING_CONSONANTS,
  DEAD_ENDING_CONSONANTS,
  ENDING_K_EXAMPLES,
  ENDING_P_EXAMPLES,
  ENDING_T_EXAMPLES,
  INTRO_EXAMPLES,
  ENDING_CONSONANT_PRACTICE_WORDS
} from '../data/reading/characters';

export type AudioCategory = 'characters' | 'vowel-syllables' | 'vowel-placement' | 'ending-consonants' | 'special-pronunciation';

export interface AudioRequirement {
  id: string;
  category: AudioCategory;
  subdirectory?: string; // For organizing within categories
  filename: string;
  text: string; // The Thai text to speak
  voice?: 'alloy' | 'ash' | 'ballad' | 'coral' | 'echo' | 'fable' | 'nova' | 'onyx' | 'sage' | 'shimmer';
  instructions?: string; // Special instructions for the TTS model
  priority: 'high' | 'medium' | 'low'; // High priority items get generated first
}

// =============================================================================
// CHARACTER AUDIO FILES
// =============================================================================
export const CHARACTER_AUDIO: AudioRequirement[] = [
  ...ALL_HIGH_CONSONANTS.map(consonant => ({
    id: `char-${consonant.character}-${consonant.phonetic}`,
    category: 'characters' as AudioCategory,
    filename: consonant.audioFile.split('/').pop()!,
    text: `${consonant.character} ${consonant.nameWord}`,
    voice: 'sage' as const,
    priority: 'high' as const
  })),
  ...ALL_MID_CONSONANTS.map(consonant => ({
    id: `char-${consonant.character}-${consonant.phonetic}`,
    category: 'characters' as AudioCategory,
    filename: consonant.audioFile.split('/').pop()!,
    text: `${consonant.character} ${consonant.nameWord}`,
    voice: 'sage' as const,
    priority: 'high' as const
  })),
  ...ALL_LOW_CONSONANTS.map(consonant => ({
    id: `char-${consonant.character}-${consonant.phonetic}`,
    category: 'characters' as AudioCategory,
    filename: consonant.audioFile.split('/').pop()!,
    text: `${consonant.character} ${consonant.nameWord}`,
    voice: 'sage' as const,
    priority: 'high' as const
  }))
];

// =============================================================================
// VOWEL PLACEMENT AUDIO FILES
// =============================================================================
export const VOWEL_PLACEMENT_AUDIO: AudioRequirement[] = VOWEL_PLACEMENT_EXAMPLES.map(example => ({
  id: `placement-${example.thai}`,
  category: 'vowel-placement' as AudioCategory,
  filename: example.audioFile.split('/').pop()!,
  text: example.thai,
  voice: 'sage' as const,
  priority: 'high' as const
}));

// =============================================================================
// VOWEL SYLLABLES AUDIO FILES
// =============================================================================
export const VOWEL_SYLLABLES_AUDIO: AudioRequirement[] = [
  // Long vowels with practice syllables
  ...LONG_VOWELS.flatMap(vowel =>
    vowel.practiceSyllables.map(syllable => ({
      id: `syllable-${syllable.syllable}`,
      category: 'vowel-syllables' as AudioCategory,
      subdirectory: 'syllables',
      filename: syllable.audioFile.split('/').pop()!,
      text: syllable.syllable,
      voice: 'sage' as const,
      priority: 'medium' as const
    }))
  ),
  // Other long vowels with practice syllables
  ...OTHER_LONG_VOWELS.flatMap(vowel =>
    vowel.practiceSyllables.map(syllable => ({
      id: `syllable-${syllable.syllable}`,
      category: 'vowel-syllables' as AudioCategory,
      subdirectory: 'syllables',
      filename: syllable.audioFile.split('/').pop()!,
      text: syllable.syllable,
      voice: 'sage' as const,
      priority: 'medium' as const
    }))
  ),
];

// =============================================================================
// ENDING CONSONANTS AUDIO FILES
// =============================================================================
export const ENDING_CONSONANTS_AUDIO: AudioRequirement[] = [
  // Live ending consonants
  ...LIVE_ENDING_CONSONANTS.map(example => ({
    id: `ending-live-${example.thai}`,
    category: 'ending-consonants' as AudioCategory,
    subdirectory: 'endings',
    filename: example.audioFile.split('/').pop()!,
    text: example.thai,
    voice: 'sage' as const,
    priority: 'medium' as const
  })),
  // Dead ending consonants
  ...DEAD_ENDING_CONSONANTS.map(example => ({
    id: `ending-dead-${example.thai}`,
    category: 'ending-consonants' as AudioCategory,
    subdirectory: 'endings',
    filename: example.audioFile.split('/').pop()!,
    text: example.thai,
    voice: 'sage' as const,
    priority: 'medium' as const
  })),
  // K ending examples
  ...ENDING_K_EXAMPLES.map(example => ({
    id: `ending-k-${example.thai}`,
    category: 'ending-consonants' as AudioCategory,
    subdirectory: 'endings',
    filename: example.audioFile.split('/').pop()!,
    text: example.thai,
    voice: 'sage' as const,
    priority: 'medium' as const
  })),
  // P ending examples
  ...ENDING_P_EXAMPLES.map(example => ({
    id: `ending-p-${example.thai}`,
    category: 'ending-consonants' as AudioCategory,
    subdirectory: 'endings',
    filename: example.audioFile.split('/').pop()!,
    text: example.thai,
    voice: 'sage' as const,
    priority: 'medium' as const
  })),
  // T ending examples
  ...ENDING_T_EXAMPLES.map(example => ({
    id: `ending-t-${example.thai}`,
    category: 'ending-consonants' as AudioCategory,
    subdirectory: 'endings',
    filename: example.audioFile.split('/').pop()!,
    text: example.thai,
    voice: 'sage' as const,
    priority: 'medium' as const
  })),
  // Intro examples
  ...INTRO_EXAMPLES.map(example => ({
    id: `ending-intro-${example.thai}`,
    category: 'ending-consonants' as AudioCategory,
    subdirectory: 'endings',
    filename: example.audioFile.split('/').pop()!,
    text: example.thai,
    voice: 'sage' as const,
    priority: 'medium' as const
  })),
  // Practice words
  ...ENDING_CONSONANT_PRACTICE_WORDS.map(word => ({
    id: `ending-practice-${word.thai}`,
    category: 'ending-consonants' as AudioCategory,
    subdirectory: 'endings',
    filename: word.audioFile.split('/').pop()!,
    text: word.thai,
    voice: 'sage' as const,
    priority: 'medium' as const
  }))
];

// =============================================================================
// SPECIAL PRONUNCIATION AUDIO FILES
// =============================================================================
export const SPECIAL_PRONUNCIATION_AUDIO: AudioRequirement[] = [
  // Aspirated vs non-aspirated comparisons
  { id: 'asp-khaa', category: 'characters' as AudioCategory, filename: 'khaa.wav', text: 'ข้า', voice: 'sage' as const, priority: 'medium' as const },
  { id: 'asp-kaa', category: 'characters' as AudioCategory, filename: 'kaa.wav', text: 'กา', voice: 'sage' as const, priority: 'medium' as const },
  { id: 'asp-thaa', category: 'characters' as AudioCategory, filename: 'thaa.wav', text: 'ท้า', voice: 'sage' as const, priority: 'medium' as const },
  { id: 'asp-taa', category: 'characters' as AudioCategory, filename: 'taa.wav', text: 'ตา', voice: 'sage' as const, priority: 'medium' as const },
  { id: 'asp-chaa', category: 'characters' as AudioCategory, filename: 'chaa.wav', text: 'ช้า', voice: 'sage' as const, priority: 'medium' as const },
  { id: 'asp-caa', category: 'characters' as AudioCategory, filename: 'caa.wav', text: 'จา', voice: 'sage' as const, priority: 'medium' as const },
  { id: 'asp-phaa', category: 'characters' as AudioCategory, filename: 'phaa.wav', text: 'ผ้า', voice: 'sage' as const, priority: 'medium' as const },
  { id: 'asp-paa', category: 'characters' as AudioCategory, filename: 'paa.wav', text: 'ปา', voice: 'sage' as const, priority: 'medium' as const },

  // ŋ pronunciation examples
  { id: 'ng-ŋaa', category: 'characters' as AudioCategory, filename: 'ŋaa.wav', text: 'งา', voice: 'sage' as const, priority: 'medium' as const },
  { id: 'ng-ŋii', category: 'characters' as AudioCategory, filename: 'ŋii.wav', text: 'งี', voice: 'sage' as const, priority: 'medium' as const },
  { id: 'ng-ŋuu', category: 'characters' as AudioCategory, filename: 'ŋuu.wav', text: 'งู', voice: 'sage' as const, priority: 'medium' as const },
  { id: 'ng-ŋoo', category: 'characters' as AudioCategory, filename: 'ŋoo.wav', text: 'โงะ', voice: 'sage' as const, priority: 'medium' as const },
];

// =============================================================================
// ALL AUDIO REQUIREMENTS
// =============================================================================
export const ALL_AUDIO_REQUIREMENTS: AudioRequirement[] = [
  ...CHARACTER_AUDIO,
  ...VOWEL_PLACEMENT_AUDIO,
  ...VOWEL_SYLLABLES_AUDIO,
  ...ENDING_CONSONANTS_AUDIO,
  ...SPECIAL_PRONUNCIATION_AUDIO,
];

// Helper functions
export function getAudioRequirementsByCategory(category: AudioCategory): AudioRequirement[] {
  return ALL_AUDIO_REQUIREMENTS.filter(req => req.category === category);
}

export function getAudioRequirementsByPriority(priority: 'high' | 'medium' | 'low'): AudioRequirement[] {
  return ALL_AUDIO_REQUIREMENTS.filter(req => req.priority === priority);
}

export function getAudioRequirement(id: string): AudioRequirement | undefined {
  return ALL_AUDIO_REQUIREMENTS.find(req => req.id === id);
}

// Statistics
export const AUDIO_STATS = {
  total: ALL_AUDIO_REQUIREMENTS.length,
  byCategory: {
    characters: CHARACTER_AUDIO.length + SPECIAL_PRONUNCIATION_AUDIO.length,
    'vowel-placement': VOWEL_PLACEMENT_AUDIO.length,
    'vowel-syllables': VOWEL_SYLLABLES_AUDIO.length,
    'ending-consonants': ENDING_CONSONANTS_AUDIO.length,
  },
  byPriority: {
    high: getAudioRequirementsByPriority('high').length,
    medium: getAudioRequirementsByPriority('medium').length,
    low: getAudioRequirementsByPriority('low').length,
  }
};