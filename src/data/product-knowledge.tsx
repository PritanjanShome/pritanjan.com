import { SourceLink } from "@/components/case-study/pk-visuals";
import type { ReactNode } from "react";

export const painTable: [string, string][] = [
  ["Pre-sales", "Every questionnaire is answered from scratch; the same security and integration questions get different answers each time."],
  ["Sales", "Pitching from old decks, unsure what the product does today."],
  ["Professional services", "Deployment and configuration know-how rediscovered on every project."],
  ["Customer success", "Not knowing what changed in the release a customer just upgraded to."],
  ["Product management", "Answering the same questions all week instead of building the product."],
  ["New hires", "Months spent piecing the product together."],
];

export const benchmarks: ReactNode[][] = [
  [
    "Spotify Backstage (internal developer portal)",
    <>
      Time for a new engineer to reach their 10th merged PR fell{" "}
      <strong>55%</strong> two years after rollout (Backstage docs); Spotify’s
      engineering blog separately describes that onboarding metric dropping
      from about <strong>60 days to 20</strong>. Self-reported by the vendor.
      Sources:{" "}
      <SourceLink href="https://backstage.spotify.com/discover/blog/how-we-measure-backstage-success-at-spotify/">
        Spotify
      </SourceLink>
      ,{" "}
      <SourceLink href="https://engineering.atspotify.com/2021/9/how-backstage-made-our-developers-more-effective-and-how-it-can-help-yours-too">
        Spotify Engineering
      </SourceLink>
      ,{" "}
      <SourceLink href="https://backstage.io/docs/overview/adopting">
        Backstage docs
      </SourceLink>
      ,{" "}
      <SourceLink href="https://thenewstack.io/how-spotify-achieved-a-voluntary-99-internal-platform-adoption-rate/">
        The New Stack
      </SourceLink>
      .
    </>,
    "Pick one activation metric (time to first contribution) and manage to it. Make the governed path the easiest path.",
    "Backstage catalogues services for engineers. This catalogues product truth for product, revenue and delivery teams, with AI as a first-class reader.",
  ],
  [
    "GitLab Handbook",
    <>
      A public handbook of{" "}
      <strong>2,000+ pages</strong>, written as plain text and changed through
      merge requests.{" "}
      <SourceLink href="https://handbook.gitlab.com/handbook/about/">
        Source
      </SourceLink>
    </>,
    "Docs-as-code: plain markdown in git, every change reviewed, handbook-first habits.",
    "Ownership is enforced by tooling (CODEOWNERS and CI), and every claim cites a system of record.",
  ],
  [
    "Stripe documentation",
    <>
      A former Stripe docs leader reports cutting time-to-first-test-charge to
      roughly a quarter. Anecdotal, not audited.{" "}
      <SourceLink href="https://www.mintlify.com/blog/stripe-docs">
        Source
      </SourceLink>
    </>,
    "Treat knowledge as a product with an owner and an activation metric.",
    "Stripe’s docs are customer-facing. This base is internal and optimises for answer-without-asking-a-PM.",
  ],
  [
    "RFP content libraries (Loopio, Responsive)",
    <>
      Teams using response software submit about <strong>10% more</strong>{" "}
      RFPs (Loopio 2021) and <strong>43% more</strong> proposals (Responsive
      survey). Vendors claim 40–70% time savings; treat that as directional.{" "}
      <SourceLink href="https://loopio.com/resources/2021-rfp-response-trends-report/">
        Loopio
      </SourceLink>
      ,{" "}
      <SourceLink href="https://www.responsive.io/blog/rfp-response-automation-stats-rev-up-sales-engine">
        Responsive
      </SourceLink>
    </>,
    "Answer once, approve it, reuse it. This became the customer-questions category.",
    "Each answer links to the feature note and source behind it, so it can be refreshed when the feature changes.",
  ],
  [
    "Generative search and RAG citations",
    <>
      Stanford audit: only <strong>51.5%</strong> of generated sentences were
      fully supported by their citations. Another study found up to{" "}
      <strong>57%</strong> of RAG citations were post-rationalised
      (adversarial setup).{" "}
      <SourceLink href="https://arxiv.org/abs/2304.09848">Liu et al.</SourceLink>
      ,{" "}
      <SourceLink href="https://arxiv.org/abs/2412.18004">Wallat et al.</SourceLink>
    </>,
    "A citation that exists is not proof the claim is true. Design for cite-or-abstain, then verify.",
    "I validate at write time in CI. Verifying at read time with an eval set is the gap I would close next.",
  ],
];

