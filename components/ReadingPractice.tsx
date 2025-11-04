import React, { useState, useEffect, useRef } from 'react';
import type { Language } from '../types';
import { type ReadingLesson } from '../data/reading/lessons';
import { type ThaiConsonant, ConsonantClass } from '../data/reading/characters';
import { READING_UI_STRINGS } from '../data/readingUIStrings';
import { ArrowLeftIcon } from './Icons';
import { useAuth } from '../contexts/AuthContext';
import * as firestoreService from '../services/firestoreService';
import { usePoints } from '../contexts/PointsContext';

interface ReadingPracticeProps {
  lesson: ReadingLesson;
  language: Language;
  onBack: () => void;
}

interface Question {
  character: ThaiConsonant;
  options: string[];
}

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

  const practiceCharacters = lesson.practiceCharacters || [];
  const answerOptions = lesson.practiceAnswerOptions || [];

  useEffect(() => {
    // Generate 20 questions with no consecutive duplicates
    const generatedQuestions: Question[] = [];

    // Create a shuffled pool of characters
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
        // Filter out the last character to avoid consecutive duplicates
        const availableChars = characterPool.filter(c => c.character !== lastCharacter.character);
        if (availableChars.length > 0) {
          selectedChar = availableChars[0];
          // Remove selected character from pool
          characterPool = characterPool.filter(c => c.character !== selectedChar.character);
        } else {
          // Fallback if only one character left
          selectedChar = characterPool[0];
          characterPool = characterPool.slice(1);
        }
      } else {
        // First question or only one character total
        selectedChar = characterPool[0];
        characterPool = characterPool.slice(1);
      }

      lastCharacter = selectedChar;

      // Shuffle and select options
      const shuffledOptions = [...answerOptions].sort(() => Math.random() - 0.5);
      const options = shuffledOptions.slice(0, 7);

      // Ensure correct answer is included
      if (!options.includes(selectedChar.phonetic)) {
        options[Math.floor(Math.random() * options.length)] = selectedChar.phonetic;
      }

      // Shuffle options again
      options.sort(() => Math.random() - 0.5);

      generatedQuestions.push({
        character: selectedChar,
        options
      });
    }
    setQuestions(generatedQuestions);
  }, [practiceCharacters, answerOptions]);

  const currentQuestion = questions[currentQuestionIndex];

  const playAudio = (audioFile: string) => {
    const audio = new Audio(audioFile);
    audio.play().catch(err => console.error('Audio playback failed:', err));
  };

  const handleAnswerClick = (answer: string) => {
    if (isCorrect !== null) return; // Already answered correctly

    const correct = answer === currentQuestion.character.phonetic;

    if (correct) {
      setIsCorrect(true);
      setSelectedAnswer(answer);
    } else {
      // Wrong answer: play the incorrect sound and mark as wrong
      setWrongAttempts(prev => new Set(prev).add(currentQuestionIndex));

      // Play audio for the wrong answer (find a character with this phonetic)
      const wrongChar = practiceCharacters.find(c => c.phonetic === answer);
      if (wrongChar) {
        playAudio(wrongChar.audioFile);
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
      let points = 3;
      if (percentage >= 90) points = 10;
      else if (percentage >= 80) points = 5;

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
    let points = 3;
    if (percentage >= 90) points = 10;
    else if (percentage >= 80) points = 5;

    const durationSeconds = endTime ? Math.round((endTime - startTime) / 1000) : 0;

    // Get missed characters
    const missedCharacters = questions
      .filter((_, idx) => wrongAttempts.has(idx))
      .map(q => q.character);

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

          {missedCharacters.length > 0 && (
            <div className="w-full max-w-2xl mb-8">
              <h3 className="font-bold text-charcoal-ink mb-4">
                {READING_UI_STRINGS['reading.practice.complete.review'][language.code]}
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                {missedCharacters.map((char, idx) => (
                  <div
                    key={idx}
                    className="border border-light-grey p-4 bg-white hover:bg-light-grey cursor-pointer"
                    onClick={() => playAudio(char.audioFile)}
                  >
                    <div className="font-thai text-4xl text-charcoal-ink mb-1">{char.character}</div>
                    <div className="text-sm font-mono text-charcoal-ink/70">{char.phonetic}</div>
                  </div>
                ))}
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
        {/* Thai Character Display */}
        <div className="mb-12">
          <div className="font-thai text-9xl text-charcoal-ink text-center">
            {currentQuestion.character.character}
          </div>
        </div>

        {/* Show additional info after correct answer */}
        {isCorrect && (
          <div className="mb-8 text-center space-y-2 animate-fade-in">
            <div className="text-3xl font-bold text-green-600 mb-4">
              {READING_UI_STRINGS['reading.practice.correct'][language.code]}
            </div>
            <div className="text-2xl font-mono text-charcoal-ink">
              {currentQuestion.character.name}
            </div>
            <div className={`text-xl font-bold ${getClassColor(currentQuestion.character.class)}`}>
              {getClassLabel(currentQuestion.character.class)}
            </div>
          </div>
        )}

        {/* Answer Options */}
        {!isCorrect && (
          <div className="w-full max-w-3xl space-y-4">
            {/* Top row: 3 buttons */}
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
            {/* Bottom row: 4 buttons */}
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
