/**
 * Audio Generation Script for Thai Vowel Syllables
 *
 * This script generates audio files for all vowel syllables using the Gemini API.
 * Run with: npx tsx scripts/generateVowelAudio.ts
 *
 * Audio files are saved to: /public/audio/vowels/syllables/
 */

import { GoogleGenAI, Modality } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error('VITE_GEMINI_API_KEY or GEMINI_API_KEY environment variable is not set');
}

const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Output directory for audio files
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'audio', 'vowels', 'syllables');

// Delay between requests to stay within rate limits (10 requests per minute)
const DELAY_BETWEEN_REQUESTS = 7000; // 7 seconds to be safe (allows ~8.5 requests per minute)

// Define all syllables that need audio (9 vowels × 9 consonants = 81 syllables)
const syllables = [
  // aa vowels
  { phonetic: 'kaa', thai: 'กา', filename: 'kaa.wav' },
  { phonetic: 'daa', thai: 'ดา', filename: 'daa.wav' },
  { phonetic: 'taa', thai: 'ตา', filename: 'taa.wav' },
  { phonetic: 'baa', thai: 'บา', filename: 'baa.wav' },
  { phonetic: 'paa', thai: 'ปา', filename: 'paa.wav' },
  { phonetic: 'naa', thai: 'นา', filename: 'naa.wav' },
  { phonetic: 'maa', thai: 'มา', filename: 'maa.wav' },
  { phonetic: 'raa', thai: 'รา', filename: 'raa.wav' },
  { phonetic: 'laa', thai: 'ลา', filename: 'laa.wav' },

  // ii vowels
  { phonetic: 'kii', thai: 'กี', filename: 'kii.wav' },
  { phonetic: 'dii', thai: 'ดี', filename: 'dii.wav' },
  { phonetic: 'tii', thai: 'ตี', filename: 'tii.wav' },
  { phonetic: 'bii', thai: 'บี', filename: 'bii.wav' },
  { phonetic: 'pii', thai: 'ปี', filename: 'pii.wav' },
  { phonetic: 'nii', thai: 'นี', filename: 'nii.wav' },
  { phonetic: 'mii', thai: 'มี', filename: 'mii.wav' },
  { phonetic: 'rii', thai: 'รี', filename: 'rii.wav' },
  { phonetic: 'lii', thai: 'ลี', filename: 'lii.wav' },

  // uu vowels
  { phonetic: 'kuu', thai: 'กู', filename: 'kuu.wav' },
  { phonetic: 'duu', thai: 'ดู', filename: 'duu.wav' },
  { phonetic: 'tuu', thai: 'ตู', filename: 'tuu.wav' },
  { phonetic: 'buu', thai: 'บู', filename: 'buu.wav' },
  { phonetic: 'puu', thai: 'ปู', filename: 'puu.wav' },
  { phonetic: 'nuu', thai: 'นู', filename: 'nuu.wav' },
  { phonetic: 'muu', thai: 'มู', filename: 'muu.wav' },
  { phonetic: 'ruu', thai: 'รู', filename: 'ruu.wav' },
  { phonetic: 'luu', thai: 'ลู', filename: 'luu.wav' },

  // ɯɯ vowels
  { phonetic: 'kɯɯ', thai: 'กือ', filename: 'kɯɯ.wav' },
  { phonetic: 'dɯɯ', thai: 'ดือ', filename: 'dɯɯ.wav' },
  { phonetic: 'tɯɯ', thai: 'ตือ', filename: 'tɯɯ.wav' },
  { phonetic: 'bɯɯ', thai: 'บือ', filename: 'bɯɯ.wav' },
  { phonetic: 'pɯɯ', thai: 'ปือ', filename: 'pɯɯ.wav' },
  { phonetic: 'nɯɯ', thai: 'นือ', filename: 'nɯɯ.wav' },
  { phonetic: 'mɯɯ', thai: 'มือ', filename: 'mɯɯ.wav' },
  { phonetic: 'rɯɯ', thai: 'รือ', filename: 'rɯɯ.wav' },
  { phonetic: 'lɯɯ', thai: 'ลือ', filename: 'lɯɯ.wav' },

  // ee vowels
  { phonetic: 'kee', thai: 'เก', filename: 'kee.wav' },
  { phonetic: 'dee', thai: 'เด', filename: 'dee.wav' },
  { phonetic: 'tee', thai: 'เต', filename: 'tee.wav' },
  { phonetic: 'bee', thai: 'เบ', filename: 'bee.wav' },
  { phonetic: 'pee', thai: 'เป', filename: 'pee.wav' },
  { phonetic: 'nee', thai: 'เน', filename: 'nee.wav' },
  { phonetic: 'mee', thai: 'เม', filename: 'mee.wav' },
  { phonetic: 'ree', thai: 'เร', filename: 'ree.wav' },
  { phonetic: 'lee', thai: 'เล', filename: 'lee.wav' },

  // ɛɛ vowels
  { phonetic: 'kɛɛ', thai: 'แก', filename: 'kɛɛ.wav' },
  { phonetic: 'dɛɛ', thai: 'แด', filename: 'dɛɛ.wav' },
  { phonetic: 'tɛɛ', thai: 'แต', filename: 'tɛɛ.wav' },
  { phonetic: 'bɛɛ', thai: 'แบ', filename: 'bɛɛ.wav' },
  { phonetic: 'pɛɛ', thai: 'แป', filename: 'pɛɛ.wav' },
  { phonetic: 'nɛɛ', thai: 'แน', filename: 'nɛɛ.wav' },
  { phonetic: 'mɛɛ', thai: 'แม', filename: 'mɛɛ.wav' },
  { phonetic: 'rɛɛ', thai: 'แร', filename: 'rɛɛ.wav' },
  { phonetic: 'lɛɛ', thai: 'แล', filename: 'lɛɛ.wav' },

  // oo vowels
  { phonetic: 'koo', thai: 'โก', filename: 'koo.wav' },
  { phonetic: 'doo', thai: 'โด', filename: 'doo.wav' },
  { phonetic: 'too', thai: 'โต', filename: 'too.wav' },
  { phonetic: 'boo', thai: 'โบ', filename: 'boo.wav' },
  { phonetic: 'poo', thai: 'โป', filename: 'poo.wav' },
  { phonetic: 'noo', thai: 'โน', filename: 'noo.wav' },
  { phonetic: 'moo', thai: 'โม', filename: 'moo.wav' },
  { phonetic: 'roo', thai: 'โร', filename: 'roo.wav' },
  { phonetic: 'loo', thai: 'โล', filename: 'loo.wav' },

  // ɔɔ vowels
  { phonetic: 'kɔɔ', thai: 'กอ', filename: 'kɔɔ.wav' },
  { phonetic: 'dɔɔ', thai: 'ดอ', filename: 'dɔɔ.wav' },
  { phonetic: 'tɔɔ', thai: 'ตอ', filename: 'tɔɔ.wav' },
  { phonetic: 'bɔɔ', thai: 'บอ', filename: 'bɔɔ.wav' },
  { phonetic: 'pɔɔ', thai: 'ปอ', filename: 'pɔɔ.wav' },
  { phonetic: 'nɔɔ', thai: 'นอ', filename: 'nɔɔ.wav' },
  { phonetic: 'mɔɔ', thai: 'มอ', filename: 'mɔɔ.wav' },
  { phonetic: 'rɔɔ', thai: 'รอ', filename: 'rɔɔ.wav' },
  { phonetic: 'lɔɔ', thai: 'ลอ', filename: 'lɔɔ.wav' },

  // əə vowels
  { phonetic: 'kəə', thai: 'เกอ', filename: 'kəə.wav' },
  { phonetic: 'dəə', thai: 'เดอ', filename: 'dəə.wav' },
  { phonetic: 'təə', thai: 'เตอ', filename: 'təə.wav' },
  { phonetic: 'bəə', thai: 'เบอ', filename: 'bəə.wav' },
  { phonetic: 'pəə', thai: 'เปอ', filename: 'pəə.wav' },
  { phonetic: 'nəə', thai: 'เนอ', filename: 'nəə.wav' },
  { phonetic: 'məə', thai: 'เมอ', filename: 'məə.wav' },
  { phonetic: 'rəə', thai: 'เรอ', filename: 'rəə.wav' },
  { phonetic: 'ləə', thai: 'เลอ', filename: 'ləə.wav' },
];

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
 * Generate audio for a single vowel syllable with retry logic
 */