export const prdRows: string[][] = [
  ["Problem and evidence", "Customer questions, go-live lessons, product research, community-voted requests", "Not needed", "Problems backed by sources, not anecdote"],
  ["Target users", "Personas, ideal customer profile", "Not needed", "The right persona, no invented users"],
  ["Market and competition", "Market research, competitors, pricing and packaging", "Not needed", "Positioning against named alternatives"],
  ["Scope and what exists", "Features, use cases, demo scenarios", "What already exists in the code", "No re-specifying what is built; reuse is named"],
  ["Direction and priority", "Roadmap references, most-requested features, direction meetings", "Dependencies between components", "Fits where we are going; sequencing is explicit"],
  ["Constraints and risks", "Commitments already made in RFP and RFQ answers", "Architecture, standards, technical debt", "Conflicts surface before anyone builds"],
  ["Success measures", "Use-case outcomes, validated research", "Instrumentation that exists", "Measures the team can actually track"],
];

export const handshakes: {
  n: string;
  title: string;
  tone: "live" | "designed" | "next";
  status: string;
  body: string;
}[] = [
  { n: "1", title: "Curate", tone: "live", status: "Live", body: "Domain PMs ingest a link from a system of record. A hybrid classifier finds its single right home; gaps are marked, never guessed." },
  { n: "2", title: "Match", tone: "live", status: "Live · PM-led with AI help", body: "The PM matches direction, market and customer evidence against technical knowledge while writing the PRD, so discovery starts from cited facts instead of re-asking what we already know." },
  { n: "3", title: "Hand over", tone: "live", status: "Live", body: "The PRD enters the company’s AI-led delivery pipeline. The intent is that a grounded, matched PRD gives the agents a clearer target; I have not yet measured that effect." },
  { n: "4", title: "Publish back", tone: "designed", status: "Live via the front door · scheduled sync next", body: "A shipped feature becomes a release-tagged note linked to its use case, demo and questionnaire answers, so Sales, Services and Support see what shipped. Requests that arrive through the self-service front door already update the base with the release version; a scheduled sync for everything else is next." },
  { n: "5", title: "Verify independently", tone: "next", status: "Next · highest impact", body: "Turn use cases, demo scripts and customer questions into holdout acceptance scenarios stored where build agents cannot see them, so the builder cannot grade its own homework." },
  { n: "6", title: "Learn from production", tone: "next", status: "Next", body: "Defects found in production are traced back to the spec that caused them and logged as gaps, closing the loop from outcome to intent." },
];

export const timeline = [
  { when: "Jul 2026", t: "Define: a living requirements doc for the base itself", s: "Problem, audiences, objectives and what each team does with it. Every team’s most common questions became the acceptance tests. The document is edited through a skill and never frozen." },
  { when: "Jul 2026", t: "Govern before anything is written", s: "Contributor identity, ownership map, path-level write permissions, memory routing, a model router and the diff-first refresh skill, with the first 32 automated tests." },
  { when: "Aug 2026", t: "Restructure after real use", s: "Documents were reclassified into feature, use case, demo and persona; central areas and source manifests were added; about 55 notes were seeded with citations; tests grew to 55." },
  { when: "Aug 2026", t: "Put it on GitHub", s: "The vault became a git repository and the first ingest pushed about 260 files to a private shared repository. The local-to-GitHub sync rule was codified for every contributor." },
  { when: "Aug 2026", t: "Open it to the other PMs", s: "All six domain PMs were activated with self-serve access to their own area. CI ownership enforcement was fixed and proved. The tree was renamed to match how PMs think, and org-level PM content was opened to all." },
  { when: "Sep 2026", t: "Serve: agents on top of the base", s: "Ten demo-ready AI agents were built from curated notes using an agent-builder skill, and source-index proposals from other PMs went through the proposal workflow." },
];

