import { LegalPage } from "@/components/content/legal-page";
import { getEditorialPage } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const page = await getEditorialPage("obchodne-podmienky");
  return createMetadata({
    title: page.data.title,
    description: page.data.excerpt,
    path: "/obchodne-podmienky",
  });
}

export default function TermsPage() {
  return <LegalPage name="obchodne-podmienky" />;
}
