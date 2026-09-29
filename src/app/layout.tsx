import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { MobileBookingBar } from "@/components/layout/mobile-booking-bar";
import { Nav } from "@/components/layout/nav";
import "./globals.css";

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VIBRA frekvenčné štúdio",
    template: "%s · VIBRA frekvenčné štúdio",
  },
  description:
    "Frekvenčné štúdio v Nitre. Sedenia so zvukom a jemnou vibráciou, bez výkonu a bez členstva.",
  openGraph: {
    locale: "sk_SK",
    siteName: "VIBRA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${geist.variable} ${instrumentSerif.variable}`}>
      <body className="bg-bg px-0 font-sans text-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileBookingBar />
      </body>
    </html>
  );
}
