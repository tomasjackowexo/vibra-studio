import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { process as processContent } from "@/content/home";

export function Process() {
  return (
    <Section id={processContent.id} className="pt-0">
      <SectionHead
        label={processContent.label}
        title={processContent.title}
        accent={processContent.accent}
      />
      <Reveal stagger={0.08} className="grid gap-9 sm:grid-cols-2 min-[901px]:grid-cols-4">
        {processContent.steps.map((step) => (
          <Reveal key={step.number} className="grid gap-2.5 border-t border-ink pt-5">
            <p className="font-serif text-[2.6rem] leading-none text-gold italic">{step.number}</p>
            <h3 className="text-[1.3rem]">{step.title}</h3>
            <p className="text-[0.97rem] text-muted">{step.text}</p>
          </Reveal>
        ))}
      </Reveal>
    </Section>
  );
}
