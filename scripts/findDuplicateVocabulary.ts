import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { Lesson } from '../types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface VocabularyOccurrence {
  thai: string;
  phonetic: string;
  englishTranslation: string;
  lessonIds: string[];
}

async function findDuplicateVocabulary() {
  const curriculumPath = path.join(__dirname, '../data/curriculum');
  const vocabularyMap = new Map<string, VocabularyOccurrence>();

  // Function to recursively find all lesson files
  function findLessonFiles(dir: string): string[] {
    const files: string[] = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...findLessonFiles(fullPath));
      } else if (entry.isFile() && entry.name.startsWith('lesson-') && entry.name.endsWith('.ts')) {
        files.push(fullPath);
      }
    }

    return files;
  }

  // Find all lesson files and sort them to get the most recent
  const lessonFiles = findLessonFiles(curriculumPath).sort();
  const mostRecentFile = lessonFiles[lessonFiles.length - 1];
  const previousFiles = lessonFiles.slice(0, -1);

  console.log(`Found ${lessonFiles.length} lesson files`);
  console.log(`Most recent lesson: ${path.basename(mostRecentFile)}\n`);

  // First, process all previous lessons to build the vocabulary map
  for (const lessonFile of previousFiles) {
    try {
      const lessonModule = await import(lessonFile);
      const lesson: Lesson | undefined = Object.values(lessonModule).find(
        (exp: any) => exp && typeof exp === 'object' && 'id' in exp && 'vocabulary' in exp
      ) as Lesson | undefined;

      if (!lesson || !lesson.vocabulary) {
        continue;
      }

      for (const vocabItem of lesson.vocabulary) {
        const thaiWord = vocabItem.thai;

        if (vocabularyMap.has(thaiWord)) {
          const occurrence = vocabularyMap.get(thaiWord)!;
          if (!occurrence.lessonIds.includes(lesson.id)) {
            occurrence.lessonIds.push(lesson.id);
          }
        } else {
          vocabularyMap.set(thaiWord, {
            thai: thaiWord,
            phonetic: vocabItem.phonetic,
            englishTranslation: vocabItem.translations['en'] || '',
            lessonIds: [lesson.id]
          });
        }
      }
    } catch (error) {
      console.error(`Error processing ${lessonFile}:`, error);
    }
  }

  // Now check the most recent lesson for duplicates
  const duplicates: VocabularyOccurrence[] = [];
  try {
    const lessonModule = await import(mostRecentFile);
    const mostRecentLesson: Lesson | undefined = Object.values(lessonModule).find(
      (exp: any) => exp && typeof exp === 'object' && 'id' in exp && 'vocabulary' in exp
    ) as Lesson | undefined;

    if (mostRecentLesson && mostRecentLesson.vocabulary) {
      console.log(`Checking ${mostRecentLesson.vocabulary.length} vocabulary items in lesson ${mostRecentLesson.id}...\n`);

      for (const vocabItem of mostRecentLesson.vocabulary) {
        const thaiWord = vocabItem.thai;

        if (vocabularyMap.has(thaiWord)) {
          // This word from the most recent lesson already exists in previous lessons
          const occurrence = vocabularyMap.get(thaiWord)!;
          duplicates.push({
            thai: thaiWord,
            phonetic: vocabItem.phonetic,
            englishTranslation: vocabItem.translations['en'] || '',
            lessonIds: [...occurrence.lessonIds, mostRecentLesson.id]
          });
        }
      }
    }
  } catch (error) {
    console.error(`Error processing most recent lesson:`, error);
  }

  // Sort duplicates by number of occurrences (descending) and then alphabetically
  duplicates.sort((a, b) => {
    if (b.lessonIds.length !== a.lessonIds.length) {
      return b.lessonIds.length - a.lessonIds.length;
    }
    return a.thai.localeCompare(b.thai);
  });

  // Display results
  if (duplicates.length === 0) {
    console.log('No duplicate vocabulary found in the most recent lesson!');
  } else {
    console.log(`Found ${duplicates.length} vocabulary words in the most recent lesson that already exist in previous lessons:\n`);
    console.log('='.repeat(80));

    for (const dup of duplicates) {
      console.log(`\nWord: ${dup.thai} (${dup.phonetic})`);
      console.log(`English: ${dup.englishTranslation}`);
      console.log(`Also appears in: ${dup.lessonIds.slice(0, -1).sort().join(', ')}`);
      console.log('-'.repeat(80));
    }

    console.log(`\nTotal duplicates in most recent lesson: ${duplicates.length}`);
  }
}

// Run the script
findDuplicateVocabulary().catch(console.error);
