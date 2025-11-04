/**
 * Audio Generation Script for Thai Reading Lessons
 *
 * This script generates audio files for all Thai characters using the Gemini API.
 * Run with: npx tsx scripts/generateReadingAudio.ts
 *
 * Audio files are saved to: /public/audio/characters/
 */

import { GoogleGenAI, Modality } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';
import {
  ALL_HIGH_CONSONANTS,
  ALL_MID_CONSONANTS,
  ALL_LOW_CONSONANTS,
  type ThaiConsonant
} from '../data/reading/characters';

// Load environment variables from .env file
config();

const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error('VITE_GEMINI_API_KEY or GEMINI_API_KEY environment variable is not set');
}

const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Output directory for audio files
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'audio', 'characters');

// Small delay between requests to avoid overwhelming the API
const DELAY_BETWEEN_REQUESTS = 500; // 0.5 seconds

/**
 * Sleep for specified milliseconds
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Write WAV file header and PCM data
 * Gemini TTS returns 24kHz, 16-bit, mono PCM audio
 */
function writeWavFile(filename: string, pcmData: Buffer): void {
  const channels = 1;
  const sampleRate = 24000;
  const bitsPerSample = 16;
  
  const byteRate = sampleRate * channels * (bitsPerSample / 8);
  const blockAlign = channels * (bitsPerSample / 8);
  const dataSize = pcmData.length;
  const fileSize = 36 + dataSize;
  
  // Create WAV header (44 bytes)
  const header = Buffer.alloc(44);
  
  // RIFF chunk descriptor
  header.write('RIFF', 0);
  header.writeUInt32LE(fileSize, 4);
  header.write('WAVE', 8);
  
  // fmt sub-chunk
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
  header.writeUInt16LE(1, 20); // AudioFormat (1 for PCM)
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  
  // data sub-chunk
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);
  
  // Write header and PCM data to file
  const wavData = Buffer.concat([header, pcmData]);
  fs.writeFileSync(filename, wavData);
}

/**
 * Generate audio for a single character name pronunciation
 */
async function generateCharacterAudio(consonant: ThaiConsonant): Promise<void> {
  try {
    console.log(`Generating audio for ${consonant.character} (${consonant.name})...`);

    // Extract the Thai phonetic reading and word from the nameWord field
    // For example: "khɔ̌ɔ khày" with nameWord "ไข่" means we want to say the character + the word
    // The pattern for Thai character names is: [character sound] + [first letter of example word] + [example word]
    // E.g., ข ไข่ is pronounced as "kɔ̌ɔ khài" (kɔ̌ɔ from the character, khài from ไข่)
    
    // Build a prompt that uses Thai script for better pronunciation
    const prompt = `${consonant.character} ${consonant.nameWord}`;
    
    const result = await genAI.models.generateContent({
      model: 'gemini-2.5-flash-preview-tts',
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
        }
      }
    });

    // Extract audio from response
    const base64Audio = result.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!base64Audio) {
      console.warn(`⚠️  No audio generated for ${consonant.character} (${consonant.name})`);
      return;
    }

    // Save audio file as WAV (Gemini returns PCM data)
    const fileName = path.basename(consonant.audioFile).replace('.mp3', '.wav');
    const filePath = path.join(OUTPUT_DIR, fileName);

    const pcmBuffer = Buffer.from(base64Audio, 'base64');
    writeWavFile(filePath, pcmBuffer);

    console.log(`✓ Saved ${fileName}`);

  } catch (error) {
    console.error(`Error generating audio for ${consonant.character}:`, error);
  }
}

/**
 * Generate audio for special pronunciation examples (e.g., ŋ sounds)
 */
async function generateSpecialPronunciationAudio(
  text: string,
  fileName: string
): Promise<void> {
  try {
    console.log(`Generating special pronunciation audio: ${fileName}...`);

    const prompt = `Say in Thai: ${text}`;
    
    const result = await genAI.models.generateContent({
      model: 'gemini-2.5-flash-preview-tts',
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
        }
      }
    });

    const base64Audio = result.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!base64Audio) {
      console.warn(`No audio generated for ${text}`);
      return;
    }

    const filePath = path.join(OUTPUT_DIR, fileName.replace('.mp3', '.wav'));
    const pcmBuffer = Buffer.from(base64Audio, 'base64');
    writeWavFile(filePath, pcmBuffer);

    console.log(`✓ Saved ${fileName}`);

  } catch (error) {
    console.error(`Error generating audio for ${text}:`, error);
  }
}

