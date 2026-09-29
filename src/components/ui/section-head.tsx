import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function SectionHead({
  label,
  title,
  accent,
  perex,
  as = "h2",
  className,
  light = false,
}: {
  label: string;
  title: string;
  accent?: string;
  perex?: string;
  as?: "h1" | "h2";
  className?: string;
  light?: boolean;
}) {
  const Heading = as;

  return (
    <div className={cn("mb-11 grid max-w-[760px] gap-4", className)}>
      <Label className={light ? "text-muted" : undefined}>{label}</Label>
      <Heading className="text-[clamp(2.2rem,5vw,4rem)]">
        {title}{" "}
        {accent ? <em className="font-serif text-gold italic">{accent}</em> : null}
      </Heading>
      {perex ? (
        <p className="mt-4 max-w-[56ch] text-[1.08rem] text-muted">{perex}</p>
      ) : null}
    </div>
  );
}
