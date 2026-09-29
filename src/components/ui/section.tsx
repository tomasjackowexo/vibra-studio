import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "mist";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 px-4 py-[clamp(56px,8vw,110px)]",
        tone === "mist" ? "bg-mist" : "bg-bg",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  );
}
