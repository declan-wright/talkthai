/**
 * Audio Generation Script for Thai Ending Consonants Words
 *
 * This script generates audio files for all ending consonant examples using the Gemini API.
 * Run with: npx tsx scripts/generateEndingConsonantsAudio.ts
 *
 * Audio files are saved to: /public/audio/vowels/endings/
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
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'audio', 'vowels', 'endings');

// Delay between requests to stay within rate limits (10 requests per minute)
const DELAY_BETWEEN_REQUESTS = 7000; // 7 seconds to be safe (allows ~8.5 requests per minute)

// Define all words that need audio
const endingConsonantWords = [
  // Intro Examples (Page 1)
  { phonetic: 'kiik', thai: 'กีก', filename: 'kiik.wav' },
  { phonetic: 'dàap', thai: 'ดาบ', filename: 'dàap.wav' },
  { phonetic: 'fàat', thai: 'ฟาด', filename: 'fàat.wav' },
  { phonetic: 'looŋ', thai: 'โลง', filename: 'looŋ.wav' },
  { phonetic: 'yaan', thai: 'ยาน', filename: 'yaan.wav' },
  { phonetic: 'thiim', thai: 'ทีม', filename: 'thiim.wav' },
  { phonetic: 'kaaw', thai: 'กาว', filename: 'kaaw.wav' },

  // Live Ending Consonants (Page 2)
  { phonetic: 'nɔɔn', thai: 'นอน', filename: 'nɔɔn.wav', meaning: 'Sleep' },
  { phonetic: 'mooŋ', thai: 'โมง', filename: 'mooŋ.wav', meaning: 'Hour' },
  { phonetic: 'sǎam', thai: 'สาม', filename: 'sǎam.wav', meaning: 'Three' },
  { phonetic: 'ŋâay', thai: 'ง่าย', filename: 'ŋâay.wav', meaning: 'Easy' },
  { phonetic: 'yaaw', thai: 'ยาว', filename: 'yaaw.wav', meaning: 'Long' },

  // Dead Ending Consonants (Page 3)
  { phonetic: 'yâak', thai: 'ยาก', filename: 'yâak.wav', meaning: 'Difficult' },
  { phonetic: 'chɔ̂ɔp', thai: 'ชอบ', filename: 'chɔ̂ɔp.wav', meaning: 'Like' },
  { phonetic: 'phûut', thai: 'พูด', filename: 'phûut.wav', meaning: 'Speak' },

  // Ending K Examples (Page 4)
  { phonetic: 'mâak', thai: 'มาก', filename: 'mâak.wav' },
  { phonetic: 'ɔ̀ɔk', thai: 'ออก', filename: 'ɔ̀ɔk.wav' },
  { phonetic: 'lûuk', thai: 'ลูก', filename: 'lûuk.wav' },

  // Ending P Examples (Page 5)
  { phonetic: 'àap', thai: 'อาบ', filename: 'àap.wav' },
  { phonetic: 'rûup', thai: 'รูป', filename: 'rûup.wav' },

  // Ending T Examples (Page 6)
  { phonetic: 'pɛ̀ɛt', thai: 'แปด', filename: 'pɛ̀ɛt.wav' },
  { phonetic: 'kɔ̀ɔt', thai: 'กอด', filename: 'kɔ̀ɔt.wav' },
  { phonetic: 'khàat', thai: 'ขาด', filename: 'khàat.wav' },
  
  // Additional Practice Words
  { phonetic: 'kəən', thai: 'เกิน', filename: 'kəən.wav' },
  { phonetic: 'khəəy', thai: 'เคย', filename: 'khəəy.wav' },
  { phonetic: 'kùat', thai: 'กวด', filename: 'kùat.wav' },
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
 * Generate audio for a single word with retry logic
 */
