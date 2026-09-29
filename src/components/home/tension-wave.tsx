"use client";

import { useEffect, useRef, useState } from "react";
import { howItWorks } from "@/content/home-sections";

export function TensionWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [calm, setCalm] = useState(35);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
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

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const ease = calm / 100;
      const amplitude = (1 - ease * 0.72) * height * 0.28;
      const speed = media.matches ? 0 : 0.00055 * (1 - ease * 0.8);
      const alpha = 0.85 - ease * 0.45;
      context.beginPath();
      for (let x = 0; x <= width; x += 3) {
        const progress = x / Math.max(width, 1);
        const envelope = Math.sin(Math.PI * progress);
        const y = height * 0.55 + Math.sin(progress * Math.PI * 2 * 1.6 + time * speed) * amplitude * envelope;
        if (x === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.strokeStyle = `rgba(194, 160, 98, ${alpha})`;
      context.lineWidth = 1.6;
      context.stroke();
      if (!media.matches) frame = requestAnimationFrame(draw);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [calm]);

  return (
    <div className="rounded-hero bg-[radial-gradient(120%_90%_at_80%_0%,var(--color-hero-a),transparent_55%),var(--color-hero-b)] p-5 shadow-[inset_0_0_0_1px_var(--color-line)] sm:p-8">
      <div className="h-40 sm:h-52">
        <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
      </div>
      <label className="mt-4 grid gap-3 text-sm text-muted">
        <span className="flex justify-between">
          <span>{howItWorks.tension}</span>
          <span>{howItWorks.calm}</span>
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={calm}
          onChange={(event) => setCalm(Number(event.target.value))}
          aria-valuetext={`${calm} smerom k ${howItWorks.calm}`}
          className="w-full accent-gold"
        />
      </label>
    </div>
  );
}