async function generateSyllableAudio(
  syllable: { thai: string; phonetic: string; filename: string },
  maxRetries: number = 3
): Promise<void> {
  let retries = 0;
  
  while (retries <= maxRetries) {
    try {
      console.log(`Generating audio for ${syllable.thai} (${syllable.phonetic})...`);

      const result = await genAI.models.generateContent({
        model: 'gemini-2.5-pro-preview-tts',
        contents: [{ parts: [{ text: syllable.thai }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
          }
        }
      });

      // Extract audio from response
      const base64Audio = result.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      const finishReason = result.candidates?.[0]?.finishReason;

      if (!base64Audio) {
        // Try alternative prompt format with spacing
        console.warn(`⚠️  No audio generated for ${syllable.thai} (${syllable.phonetic}) - finishReason: ${finishReason}`);
        console.log(`Trying alternative format...`);
        
        const altResult = await genAI.models.generateContent({
          model: 'gemini-2.5-pro-preview-tts',
          contents: [{ parts: [{ text: `${syllable.thai} ${syllable.thai}` }] }],
          config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
              voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
            }
          }
        });
        
        const altBase64Audio = altResult.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        
        if (!altBase64Audio) {
          console.error(`❌ Still no audio for ${syllable.thai} after retry`);
          return;
        }
        
        // Save the alternative audio
        const filePath = path.join(OUTPUT_DIR, syllable.filename);
        const pcmBuffer = Buffer.from(altBase64Audio, 'base64');
        writeWavFile(filePath, pcmBuffer);
        console.log(`✓ Saved ${syllable.filename} (using alternative format)`);
        return;
      }

      // Save audio file as WAV
      const filePath = path.join(OUTPUT_DIR, syllable.filename);
      const pcmBuffer = Buffer.from(base64Audio, 'base64');
      writeWavFile(filePath, pcmBuffer);

      console.log(`✓ Saved ${syllable.filename}`);
      return; // Success, exit the retry loop

    } catch (error: any) {
      // Check if it's a rate limit error
      if (error.status === 429 && retries < maxRetries) {
        const retryDelay = error.error?.details?.find((d: any) => d['@type']?.includes('RetryInfo'))?.retryDelay;
        const waitTime = retryDelay ? parseInt(retryDelay) * 1000 : 60000; // Default to 60s if no retry info
        
        console.log(`⏳ Rate limit hit. Waiting ${waitTime / 1000} seconds before retry ${retries + 1}/${maxRetries}...`);
        await sleep(waitTime);
        retries++;
      } else {
        console.error(`❌ Error generating audio for ${syllable.thai}:`, error.message || error);
        return; // Give up on this syllable
      }
    }
  }
  
  console.error(`❌ Failed to generate audio for ${syllable.thai} after ${maxRetries} retries`);
}

