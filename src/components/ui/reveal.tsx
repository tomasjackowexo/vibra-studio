"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const RevealContext = createContext<Variants | null>(null);

function itemVariants(reduce: boolean): Variants {
  if (reduce) {
    return {
      hidden: { opacity: 1, y: 0 },
      show: { opacity: 1, y: 0, transition: { duration: 0 } },
    };
  }

  return {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease },
    },
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  stagger = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion() === true;
  const parentVariants = useContext(RevealContext);

  if (stagger > 0) {
    return (
      <RevealContext.Provider value={itemVariants(reduce)}>
        <motion.div
          className={className}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduce ? 0 : stagger,
                delayChildren: reduce ? 0 : delay,
              },
            },
          }}
        >
          {children}
        </motion.div>
      </RevealContext.Provider>
    );
  }

  if (parentVariants) {
    return (
      <motion.div className={className} variants={parentVariants}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: reduce ? 0 : 0.65, delay: reduce ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}
