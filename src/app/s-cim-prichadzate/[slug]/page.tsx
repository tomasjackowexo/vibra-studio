import { notFound } from "next/navigation";
import { InfoDisclaimer } from "@/components/content/info-disclaimer";
import { JsonLd } from "@/components/content/json-ld";
import { PageHero } from "@/components/content/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { bookingCta } from "@/content/site";
import { getTopic, getTopics } from "@/lib/mdx";
import { createMetadata, faqJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const topics = await getTopics();
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const topic = await getTopic(slug);
  if (!topic) return {};
  return createMetadata({
    title: topic.title,
    description: topic.excerpt,
    path: `/s-cim-prichadzate/${topic.slug}`,
  });
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = await getTopic(slug);
  if (!topic) notFound();

  return (
    <>
      <JsonLd data={faqJsonLd(topic.faq)} />
      <PageHero label="S čím prichádzate" title={topic.title} accent={topic.accent} perex={topic.excerpt} />
      <Section className="pt-0">
        <div className="grid max-w-[68ch] gap-12">
          <section>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Poznáte to?</h2>
            <ul className="mt-5 grid gap-3">
              {topic.familiar.map((item, index) => (
                <li key={`${item}-${index}`} className="border-t border-line pt-3">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Ako môže sedenie pomôcť</h2>
            <p className="mt-4 leading-relaxed">{topic.help}</p>
          </section>

          <section>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Priebeh</h2>
            <p className="mt-4 leading-relaxed">{topic.flow}</p>
          </section>

          <section>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Odporúčaný počet sedení</h2>
            <p className="mt-4 leading-relaxed">{topic.recommendedSessions}</p>
          </section>

          {topic.testimonial ? (
          <blockquote className="font-serif text-[clamp(1.5rem,3vw,2.1rem)] leading-snug text-gold italic">
            {topic.testimonial.quote}
            <footer className="mt-4 font-sans text-sm text-muted not-italic">{topic.testimonial.author}</footer>
          </blockquote>
          ) : null}

          {topic.zone === "info" ? <InfoDisclaimer extra={topic.extraDisclaimer} /> : null}

          <section>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Otázky</h2>
            <div className="mt-4">
              <Accordion items={topic.faq} />
            </div>
          </section>

          <div>
            <Button href={`${bookingCta.href}?sluzba=${topic.serviceSlug}`} variant="dark">
              {bookingCta.label}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
