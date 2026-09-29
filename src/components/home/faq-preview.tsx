import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { faq } from "@/content/home";
import { faqPreview } from "@/content/faq";

export function FaqPreview() {
  return (
    <Section>
      <SectionHead label={faq.label} title={faq.title} accent={faq.accent} />
      <Accordion items={faqPreview} />
      <p className="mt-6">
        <Link href="/otazky" className="text-sm underline decoration-gold/70 underline-offset-4">
          Všetky otázky
        </Link>
      </p>
    </Section>
  );
}
