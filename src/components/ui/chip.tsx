import { cn } from "@/lib/utils";

export function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill bg-white/75 px-4 py-2 text-sm shadow-[inset_0_0_0_1px_var(--color-line)] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </span>
  );
}
