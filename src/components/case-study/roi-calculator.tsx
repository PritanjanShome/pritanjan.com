"use client";

import { useState } from "react";

type Field = {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  unit?: string;
};

const fields: Field[] = [
  { key: "pms", label: "Product managers in the org", min: 2, max: 40, step: 1 },
  { key: "qaHours", label: "Hours per PM per week answering repeat internal questions", min: 0, max: 15, step: 0.5, unit: "h" },
  { key: "deflect", label: "Share of those questions the knowledge base answers instead", min: 0, max: 90, step: 5, unit: "%" },
  { key: "rfps", label: "Questionnaires / RFPs answered per year", min: 0, max: 100, step: 1 },
  { key: "rfpHours", label: "Hours to answer one questionnaire today", min: 5, max: 120, step: 5, unit: "h" },
  { key: "repeat", label: "Share of questionnaire questions that are repeats", min: 0, max: 90, step: 5, unit: "%" },
  { key: "hires", label: "New hires per year who need to learn the product", min: 0, max: 40, step: 1 },
  { key: "weeks", label: "Ramp-up weeks saved per hire", min: 0, max: 8, step: 0.5, unit: "wk" },
  { key: "rate", label: "Loaded cost per hour (€)", min: 30, max: 200, step: 5, unit: "€" },
];

const defaults: Record<string, number> = {
  pms: 6,
  qaHours: 4,
  deflect: 40,
  rfps: 20,
  rfpHours: 30,
  repeat: 50,
  hires: 6,
  weeks: 2,
  rate: 75,
};

// Stated assumptions (shown to the reader, not hidden):
const WORK_WEEKS = 46; // working weeks per year
const REUSE_SAVING = 0.6; // effort cut on a repeat question (mid-range of vendor-claimed 50-70%, directional)
const RAMP_GAP = 0.5; // share of a week's output lost while ramping
const HOURS_WEEK = 40;
const FTE_HOURS = 1600;

const nf = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

export function RoiCalculator() {
  const [v, setV] = useState(defaults);

  const qa = v.pms * v.qaHours * WORK_WEEKS * (v.deflect / 100);
  const rfp = v.rfps * v.rfpHours * (v.repeat / 100) * REUSE_SAVING;
  const onboarding = v.hires * v.weeks * HOURS_WEEK * RAMP_GAP;
  const total = qa + rfp + onboarding;
  const euro = total * v.rate;

  const parts = [
    { name: "PM time freed from repeat questions", h: qa, c: "bg-indigo-500" },
    { name: "Questionnaire effort avoided", h: rfp, c: "bg-teal-500" },
    { name: "Faster new-hire ramp-up", h: onboarding, c: "bg-amber-500" },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
      <div className="space-y-6">
        {fields.map((f) => (
          <label key={f.key} className="block">
            <span className="flex items-baseline justify-between gap-4 text-sm">
              <span className="opacity-80">{f.label}</span>
              <span className="shrink-0 font-semibold tabular-nums">
                {f.unit === "€" ? "€" : ""}
                {v[f.key]}
                {f.unit && f.unit !== "€" ? f.unit : ""}
              </span>
            </span>
            <input
              type="range"
              min={f.min}
              max={f.max}
              step={f.step}
              value={v[f.key]}
              onChange={(e) =>
                setV((s) => ({ ...s, [f.key]: Number(e.target.value) }))
              }
              className="mt-2 h-2 w-full cursor-pointer accent-indigo-500"
            />
          </label>
        ))}
        <button
          type="button"
          onClick={() => setV(defaults)}
          className="text-sm underline underline-offset-4 opacity-70 hover:opacity-100"
        >
          Reset to defaults
        </button>
      </div>

      <div className="rounded-3xl bg-[#1b1b20] p-6 text-white sm:p-8">
        <p className="text-sm text-white/60">Hours returned to the org, per year</p>
        <p className="mt-1 text-5xl font-bold tracking-tight tabular-nums">
          {nf.format(total)}
        </p>
        <p className="mt-2 text-white/70">
          ≈ <strong className="text-white">{(total / FTE_HOURS).toFixed(2)} FTE</strong>{" "}
          · ≈ <strong className="text-white">€{nf.format(euro)}</strong> of capacity
        </p>

        <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-white/10">
          {parts.map((p) => (
            <div
              key={p.name}
              className={p.c}
              style={{ width: `${total ? (p.h / total) * 100 : 0}%` }}
            />
          ))}
        </div>
        <ul className="mt-5 space-y-3">
          {parts.map((p) => (
            <li key={p.name} className="flex items-start gap-3 text-sm">
              <span className={`mt-1.5 size-2.5 shrink-0 rounded-full ${p.c}`} />
              <span className="flex-1 text-white/75">{p.name}</span>
              <span className="font-semibold tabular-nums">{nf.format(p.h)} h</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/50">
          Illustrative model, not a measured result. Assumes {WORK_WEEKS} working
          weeks, a {REUSE_SAVING * 100}% effort cut on a repeated questionnaire
          answer (mid-range of vendor-claimed savings, directional) and{" "}
          {RAMP_GAP * 100}% lost output while a new hire ramps. Replace the
          sliders with your own numbers before quoting anything.
        </p>
      </div>
    </div>
  );
}
