import { cn } from "@/lib/utils";
import type { Chapter } from "./chapter-nav";

/** One-screen summary placed right under the hero: problem, approach, result. */
export function AtAGlance({
  context,
  role,
  problem,
  approach,
  results,
  link,
}: {
  context: string;
  role?: string;
  problem: string;
  approach: string;
  results: { value: string; label: string }[];
  link?: { href: string; label: string };
}) {
  return (
    <section className="w-full border-b bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
          At a glance
        </p>
        <div className="mt-6 grid gap-8 md:grid-cols-3 md:gap-10">
          <div>
            <p className="text-sm font-semibold">Context</p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{context}</p>
            {role && (
              <p className="mt-3 text-sm">
                <span className="font-semibold">Role: </span>
                <span className="text-muted-foreground">{role}</span>
              </p>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold">The problem</p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{problem}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">What I did</p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{approach}</p>
          </div>
        </div>
        <div className={cn("mt-10 grid gap-4 sm:grid-cols-2", results.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
          {results.map((r) => (
            <div key={r.label} className="rounded-2xl border bg-card p-5 text-card-foreground">
              <p className="text-3xl font-bold tracking-tight text-indigo-600 dark:text-indigo-300">{r.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{r.label}</p>
            </div>
          ))}
        </div>
        {link && (
          <a
            href={link.href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-700 underline-offset-4 hover:underline dark:text-indigo-300"
          >
            {link.label} ↓
          </a>
        )}
      </div>
    </section>
  );
}

/** The case study laid out in the order the work happened, grouped by phase. */
export function JourneyMap({
  chapters,
  phases,
}: {
  chapters: Chapter[];
  phases: string[];
}) {
  let n = 0;
  return (
    <section className="w-full bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
          The journey, in the order it happened
        </p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((ph, i) => (
            <li key={ph} className="rounded-3xl border bg-card p-5 text-card-foreground">
              <div className="flex items-center gap-3">
                <span className="flex size-7 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-lg font-semibold">{ph}</p>
              </div>
              <ul className="mt-4 space-y-1.5">
                {chapters
                  .filter((c) => c.phase === ph)
                  .map((c) => {
                    n += 1;
                    return (
                      <li key={c.id}>
                        <a
                          href={`#${c.id}`}
                          className="group flex gap-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          <span className="w-5 shrink-0 tabular-nums opacity-60">{n}</span>
                          <span className="underline-offset-4 group-hover:underline">{c.label}</span>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
