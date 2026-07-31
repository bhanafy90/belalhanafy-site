"use client";

import { useSyncExternalStore } from "react";
import { emailParts } from "@/lib/site";

const subscribe = () => () => {};

/** false while prerendering, true once hydrated on the client. */
const useHydrated = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

/**
 * The address is assembled only after hydration, so the literal string never
 * appears in the static HTML that scrapers read. Before then it renders in a
 * form a person can still read and retype.
 */
export function Email({ className }: { className?: string }) {
  const hydrated = useHydrated();

  if (!hydrated) {
    return (
      <span className={className}>
        {emailParts.user} <span aria-hidden="true">[at]</span>
        <span className="sr-only">@</span> {emailParts.domain}
      </span>
    );
  }

  const address = `${emailParts.user}@${emailParts.domain}`;

  return (
    <a href={`mailto:${address}`} className={`link-underline ${className ?? ""}`}>
      {address}
    </a>
  );
}
