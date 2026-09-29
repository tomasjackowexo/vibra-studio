import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { pricing, services, sessionPackage } from "@/content/home";
import { bookingCta } from "@/content/site";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

const offers = [...services, sessionPackage];

export function Pricing() {
  return (
    <Section id={pricing.id}>
      <SectionHead
        label={pricing.label}
        title={pricing.title}
        accent={pricing.accent}
        perex={pricing.perex}
      />
      <Reveal stagger={0.08} className="grid gap-4 md:grid-cols-2">
        {offers.map((offer) => (
          <Reveal key={offer.slug}>
            <article
              className={cn(
                "grid content-start gap-5 rounded-card bg-surface p-[clamp(28px,4vw,44px)] shadow-[inset_0_0_0_1px_var(--color-line)]",
                offer.featured && "bg-mist shadow-[inset_0_0_0_1px_var(--color-gold-soft)]",
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl">{offer.name}</h3>
                {offer.badge ? (
                  <span className="rounded-pill bg-gold px-3 py-1.5 text-xs font-medium text-ink">
                    {offer.badge}
                  </span>
                ) : (
                  <span className="text-muted">{offer.durationLabel}</span>
                )}
              </div>
              <p className="text-[clamp(3.6rem,7vw,5.4rem)] leading-[0.9] tracking-[-0.06em]">
                {formatPrice(offer.priceCents)}
                {offer.featured ? (
                  <small className="ml-2 text-base tracking-normal opacity-70">/ {offer.durationLabel}</small>
                ) : null}
              </p>
              <ul className="grid gap-2.5 text-muted">
                {offer.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      className="mt-1 size-[18px] shrink-0 rounded-full bg-[radial-gradient(circle,var(--color-gold)_0_3px,transparent_4px),var(--color-gold-soft)]"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <Button href={bookingCta.href} variant="dark" className="justify-self-start">
                {bookingCta.label}
              </Button>
            </article>
          </Reveal>
        ))}
      </Reveal>
      <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem] text-muted">
        {pricing.payments.map((item) => (
          <span key={item} className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-gold" aria-hidden />
            {item}
          </span>
        ))}
      </p>
    </Section>
  );
}
