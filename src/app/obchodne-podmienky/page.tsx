import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { legalPages } from "@/content/site";

export const metadata: Metadata = {
  title: legalPages.terms.title,
};

export default function TermsPage() {
  return (
    <Section className="min-h-[60svh]">
      <h1 className="text-4xl md:text-5xl">{legalPages.terms.title}</h1>
      <p className="mt-6 max-w-2xl text-muted">{legalPages.terms.text}</p>
    </Section>
  );
}
