"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { emailParts } from "@/lib/site";

const subscribe = () => () => {};

/** false while prerendering, true once hydrated on the client. */
const useHydrated = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

/** Structure only — callers supply colour via `className` for the button variant. */
const buttonBase =
  "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors";

/**
 * The address is assembled only after hydration, so the literal string never
 * appears in the static HTML that scrapers read. Before then it renders in a
 * form a person can still read and retype, unless `label` replaces it with
 * fixed text (e.g. "Email"), in which case the address never appears as text
 * at all — only inside the `href`, and only once hydrated.
 */
export function Email({
  className,
  variant = "link",
  label,
  icon,
}: {
  className?: string;
  variant?: "link" | "button";
  label?: string;
  icon?: ReactNode;
}) {
  const hydrated = useHydrated();
  const base = variant === "button" ? buttonBase : "link-underline";

  if (!hydrated) {
    return (
      <span className={`${base} ${className ?? ""}`}>
        {icon}
        {label ?? (
          <>
            {emailParts.user} <span aria-hidden="true">[at]</span>
            <span className="sr-only">@</span> {emailParts.domain}
          </>
        )}
      </span>
    );
  }

  const address = `${emailParts.user}@${emailParts.domain}`;

  return (
    <a href={`mailto:${address}`} className={`${base} ${className ?? ""}`}>
      {icon}
      {label ?? address}
    </a>
  );
}
