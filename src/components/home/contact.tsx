import { CopyButton } from "@/components/home/copy-button";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { contact } from "@/content/home";
import { bookingCta, studio } from "@/content/site";

const rows = [
  { label: "Adresa", value: studio.address },
  { label: "Telefón", value: studio.phone },
  { label: "E-mail", value: studio.email },
  { label: "Hodiny", value: studio.hours, copy: false },
];

export function Contact() {
  return (
    <Section id={contact.id} className="pt-0">
      <Reveal>
        <div className="grid gap-10 rounded-hero bg-mist px-[clamp(28px,5vw,64px)] py-[clamp(28px,5vw,64px)] text-ink min-[861px]:grid-cols-2">
          <div className="grid content-start gap-4">
            <Label>{contact.label}</Label>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)]">
              {contact.title} <em className="font-serif text-gold italic">{contact.accent}</em>
            </h2>
            <p className="max-w-md text-muted">{contact.perex}</p>
            <Button href={bookingCta.href} variant="gold" className="mt-2 justify-self-start">
              {contact.cta}
            </Button>
          </div>
          <div>
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid items-center gap-3 border-b border-line py-4 min-[861px]:grid-cols-[110px_1fr_auto]"
              >
                <span className="text-sm text-muted">{row.label}</span>
                <p className="font-serif text-gold italic">{row.value}</p>
                {row.copy === false ? <span /> : <CopyButton text={row.value} />}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
