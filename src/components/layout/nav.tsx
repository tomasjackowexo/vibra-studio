"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { bookingCta, navItems } from "@/content/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion() === true;

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-3 z-40 px-4">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 rounded-pill bg-white/75 py-2.5 pr-2.5 pl-[18px] shadow-[inset_0_0_0_1px_var(--color-line)] backdrop-blur-[18px]">
          <Link href="/" className="min-w-0 rounded-pill" aria-label="VIBRA, úvod">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-1 min-[901px]:flex" aria-label="Hlavná">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-pill px-3.5 py-2 text-[0.9rem] text-muted hover:bg-surface-2 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button href={bookingCta.href} variant="dark" size="sm" className="hidden sm:inline-flex">
              {bookingCta.label}
            </Button>
            <button
              type="button"
              className="inline-flex size-10 cursor-pointer items-center justify-center rounded-pill text-ink min-[901px]:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-bg px-6 py-6 text-ink min-[901px]:hidden"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                className="inline-flex size-10 cursor-pointer items-center justify-center rounded-pill"
                onClick={() => setOpen(false)}
                aria-label="Zavrieť menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="mt-16 flex flex-col gap-2" aria-label="Mobilná">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.08 + index * 0.04, duration: reduce ? 0 : 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2 text-4xl font-medium tracking-[-0.035em]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pt-10">
              <Button href={bookingCta.href} variant="dark" className="w-full" onClick={() => setOpen(false)}>
                {bookingCta.label}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
