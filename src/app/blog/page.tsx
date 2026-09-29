import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Section } from "@/components/ui/section";
import { getArticles } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description: "[TEXT: perex blogu, 15–25 slov]",
  path: "/blog",
});

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <>
      <PageHero label="Blog" title="Blog" perex="[TEXT: perex blogu, 15–25 slov]" />
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="overflow-hidden rounded-card bg-surface shadow-[inset_0_0_0_1px_var(--color-line)]"
            >
              <div className="relative aspect-[16/10]">
                <Image src={article.coverSrc} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="grid gap-2 p-6">
                <time dateTime={article.date} className="text-xs tracking-[0.14em] text-muted uppercase">
                  {article.date}
                </time>
                <h2 className="text-2xl">{article.title}</h2>
                <p className="text-sm text-muted">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
