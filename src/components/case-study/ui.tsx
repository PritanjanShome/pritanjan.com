import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/* -------------------------------------------------------------------------- */
/*  Text helpers                                                              */
/* -------------------------------------------------------------------------- */

/** Renders a string where **double-asterisk** segments are bold. */
export function Rich({ children }: { children: string }) {
  return (
    <>
      {children.split("**").map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-semibold text-foreground">
            {part}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

export function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-balance text-3xl font-bold tracking-tight sm:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-balance text-xl font-semibold tracking-tight sm:text-2xl",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4 className={cn("text-base font-semibold sm:text-lg", className)}>
      {children}
    </h4>
  );
}

/** Body copy. Inherits the section colour at 80% so it works on any tone. */
export function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed opacity-80 sm:text-lg sm:leading-8",
        className
      )}
    >
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*  Layout                                                                    */
/* -------------------------------------------------------------------------- */

/** Flips a light-background illustration for dark mode (keeps hues). */
export const darkInvert = "dark:[filter:invert(1)_hue-rotate(180deg)]";
/** Same flip, always on: for art placed on an always-dark band. */
export const alwaysInvert = "[filter:invert(1)_hue-rotate(180deg)]";

export type Tone = "plain" | "muted" | "tint" | "lavender" | "indigo" | "dark";

const tones: Record<Tone, string> = {
  plain: "bg-background text-foreground",
  muted: "bg-muted/50 text-foreground",
  tint: "bg-indigo-500/[0.07] text-foreground dark:bg-white/[0.035]",
  lavender: "bg-indigo-400/20 text-foreground dark:bg-white/[0.035]",
  indigo: "bg-indigo-500 text-white [&_strong]:text-white",
  dark: "bg-[#1b1b20] text-white [&_strong]:text-white",
};

/** Page wrapper: leaves room for the bottom dock and stops sideways scroll. */
export function CaseStudyPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-[100dvh] w-full overflow-x-clip pb-28">
      {children}
    </main>
  );
}

export function SectionLabel({ n, label }: { n?: string; label: string }) {
  return (
    <p className="mb-8 flex items-center gap-3 text-sm opacity-80 sm:mb-12">
      {n && <span>{n}</span>}
      <span aria-hidden className="h-px w-10 bg-current opacity-70" />
      <span>{label}</span>
    </p>
  );
}

export function Section({
  id,
  n,
  label,
  tone = "plain",
  children,
  className,
}: {
  id?: string;
  n?: string;
  label?: string;
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("w-full scroll-mt-8", tones[tone])}>
      <div className={cn("mx-auto max-w-6xl px-6 py-16 sm:py-24", className)}>
        {label && <SectionLabel n={n} label={label} />}
        {children}
      </div>
    </section>
  );
}

/** Splits a section into a heading column and a content column on desktop. */
export function TwoCol({
  children,
  className,
  reverse,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reverse && "lg:[&>*:first-child]:order-2",
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Cards                                                                     */
/* -------------------------------------------------------------------------- */

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border bg-card p-6 text-card-foreground shadow-sm sm:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export function NumberCard({
  n,
  title,
  children,
  className,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={className}>
      <p className="text-xl font-medium text-indigo-500">{n}</p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h3>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {children}
      </div>
    </Card>
  );
}

const priorityStyles = {
  High: "bg-red-500/15 text-red-600 dark:text-red-400",
  Medium: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  Low: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
} as const;

export type Priority = keyof typeof priorityStyles;

/** A small "ticket" card, used for prioritised pain points / solutions. */
export function TicketCard({
  priority,
  rank,
  title,
  description,
  painPoint,
  ticket,
}: {
  priority: Priority;
  rank?: string;
  title: string;
  description: string;
  painPoint?: string;
  ticket: string;
}) {
  return (
    <div className="rounded-2xl border bg-card p-5 text-card-foreground shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium",
            priorityStyles[priority]
          )}
        >
          <span aria-hidden className="size-1.5 rounded-full bg-current" />
          {priority}
        </span>
        {rank && (
          <span className="text-sm text-muted-foreground">{rank}</span>
        )}
      </div>
      <h4 className="mt-4 text-lg font-semibold leading-snug">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {painPoint && (
        <div className="mt-4">
          <p className="text-xs font-medium text-muted-foreground">
            Corresponding Pain Point
          </p>
          <p className="mt-1 text-sm leading-relaxed">{painPoint}</p>
        </div>
      )}
      <p className="mt-4 text-xs font-semibold tracking-wide text-muted-foreground">
        {ticket}
      </p>
    </div>
  );
}

