
import React from 'react';
import type { Language, ConversationTopic } from '../types';
import { CONVERSATION_TOPICS } from '../data/conversationTopics';
import { UI_STRINGS } from '../data/uiStrings';
import { 
    CoffeeIcon, DirectionsIcon, MarketIcon, RestaurantIcon, TukTukIcon,
    HandWavingIcon, StoreIcon, TempleIcon, NoodleIcon, ShirtIcon, UsersIcon,
    PillIcon, PhoneIcon, BankIcon, SparklesIcon, ArrowLeftIcon
} from './Icons';

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

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <div className="text-center mb-10">
        <h2 className="font-heading text-5xl md:text-6xl text-warm-white uppercase">{UI_STRINGS.chooseConversation[language.code]}</h2>
      </div>
      
      <div className="space-y-10">
        {levels.map(level => (
            groupedTopics[level] && (
                <div key={level}>
                    <div className="flex items-center mb-4">
                        <span className="bg-warm-white text-charcoal-ink font-bold py-1 px-3 text-sm uppercase">{levelNames[level]}</span>
                    </div>
                    <div className="space-y-3">
                        {groupedTopics[level].map((topic) => (
                          <button
                            key={topic.id}
                            onClick={() => onSelect(topic)}
                            className="w-full flex items-center p-4 bg-warm-white rounded-none border border-light-grey text-charcoal-ink active:bg-vibrant-orange active:text-warm-white transition-colors duration-150 group"
                          >
                            <div className="text-3xl mr-5 p-3 bg-vibrant-orange text-warm-white rounded-none group-active:bg-warm-white group-active:text-vibrant-orange transition-colors duration-150">
                                {topicIcons[topic.id]}
                            </div>
                            <div className="text-left">
                              <h3 className="text-xl font-bold">{topic.translations[language.code].title}</h3>
                              <p className="text-charcoal-ink/70">{topic.translations[language.code].scenario}</p>
                            </div>
                          </button>
                        ))}
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
