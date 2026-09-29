import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { experiencesIntro } from "@/content/home-sections";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section>
      <SectionHead
        label={experiencesIntro.label}
        title={experiencesIntro.title}
        accent={experiencesIntro.accent}
        perex={experiencesIntro.perex}
      />
      <TestimonialsCarousel />
    </Section>
  );
}
