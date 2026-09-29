import { PageHero } from "@/components/content/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Rezervácia",
  description: "[TEXT: perex rezervácie, 12–20 slov]",
  path: "/rezervacia",
});

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ sluzba?: string }>;
}) {
  const { sluzba } = await searchParams;

  return (
    <PageHero
      label="Rezervácia"
      title="Rezervácia"
      perex={sluzba ? `Služba: ${sluzba}` : "[TEXT: perex rezervácie, 12–20 slov]"}
    />
  );
}
