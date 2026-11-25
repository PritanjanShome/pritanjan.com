# Case study review log: Product Knowledge

Append-only. Written by the case-study-pm-critic agent.

## Pass 1 - 2026-11-25 (focus: evidence, PM craft, narrative)

Scores before -> after (1-5): Thesis 4->4; Evidence 3->4; Technical accuracy 4->4; PM craft 3->4; Honesty 3->4; Confidentiality 5->5; Consistency 3->4; Craft/UX 4->4.

Flaws found and fixed
- Major, Evidence: Shapiro source link pointed to a wrong domain; now the original post. "Five-level scale" was actually 0-5.
- Major, Evidence: Spotify "60 to under 20 days" and "~80% satisfaction" not supported. Now 60 to 20 days and 55% at two years, labelled vendor self-reported and measured at different points; 80% removed.
- Major, Evidence: "IDC 2.5 h/day" is not traceable to McKinsey; removed. 19% kept, linked to the McKinsey report instead of a blog summary, labelled dated.
- Major, Evidence: DORA 2024 stated as "correlated" with no source; now "associated", survey-based, with the 25% framing noted as coming from analyses, plus link. The "dark-factory teams rely on holdout sets" claim was unsourced; reframed as my design principle.
- Major, Evidence: unsourced "most teams sit at Level 2" in the ladder visual; removed.
- Major, Honesty: outcome claims ("builds the right thing, once", agents "build against a clearer target") now stated as intent, unmeasured.
- Major, Consistency: "Twenty skills... here is the roster" listed ten; now "the ten below are the core".
- Major, PM craft: added "Alternatives I weighed" (section 07) and "Risks I am managing" with live/designed status (section 12).
- Minor: added AAIF and Spotify engineering sources.

Research and how it was kept original
- Used only to verify numbers and fix attribution (DORA, McKinsey, Spotify, Shapiro, Wallat, AAIF). No text was copied; the alternatives and risks tables are my own judgement, written from the design's logic, with no borrowed frameworks.

Not changed: Liu 51.5% and Wallat 57% (verified, already caveated); section numbering (sequential); visuals and design system.

Open questions for the author
- Confirm the four alternatives and five risks reflect what you actually considered; edit if not.
- Is "20 skills" correct, and can the other ten be named generically?
- Real baselines: time-to-answer, PM question volume, usage of the six PMs.
- Confirm the 55 tests, 24 decision-log entries and 260 files are current.
- Is a hand-over to another builder planned (bus-factor risk)?

## Pass 2 - 2026-11-25 (focus: narrative and length, PM craft, UX, remaining evidence)

Scores before -> after: Thesis 4->4; Evidence 4->4; Technical accuracy 4->4; PM craft 4->4 (stakeholders and candour added, still no measured adoption); Honesty 4->5; Confidentiality 5->5; Consistency 4->5; Craft/UX 4->4 (glossary added, one section cut).

Flaws found and fixed
- Major, narrative/length: section 13 ("eight properties") restated mechanisms already shown in governance, OKF, indexing and efficiency. Removed; later sections renumbered 13-16 and the cross-reference updated to section 15.
- Minor, repetition: trimmed the "one recommendation" callout (it repeated handshake 5 and the P0 backlog item), the gap caption under the note sample, and the duplicate "test like production" lesson (already told as a failure story).
- Major, PM craft: added "Who needs what from the base" (roles only, with status labelled from facts already on the page) and a short "Rollout so far" paragraph that says access is proven, usage is not.
- Major, honesty (my pass-1 text): the single-builder risk was worded as mitigated; now an open item with no invented plan. The "sensitive material leaks" row overclaimed (CI path ownership is not a leak control); reworded to ingestion risk, partly live, open question.
- Minor, UX: added a plain-language glossary (PRD, RFQ, RAG, CODEOWNERS, CI, OKF, MCP, WSJF, P85 and others) for non-technical PMs; footer text contrast raised (opacity 60 to 70). Tables already stack on mobile via DataTable.
- Evidence weight: no new numbers added. Pass-1 sources stand; no additional research was needed, so none was done this pass.

Not changed: scorecard, KPI targets (labelled hypotheses), ROI calculator assumptions (stated under the result). Hero stats left as the author's figures.

Open questions for the author
- Real baselines: time to a sourced answer, PM question volume, questionnaire reuse, new-hire ramp, usage by the six PMs. None supplied; none invented.
- Is the stakeholder table right, and do Sales, Pre-sales, Services and Support really reach the base only through PMs today?
- Who, if anyone, could take over the tooling, and when would you test a hand-over?
- Is there a check on what may be ingested (sensitivity)? Currently an open question on the page.
- Are the other ten of the twenty skills worth listing, or should the hero say "20" with the core ten shown?
- Is the technical knowledge kept in step with code today by anything other than on-request refresh?
