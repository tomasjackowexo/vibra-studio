"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion() === true;

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question} className="border-t border-line last:border-b">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-[1.12rem] font-medium tracking-[-0.01em]"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <motion.span
                  className="text-2xl font-light text-gold"
                  aria-hidden
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: reduce ? 0 : 0.2 }}
                >
                  +
                </motion.span>
              </button>
            </h3>
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={cn("overflow-hidden", !isOpen && "pointer-events-none")}
            >
              <p className="max-w-[60ch] pb-5 text-muted">{item.answer}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
