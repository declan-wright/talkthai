import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Language, Lesson, VocabularyItem } from '../types';
import { UI_STRINGS } from '../data/uiStrings';
import { ArrowLeftIcon, CameraIcon, UploadIcon } from './Icons';

interface WritingPracticeProps {
  lesson: Lesson;
  language: Language;
  onFinish: (imageData: string, mimeType: string, word: VocabularyItem) => void;
  onBack: () => void;
}

export const WritingPractice: React.FC<WritingPracticeProps> = ({ lesson, language, onFinish, onBack }) => {
    const [currentWord, setCurrentWord] = useState<VocabularyItem | null>(null);
    const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const pickNewWord = useCallback(() => {
        if (lesson.vocabulary.length > 0) {
            const randomIndex = Math.floor(Math.random() * lesson.vocabulary.length);
            setCurrentWord(lesson.vocabulary[randomIndex]);
        }
    }, [lesson.vocabulary]);

    // This effect runs once on mount to pick the initial word.
    useEffect(() => {
        pickNewWord();
    }, [pickNewWord]);

    // This is the core effect that sets up, resizes, and clears the canvas.
    // It runs whenever currentWord changes, which is what we want for clearing.
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;
        contextRef.current = context;

        const setupCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            if (rect.width === 0 || rect.height === 0) return;

            // Set the canvas physical size to match its CSS size, scaled by DPR for high-res displays.
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            // Scale the drawing context so we can use CSS pixels for coordinates.
            context.scale(dpr, dpr);

            // Set drawing properties. These are reset after every resize/setup.
            context.lineCap = 'round';
            context.strokeStyle = '#1A1A1A';
            context.lineWidth = 5;

            // Fill background, effectively clearing the canvas.
            context.fillStyle = '#FAF7F0';
            context.fillRect(0, 0, rect.width, rect.height);
            setIsCanvasEmpty(true);
        };

        // Run setup.
        setupCanvas();

        // Add resize listener to re-run setup.
        window.addEventListener('resize', setupCanvas);

        // Cleanup: remove listener.
        return () => {
            window.removeEventListener('resize', setupCanvas);
        };
    }, [currentWord]); // Dependency on currentWord ensures canvas is cleared for new words.

    const getCoords = (event: MouseEvent | TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { offsetX: 0, offsetY: 0 };
        const rect = canvas.getBoundingClientRect();
        
        let clientX, clientY;
        if (event instanceof MouseEvent) {
            clientX = event.clientX;
            clientY = event.clientY;
        } else if (event.touches[0]) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else {
            return { offsetX: 0, offsetY: 0 };
        }

        return { offsetX: clientX - rect.left, offsetY: clientY - rect.top };
    }

    const startDrawing = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        const { offsetX, offsetY } = getCoords(event.nativeEvent);
        contextRef.current?.beginPath();
        contextRef.current?.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current?.closePath();
        setIsDrawing(false);
    };

    const draw = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return;
        
        // Prevent scrolling on touch devices while drawing
        if (event.nativeEvent instanceof TouchEvent) {
            event.preventDefault();
        }

        const { offsetX, offsetY } = getCoords(event.nativeEvent);
        contextRef.current?.lineTo(offsetX, offsetY);
        contextRef.current?.stroke();
        setIsCanvasEmpty(false);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = contextRef.current;
        if (canvas && context) {
            const rect = canvas.getBoundingClientRect();
            context.fillStyle = '#FAF7F0';
            context.fillRect(0, 0, rect.width, rect.height);
            setIsCanvasEmpty(true);
        }
    };
    
    const handleSubmitDrawing = () => {
        if (isCanvasEmpty || !currentWord) return;
        const canvas = canvasRef.current;
        if (canvas) {
            const dataUrl = canvas.toDataURL('image/png');
            const base64 = dataUrl.split(',')[1];
            onFinish(base64, 'image/png', currentWord);
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && currentWord) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = (reader.result as string)?.split(',')[1];
                if (base64) {
                    onFinish(base64, file.type, currentWord);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    if (!currentWord) {
        return (
             <div className="w-full h-full flex flex-col max-w-3xl mx-auto items-center justify-center text-center">
                <p className="text-warm-white/70">This lesson has no vocabulary to practice.</p>
                <button onClick={onBack} className="text-vibrant-orange hover:underline font-semibold flex items-center gap-2 mx-auto mt-4">
                  <ArrowLeftIcon />
                  Back to Lessons
                </button>
            </div>
        )
    }

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col" style={{height: '90vh'}}>
             <header className="p-4 flex-shrink-0 text-warm-white">
                <button onClick={onBack} className="text-vibrant-orange hover:underline font-semibold flex items-center gap-2 mb-2">
                    <ArrowLeftIcon />
                    {UI_STRINGS.chooseAnotherLesson[language.code]}
                </button>
                <h2 className="font-heading text-xl md:text-2xl uppercase">{lesson.id}: {lesson.title[language.code]}</h2>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="text-center mb-4">
                    <p className="text-lg text-warm-white/80">{UI_STRINGS.writeTheWordFor[language.code]}</p>
                    <p className="text-4xl font-bold text-warm-white">{currentWord.translations[language.code]}</p>
                    <p className="text-xl text-warm-white/60">({currentWord.phonetic})</p>
                </div>
                
                <div className="w-full max-w-2xl p-2 border-4 border-warm-white/20">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-52 cursor-crosshair touch-none"
                        onMouseDown={startDrawing}
                        onMouseUp={finishDrawing}
                        onMouseLeave={finishDrawing}
                        onMouseMove={draw}
                        onTouchStart={startDrawing}
                        onTouchEnd={finishDrawing}
                        onTouchMove={draw}
                    />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-4 mt-4 w-full max-w-2xl">
                    <button onClick={clearCanvas} className="font-bold py-2 px-4 text-warm-white/70 hover:text-warm-white">{UI_STRINGS.clear[language.code]}</button>
                    <button onClick={pickNewWord} className="font-bold py-2 px-4 text-warm-white/70 hover:text-warm-white">{UI_STRINGS.nextWord[language.code]}</button>
                    <button onClick={handleSubmitDrawing} disabled={isCanvasEmpty} className="bg-vibrant-orange text-warm-white font-bold py-3 px-6 uppercase disabled:bg-vibrant-orange/50 active:scale-95 transition-transform">
                        {UI_STRINGS.submitDrawing[language.code]}
                    </button>
                </div>

                <div className="text-warm-white/50 my-6">OR</div>
                
                <input type="file" accept="image/*" capture="user" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                <button onClick={() => fileInputRef.current?.click()} className="bg-warm-white/10 hover:bg-warm-white/20 text-warm-white font-bold py-3 px-6 uppercase flex items-center gap-2 active:scale-95 transition-transform">
                    <CameraIcon className="w-5 h-5"/>
                    {UI_STRINGS.uploadPhoto[language.code]}
                </button>

            </main>
        </div>
    );
};