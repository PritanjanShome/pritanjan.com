"use client";

import { useState } from "react";

type Field = {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
};

const nf = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

function Sliders({
  fields,
  values,
  onChange,
  onReset,
}: {
  fields: Field[];
  values: Record<string, number>;
  onChange: (k: string, v: number) => void;
  onReset: () => void;
}) {
  return (
    <div className="space-y-6">
      {fields.map((f) => (
        <label key={f.key} className="block">
          <span className="flex items-baseline justify-between gap-4 text-sm">
            <span className="opacity-80">{f.label}</span>
            <span className="shrink-0 font-semibold tabular-nums">
              {f.prefix}
              {nf.format(values[f.key])}
              {f.suffix}
            </span>
          </span>
          <input
            type="range"
            min={f.min}
            max={f.max}
            step={f.step}
            value={values[f.key]}
            onChange={(e) => onChange(f.key, Number(e.target.value))}
            className="mt-2 h-2 w-full cursor-pointer accent-indigo-500"
          />
        </label>
      ))}
      <button
        type="button"
        onClick={onReset}
        className="text-sm underline underline-offset-4 opacity-70 hover:opacity-100"
      >
        Reset to the case study’s numbers
      </button>
    </div>
  );
}

type Part = { name: string; value: number; unit: string; color: string };

