"use client";

import { useActionState } from "react";
import { submitStressTest, type FormState } from "@/server/forms";

const initial: FormState = { status: "idle", message: "" };

export function TestForm() {
  const [state, action, pending] = useActionState(submitStressTest, initial);

  return (
    <form action={action} className="grid max-w-[640px] gap-4">
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
      <button
        type="submit"
        disabled={pending}
        className="h-[52px] w-fit cursor-pointer rounded-pill bg-ink px-6 text-bg disabled:opacity-50"
      >
        Odoslať
      </button>
      {state.message ? (
        <p role="status" className="text-sm text-muted">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
