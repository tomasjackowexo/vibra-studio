import { InfoDisclaimer } from "@/components/content/info-disclaimer";
import { PageHero } from "@/components/content/page-hero";
import { Section } from "@/components/ui/section";
import { getEditorialPage } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const page = await getEditorialPage("o-nas");
  return createMetadata({
    title: page.data.title,
    description: page.data.excerpt,
    path: "/o-nas",
  });
}

export default async function AboutPage() {
  const page = await getEditorialPage("o-nas");
  const { story, values = [], team = [], certificates = [] } = page.data;

  return (
    <>
      <PageHero label="O nás" title={page.data.title} accent={page.data.accent} perex={page.data.excerpt} />
      <Section className="pt-0">
        <div className="grid gap-14">
          <section className="max-w-[68ch]">
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Príbeh</h2>
            <p className="mt-4 leading-relaxed">{story}</p>
          </section>
          <section>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Hodnoty</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {values.map((value) => (
                <article key={value.title} className="rounded-card bg-surface p-6 shadow-[inset_0_0_0_1px_var(--color-line)]">
                  <h3 className="text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted">{value.text}</p>
                </article>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Tím</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {team.map((person) => (
                <article key={person.name} className="rounded-card bg-mist p-6">
                  <h3 className="text-2xl">{person.name}</h3>
                  <p className="mt-1 text-sm text-gold-dark">{person.role}</p>
                  <p className="mt-3 text-muted">{person.bio}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="max-w-[68ch]">
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Certifikáty</h2>
            <ul className="mt-4 grid gap-3">
              {certificates.map((item, index) => (
                <li key={`${item}-${index}`} className="rounded-card bg-surface px-4 py-3 shadow-[inset_0_0_0_1px_var(--color-line)]">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <div className="max-w-[68ch]">
            <InfoDisclaimer />
          </div>
        </div>
      </Section>
    </>
  );
}
