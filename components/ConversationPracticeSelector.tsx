
import React from 'react';
import type { Language, ConversationTopic, UserProfile } from '../types';
import { CONVERSATION_TOPICS } from '../data/conversationTopics';
import { UI_STRINGS } from '../data/uiStrings';
import { 
    CoffeeIcon, DirectionsIcon, MarketIcon, RestaurantIcon, TukTukIcon,
    HandWavingIcon, StoreIcon, TempleIcon, NoodleIcon, ShirtIcon, UsersIcon,
    PillIcon, PhoneIcon, BankIcon, SparklesIcon, ArrowLeftIcon
} from './Icons';
import { useAuth } from '../contexts/AuthContext';

interface ConversationPracticeSelectorProps {
  onSelect: (topic: ConversationTopic) => void;
  onBack: () => void;
  language: Language;
}

const topicIcons: { [key: number]: React.ReactNode } = {
    1: <CoffeeIcon />,
    2: <DirectionsIcon />,
    3: <MarketIcon />,
    4: <TukTukIcon />,
    5: <RestaurantIcon />,
    6: <HandWavingIcon />,
    7: <StoreIcon />,
    8: <TempleIcon />,
    9: <NoodleIcon />,
    10: <ShirtIcon />,
    11: <UsersIcon />,
    12: <PillIcon />,
    13: <PhoneIcon />,
    14: <BankIcon />,
    15: <SparklesIcon />,
};

export const ConversationPracticeSelector: React.FC<ConversationPracticeSelectorProps> = ({ onSelect, onBack, language }) => {
    const { userProfile } = useAuth();
    
    const levels: Array<'Beginner' | 'Intermediate' | 'Expert'> = ['Beginner', 'Intermediate', 'Expert'];
    
    const levelNames = {
        'Beginner': UI_STRINGS.levelBeginner[language.code],
        'Intermediate': UI_STRINGS.levelIntermediate[language.code],
        'Expert': UI_STRINGS.levelExpert[language.code],
    };

    const groupedTopics = CONVERSATION_TOPICS.reduce((acc, topic) => {
        if (!acc[topic.level]) {
            acc[topic.level] = [];
        }
        acc[topic.level].push(topic);
        return acc;
    }, {} as Record<'Beginner' | 'Intermediate' | 'Expert', ConversationTopic[]>);

    // Calculate overall progress
    const totalLessons = CONVERSATION_TOPICS.length;
    const maxPracticesPerLesson = 10;
    const totalPossiblePractices = totalLessons * maxPracticesPerLesson;
    
    let totalCompletedPractices = 0;
    CONVERSATION_TOPICS.forEach(topic => {
        const count = userProfile?.conversationPracticeCounts?.[String(topic.id)] || 0;
        totalCompletedPractices += Math.min(count, maxPracticesPerLesson);
    });
    
    const overallProgressPercent = totalPossiblePractices > 0 
        ? Math.round((totalCompletedPractices / totalPossiblePractices) * 100) 
        : 0;
    
    // Format total time
    const totalTimeMs = userProfile?.conversationTotalTimeMs || 0;
    const totalMinutes = Math.floor(totalTimeMs / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const timeDisplay = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    
    const getPracticeCount = (topicId: number): number => {
        return userProfile?.conversationPracticeCounts?.[String(topicId)] || 0;
    };

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <div className="text-center mb-10">
        <h2 className="font-heading text-5xl md:text-6xl text-warm-white uppercase">{UI_STRINGS.chooseConversation[language.code]}</h2>
      </div>
      
      {/* Overall Progress Bar */}
      <div className="mb-8 bg-warm-white/5 border border-warm-white/10 p-6">
        <div className="flex justify-between items-center mb-3">
          <div>
            <p className="text-warm-white/80 font-bold text-sm uppercase">{UI_STRINGS.conversationOverallProgress?.[language.code] || 'Overall Progress'}</p>
            <p className="text-warm-white/60 text-xs mt-1">{UI_STRINGS.conversationTotalTime?.[language.code] || 'Total Time'}: <span className="font-bold text-vibrant-orange">{timeDisplay}</span></p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-vibrant-orange">{overallProgressPercent}%</p>
            <p className="text-warm-white/60 text-xs">{totalCompletedPractices}/{totalPossiblePractices}</p>
          </div>
        </div>
        <div className="w-full bg-warm-white/10 h-3 overflow-hidden">
          <div 
            className="bg-vibrant-orange h-full transition-all duration-500"
            style={{ width: `${overallProgressPercent}%` }}
          />
        </div>
      </div>
      
      <div className="space-y-10">
        {levels.map(level => (
            groupedTopics[level] && (
                <div key={level}>
                    <div className="flex items-center mb-4">
                        <span className="bg-warm-white text-charcoal-ink font-bold py-1 px-3 text-sm uppercase">{levelNames[level]}</span>
                    </div>
                    <div className="space-y-3">
                        {groupedTopics[level].map((topic) => {
                          const practiceCount = getPracticeCount(topic.id);
                          const isComplete = practiceCount >= maxPracticesPerLesson;
                          
                          return (
                            <button
                              key={topic.id}
                              onClick={() => onSelect(topic)}
                              className="w-full flex items-center p-4 bg-warm-white rounded-none border border-light-grey text-charcoal-ink active:bg-vibrant-orange active:text-warm-white transition-colors duration-150 group"
                            >
                              <div className="text-3xl mr-5 p-3 bg-vibrant-orange text-warm-white rounded-none group-active:bg-warm-white group-active:text-vibrant-orange transition-colors duration-150">
                                  {topicIcons[topic.id]}
                              </div>
                              <div className="text-left flex-grow">
                                <h3 className="text-xl font-bold">{topic.translations[language.code].title}</h3>
                                <p className="text-charcoal-ink/70">{topic.translations[language.code].scenario}</p>
                                <div className="mt-2 flex items-center gap-2">
                                  <div className="flex-grow bg-charcoal-ink/10 h-2 max-w-[120px]">
                                    <div 
                                      className={`h-full transition-all duration-300 ${isComplete ? 'bg-green-600' : 'bg-vibrant-orange'}`}
                                      style={{ width: `${Math.min((practiceCount / maxPracticesPerLesson) * 100, 100)}%` }}
                                    />
                                  </div>
                                  <span className={`text-xs font-bold ${isComplete ? 'text-green-600' : 'text-charcoal-ink/70'}`}>
                                    {practiceCount}/{maxPracticesPerLesson}
                                  </span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                    </div>
                </div>
            )
        ))}
      </div>

      <div className="text-center mt-12">
        <button onClick={onBack} className="text-vibrant-orange hover:underline font-semibold flex items-center gap-2 mx-auto">
          <ArrowLeftIcon />
          {UI_STRINGS.backToHome[language.code]}
        </button>
      </div>
    </div>
  );
};
