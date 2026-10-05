"use client";

import { useActionState } from "react";
import { submitInquiry, type FormState } from "@/server/forms";

const initial: FormState = { status: "idle", message: "" };

export function ContactForm({ category }: { category?: string }) {
  const [state, action, pending] = useActionState(submitInquiry, initial);

  return (
    <form action={action} className="grid max-w-[640px] gap-4">
      {category ? <input type="hidden" name="category" value={category} /> : null}
      <label className="grid gap-2 text-sm text-muted">
        Meno
        <input
          name="name"
          required
          autoComplete="name"
          className="h-12 rounded-pill bg-surface px-4 text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        E-mail
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-12 rounded-pill bg-surface px-4 text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Telefón
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          className="h-12 rounded-pill bg-surface px-4 text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Správa
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-card bg-surface px-4 py-3 text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="h-[52px] cursor-pointer rounded-pill bg-ink px-6 text-bg disabled:opacity-50"
      >
        Odoslať
      </button>
      {state.message ? (
        <p role="status" className={state.status === "error" ? "text-sm text-ink" : "text-sm text-muted"}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
