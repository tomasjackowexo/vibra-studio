import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { TopicIcon } from "@/components/content/topic-icon";
import { Section } from "@/components/ui/section";
import { getTopics } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "S čím prichádzate",
  description: "[TEXT: perex rozcestníka tém, 18–28 slov]",
  path: "/s-cim-prichadzate",
});

export default async function TopicsPage() {
  const topics = await getTopics();

  return (
    <>
      <PageHero
        label="S čím prichádzate"
        title="S čím"
        accent="prichádzate"
        perex="[TEXT: perex rozcestníka tém, 18–28 slov]"
      />
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/s-cim-prichadzate/${topic.slug}`}
              className="flex min-h-64 flex-col justify-between rounded-card bg-surface p-8 shadow-[inset_0_0_0_1px_var(--color-line)]"
            >
              <TopicIcon name={topic.icon} />
              <span>
                <span className="block text-[clamp(2rem,4vw,3rem)]">
                  {topic.title} <em className="font-serif text-gold italic">{topic.accent}</em>
                </span>
                <span className="mt-3 block max-w-[36ch] text-muted">{topic.excerpt}</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