export const mistakes: [string, string][] = [
  ["I over-simplified the note schema, then reverted it", "I converted notes to a lean five-field format, then restored the full open-format schema when it became clear the governance and citation fields were doing real work."],
  ["The model router mis-routed hard tasks", "It took the first keyword match, so a light word like “index” masked “architecture” or “governance”. I changed it to risk-weighted: the highest tier among all matches wins."],
  ["CI rejected every PM’s pull request", "An identity-file parser did not strip inline comments, and my test fixture had none. Fixed, with regression tests that look like production."],
  ["Empty scaffolds invited confident guessing", "I stopped creating folders in advance. A folder now exists only when content exists, a source is mapped or it is required."],
];

export const alternatives: string[][] = [
  ["Point an AI search tool at the existing wiki and trackers", "Fast to start, no migration.", "It indexes the scatter and the staleness along with the facts. Nobody owns an answer, and nothing forces it to cite or abstain."],
  ["A content library for questionnaires only", "Solves the most visible repeat work.", "It covers one audience. It cannot tell a PM what already exists or what would conflict with the architecture."],
  ["A well-templated wiki space", "Familiar, no git needed.", "Ownership is a convention, not a check. Changes have no diff and no required reviewer, so trust decays quietly."],
  ["Paste documents into the assistant per task", "Zero setup.", "Cost grows with every session, contradictions travel with the paste, and nothing is shared between PMs."],
];

export const stakeholders: string[][] = [
  ["Domain PMs (owners)", "Write to their own area without waiting, and be protected from edits to it they did not agree.", "Active, self-serve, with enforced ownership"],
  ["Delivery pipeline owners", "PRDs that are clear and checked against what exists.", "PRD handover live; effect on delivery not yet measured"],
  ["Sales, Pre-sales, Services, Support", "Cited answers and to know what shipped, without asking a PM.", "Reach the base through PMs today. A read-only site for non-git users is a P2 idea, not built"],
  ["Engineering", "Technical knowledge that is accurate enough to match against.", "Open: how technical notes are kept in step with the code is not yet a scheduled routine"],
];

export const risks: string[][] = [
  ["A confident wrong answer", "Cite-or-abstain, gap markers, write-time validation.", "Live; read-time citation checks are not yet built"],
  ["Content goes stale unnoticed", "Source manifests and diff-first refresh on request.", "Partly live; scheduled refresh and review-by dates are designed only"],
  ["One builder is a single point of failure", "A decision log, automated checks and restartable memory exist, which would help a successor. They are not a plan.", "Open item: I am the only person who has built and maintained the tooling, and no hand-over has been tried or planned"],
  ["PMs treat it as extra process", "Self-serve inside own area; friction only for cross-area changes.", "Unknown. I have no usage data yet"],
  ["Sensitive material is ingested by mistake", "Private repository, enforced path ownership, and no write-back to source systems.", "Partly live. Ownership is enforced; a check on what may be ingested is an open question"],
];

export const lifeSteps: { t: string; s: string; who: "PM" | "Agent" | "GitHub" | "Everyone" }[] = [
  { t: "Pull the latest", s: "The PM pulls merged changes so the local vault and memory match everyone else’s.", who: "PM" },
  { t: "Drop in a source", s: "A link, document, questionnaire or idea is handed to the local assistant. Nothing leaves the machine yet.", who: "PM" },
  { t: "Confirm identity", s: "The agent detects who is working and asks to confirm. Until confirmed, the session is read-only.", who: "Agent" },
  { t: "Ingest and route", s: "Scope, then category, then sub-topic. If confidence is low it asks. It writes the note with citations and gap markers, then updates the index, manifest and memory.", who: "Agent" },
  { t: "Validate and guard", s: "A validate skill checks format and sources. A read-only guardian agent returns pass, propose or block. A write hook stops out-of-scope paths.", who: "Agent" },
  { t: "Commit or propose", s: "Inside the PM’s own area it commits. Anything in another owner’s area becomes a proposal with named reviewers. A mixed change set fails whole.", who: "Agent" },
  { t: "Pull request on GitHub", s: "Required reviewers come from CODEOWNERS. A CI action checks every changed path against the authenticated actor, not the local author.", who: "GitHub" },
  { t: "Merge and pull", s: "After merge, every PM and reader pulls the same truth, and the release view shows what shipped.", who: "Everyone" },
];

