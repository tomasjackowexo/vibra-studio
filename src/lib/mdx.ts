import { cache } from "react";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import { z } from "zod";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { images } from "@/content/images";
import { assertAdLandings } from "@/lib/landing-pages";

const contentRoot = path.join(process.cwd(), "src/content");

const forbiddenInAd = ["liečba", "liečbu", "liečby", "diagnostika", "diagnostiku", "vyliečiť", "vylieči"];

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

export const topicSchema = z.object({
  slug: z.string(),
  title: z.string(),
  accent: z.string(),
  zone: z.enum(["ad", "info"]),
  icon: z.string(),
  excerpt: z.string(),
  recommendedSessions: z.string(),
  serviceSlug: z.string(),
  familiar: z.array(z.string()).min(1),
  help: z.string(),
  flow: z.string(),
  extraDisclaimer: z.string().optional(),
  testimonial: z
    .object({
      quote: z.string(),
      author: z.string(),
    })
    .optional(),
  faq: z.array(faqItem).min(1),
});

export type Topic = z.infer<typeof topicSchema>;

const tocItem = z.object({ id: z.string(), label: z.string() });

export const editorialSchema = z.object({
  title: z.string(),
  accent: z.string(),
  zone: z.enum(["ad", "info"]),
  excerpt: z.string(),
  toc: z.array(tocItem).optional(),
  timeline: z.array(z.object({ year: z.string(), label: z.string() })).optional(),
  research: z.string().optional(),
  contraindications: z.string().optional(),
  prepare: z.string().optional(),
  expect: z.string().optional(),
  story: z.string().optional(),
  values: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
  team: z.array(z.object({ name: z.string(), role: z.string(), bio: z.string() })).optional(),
  certificates: z.array(z.string()).optional(),
});

export type EditorialPage = z.infer<typeof editorialSchema>;

export const articleSchema = z.object({
  title: z.string(),
  date: z.string(),
  excerpt: z.string(),
  cover: z.enum(["linen", "tea", "interior", "light", "hands", "calm"]),
  zone: z.enum(["ad", "info"]),
});

export type ArticleMeta = z.infer<typeof articleSchema> & { slug: string; coverSrc: string };

async function readFolder(folder: string) {
  const dir = path.join(contentRoot, folder);
  const files = (await readdir(dir)).filter((file) => file.endsWith(".mdx"));
  return Promise.all(
    files.map(async (file) => ({
      slug: file.replace(/\.mdx$/, ""),
      source: await readFile(path.join(dir, file), "utf8"),
    })),
  );
}

function assertAdCopy(slug: string, zone: string, source: string) {
  if (zone !== "ad") return;
  const haystack = source.toLowerCase();
  for (const word of forbiddenInAd) {
    if (haystack.includes(word)) {
      throw new Error(`Ad topic "${slug}" contains forbidden word "${word}".`);
    }
  }
}

async function compile<T>(source: string, schema: z.ZodType<T>) {
  const compiled = await compileMDX<Record<string, unknown>>({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });
  return {
    content: compiled.content,
    data: schema.parse(compiled.frontmatter),
  };
}

const topicOrder = [
  "stres",
  "spanok-a-unava",
  "fajcenie",
  "navyky",
  "alergie-a-sezona",
  "dalsie-oblasti",
];

export const getTopics = cache(async () => {
  const files = await readFolder("topics");
  const topics = await Promise.all(
    files.map(async (file) => {
      const compiled = await compile(file.source, topicSchema);
      assertAdCopy(compiled.data.slug, compiled.data.zone, file.source);
      return compiled.data;
    }),
  );
  const ordered = topics.sort(
    (a, b) => topicOrder.indexOf(a.slug) - topicOrder.indexOf(b.slug),
  );
  assertAdLandings(
    ordered.filter((topic) => topic.zone === "ad").map((topic) => `/s-cim-prichadzate/${topic.slug}`),
  );
  return ordered;
});

export const getTopic = cache(async (slug: string) => {
  const topics = await getTopics();
  return topics.find((topic) => topic.slug === slug) ?? null;
});

export async function getEditorialPage(name: string) {
  const source = await readFile(path.join(contentRoot, "pages", `${name}.mdx`), "utf8");
  return compile(source, editorialSchema);
}

export const getArticles = cache(async () => {
  const files = await readFolder("blog");
  const articles = await Promise.all(
    files.map(async (file) => {
      const compiled = await compile(file.source, articleSchema);
      return {
        ...compiled.data,
        slug: file.slug,
        coverSrc: images[compiled.data.cover],
      };
    }),
  );
  return articles.sort((a, b) => b.date.localeCompare(a.date));
});

export async function getArticle(slug: string) {
  const sourcePath = path.join(contentRoot, "blog", `${slug}.mdx`);
  try {
    const source = await readFile(sourcePath, "utf8");
    const compiled = await compile(source, articleSchema);
    return {
      ...compiled,
      data: { ...compiled.data, slug, coverSrc: images[compiled.data.cover] },
    };
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") return null;
    throw error;
  }
}
