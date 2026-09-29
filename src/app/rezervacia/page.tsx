import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Rezervácia",
  description: "Online rezervácia sedení vo VIBRA sa pripravuje.",
};

export default function BookingPage() {
  return (
    <Section className="min-h-[70svh]">
      <div className="flex min-h-[50svh] flex-col justify-center">
        <h1 className="max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)]">
          Rezervácia – pripravujeme
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted">
          Termín zatiaľ dohodneme e-mailom. Formulár na výber služby a času pribudne neskôr.
        </p>
      </div>
    </Section>
  );
}
