import { useId } from "react";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "full",
  className,
}: {
  variant?: "full" | "icon";
  className?: string;
}) {
  const clipId = `vibra-wave-${useId().replace(/:/g, "")}`;

  return (
    <span className={cn("inline-flex items-center gap-3 text-inherit", className)}>
      <svg viewBox="0 0 40 40" className="size-[30px] shrink-0" aria-hidden>
        <defs>
          <clipPath id={clipId}>
            <circle cx="20" cy="20" r="18" />
          </clipPath>
        </defs>
        <circle cx="20" cy="20" r="18" className="fill-gold" />
        <path
          d="M4 21C8 12 12 12 16 21s8 9 12 0 8-9 12 0"
          fill="none"
          stroke="#2E2E32"
          strokeWidth="1.7"
          strokeLinecap="round"
          clipPath={`url(#${clipId})`}
        />
      </svg>
      {variant === "icon" ? <span className="sr-only">VIBRA</span> : null}
      {variant === "full" ? (
        <span className="flex flex-col leading-none">
          <span className="text-base font-medium tracking-[0.28em]">VIBRA</span>
          <span className="mt-px block text-[0.7rem] tracking-[0.04em] text-muted">
            frekvenčné štúdio
          </span>
        </span>
      ) : null}
    </span>
  );
}
