import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { faq } from "@/content/home";

export function Faq() {
  return (
    <Section id={faq.id} className="pt-0">
      <div className="grid gap-6 min-[861px]:grid-cols-[0.8fr_1.2fr] min-[861px]:gap-12">
        <Reveal>
          <SectionHead label={faq.label} title={faq.title} accent={faq.accent} className="mb-0" />
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion items={faq.items} />
        </Reveal>
      </div>
    </Section>
  );
}
