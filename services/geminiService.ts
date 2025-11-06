import { GoogleGenAI, Type, Modality } from '@google/genai';
// Fix: Moved `TestQuestionType` from a type-only import to a value import to allow its use at runtime.
import type { Language, ConversationTopic, Transcript, VocabularyItem, HandwritingFeedback, ListeningSpeakingExercise, SpeakingFeedback, ConversationFeedback, LocalizedString, ConversationScriptItem, Lesson, TestQuestion, VocabMCQuestion, AppMCQuestion, AppFillBlankQuestion, ListeningSection } from '../types';
import { LanguageCode, ExerciseType, TestQuestionType } from '../types';
import { blobToBase64 } from '../utils/fileUtils';
import { getGeminiApiKey } from '../utils/env';
import { UNITS } from '../data/curriculum/units';

// Initialize the Gemini client once with robust API key resolution.
const ai = new GoogleGenAI({ apiKey: getGeminiApiKey() });

// --- Service for AuthScreen (Thai Name Translation) ---

export const translateNameToThai = async (firstName: string, lastName: string): Promise<string> => {
    const prompt = `Convert the phonetic Thai first name "${firstName}" and last name "${lastName}" into proper Thai script. The output should only be in Thai script.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    firstNameThai: { type: Type.STRING, description: 'The first name converted to Thai script.' },
                    lastNameThai: { type: Type.STRING, description: 'The last name converted to Thai script.' },
                },
                required: ['firstNameThai', 'lastNameThai']
            }
        }
    });

    const jsonResponse = JSON.parse(response.text);
    return `${jsonResponse.firstNameThai} ${jsonResponse.lastNameThai}`;
};

// --- Service for Romanization to Thai conversion ---
export const convertRomanizationToThai = async (romanizedText: string): Promise<string> => {
    if (!romanizedText.trim()) {
        return '';
    }
    
    const prompt = `Convert the following romanized (phonetic) Thai text into a single, accurate Thai script phrase: "${romanizedText}"`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash', // Using gemini-2.5-flash as requested
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    thaiScript: { 
                        type: Type.STRING, 
                        description: 'The converted Thai script. Should contain only Thai characters and spaces.' 
                    },
                },
                required: ['thaiScript']
            }
        }
    });

    const jsonResponse = JSON.parse(response.text);
    return jsonResponse.thaiScript || '';
};

// --- Services for Analysis (Conversation & Writing) ---

export const generateConversationFeedback = async (
    audioBlob: globalThis.Blob,
    language: Language,
    topic: ConversationTopic
): Promise<ConversationFeedback> => {
    const audioBase64 = await blobToBase64(audioBlob);
    
    const feedbackSchema = {
        type: Type.OBJECT,
        properties: {
            isRecognizable: { 
                type: Type.BOOLEAN, 
                description: "Set to true if the audio contains a genuine attempt at a Thai conversation related to the scenario, even if poorly pronounced or with errors. Set to false ONLY if the audio contains no Thai speech, is just noise, or is completely unrelated to a conversation." 
            },
            reasoning: { 
                type: Type.STRING, 
                description: `If 'isRecognizable' is false, a brief explanation why in ${language.name}. If true, this can be an empty string.` 
            },
            overallScore: { 
                type: Type.INTEGER, 
                description: "Overall conversation performance score from 1-5 stars." 
            },
            overallFeedback: { 
                type: Type.STRING, 
                description: `A concise paragraph summarizing the overall conversation performance and offering encouragement. Must be in ${language.name}.` 
            },
            pronunciationScore: { 
                type: Type.INTEGER, 
                description: "Pronunciation score from 1-5 stars, focusing on individual consonant and vowel sounds across the conversation." 
            },
            pronunciationFeedback: { 
                type: Type.STRING, 
                description: `A concise paragraph explaining the pronunciation score, highlighting what was good and what specific sounds or words need work. Must be in ${language.name}.` 
            },
            fluencyScore: { 
                type: Type.INTEGER, 
                description: "Fluency score from 1-5 stars, focusing on rhythm, flow, and conversational naturalness." 
            },
            fluencyFeedback: { 
                type: Type.STRING, 
                description: `A concise paragraph explaining the fluency score, commenting on the pace, smoothness, and conversational flow. Must be in ${language.name}.` 
            },
            toneScore: { 
                type: Type.INTEGER, 
                description: "Thai tone accuracy score from 1-5 stars across the conversation." 
            },
            toneFeedback: { 
                type: Type.STRING, 
                description: `A concise paragraph explaining the tone score, identifying any specific words where the tone was incorrect (e.g., rising instead of falling). Must be in ${language.name}.` 
            },
            keyRecommendation: { 
                type: Type.STRING, 
                description: `The single most important tip for improvement in future conversations, in ${language.name}.` 
            }
        },
        required: ["isRecognizable", "reasoning", "overallScore", "overallFeedback", "pronunciationScore", "pronunciationFeedback", "fluencyScore", "fluencyFeedback", "toneScore", "toneFeedback", "keyRecommendation"]
    };

    const prompt = `You are an expert Thai language conversation coach. Analyze the user's audio recording of a Thai conversation practice session.
**Scenario:** ${topic.translations[LanguageCode.ENGLISH].scenario}
**User's native language:** ${language.name}

Your task is to provide structured feedback in JSON format by analyzing the AUDIO ONLY (not any transcript, as transcripts are often inaccurate). All text feedback must be in ${language.name}.

**Analysis Rules:**
- Listen to the actual audio to understand what was said in the conversation.
- Be lenient. If the audio contains a recognizable attempt at Thai conversation practice related to the scenario, set 'isRecognizable' to true and provide a full analysis.
- **IMPORTANT**: Do not penalize the user for common pronunciation shortcuts that native Thai speakers use. A key example is dropping 'r' (ร) or 'l' (ล) sounds in consonant clusters (e.g., pronouncing 'krap' as 'kap', or 'klong' as 'kong'). If you detect this, either ignore it or praise it as sounding natural.
- Only set 'isRecognizable' to false if the audio clearly contains no Thai conversation attempt (e.g., silence, noise, different language, etc.).
- Provide a paragraph of feedback for each category: Pronunciation, Fluency, and Tone.
- The feedback should be constructive, clear, and encouraging.
- The scores (1-5 stars) and feedback paragraphs must be consistent with each other.
- Focus on the user's speaking performance in the conversation, not the AI tutor's responses.`;

    const audioPart = { 
        inlineData: { 
            mimeType: audioBlob.type || 'audio/wav', 
            data: audioBase64 
        } 
    };
    const textPart = { text: prompt };

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: { parts: [textPart, audioPart] },
        config: {
            responseMimeType: "application/json",
            responseSchema: feedbackSchema,
        },
    });
    
    return JSON.parse(response.text) as ConversationFeedback;
};

export const generateHandwritingFeedback = async (
    imageData: string,
    mimeType: string,
    word: VocabularyItem,
    language: Language
): Promise<HandwritingFeedback> => {
    const feedbackSchema = {
        type: Type.OBJECT,
        properties: {
            isCorrectWord: {
                type: Type.BOOLEAN,
                description: "Crucially, this should be true for ANY genuine attempt to write the target Thai word, regardless of how messy, misspelled, or inaccurate it is. Set this to false ONLY if the image clearly contains something entirely different, such as a photograph of an object, a word from another language, a completely different and unrelated Thai word, or is just random scribbles with no resemblance to Thai script."
            },
            reasoning: {
                type: Type.STRING,
                description: "If 'isCorrectWord' is false, a brief explanation why. If true, this can be an empty string."
            },
            overallScore: {
                type: Type.INTEGER,
                description: "An overall score from 1 (many errors) to 5 (excellent)."
            },
            overallComment: {
                type: Type.STRING,
                description: "A single, concise sentence summarizing the overall quality of the handwriting."
            },
            wordAnalysis: {
                type: Type.ARRAY,
                description: "An analysis for each individual word in the target phrase. If the target is a single word, this array will have one item.",
                items: {
                    type: Type.OBJECT,
                    properties: {
                        word: { type: Type.STRING, description: "The specific Thai word being analyzed from the phrase." },
                        positiveFeedback: { type: Type.STRING, description: "A brief, positive comment about what the user did correctly for this word's shape, spacing, or strokes." },
                        improvementTip: { type: Type.STRING, description: "A single, actionable tip for improving this specific word." },
                    },
                    required: ["word", "positiveFeedback", "improvementTip"]
                }
            },
            keyRecommendation: {
                type: Type.STRING,
                description: "The single most important and actionable piece of advice for the user to focus on next time."
            },
        },
        required: ["isCorrectWord", "reasoning", "overallScore", "overallComment", "wordAnalysis", "keyRecommendation"]
    };

    const prompt = `Analyze the user's handwriting in the provided image. The user is a native ${language.name} speaker who was asked to write the Thai phrase for "${word.translations[language.code]}", which is "${word.thai}" (phonetic: ${word.phonetic}).

Your task is to evaluate their attempt based on standard Thai typography and provide a structured, word-by-word analysis by filling out the JSON schema. All text feedback must be in the user's native language: **${language.name}**.

**Analysis Rules:**
- Be lenient. The user is a beginner. If their writing is a recognizable attempt at the target word, even with significant errors (wrong characters, poor strokes, missing tone marks), you MUST provide a full analysis and set 'isCorrectWord' to true.
- Only reject the image (set 'isCorrectWord' to false) if it's clearly not an attempt to write the requested word (e.g., it's a photo of a cat, the word 'hello' in English, etc.).
- The analysis should be technical, objective, and constructive.`;

    const imagePart = {
        inlineData: {
          mimeType: mimeType,
          data: imageData,
        },
    };
    const textPart = { text: prompt };

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: { parts: [textPart, imagePart] },
        config: {
            responseMimeType: "application/json",
            responseSchema: feedbackSchema,
        },
    });

    return JSON.parse(response.text) as HandwritingFeedback;
};


// --- Services for ListeningSpeakingPractice ---

export const generateDynamicListeningExercise = async (
    language: Language,
    completedLessons: { id: string; title: string }[],
    currentLesson: Lesson | null = null
): Promise<Pick<ListeningSpeakingExercise, 'conversation' | 'comprehensionQuestions'>> => {
    const langCode = language.code;
    const schema = {
        type: Type.OBJECT,
        properties: {
            conversation: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        speaker: { type: Type.STRING },
                        line: { type: Type.STRING }
                    },
                    required: ['speaker', 'line']
                }
            },
            comprehensionQuestions: {
                type: Type.OBJECT,
                properties: {
                    type: { type: Type.STRING, enum: [ExerciseType.MULTIPLE_CHOICE] },
                    prompt: { type: Type.STRING },
                    questions: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                question: { type: Type.STRING },
                                options: {
                                    type: Type.ARRAY,
                                    items: { type: Type.STRING }
                                },
                                correctIndex: { type: Type.INTEGER }
                            },
                            required: ['question', 'options', 'correctIndex']
                        }
                    }
                },
                required: ['type', 'prompt', 'questions']
            }
        },
        required: ['conversation', 'comprehensionQuestions']
    };

    // Calculate dynamic line count based on unit and lesson number
    let baseLineCount = 2;
    let maxLineCount = 4;
    
    if (currentLesson) {
        const lessonIdParts = currentLesson.id.split('.');
        if (lessonIdParts.length === 2) {
            const unitNum = parseInt(lessonIdParts[0], 10);
            const lessonNum = parseFloat(lessonIdParts[1]);
            const x = unitNum * lessonNum;
            
            // Find the current unit and calculate mean of x for all lessons in that unit
            const currentUnit = UNITS.find(u => u.id === unitNum);
            if (currentUnit) {
                const xValues = currentUnit.lessons.map(l => {
                    const parts = l.id.split('.');
                    if (parts.length === 2) {
                        return parseInt(parts[0], 10) * parseFloat(parts[1]);
                    }
                    return 0;
                });
                const meanX = xValues.length > 0 
                    ? xValues.reduce((sum, val) => sum + val, 0) / xValues.length 
                    : 0;
                
                // Calculate line count adjustment: (x * meanX) / 20, rounded
                const lineAdjustment = Math.round((x * meanX) / 20);
                baseLineCount = 2 + lineAdjustment;
                maxLineCount = 4 + lineAdjustment;
            }
        }
    }

    // Build context prompt with lesson topic and vocabulary
    let contextPrompt = "";
    
    if (currentLesson) {
        const lessonTopic = `${currentLesson.id} ${currentLesson.title[langCode]}`;
        const vocabCount = currentLesson.vocabulary.length;
        
        // Randomly sample vocabulary (shuffle and take first 6)
        const shuffledVocab = [...currentLesson.vocabulary].sort(() => Math.random() - 0.5);
        const vocabExamples = shuffledVocab.slice(0, 6).map(v => 
            `${v.thai} (${v.phonetic}) - ${v.translations[langCode]}`
        ).join(', ');
        
        contextPrompt = `\nThe topic of the conversation in this lesson is: ${lessonTopic}. Here are 6 examples of vocabulary words that might appear in this lesson (total of ${vocabCount} related vocabulary terms in total): ${vocabExamples}.`;
        
        if (completedLessons && completedLessons.length > 0) {
            const lessonTitles = completedLessons.map(l => `"${l.id}: ${l.title}"`).join(', ');
            contextPrompt += `\nFor context, the user has already started the tests for these lessons: ${lessonTitles}. Adjust the conversation's difficulty accordingly.`;
        }
    } else if (completedLessons && completedLessons.length > 0) {
        const lessonTitles = completedLessons.map(l => `"${l.id}: ${l.title}"`).join(', ');
        contextPrompt = `\nFor context, the user has already started the tests for these lessons: ${lessonTitles}. Adjust the conversation's difficulty accordingly.`;
    } else {
        contextPrompt = `\nFor context, the listener is a complete beginner with only knowledge of basic greetings. Keep the conversation extremely simple.`;
    }

    const prompt = `Generate a simple, two-person Thai conversation for a beginner ${language.name} speaker. The conversation should be ${baseLineCount} to ${maxLineCount} lines total.
**CRITICAL RULE:** The first speaker (e.g., "A", "Tourist") must be female, and the second speaker (e.g., "B", "Shopkeeper") must be male.
The speakers should have simple names, like "A" and "B", or "Tourist" and "Shopkeeper".${contextPrompt}
After the conversation, create exactly 3 multiple-choice comprehension questions in ${language.name} based on the dialogue. Each question must have 3 distinct options. Provide the correct 0-based index for the answer.
Format the entire output as a single, valid JSON object that strictly adheres to the provided JSON schema. Ensure all text for prompts, questions, and options is in ${language.name}.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: schema,
        }
    });

    const parsedContent = JSON.parse(response.text);
    
    if (!parsedContent.conversation || !parsedContent.comprehensionQuestions || !parsedContent.comprehensionQuestions.questions) {
        throw new Error("Received malformed content from the API. The generated conversation or questions were missing.");
    }
    
    // Transform the simplified content to match the app's TypeScript types
    const transformedContent: Pick<ListeningSpeakingExercise, 'conversation' | 'comprehensionQuestions'> = {
        conversation: parsedContent.conversation.map((item: { speaker: string; line: string; }) => ({
            speaker: item.speaker,
            line: { [langCode]: item.line }
        })),
        comprehensionQuestions: {
            ...parsedContent.comprehensionQuestions,
            prompt: { [langCode]: parsedContent.comprehensionQuestions.prompt },
            questions: parsedContent.comprehensionQuestions.questions.map((q: { question: string; options: string[]; correctIndex: number }) => ({
                question: { [langCode]: q.question },
                options: q.options.map((opt: string) => ({ [langCode]: opt })),
                correctIndex: q.correctIndex
            }))
        }
    };

    return transformedContent;
};

export const generateSpeechForConversation = async (conversation: ConversationScriptItem[], langCode: LanguageCode): Promise<string> => {
    const conversationText = conversation
        .map(line => `${line.speaker}: ${line.line[langCode]}`)
        .join('\n');
    const prompt = `TTS the following Thai conversation:\n${conversationText}`;

    const uniqueSpeakers = [...new Set(conversation.map(l => l.speaker))];
    const speakerVoices = ['Kore', 'Puck', 'Charon', 'Fenrir'];
    const speakerConfigs = uniqueSpeakers.slice(0, 2).map((speaker, index) => ({
        speaker,
        voiceConfig: { prebuiltVoiceConfig: { voiceName: speakerVoices[index % speakerVoices.length] } }
    }));

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: prompt }] }],
        config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
                multiSpeakerVoiceConfig: {
                    speakerVoiceConfigs: speakerConfigs
                }
            }
        }
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
        throw new Error("No audio data received from API.");
    }
    return base64Audio;
};

export const analyzeSpokenPhrase = async (
    audioBlob: Blob,
    speakingPrompt: LocalizedString,
    phoneticPrompt: LocalizedString,
    language: Language
): Promise<SpeakingFeedback> => {
    const audioBase64 = await blobToBase64(audioBlob);
    
    const feedbackSchema = {
        type: Type.OBJECT,
        properties: {
            isRecognizable: { type: Type.BOOLEAN, description: "Set to true if the audio is a genuine attempt to say the target phrase, even if poorly pronounced. Set to false ONLY if the audio contains completely different words, a different language, or is just noise." },
            reasoning: { type: Type.STRING, description: `If 'isRecognizable' is false, a brief explanation why in ${language.name}. If true, this can be an empty string.` },
            overallScore: { type: Type.INTEGER, description: "Overall score from 1-5." },
            overallFeedback: { type: Type.STRING, description: `A concise paragraph summarizing the overall performance and offering encouragement. Must be in ${language.name}.` },
            pronunciationScore: { type: Type.INTEGER, description: "Pronunciation score from 1-5, focusing on individual consonant and vowel sounds." },
            pronunciationFeedback: { type: Type.STRING, description: `A concise paragraph explaining the pronunciation score, highlighting what was good and what specific sounds need work. Must be in ${language.name}.` },
            fluencyScore: { type: Type.INTEGER, description: "Fluency score from 1-5, focusing on rhythm and flow." },
            fluencyFeedback: { type: Type.STRING, description: `A concise paragraph explaining the fluency score, commenting on the pace and smoothness of the speech. Must be in ${language.name}.` },
            toneScore: { type: Type.INTEGER, description: "Thai tone accuracy score from 1-5." },
            toneFeedback: { type: Type.STRING, description: `A concise paragraph explaining the tone score, identifying any specific words where the tone was incorrect (e.g., rising instead of falling). Must be in ${language.name}.` },
            keyRecommendation: { type: Type.STRING, description: `The single most important tip for improvement, in ${language.name}.` }
        },
        required: ["isRecognizable", "reasoning", "overallScore", "overallFeedback", "pronunciationScore", "pronunciationFeedback", "fluencyScore", "fluencyFeedback", "toneScore", "toneFeedback", "keyRecommendation"]
    };

    const prompt = `You are an expert Thai language pronunciation coach. Analyze the user's audio recording where they attempt to say the following Thai phrase:
