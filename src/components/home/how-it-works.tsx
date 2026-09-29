import { TensionWave } from "@/components/home/tension-wave";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { howItWorks } from "@/content/home-sections";

export function HowItWorks() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead
            label={howItWorks.label}
            title={howItWorks.title}
            accent={howItWorks.accent}
            perex={howItWorks.perex}
            className="mb-8"
          />
          <Reveal stagger={0.06} className="grid gap-6">
            {howItWorks.steps.map((step, index) => (
              <Reveal key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="font-serif text-3xl text-gold italic">0{index + 1}</span>
                <span>
                  <span className="block text-xl">{step.title}</span>
                  <span className="mt-1 block text-sm text-muted">{step.text}</span>
                </span>
              </Reveal>
            ))}
          </Reveal>
        </div>
        <TensionWave />
      </div>
    </Section>
  );
}
