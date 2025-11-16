import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import type { Language } from '../types';
import { type ReadingLesson, type EndingConsonantPracticeWord } from '../data/reading/lessons';
import { type ThaiConsonant, type ThaiVowel, type VowelSyllable, ConsonantClass } from '../data/reading/characters';
import { READING_UI_STRINGS } from '../data/readingUIStrings';
import { ArrowLeftIcon } from './Icons';
import { useAuth } from '../contexts/AuthContext';
import * as firestoreService from '../services/firestoreService';
import { usePoints } from '../contexts/PointsContext';
import { TAUGHT_HIGH_CONSONANTS, TAUGHT_MID_CONSONANTS, TAUGHT_LOW_CONSONANTS_SHARED, TAUGHT_LOW_CONSONANTS_UNIQUE } from '../data/reading/characters';

interface ReadingPracticeProps {
  lesson: ReadingLesson;
  language: Language;
  onBack: () => void;
}

interface ConsonantQuestion {
  type: 'consonant';
  character: ThaiConsonant;
  options: string[];
}

interface VowelQuestion {
  type: 'vowel';
  syllableData: VowelSyllable; // The pre-defined syllable data
  vowel: ThaiVowel;
  options: string[];
}

interface EndingConsonantQuestion {
  type: 'endingConsonant';
  word: EndingConsonantPracticeWord;
  options: string[];
}

type Question = ConsonantQuestion | VowelQuestion | EndingConsonantQuestion;

const QUESTIONS_PER_SESSION = 20;