function Result({
  headline,
  headlineLabel,
  sub,
  parts,
  note,
}: {
  headline: string;
  headlineLabel: string;
  sub: string;
  parts: Part[];
  note: string;
}) {
  const total = parts.reduce((a, p) => a + Math.max(p.value, 0), 0);
  return (
    <div className="self-start rounded-3xl bg-[#1b1b20] p-6 text-white sm:p-8 lg:sticky lg:top-24">
      <p className="text-sm text-white/60">{headlineLabel}</p>
      <p className="mt-1 text-5xl font-bold tracking-tight tabular-nums">{headline}</p>
      <p className="mt-2 text-white/70">{sub}</p>
      <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-white/10">
        {parts.map((p) => (
          <div
            key={p.name}
            className={p.color}
            style={{ width: `${total ? (Math.max(p.value, 0) / total) * 100 : 0}%` }}
          />
        ))}
      </div>
      <ul className="mt-5 space-y-3">
        {parts.map((p) => (
          <li key={p.name} className="flex items-start gap-3 text-sm">
            <span className={`mt-1.5 size-2.5 shrink-0 rounded-full ${p.color}`} />
            <span className="flex-1 text-white/75">{p.name}</span>
            <span className="font-semibold tabular-nums">
              {p.unit === "€" ? "€" : ""}
              {nf.format(p.value)}
              {p.unit !== "€" ? ` ${p.unit}` : ""}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/50">{note}</p>
    </div>
  );
}

function useValues(defaults: Record<string, number>) {
  const [v, setV] = useState(defaults);
  return {
    v,
    set: (k: string, x: number) => setV((s) => ({ ...s, [k]: x })),
    reset: () => setV(defaults),
  };
}

/* ------------------------------ Gamification ------------------------------ */

const gFields: Field[] = [
  { key: "apts", label: "Apartments using the app", min: 200, max: 10000, step: 100 },
  { key: "spend", label: "Utility spend per apartment per year", min: 200, max: 1500, step: 10, prefix: "€" },
  { key: "cut", label: "Reduction in consumption from engagement", min: 0, max: 20, step: 0.5, suffix: "%" },
  { key: "cost", label: "App cost per apartment per year", min: 0, max: 150, step: 1, prefix: "€" },
];
const gDefaults = { apts: 2027, spend: 522.23, cut: 9, cost: 47 };

export function GamificationCalculator() {
  const { v, set, reset } = useValues(gDefaults);
  const savings = v.apts * v.spend * (v.cut / 100);
  const perApt = v.apts ? savings / v.apts : 0;
  const cost = v.apts * v.cost;
  const uplift = cost ? savings / cost : 0;
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
      <Sliders fields={gFields} values={v} onChange={set} onReset={reset} />
      <Result
        headlineLabel="Annual utility savings for the property"
        headline={`€${nf.format(savings)}`}
        sub={`€${nf.format(perApt)} per apartment · ROI uplift of about ${uplift.toFixed(1)}×`}
        parts={[
          { name: "Savings from lower consumption", value: savings, unit: "€", color: "bg-indigo-500" },
          { name: "App cost for the year", value: cost, unit: "€", color: "bg-amber-500" },
        ]}
        note="Defaults reproduce the published results: 2,027 apartments, a 9% reduction and about €47 saved per apartment. The app cost of €47 per apartment is implied by the reported ROI moving from 2.4× to 3.4× (savings equal to one extra year of cost); it is an inference, not a quoted price. Change the inputs to model another property."
      />
    </div>
  );
}

/* -------------------------------- Move-out -------------------------------- */

const mFields: Field[] = [
  { key: "moveOuts", label: "Move-outs per year", min: 200, max: 10000, step: 100 },
  { key: "before", label: "Minutes to process one move-out, before", min: 5, max: 90, step: 1, suffix: " min" },
  { key: "after", label: "Minutes to process one move-out, after", min: 1, max: 60, step: 1, suffix: " min" },
  { key: "rate", label: "Loaded labour cost per hour", min: 15, max: 120, step: 1, prefix: "€" },
  { key: "temps", label: "Temporary workers hired each peak season", min: 0, max: 20, step: 1 },
  { key: "tempCost", label: "Cost per temporary worker per season", min: 500, max: 8000, step: 100, prefix: "€" },
  { key: "delayBefore", label: "Units with delayed move-in, before", min: 0, max: 400, step: 1 },
  { key: "delayAfter", label: "Units with delayed move-in, after", min: 0, max: 400, step: 1 },
  { key: "delayCost", label: "Lost rent per delayed unit", min: 10, max: 400, step: 5, prefix: "€" },
];
const mDefaults = { moveOuts: 2000, before: 35, after: 10, rate: 60, temps: 6, tempCost: 3200, delayBefore: 200, delayAfter: 8, delayCost: 45 };

export function MoveOutCalculator() {
  const { v, set, reset } = useValues(mDefaults);
  const hours = (v.moveOuts * Math.max(v.before - v.after, 0)) / 60;
  const labour = hours * v.rate;
  const temp = v.temps * v.tempCost;
  const delay = Math.max(v.delayBefore - v.delayAfter, 0) * v.delayCost;
  const total = labour + temp + delay;
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
      <Sliders fields={mFields} values={v} onChange={set} onReset={reset} />
      <Result
        headlineLabel="Annual savings for the property"
        headline={`€${nf.format(total)}`}
        sub={`${nf.format(hours)} staff hours returned · ${nf.format(Math.max(v.delayBefore - v.delayAfter, 0))} fewer delayed move-ins`}
        parts={[
          { name: "Faster processing of each move-out", value: labour, unit: "€", color: "bg-indigo-500" },
          { name: "Temporary staff no longer needed", value: temp, unit: "€", color: "bg-teal-500" },
          { name: "Lost rent from delayed move-ins avoided", value: delay, unit: "€", color: "bg-amber-500" },
        ]}
        note="Defaults are calibrated to reproduce the published €77,840: six temporary workers at €3,200 each (€19,200), 35 minutes down to 10 across about 2,000 move-outs at a €60 loaded hourly cost (€50,000), and 200 delayed units down to 8 at €45 each (€8,640). The move-out count and hourly cost are back-solved, not quoted by the client, so replace them with your own."
      />
    </div>
  );
}

/* ---------------------- Clearer PRDs for an AI-led SDLC ------------------- */

const sFields: Field[] = [
  { key: "specs", label: "PRDs or specs written per quarter", min: 2, max: 60, step: 1 },
  { key: "rework", label: "Share that hit rework from unclear or conflicting input", min: 0, max: 80, step: 5, suffix: "%" },
  { key: "hours", label: "Hours of rework per affected spec (PM, developer, review)", min: 4, max: 160, step: 2, suffix: " h" },
  { key: "catch", label: "Share of that rework a match against technical knowledge catches before build", min: 0, max: 90, step: 5, suffix: "%" },
  { key: "questions", label: "Clarification questions asked per spec", min: 0, max: 40, step: 1 },
  { key: "mins", label: "Minutes to answer one question", min: 5, max: 60, step: 5, suffix: " min" },
  { key: "answered", label: "Share answered from cited notes instead of a PM", min: 0, max: 90, step: 5, suffix: "%" },
  { key: "rate", label: "Loaded cost per hour", min: 30, max: 200, step: 5, prefix: "€" },
];
const sDefaults = { specs: 12, rework: 30, hours: 40, catch: 50, questions: 15, mins: 20, answered: 50, rate: 75 };

export function SdlcCalculator() {
  const { v, set, reset } = useValues(sDefaults);
  const specsYear = v.specs * 4;
  const rework = specsYear * (v.rework / 100) * v.hours * (v.catch / 100);
  const questions = (specsYear * v.questions * v.mins * (v.answered / 100)) / 60;
  const total = rework + questions;
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
      <Sliders fields={sFields} values={v} onChange={set} onReset={reset} />
      <Result
        headlineLabel="Hours returned per year"
        headline={nf.format(total)}
        sub={`≈ ${(total / 1600).toFixed(2)} FTE · ≈ €${nf.format(total * v.rate)} of capacity`}
        parts={[
          { name: "Rework avoided before build starts", value: rework, unit: "h", color: "bg-indigo-500" },
          { name: "Clarification questions answered from cited notes", value: questions, unit: "h", color: "bg-teal-500" },
        ]}
        note="Illustrative model, not a measured result. I have not yet measured rework or question volume before and after, so every default here is an assumption to replace with your own numbers. For scale, I report PRD creation falling from 8-10 days to about 3 hours. The structure is the point: unclear input costs rework and questions, and a cited, matched PRD should remove part of both."
      />
    </div>
  );
}
