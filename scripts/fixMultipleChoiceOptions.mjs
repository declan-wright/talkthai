#!/usr/bin/env node

/**
 * Script to remove English/French/Portuguese/Chinese translations from multiple choice options
 * in lesson files, while preserving phonetic romanizations.
 * 
 * This forces learners to actually know the Thai words instead of just reading the translations.
 * 
 * Example removals (English translations):
 * Before: { [LanguageCode.ENGLISH]: "เบื่อ (bored)", ... }
 * After:  { [LanguageCode.ENGLISH]: "เบื่อ", ... }
 * 
 * Example preservations (phonetic romanizations):
 * Before: { [LanguageCode.ENGLISH]: "ครับ (khráp)", ... }
 * After:  { [LanguageCode.ENGLISH]: "ครับ (khráp)", ... } (unchanged)
 */

import fs from 'fs';
import path from 'path';

const LESSON_FILES = [
    'data/curriculum/unit-2/lesson-2-0.ts',
    'data/curriculum/unit-1/lesson-1-0.ts',
    'data/curriculum/unit-1/lesson-1-4.ts',
    'data/curriculum/unit-1/lesson-1-6.ts',
    'data/curriculum/unit-1/lesson-1-7.ts',
    'data/curriculum/unit-1/lesson-1-9.ts',
    'data/curriculum/unit-1/lesson-1-11.ts',
    'data/curriculum/unit-1/lesson-1-12.ts',
    'data/curriculum/unit-1/lesson-1-13.ts',
    'data/curriculum/unit-1/lesson-1-14.ts',
    'data/curriculum/unit-1/lesson-1-17.ts',
    'data/curriculum/unit-1/lesson-1-18.ts',
    'data/curriculum/unit-1/lesson-1-19.ts',
    'data/curriculum/unit-1/lesson-1-20.ts',
    'data/curriculum/unit-1/lesson-1-21.ts',
];

/**
 * Check if text contains phonetic/romanization characters.
 * Phonetic romanizations use:
 * - IPA characters: ɔ, ɛ, ʉ, etc.
 * - Tone marks: á, à, â, ǎ, ā, etc. (combining diacritics)
 * - Special romanization: ʔ, ŋ, etc.
 */
function hasPhoneticCharacters(text) {
    // IPA and special phonetic characters
    const ipaChars = /[ɔɛʉɯʊɪəɤɨʌɑɒʏøœæɐɜɞɘɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯŋ]/;
    
    // Combining diacritical marks used in Thai romanization (tone marks)
    // These include: ́ (acute), ̀ (grave), ̂ (circumflex), ̌ (caron), ̄ (macron), etc.
    const combiningMarks = /[\u0300-\u036F]/;
    
    // Pre-composed characters with diacritics commonly used in Thai romanization
    const precomposedDiacritics = /[áàâǎāéèêěēíìîǐīóòôǒōúùûǔūǹṅṃ]/;
    
    return ipaChars.test(text) || combiningMarks.test(text) || precomposedDiacritics.test(text);
}

/**
 * Check if text looks like an English/simple translation rather than phonetic romanization.
 * English translations are typically simple words without special characters.
 */
function isEnglishTranslation(text) {
    // If it has phonetic characters, it's not an English translation
    if (hasPhoneticCharacters(text)) {
        return false;
    }
    
    // Common English words that appear in translations
    const commonEnglishWords = /^(happy|sad|angry|tired|excited|bored|scared|worried|stressed|confused|lonely|proud|impressed|disappointed|jealous|shy|embarrassed|relieved|pleased|delighted|startled|shocked|annoyed|irritated|regretful|patient|kind|smart|funny|quiet|thin|tall|short|fat|handsome|beautiful|attractive|diligent|hardworking|confident|talkative|friendly|muscular|bald|menu|plate|shop|spicy|delicious|sweet|salty|sour|bitter|chicken|pork|beef|shrimp|fish|pants|dress|outfit|skirt|shoes|hat|clothes|good|bad|big|small|hot|cold|new|old|expensive|cheap|near|far)$/i;
    
    return commonEnglishWords.test(text.trim());
}

function fixMultipleChoiceOptions(content) {
    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
        // Check if this line is in an options array (has LanguageCode)
        if (line.includes('LanguageCode.ENGLISH') || 
            line.includes('LanguageCode.FRENCH') || 
            line.includes('LanguageCode.PORTUGUESE') || 
            line.includes('LanguageCode.MANDARIN')) {
            
            // Pattern: Thai chars followed by space and parentheses
            const pattern = /("[ก-๙\s]+)\s+\(([^)]+)\)"/g;
            
            const newLine = line.replace(pattern, (match, thaiPart, parenContent) => {
                // Check if the content in parentheses is phonetic or English
                if (hasPhoneticCharacters(parenContent)) {
                    // Keep phonetic romanizations
                    return match;
                } else if (isEnglishTranslation(parenContent)) {
                    // Remove English translations
                    return thaiPart + '"';
                } else {
                    // For ambiguous cases, check if it's a simple word
                    // If it's just lowercase letters (no hyphens, no special chars), likely English
                    if (/^[a-z\s\/]+$/i.test(parenContent.trim())) {
                        return thaiPart + '"';
                    }
                    // Otherwise keep it (might be phonetic)
                    return match;
                }
            });
            
            return newLine;
        }
        return line;
    });
    
    return fixedLines.join('\n');
}

function processFile(filePath) {
    const fullPath = path.join(process.cwd(), filePath);
    
    if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return false;
    }
    
    console.log(`Processing: ${filePath}`);
    
    const content = fs.readFileSync(fullPath, 'utf-8');
    const fixedContent = fixMultipleChoiceOptions(content);
    
    // Check if anything changed
    if (content === fixedContent) {
        console.log(`  ✓ No changes needed`);
        return false;
    }
    
    // Write back the fixed content
    fs.writeFileSync(fullPath, fixedContent, 'utf-8');
    console.log(`  ✓ Fixed multiple choice options`);
    return true;
}

function main() {
    console.log('🔧 Fixing multiple choice options in lesson files...\n');
    console.log('   Removing: English translations like (bored), (happy), (menu)');
    console.log('   Keeping: Phonetic romanizations like (khráp), (mâi bpen rai)\n');
    
    let fixedCount = 0;
    let skippedCount = 0;
    
    for (const file of LESSON_FILES) {
        const wasFixed = processFile(file);
        if (wasFixed) {
            fixedCount++;
        } else {
            skippedCount++;
        }
    }
    
    console.log(`\n✅ Done!`);
    console.log(`   Fixed: ${fixedCount} files`);
    console.log(`   Skipped: ${skippedCount} files`);
}

main();
