import { footer } from "@/content/site";

export function InfoDisclaimer({ extra }: { extra?: string }) {
  return (
    <aside className="rounded-card bg-gold-soft px-6 py-5 text-sm leading-relaxed text-ink">
      <p>{footer.blurb}</p>
      {extra ? <p className="mt-3">{extra}</p> : null}
      <p className="mt-3 text-muted">{footer.trademark}</p>
    </aside>
  );
}
