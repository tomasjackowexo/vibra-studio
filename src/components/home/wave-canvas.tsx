"use client";

import { useEffect, useRef } from "react";

const lines = [
  { amplitude: 0.28, freq: 1.4, speed: 0.00035, offset: 0, width: 1.8, alpha: 0.78 },
  { amplitude: 0.2, freq: 2.1, speed: 0.0005, offset: 1.3, width: 1.3, alpha: 0.48 },
  { amplitude: 0.14, freq: 3.2, speed: 0.0007, offset: 2.6, width: 1.05, alpha: 0.3 },
  { amplitude: 0.1, freq: 4.6, speed: 0.0009, offset: 0.8, width: 1, alpha: 0.18 },
];

export function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const pointer = { x: 0.5, y: 0.5 };
    const smooth = { x: 0.5, y: 0.5 };
    let width = 0;
    let height = 0;
    let frame = 0;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0) return;
      pointer.x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      pointer.y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      smooth.x += (pointer.x - smooth.x) * 0.04;
      smooth.y += (pointer.y - smooth.y) * 0.04;

      const phase = (smooth.x - 0.5) * 0.55;
      const amplitudeScale = 0.92 + (smooth.y - 0.5) * 0.16;
      const mid = height * 0.55;

      for (const line of lines) {
        context.beginPath();
        for (let x = 0; x <= width; x += 4) {
          const progress = x / Math.max(width, 1);
          const envelope = Math.sin(Math.PI * progress);
          const y =
            mid +
            Math.sin(progress * Math.PI * 2 * line.freq + time * line.speed * 6 + line.offset + phase) *
              height *
              line.amplitude *
              envelope *
              amplitudeScale;
          if (x === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.strokeStyle = "#C2A062";
        context.globalAlpha = line.alpha;
        context.lineWidth = line.width;
        context.lineCap = "round";
        context.stroke();
      }
      context.globalAlpha = 1;

      if (!media.matches) frame = requestAnimationFrame(draw);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("pointermove", onPointer);
    frame = requestAnimationFrame((time) => draw(media.matches ? 1200 : time));

    const onMotionChange = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame((time) => draw(media.matches ? 1200 : time));
    };
    media.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
      media.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full" aria-hidden />;
}