export const principles: { t: string; how: string; solves: string }[] = [
  { t: "Findability", how: "A fixed taxonomy and an index at every level, so routing is predictable for people and AI.", solves: "Slow navigation, misrouting" },
  { t: "Traceability", how: "Cite or abstain. Notes carry source links or an explicit gap and are validated before promotion.", solves: "Invented answers" },
  { t: "Ownership", how: "A named owner per area, enforced by hooks, CODEOWNERS and CI. Shared changes become proposals.", solves: "Silent edits, conflicting versions" },
  { t: "Consistency", how: "Every product uses the same categories, note template, status lifecycle and review rules.", solves: "Per-team dialects nobody can search" },
  { t: "Separation", how: "Feature, use case, demo and persona are separate notes, and platform is separate from product.", solves: "Pitches built on demo scripts" },
  { t: "Currency", how: "Source manifests record the last sync, refresh is diff-first, and shipped changes are release-tagged.", solves: "Silent staleness" },
  { t: "Restartability", how: "Compact memory, index-first reading and model routing let any session resume cheaply.", solves: "Replayed history, wasted tokens" },
  { t: "Portability", how: "Markdown, an open note format and git, as a layer above the systems of record.", solves: "Lock-in and a second source of truth" },
];

export const composition = [
  { label: "Features and functionality", n: 1382 },
  { label: "Customer questions", n: 53 },
  { label: "Personas", n: 38 },
  { label: "Competitors", n: 37 },
  { label: "Roadmap references", n: 25 },
  { label: "Feature requests", n: 23 },
  { label: "Product use cases", n: 17 },
  { label: "AI agents", n: 15 },
  { label: "Everything else", n: 83 },
];

export const automationRows: {
  activity: string;
  encoded: string;
  how: string;
  level: "live" | "designed" | "next" | "neutral";
  levelLabel: string;
  who: string;
}[] = [
  { activity: "Roadmap tracking", encoded: "Roadmap method, per-domain write-ups, and a skill that rolls completion up per roadmap item through the ticket hierarchy into one workbook.", how: "A PM triggers the skill; it reads the tracker (read-only) and regenerates the workbook and narrative.", level: "live", levelLabel: "Agent-run", who: "PMs, leadership" },
  { activity: "Release planning and status", encoded: "An 18-step release playbook, a story-level release model, a status taxonomy, and a self-updating status dashboard.", how: "The dashboard updates itself; PMs follow the playbook and the agent answers “where are we”.", level: "live", levelLabel: "Dashboard automated", who: "PMs, services, support" },
  { activity: "Market and competitor research", encoded: "A repeatable method: frame the question, scope by inclusion criteria, separate validated, emerging and failed directions, 2×2 and SWOT, strict evidence rules.", how: "The agent follows the method and cites every claim; the PM reviews and decides.", level: "designed", levelLabel: "Agent-assisted", who: "PMs" },
  { activity: "Questionnaires (RFP, RFQ)", encoded: "Approved, cited answers per topic, with a gap log.", how: "Search, reuse, and route unanswered questions to the owning PM.", level: "designed", levelLabel: "Agent-assisted", who: "Pre-sales" },
  { activity: "Keeping knowledge current", encoded: "Ingest, validate and diff-first refresh skills with source manifests.", how: "PM-triggered today; a scheduled routine that raises owner proposals is designed.", level: "next", levelLabel: "On request · scheduled next", who: "All PMs" },
  { activity: "Feature demand and community voting", encoded: "A request board where the community votes; the most-requested features become market-research evidence in the PRD, and shipped features are published to the Help and Resource section and the release documentation.", how: "Requests are voted on, the PM reads the ranking, validates it, and writes it into the PRD. Votes inform prioritisation; they do not replace it.", level: "live", levelLabel: "Live", who: "PMs, customers" },
  { activity: "Writing the PRD", encoded: "Direction, market and customer evidence matched against technical knowledge.", how: "PM-led with agent help; an automated match report for each draft is on the backlog.", level: "next", levelLabel: "Assisted · report next", who: "PMs, developers" },
  { activity: "Demo and AI-agent concepts", encoded: "Use cases and personas turned into demo-ready agent specifications.", how: "An agent-builder skill produced ten demo-ready agents from curated notes.", level: "live", levelLabel: "Agent-run", who: "Pre-sales, PMs" },
  { activity: "Prioritisation, strategy, stakeholder trade-offs", encoded: "Methods and responsibilities (for example RACI) are documented.", how: "Not automated by design.", level: "neutral", levelLabel: "Stays human", who: "PMs" },
];

