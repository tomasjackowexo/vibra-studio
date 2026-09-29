import { ArrowRight } from "lucide-react";
import { WaveCanvas } from "@/components/home/wave-canvas";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Label } from "@/components/ui/label";
import { hero } from "@/content/home";
import { bookingCta } from "@/content/site";

export function Hero() {
  return (
    <section className="px-4 pt-5">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-hero bg-[radial-gradient(120%_90%_at_85%_10%,var(--color-hero-a)_0%,transparent_60%),radial-gradient(90%_80%_at_0%_100%,var(--color-hero-a)_0%,transparent_55%),var(--color-hero-b)] shadow-[inset_0_0_0_1px_var(--color-line)]">
        <div className="relative z-2 grid gap-7 px-[clamp(22px,5vw,64px)] pt-[clamp(40px,7vw,96px)]">
          <Label>{hero.label}</Label>
          <h1 className="max-w-[11ch] text-[clamp(3rem,9vw,7.6rem)]">
            {hero.title} <em className="font-serif text-gold italic">{hero.accent}</em>
          </h1>
          <p className="max-w-[44ch] text-[clamp(1.05rem,1.6vw,1.25rem)] text-muted">{hero.perex}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={bookingCta.href} variant="dark">
              {hero.primaryCta}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href="/#cennik" variant="line">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
        <div className="relative z-1 mt-6 h-[clamp(160px,22vw,260px)]">
          <WaveCanvas />
        </div>
        <div className="absolute inset-x-[clamp(22px,5vw,64px)] bottom-6 z-3 flex flex-wrap gap-2.5">
          {hero.chips.map((chip) => (
            <Chip key={chip.text}>
              <b className="font-semibold">{chip.strong}</b>
              {chip.text}
            </Chip>
          ))}
        </div>
      </div>
    </section>
  );
}
