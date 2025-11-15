#!/usr/bin/env tsx

/**
 * Unified Thai Audio Generation Script using OpenAI TTS
 *
 * This script replaces the three separate audio generation scripts with a single,
 * comprehensive solution that uses OpenAI's text-to-speech API to generate all
 * required audio files for the Thai learning application.
 *
 * Features:
 * - Uses a centralized configuration file (data/audioConfig.ts)
 * - Automatically detects which files need to be generated
 * - Supports resuming interrupted generation sessions
 * - Provides detailed progress reporting and statistics
 * - Handles rate limiting gracefully with exponential backoff
 * - Supports multiple OpenAI voices for variety
 * - Organizes output by category for better file management
 *
 * Usage: npx tsx scripts/generateAllAudio.ts
 * Options:
 *   --category <name>    Generate only specific category (characters, vowels, endings, etc.)
 *   --priority <level>   Generate only specific priority (high, medium, low)
 *   --force             Regenerate all files even if they exist
 *   --voice <name>      Override default voice (alloy, ash, ballad, coral, echo, fable, nova, onyx, sage, shimmer)
 *   --dry-run           Show what would be generated without actually generating
 *   --stats             Show current audio generation statistics
 */

import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';
import {
  ALL_AUDIO_REQUIREMENTS,
  AUDIO_STATS,
  type AudioRequirement,
  type AudioCategory,
  getAudioRequirementsByCategory,
  getAudioRequirementsByPriority
} from '../data/audioConfig';

// Load environment variables
config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error('❌ OPENAI_API_KEY or VITE_OPENAI_API_KEY environment variable is not set');
  console.log('Please set your OpenAI API key and run again.');
  process.exit(1);
}

// Parse command line arguments
interface CommandLineOptions {
  category?: AudioCategory;
  priority?: 'high' | 'medium' | 'low';
  force?: boolean;
  voice?: string;
  dryRun?: boolean;
  stats?: boolean;
}

function parseArgs(): CommandLineOptions {
  const args = process.argv.slice(2);
  const options: CommandLineOptions = {};

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--category':
        options.category = args[++i] as AudioCategory;
        break;
      case '--priority':
        options.priority = args[++i] as 'high' | 'medium' | 'low';
        break;
      case '--force':
        options.force = true;
        break;
      case '--voice':
        options.voice = args[++i];
        break;
      case '--dry-run':
        options.dryRun = true;
        break;
      case '--stats':
        options.stats = true;
        break;
      case '--help':
      case '-h':
        console.log(`
Unified Thai Audio Generation Script

Usage: npx tsx scripts/generateAllAudio.ts [options]

Options:
  --category <name>    Generate only specific category
                       Available: characters, vowel-placement, vowel-syllables, ending-consonants
  --priority <level>   Generate only specific priority level
                       Available: high, medium, low
  --force             Regenerate all files even if they exist
  --voice <name>      Override default voice
                       Available: alloy, ash, ballad, coral, echo, fable, nova, onyx, sage, shimmer
  --dry-run           Show what would be generated without actually generating
  --stats             Show current audio generation statistics
  --help, -h          Show this help message

Examples:
  npx tsx scripts/generateAllAudio.ts --category characters --priority high
  npx tsx scripts/generateAllAudio.ts --voice nova --dry-run
  npx tsx scripts/generateAllAudio.ts --stats
  npx tsx scripts/generateAllAudio.ts --force --priority medium
        `);
        process.exit(0);
    }
  }

  return options;
}

const options = parseArgs();

// Initialize OpenAI client
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// Configuration
const BASE_AUDIO_DIR = path.join(process.cwd(), 'public', 'audio');
const DELAY_BETWEEN_REQUESTS = 1000; // 1 second base delay (OpenAI is more generous than Gemini)
const MAX_RETRIES = 3;
const RETRY_DELAY_MULTIPLIER = 2;

// Valid OpenAI voices
const VALID_VOICES = ['alloy', 'ash', 'ballad', 'coral', 'echo', 'fable', 'nova', 'onyx', 'sage', 'shimmer'];

