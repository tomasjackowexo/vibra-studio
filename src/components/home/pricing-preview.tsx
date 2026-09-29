import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { pricing, services } from "@/content/services";
import { bookingCta } from "@/content/site";
import { formatPrice } from "@/lib/format";

export function PricingPreview() {
  return (
    <Section id="cennik-nahlad">
      <SectionHead label={pricing.label} title={pricing.title} accent={pricing.accent} perex={pricing.perex} />
      <Reveal stagger={0.06} className="grid gap-4 lg:grid-cols-3">
        {services.map((offer) => (
          <Reveal key={offer.slug}>
            <article className="flex h-full flex-col rounded-card bg-surface p-7 shadow-[inset_0_0_0_1px_var(--color-line)]">
              <h3 className="text-2xl">{offer.name}</h3>
              <p className="mt-4 text-[clamp(2.6rem,5vw,3.4rem)] leading-none tracking-[-0.05em]">
                {formatPrice(offer.priceCents)}
              </p>
              <p className="mt-2 text-sm text-muted">{offer.durationLabel}</p>
              <p className="mt-4 flex-1 text-sm text-muted">{offer.summary}</p>
              <div className="mt-6">
                <Button href={`${bookingCta.href}?sluzba=${offer.slug}`} variant="dark" size="sm">
                  {bookingCta.label}
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </Reveal>
      <p className="mt-8">
        <Link href="/cennik" className="text-sm underline decoration-gold/70 underline-offset-4">
          Celý cenník
        </Link>
      </p>
    </Section>
  );
}