/** Light grey lane that holds a column of TicketCards. */
export function Lane({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 rounded-3xl bg-foreground/[0.05] p-4">
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tables                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Wide tables are unreadable on phones, so below the breakpoint every row
 * becomes a stacked card with its column labels shown inline.
 * `wide` switches the breakpoint from `md` to `lg` for 5+ column tables.
 */
export function DataTable({
  headers,
  rows,
  wide,
  numeric,
  className,
}: {
  headers: string[];
  rows: React.ReactNode[][];
  wide?: boolean;
  /** Centre columns after the first (for score tables). */
  numeric?: boolean;
  className?: string;
}) {
  const isEmpty = (c: React.ReactNode) => c === "-" || c === "–";
  return (
    <div className={className}>
      <div
        className={cn(
          "hidden overflow-hidden rounded-2xl border bg-card text-card-foreground",
          wide ? "lg:block" : "md:block"
        )}
      >
        <table className="w-full text-left text-sm lg:text-base">
          <thead className="bg-muted/70">
            <tr>
              {headers.map((h, i) => (
                <th
                  key={h}
                  scope="col"
                  className={cn(
                    "px-5 py-4 font-medium",
                    numeric && i > 0 && "text-center"
                  )}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            {rows.map((row, i) => (
              <tr key={i} className="align-top">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={cn(
                      "px-5 py-4 leading-relaxed",
                      j === 0
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground",
                      numeric && j > 0 && "text-center"
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={cn("space-y-4", wide ? "lg:hidden" : "md:hidden")}>
        {rows.map((row, i) => (
          <div
            key={i}
            className="space-y-3 rounded-2xl border bg-card p-5 text-card-foreground"
          >
            <p className="font-semibold">{row[0]}</p>
            {row.slice(1).map((cell, j) =>
              isEmpty(cell) ? null : (
                <div key={j}>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {headers[j + 1]}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed">{cell}</p>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Images                                                                    */
/* -------------------------------------------------------------------------- */

type ImgProps = {
  src: string;
  w: number;
  h: number;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function Fig({
  src,
  w,
  h,
  alt,
  className,
  priority,
  sizes = "(min-width: 1152px) 1104px, 100vw",
}: ImgProps) {
  return (
    <Image
      src={src}
      width={w}
      height={h}
      alt={alt}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full", className)}
    />
  );
}

/**
 * For wide diagrams (flowcharts, wireframe sheets). On phones the image keeps
 * a readable minimum width and scrolls sideways; tapping opens full size.
 */
export function ScrollFig({
  src,
  w,
  h,
  alt,
  minWidth = 760,
  className,
  frame = true,
  invert = false,
}: ImgProps & { minWidth?: number; frame?: boolean; invert?: boolean }) {
  return (
    <div className={className}>
      <div
        className={cn(
          "overflow-x-auto overscroll-x-contain rounded-2xl",
          frame && "border bg-white"
        )}
        tabIndex={0}
        aria-label={`${alt} (scrollable)`}
      >
        <div style={{ minWidth }}>
          <Image
            src={src}
            width={w}
            height={h}
            alt={alt}
            sizes="(min-width: 1152px) 1104px, 1200px"
            className={cn("h-auto w-full", invert && darkInvert)}
          />
        </div>
      </div>
      <p className="mt-3 flex items-center justify-between gap-4 text-xs opacity-70">
        <span className="sm:hidden">Swipe sideways to explore</span>
        <span className="hidden sm:inline" />
        <Link
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Open full size
        </Link>
      </p>
    </div>
  );
}

/**
 * Redrawn flowchart, shipped as a light and a dark SVG so it follows the theme
 * and stays sharp at any size. Wide ones scroll sideways on phones.
 */
export function FlowFig({
  name,
  w,
  h,
  alt,
  minWidth,
  className,
}: {
  name: string;
  w: number;
  h: number;
  alt: string;
  minWidth?: number;
  className?: string;
}) {
  const base = `/case-studies/flows/${name}`;
  return (
    <div
      className={cn(
        "overflow-x-auto overscroll-x-contain",
        minWidth && "max-sm:-mx-6 max-sm:px-6",
        className
      )}
    >
      <div
        className="mx-auto"
        style={{ minWidth, maxWidth: Math.max(w, minWidth ?? 0) }}
      >
        <Image
          src={`${base}-light.svg`}
          width={w}
          height={h}
          alt={alt}
          unoptimized
          className="h-auto w-full dark:hidden"
        />
        <Image
          src={`${base}-dark.svg`}
          width={w}
          height={h}
          alt=""
          aria-hidden
          unoptimized
          className="hidden h-auto w-full dark:block"
        />
      </div>
    </div>
  );
}

/** White "paper" behind images that were designed on a white canvas. */
export function Paper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl bg-white p-4 text-neutral-900 sm:p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-center text-sm opacity-70">{children}</p>
  );
}
