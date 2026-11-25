"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export type Chapter = { id: string; label: string; phase: string };

/**
 * Sticky "where am I" bar. Chapters are listed in the order the work happened
 * and grouped into phases; the active phase follows the scroll position.
 */
export function ChapterNav({
  chapters,
  phases,
  extra,
}: {
  chapters: Chapter[];
  phases: string[];
  extra?: { href: string; label: string };
}) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.3;
      let current = chapters[0]?.id;
      for (const c of chapters) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= line) current = c.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [chapters]);

  const activePhase = chapters.find((c) => c.id === active)?.phase;
  const firstOf = (phase: string) => chapters.find((c) => c.phase === phase);

  return (
    <nav
      aria-label="Case study chapters"
      className="sticky top-0 z-40 w-full border-b bg-background/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-6">
        <ol className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none]">
          {phases.map((ph, i) => {
            const target = firstOf(ph);
            if (!target) return null;
            const on = ph === activePhase;
            return (
              <li key={ph} className="shrink-0">
                <a
                  href={`#${target.id}`}
                  aria-current={on ? "step" : undefined}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors sm:gap-2 sm:px-3",
                    on
                      ? "bg-indigo-600 text-white"
                      : "text-foreground/70 hover:bg-foreground/10"
                  )}
                >
                  <span className="hidden text-xs opacity-70 sm:inline">{i + 1}</span>
                  {ph}
                </a>
              </li>
            );
          })}
        </ol>

        {extra && (
          <a
            href={extra.href}
            className="hidden shrink-0 rounded-full border border-indigo-500/40 px-3 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-500/10 dark:text-indigo-300 sm:inline-block"
          >
            {extra.label}
          </a>
        )}

        <details className="group relative shrink-0">
          <summary className="cursor-pointer list-none rounded-full border px-3 py-1.5 text-sm font-medium hover:bg-foreground/10 [&::-webkit-details-marker]:hidden">
            All sections
          </summary>
          <div className="absolute right-0 mt-2 max-h-[70vh] w-72 overflow-y-auto rounded-2xl border bg-background p-3 shadow-xl">
            {phases.map((ph) => (
              <div key={ph} className="mb-3 last:mb-0">
                <p className="px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {ph}
                </p>
                <ul className="mt-1">
                  {chapters
                    .filter((c) => c.phase === ph)
                    .map((c) => (
                      <li key={c.id}>
                        <a
                          href={`#${c.id}`}
                          className={cn(
                            "block rounded-lg px-2 py-1.5 text-sm hover:bg-foreground/10",
                            c.id === active && "font-semibold text-indigo-600 dark:text-indigo-300"
                          )}
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
            {extra && (
              <a
                href={extra.href}
                className="mt-2 block rounded-lg bg-indigo-500/10 px-2 py-1.5 text-sm font-medium text-indigo-700 dark:text-indigo-300"
              >
                {extra.label}
              </a>
            )}
          </div>
        </details>
      </div>
    </nav>
  );
}