**Phrase:** ${speakingPrompt[language.code]} (phonetic: ${phoneticPrompt[language.code]})
**User's native language:** ${language.name}

Your task is to provide structured feedback in JSON format. All text feedback must be in ${language.name}.

**Analysis Rules:**
- Be lenient. If the audio is a recognizable attempt at the target phrase, set 'isRecognizable' to true and provide a full analysis.
- **IMPORTANT**: Do not penalize the user for common pronunciation shortcuts that native Thai speakers use. A key example is dropping 'r' (ร) or 'l' (ล) sounds in consonant clusters (e.g., pronouncing 'krap' as 'kap', or 'klong' as 'kong'). If you detect this, either ignore it or praise it as sounding natural.
- Only set 'isRecognizable' to false if the audio is clearly not the target phrase (e.g., different words, noise, etc.).
- Instead of a word-by-word breakdown, provide a paragraph of feedback for each category: Pronunciation, Fluency, and Tone.
- The feedback should be constructive, clear, and encouraging.
- The scores (1-5) and feedback paragraphs must be consistent with each other.`;

    const audioPart = { inlineData: { mimeType: audioBlob.type || 'audio/webm', data: audioBase64 } };
    const textPart = { text: prompt };

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: { parts: [textPart, audioPart] },
        config: {
            responseMimeType: "application/json",
            responseSchema: feedbackSchema,
        },
    });
    
    return JSON.parse(response.text) as SpeakingFeedback;
};


// --- Service for Test Module ---

export const generateTestQuestions = async (lesson: Lesson, language: Language): Promise<{
    applicationQuestions: (AppMCQuestion | AppFillBlankQuestion)[],
    listeningSection: ListeningSection,
}> => {
    const langCode = language.code;
    const vocabList = lesson.vocabulary.map(v => `"${v.thai}" (${v.phonetic}) means "${v.translations[langCode]}"`).join(', ');

    const schema = {
        type: Type.OBJECT,
        properties: {
            applicationMC: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        question: { type: Type.STRING },
                        options: { type: Type.ARRAY, items: { type: Type.STRING } },
                        correctAnswer: { type: Type.STRING }
                    },
                    required: ["question", "options", "correctAnswer"]
                }
            },
            applicationFillBlank: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        start: { type: Type.STRING },
                        end: { type: Type.STRING },
                        correctAnswer: { type: Type.STRING }
                    },
                    required: ["start", "end", "correctAnswer"]
                }
            },
            listeningDialogue: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        speaker: { type: Type.STRING },
                        line: { type: Type.STRING }
                    },
                    required: ["speaker", "line"]
                }
            },
            listeningQuestions: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        question: { type: Type.STRING },
                        options: { type: Type.ARRAY, items: { type: Type.STRING } },
                        correctAnswer: { type: Type.STRING }
                    },
                    required: ["question", "options", "correctAnswer"]
                }
            }
        },
        required: ["applicationMC", "applicationFillBlank", "listeningDialogue", "listeningQuestions"]
    };

    const prompt = `You are a Thai language teacher creating a test for a beginner student whose native language is ${language.name}. The test is for the lesson titled "${lesson.title[langCode]}". The vocabulary for this lesson is: ${vocabList}.

