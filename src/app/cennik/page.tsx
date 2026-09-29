import { JsonLd } from "@/components/content/json-ld";
import { PageHero } from "@/components/content/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { faqEntries } from "@/content/faq";
import { giftVoucher, pricing, services, sessionPackage } from "@/content/services";
import { bookingCta } from "@/content/site";
import { formatPrice } from "@/lib/format";
import { createMetadata, servicesJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: pricing.title,
  description: pricing.perex,
  path: "/cennik",
});

export default function PricingPage() {
  const priceFaq = faqEntries.filter((item) => item.category === "Ceny a platby");

  return (
    <>
      <JsonLd data={servicesJsonLd([...services, sessionPackage])} />
      <PageHero label={pricing.label} title={pricing.title} accent={pricing.accent} perex={pricing.perex} />
      <Section className="pt-0">
        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((offer) => (
            <article
              key={offer.slug}
              className="flex h-full flex-col rounded-card bg-surface p-7 shadow-[inset_0_0_0_1px_var(--color-line)]"
            >
              <h2 className="text-2xl">{offer.name}</h2>
              <p className="mt-4 text-[clamp(2.6rem,5vw,3.4rem)] leading-none tracking-[-0.05em]">
                {formatPrice(offer.priceCents)}
              </p>
              <p className="mt-2 text-sm text-muted">{offer.durationLabel}</p>
              <p className="mt-4 text-sm text-muted">{offer.summary}</p>
              <ul className="mt-4 grid flex-1 gap-2 text-sm">
                {offer.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={`${bookingCta.href}?sluzba=${offer.slug}`} variant="dark" size="sm">
                  {bookingCta.label}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <article className="mt-4 rounded-card bg-gold-soft p-7 md:p-10">
          <h2 className="text-[clamp(2rem,4vw,3rem)]">{sessionPackage.name}</h2>
          <p className="mt-3 text-[clamp(2.4rem,4vw,3.2rem)] leading-none tracking-[-0.05em]">
            {formatPrice(sessionPackage.priceCents)}
          </p>
          <p className="mt-3 max-w-[46ch] text-muted">{sessionPackage.summary}</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {sessionPackage.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href={`${bookingCta.href}?sluzba=${sessionPackage.slug}`} variant="dark" size="sm">
              {bookingCta.label}
            </Button>
          </div>
        </article>

        <article className="mt-4 rounded-card bg-surface p-7 shadow-[inset_0_0_0_1px_var(--color-line)] md:p-10">
          <h2 className="text-[clamp(2rem,4vw,3rem)]">{giftVoucher.title}</h2>
          <p className="mt-3 max-w-[46ch] text-muted">{giftVoucher.text}</p>
          <div className="mt-6">
            <Button href={giftVoucher.href} variant="line" size="sm">
              {giftVoucher.cta}
            </Button>
          </div>
        </article>

        <section className="mt-14 max-w-[68ch]">
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Platby</h2>
          <ul className="mt-4 grid gap-2">
            {pricing.payments.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Ceny a platby</h2>
          <div className="mt-4">
            <Accordion items={priceFaq} />
          </div>
        </section>
      </Section>
    </>
  );
}
