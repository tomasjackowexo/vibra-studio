"use client";

import { useMemo, useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { faqCategories, type FaqEntry } from "@/content/faq";

export function FaqExplorer({ items }: { items: FaqEntry[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof faqCategories)[number] | "all">("all");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return items.filter((item) => {
      const inCategory = category === "all" || item.category === category;
      const inText =
        needle.length === 0 ||
        item.question.toLowerCase().includes(needle) ||
        item.answer.toLowerCase().includes(needle);
      return inCategory && inText;
    });
  }, [category, items, query]);

  return (
    <div>
      <label className="grid gap-2 text-sm text-muted">
        Hľadať
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-12 rounded-pill bg-surface px-4 text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none"
        />
      </label>
      <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Kategórie">
        <FilterButton active={category === "all"} onClick={() => setCategory("all")}>
          Všetko
        </FilterButton>
        {faqCategories.map((item) => (
          <FilterButton key={item} active={category === item} onClick={() => setCategory(item)}>
            {item}
          </FilterButton>
        ))}
      </div>
      <div className="mt-8">
        {filtered.length > 0 ? (
          <Accordion items={filtered} />
        ) : (
          <p className="text-muted">Nič sa nenašlo.</p>
        )}
      </div>
    </div>
  );
}

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={
        active
          ? "cursor-pointer rounded-pill bg-ink px-4 py-2 text-sm text-bg"
          : "cursor-pointer rounded-pill bg-surface px-4 py-2 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-line)]"
      }
    >
      {children}
    </button>
  );
}