/**
 * Check if audio file already exists
 */
function audioFileExists(filename: string): boolean {
  const filePath = path.join(OUTPUT_DIR, filename);
  return fs.existsSync(filePath);
}

/**
 * Main execution
 */
async function main() {
  console.log('=== Thai Vowel Syllable Audio Generation Script ===\n');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created directory: ${OUTPUT_DIR}\n`);
  }

  // Filter out syllables that already have audio files
  const syllablesToGenerate = syllables.filter(s => !audioFileExists(s.filename));

  console.log(`Total syllables: ${syllables.length}`);
  console.log(`Already generated: ${syllables.length - syllablesToGenerate.length}`);
  console.log(`To generate: ${syllablesToGenerate.length}\n`);

  if (syllablesToGenerate.length === 0) {
    console.log('All vowel syllable audio files already exist!');
  } else {
    console.log('=== Generating Vowel Syllable Audio ===\n');

    const estimatedTime = (syllablesToGenerate.length * DELAY_BETWEEN_REQUESTS) / 1000 / 60;
    console.log(`Estimated time: ${estimatedTime.toFixed(1)} minutes\n`);

    // Generate audio for each syllable
    for (let i = 0; i < syllablesToGenerate.length; i++) {
      const syllable = syllablesToGenerate[i];
      console.log(`[${i + 1}/${syllablesToGenerate.length}]`);
      await generateSyllableAudio(syllable);
      // Add delay between requests to respect rate limits
      if (i < syllablesToGenerate.length - 1) {
        await sleep(DELAY_BETWEEN_REQUESTS);
      }
    }
  }

  console.log('\n=== Audio Generation Complete ===');
  console.log(`Audio files saved to: ${OUTPUT_DIR}`);

  // Show summary
  const finalGenerated = syllables.filter(s => audioFileExists(s.filename)).length;
  const finalMissing = syllables.length - finalGenerated;
  console.log(`\nSummary:`);
  console.log(`✓ Generated: ${finalGenerated}/${syllables.length}`);
  if (finalMissing > 0) {
    console.log(`✗ Missing: ${finalMissing}`);
    console.log(`\nRun the script again to generate the missing files.`);
  }
}

// Run the script
main().catch(console.error);
