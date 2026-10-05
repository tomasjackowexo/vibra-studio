"use client";

import { useActionState } from "react";
import { footer } from "@/content/site";
import { submitNewsletter, type FormState } from "@/server/forms";

const initial: FormState = { status: "idle", message: "" };

export function NewsletterForm() {
  const [state, action, pending] = useActionState(submitNewsletter, initial);

  return (
    <form action={action} className="mt-4">
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
          disabled={pending}
          className="h-12 shrink-0 cursor-pointer rounded-pill bg-ink px-4 text-sm font-medium text-bg disabled:opacity-50"
        >
          {footer.newsletter.button}
        </button>
      </div>
      <p className="mt-3 text-xs" role="status">
        {state.message || footer.newsletter.note}
      </p>
    </form>
  );
}
