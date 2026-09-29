import { PageHero } from "@/components/content/page-hero";
import { Section } from "@/components/ui/section";
import { experiencesIntro } from "@/content/home-sections";
import { testimonials } from "@/content/testimonials";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Skúsenosti",
  description: experiencesIntro.perex,
  path: "/skusenosti",
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        label={experiencesIntro.label}
        title={experiencesIntro.title}
        accent={experiencesIntro.accent}
        perex={experiencesIntro.perex}
      />
      <Section className="pt-0">
        {testimonials.length === 0 ? (
          <div className="rounded-card bg-surface p-8 text-center shadow-[inset_0_0_0_1px_var(--color-line)]">
            <p className="font-serif text-[clamp(1.4rem,2.4vw,1.9rem)] leading-snug text-ink italic">
              Prvé skúsenosti práve zbierame.
            </p>
            <p className="mx-auto mt-3 max-w-[48ch] text-muted">
              Nechceme si ich vymýšľať. Keď nám klienti dovolia zdieľať svoje slová, nájdete ich práve tu.
            </p>
          </div>
        ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <blockquote
              key={`${item.author}-${index}`}
              className="rounded-card bg-surface p-7 shadow-[inset_0_0_0_1px_var(--color-line)]"
            >
              <p className="font-serif text-[clamp(1.35rem,2vw,1.7rem)] leading-snug text-ink italic">{item.quote}</p>
              <footer className="mt-5 text-sm text-muted">
                {item.author} · {item.detail}
              </footer>
            </blockquote>
          ))}
        </div>
        )}
      </Section>
    </>
  );
}
