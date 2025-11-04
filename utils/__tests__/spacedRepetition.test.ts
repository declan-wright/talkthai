/**
 * Test utilities for spaced repetition
 * You can run these to verify the weighted distribution
 */

import { selectReviewCardCount } from '../spacedRepetition';

/**
 * Run this function to test the distribution of review card counts
 * Expected distribution over 10,000 trials:
 * - 1 card: ~54.5% (30/55)
 * - 2 cards: ~25.5% (14/55)
 * - 3 cards: ~12.7% (7/55)
 * - 4 cards: ~5.5% (3/55)
 * - 5 cards: ~1.8% (1/55)
 */
export function testReviewCardDistribution(iterations: number = 10000): void {
    const counts: Record<number, number> = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    for (let i = 0; i < iterations; i++) {
        const count = selectReviewCardCount();
        counts[count]++;
    }

    console.log('\n=== Review Card Count Distribution ===');
    console.log(`Total iterations: ${iterations}\n`);

    const expectedPercentages = {
        1: (30 / 55) * 100,
        2: (14 / 55) * 100,
        3: (7 / 55) * 100,
        4: (3 / 55) * 100,
        5: (1 / 55) * 100
    };

    for (let i = 1; i <= 5; i++) {
        const actual = (counts[i] / iterations) * 100;
        const expected = expectedPercentages[i];
        const diff = Math.abs(actual - expected);
        
        console.log(`${i} card(s):`);
        console.log(`  Actual:   ${actual.toFixed(2)}% (${counts[i]} times)`);
        console.log(`  Expected: ${expected.toFixed(2)}%`);
        console.log(`  Diff:     ${diff.toFixed(2)}%`);
        console.log('');
    }
}

// Uncomment to run the test:
// testReviewCardDistribution(10000);

