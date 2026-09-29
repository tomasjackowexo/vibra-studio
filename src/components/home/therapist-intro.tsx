import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { therapist } from "@/content/home-sections";

export function TherapistIntro() {
  return (
    <Section tone="mist">
      <Reveal>
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="relative aspect-[4/5] overflow-hidden rounded-hero">
            <Image
              src={therapist.image}
              alt={therapist.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">{therapist.label}</p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,4rem)]">
              {therapist.title} <em className="font-serif text-gold italic">{therapist.accent}</em>
            </h2>
            <blockquote className="mt-6 font-serif text-[clamp(1.5rem,3vw,2rem)] leading-snug text-gold-dark italic">
              {therapist.quote}
            </blockquote>
            <p className="mt-4 text-sm text-muted">
              {therapist.name} · {therapist.role}
            </p>
            <ul className="mt-8 grid gap-3">
              {therapist.certificates.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="rounded-card bg-surface px-4 py-3 text-sm shadow-[inset_0_0_0_1px_var(--color-line)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
