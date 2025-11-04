import React, { useRef, useEffect } from 'react';

interface WaveformVisualizerProps {
  analyserNode: AnalyserNode;
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

export const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({
  analyserNode,
  width = 150,
  height = 40,
  strokeColor = '#FAF7F0',
  strokeWidth = 2,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasCtx = canvas.getContext('2d');
    if (!canvasCtx) return;

    analyserNode.fftSize = 2048;
    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationFrameId.current = requestAnimationFrame(draw);
      analyserNode.getByteTimeDomainData(dataArray);

      canvasCtx.clearRect(0, 0, width, height);
      canvasCtx.lineWidth = strokeWidth;
      canvasCtx.strokeStyle = strokeColor;
      canvasCtx.beginPath();

      const sliceWidth = (width * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * height) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(width, height / 2);
      canvasCtx.stroke();
    };

    draw();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [analyserNode, width, height, strokeColor, strokeWidth]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};
