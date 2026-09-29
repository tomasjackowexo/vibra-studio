import { PageHero } from "@/components/content/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Rezervácia",
  description: "Vyberte si službu, deň a čas. Potvrdenie vám príde e-mailom a termín môžete zmeniť do 24 hodín vopred.",
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
      perex={sluzba ? `Služba: ${sluzba}` : "Vyberte si službu, deň a čas. Potvrdenie vám príde e-mailom a termín môžete zmeniť do 24 hodín vopred."}
    />
  );
}