async function generateWordAudio(
  word: { thai: string; phonetic: string; filename: string; meaning?: string },
  maxRetries: number = 3
): Promise<void> {
  let retries = 0;
  
  while (retries <= maxRetries) {
    try {
      const meaningText = word.meaning ? ` (${word.meaning})` : '';
      console.log(`Generating audio for ${word.thai} (${word.phonetic})${meaningText}...`);

      const result = await genAI.models.generateContent({
        model: 'gemini-2.5-pro-preview-tts',
        contents: [{ parts: [{ text: word.thai }] }],
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
        console.warn(`⚠️  No audio generated for ${word.thai} (${word.phonetic}) - finishReason: ${finishReason}`);
        console.log(`Trying alternative format...`);
        
        const altResult = await genAI.models.generateContent({
          model: 'gemini-2.5-pro-preview-tts',
          contents: [{ parts: [{ text: `${word.thai} ${word.thai}` }] }],
          config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
              voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
            }
          }
        });
        
        const altBase64Audio = altResult.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        
        if (!altBase64Audio) {
          console.error(`❌ Still no audio for ${word.thai} after retry`);
          return;
        }
        
        // Save the alternative audio
        const filePath = path.join(OUTPUT_DIR, word.filename);
        const pcmBuffer = Buffer.from(altBase64Audio, 'base64');
        writeWavFile(filePath, pcmBuffer);
        console.log(`✓ Saved ${word.filename} (using alternative format)`);
        return;
      }

      // Save audio file as WAV
      const filePath = path.join(OUTPUT_DIR, word.filename);
      const pcmBuffer = Buffer.from(base64Audio, 'base64');
      writeWavFile(filePath, pcmBuffer);

      console.log(`✓ Saved ${word.filename}`);
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
        console.error(`❌ Error generating audio for ${word.thai}:`, error.message || error);
        return; // Give up on this word
      }
    }
  }
  
  console.error(`❌ Failed to generate audio for ${word.thai} after ${maxRetries} retries`);
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
  console.log('=== Thai Ending Consonants Audio Generation Script ===\n');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created directory: ${OUTPUT_DIR}\n`);
  }

  // Filter out words that already have audio files
  const wordsToGenerate = endingConsonantWords.filter(w => !audioFileExists(w.filename));

  console.log(`Total words: ${endingConsonantWords.length}`);
  console.log(`Already generated: ${endingConsonantWords.length - wordsToGenerate.length}`);
  console.log(`To generate: ${wordsToGenerate.length}\n`);

  if (wordsToGenerate.length === 0) {
    console.log('All ending consonant audio files already exist!');
  } else {
    console.log('=== Generating Ending Consonant Audio ===\n');

    const estimatedTime = (wordsToGenerate.length * DELAY_BETWEEN_REQUESTS) / 1000 / 60;
    console.log(`Estimated time: ${estimatedTime.toFixed(1)} minutes\n`);

    // Generate audio for each word
    for (let i = 0; i < wordsToGenerate.length; i++) {
      const word = wordsToGenerate[i];
      console.log(`[${i + 1}/${wordsToGenerate.length}]`);
      await generateWordAudio(word);
      // Add delay between requests to respect rate limits
      if (i < wordsToGenerate.length - 1) {
        await sleep(DELAY_BETWEEN_REQUESTS);
      }
    }
  }

  console.log('\n=== Audio Generation Complete ===');
  console.log(`Audio files saved to: ${OUTPUT_DIR}`);

  // Show summary
  const finalGenerated = endingConsonantWords.filter(w => audioFileExists(w.filename)).length;
  const finalMissing = endingConsonantWords.length - finalGenerated;
  console.log(`\nSummary:`);
  console.log(`✓ Generated: ${finalGenerated}/${endingConsonantWords.length}`);
  if (finalMissing > 0) {
    console.log(`✗ Missing: ${finalMissing}`);
    console.log(`\nRun the script again to generate the missing files.`);
  }
}

// Run the script
main().catch(console.error);

