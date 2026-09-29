import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { finalCta } from "@/content/home-sections";
import { bookingCta } from "@/content/site";

export function FinalCta() {
  return (
    <Section className="pt-0">
      <div className="rounded-hero bg-mist px-6 py-14 text-center sm:px-10">
        <h2 className="mx-auto max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
          {finalCta.title} <em className="font-serif text-gold italic">{finalCta.accent}</em>
        </h2>
        <p className="mx-auto mt-4 max-w-[42ch] text-muted">{finalCta.text}</p>
        <div className="mt-8">
          <Button href={bookingCta.href} variant="dark">
            {bookingCta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
