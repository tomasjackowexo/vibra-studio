import { FaqPreview } from "@/components/home/faq-preview";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { HomeMarquee } from "@/components/home/home-marquee";
import { HowItWorks } from "@/components/home/how-it-works";
import { LeadMagnetBanner } from "@/components/home/lead-magnet-banner";
import { PricingPreview } from "@/components/home/pricing-preview";
import { SessionSteps } from "@/components/home/session-steps";
import { Testimonials } from "@/components/home/testimonials";
import { TherapistIntro } from "@/components/home/therapist-intro";
import { TopicsBento } from "@/components/home/topics-bento";
import { JsonLd } from "@/components/content/json-ld";
import { createMetadata, localBusinessJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "VIBRA frekvenčné štúdio",
  description: "Frekvenčné štúdio v Nitre. Sedenia so zvukom a jemnou vibráciou, bez výkonu a bez členstva.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <Hero />
      <HomeMarquee />
      <TopicsBento />
      <HowItWorks />
      <SessionSteps />
      <TherapistIntro />
      <Testimonials />
      <PricingPreview />
      <LeadMagnetBanner />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
