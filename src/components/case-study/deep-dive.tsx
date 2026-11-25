"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, type ReactNode } from "react";

/**
 * A collapsed chapter: one row that expands into the full section. Keeps the
 * main story short while all the detail stays one click away. Opens itself when
 * the URL hash points at it, so navigation links still work.
 */
export function DeepDive({
  id,
  label,
  summary,
  children,
}: {
  id: string;
  label: string;
  summary: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      if (window.location.hash === `#${id}`) {
        setOpen(true);
        requestAnimationFrame(() =>
          document.getElementById(id)?.scrollIntoView({ block: "start" })
        );
      }
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, [id]);

  return (
    <section id={id} className="w-full scroll-mt-20 border-b">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center gap-4 px-6 py-6 text-left transition-colors hover:bg-foreground/[0.03]",
          open && "bg-foreground/[0.03]"
        )}
      >
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-semibold tracking-tight sm:text-xl">{label}</span>
          <span className="mt-1 block text-sm text-muted-foreground">{summary}</span>
        </span>
        <span
          aria-hidden
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full border text-lg transition-transform",
            open && "rotate-45"
          )}
        >
          +
        </span>
      </button>
      {open && <div>{children}</div>}
    </section>
  );
}
