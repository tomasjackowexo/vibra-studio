import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { Tile } from "@/components/ui/tile";
import { method } from "@/content/home";

function Rings() {
  return (
    <svg
      className="pointer-events-none absolute -top-16 -right-16 size-80 text-gold opacity-70"
      viewBox="0 0 320 320"
      aria-hidden
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="160" cy="160" r="40" />
        <circle cx="160" cy="160" r="75" opacity="0.7" />
        <circle cx="160" cy="160" r="110" opacity="0.45" />
        <circle cx="160" cy="160" r="145" opacity="0.25" />
      </g>
    </svg>
  );
}

export function Method() {
  const [duration, ...rest] = method.tiles;

  return (
    <Section id={method.id}>
      <SectionHead
        label={method.label}
        title={method.title}
        accent={method.accent}
        perex={method.perex}
      />
      <Reveal stagger={0.08} className="grid grid-cols-6 gap-4">
        <Reveal className="col-span-6 min-[901px]:col-span-4">
          <Tile id={method.device.id} className="relative min-h-80 content-between overflow-hidden bg-mist shadow-none">
            <Rings />
            <Label>{method.device.label}</Label>
            <div className="relative grid gap-3.5">
              <h3 className="max-w-[18ch] text-[clamp(1.8rem,3.4vw,2.6rem)]">{method.device.title}</h3>
              <p className="max-w-[48ch] text-muted">{method.device.text}</p>
            </div>
          </Tile>
        </Reveal>
        <Reveal className="col-span-6 min-[561px]:col-span-3 min-[901px]:col-span-2">
          <Tile id={duration.id} className="min-h-[220px] content-start gap-3">
            <Label>{duration.label}</Label>
            <p className="text-[clamp(3rem,6vw,4.5rem)] leading-none tracking-[-0.05em]">
              {duration.title}
              <small className="ml-1.5 text-base tracking-normal text-muted">{duration.unit}</small>
            </p>
            <p className="text-muted">{duration.text}</p>
          </Tile>
        </Reveal>
        {rest.map((tile) => (
          <Reveal key={tile.title} className="col-span-6 min-[561px]:col-span-3 min-[901px]:col-span-2">
            <Tile className="min-h-[220px] content-start gap-3">
              <Label>{tile.label}</Label>
              <h3 className="text-2xl">{tile.title}</h3>
              <p className="text-muted">{tile.text}</p>
            </Tile>
          </Reveal>
        ))}
      </Reveal>
    </Section>
  );
}