export const devBenefits: [string, string][] = [
  ["Clearer input, fewer surprises", "A PRD that was matched against technical knowledge names what already exists, what is new and what conflicts, so agents and developers do not discover constraints mid-build."],
  ["Less discovery for the builder", "Cited context replaces another round of questions to a PM. The spec starts from facts that already have a source, or a marked gap."],
  ["A route to independent verification", "Use cases, demo scripts and customer questions are the raw material for acceptance scenarios the building agents cannot see. That step is next, and it is the one that would make delivery safer."],
];

export const okf: [string, string][] = [
  ["One required field", "Only the note type is mandatory, and a note’s ID is simply its path. Contributors are never blocked by schema details."],
  ["Strict where it counts", "Type, source links and known gaps are checked. Everything else is permissive, and tools tolerate missing or unknown fields."],
  ["Plain text, no lock-in", "Markdown with YAML frontmatter outlives any tool. Any editor works, and notes can move to another system untouched."],
  ["Diffable and reviewable", "Git gives history, diffs, pull-request review and sync for free, so every change to product truth has an author and a reason."],
  ["Machine-checkable", "Scripts and CI can validate format, sources, links and freshness before a note is promoted."],
  ["Readable by people and AI", "One shape that people scan and models parse. Governance fields (status, owners, release, sources, gaps) sit on top."],
];

export const skills: [string, string, string][] = [
  ["Ingest and route", "Takes a link or file, finds its single right home, writes the note in the open format with citations and gap markers.", "A PM drops in a source"],
  ["Add source", "Registers a source system in the manifest with its owner, target notes and update method.", "A new source is approved"],
  ["Validate", "Checks format, sources, links, freshness and open gaps before anything is promoted.", "Before every commit"],
  ["Governance guardian (reviewer agent)", "Read-only. Checks a staged change against ownership, principles and engineering rules and returns pass, propose or block. It never edits.", "Before push or on a pull request"],
  ["Contributor governance", "Resolves who is working, loads their permissions, and turns out-of-area changes into proposals.", "Start of every session"],
  ["Knowledge update", "Diff-first refresh: queries only what changed since the last sync and re-routes just that content.", "On request today, scheduled next"],
  ["Requirements doc update", "Keeps the base’s own living requirements document in step with decisions and open questions.", "When a decision is made"],
  ["Memory router and maintenance", "Checkpoints after each response, compacts session state, and routes memory by identity.", "After every response"],
  ["Model router", "A local, zero-cost classifier picks the model tier by task risk, never by permissions.", "Before every task"],
  ["Agent builder", "Turns curated notes into demo-ready AI agents; ten were built on the base.", "When a use case is ready"],
];


export const phases: [string, string][] = [
  ["Define", "Problem, audiences and a living requirements doc. Each team’s most common questions become the acceptance tests."],
  ["Structure", "Fix the taxonomy, note template and glossary before any content is written."],
  ["Govern", "An owner for every area, enforced by hooks, required reviews and CI. Out-of-area changes become proposals."],
  ["Automate", "Routine work is packaged as AI skills that follow the same rules: ingest, refresh, validate, register."],
  ["Seed", "One area at a time, from real sources, cited, with gaps marked. Each owner seeds their own area."],
  ["Serve", "A read-only Q&A assistant that cites or abstains, plus compact memory so any session can resume."],
];