export const ReadingPractice: React.FC<ReadingPracticeProps> = ({ lesson, language, onBack }) => {
  const { user } = useAuth();
  const { showPoints } = usePoints();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [wrongAttempts, setWrongAttempts] = useState<Set<number>>(new Set());
  const [isComplete, setIsComplete] = useState(false);
  const [startTime] = useState(Date.now());
  const [endTime, setEndTime] = useState<number | null>(null);

  // Memoize these to prevent re-renders when they haven't actually changed
  const practiceCharacters = useMemo(() => lesson.practiceCharacters || [], [lesson.practiceCharacters]);
  const practiceVowels = useMemo(() => lesson.practiceVowels || [], [lesson.practiceVowels]);
  const practiceEndingConsonants = useMemo(() => lesson.practiceEndingConsonants || [], [lesson.practiceEndingConsonants]);
  const answerOptions = useMemo(() => lesson.practiceAnswerOptions || [], [lesson.practiceAnswerOptions]);
  const isVowelPractice = lesson.isVowelPractice || false;
  const isEndingConsonantPractice = lesson.isEndingConsonantPractice || false;

  useEffect(() => {
    const generatedQuestions: Question[] = [];

    if (isEndingConsonantPractice && practiceEndingConsonants.length > 0) {
      // Generate ending consonant practice questions
      let wordPool: EndingConsonantPracticeWord[] = [];
      let lastWord: EndingConsonantPracticeWord | null = null;

      for (let i = 0; i < QUESTIONS_PER_SESSION; i++) {
        // Refill pool if empty
        if (wordPool.length === 0) {
          wordPool = [...practiceEndingConsonants].sort(() => Math.random() - 0.5);
        }

        // Find a word that's not the same as the last one
        let selectedWord: EndingConsonantPracticeWord;
        if (lastWord && wordPool.length > 1) {
          const availableWords = wordPool.filter(w => w.thai !== lastWord.thai);
          if (availableWords.length > 0) {
            selectedWord = availableWords[0];
            wordPool = wordPool.filter(w => w.thai !== selectedWord.thai);
          } else {
            selectedWord = wordPool[0];
            wordPool = wordPool.slice(1);
          }
        } else {
          selectedWord = wordPool[0];
          wordPool = wordPool.slice(1);
        }

        lastWord = selectedWord;

        // Use all 8 ending consonant options in fixed order
        const options = [...answerOptions]; // Keep original order

        generatedQuestions.push({
          type: 'endingConsonant',
          word: selectedWord,
          options
        });
      }
    } else if (isVowelPractice && practiceVowels.length > 0) {
      // Generate vowel practice questions using pre-defined syllables
      let vowelPool: ThaiVowel[] = [];
      let lastVowel: ThaiVowel | null = null;

      for (let i = 0; i < QUESTIONS_PER_SESSION; i++) {
        // Refill pool if empty
        if (vowelPool.length === 0) {
          vowelPool = [...practiceVowels].sort(() => Math.random() - 0.5);
        }

        // Find a vowel that's not the same as the last one
        let selectedVowel: ThaiVowel;
        if (lastVowel && vowelPool.length > 1) {
          const availableVowels = vowelPool.filter(v => v.phonetic !== lastVowel.phonetic);
          if (availableVowels.length > 0) {
            selectedVowel = availableVowels[0];
            vowelPool = vowelPool.filter(v => v.phonetic !== selectedVowel.phonetic);
          } else {
            selectedVowel = vowelPool[0];
            vowelPool = vowelPool.slice(1);
          }
        } else {
          selectedVowel = vowelPool[0];
          vowelPool = vowelPool.slice(1);
        }

        lastVowel = selectedVowel;

        // Select a random syllable from the vowel's practice syllables
        const randomSyllable = selectedVowel.practiceSyllables[
          Math.floor(Math.random() * selectedVowel.practiceSyllables.length)
        ];

        // Use all 9 vowel options in fixed order
        const options = [...answerOptions]; // Keep original order

        generatedQuestions.push({
          type: 'vowel',
          syllableData: randomSyllable,
          vowel: selectedVowel,
          options
        });
      }
    } else {
      // Generate consonant practice questions
      let characterPool: ThaiConsonant[] = [];
      let lastCharacter: ThaiConsonant | null = null;

      for (let i = 0; i < QUESTIONS_PER_SESSION; i++) {
        // Refill pool if empty
        if (characterPool.length === 0) {
          characterPool = [...practiceCharacters].sort(() => Math.random() - 0.5);
        }

        // Find a character that's not the same as the last one
        let selectedChar: ThaiConsonant;
        if (lastCharacter && characterPool.length > 1) {
          const availableChars = characterPool.filter(c => c.character !== lastCharacter.character);
          if (availableChars.length > 0) {
            selectedChar = availableChars[0];
            characterPool = characterPool.filter(c => c.character !== selectedChar.character);
          } else {
            selectedChar = characterPool[0];
            characterPool = characterPool.slice(1);
          }
        } else {
          selectedChar = characterPool[0];
          characterPool = characterPool.slice(1);
        }

        lastCharacter = selectedChar;

        // Use a consistent subset of options in fixed order
        // Take the first 7 options that are relevant to this lesson
        const options = answerOptions.slice(0, 7);

        generatedQuestions.push({
          type: 'consonant',
          character: selectedChar,
          options
        });
      }
    }

    setQuestions(generatedQuestions);
  }, [practiceCharacters, practiceVowels, practiceEndingConsonants, answerOptions, isVowelPractice, isEndingConsonantPractice]);

  const currentQuestion = questions[currentQuestionIndex];

  const playAudio = (audioFile: string) => {
    const audio = new Audio(audioFile);
    audio.play().catch(err => console.error('Audio playback failed:', err));
  };

  const handleAnswerClick = (answer: string) => {
    if (isCorrect !== null) return; // Already answered correctly

    const correctAnswer = currentQuestion.type === 'vowel'
      ? currentQuestion.vowel.phonetic
      : currentQuestion.type === 'endingConsonant'
      ? currentQuestion.word.endingSound
      : currentQuestion.character.phonetic;

    const correct = answer === correctAnswer;

    if (correct) {
      setIsCorrect(true);
      setSelectedAnswer(answer);

      // Play the correct answer audio
      if (currentQuestion.type === 'vowel') {
        playAudio(currentQuestion.syllableData.audioFile);
      } else if (currentQuestion.type === 'endingConsonant') {
        playAudio(currentQuestion.word.audioFile);
      } else {
        playAudio(currentQuestion.character.audioFile);
      }
    } else {
      // Wrong answer: play the CORRECT answer as a hint
      setWrongAttempts(prev => new Set(prev).add(currentQuestionIndex));

      if (currentQuestion.type === 'vowel') {
        // Play the correct syllable audio
        playAudio(currentQuestion.syllableData.audioFile);
      } else if (currentQuestion.type === 'endingConsonant') {
        // Play the correct word audio
        playAudio(currentQuestion.word.audioFile);
      } else {
        // Play the correct consonant audio
        playAudio(currentQuestion.character.audioFile);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      // Complete the practice
      setEndTime(Date.now());
      setIsComplete(true);

      // Award points
      const correctCount = QUESTIONS_PER_SESSION - wrongAttempts.size;
      const percentage = (correctCount / QUESTIONS_PER_SESSION) * 100;
      let points = 6;
      if (percentage >= 90) points = 20;
      else if (percentage >= 80) points = 10;

      if (user) {
        firestoreService.addPoints(user.uid, points, `Reading Practice: ${lesson.title['en']}`);
        showPoints(points);
      }
    }
  };

  if (questions.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-warm-white">
        <p className="text-charcoal-ink">Loading practice...</p>
      </div>
    );
  }

  if (isComplete) {
    const correctCount = QUESTIONS_PER_SESSION - wrongAttempts.size;
    const percentage = Math.round((correctCount / QUESTIONS_PER_SESSION) * 100);
    let points = 6;
    if (percentage >= 90) points = 20;
    else if (percentage >= 80) points = 10;

    const durationSeconds = endTime ? Math.round((endTime - startTime) / 1000) : 0;

    // Get missed items (characters or vowels)
    const missedItems = questions
      .filter((_, idx) => wrongAttempts.has(idx));

    return (
      <div className="w-full h-full flex flex-col max-w-4xl mx-auto bg-warm-white text-charcoal-ink border border-light-grey overflow-hidden" style={{ height: '90vh' }}>
        <header className="p-4 border-b border-light-grey flex-shrink-0">
          <button
            onClick={onBack}
            className="text-sm font-medium text-vibrant-orange hover:underline flex items-center gap-2"
          >
            <ArrowLeftIcon />
            {READING_UI_STRINGS['reading.backToLessons'][language.code]}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar p-6 flex flex-col items-center justify-center text-center">
          <h2 className="font-heading text-4xl uppercase text-charcoal-ink mb-6">
            {READING_UI_STRINGS['reading.practice.complete.title'][language.code]}
          </h2>

          <div className="text-6xl font-bold text-vibrant-orange mb-8">
            {correctCount} / {QUESTIONS_PER_SESSION}
          </div>

          <div className="text-2xl text-charcoal-ink mb-4">
            {percentage}% Correct
          </div>

          <div className="text-xl font-bold text-green-600 mb-8">
            +{points} {READING_UI_STRINGS['reading.practice.complete.points'][language.code].replace('{points}', '')}
          </div>

          <div className="text-charcoal-ink/70 mb-8">
            Completed in {durationSeconds} seconds
          </div>

          {missedItems.length > 0 && (
            <div className="w-full max-w-2xl mb-8">
              <h3 className="font-bold text-charcoal-ink mb-4">
                {READING_UI_STRINGS['reading.practice.complete.review'][language.code]}
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                {missedItems.map((item, idx) => {
                  if (item.type === 'vowel') {
                    return (
                      <div
                        key={idx}
                        className="border border-light-grey p-4 bg-white hover:bg-light-grey cursor-pointer"
                        onClick={() => playAudio(item.syllableData.audioFile)}
                      >
                        <div className="font-thai text-4xl text-charcoal-ink mb-1">{item.syllableData.syllable}</div>
                        <div className="text-sm font-mono text-charcoal-ink/70">{item.vowel.phonetic}</div>
                      </div>
                    );
                  } else if (item.type === 'endingConsonant') {
                    return (
                      <div
                        key={idx}
                        className="border border-light-grey p-4 bg-white hover:bg-light-grey cursor-pointer"
                        onClick={() => playAudio(item.word.audioFile)}
                      >
                        <div className="font-thai text-4xl text-charcoal-ink mb-1">{item.word.thai}</div>
                        <div className="text-sm font-mono text-charcoal-ink/70">{item.word.endingSound}</div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={idx}
                        className="border border-light-grey p-4 bg-white hover:bg-light-grey cursor-pointer"
                        onClick={() => playAudio(item.character.audioFile)}
                      >
                        <div className="font-thai text-4xl text-charcoal-ink mb-1">{item.character.character}</div>
                        <div className="text-sm font-mono text-charcoal-ink/70">{item.character.phonetic}</div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-light-grey text-charcoal-ink font-bold uppercase hover:bg-charcoal-ink hover:text-warm-white transition-colors"
            >
              {READING_UI_STRINGS['reading.practice.complete.tryAgain'][language.code]}
            </button>
            <button
              onClick={onBack}
              className="px-8 py-3 bg-vibrant-orange text-warm-white font-bold uppercase hover:bg-charcoal-ink transition-colors"
            >
              {READING_UI_STRINGS['reading.practice.complete.returnToLessons'][language.code]}
            </button>
          </div>
        </main>
      </div>
    );
  }

  const getClassColor = (consonantClass: ConsonantClass) => {
    switch (consonantClass) {
      case ConsonantClass.HIGH:
        return 'text-green-600';
      case ConsonantClass.MID:
        return 'text-red-600';
      case ConsonantClass.LOW:
        return 'text-blue-600';
      default:
        return 'text-charcoal-ink';
    }
  };

  const getClassLabel = (consonantClass: ConsonantClass) => {
    switch (consonantClass) {
      case ConsonantClass.HIGH:
        return READING_UI_STRINGS['reading.class.high'][language.code];
      case ConsonantClass.MID:
        return READING_UI_STRINGS['reading.class.mid'][language.code];
      case ConsonantClass.LOW:
        return READING_UI_STRINGS['reading.class.low'][language.code];
      default:
        return '';
    }
  };

  return (
    <div className="w-full h-full flex flex-col max-w-4xl mx-auto bg-warm-white text-charcoal-ink border border-light-grey overflow-hidden" style={{ height: '90vh' }}>
      <header className="p-4 border-b border-light-grey flex-shrink-0 flex justify-between items-center">
        <button
          onClick={onBack}
          className="text-sm font-medium text-vibrant-orange hover:underline flex items-center gap-2"
        >
          <ArrowLeftIcon />
          {READING_UI_STRINGS['reading.backToLessons'][language.code]}
        </button>
        <div className="text-sm font-medium text-charcoal-ink">
          Question {currentQuestionIndex + 1} / {QUESTIONS_PER_SESSION}
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar p-8 flex flex-col items-center justify-center">
        {/* Thai Character/Syllable Display */}
        <div className="mb-12">
          <div className="font-thai text-9xl text-charcoal-ink text-center">
            {currentQuestion.type === 'vowel' 
              ? currentQuestion.syllableData.syllable 
              : currentQuestion.type === 'endingConsonant'
              ? currentQuestion.word.thai
              : currentQuestion.character.character}
          </div>
        </div>

        {/* Show additional info after correct answer */}
        {isCorrect && (
          <div className="mb-8 text-center space-y-2 animate-fade-in">
            <div className="text-3xl font-bold text-green-600 mb-4">
              {READING_UI_STRINGS['reading.practice.correct'][language.code]}
            </div>
            {currentQuestion.type === 'vowel' ? (
              <>
                <div className="text-2xl font-mono text-charcoal-ink">
                  Vowel: {currentQuestion.vowel.phonetic}
                </div>
                <div className={`text-xl font-bold ${getClassColor(currentQuestion.syllableData.consonant.class)}`}>
                  {getClassLabel(currentQuestion.syllableData.consonant.class)} Class
                </div>
              </>
            ) : currentQuestion.type === 'endingConsonant' ? (
              <>
                <div className="text-2xl font-mono text-charcoal-ink">
                  {currentQuestion.word.phonetic}
                </div>
                <div className="text-xl text-charcoal-ink/70">
                  Ending: {currentQuestion.word.endingSound}
                </div>
              </>
            ) : (
              <>
                <div className="text-2xl font-mono text-charcoal-ink">
                  {currentQuestion.character.name}
                </div>
                <div className={`text-xl font-bold ${getClassColor(currentQuestion.character.class)}`}>
                  {getClassLabel(currentQuestion.character.class)}
                </div>
              </>
            )}
          </div>
        )}

        {/* Answer Options */}
        {!isCorrect && (
          <div className="w-full max-w-3xl space-y-4">
            {currentQuestion.type === 'vowel' ? (
              // Vowel practice: 9 options in 3x3 grid
              <div className="grid grid-cols-3 gap-4">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(option)}
                    className="py-6 px-4 bg-light-grey text-charcoal-ink font-mono text-2xl font-bold hover:bg-vibrant-orange hover:text-warm-white transition-colors active:scale-95"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : currentQuestion.type === 'endingConsonant' ? (
              // Ending consonant practice: 8 options in 4+4 layout
              <>
                <div className="grid grid-cols-4 gap-4">
                  {currentQuestion.options.slice(0, 4).map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerClick(option)}
                      className="py-6 px-4 bg-light-grey text-charcoal-ink font-mono text-2xl font-bold hover:bg-vibrant-orange hover:text-warm-white transition-colors active:scale-95"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {currentQuestion.options.slice(4, 8).map((option, idx) => (
                    <button
                      key={idx + 4}
                      onClick={() => handleAnswerClick(option)}
                      className="py-6 px-4 bg-light-grey text-charcoal-ink font-mono text-2xl font-bold hover:bg-vibrant-orange hover:text-warm-white transition-colors active:scale-95"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              // Consonant practice: 7 options in 3+4 layout
              <>
                <div className="grid grid-cols-3 gap-4">
                  {currentQuestion.options.slice(0, 3).map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerClick(option)}
                      className="py-6 px-4 bg-light-grey text-charcoal-ink font-mono text-2xl font-bold hover:bg-vibrant-orange hover:text-warm-white transition-colors active:scale-95"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {currentQuestion.options.slice(3, 7).map((option, idx) => (
                    <button
                      key={idx + 3}
                      onClick={() => handleAnswerClick(option)}
                      className="py-6 px-4 bg-light-grey text-charcoal-ink font-mono text-2xl font-bold hover:bg-vibrant-orange hover:text-warm-white transition-colors active:scale-95"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Next Button (shown after correct answer) */}
        {isCorrect && (
          <button
            onClick={handleNext}
            className="mt-8 px-12 py-4 bg-vibrant-orange text-warm-white font-bold uppercase text-xl hover:bg-charcoal-ink transition-colors"
          >
            {READING_UI_STRINGS['reading.practice.next'][language.code]}
          </button>
        )}
      </main>

      {/* Progress Bar */}
      <div className="flex-shrink-0 bg-light-grey h-2">
        <div
          className="bg-vibrant-orange h-full transition-all duration-300"
          style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS_PER_SESSION) * 100}%` }}
        />
      </div>
    </div>
  );
};