if (options.voice && !VALID_VOICES.includes(options.voice)) {
  console.error(`❌ Invalid voice: ${options.voice}. Valid options: ${VALID_VOICES.join(', ')}`);
  process.exit(1);
}

/**
 * Get full output path for an audio requirement
 */
function getOutputPath(requirement: AudioRequirement): string {
  const categoryDir = path.join(BASE_AUDIO_DIR, requirement.category);
  const subDir = requirement.subdirectory ? path.join(categoryDir, requirement.subdirectory) : categoryDir;
  return path.join(subDir, requirement.filename);
}

/**
 * Check if audio file already exists and is not empty
 */
function audioFileExists(requirement: AudioRequirement): boolean {
  const filePath = getOutputPath(requirement);
  return fs.existsSync(filePath) && fs.statSync(filePath).size > 0;
}

/**
 * Ensure output directory exists
 */
function ensureDirectoryExists(filePath: string): void {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Sleep for specified milliseconds
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate audio for a single requirement with retry logic
 */
async function generateAudio(requirement: AudioRequirement, overrideVoice?: string): Promise<boolean> {
  const voice = overrideVoice || requirement.voice || 'coral';
  const filePath = getOutputPath(requirement);

  let retries = 0;

  while (retries <= MAX_RETRIES) {
    try {
      console.log(`🔊 Generating: ${requirement.id} (${requirement.text}) [${voice}]`);

      if (options.dryRun) {
        console.log(`   Would save to: ${filePath}`);
        return true;
      }

      const response = await openai.audio.speech.create({
        model: 'tts-1-hd',
        voice: voice as any,
        input: requirement.text,
        instructions: requirement.instructions || 'Speak clearly and naturally in Thai',
        response_format: 'mp3',
      });

      // Ensure directory exists
      ensureDirectoryExists(filePath);

      // Save the audio file
      const buffer = Buffer.from(await response.arrayBuffer());
      await fs.promises.writeFile(filePath, buffer);

      console.log(`   ✅ Saved: ${path.relative(process.cwd(), filePath)}`);
      return true;

    } catch (error: any) {
      retries++;

      if (error.status === 429) {
        // Rate limit error
        const retryAfter = error.headers?.['retry-after'] || '5';
        const waitTime = parseInt(retryAfter) * 1000;
        console.log(`   ⏳ Rate limit hit. Waiting ${waitTime / 1000}s... (retry ${retries}/${MAX_RETRIES})`);
        await sleep(waitTime);
      } else if (error.status >= 500) {
        // Server error, retry with exponential backoff
        const waitTime = Math.min(DELAY_BETWEEN_REQUESTS * Math.pow(RETRY_DELAY_MULTIPLIER, retries - 1), 30000);
        console.log(`   ⚠️ Server error (${error.status}). Retrying in ${waitTime / 1000}s... (retry ${retries}/${MAX_RETRIES})`);
        await sleep(waitTime);
      } else {
        console.error(`   ❌ Error generating audio for ${requirement.id}:`, error.message);
        if (retries <= MAX_RETRIES) {
          const waitTime = DELAY_BETWEEN_REQUESTS * retries;
          console.log(`   Retrying in ${waitTime / 1000}s...`);
          await sleep(waitTime);
        }
      }
    }
  }

  console.error(`   ❌ Failed to generate audio for ${requirement.id} after ${MAX_RETRIES} retries`);
  return false;
}

/**
 * Show statistics about existing audio files
 */
function showStats(): void {
  console.log('\n📊 Audio Generation Statistics\n');

  console.log(`Total audio requirements: ${AUDIO_STATS.total}`);
  console.log('\nBy category:');
  Object.entries(AUDIO_STATS.byCategory).forEach(([category, count]) => {
    console.log(`  ${category}: ${count}`);
  });

  console.log('\nBy priority:');
  Object.entries(AUDIO_STATS.byPriority).forEach(([priority, count]) => {
    console.log(`  ${priority}: ${count}`);
  });

  // Check existing files
  let existingCount = 0;
  let missingCount = 0;

  const categories = ['characters', 'vowel-placement', 'vowel-syllables', 'ending-consonants'] as AudioCategory[];

  console.log('\nFile status:');
  categories.forEach(category => {
    const requirements = getAudioRequirementsByCategory(category);
    const existing = requirements.filter(audioFileExists).length;
    const missing = requirements.length - existing;
    existingCount += existing;
    missingCount += missing;

    console.log(`  ${category}: ${existing}/${requirements.length} files exist (${missing} missing)`);
  });

  console.log(`\nOverall: ${existingCount}/${AUDIO_STATS.total} files exist (${missingCount} missing)`);
  console.log(`Completion: ${((existingCount / AUDIO_STATS.total) * 100).toFixed(1)}%`);
}

/**
 * Main execution function
 */
async function main(): Promise<void> {
  console.log('🎵 Unified Thai Audio Generation Script (OpenAI TTS)\n');

  // Filter requirements based on command line options
  let requirementsToGenerate = ALL_AUDIO_REQUIREMENTS;

  if (options.category) {
    requirementsToGenerate = getAudioRequirementsByCategory(options.category);
    console.log(`📁 Filtering by category: ${options.category}`);
  }

  if (options.priority) {
    requirementsToGenerate = requirementsToGenerate.filter(req => req.priority === options.priority);
    console.log(`🎯 Filtering by priority: ${options.priority}`);
  }

  // Remove existing files unless force flag is set
  if (!options.force) {
    const beforeFilter = requirementsToGenerate.length;
    requirementsToGenerate = requirementsToGenerate.filter(req => !audioFileExists(req));
    const filteredOut = beforeFilter - requirementsToGenerate.length;
    if (filteredOut > 0) {
      console.log(`📋 Skipping ${filteredOut} existing files (use --force to regenerate)`);
    }
  }

  if (options.stats) {
    showStats();
    return;
  }

  if (requirementsToGenerate.length === 0) {
    console.log('✅ All required audio files already exist!');
    showStats();
    return;
  }

  // Sort by priority (high first), then by category for better organization
  requirementsToGenerate.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return a.category.localeCompare(b.category);
  });

  console.log(`🎵 Generating ${requirementsToGenerate.length} audio files...\n`);

  if (options.dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be generated\n');
  }

  let successCount = 0;
  let failureCount = 0;
  const startTime = Date.now();

  for (let i = 0; i < requirementsToGenerate.length; i++) {
    const requirement = requirementsToGenerate[i];
    console.log(`[${i + 1}/${requirementsToGenerate.length}]`);

    const success = await generateAudio(requirement, options.voice);
    if (success) {
      successCount++;
    } else {
      failureCount++;
    }

    // Add delay between requests to be respectful to the API
    if (i < requirementsToGenerate.length - 1 && !options.dryRun) {
      await sleep(DELAY_BETWEEN_REQUESTS);
    }
  }

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(1);

  console.log('\n' + '='.repeat(50));
  console.log('🎵 Audio Generation Complete!');
  console.log('='.repeat(50));
  console.log(`⏱️  Duration: ${duration}s`);
  console.log(`✅ Successful: ${successCount}/${requirementsToGenerate.length}`);
  if (failureCount > 0) {
    console.log(`❌ Failed: ${failureCount}/${requirementsToGenerate.length}`);
  }
  console.log(`📁 Audio directory: ${BASE_AUDIO_DIR}`);

  if (!options.dryRun) {
    console.log('\n📊 Updated Statistics:');
    showStats();
  }

  if (failureCount > 0 && !options.dryRun) {
    console.log('\n💡 Some files failed to generate. Run the script again to retry the missing files.');
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n⏹️  Audio generation interrupted by user');
  console.log('Run the script again to continue from where you left off.');
  process.exit(0);
});

// Run the script
main().catch(error => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});