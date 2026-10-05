import { PageHero } from "@/components/content/page-hero";
import { Button } from "@/components/ui/button";
import { studio } from "@/content/site";
import { hasDatabase } from "@/lib/database";
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
  if (!hasDatabase()) {
    return (
      <section className="px-4 pt-10 pb-16">
        <div className="mx-auto max-w-[760px] rounded-hero bg-[radial-gradient(120%_90%_at_85%_0%,var(--color-hero-a),transparent_55%),var(--color-surface)] px-6 py-12 shadow-[inset_0_0_0_1px_var(--color-line)] sm:px-12 sm:py-16">
          <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">Rezervácia</p>
          <h1 className="mt-4 max-w-[16ch] text-[clamp(2.4rem,6vw,4.4rem)]">Online rezervácie spúšťame čoskoro</h1>
          <ul className="mt-6 grid gap-2 text-lg">
            <li>{studio.phone}</li>
            <li>{studio.email}</li>
          </ul>
          <div className="mt-8">
            <Button href="/kontakt" variant="dark">
              Kontakt
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const { sluzba } = await searchParams;

  return (
    <PageHero
      label="Rezervácia"
      title="Rezervácia"
      perex={
        sluzba
          ? `Služba: ${sluzba}`
          : "Vyberte si službu, deň a čas. Potvrdenie vám príde e-mailom a termín môžete zmeniť do 24 hodín vopred."
      }
    />
  );
}
