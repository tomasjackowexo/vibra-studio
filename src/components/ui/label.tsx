import { cn } from "@/lib/utils";

export function Label({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-muted uppercase",
        className,
      )}
    >
      <span className="size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
      {children}
    </span>
  );
}