export const efficiency: [string, string][] = [
  ["Fixed load order", "Instructions → shared state → own state → only the relevant memory → source manifests. Raw sources only when needed."],
  ["Index-first reading", "Read a folder’s short index before opening any note: open two notes instead of scanning fifty."],
  ["Diff-first refresh", "Ask only what changed since the last recorded sync."],
  ["Compaction", "Session state stays short; detail is archived and durable facts move to memory, each stored once."],
  ["Model routing", "A local, zero-cost classifier picks the tier: light for lookup, standard for writing, deep for cross-cutting or conflicting work."],
  ["Bounded sub-agents", "Large sources are read by a sub-agent that returns short, cited findings, not raw text."],
];

export const scores = [
  { dim: "Findability", today: 4, target: 5, note: "Fixed taxonomy and an index in every folder make routing predictable. Missing: usage data to show where people still get lost." },
  { dim: "Trust and traceability", today: 3, target: 5, note: "The mechanism works, its coverage does not yet. In the Oct 2026 snapshot 58% of content notes link at least one source, 44% carry a citations section and only 20 notes are approved. " + "Missing: automated checks that a citation really supports its claim." },
  { dim: "Freshness", today: 2, target: 4, note: "Diff-first refresh works on request. A scheduled refresh and visible review-by dates are designed but not live." },
  { dim: "Coverage", today: 2, target: 4, note: "About 83% of content notes describe features, mostly in one product area. Use cases (17), demo scenarios (4) and customer-question notes (53) are thin, and some areas are still scaffolds, so agents will sound confident where content is rich and be blind elsewhere." },
  { dim: "Connectedness", today: 2, target: 4, note: "Notes average about two links each and 27% have none. The structure is hub-and-spoke: great for navigation, weak on the lateral links (feature to use case to questionnaire answer) that make a PRD match possible." },
  { dim: "Adoption and measurement", today: 1, target: 4, note: "No usage telemetry, baselines or KPI view yet. This is the biggest gap between a good build and a proven product." },
  { dim: "Loop closure with delivery", today: 2, target: 4, note: "The PRD is already written against the base. Independent holdout scenarios and defect-to-spec traceability are not in place." },
];

