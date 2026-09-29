import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/content/json-ld";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { bookingCta } from "@/content/site";
import { getArticle, getArticles } from "@/lib/mdx";
import { articleJsonLd, createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return createMetadata({
    title: article.data.title,
    description: article.data.excerpt,
    path: `/blog/${article.data.slug}`,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: article.data.title,
          description: article.data.excerpt,
          path: `/blog/${article.data.slug}`,
          date: article.data.date,
        })}
      />
      <article>
        <header className="px-4 pt-10">
          <div className="mx-auto max-w-[68ch]">
            <time dateTime={article.data.date} className="text-xs tracking-[0.14em] text-muted uppercase">
              {article.data.date}
            </time>
            <h1 className="mt-4 text-[clamp(2.6rem,6vw,4.8rem)]">{article.data.title}</h1>
            <p className="mt-4 text-lg text-muted">{article.data.excerpt}</p>
          </div>
        </header>
        <div className="px-4 pt-8">
          <div className="relative mx-auto aspect-[16/8] max-w-[1200px] overflow-hidden rounded-hero">
            <Image
              src={article.data.coverSrc}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
        <Section>
          <div className="mx-auto max-w-[68ch]">
            <div className="mdx-prose">{article.content}</div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Button href="/test" variant="gold">
                Test stresu
              </Button>
              <Button href={bookingCta.href} variant="dark">
                {bookingCta.label}
              </Button>
            </div>
          </div>
        </Section>
      </article>
    </>
  );
}
