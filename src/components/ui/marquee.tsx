export function Marquee({ items }: { items: readonly string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="marquee-track flex w-max items-center gap-12 py-7 pr-12 text-[clamp(1.3rem,2.4vw,1.9rem)] tracking-[-0.02em] text-muted">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-12 whitespace-nowrap">
            {item}
            <span className="size-2.5 rounded-full bg-gold" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