/**
 * Generate aspirated vs non-aspirated comparison audio
 */
async function generateAspirationComparisons(): Promise<void> {
  const comparisons = [
    { text: 'กา', file: 'kaa.mp3' },
    { text: 'ข้า', file: 'khaa.mp3' },
    { text: 'ตา', file: 'taa.mp3' },
    { text: 'ท้า', file: 'thaa.mp3' },
    { text: 'จา', file: 'caa.mp3' },
    { text: 'ช้า', file: 'chaa.mp3' },
    { text: 'ปา', file: 'paa.mp3' },
    { text: 'ผ้า', file: 'phaa.mp3' },
  ];

  console.log('\n=== Generating Aspiration Comparison Audio ===\n');

  for (let i = 0; i < comparisons.length; i++) {
    const { text, file } = comparisons[i];
    await generateSpecialPronunciationAudio(text, file);
    // Add delay to avoid rate limiting
    if (i < comparisons.length - 1) {
      console.log(`Waiting ${DELAY_BETWEEN_REQUESTS / 1000} seconds...\n`);
      await sleep(DELAY_BETWEEN_REQUESTS);
    }
  }
}

/**
 * Generate ŋ pronunciation examples
 */
async function generateNgPronunciations(): Promise<void> {
  const ngExamples = [
    { text: 'งา', file: 'ŋaa.mp3' },
    { text: 'งี', file: 'ŋii.mp3' },
    { text: 'งู', file: 'ŋuu.mp3' },
    { text: 'โงะ', file: 'ŋoo.mp3' },
  ];

  console.log('\n=== Generating ŋ Pronunciation Examples ===\n');

  for (let i = 0; i < ngExamples.length; i++) {
    const { text, file } = ngExamples[i];
    await generateSpecialPronunciationAudio(text, file);
    if (i < ngExamples.length - 1) {
      console.log(`Waiting ${DELAY_BETWEEN_REQUESTS / 1000} seconds...\n`);
      await sleep(DELAY_BETWEEN_REQUESTS);
    }
  }
}

/**
 * Check if audio file already exists
 */
function audioFileExists(consonant: ThaiConsonant): boolean {
  const fileName = path.basename(consonant.audioFile).replace('.mp3', '.wav');
  const filePath = path.join(OUTPUT_DIR, fileName);
  return fs.existsSync(filePath);
}

/**
 * Main execution
 */
async function main() {
  console.log('=== Thai Reading Audio Generation Script ===\n');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created directory: ${OUTPUT_DIR}\n`);
  }

  // Collect all consonants
  const allConsonants = [
    ...ALL_HIGH_CONSONANTS,
    ...ALL_MID_CONSONANTS,
    ...ALL_LOW_CONSONANTS
  ];

  // Filter out consonants that already have audio files
  const consonantsToGenerate = allConsonants.filter(c => !audioFileExists(c));

  console.log(`Total characters: ${allConsonants.length}`);
  console.log(`Already generated: ${allConsonants.length - consonantsToGenerate.length}`);
  console.log(`To generate: ${consonantsToGenerate.length}\n`);
  
  if (consonantsToGenerate.length === 0) {
    console.log('All character audio files already exist!');
  } else {
    console.log('=== Generating Character Name Audio ===\n');
    
    const estimatedTime = (consonantsToGenerate.length * DELAY_BETWEEN_REQUESTS) / 1000 / 60;
    console.log(`Estimated time: ${estimatedTime.toFixed(1)} minutes\n`);

    // Generate audio for each character
    for (let i = 0; i < consonantsToGenerate.length; i++) {
      const consonant = consonantsToGenerate[i];
      console.log(`[${i + 1}/${consonantsToGenerate.length}]`);
      await generateCharacterAudio(consonant);
      // Add delay between requests to respect rate limits
      if (i < consonantsToGenerate.length - 1) {
        await sleep(DELAY_BETWEEN_REQUESTS);
      }
    }
  }

  console.log('\n=== Audio Generation Complete ===');
  console.log(`Audio files saved to: ${OUTPUT_DIR}`);
  
  // Show summary
  const finalGenerated = allConsonants.filter(c => audioFileExists(c)).length;
  const finalMissing = allConsonants.length - finalGenerated;
  console.log(`\nSummary:`);
  console.log(`✓ Generated: ${finalGenerated}/${allConsonants.length}`);
  if (finalMissing > 0) {
    console.log(`✗ Missing: ${finalMissing}`);
    console.log(`\nRun the script again to generate the missing files.`);
  }
}

// Run the script
main().catch(console.error);
