import type { MetadataRoute } from "next";
import { getArticles, getTopics } from "@/lib/mdx";
import { siteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [topics, articles] = await Promise.all([getTopics(), getArticles()]);
  const base = siteUrl();
  const staticPaths = [
    "/",
    "/metoda",
    "/s-cim-prichadzate",
    "/sedenie",
    "/cennik",
    "/o-nas",
    "/skusenosti",
    "/otazky",
    "/blog",
    "/test",
    "/rezervacia",
    "/kontakt",
    "/ochrana-udajov",
    "/obchodne-podmienky",
    "/kontraindikacie",
  ];

  return [
    ...staticPaths.map((path) => ({ url: `${base}${path}` })),
    ...topics.map((topic) => ({ url: `${base}/s-cim-prichadzate/${topic.slug}` })),
    ...articles.map((article) => ({
      url: `${base}/blog/${article.slug}`,
      lastModified: article.date,
    })),
  ];
}
