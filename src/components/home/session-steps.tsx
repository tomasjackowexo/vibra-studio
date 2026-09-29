import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { sessionStepImages } from "@/content/home-sections";
import { process as processContent } from "@/content/home";

export function SessionSteps() {
  return (
    <Section id="sedenie-kroky">
      <SectionHead
        label={processContent.label}
        title={processContent.title}
        accent={processContent.accent}
      />
      <Reveal stagger={0.06} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processContent.steps.map((step, index) => {
          const image = sessionStepImages[index];
          return (
            <Reveal key={step.number} className="overflow-hidden rounded-card bg-surface shadow-[inset_0_0_0_1px_var(--color-line)]">
              {image ? (
                <div className="relative aspect-[4/3]">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" />
                </div>
              ) : null}
              <div className="grid gap-2 p-5">
                <p className="font-serif text-3xl text-gold italic">{step.number}</p>
                <h3 className="text-xl">{step.title}</h3>
                <p className="text-sm text-muted">{step.text}</p>
              </div>
            </Reveal>
          );
        })}
      </Reveal>
    </Section>
  );
}
