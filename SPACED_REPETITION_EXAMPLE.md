# Spaced Repetition System - Usage Examples

## Example 1: Flashcards in Lesson 1.2

**Setup:**
- Student is studying Lesson 1.2
- Lesson 1.2 has 15 vocabulary words
- Previous lessons (1.0 and 1.1) have a combined 35 vocabulary words

**What Happens:**

1. Student clicks "Practice Flashcards" in Lesson 1.2
2. System randomly selects review card count (let's say it selects 2)
3. System selects 2 random vocabulary words from lessons 1.0-1.1
4. System selects 5 words from lesson 1.2 (7 total - 2 review = 5 current)
5. All 7 cards are shuffled together

**During Study:**
```
Card 1: [Lesson 1.2 word] - Counts toward progress
Card 2: [Review badge] นี่ from Lesson 1.0 - Doesn't count
Card 3: [Lesson 1.2 word] - Counts toward progress
Card 4: [Lesson 1.2 word] - Counts toward progress
Card 5: [Review badge] ไป from Lesson 1.1 - Doesn't count
Card 6: [Lesson 1.2 word] - Counts toward progress
Card 7: [Lesson 1.2 word] - Counts toward progress
```

**Result:**
- Student practices 5 new words from lesson 1.2 ✅
- Student reviews 2 words from previous lessons ✅
- Only the 5 lesson 1.2 words affect lesson progress ✅
- Student earns 10 points for completing the set ✅

---

## Example 2: Worksheet in Lesson 2.4

**Setup:**
- Student is doing the worksheet for Lesson 2.4
- Lesson 2.4 worksheet has 5 exercises:
  1. Multiple Choice (3 questions)
  2. Fill in the Blank (4 sentences)
  3. Cultural Note
  4. Jumbled Sentence (2 sentences)
  5. Matching (4 pairs)
- Previous lessons have 30 total exercises (excluding cultural notes)

**What Happens:**

1. Student opens the worksheet tab
2. System selects 1 random exercise from lessons 1.0-2.3 (e.g., a Fill in the Blank from lesson 1.3)
3. System inserts it randomly (let's say after exercise 2)

**Worksheet Display:**
```
Exercise 1: Multiple Choice (3 questions)
   - "Choose the correct question word..."

Exercise 2: Fill in the Blank (4 sentences)
   - "Complete the sentences..."

📚 Review Exercise (Not counted in score)
Exercise 3: Fill in the Blank (3 sentences) [From Lesson 1.3]
   - "Build the question with the correct particle..."

Exercise 4: Cultural Note
   - "Thai Greetings and Respect..."

Exercise 5: Jumbled Sentence (2 sentences)
   - "Drag to build the question..."

Exercise 6: Matching (4 pairs)
   - "Match the building block..."
```

**Scoring:**
- Total questions: 3 + 4 + 2 + 4 = 13 (review exercise excluded)
- Review exercise questions: 3 (not counted)
- If student gets 11/13 correct: Score = 85%
- Points earned: 11 points

---

## Example 3: First Lesson (1.0) - No Review

**Setup:**
- Student is studying Lesson 1.0
- This is the very first lesson

**What Happens:**

**Flashcards:**
- System detects this is lesson 1.0
- No review cards are included
- Student gets normal 7-card sets from lesson 1.0 only

**Worksheet:**
- System detects this is lesson 1.0  
- No review exercise is included
- Student gets only lesson 1.0 exercises

**Reason:** There are no previous lessons to review from!

---

## Example 4: Review Card Distribution Over Time

**Scenario:** Student practices flashcards in lesson 3.5 ten times

```
Session 1: 2 review cards, 5 current lesson cards
Session 2: 1 review card, 6 current lesson cards
Session 3: 1 review card, 6 current lesson cards
Session 4: 3 review cards, 4 current lesson cards
Session 5: 1 review card, 6 current lesson cards
Session 6: 2 review cards, 5 current lesson cards
Session 7: 1 review card, 6 current lesson cards
Session 8: 1 review card, 6 current lesson cards
Session 9: 4 review cards, 3 current lesson cards
Session 10: 2 review cards, 5 current lesson cards
```

**Analysis:**
- Average: 1.8 review cards per session
- Most common: 1 review card (50% of sessions)
- Least common: 4 review cards (10% of sessions)
- This matches the weighted distribution! ✅

---

## Benefits in Practice

### For Students
1. **Continuous Reinforcement**: See old material regularly
2. **Low Pressure**: Review doesn't hurt your score
3. **Clear Indication**: Always know what's review vs. new
4. **Natural Spacing**: Review frequency increases as you learn more

### For Learning
1. **Combat Forgetting**: Regular review prevents decay
2. **Build Connections**: See how old concepts relate to new ones
3. **Confidence Building**: Success on review items builds confidence
4. **Realistic Practice**: Mix of new and old mimics real-world usage

---

## Technical Notes

### Edge Cases Handled

1. **No Previous Lessons**: System gracefully skips review for lesson 1.0
2. **Insufficient Content**: If fewer items available than requested, uses what's available
3. **All Mastered**: If all current lesson items are mastered, set will be mostly review cards
4. **Cultural Notes**: Filtered out from worksheet review (they're not practice exercises)

### Randomization

- Review cards come from ANY previous lesson (not just the most recent)
- This ensures broad coverage and prevents "recency bias"
- Each session has a different mix due to randomization

