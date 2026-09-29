import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { bookingCta, footer, footerNav, openingHours, socials, studio } from "@/content/site";

export function Footer() {
  return (
    <footer className="px-4 pt-4 pb-28 text-sm text-muted md:pb-14">
      <div className="mx-auto grid max-w-[1200px] gap-10 border-t border-line py-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link href="/" className="text-ink" aria-label="VIBRA, úvod">
            <Logo />
          </Link>
          <p className="mt-4 text-xs text-muted">{studio.company}</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs tracking-[0.16em] text-muted uppercase">Navigácia</p>
          <ul className="mt-4 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={bookingCta.href} className="hover:text-ink">
                {bookingCta.label}
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.16em] text-muted uppercase">Kontakt</p>
          <ul className="mt-4 space-y-2">
            <li>
              {studio.address}, {studio.city}
            </li>
            {openingHours.map((item) => (
              <li key={item.days}>
                {item.days} {item.time}
              </li>
            ))}
            <li>{studio.email}</li>
            <li>{studio.phone}</li>
            {socials.map((item) => (
              <li key={item.label}>
                {item.label}: {item.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.16em] text-gold uppercase">{footer.newsletter.label}</p>
          <p className="mt-3 text-2xl font-medium tracking-[-0.035em] text-ink">{footer.newsletter.title}</p>
          <p className="mt-2">{footer.newsletter.text}</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="mx-auto grid max-w-[1200px] gap-3 text-xs leading-relaxed">
        <p>
          {footer.blurb} {footer.trademark}
        </p>
        <ul className="flex gap-4">
          {footer.legal.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
