import { InfoDisclaimer } from "@/components/content/info-disclaimer";
import { PageHero } from "@/components/content/page-hero";
import { Section } from "@/components/ui/section";
import { getEditorialPage } from "@/lib/mdx";

export async function LegalPage({ name }: { name: string }) {
  const page = await getEditorialPage(name);

  return (
    <>
      <PageHero label={page.data.title} title={page.data.title} accent={page.data.accent} perex={page.data.excerpt} />
      <Section className="pt-0">
        <div className="mdx-prose">{page.content}</div>
        <div className="mt-10 max-w-[68ch]">
          <InfoDisclaimer />
        </div>
      </Section>
    </>
  );
}
