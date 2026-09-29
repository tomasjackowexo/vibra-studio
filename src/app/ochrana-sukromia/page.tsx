import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { legalPages } from "@/content/site";

export const metadata: Metadata = {
  title: legalPages.privacy.title,
};

export default function PrivacyPage() {
  return (
    <Section className="min-h-[60svh]">
      <h1 className="text-4xl md:text-5xl">{legalPages.privacy.title}</h1>
      <p className="mt-6 max-w-2xl text-muted">{legalPages.privacy.text}</p>
    </Section>
  );
}
