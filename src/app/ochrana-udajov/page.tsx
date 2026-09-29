import { LegalPage } from "@/components/content/legal-page";
import { getEditorialPage } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const page = await getEditorialPage("ochrana-udajov");
  return createMetadata({
    title: page.data.title,
    description: page.data.excerpt,
    path: "/ochrana-udajov",
  });
}

export default function PrivacyPage() {
  return <LegalPage name="ochrana-udajov" />;
}
