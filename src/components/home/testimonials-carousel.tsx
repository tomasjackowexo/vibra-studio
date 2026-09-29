"use client";

import { useState } from "react";
import { useReducedMotion } from "motion/react";
import { testimonials } from "@/content/testimonials";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion() === true;
  const item = testimonials[index];
  if (!item) return null;

  const go = (next: number) => {
    const count = testimonials.length;
    setIndex((next + count) % count);
  };

  return (
    <div className="rounded-hero bg-surface px-6 py-10 shadow-[inset_0_0_0_1px_var(--color-line)] sm:px-12">
      <blockquote
        className="font-serif text-[clamp(1.6rem,3.4vw,2.5rem)] leading-snug text-ink italic"
        style={{ transition: reduce ? undefined : "opacity 200ms ease" }}
      >
        {item.quote}
      </blockquote>
      <p className="mt-6 text-sm text-muted">
        {item.author} · {item.detail}
      </p>
      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-pill shadow-[inset_0_0_0_1px_var(--color-line)]"
          onClick={() => go(index - 1)}
          aria-label="Predchádzajúca referencia"
        >
          ←
        </button>
        <button
          type="button"
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-pill shadow-[inset_0_0_0_1px_var(--color-line)]"
          onClick={() => go(index + 1)}
          aria-label="Ďalšia referencia"
        >
          →
        </button>
        <span className="text-sm text-muted">
          {index + 1} / {testimonials.length}
        </span>
      </div>
    </div>
  );
}