export const improvements: ReactNode[][] = [
  [
    "P0",
    "KB health dashboard and a freshness SLA",
    "Add a review-by date to the note schema; flag notes past their release cycle; publish weekly coverage, approval, open-gap and staleness numbers. A page from two releases ago looks as authoritative as one from yesterday.",
    "Spotify manages Backstage to measured adoption and onboarding time; GitLab instruments handbook usage.",
  ],
  [
    "P0",
    "Golden-question eval set",
    "Turn each team’s top 20 questions (already the acceptance tests in the PRD) into a nightly run: answered, abstained or wrong, plus a citation-support check.",
    "Only 51.5% of sentences were fully supported by their citations in public generative search (Liu et al.).",
  ],
  [
    "P0",
    "Holdout acceptance scenarios",
    "Generate end-to-end scenarios from use cases, demo scripts and customer questions; keep them outside the repo the agents build in.",
    "Design principle: the builder should not grade its own work. DORA 2024 associated higher AI adoption with lower delivery stability (survey association, not causal).",
  ],
  [
    "P1",
    "Hard link between PRD, spec and knowledge",
    "PRDs and the specs derived from them must cite note IDs, and the gate fails on uncited claims about existing behaviour. Expose the base through an MCP server and an agent briefing file so any agent can use governed knowledge.",
    <>
      MCP and AGENTS.md were placed under the Linux Foundation’s Agentic AI
      Foundation in Dec 2025.{" "}
      <SourceLink href="https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation">
        Source
      </SourceLink>
    </>,
  ],
  [
    "P1",
    "Automated match report for every PRD draft",
    "Check each requirement against technical knowledge and the market and customer evidence, and report fit, gaps, conflicts and feasibility before the PRD is reviewed.",
    "Makes the core idea of the base, matching direction to what can be built, repeatable instead of PM-dependent.",
  ],
  [
    "P1",
    "Question log as a content backlog",
    "Log every unanswered question as a gap and rank by frequency. This is the demand signal for what to write next, so coverage follows need. The self-service front door (see “The front door”) already turns unanswered questions into typed, routed tickets; the next step is to rank them and feed them back into the content plan.",
    "Product-led logic: unmet demand beats a guessed content plan.",
  ],
  [
    "P1",
    "Scheduled, diff-first refresh from trackers and wiki",
    "A routine queries what changed since each source’s last sync and raises a proposal for the owner. Never a silent write.",
    "Already designed; closes the freshness gap.",
  ],
  [
    "P2",
    "Rendered read-only site",
    "Give people who do not use git a searchable site with the same cited notes.",
    "Spotify’s Backstage was adopted voluntarily because it was the easy path; GitLab’s handbook is a website, not a repo.",
  ],
  [
    "P2",
    "Defect-to-spec traceability",
    "Have autonomous bug resolution record which spec or work package each defect traces to, and feed it back as a gap.",
    "Closes the loop from outcome to intent.",
  ],
  [
    "P2",
    "Coverage fill and coverage labels",
    "Fill platform areas first, and let answers state how well-covered their area is so confidence matches evidence.",
    "Agents are confident where content is rich and blind where it is thin.",
  ],
];

export const jobs: string[][] = [
  ["Discovery and spec writing", "Context lives in PMs’ heads, so interviews re-ask what is known.", "Specs start from cited notes; the interview only asks what is missing.", "Share of spec claims with a source"],
  ["Prioritisation (WSJF)", "Job size guessed in story points.", "Job size = work-package count × historical cycle time, or expected human review hours.", "Forecast hit rate at P85"],
  ["Roadmap and release comms", "Sales and Support learn from a sprint board.", "Release-tagged feature notes and a per-release view.", "Days from release to note"],
  ["Customer requests", "Duplicates with no context.", "Request lifecycle (requested, proposed, committed) linked to what already exists.", "Duplicate-request rate"],
  ["Questionnaires and RFPs", "Rewritten each time, with contradictions.", "Approved, cited answers; gaps are logged to the owning PM.", "Reuse rate"],
  ["Onboarding", "Months piecing the product together.", "A structured, linked map readable in days.", "Time to first customer conversation"],
  ["AI assistants", "Fluent answers from whatever they find, contradictions included.", "A curated corpus: cite or abstain.", "Cited-answer and abstention rate"],
];

export const kpis: string[][] = [
  ["Time to a sourced answer", "Timed sample of golden questions: self-serve vs ask a PM", "~19% of the workweek is spent searching for and gathering information (McKinsey Global Institute, 2012). Directional, dated.", "Under 5 min for 80% of golden questions"],
  ["PM deflection rate", "Questions answered from the base ÷ questions logged", "No clean public benchmark. Baseline first.", "≥ 50% within two release cycles"],
  ["Citation coverage", "CI check: notes with a source link or an explicit gap", "Measured baseline, Oct 2026 snapshot: 58% of content notes link a source, 44% have a citations section", "100% for new notes, enforced; 90% for the back catalogue"],
  ["Citation validity", "Sampled check: does the source support the claim?", "51.5% full support in public engines (Liu et al.)", "≥ 90%"],
  ["Freshness", "Approved notes verified within the current release cycle", "No public benchmark", "≥ 90%"],
  ["Release-to-visibility lag", "Days from release to the feature note being merged", "The gap the base exists to close", "≤ 5 working days"],
  ["New-hire ramp", "Time to first independent customer conversation", "Spotify (self-reported): −55% to 10th PR; ~60 → 20 days", "Halve the baseline"],
  ["Questionnaire reuse", "Share of questions answered from approved notes", "+10% RFP volume (Loopio), +43% proposals (Responsive)", "≥ 50% by the third questionnaire"],
  ["Grounded-spec rate", "Spec claims about current behaviour that cite a note", "No public benchmark", "≥ 90%, as a gate"],
];

