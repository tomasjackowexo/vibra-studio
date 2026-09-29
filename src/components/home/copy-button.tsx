"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [label, setLabel] = useState("Kopírovať");

  return (
    <button
      type="button"
      className="cursor-pointer rounded-pill border border-line px-3 py-1.5 text-xs font-medium"
      onClick={() => {
        const done = (next: string) => {
          setLabel(next);
          window.setTimeout(() => setLabel("Kopírovať"), 1500);
        };

        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(
            () => done("Skopírované"),
            () => done("Označené"),
          );
          return;
        }

        done("Označené");
      }}
    >
      {label}
    </button>
  );
}
