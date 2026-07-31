"use client";

import { useMemo, useState } from "react";
import { PublicationCard } from "./PublicationCard";
import {
  publications,
  themeLabels,
  type Theme,
} from "@/content/publications";

const filters: { id: Theme | "all"; label: string }[] = [
  { id: "all", label: "All" },
  ...(Object.keys(themeLabels) as Theme[]).map((t) => ({
    id: t,
    label: themeLabels[t],
  })),
];

export function PublicationList() {
  const [active, setActive] = useState<Theme | "all">("all");

  const shown = useMemo(
    () =>
      active === "all"
        ? publications
        : publications.filter((p) => p.themes.includes(active)),
    [active],
  );

  return (
    <>
      {/* Keeps the h1 -> h2 -> h3 order valid; each card's title is an h3. */}
      <h2 className="sr-only">All publications</h2>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by theme">
        {filters.map((f) => {
          const selected = active === f.id;
          const count =
            f.id === "all"
              ? publications.length
              : publications.filter((p) => p.themes.includes(f.id as Theme))
                  .length;

          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              aria-pressed={selected}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                selected
                  ? "border-accent bg-accent/8 text-accent"
                  : "border-line text-muted hover:border-muted hover:text-text"
              }`}
            >
              {f.label}
              <span className="ml-1.5 text-xs opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-muted">
        Showing {shown.length} of {publications.length} publications
      </p>

      <div className="mt-2">
        {shown.map((p) => (
          <PublicationCard key={p.id} p={p} />
        ))}
      </div>
    </>
  );
}
