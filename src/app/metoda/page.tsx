import Link from "next/link";
import { InfoDisclaimer } from "@/components/content/info-disclaimer";
import { JsonLd } from "@/components/content/json-ld";
import { PageHero } from "@/components/content/page-hero";
import { Section } from "@/components/ui/section";
import { getEditorialPage } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const page = await getEditorialPage("metoda");
  return createMetadata({
    title: page.data.title,
    description: page.data.excerpt,
    path: "/metoda",
  });
}

export default async function MetodaPage() {
  const page = await getEditorialPage("metoda");
  const { toc = [], timeline = [], research, contraindications } = page.data;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: page.data.title,
          description: page.data.excerpt,
        }}
      />
      <PageHero label="Metóda" title={page.data.title} accent={page.data.accent} perex={page.data.excerpt} />
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,68ch)_220px] lg:justify-between">
          <article className="max-w-[68ch]">
            <div id="uvod" className="mdx-prose scroll-mt-28">
              {page.content}
            </div>

            <section id="historia" className="mt-14 scroll-mt-28">
              <h2 className="text-[clamp(1.8rem,3vw,2.4rem)]">História</h2>
              <ol className="mt-6 grid gap-0">
                {timeline.map((item) => (
                  <li key={`${item.year}-${item.label}`} className="grid grid-cols-[88px_1fr] gap-4 border-t border-line py-5">
                    <span className="font-serif text-xl text-gold italic">{item.year}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ol>
            </section>

            <aside id="vyskum" className="mt-14 scroll-mt-28 rounded-card bg-gold-soft px-6 py-6">
              <h2 className="text-[clamp(1.6rem,3vw,2.1rem)]">Čo hovorí výskum</h2>
              <p className="mt-3 leading-relaxed">{research}</p>
            </aside>

            <aside id="kontraindikacie" className="mt-6 scroll-mt-28 rounded-card bg-surface px-6 py-6 shadow-[inset_0_0_0_1px_var(--color-line)]">
              <h2 className="text-[clamp(1.6rem,3vw,2.1rem)]">Kontraindikácie</h2>
              <p className="mt-3 leading-relaxed">{contraindications}</p>
              <p className="mt-4">
                <Link href="/kontraindikacie" className="text-sm underline decoration-gold/70 underline-offset-4">
                  Celé znenie
                </Link>
              </p>
            </aside>

            <div className="mt-10">
              <InfoDisclaimer />
            </div>
          </article>

          <nav aria-label="Obsah stránky" className="hidden lg:block">
            <ol className="sticky top-28 grid gap-3 text-sm">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-muted hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </Section>
    </>
  );
}
