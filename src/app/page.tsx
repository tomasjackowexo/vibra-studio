import { Contact } from "@/components/home/contact";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { HomeMarquee } from "@/components/home/home-marquee";
import { Method } from "@/components/home/method";
import { Pricing } from "@/components/home/pricing";
import { Process } from "@/components/home/process";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeMarquee />
      <Method />
      <Process />
      <Pricing />
      <Faq />
      <Contact />
    </>
  );
}
