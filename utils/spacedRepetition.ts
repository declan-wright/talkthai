import { VocabularyItem, WorksheetItem, Lesson, Unit } from '../types';

/**
 * Weighted random selection for number of review cards
 * Weights: 1 card = 30, 2 cards = 14, 3 cards = 7, 4 cards = 4, 5 cards = 1
 */
export function selectReviewCardCount(): number {
    const weights = [
        { count: 1, weight: 30 },
        { count: 2, weight: 14 },
        { count: 3, weight: 7 },
        { count: 4, weight: 3 },
        { count: 5, weight: 1 }
    ];
    
    const totalWeight = weights.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const item of weights) {
        random -= item.weight;
        if (random <= 0) {
            return item.count;
        }
    }
    
    return 1; // Fallback
}

/**
 * Get all vocabulary from lessons before the current lesson
 */
export function getPreviousLessonsVocabulary(
    units: Unit[],
    currentLessonId: string
): VocabularyItem[] {
    const allVocab: VocabularyItem[] = [];
    const [currentUnit, currentLessonNum] = currentLessonId.split('.').map(Number);
    
    for (const unit of units) {
        // Include all lessons from units before the current unit
        if (unit.id < currentUnit) {
            for (const lesson of unit.lessons) {
                allVocab.push(...lesson.vocabulary);
            }
        }
        // For the current unit, only include lessons before the current lesson
        else if (unit.id === currentUnit) {
            for (const lesson of unit.lessons) {
                const [lessonUnit, lessonNum] = lesson.id.split('.').map(Number);
                if (lessonUnit === currentUnit && lessonNum < currentLessonNum) {
                    allVocab.push(...lesson.vocabulary);
                }
            }
        }
    }
    
    return allVocab;
}

/**
 * Get all worksheet items from lessons before the current lesson
 */
export function getPreviousLessonsWorksheets(
    units: Unit[],
    currentLessonId: string
): WorksheetItem[] {
    const allWorksheets: WorksheetItem[] = [];
    const [currentUnit, currentLessonNum] = currentLessonId.split('.').map(Number);
    
    for (const unit of units) {
        // Include all lessons from units before the current unit
        if (unit.id < currentUnit) {
            for (const lesson of unit.lessons) {
                allWorksheets.push(...lesson.worksheet);
            }
        }
        // For the current unit, only include lessons before the current lesson
        else if (unit.id === currentUnit) {
            for (const lesson of unit.lessons) {
                const [lessonUnit, lessonNum] = lesson.id.split('.').map(Number);
                if (lessonUnit === currentUnit && lessonNum < currentLessonNum) {
                    allWorksheets.push(...lesson.worksheet);
                }
            }
        }
    }
    
    return allWorksheets;
}

/**
 * Randomly select N items from an array
 */
export function selectRandomItems<T>(items: T[], count: number): T[] {
    if (items.length === 0) return [];
    
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, items.length));
}

/**
 * Check if a lesson should include review content (lessons past 1.0)
 */
export function shouldIncludeReview(lessonId: string): boolean {
    const [unit, lessonNum] = lessonId.split('.').map(Number);
    
    // Only include review for lessons after 1.0
    if (unit === 1 && lessonNum === 0) {
        return false;
    }
    
    return true;
}

/**
 * Get review vocabulary items for a lesson
 */
export function getReviewVocabulary(
    units: Unit[],
    currentLessonId: string
): VocabularyItem[] {
    if (!shouldIncludeReview(currentLessonId)) {
        return [];
    }
    
    const previousVocab = getPreviousLessonsVocabulary(units, currentLessonId);
    
    if (previousVocab.length === 0) {
        return [];
    }
    
    const reviewCount = selectReviewCardCount();
    return selectRandomItems(previousVocab, reviewCount);
}

/**
 * Get a single review worksheet item for a lesson
 * Filters out cultural notes since they don't provide practice/review value
 */
export function getReviewWorksheet(
    units: Unit[],
    currentLessonId: string
): WorksheetItem | null {
    if (!shouldIncludeReview(currentLessonId)) {
        return null;
    }
    
    const previousWorksheets = getPreviousLessonsWorksheets(units, currentLessonId);
    
    // Filter out cultural notes - we only want practice exercises for review
    const practiceExercises = previousWorksheets.filter(
        item => item.type !== 'CULTURAL_NOTE'
    );
    
    if (practiceExercises.length === 0) {
        return null;
    }
    
    const selected = selectRandomItems(practiceExercises, 1);
    return selected[0] || null;
}

