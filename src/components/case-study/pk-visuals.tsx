import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Small building blocks                                                     */
/* -------------------------------------------------------------------------- */

export function StatTile({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur",
        className
      )}
    >
      <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm leading-snug text-white/65">{label}</p>
    </div>
  );
}

const chipTones = {
  live: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  designed: "bg-sky-500/15 text-sky-700 dark:text-sky-400",
  next: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  neutral: "bg-foreground/10 text-foreground/70",
} as const;

export function Chip({
  tone = "neutral",
  children,
}: {
  tone?: keyof typeof chipTones;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        chipTones[tone]
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function SourceLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 hover:text-indigo-500"
    >
      {children}
    </Link>
  );
}

/** Wide diagrams keep a readable minimum width and scroll sideways on phones. */
export function ScrollBox({
  children,
  minWidth = 800,
  label,
  className,
}: {
  children: ReactNode;
  minWidth?: number;
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        className="overflow-x-auto overscroll-x-contain rounded-3xl border bg-card p-4 text-card-foreground sm:p-6"
        tabIndex={0}
        aria-label={`${label} (scrollable)`}
      >
        <div style={{ minWidth }}>{children}</div>
      </div>
      <p className="mt-3 text-xs opacity-70 sm:hidden">
        Swipe sideways to explore
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Architecture: how the two repos and the knowledge layer connect           */
/* -------------------------------------------------------------------------- */

function Node({
  x,
  y,
  w,
  h,
  title,
  sub,
  tone = "plain",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub: string[];
  tone?: "plain" | "indigo" | "teal" | "amber";
}) {
  const tones = {
    plain: "fill-card stroke-foreground/25",
    indigo: "fill-indigo-500/15 stroke-indigo-500",
    teal: "fill-teal-500/15 stroke-teal-500",
    amber: "fill-amber-500/15 stroke-amber-500",
  } as const;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={16}
        className={cn("stroke-[1.5]", tones[tone])}
      />
      <text
        x={x + w / 2}
        y={y + 30}
        textAnchor="middle"
        className="fill-foreground text-[15px] font-bold"
      >
        {title}
      </text>
      {sub.map((s, i) => (
        <text
          key={s}
          x={x + w / 2}
          y={y + 54 + i * 18}
          textAnchor="middle"
          className="fill-muted-foreground text-[12.5px]"
        >
          {s}
        </text>
      ))}
    </g>
  );
}

function Badge({ x, y, n }: { x: number; y: number; n: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={12} className="fill-indigo-500" />
      <text
        x={x}
        y={y + 4.5}
        textAnchor="middle"
        className="fill-white text-[13px] font-bold"
      >
        {n}
      </text>
    </g>
  );
}

export function ArchitectureDiagram() {
  const arrow = "stroke-foreground/50 stroke-[1.75]";
  return (
    <svg
      viewBox="0 0 1000 520"
      role="img"
      aria-label="Architecture: sources feed Product Knowledge, which is matched against technical knowledge to write a clearer PRD that feeds AI-led delivery; shipped releases flow back into Product Knowledge"
      className="h-auto w-full"
    >
      <defs>
        <marker id="pk-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="fill-foreground/60" />
        </marker>
        <marker id="pk-arrow-i" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="fill-indigo-500" />
        </marker>
      </defs>

      <Node x={225} y={14} w={250} h={84} title="Readers" sub={["Sales · Pre-sales · Services", "Support · New hires · AI assistants"]} />
      <path d="M330 180 V100" className={arrow} fill="none" markerEnd="url(#pk-arrow)" />
      <text x={342} y={150} className="fill-muted-foreground text-[12px]">cited answers</text>

      <Node x={20} y={180} w={175} h={120} title="Sources" sub={["Tickets · Wiki · Designs", "RFP / RFQ documents", "Market reports · Decks"]} />
      <path d="M195 240 H250" className={arrow} fill="none" markerEnd="url(#pk-arrow)" />
      <Badge x={222} y={222} n="1" />

      <Node x={250} y={180} w={215} h={120} title="Product Knowledge" sub={["Direction · Market", "Customer voice", "Current product"]} tone="indigo" />
      <path d="M465 240 H520" className="stroke-indigo-500 stroke-2" fill="none" markerEnd="url(#pk-arrow-i)" />
      <Badge x={492} y={222} n="2" />

      <Node x={520} y={180} w={200} h={120} title="Match → PRD" sub={["Fit · gaps · conflicts", "Feasibility, with evidence", "A clearer PRD"]} tone="teal" />
      <path d="M720 240 H780" className={arrow} fill="none" markerEnd="url(#pk-arrow)" />
      <Badge x={750} y={222} n="3" />

      <Node x={780} y={180} w={200} h={120} title="AI-led delivery" sub={["Specify → build", "Test → review", "Human acceptance"]} tone="amber" />

      <path d="M880 180 V138 H430 V180" className="stroke-indigo-500 stroke-[1.75]" strokeDasharray="6 6" fill="none" markerEnd="url(#pk-arrow-i)" />
      <Badge x={655} y={138} n="4" />
      <text x={655} y={118} textAnchor="middle" className="fill-indigo-600 text-[12.5px] font-semibold dark:fill-indigo-400">
        Shipped release flows back as a release-tagged feature note
      </text>

      <Node x={520} y={390} w={200} h={100} title="Technical knowledge" sub={["Architecture · conventions", "Constraints · dependencies", "What already exists"]} />
      <path d="M620 390 V300" className={arrow} fill="none" markerEnd="url(#pk-arrow)" />
      <text x={632} y={350} className="fill-muted-foreground text-[12px]">what we can build</text>

      <Node x={780} y={390} w={200} h={100} title="Codebase & decisions" sub={["Engineering’s", "source of truth"]} />
      <path d="M780 440 H722" className={arrow} fill="none" markerEnd="url(#pk-arrow)" />

      <text x={20} y={400} className="fill-muted-foreground text-[13px] font-semibold">KEY</text>
      <rect x={20} y={412} width={14} height={14} rx={3} className="fill-indigo-500/15 stroke-indigo-500" />
      <text x={42} y={424} className="fill-muted-foreground text-[12.5px]">Product knowledge (my build)</text>
      <rect x={20} y={436} width={14} height={14} rx={3} className="fill-teal-500/15 stroke-teal-500" />
      <text x={42} y={448} className="fill-muted-foreground text-[12.5px]">Where the two are matched</text>
      <rect x={20} y={460} width={14} height={14} rx={3} className="fill-amber-500/15 stroke-amber-500" />
      <text x={42} y={472} className="fill-muted-foreground text-[12.5px]">Company’s AI-led delivery</text>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Product knowledge × technical knowledge → PRD                             */
/* -------------------------------------------------------------------------- */

const pkGroups: [string, string[]][] = [
  ["Direction (where we want to go)", ["Roadmap references", "Feature requests", "Product research", "Direction meetings"]],
  ["Market", ["Market research", "Competitors", "Pricing and packaging"]],
  ["Customer voice", ["RFP / RFQ answers", "Customer go-lives", "Personas", "Ideal customer profile"]],
  ["Current product", ["Features", "Use cases", "Demo scenarios"]],
];

const techItems = ["Architecture", "Conventions and standards", "Constraints and dependencies", "What already exists in the code", "Known technical debt"];

const matchOut: [string, string][] = [
  ["Fit", "Does the direction match what the market and customers ask for?"],
  ["Gaps", "What is requested or promised but does not exist yet?"],
  ["Conflicts", "Where does a request clash with architecture or a prior commitment?"],
  ["Feasibility", "What can we realistically build, and what does it depend on?"],
];

export function PrdMatch() {
  const col = "rounded-3xl border bg-card p-5 text-card-foreground sm:p-6";
  const op = "flex items-center justify-center py-1 text-3xl font-light text-indigo-500";
  return (
    <div className="grid items-stretch gap-3 lg:grid-cols-[1.25fr_auto_0.8fr_auto_1fr]">
      <div className={cn(col, "border-indigo-500/60 bg-indigo-500/[0.06]")}>
        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">Product Knowledge</p>
        <div className="mt-4 space-y-4">
          {pkGroups.map(([g, items]) => (
            <div key={g}>
              <p className="text-sm font-semibold">{g}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {items.map((i) => (
                  <span key={i} className="rounded-full bg-foreground/[0.07] px-2.5 py-1 text-xs">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={op}>×</div>
      <div className={col}>
        <p className="text-sm font-semibold">Technical knowledge</p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {techItems.map((t) => (<li key={t}>{t}</li>))}
        </ul>
      </div>
      <div className={op}>=</div>
      <div className={cn(col, "border-teal-500/60 bg-teal-500/[0.07]")}>
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">The match, then a clearer PRD</p>
        <ul className="mt-4 space-y-3">
          {matchOut.map(([t, s]) => (
            <li key={t}>
              <p className="text-sm font-semibold">{t}</p>
              <p className="text-xs leading-snug text-muted-foreground">{s}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Index hierarchy                                                           */
/* -------------------------------------------------------------------------- */

const indexCards: [string, string][] = [
  ["Root index", "Links every home. Related links between notes form a navigable graph in any markdown editor."],
  ["Category index", "Opens with “what goes here”, then lists the sub-topics and every note, newest first, one line each."],
  ["Source index and manifests", "One top-level map of every source system, plus per-area manifests: location, owner, target notes, update method, last sync date."],
  ["Glossary", "A master A–Z and per-area glossaries, so every concept has exactly one name."],
];

export function IndexMap() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {indexCards.map(([t, s], i) => (
        <div key={t} className="rounded-2xl border bg-card p-5 text-card-foreground">
          <p className="text-sm font-bold text-indigo-500">{String(i + 1).padStart(2, "0")}</p>
          <p className="mt-1 font-semibold">{t}</p>
          <p className="mt-2 text-sm leading-snug text-muted-foreground">{s}</p>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Refresh routine                                                           */
/* -------------------------------------------------------------------------- */

const refresh: [string, string, boolean?][] = [
  ["Schedule", "A routine runs daily or weekly"],
  ["Manifests", "Each source records its last sync point"],
  ["Query changes", "Only new page versions or tickets updated since then"],
  ["Meaningful change?", "No: record the check and stop", true],
  ["Route and gate", "Same classification, confidence and ownership checks as a human"],
  ["Owner proposal", "A pull request for the area owner, never a silent write", true],
  ["Merged", "Note, index and manifest move forward together"],
];

export function RefreshLoop() {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {refresh.map(([t, s, gate], i) => (
        <li
          key={t}
          className={cn(
            "rounded-2xl border p-4",
            gate ? "border-amber-500/60 bg-amber-500/10" : "bg-card text-card-foreground"
          )}
        >
          <p className="text-sm font-bold text-indigo-500">{String(i + 1).padStart(2, "0")}</p>
          <p className="mt-1 font-semibold">{t}</p>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">{s}</p>
        </li>
      ))}
      <li className="flex items-center rounded-2xl border border-dashed p-4 text-sm text-muted-foreground">
        ↻ Then the loop repeats from the new sync point.
      </li>
    </ol>
  );
}

/* -------------------------------------------------------------------------- */
/*  Autonomy ladder (Level 0 – 5)                                             */
/* -------------------------------------------------------------------------- */

const levels = [
  { l: "L0–1", t: "Autocomplete / coding intern", h: 28 },
  { l: "L2", t: "Junior developer", h: 40 },
  { l: "L3", t: "Developer as manager", h: 54 },
  { l: "L4", t: "Developer as PM", h: 70, active: true },
  { l: "L5", t: "Dark factory", h: 86 },
];

export function AutonomyLadder() {
  return (
    <div>
      <div className="flex h-56 items-end gap-2 sm:gap-3">
        {levels.map((v) => (
          <div
            key={v.l}
            className="relative flex min-w-0 flex-1 flex-col justify-end"
            style={{ height: `${v.h + 14}%` }}
          >
            {v.active && (
              <p className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-indigo-300">
                ▼ Our pipeline today
              </p>
            )}
            <div
              className={cn(
                "flex h-full flex-col justify-end overflow-hidden rounded-t-xl p-1.5 sm:p-3",
                v.active
                  ? "bg-indigo-500 text-white"
                  : v.l === "L5"
                  ? "bg-white/30 text-white"
                  : "bg-white/[0.12] text-white"
              )}
            >
              <p className="text-base font-bold sm:text-xl">{v.l}</p>
              <p className="break-words text-[9px] leading-tight opacity-80 sm:text-xs">
                {v.t}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-white/60">
        Level model: Dan Shapiro, five levels of AI-assisted development
        (Jan 2026), with level labels shortened. Where the industry sits on it is
        directional.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Adoption funnel                                                           */
/* -------------------------------------------------------------------------- */

const funnel = [
  { v: 90, label: "~90%", t: "Developers using AI agents weekly" },
  { v: 57, label: "~57%", t: "Teams with agents in production (any use)" },
  { v: 42, label: "~42%", t: "Enterprises letting agents lead dev work*" },
  { v: 23, label: "~23%", t: "Organisations scaling an agentic system" },
  { v: 9, label: "A handful", t: "Publicly documented Level-5 dark factories" },
];

export function FunnelBars() {
  return (
    <div className="space-y-3">
      {funnel.map((f, i) => (
        <div
          key={f.t}
          className="grid items-center gap-2 sm:grid-cols-[1fr_1fr] sm:gap-6"
        >
          <div
            className="flex h-11 items-center whitespace-nowrap rounded-lg px-4 text-sm font-bold text-white"
            style={{
              width: `${Math.max(f.v, 36)}%`,
              background: `hsl(${234 - i * 4} ${58 + i * 4}% ${64 - i * 5}%)`,
            }}
          >
            {f.label}
          </div>
          <p className="text-sm text-white/75">{f.t}</p>
        </div>
      ))}
      <p className="pt-2 text-xs text-white/60">
        Sources: JetBrains 2026 developer survey; LangChain State of Agents;
        Anthropic/Material enterprise survey (*second-hand, with humans
        overseeing); McKinsey State of AI. Different populations and
        definitions, so read directionally.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Delivery pipeline                                                         */
/* -------------------------------------------------------------------------- */

const pipeline = [
  { t: "Specify", s: "Discovery interview, reviewed spec", who: "Human + AI", human: true },
  { t: "Plan", s: "Milestones", who: "AI" },
  { t: "Tasks", s: "Work packages with acceptance criteria", who: "AI" },
  { t: "Implement", s: "Test gate + 3 retries", who: "AI" },
  { t: "Review", s: "Multi-pass, severity-graded", who: "AI" },
  { t: "Accept / Ship", s: "Separation of duties, audit", who: "Human", human: true },
];

export function PipelineStrip() {
  return (
    <ol className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {pipeline.map((p, i) => (
        <li
          key={p.t}
          className={cn(
            "relative rounded-2xl p-4",
            p.human
              ? "bg-teal-600 text-white"
              : "bg-[#1b1b20] text-white dark:bg-white/10"
          )}
        >
          <p className="text-[11px] font-semibold uppercase tracking-wider opacity-60">
            Step {i + 1}
          </p>
          <p className="mt-1 text-lg font-bold">{p.t}</p>
          <p className="mt-1 text-xs leading-snug opacity-75">{p.s}</p>
          <p
            className={cn(
              "mt-3 text-[11px] font-bold uppercase tracking-wider",
              p.human ? "text-white" : "text-teal-300"
            )}
          >
            {p.who}
          </p>
        </li>
      ))}
    </ol>
  );
}

/* -------------------------------------------------------------------------- */
/*  Taxonomy: one tree, separate homes                                        */
/* -------------------------------------------------------------------------- */

export function TaxonomyMap() {
  const box = "rounded-2xl border bg-card p-4 text-card-foreground";
  return (
    <div className="space-y-3">
      <div className={cn(box, "bg-muted/60 text-center text-sm font-semibold")}>
        Guiding principles · how the base is built, routed and run
      </div>
      <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
        <div className={cn(box, "space-y-3")}>
          <p className="text-sm font-semibold">
            Product areas · one home per product, same categories in each
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Product A", "Product B", "Product C", "Product D"].map((p) => (
              <div key={p} className="rounded-xl border p-3 text-center">
                <p className="text-sm font-semibold">{p}</p>
                <p className="text-xs text-muted-foreground">same categories</p>
              </div>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border p-3 text-center">
              <p className="text-sm font-semibold">Platform</p>
              <p className="text-xs text-muted-foreground">
                what the products run on
              </p>
            </div>
            <div className="rounded-xl border border-indigo-500 bg-indigo-500/10 p-3 text-center">
              <p className="text-sm font-semibold">Combined area</p>
              <p className="text-xs text-muted-foreground">
                products working together
              </p>
            </div>
          </div>
        </div>
        <div className={box}>
          <p className="text-sm font-semibold">Unified product management</p>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>Roadmap method</li>
            <li>Prioritisation and roles</li>
            <li>Templates, workshops</li>
            <li>Reusable customer answers</li>
            <li>Market research</li>
            <li>Direction meetings</li>
          </ul>
        </div>
      </div>
      <div className={cn(box, "bg-muted/60 text-center text-sm font-semibold")}>
        Operating layer · governance · skills · indexes · source registry ·
        memory
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  10-step lifecycle of one piece of knowledge                               */
/* -------------------------------------------------------------------------- */

const steps: { t: string; s: string; gate?: boolean }[] = [
  { t: "Capture", s: "Any source link: spec, ticket, deck, questionnaire" },
  { t: "Classify", s: "Scope, then category, then sub-topic" },
  { t: "Confidence gate", s: "High: suggest the path. Low: ask a human", gate: true },
  { t: "Ownership gate", s: "Owner writes directly. Others raise a proposal", gate: true },
  { t: "Write", s: "Metadata + citations. Gaps marked, never filled" },
  { t: "Validate", s: "Format, sources, links, freshness, open gaps" },
  { t: "Review & promote", s: "Draft → in review → approved" },
  { t: "Publish & sync", s: "Pull request, owner approves the merge" },
  { t: "Use", s: "People search it; the Q&A assistant answers or abstains" },
  { t: "Refresh", s: "Diff since last sync. Only changed content re-routes" },
];

export function LifecycleSteps() {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li
          key={s.t}
          className={cn(
            "rounded-2xl border p-4",
            s.gate
              ? "border-amber-500/60 bg-amber-500/10"
              : "bg-card text-card-foreground"
          )}
        >
          <p className="text-sm font-bold text-indigo-500">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="mt-1 font-semibold">{s.t}</p>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">
            {s.s}
          </p>
        </li>
      ))}
    </ol>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scorecard (today vs target)                                               */
/* -------------------------------------------------------------------------- */

export type ScoreRow = {
  dim: string;
  today: number;
  target: number;
  note: string;
};

export function Scorecard({ rows }: { rows: ScoreRow[] }) {
  return (
    <div className="space-y-4">
      {rows.map((r) => (
        <div
          key={r.dim}
          className="rounded-2xl border bg-card p-5 text-card-foreground"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-semibold">{r.dim}</p>
            <p className="text-sm text-muted-foreground">
              Today <strong className="text-foreground">{r.today}</strong> / 5
              → target <strong className="text-foreground">{r.target}</strong>{" "}
              / 5
            </p>
          </div>
          <div className="relative mt-3 h-3 overflow-hidden rounded-full bg-foreground/10">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-indigo-500/30"
              style={{ width: `${(r.target / 5) * 100}%` }}
            />
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-indigo-500"
              style={{ width: `${(r.today / 5) * 100}%` }}
            />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {r.note}
          </p>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Frontmatter sample (generic, no real content)                             */
/* -------------------------------------------------------------------------- */

export function NoteSample() {
  const lines: [string, string?][] = [
    ["---"],
    ["type:", "Feature"],
    ["title:", "Approval workflows"],
    ["area:", "<product area>"],
    ["topic:", "features-and-functionality / workflows"],
    ["status:", "draft | in_review | approved"],
    ["owners:", "[<area owner>]"],
    ["release:", "<release name>"],
    ["source_links:", "{ tickets: [...], wiki: [...], design: [...] }"],
    ["known_gaps:", "[SOURCE_LINK_REQUIRED]   # not yet sourced"],
    ["---"],
    ["# Approval workflows"],
    ["# Citations"],
    ["[1] spec page   [2] ticket   [3] design frame"],
  ];
  return (
    <pre className="overflow-x-auto rounded-2xl bg-[#1b1b20] p-5 text-[13px] leading-relaxed text-white/85 sm:text-sm">
      {lines.map(([k, v], i) => (
        <div key={i}>
          <span
            className={
              k.startsWith("#") || k === "---" ? "text-white/45" : "text-teal-300"
            }
          >
            {k}
          </span>
          {v && <span className="text-amber-200"> {v}</span>}
        </div>
      ))}
    </pre>
  );
}

/* -------------------------------------------------------------------------- */
/*  Operating model: local clones, agents, GitHub as the shared platform      */
/* -------------------------------------------------------------------------- */

function Ws({ y, title, sub }: { y: number; title: string; sub: string[] }) {
  return (
    <g>
      <rect x={20} y={y} width={330} height={112} rx={16} className="fill-indigo-500/10 stroke-indigo-500 stroke-[1.5]" />
      <text x={185} y={y + 28} textAnchor="middle" className="fill-foreground text-[15px] font-bold">{title}</text>
      {sub.map((s, i) => (
        <text key={s} x={185} y={y + 54 + i * 19} textAnchor="middle" className="fill-muted-foreground text-[12.5px]">{s}</text>
      ))}
    </g>
  );
}

export function OperatingModelDiagram() {
  const arrow = "stroke-foreground/50 stroke-[1.75]";
  const gh = [
    "Protected default branch",
    "CODEOWNERS: the area owner reviews",
    "CI check on the authenticated GitHub actor",
    "proposals/ for cross-area changes",
    "Full history = the audit trail",
  ];
  return (
    <svg
      viewBox="0 0 1000 570"
      role="img"
      aria-label="Operating model: each PM works in a local clone with agents; changes travel by pull request to a shared GitHub repository that enforces ownership; everyone pulls the merged result"
      className="h-auto w-full"
    >
      <defs>
        <marker id="om-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="fill-foreground/60" />
        </marker>
      </defs>

      <text x={20} y={22} className="fill-muted-foreground text-[13px] font-semibold">LOCAL: nothing leaves the machine until a push</text>
      <Ws y={36} title="PM workstation · Product area A" sub={["Local git clone as an Obsidian vault", "Claude Code + agents + local memory"]} />
      <Ws y={166} title="PM workstation · Product area B" sub={["Local git clone as an Obsidian vault", "Claude Code + agents + local memory"]} />
      <Ws y={296} title="PM workstation · Platform / shared" sub={["Local git clone as an Obsidian vault", "Claude Code + agents + local memory"]} />
      <text x={185} y={436} textAnchor="middle" className="fill-muted-foreground text-[13px]">… six domain PMs in total, each owning an area</text>

      {/* arrows */}
      <path d="M350 92 H560" className={arrow} fill="none" markerEnd="url(#om-a)" />
      <path d="M350 222 H560" className={arrow} fill="none" markerEnd="url(#om-a)" />
      <path d="M350 352 H560" className={arrow} fill="none" markerEnd="url(#om-a)" />
      <text x={455} y={84} textAnchor="middle" className="fill-muted-foreground text-[12px]">push → pull request</text>
      <path d="M560 128 H352" className={arrow} fill="none" markerEnd="url(#om-a)" strokeDasharray="5 5" />
      <path d="M560 258 H352" className={arrow} fill="none" markerEnd="url(#om-a)" strokeDasharray="5 5" />
      <path d="M560 388 H352" className={arrow} fill="none" markerEnd="url(#om-a)" strokeDasharray="5 5" />
      <text x={455} y={150} textAnchor="middle" className="fill-muted-foreground text-[12px]">pull merged changes</text>

      {/* GitHub */}
      <rect x={560} y={36} width={420} height={400} rx={18} className="fill-card stroke-foreground/30 stroke-[1.5]" />
      <text x={770} y={70} textAnchor="middle" className="fill-foreground text-[17px] font-bold">GitHub · shared private repository</text>
      <text x={770} y={92} textAnchor="middle" className="fill-muted-foreground text-[12.5px]">The single shared platform and ingestion point</text>
      {gh.map((g, i) => (
        <g key={g}>
          <rect x={584} y={110 + i * 64} width={372} height={50} rx={12} className="fill-teal-500/10 stroke-teal-500" />
          <text x={770} y={140 + i * 64} textAnchor="middle" className="fill-foreground text-[13.5px] font-medium">{g}</text>
        </g>
      ))}

      {/* readers */}
      <path d="M770 436 V470" className={arrow} fill="none" markerEnd="url(#om-a)" />
      <Node x={560} y={472} w={420} h={80} title="Readers" sub={["Sales · Pre-sales · Services · Support · AI assistants"]} />

      {/* agents */}
      <rect x={20} y={472} width={510} height={80} rx={16} className="fill-amber-500/10 stroke-amber-500 stroke-[1.5]" />
      <text x={275} y={500} textAnchor="middle" className="fill-foreground text-[15px] font-bold">An agent for every job, inside every clone</text>
      <text x={275} y={524} textAnchor="middle" className="fill-muted-foreground text-[12.5px]">ingest and route · validate · governance guardian</text>
      <text x={275} y={542} textAnchor="middle" className="fill-muted-foreground text-[12.5px]">refresh · memory · model router · agent builder</text>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Generic step grid with a "who does it" tag                                */
/* -------------------------------------------------------------------------- */

const whoTone = {
  PM: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300",
  Agent: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  GitHub: "bg-teal-500/15 text-teal-700 dark:text-teal-300",
  Everyone: "bg-foreground/10 text-foreground/70",
} as const;

export function StepGrid({
  steps,
}: {
  steps: { t: string; s: string; who: keyof typeof whoTone }[];
}) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((x, i) => (
        <li key={x.t} className="flex flex-col rounded-2xl border bg-card p-4 text-card-foreground">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-bold text-indigo-500">{String(i + 1).padStart(2, "0")}</span>
            <span className={cn("rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide", whoTone[x.who])}>
              {x.who}
            </span>
          </div>
          <p className="mt-2 font-semibold">{x.t}</p>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">{x.s}</p>
        </li>
      ))}
    </ol>
  );
}

/* -------------------------------------------------------------------------- */
/*  Build timeline                                                            */
/* -------------------------------------------------------------------------- */

export function BuildTimeline({
  items,
}: {
  items: { when: string; t: string; s: string }[];
}) {
  return (
    <ol className="relative space-y-6 border-l-2 border-indigo-500/30 pl-6 sm:pl-8">
      {items.map((x) => (
        <li key={x.t} className="relative">
          <span aria-hidden className="absolute -left-[33px] top-1.5 size-4 rounded-full border-4 border-background bg-indigo-500 sm:-left-[41px]" />
          <p className="text-sm font-semibold text-indigo-500">{x.when}</p>
          <p className="mt-1 text-lg font-semibold leading-snug">{x.t}</p>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{x.s}</p>
        </li>
      ))}
    </ol>
  );
}
