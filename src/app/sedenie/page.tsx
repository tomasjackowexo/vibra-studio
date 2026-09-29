import Image from "next/image";
import { InfoDisclaimer } from "@/components/content/info-disclaimer";
import { PageHero } from "@/components/content/page-hero";
import { Section } from "@/components/ui/section";
import { process as processContent } from "@/content/home";
import { sessionPageIntro } from "@/content/home-sections";
import { getEditorialPage } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const page = await getEditorialPage("sedenie");
  return createMetadata({
    title: page.data.title,
    description: page.data.excerpt,
    path: "/sedenie",
  });
}

export default async function SessionPage() {
  const page = await getEditorialPage("sedenie");

  return (
    <>
      <PageHero label="Sedenie" title={page.data.title} accent={page.data.accent} perex={page.data.excerpt} />
      <Section className="pt-0">
        <div className="grid max-w-[68ch] gap-12">
          <div className="mdx-prose">{page.content}</div>
          <section>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Priebeh</h2>
            <ol className="mt-6 grid gap-5">
              {processContent.steps.map((step) => (
                <li key={step.number} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-serif text-3xl text-gold italic">{step.number}</span>
                  <span>
                    <span className="block text-xl">{step.title}</span>
                    <span className="mt-1 block text-muted">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Príprava</h2>
            <p className="mt-4 leading-relaxed">{page.data.prepare}</p>
          </section>
          <section>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Čo očakávať</h2>
            <p className="mt-4 leading-relaxed">{page.data.expect}</p>
          </section>
          <InfoDisclaimer />
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {sessionPageIntro.gallery.map((src, index) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-card">
              <Image
                src={src}
                alt={sessionPageIntro.galleryAlts[index] ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
