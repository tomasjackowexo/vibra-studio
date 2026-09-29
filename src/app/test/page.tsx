import { PageHero } from "@/components/content/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Test stresu",
  description: "[TEXT: perex testu stresu, 15–25 slov]",
  path: "/test",
});

export default function TestPage() {
  return <PageHero label="Test" title="Test stresu" perex="[TEXT: perex testu stresu, 15–25 slov]" />;
}
