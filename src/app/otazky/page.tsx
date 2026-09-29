import { JsonLd } from "@/components/content/json-ld";
import { PageHero } from "@/components/content/page-hero";
import { FaqExplorer } from "@/components/faq/faq-explorer";
import { Section } from "@/components/ui/section";
import { faq } from "@/content/home";
import { faqEntries } from "@/content/faq";
import { createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Otázky",
  description: "[TEXT: perex stránky otázok, 15–25 slov]",
  path: "/otazky",
});

export default function QuestionsPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqEntries)} />
      <PageHero label={faq.label} title={faq.title} accent={faq.accent} perex="[TEXT: perex stránky otázok, 15–25 slov]" />
      <Section className="pt-0">
        <FaqExplorer items={faqEntries} />
      </Section>
    </>
  );
}
