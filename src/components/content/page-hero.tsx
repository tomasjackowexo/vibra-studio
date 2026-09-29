import { Label } from "@/components/ui/label";

export function PageHero({
  label,
  title,
  accent,
  perex,
}: {
  label: string;
  title: string;
  accent?: string;
  perex?: string;
}) {
  return (
    <header className="px-4 pt-10 pb-6">
      <div className="mx-auto max-w-[1200px]">
        <Label>{label}</Label>
        <h1 className="mt-4 max-w-[14ch] text-[clamp(2.8rem,7vw,5.5rem)]">
          {title} {accent ? <em className="font-serif text-gold italic">{accent}</em> : null}
        </h1>
        {perex ? <p className="mt-5 max-w-[44ch] text-lg text-muted">{perex}</p> : null}
      </div>
    </header>
  );
}