export const lessons: [string, string][] = [
  ["Structure beats volume", "A hundred cited notes beat ten thousand imported pages."],
  ["Don’t blur distinct things", "Platform vs product, feature vs use case vs demo vs persona. Mixing them is the fastest way to lose trust."],
  ["Fold, don’t fragment", "Deployment practice belongs inside the feature it describes."],
  ["Make gaps visible", "A marked “not known yet” is useful; an invented answer is a liability."],
  ["Enforce in tooling", "An assistant’s confirmation is a convenience, not a control."],
];

export const glossary: string[][] = [
  ["PRD", "Product requirements document: what to build and why."],
  ["RFP / RFQ", "A customer’s formal request for proposal or quotation, usually with a long questionnaire."],
  ["Cite or abstain", "Every answer points to a source, or says plainly that it does not know."],
  ["RAG", "Retrieval-augmented generation: an AI looks up documents first, then writes its answer from them."],
  ["Git, pull request", "Version control that records every change; a pull request is a proposed change that others review before it is merged."],
  ["CODEOWNERS, CI", "A file naming who must approve changes to each path; CI is an automatic check that runs on every proposed change."],
  ["Frontmatter, OKF", "Structured fields at the top of a markdown note; the Open Knowledge Format is the open note shape this base builds on."],
  ["Vault", "The local folder of notes a PM works in (here, an Obsidian vault that is a git clone)."],
  ["Holdout scenarios", "Acceptance tests kept where the builder cannot see them, so it cannot tune its work to pass."],
  ["MCP, AGENTS.md", "Open standards for letting AI agents reach tools and data, and for briefing them on a project."],
  ["WSJF, P85", "A prioritisation method (weighted shortest job first); P85 means the date 85% of past jobs finished by."],
]; 

export const sources: [string, string][] = [
  ["Dan Shapiro, The Five Levels: from Spicy Autocomplete to the Software Factory (Jan 2026)", "https://www.danshapiro.com/blog/2026/01/the-five-levels-from-spicy-autocomplete-to-the-software-factory/"],
  ["Spotify, how we measure Backstage success", "https://backstage.spotify.com/discover/blog/how-we-measure-backstage-success-at-spotify/"],
  ["Backstage docs, adopting Backstage", "https://backstage.io/docs/overview/adopting"],
  ["The New Stack, Spotify’s voluntary platform adoption", "https://thenewstack.io/how-spotify-achieved-a-voluntary-99-internal-platform-adoption-rate/"],
  ["GitLab Handbook, about", "https://handbook.gitlab.com/handbook/about/"],
  ["Mintlify, how Stripe creates its documentation", "https://www.mintlify.com/blog/stripe-docs"],
  ["Loopio, 2021 RFP Response Trends Report", "https://loopio.com/resources/2021-rfp-response-trends-report/"],
  ["Responsive, RFP automation stats", "https://www.responsive.io/blog/rfp-response-automation-stats-rev-up-sales-engine"],
  ["Liu, Zhang, Liang, Evaluating Verifiability in Generative Search Engines (2023)", "https://arxiv.org/abs/2304.09848"],
  ["Wallat et al., Correctness is not Faithfulness in RAG Attributions (2024)", "https://arxiv.org/abs/2412.18004"],
  ["McKinsey Global Institute, The social economy (2012)", "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy"],
  ["Google Cloud, Announcing the 2024 DORA report", "https://cloud.google.com/blog/products/devops-sre/announcing-the-2024-dora-report"],
  ["Linux Foundation, formation of the Agentic AI Foundation (Dec 2025)", "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation"],
  ["Spotify Engineering, how Backstage made developers more effective (2021)", "https://engineering.atspotify.com/2021/9/how-backstage-made-our-developers-more-effective-and-how-it-can-help-yours-too"],
];

/* -------------------------------- page ------------------------------------ */

