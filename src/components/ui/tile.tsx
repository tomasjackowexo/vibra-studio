import { cn } from "@/lib/utils";

export function Tile({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        "grid h-full content-start gap-3 rounded-card bg-surface p-7 shadow-[inset_0_0_0_1px_var(--color-line)] md:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
