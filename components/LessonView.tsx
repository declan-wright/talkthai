

import React, { useState, useEffect } from 'react';
import type { Language, Lesson } from '../types';
import { UI_STRINGS } from '../data/uiStrings';
import { ArrowLeftIcon } from './Icons';
import { Vocabulary } from './Vocabulary';
import { Worksheet } from './Worksheet';
import { ListeningSpeakingPractice } from './ListeningSpeakingPractice';
import { TestView } from './TestView';
import { useAuth } from '../contexts/AuthContext';

interface LessonViewProps {
  lesson: Lesson;
  language: Language;
  onBack: () => void;
}

type LessonTab = 'vocabulary' | 'worksheet' | 'listeningSpeaking' | 'test';

export const LessonView: React.FC<LessonViewProps> = ({ lesson, language, onBack }) => {
  const { userProfile, reloadProfile } = useAuth();
  const [activeTab, setActiveTab] = useState<LessonTab>('vocabulary');
  const [isStudying, setIsStudying] = useState(false);
  const [isTakingTest, setIsTakingTest] = useState(false);

  const hasTakenTest = userProfile?.testScores?.[lesson.id] !== undefined;

  const handleStartTest = () => {
    setIsTakingTest(true);
  };

  const handleFinishTest = async () => {
    await reloadProfile?.();
    setIsTakingTest(false);
  }

  const renderTab = (tab: LessonTab, uiString: string) => {
    const [number, ...textParts] = uiString.split('. ');
    const text = textParts.join('. ');
    const isActive = activeTab === tab;

    return (
        <button
            onClick={() => setActiveTab(tab)}
            disabled={isTakingTest}
            className={`py-3 px-2 sm:px-4 font-bold uppercase text-sm focus:outline-none text-center transition-colors duration-200 disabled:opacity-50 ${isActive ? 'flex-grow bg-vibrant-orange text-warm-white' : 'flex-shrink-0 hover:bg-light-grey'}`}
            aria-current={isActive ? 'page' : undefined}
        >
            <span className="font-heading">{number}.</span>
            <span className={isActive ? 'ml-1' : 'hidden sm:inline ml-1'}>
                {text}
            </span>
        </button>
    );
};

  return (
    <div className="w-full h-full flex flex-col max-w-4xl mx-auto bg-warm-white text-charcoal-ink rounded-none border border-light-grey overflow-hidden" style={{height: '90vh'}}>
        <header className="p-4 border-b border-light-grey flex-shrink-0">
            <button 
                onClick={onBack} 
                className="text-sm font-medium text-vibrant-orange hover:underline flex items-center gap-2 mb-2"
            >
                <ArrowLeftIcon />
                {UI_STRINGS.backToHome[language.code]}
            </button>
            <h2 className="font-heading text-xl md:text-2xl uppercase">{lesson.id}: {lesson.title[language.code]}</h2>
        </header>
        
        {!isStudying && (
            <div className="border-b border-light-grey flex-shrink-0">
                <nav className="flex" role="tablist" aria-label="Lesson Sections">
                    {renderTab('vocabulary', UI_STRINGS.tabVocabulary[language.code])}
                    {renderTab('worksheet', UI_STRINGS.tabWorksheet[language.code])}
                    {renderTab('listeningSpeaking', UI_STRINGS.tabListeningSpeaking[language.code])}
                    {renderTab('test', UI_STRINGS.tabTest[language.code])}
                </nav>
            </div>
        )}

        <main className={`flex-1 overflow-y-auto no-scrollbar ${!isStudying && !isTakingTest ? 'p-4 md:p-6' : ''}`}>
            {activeTab === 'vocabulary' && <Vocabulary lesson={lesson} language={language} onStudyStateChange={setIsStudying} />}
            {activeTab === 'worksheet' && <Worksheet lesson={lesson} language={language} />}
            {activeTab === 'listeningSpeaking' && (
                lesson.listeningSpeaking ? (
                    <ListeningSpeakingPractice 
                        exercise={lesson.listeningSpeaking}
                        language={language}
                        lesson={lesson}
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-charcoal-ink/50">
                        <p>Listening & Speaking practice is not available for this lesson.</p>
                    </div>
                )
            )}
            {activeTab === 'test' && (
                isTakingTest ? (
                    <TestView lesson={lesson} language={language} onFinish={handleFinishTest} />
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center text-charcoal-ink p-6">
                        {hasTakenTest ? (
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{UI_STRINGS.testCompletedTitle[language.code]}</h3>
                                <p className="text-charcoal-ink/80 mb-8 max-w-md">{UI_STRINGS.testCompletedMessage[language.code]}</p>
                                 <button
                                    onClick={onBack}
                                    className="bg-charcoal-ink text-warm-white font-bold py-3 px-8 uppercase text-lg active:scale-95 transition-transform rounded-none"
                                >
                                    {UI_STRINGS.backToHome[language.code]}
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{UI_STRINGS.testStartTitle[language.code]}</h3>
                                <p className="text-charcoal-ink/80 mb-8">{UI_STRINGS.testStartSubtitle[language.code]}</p>
                                <button
                                    onClick={handleStartTest}
                                    className="bg-vibrant-orange text-warm-white font-bold py-3 px-8 uppercase text-lg active:scale-95 transition-transform rounded-none"
                                >
                                    {UI_STRINGS.testStartButton[language.code]}
                                </button>
                            </div>
                        )}
                    </div>
                )
            )}
        </main>
    </div>
  );
};