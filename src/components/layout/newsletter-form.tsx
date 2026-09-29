"use client";

import { footer } from "@/content/site";

export function NewsletterForm() {
  return (
    <form
      className="mt-4"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        E-mail
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={footer.newsletter.placeholder}
          className="h-12 w-full rounded-pill bg-surface px-4 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          className="h-12 shrink-0 cursor-pointer rounded-pill bg-ink px-4 text-sm font-medium text-bg"
        >
          {footer.newsletter.button}
        </button>
      </div>
      <p className="mt-3 text-xs">{footer.newsletter.note}</p>
    </form>
  );
}
