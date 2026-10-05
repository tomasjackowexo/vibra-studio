import type { Metadata } from "next";
import { footer, openingHours, studio } from "@/content/site";
import type { FaqEntry } from "@/content/faq";
import type { Offer } from "@/content/services";

export function siteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured) return configured;

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim().replace(/\/$/, "");
  if (production) return production.startsWith("http") ? production : `https://${production}`;

  return "http://localhost:3000";
}

export function createMetadata({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}): Metadata {
  const image = `/og?title=${encodeURIComponent(title)}&eyebrow=${encodeURIComponent(studio.tagline)}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      locale: "sk_SK",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${studio.name} ${studio.tagline}`,
    description: footer.blurb,
    address: {
      "@type": "PostalAddress",
      streetAddress: studio.address,
      addressLocality: studio.city,
      addressCountry: "SK",
    },
    email: studio.email,
    telephone: studio.phone,
    openingHours: openingHours.map((item) => `${item.days} ${item.time}`),
    url: siteUrl(),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function servicesJsonLd(offers: Offer[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: offers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: offer.name,
        description: offer.summary,
        provider: { "@type": "LocalBusiness", name: studio.name },
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: (offer.priceCents / 100).toFixed(0),
        },
      },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  date,
}: {
  title: string;
  description: string;
  path: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Organization", name: studio.name },
    mainEntityOfPage: `${siteUrl()}${path}`,
  };
}

export type { FaqEntry };
