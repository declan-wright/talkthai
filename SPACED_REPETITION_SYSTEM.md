# Spaced Repetition System

## Overview
A spaced repetition system has been implemented for both flashcards and worksheets to reinforce learning from previous lessons. This system is active for all lessons after 1.0.

## How It Works

### Flashcards

#### Review Card Selection
For every flashcard set (sets of 7 cards), the system randomly determines how many review cards to include from previous lessons using weighted random selection:

- **1 review card**: weight 30 (most common)
- **2 review cards**: weight 14
- **3 review cards**: weight 7
- **4 review cards**: weight 3
- **5 review cards**: weight 1 (least common)

#### Review Card Behavior
- Review cards are randomly selected from ANY previous lesson/unit
- Review cards are mixed with current lesson cards and shuffled
- Review cards are clearly marked with a visual indicator: "📚 Review Card (From previous lessons)"
- **Review cards do NOT count toward progress on the current lesson**
- Users still get feedback on review cards, but their progress is not tracked for the current lesson

#### Example
If a user is studying lesson 2.3, and the system selects 2 review cards:
- 5 cards will be from lesson 2.3 vocabulary
- 2 cards will be randomly selected from lessons 1.0, 1.1, 1.2, ..., 2.2
- All 7 cards are shuffled together
- The 2 review cards won't affect lesson 2.3's completion progress

### Worksheets

#### Review Problem Selection
- **Exactly 1 review problem** is included in each worksheet (for lessons past 1.0)
- The review problem is randomly selected from any previous lesson's worksheet
- The review problem is inserted at a random position among non-cultural-note exercises

#### Review Problem Behavior
- Review problems are clearly marked with a badge: "📚 Review Exercise (Not counted in score)"
- Review problems are fully functional - users can answer them and see feedback
- **Review problems do NOT count toward the worksheet score**
- Points are not awarded for review problems

#### Example
If a user is doing the worksheet for lesson 1.5:
- The worksheet will contain all regular lesson 1.5 exercises
- Plus 1 random exercise from lessons 1.0-1.4
- The review exercise will be clearly labeled
- Score is calculated only from lesson 1.5 exercises

## Technical Implementation

### Files Modified

1. **`utils/spacedRepetition.ts`** (NEW)
   - Core utility functions for spaced repetition logic
   - `selectReviewCardCount()`: Weighted random selection
   - `getReviewVocabulary()`: Get review flashcards
   - `getReviewWorksheet()`: Get review worksheet item
   - Helper functions for filtering previous lessons

2. **`components/Vocabulary.tsx`**
   - Integrated review vocabulary into flashcard sets
   - Tracks which cards are review cards
   - Prevents review cards from affecting lesson progress
   - Passes review card information to Flashcards component

3. **`components/Flashcards.tsx`**
   - Added `reviewCards` prop to identify review cards
   - Displays visual indicator for review cards
   - Works seamlessly with existing flashcard logic

4. **`components/Worksheet.tsx`**
   - Dynamically inserts one review problem into worksheets
   - Tracks review exercise index
   - Excludes review exercise from score calculation
   - Displays visual indicator for review exercises
   - Maintains full functionality for review problems (feedback, etc.)

## Benefits

1. **Reinforcement**: Students regularly see vocabulary and concepts from previous lessons
2. **Long-term Retention**: Prevents forgetting of earlier material
3. **Low Pressure**: Review items don't affect current lesson progress/scores
4. **Transparent**: Clear visual indicators so students know what's review vs. new
5. **Adaptive**: Random selection ensures variety and coverage
6. **Scalable**: System automatically includes more content as students progress

## Future Enhancements (Optional)

- Track review card performance separately
- Prioritize review of items that students struggled with
- Adjust review frequency based on performance
- Add user settings to control review density
- Analytics dashboard for review performance

