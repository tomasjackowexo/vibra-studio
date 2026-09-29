import { JsonLd } from "@/components/content/json-ld";
import { PageHero } from "@/components/content/page-hero";
import { FaqExplorer } from "@/components/faq/faq-explorer";
import { Section } from "@/components/ui/section";
import { faq } from "@/content/home";
import { faqEntries } from "@/content/faq";
import { createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Otázky",
  description: "Všetko, čo potrebujete vedieť pred prvým sedením. Ak svoju otázku nenájdete, napíšte nám a odpovieme do 48 hodín.",
  path: "/otazky",
});

export default function QuestionsPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqEntries)} />
      <PageHero label={faq.label} title={faq.title} accent={faq.accent} perex="Všetko, čo potrebujete vedieť pred prvým sedením. Ak svoju otázku nenájdete, napíšte nám a odpovieme do 48 hodín." />
      <Section className="pt-0">
        <FaqExplorer items={faqEntries} />
      </Section>
    </>
  );
}
