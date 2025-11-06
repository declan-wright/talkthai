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
    const isDrawingRef = useRef(false);
    const lastPointRef = useRef<{ x: number; y: number; pressure: number; t: number } | null>(null);
    const pointQueueRef = useRef<Array<{ x: number; y: number; pressure: number; t: number }>>([]);
    const rafIdRef = useRef<number | null>(null);
    const baseStrokeWidthRef = useRef<number>(3.5); // slightly thinner than previous 5px

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

        const context = canvas.getContext('2d', { desynchronized: true } as any);
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
            context.lineJoin = 'round';
            context.strokeStyle = '#1A1A1A';
            context.lineWidth = baseStrokeWidthRef.current;

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

    const getPointerCoords = (evt: PointerEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
    };

    const scheduleDraw = () => {
        if (rafIdRef.current != null) return;
        rafIdRef.current = requestAnimationFrame(() => {
            rafIdRef.current = null;
            const ctx = contextRef.current;
            if (!ctx) return;
            let last = lastPointRef.current;
            const queue = pointQueueRef.current;
            while (queue.length > 0) {
                const next = queue.shift()!;
                if (!last) {
                    last = next;
                    lastPointRef.current = last;
                    continue;
                }
                const midX = (last.x + next.x) / 2;
                const midY = (last.y + next.y) / 2;

                // Pressure-aware width, defaulting to a comfortable minimum
                const pressure = Math.max(0.1, Math.min(1, next.pressure || 0.5));
                const width = baseStrokeWidthRef.current * (0.75 + 0.25 * pressure);

                ctx.lineWidth = width;
                ctx.beginPath();
                ctx.moveTo(last.x, last.y);
                ctx.quadraticCurveTo(last.x, last.y, midX, midY);
                ctx.stroke();

                last = next;
                lastPointRef.current = last;
            }
        });
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        (e.currentTarget as HTMLCanvasElement).setPointerCapture(e.pointerId);
        isDrawingRef.current = true;
        setIsDrawing(true);
        setIsCanvasEmpty(false);

        const native = e.nativeEvent as PointerEvent;
        const { x, y } = getPointerCoords(native);
        const pressure = native.pressure || 0.5;
        const t = performance.now();
        lastPointRef.current = { x, y, pressure, t };
        // seed the queue with initial point so the first segment can be drawn smoothly
        pointQueueRef.current.push({ x, y, pressure, t });
        scheduleDraw();
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
        if (!isDrawingRef.current) return;
        const native = e.nativeEvent as PointerEvent;
        // Use coalesced events for high-frequency inputs (e.g., Apple Pencil)
        const events = typeof native.getCoalescedEvents === 'function' ? native.getCoalescedEvents() : [native];
        for (const ce of events) {
            const { x, y } = getPointerCoords(ce);
            const pressure = ce.pressure || 0.5;
            const t = performance.now();
            pointQueueRef.current.push({ x, y, pressure, t });
        }
        scheduleDraw();
    };

    const handlePointerUp = () => {
        isDrawingRef.current = false;
        setIsDrawing(false);
        lastPointRef.current = null;
        pointQueueRef.current.length = 0;
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
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerUp}
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