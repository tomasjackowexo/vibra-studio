import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { leadMagnet } from "@/content/home-sections";

export function LeadMagnetBanner() {
  return (
    <Section className="py-0">
      <div className="rounded-hero bg-[radial-gradient(90%_120%_at_100%_0%,var(--color-hero-a),transparent_50%),var(--color-surface-2)] px-6 py-10 sm:px-10 sm:py-14">
        <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">{leadMagnet.label}</p>
        <h2 className="mt-3 max-w-[16ch] text-[clamp(2.2rem,5vw,3.6rem)]">{leadMagnet.title}</h2>
        <p className="mt-4 max-w-[46ch] text-muted">{leadMagnet.text}</p>
        <div className="mt-6">
          <Button href={leadMagnet.href} variant="gold">
            {leadMagnet.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