Your task is to generate a set of **NEW and UNSEEN** test questions that are different from any practice material. The questions must be at a beginner level and based on the provided vocabulary and lesson theme.

Provide the output as a single, valid JSON object following this schema.

**Requirements:**
- Generate exactly 5 multiple choice application questions. Each must have 3 options.
- Generate exactly 3 fill-in-the-blank application questions.
- Generate a new, simple, 2-4 line dialogue **IN THAI SCRIPT**. The first speaker must be female, and the second male. Use simple speaker names like 'A' and 'B'.
- Generate exactly 3 multiple choice comprehension questions about the dialogue. Each must have 3 options.

**Language Rules:**
- All text for questions, options, and sentence parts ("start", "end") MUST be in **${language.name}**.
- All "correctAnswer" values for fill-in-the-blank MUST be in **Thai script**.
- All dialogue lines MUST be in **Thai script**.
`;

    const textResponse = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: schema,
        }
    });
    const parsedText = JSON.parse(textResponse.text);

    const listeningDialogueForTts: ConversationScriptItem[] = parsedText.listeningDialogue.map((line: { speaker: string, line: string }) => ({
        speaker: line.speaker,
        line: { [langCode]: line.line } // TTS service expects this structure, with Thai text under the langCode key
    }));

    const audioBase64 = await generateSpeechForConversation(listeningDialogueForTts, langCode);

    const appMCQuestions: AppMCQuestion[] = parsedText.applicationMC.map((q: any) => ({
        ...q,
        type: TestQuestionType.APP_MC,
        points: 6,
    }));

    const appFillBlankQuestions: AppFillBlankQuestion[] = parsedText.applicationFillBlank.map((q: any) => ({
        ...q,
        type: TestQuestionType.APP_FILL_BLANK,
        points: 5,
    }));
    
    const listeningSection: ListeningSection = {
        type: TestQuestionType.LISTENING,
        audioBase64,
        questions: parsedText.listeningQuestions,
        points: 6 // Points per question, total will be calculated based on number correct
    };

    return {
        applicationQuestions: [...appMCQuestions, ...appFillBlankQuestions],
        listeningSection
    };
};