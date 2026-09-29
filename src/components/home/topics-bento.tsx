import Link from "next/link";
import { TopicIcon } from "@/components/content/topic-icon";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { topicsIntro } from "@/content/home-sections";
import { getTopics } from "@/lib/mdx";

export async function TopicsBento() {
  const topics = await getTopics();

  return (
    <Section id="temy">
      <SectionHead
        label={topicsIntro.label}
        title={topicsIntro.title}
        accent={topicsIntro.accent}
        perex={topicsIntro.perex}
      />
      <Reveal stagger={0.06} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Reveal key={topic.slug}>
            <Link
              href={`/s-cim-prichadzate/${topic.slug}`}
              className="flex h-full min-h-52 flex-col justify-between rounded-card bg-surface p-7 shadow-[inset_0_0_0_1px_var(--color-line)]"
            >
              <TopicIcon name={topic.icon} />
              <span>
                <span className="block text-2xl">
                  {topic.title} <em className="font-serif text-gold italic">{topic.accent}</em>
                </span>
                <span className="mt-2 block text-sm text-muted">{topic.excerpt}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </Reveal>
    </Section>
  );
}
