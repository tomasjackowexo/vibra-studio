import { PageHero } from "@/components/content/page-hero";
import { studio } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Kontakt",
  description: "[TEXT: perex kontaktu, 12–20 slov]",
  path: "/kontakt",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ kategoria?: string }>;
}) {
  const { kategoria } = await searchParams;

  return (
    <>
      <PageHero
        label="Kontakt"
        title="Kontakt"
        perex={kategoria ? `Kategória: ${kategoria}` : "[TEXT: perex kontaktu, 12–20 slov]"}
      />
      <section className="px-4 pb-16">
        <ul className="mx-auto grid max-w-[1200px] gap-2 text-muted">
          <li>{studio.city}</li>
          <li>{studio.address}</li>
          <li>{studio.email}</li>
          <li>{studio.phone}</li>
        </ul>
      </section>
    </>
  );
}
