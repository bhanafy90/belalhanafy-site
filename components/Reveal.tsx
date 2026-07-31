"use client";

import { useEffect } from "react";

/**
 * Adds `.js` to <html> and reveals `.reveal` elements as they scroll into view.
 * Without JS — or with reduced motion preferred — everything is already visible,
 * because `.reveal` only hides under `.js` and outside a reduced-motion query.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    root.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-shown", "true");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((el) => observer.observe(el));

    // Safety net: if anything is still hidden after a moment (observer never
    // fired, element already past the viewport), show it rather than lose it.
    const timer = window.setTimeout(() => {
      targets.forEach((el) => el.setAttribute("data-shown", "true"));
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      root.classList.remove("js");
    };
  }, []);

  return null;
}
