import type { Metadata } from "next";
import { hasDatabase } from "@/lib/database";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <section className="px-4 pt-10 pb-16">
      <div className="mx-auto max-w-[720px]">
        <h1 className="text-[clamp(2.4rem,6vw,4.2rem)]">Admin</h1>
        <p className="mt-5 max-w-[42ch] text-lg text-muted">
          {hasDatabase()
            ? "Prihlásenie do administrácie pripravujeme."
            : "Admin bude dostupný po pripojení databázy"}
        </p>
      </div>
    </section>
  );
}
