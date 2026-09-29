import { LegalPage } from "@/components/content/legal-page";
import { getEditorialPage } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const page = await getEditorialPage("kontraindikacie");
  return createMetadata({
    title: page.data.title,
    description: page.data.excerpt,
    path: "/kontraindikacie",
  });
}

export default function ContraindicationsPage() {
  return <LegalPage name="kontraindikacie" />;
}
