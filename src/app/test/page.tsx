import { PageHero } from "@/components/content/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Test stresu",
  description: "Desať otázok, dve minúty. Zistite, koľko napätia v sebe nosíte, a získajte tipy, čo s ním robiť.",
  path: "/test",
});

export default function TestPage() {
  return <PageHero label="Test" title="Test stresu" perex="Desať otázok, dve minúty. Zistite, koľko napätia v sebe nosíte, a získajte tipy, čo s ním robiť." />;
}
