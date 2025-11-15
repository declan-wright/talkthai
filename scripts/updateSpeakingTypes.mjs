import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

// Get all lesson files
const unit1Dir = 'data/curriculum/unit-1';
const unit2Dir = 'data/curriculum/unit-2';
const lessonFiles = [
  ...readdirSync(unit1Dir).filter(f => f.startsWith('lesson-') && f.endsWith('.ts')).map(f => join(unit1Dir, f)),
  ...readdirSync(unit2Dir).filter(f => f.startsWith('lesson-') && f.endsWith('.ts')).map(f => join(unit2Dir, f))
];

console.log(`Found ${lessonFiles.length} lesson files to process\n`);

for (const filepath of lessonFiles) {
  let content = readFileSync(filepath, 'utf8');

  // Check if file has listeningSpeaking section
  if (!content.includes('listeningSpeaking:')) {
    console.log(`Skipping ${filepath} - no listeningSpeaking section`);
    continue;
  }

  // Extract the phoneticPrompt value to determine type
  const phoneticMatch = content.match(/phoneticPrompt:\s*\{[^}]*\[LanguageCode\.ENGLISH\]:\s*"([^"]+)"/);

  if (!phoneticMatch) {
    console.log(`Warning: Could not find phoneticPrompt in ${filepath}`);
    continue;
  }

  const phoneticValue = phoneticMatch[1];

  // Determine if it's a read or open-ended exercise
  // Read exercises have simple phonetic transcriptions like "sà-wàt-dii khráp"
  // Open-ended exercises have English instructions
  const isOpenEnded = phoneticValue.split(' ').length > 5 || phoneticValue.includes('Describe') || phoneticValue.includes('Talk about') || phoneticValue.includes('Use') || phoneticValue.includes('.') || phoneticValue.includes(',');

  const speakingType = isOpenEnded ? 'open-ended' : 'read';

  console.log(`${filepath}: ${speakingType}`);
  console.log(`  Phonetic: "${phoneticValue.substring(0, 60)}${phoneticValue.length > 60 ? '...' : ''}"`);

  // Check if speakingType already exists
  if (content.includes('speakingType:')) {
    console.log(`  Already has speakingType, skipping update\n`);
    continue;
  }

  // Add speakingType field after phoneticPrompt
  // Find the phoneticPrompt block and add speakingType after it
  const updatedContent = content.replace(
    /(phoneticPrompt:\s*\{[^}]*\})/,
    `$1,\n        speakingType: '${speakingType}'`
  );

  if (updatedContent === content) {
    console.log(`  Warning: Could not add speakingType to ${filepath}\n`);
    continue;
  }

  writeFileSync(filepath, updatedContent, 'utf8');
  console.log(`  ✓ Updated with speakingType: '${speakingType}'\n`);
}

console.log('Done!');
