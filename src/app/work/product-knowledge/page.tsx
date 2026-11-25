import {
  Card,
  CaseStudyPage,
  DataTable,
  H1,
  H2,
  H3,
  NumberCard,
  P,
  Rich,
  Section,
  TwoCol,
} from "@/components/case-study/ui";
import {
  ArchitectureDiagram,
  AutonomyLadder,
  Chip,
  FunnelBars,
  IndexMap,
  LifecycleSteps,
  AutomationMap,
  BranchesPanel,
  CompositionBars,
  Gauge,
  ObsidianMock,
  PrincipleCard,
  WindowFrame,
  OperatingModelDiagram,
  PipelineStrip,
  PrdMatch,
  RefreshLoop,
  Scorecard,
  ScrollBox,
  SourceLink,
  StatTile,
  StepGrid,
  TaxonomyMap,
  BuildTimeline,
} from "@/components/case-study/pk-visuals";
import { RoiCalculator } from "@/components/case-study/roi-calculator";
import type { Metadata } from "next";
import Image from "next/image";

const title =
  "Product Knowledge Base: the foundation for AI-native product management that scales an AI-led SDLC";
const description =
  "A first step towards AI-native product management: a governed, cited Product Knowledge Base and an agent layer that automate the assembly work of PM, and give developers in an AI-led SDLC clearer PRDs. What is automated, what is not, and how I would measure it";

export const metadata: Metadata = {
  title: "Product Knowledge Base: a Foundation for AI-Native Product Management",
  description,
  openGraph: {
    title,
    description,
    type: "article",
    images: [{ url: "/ProductKnowledge.png" }],
  },
};

/* ------------------------------- content ---------------------------------- */

const painTable: [string, string][] = [
  ["Pre-sales", "Every questionnaire is answered from scratch; the same security and integration questions get different answers each time."],
  ["Sales", "Pitching from old decks, unsure what the product does today."],
  ["Professional services", "Deployment and configuration know-how rediscovered on every project."],
  ["Customer success", "Not knowing what changed in the release a customer just upgraded to."],
  ["Product management", "Answering the same questions all week instead of building the product."],
  ["New hires", "Months spent piecing the product together."],
];

const benchmarks: React.ReactNode[][] = [
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

const prdRows: string[][] = [
  ["Problem and evidence", "Customer questions, go-live lessons, product research", "Not needed", "Problems backed by sources, not anecdote"],
  ["Target users", "Personas, ideal customer profile", "Not needed", "The right persona, no invented users"],
  ["Market and competition", "Market research, competitors, pricing and packaging", "Not needed", "Positioning against named alternatives"],
  ["Scope and what exists", "Features, use cases, demo scenarios", "What already exists in the code", "No re-specifying what is built; reuse is named"],
  ["Direction and priority", "Roadmap references, feature requests, direction meetings", "Dependencies between components", "Fits where we are going; sequencing is explicit"],
  ["Constraints and risks", "Commitments already made in RFP and RFQ answers", "Architecture, standards, technical debt", "Conflicts surface before anyone builds"],
  ["Success measures", "Use-case outcomes, validated research", "Instrumentation that exists", "Measures the team can actually track"],
];

const handshakes: {
  n: string;
  title: string;
  tone: "live" | "designed" | "next";
  status: string;
  body: string;
}[] = [
  { n: "1", title: "Curate", tone: "live", status: "Live", body: "Domain PMs ingest a link from a system of record. A hybrid classifier finds its single right home; gaps are marked, never guessed." },
  { n: "2", title: "Match", tone: "live", status: "Live · PM-led with AI help", body: "The PM matches direction, market and customer evidence against technical knowledge while writing the PRD, so discovery starts from cited facts instead of re-asking what we already know." },
  { n: "3", title: "Hand over", tone: "live", status: "Live", body: "The PRD enters the company’s AI-led delivery pipeline. The intent is that a grounded, matched PRD gives the agents a clearer target; I have not yet measured that effect." },
  { n: "4", title: "Publish back", tone: "designed", status: "On request today · scheduled next", body: "A shipped feature becomes a release-tagged note linked to its use case, demo and questionnaire answers, so Sales, Services and Support see what shipped." },
  { n: "5", title: "Verify independently", tone: "next", status: "Next · highest impact", body: "Turn use cases, demo scripts and customer questions into holdout acceptance scenarios stored where build agents cannot see them, so the builder cannot grade its own homework." },
  { n: "6", title: "Learn from production", tone: "next", status: "Next", body: "Defects found in production are traced back to the spec that caused them and logged as gaps, closing the loop from outcome to intent." },
];

const timeline = [
  { when: "Jul 2026", t: "Define: a living requirements doc for the base itself", s: "Problem, audiences, objectives and what each team does with it. Every team’s most common questions became the acceptance tests. The document is edited through a skill and never frozen." },
  { when: "Jul 2026", t: "Govern before anything is written", s: "Contributor identity, ownership map, path-level write permissions, memory routing, a model router and the diff-first refresh skill, with the first 32 automated tests." },
  { when: "Aug 2026", t: "Restructure after real use", s: "Documents were reclassified into feature, use case, demo and persona; central areas and source manifests were added; about 55 notes were seeded with citations; tests grew to 55." },
  { when: "Aug 2026", t: "Put it on GitHub", s: "The vault became a git repository and the first ingest pushed about 260 files to a private shared repository. The local-to-GitHub sync rule was codified for every contributor." },
  { when: "Aug 2026", t: "Open it to the other PMs", s: "All six domain PMs were activated with self-serve access to their own area. CI ownership enforcement was fixed and proved. The tree was renamed to match how PMs think, and org-level PM content was opened to all." },
  { when: "Sep 2026", t: "Serve: agents on top of the base", s: "Ten demo-ready AI agents were built from curated notes using an agent-builder skill, and source-index proposals from other PMs went through the proposal workflow." },
];

const mistakes: [string, string][] = [
  ["I over-simplified the note schema, then reverted it", "I converted notes to a lean five-field format, then restored the full open-format schema when it became clear the governance and citation fields were doing real work."],
  ["The model router mis-routed hard tasks", "It took the first keyword match, so a light word like “index” masked “architecture” or “governance”. I changed it to risk-weighted: the highest tier among all matches wins."],
  ["CI rejected every PM’s pull request", "An identity-file parser did not strip inline comments, and my test fixture had none. Fixed, with regression tests that look like production."],
  ["Empty scaffolds invited confident guessing", "I stopped creating folders in advance. A folder now exists only when content exists, a source is mapped or it is required."],
];

const alternatives: string[][] = [
  ["Point an AI search tool at the existing wiki and trackers", "Fast to start, no migration.", "It indexes the scatter and the staleness along with the facts. Nobody owns an answer, and nothing forces it to cite or abstain."],
  ["A content library for questionnaires only", "Solves the most visible repeat work.", "It covers one audience. It cannot tell a PM what already exists or what would conflict with the architecture."],
  ["A well-templated wiki space", "Familiar, no git needed.", "Ownership is a convention, not a check. Changes have no diff and no required reviewer, so trust decays quietly."],
  ["Paste documents into the assistant per task", "Zero setup.", "Cost grows with every session, contradictions travel with the paste, and nothing is shared between PMs."],
];

const stakeholders: string[][] = [
  ["Domain PMs (owners)", "Write to their own area without waiting, and be protected from edits to it they did not agree.", "Active, self-serve, with enforced ownership"],
  ["Delivery pipeline owners", "PRDs that are clear and checked against what exists.", "PRD handover live; the effect is not yet measured"],
  ["Sales, Pre-sales, Services, Support", "Cited answers and to know what shipped, without asking a PM.", "Reach the base through PMs today. A read-only site for non-git users is a P2 idea, not built"],
  ["Engineering", "Technical knowledge that is accurate enough to match against.", "Open: how technical notes are kept in step with the code is not yet a scheduled routine"],
];

const risks: string[][] = [
  ["A confident wrong answer", "Cite-or-abstain, gap markers, write-time validation.", "Live; read-time citation checks are not yet built"],
  ["Content goes stale unnoticed", "Source manifests and diff-first refresh on request.", "Partly live; scheduled refresh and review-by dates are designed only"],
  ["One builder is a single point of failure", "A decision log, automated checks and restartable memory exist, which would help a successor. They are not a plan.", "Open item: I am the only person who has built and maintained the tooling, and no hand-over has been tried or planned"],
  ["PMs treat it as extra process", "Self-serve inside own area; friction only for cross-area changes.", "Unknown. I have no usage data yet"],
  ["Sensitive material is ingested by mistake", "Private repository, enforced path ownership, and no write-back to source systems.", "Partly live. Ownership is enforced; a check on what may be ingested is an open question"],
];

const lifeSteps: { t: string; s: string; who: "PM" | "Agent" | "GitHub" | "Everyone" }[] = [
  { t: "Pull the latest", s: "The PM pulls merged changes so the local vault and memory match everyone else’s.", who: "PM" },
  { t: "Drop in a source", s: "A link, document, questionnaire or idea is handed to the local assistant. Nothing leaves the machine yet.", who: "PM" },
  { t: "Confirm identity", s: "The agent detects who is working and asks to confirm. Until confirmed, the session is read-only.", who: "Agent" },
  { t: "Ingest and route", s: "Scope, then category, then sub-topic. If confidence is low it asks. It writes the note with citations and gap markers, then updates the index, manifest and memory.", who: "Agent" },
  { t: "Validate and guard", s: "A validate skill checks format and sources. A read-only guardian agent returns pass, propose or block. A write hook stops out-of-scope paths.", who: "Agent" },
  { t: "Commit or propose", s: "Inside the PM’s own area it commits. Anything in another owner’s area becomes a proposal with named reviewers. A mixed change set fails whole.", who: "Agent" },
  { t: "Pull request on GitHub", s: "Required reviewers come from CODEOWNERS. A CI action checks every changed path against the authenticated actor, not the local author.", who: "GitHub" },
  { t: "Merge and pull", s: "After merge, every PM and reader pulls the same truth, and the release view shows what shipped.", who: "Everyone" },
];

const principles: { t: string; how: string; solves: string }[] = [
  { t: "Findability", how: "A fixed taxonomy and an index at every level, so routing is predictable for people and AI.", solves: "Slow navigation, misrouting" },
  { t: "Traceability", how: "Cite or abstain. Notes carry source links or an explicit gap and are validated before promotion.", solves: "Invented answers" },
  { t: "Ownership", how: "A named owner per area, enforced by hooks, CODEOWNERS and CI. Shared changes become proposals.", solves: "Silent edits, conflicting versions" },
  { t: "Consistency", how: "Every product uses the same categories, note template, status lifecycle and review rules.", solves: "Per-team dialects nobody can search" },
  { t: "Separation", how: "Feature, use case, demo and persona are separate notes, and platform is separate from product.", solves: "Pitches built on demo scripts" },
  { t: "Currency", how: "Source manifests record the last sync, refresh is diff-first, and shipped changes are release-tagged.", solves: "Silent staleness" },
  { t: "Restartability", how: "Compact memory, index-first reading and model routing let any session resume cheaply.", solves: "Replayed history, wasted tokens" },
  { t: "Portability", how: "Markdown, an open note format and git, as a layer above the systems of record.", solves: "Lock-in and a second source of truth" },
];

const composition = [
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

const automationRows: {
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
  { activity: "Writing the PRD", encoded: "Direction, market and customer evidence matched against technical knowledge.", how: "PM-led with agent help; an automated match report for each draft is on the backlog.", level: "next", levelLabel: "Assisted · report next", who: "PMs, developers" },
  { activity: "Demo and AI-agent concepts", encoded: "Use cases and personas turned into demo-ready agent specifications.", how: "An agent-builder skill produced ten demo-ready agents from curated notes.", level: "live", levelLabel: "Agent-run", who: "Pre-sales, PMs" },
  { activity: "Prioritisation, strategy, stakeholder trade-offs", encoded: "Methods and responsibilities (for example RACI) are documented.", how: "Not automated by design.", level: "neutral", levelLabel: "Stays human", who: "PMs" },
];

const devBenefits: [string, string][] = [
  ["Clearer input, fewer surprises", "A PRD that was matched against technical knowledge names what already exists, what is new and what conflicts, so agents and developers do not discover constraints mid-build."],
  ["Less discovery for the builder", "Cited context replaces another round of questions to a PM. The spec starts from facts that already have a source, or a marked gap."],
  ["A route to independent verification", "Use cases, demo scripts and customer questions are the raw material for acceptance scenarios the building agents cannot see. That step is next, and it is the one that would make delivery safer."],
];

const okf: [string, string][] = [
  ["One required field", "Only the note type is mandatory, and a note’s ID is simply its path. Contributors are never blocked by schema details."],
  ["Strict where it counts", "Type, source links and known gaps are checked. Everything else is permissive, and tools tolerate missing or unknown fields."],
  ["Plain text, no lock-in", "Markdown with YAML frontmatter outlives any tool. Any editor works, and notes can move to another system untouched."],
  ["Diffable and reviewable", "Git gives history, diffs, pull-request review and sync for free, so every change to product truth has an author and a reason."],
  ["Machine-checkable", "Scripts and CI can validate format, sources, links and freshness before a note is promoted."],
  ["Readable by people and AI", "One shape that people scan and models parse. Governance fields (status, owners, release, sources, gaps) sit on top."],
];

const skills: [string, string, string][] = [
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


const phases: [string, string][] = [
  ["Define", "Problem, audiences and a living requirements doc. Each team’s most common questions become the acceptance tests."],
  ["Structure", "Fix the taxonomy, note template and glossary before any content is written."],
  ["Govern", "An owner for every area, enforced by hooks, required reviews and CI. Out-of-area changes become proposals."],
  ["Automate", "Routine work is packaged as AI skills that follow the same rules: ingest, refresh, validate, register."],
  ["Seed", "One area at a time, from real sources, cited, with gaps marked. Each owner seeds their own area."],
  ["Serve", "A read-only Q&A assistant that cites or abstains, plus compact memory so any session can resume."],
];

const efficiency: [string, string][] = [
  ["Fixed load order", "Instructions → shared state → own state → only the relevant memory → source manifests. Raw sources only when needed."],
  ["Index-first reading", "Read a folder’s short index before opening any note: open two notes instead of scanning fifty."],
  ["Diff-first refresh", "Ask only what changed since the last recorded sync."],
  ["Compaction", "Session state stays short; detail is archived and durable facts move to memory, each stored once."],
  ["Model routing", "A local, zero-cost classifier picks the tier: light for lookup, standard for writing, deep for cross-cutting or conflicting work."],
  ["Bounded sub-agents", "Large sources are read by a sub-agent that returns short, cited findings, not raw text."],
];

const scores = [
  { dim: "Findability", today: 4, target: 5, note: "Fixed taxonomy and an index in every folder make routing predictable. Missing: usage data to show where people still get lost." },
  { dim: "Trust and traceability", today: 3, target: 5, note: "The mechanism works, its coverage does not yet. In the Oct 2026 snapshot 58% of content notes link at least one source, 44% carry a citations section and only 20 notes are approved. " + "Missing: automated checks that a citation really supports its claim." },
  { dim: "Freshness", today: 2, target: 4, note: "Diff-first refresh works on request. A scheduled refresh and visible review-by dates are designed but not live." },
  { dim: "Coverage", today: 2, target: 4, note: "About 83% of content notes describe features, mostly in one product area. Use cases (17), demo scenarios (4) and customer-question notes (53) are thin, and some areas are still scaffolds, so agents will sound confident where content is rich and be blind elsewhere." },
  { dim: "Connectedness", today: 2, target: 4, note: "Notes average about two links each and 27% have none. The structure is hub-and-spoke: great for navigation, weak on the lateral links (feature to use case to questionnaire answer) that make a PRD match possible." },
  { dim: "Adoption and measurement", today: 1, target: 4, note: "No usage telemetry, baselines or KPI view yet. This is the biggest gap between a good build and a proven product." },
  { dim: "Loop closure with delivery", today: 2, target: 4, note: "The PRD is already written against the base. Independent holdout scenarios and defect-to-spec traceability are not in place." },
];

const improvements: React.ReactNode[][] = [
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
    "Log every unanswered question as a gap and rank by frequency. This is the demand signal for what to write next, so coverage follows need.",
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

const jobs: string[][] = [
  ["Discovery and spec writing", "Context lives in PMs’ heads, so interviews re-ask what is known.", "Specs start from cited notes; the interview only asks what is missing.", "Share of spec claims with a source"],
  ["Prioritisation (WSJF)", "Job size guessed in story points.", "Job size = work-package count × historical cycle time, or expected human review hours.", "Forecast hit rate at P85"],
  ["Roadmap and release comms", "Sales and Support learn from a sprint board.", "Release-tagged feature notes and a per-release view.", "Days from release to note"],
  ["Customer requests", "Duplicates with no context.", "Request lifecycle (requested, proposed, committed) linked to what already exists.", "Duplicate-request rate"],
  ["Questionnaires and RFPs", "Rewritten each time, with contradictions.", "Approved, cited answers; gaps are logged to the owning PM.", "Reuse rate"],
  ["Onboarding", "Months piecing the product together.", "A structured, linked map readable in days.", "Time to first customer conversation"],
  ["AI assistants", "Fluent answers from whatever they find, contradictions included.", "A curated corpus: cite or abstain.", "Cited-answer and abstention rate"],
];

const kpis: string[][] = [
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

const lessons: [string, string][] = [
  ["Structure beats volume", "A hundred cited notes beat ten thousand imported pages."],
  ["Don’t blur distinct things", "Platform vs product, feature vs use case vs demo vs persona. Mixing them is the fastest way to lose trust."],
  ["Fold, don’t fragment", "Deployment practice belongs inside the feature it describes."],
  ["Make gaps visible", "A marked “not known yet” is useful; an invented answer is a liability."],
  ["Enforce in tooling", "An assistant’s confirmation is a convenience, not a control."],
];

const glossary: string[][] = [
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

const sources: [string, string][] = [
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

export default function ProductKnowledgeCaseStudy() {
  return (
    <CaseStudyPage>
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="relative w-full overflow-hidden bg-[#14141a] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(60%_60%_at_85%_0%,rgba(99,102,241,0.45),transparent),radial-gradient(40%_50%_at_0%_100%,rgba(20,184,166,0.25),transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <Image
          src="/case-studies/product-knowledge/graph.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none object-cover object-center opacity-[0.28] [mask-image:linear-gradient(to_bottom,black_40%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 lg:pt-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Case study · AI-native product management
          </p>
          <H1 className="mt-6 max-w-5xl">
            Product Knowledge Base: the foundation for AI-native product management that scales an AI-led SDLC
          </H1>
          <p className="mt-6 max-w-3xl text-xl text-white/75 sm:text-2xl">
            A first step towards an AI-native product organisation. How I
            turned the working practices of a product team into a governed,
            cited knowledge base plus agents, what it already automates, and
            what it gives developers building in an AI-led SDLC.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatTile value="13" label="standard knowledge categories, identical in every product area" />
            <StatTile value="6" label="domain PMs self-serving their own area, with enforced ownership" />
            <StatTile value="10" label="steps every piece of knowledge follows, with two hard gates" />
            <StatTile value="20" label="AI skills that run ingestion, validation, refresh and memory" />
          </div>

          <dl className="mt-12 grid gap-6 border-t border-white/10 pt-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Role", "Product Manager: designer, builder and steward"],
              ["Audience", "Product, Sales, Pre-sales, Services, Support, and AI assistants"],
              ["Timeline", "July 2026 to present"],
              ["Built with", "Markdown in git, Obsidian, Claude Code, GitHub Actions"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-white/50">{k}</dt>
                <dd className="mt-1 font-medium text-white/90">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------- Confidentiality note ------------------------- */}
      <Section className="py-10 sm:py-12">
        <p className="max-w-4xl rounded-2xl border border-dashed p-5 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Scope and confidentiality.</strong>{" "}
          The Product Knowledge base is my build. The AI-led delivery pipeline
          it feeds is a company-wide engineering initiative, not my work; I
          describe it only to show why this groundwork matters. The repository
          is internal, so this case study covers its purpose, design and
          governance, and shows no product content, customers, roadmap items or
          colleagues. Benchmarks come from public sources and are labelled by
          how much weight they can bear.
        </p>
      </Section>

      {/* ----------------------------- 01 Summary ------------------------------- */}
      <Section n="01" label="The short version" tone="muted">
        <H2>An AI-led pipeline is only as good as what you feed it</H2>
        <P className="mt-8 max-w-4xl">
          <Rich>
            Our company is moving software delivery to an AI-led process, where
            agents plan, build, test and review and people own intent and
            acceptance. That only works if the **intent is clear**. A clear PRD
            needs product knowledge that is current, cited and **matched
            against what is technically possible**. That groundwork is what I
            built.
          </Rich>
        </P>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <NumberCard n="01" title="What I built">
            <Rich>
              A **curated, cited, owned** knowledge base in plain markdown and
              git, shared on **GitHub**, plus **agents that run the assembly
              work of product management** for PMs working locally. It combines direction, market
              research, customer evidence (RFPs, RFQs) and the current product,
              and sits **above** the systems of record.
            </Rich>
          </NumberCard>
          <NumberCard n="02" title="What it does for a PRD">
            <Rich>
              It is **matched against technical knowledge** to show fit, gaps,
              conflicts and feasibility before the PRD is written. The aim is to
              build the right thing first time; I have not yet measured whether
              it does (section 18).
            </Rich>
          </NumberCard>
          <NumberCard n="03" title="What I would do next">
            <Rich>
              Prove it with **numbers**: a health dashboard, a golden-question
              eval set, an automated match report and holdout acceptance
              scenarios.
            </Rich>
          </NumberCard>
        </div>
      </Section>

      {/* ----------------------------- 02 Problem ------------------------------- */}
      <Section n="02" label="The problem">
        <H2>Product knowledge rarely goes missing. It scatters, goes stale and ends up owned by nobody.</H2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            <P>
              <Rich>
                **Fragmented.** The “why” of a feature is in a spec, the “what”
                in tickets, the “how it looks” in design files, the “what we
                promised” in a questionnaire response. Nothing connects them.
              </Rich>
            </P>
            <P>
              <Rich>
                **The release-to-release visibility gap.** Engineering ships and
                the change stays on a sprint board. Sales, Services and Support
                never learn what shipped or which feature it belongs to.
              </Rich>
            </P>
            <P>
              <Rich>
                **Silently stale, then amplified by AI.** A page from two
                releases ago looks as authoritative as one from yesterday. An
                assistant pointed at that pile answers fluently from whatever it
                finds, contradictions included.
              </Rich>
            </P>
          </div>
          <div className="grid content-start gap-4 sm:grid-cols-2">
            <Card>
              <p className="text-4xl font-bold tracking-tight text-indigo-500">~19%</p>
              <p className="mt-2 text-sm text-muted-foreground">
                of the workweek spent searching for and gathering information
                (McKinsey Global Institute, 2012, drawing on IDC analysis). A 2012
                estimate that predates today’s tools, so treat it as directional.
              </p>
            </Card>
            <Card>
              <p className="text-4xl font-bold tracking-tight text-indigo-500">+25% → −7.2%</p>
              <p className="mt-2 text-sm text-muted-foreground">
                DORA 2024 survey: a 25% rise in AI adoption was associated with an
                estimated 7.2% drop in delivery stability (and 1.5% in throughput).
                An association, not proof of cause, and the 25% framing comes
                from analyses of the report.{" "}
                <SourceLink href="https://cloud.google.com/blog/products/devops-sre/announcing-the-2024-dora-report">
                  Source
                </SourceLink>
              </p>
            </Card>
          </div>
        </div>

        <H3 className="mt-16">Who feels it</H3>
        <DataTable className="mt-6" headers={["Stakeholder", "The pain today"]} rows={painTable} />
      </Section>

      {/* ----------------------------- 03 Groundwork ---------------------------- */}
      <Section n="03" label="Why the groundwork matters" tone="dark">
        <H2>The delivery pipeline is a company initiative. Its ceiling is set by its inputs.</H2>
        <P className="mt-8 max-w-4xl">
          <Rich>
            Software delivery is shifting from developers who write code with
            AI help to developers who **specify intent** while agents build,
            test and review. Our pipeline sits at **Level 4** of Dan Shapiro’s
            0–5 scale (2026): agents do the work from specs and plans while
            people own intent and final acceptance. We deliberately keep that human acceptance gate.
          </Rich>
        </P>
        <div className="mt-12 grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <AutonomyLadder />
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <FunnelBars />
          </div>
        </div>
        <div className="mt-12">
          <PipelineStrip />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["The jump is not the model", "Going from Level 2 to Level 4 is about the surrounding system: specs, gates, tests and governance, so reviewing every line is no longer the only safeguard."],
            ["The limit is the human queue", "When agents build, the bottleneck becomes writing specs, reviewing and accepting. The quality of what goes into a spec decides everything downstream."],
            ["An internal briefing reached the same view", "It concluded that the main gap is between our knowledge and the build pipeline: product truth must reach the spec, and independent scenarios must verify the result. This is internal opinion, not measured data."],
          ].map(([t, s]) => (
            <div key={t} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-lg font-semibold">{t}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{s}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ----------------------------- 04 What it is ---------------------------- */}
      <Section n="04" label="What Product Knowledge is">
        <H2>Direction, market and customer evidence, matched against technical knowledge</H2>
        <P className="mt-8 max-w-4xl">
          <Rich>
            Product Knowledge is not a feature wiki. It combines **where we want
            to go** (roadmap references, feature requests, research, direction
            meetings) with **market research and competitors**, **customer
            evidence** such as RFP and RFQ answers, personas and go-lives, and
            the **current product**. On its own that tells you what is wanted.
            Matched against **technical knowledge**, it tells you what is
            feasible, what already exists and what would conflict.
          </Rich>
        </P>
        <div className="mt-12">
          <PrdMatch />
        </div>

        <H3 className="mt-20">How the match sharpens each part of a PRD</H3>
        <DataTable
          className="mt-8"
          wide
          headers={["PRD section", "Product Knowledge adds", "Technical knowledge checks", "What gets clearer"]}
          rows={prdRows}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card className="border-red-500/30">
            <p className="text-sm font-semibold text-red-600 dark:text-red-400">A PRD without the match</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Re-asks what is already known, so discovery repeats.</li>
              <li>Specifies something that partly exists, or contradicts an RFP commitment.</li>
              <li>Discovers constraints during build, when agents have already run.</li>
              <li>Claims about the product come from memory, not sources.</li>
            </ul>
          </Card>
          <Card className="border-emerald-500/40">
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">A PRD with the match</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Starts from cited facts; the interview only asks what is missing.</li>
              <li>Names what exists, what is new and what depends on what.</li>
              <li>Surfaces conflicts and feasibility before build begins.</li>
              <li>Every claim about current behaviour points to a source or a marked gap.</li>
            </ul>
          </Card>
        </div>

        <H3 className="mt-20">The forward-looking part, without making promises</H3>
        <P className="mt-4 max-w-4xl">
          Direction is held without letting it masquerade as the present. A
          capability starts as <strong>research</strong> (observed, proposed,
          validated, rejected or unresolved), becomes a{" "}
          <strong>feature request</strong> once accepted, and a{" "}
          <strong>feature</strong> tagged with its release once shipped. AI use
          cases describe the scenario and its maturity, never claim a feature
          exists, and link to whichever stage the capability is in.
        </P>
        <div className="mt-8 grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {[
            ["Product research", "observed · proposed · validated · rejected · unresolved", false],
            ["Feature request", "requested · proposed · committed", false],
            ["Feature", "exists today, tagged with its release", true],
          ].map(([t, s, on], i) => (
            <div key={String(t)} className="contents">
              <div className={`rounded-2xl border p-5 ${on ? "border-emerald-500 bg-emerald-500/10" : "bg-card"}`}>
                <p className="font-semibold">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s}</p>
              </div>
              {i < 2 && (
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <span className="hidden md:inline">{i === 0 ? "accepted →" : "shipped →"}</span>
                  <span className="md:hidden">↓ {i === 0 ? "accepted" : "shipped"}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-2xl border border-indigo-500/60 bg-indigo-500/10 p-5">
          <p className="font-semibold">AI use case</p>
          <p className="mt-1 text-sm text-muted-foreground">
            The pain it addresses, the persona, the scenario, its maturity and
            target milestone. It links to whichever stage the capability is in
            and never claims the feature exists.
          </p>
        </div>
      </Section>

      {/* ------------------------------ Automation ------------------------------ */}
      <Section n="05" label="What it automates" tone="muted">
        <H2>What it automates in the PM workflow, and what stays human</H2>
        <P className="mt-8 max-w-4xl">
          <Rich>
            Next to the folders for each product, the base has a **product
            management tier**: roadmap method, release planning, market
            research, product direction, RACI, workshops and templates. I wrote
            the working practices down as notes and packaged the repeatable
            parts as agent skills. The result automates the **assembly work** of
            product management: rolling up, collating, retrieving and keeping
            things consistent. **Judgement stays with PMs.**
          </Rich>
        </P>
        <div className="mt-10">
          <AutomationMap rows={automationRows} />
        </div>
        <div className="mt-8 rounded-3xl border-l-4 border-indigo-500 bg-indigo-500/[0.07] p-6 sm:p-8">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">The honest summary</p>
          <p className="mt-2 max-w-4xl text-lg leading-relaxed">
            Most of this is <strong>agent-run but PM-triggered</strong>. A PM asks
            for the roadmap rollup or the refresh and the agent does the
            legwork. Scheduled, unattended runs are designed but not live, and
            prioritisation, strategy and stakeholder trade-offs are deliberately
            not automated.
          </p>
        </div>

        <H3 className="mt-20">Why developers in the AI-led SDLC benefit</H3>
        <P className="mt-4 max-w-4xl">
          The delivery pipeline is a company initiative and I do not claim it.
          What I contribute is the input it depends on. When agents build, the
          spec is the ceiling, and a spec is only as good as the PRD behind it.
        </P>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {devBenefits.map(([t, s2]) => (
            <Card key={t} className="p-6">
              <p className="text-lg font-semibold">{t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s2}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-sm text-muted-foreground">
          These are the mechanisms. I have not yet measured rework or
          clarification questions before and after, so I make no numeric claim
          here; the measurement plan in section 18 covers it.
        </p>
      </Section>

      {/* ----------------------------- 05 Benchmarks ---------------------------- */}
      <Section n="06" label="Benchmarks" tone="tint">
        <H2>What good looks like: five public reference points</H2>
        <P className="mt-8 max-w-4xl">
          Before refining my design I looked at how comparable knowledge systems
          are built and measured. None is the same as an internal product
          knowledge base, so I took the lesson from each, not the number.
        </P>
        <DataTable
          className="mt-10"
          wide
          headers={["Reference", "What the numbers show", "What I borrowed", "Where mine differs"]}
          rows={benchmarks}
        />
        <p className="mt-6 max-w-4xl text-sm text-muted-foreground">
          <strong className="text-foreground">Reading the evidence.</strong>{" "}
          Spotify’s figures are self-reported and measured at different points
          (55% two years in vs 60 → 20 days), so I cite both and treat them as
          the same order of magnitude, not a promise. The Stripe figure is a
          recollection. RFP savings are vendor claims. The citation studies are
          the most rigorous, and they are the ones that changed my design.
        </p>
      </Section>

      {/* --------------------------- 06 Architecture ---------------------------- */}
      <Section n="07" label="How it fits together" tone="muted">
        <H2>The architecture: a knowledge layer between sources and the PRD</H2>
        <P className="mt-8 max-w-4xl">
          Sources are curated into Product Knowledge (1). The PM matches it
          against technical knowledge (2) to write a clearer PRD, which goes to
          AI-led delivery (3). Whatever ships flows back as a release-tagged
          note (4), so the base reflects what is actually true.
        </P>
        <ScrollBox label="Architecture diagram" className="mt-10" minWidth={820}>
          <ArchitectureDiagram />
        </ScrollBox>

        <H3 className="mt-20">Six handshakes with delivery</H3>
        <P className="mt-4 max-w-4xl">
          Three are live, one is designed and two are the next priorities. I
          mark each honestly so nobody mistakes a plan for a capability.
        </P>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {handshakes.map((h) => (
            <Card key={h.n} className="flex flex-col">
              <div className="flex items-center justify-between gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white">
                  {h.n}
                </span>
                <Chip tone={h.tone}>{h.status}</Chip>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{h.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{h.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border-l-4 border-indigo-500 bg-indigo-500/[0.07] p-6 sm:p-8">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">The one recommendation I would make first</p>
          <p className="mt-2 max-w-4xl text-lg leading-relaxed">
            Turn use cases into <strong>independent acceptance scenarios that
            the agents cannot see</strong>. Today, tests are written in the same
            pipeline that writes the code, so passing them is weaker evidence
            than it looks.
          </p>
        </div>
      </Section>

      {/* ----------------------------- 07 How built ----------------------------- */}
      <Section n="08" label="How it was built">
        <H2>Structure before content, in six phases</H2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map(([t, s], i) => (
            <li key={t} className="rounded-3xl border bg-card p-6 text-card-foreground">
              <div className="flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white">{i + 1}</span>
                <h3 className="text-xl font-semibold tracking-tight">{t}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{s}</p>
            </li>
          ))}
        </ol>

        <H3 className="mt-20">One tree, separate homes</H3>
        <P className="mt-4 max-w-4xl">
          <Rich>
            The biggest structural choice: **every product uses the same
            categories, the same note template, the same status lifecycle and
            the same review rules.** Knowledge is only useful across an
            organisation if it is predictable. Someone who knows where answers
            live for one product knows where they live for all of them, and the
            AI routes content against one set of definitions.
          </Rich>
        </P>
        <div className="mt-10">
          <TaxonomyMap />
        </div>

        <H3 className="mt-20">The build, in order</H3>
        <P className="mt-4 max-w-4xl">
          <Rich>
            I built the base **with Claude Code itself**, in working sessions
            that kept their own memory, and I shaped it through a decision log
            instead of a big-bang design. Each stage produced something the next
            one needed.
          </Rich>
        </P>
        <div className="mt-10">
          <BuildTimeline items={timeline} />
        </div>

        <H3 className="mt-20">Alternatives I weighed, and why this shape</H3>
        <P className="mt-4 max-w-4xl">
          This is my design reasoning, not the result of trials. Each option
          solves part of the problem; none solves the part I cared about most,
          which is a PRD that has been checked against what is technically
          true.
        </P>
        <DataTable
          className="mt-8"
          wide
          headers={["Option", "What it does well", "Why I did not stop there"]}
          rows={alternatives}
        />

        <H3 className="mt-20">What I got wrong, and fixed</H3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {mistakes.map(([t, s2]) => (
            <Card key={t} className="p-5 sm:p-6">
              <p className="font-semibold">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s2}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ------------------------- 08 Operating model --------------------------- */}
      <Section n="09" label="The operating model" tone="tint">
        <H2>Local first, with GitHub as the shared platform</H2>
        <P className="mt-8 max-w-4xl">
          <Rich>
            Every PM works the same way. Their Obsidian vault **is a local git
            clone** of one private GitHub repository, and an assistant with a set
            of agents runs inside it. Work happens on their own machine first.
            **GitHub is the shared platform and the single ingestion point**:
            nothing becomes shared truth until it is pushed, reviewed against
            ownership and merged, and nothing arrives on a PM’s machine until
            they pull.
          </Rich>
        </P>
        <ScrollBox label="Operating model diagram" className="mt-10" minWidth={820}>
          <OperatingModelDiagram />
        </ScrollBox>

        <H3 className="mt-20">The life of a change, from a PM’s laptop to the shared base</H3>
        <P className="mt-4 max-w-4xl">
          A PM drops in a source and an agent takes it from there: it works out
          where the content belongs, writes it in the right format in the right
          place, checks it, and either commits it or turns it into a proposal
          for the area’s owner.
        </P>
        <div className="mt-8">
          <StepGrid steps={lifeSteps} />
        </div>

        <H3 className="mt-20">What it looks like on GitHub</H3>
        <P className="mt-4 max-w-4xl">
          Every change travels on its own branch with a pull request and a
          check result. Branches are named <code>owner/topic</code> for work in
          a PM’s own area and <code>proposal/topic</code> for cross-area
          changes. Two older branches show a failed check, and one of them belongs
          to the ownership-check bug described above.
        </P>
        <div className="mt-8">
          <BranchesPanel />
          <p className="mt-3 text-xs text-muted-foreground">
            Anonymised recreation of the repository’s branches view. Names are
            replaced; branch patterns, check results and PR numbers follow the
            real list.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Why GitHub", "One shared place with history, review, branch protection and access control that PMs and engineering already trust. Plain files mean git carries the diff, so sync is cheap however many files changed."],
            ["Why local first", "Each PM, and each assistant session, works on a full copy without waiting on anyone. Sync is manual and on demand, and the assistant only flags when one is due."],
            ["Why proposals", "Changes to another owner’s area, shared content or governance never go in directly. They travel as a proposal with named reviewers, so ownership is respected without slowing own-area work."],
          ].map(([t, s2]) => (
            <Card key={t} className="p-6">
              <p className="text-lg font-semibold">{t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s2}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ----------------------------- 09 Agents ---------------------- */}
      <Section n="10" label="An agent for every job">
        <H2>An agent for every job, and a routine that keeps the base current</H2>
        <P className="mt-8 max-w-4xl">
          <Rich>
            The repeatable work is packaged as **AI skills** that follow the
            same rules as a human contributor: same classification, same
            confidence and ownership gates, same citations. Twenty skills run
            the base. The ten below are the core, and when each one runs.
          </Rich>
        </P>
        <DataTable className="mt-10" wide headers={["Agent or skill", "What it does", "Runs when"]} rows={skills} />

        <H3 className="mt-20">Restartable memory</H3>
        <P className="mt-4 max-w-4xl">
          <Rich>
            Several PMs and their assistants work on the base across many
            sessions. Without memory, every session starts from zero or replays
            history at great cost. So the base carries **in-repo working
            memory** in three scopes (universal, contributor, area-local),
            written as small deltas after every response and compacted when the
            state grows, with a line budget of about 120 lines and compaction
            at about 160. Memory location never decides permissions, and model
            choice never decides memory location.
          </Rich>
        </P>

        <H3 className="mt-20">The routine that keeps it up to date</H3>
        <P className="mt-4 max-w-4xl">
          <Rich>
            Today a refresh runs **on request**: a PM asks and the assistant
            diffs the sources. The next step is a **scheduled routine** that
            populates the base from the wiki, the ticket tracker and other
            sources. It detects change instead of re-reading, applies the same
            gates as a human, and ends in a **proposal for the owner, never a
            silent write**. If a source disappears or contradicts a note, a gap
            is opened for the owner. The base never writes back to the wiki or
            the tracker.
          </Rich>
        </P>
        <div className="mt-8">
          <RefreshLoop />
        </div>
      </Section>

      {/* ----------------------------- 08 OKF ----------------------------------- */}
      <Section n="11" label="The note format" tone="tint">
        <H2>Why an open format: the advantages of OKF</H2>
        <P className="mt-8 max-w-4xl">
          <Rich>
            Every note follows the **Open Knowledge Format** as a baseline: a
            concept made of YAML frontmatter and a markdown body. I added
            governance fields on top (area, topic, status, owners, release,
            source links and known gaps) without breaking the open core.
          </Rich>
        </P>
        <div className="mt-12">
          <ObsidianMock />
          <p className="mt-3 text-xs text-muted-foreground">
            Illustrative recreation of how a note looks in the vault: folder
            tree, frontmatter, citations and linked notes. The content is
            generic; the structure is real.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {okf.map(([t, s]) => (
            <Card key={t} className="p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ----------------------------- 09 Indexing ------------------------------ */}
      <Section n="12" label="Indexing and routing">
        <H2>A map at every level, so people and AI load the smallest thing that answers</H2>
        <P className="mt-8 max-w-4xl">
          <Rich>
            People navigate by reading short indexes instead of folders. The AI
            **routes** new content by reading a category’s sub-topic list, which
            keeps classification consistent. Reading an index before opening
            notes is also one of the biggest cost savings: **open two notes
            instead of scanning fifty.**
          </Rich>
        </P>
        <div className="mt-10">
          <IndexMap />
        </div>

        <H3 className="mt-20">Every piece of knowledge follows the same ten steps</H3>
        <P className="mt-4 max-w-4xl">
          Classification is hybrid and taxonomy-first, not one AI guess: fixed
          categories first, cheap exact-term matching for the obvious cases, the
          model only for nuance, and a human when confidence is low.{" "}
          <strong>Amber steps are gates</strong>: nothing is written until the
          path is confirmed and the writer owns it.
        </P>
        <div className="mt-8">
          <LifecycleSteps />
        </div>

        <TwoCol className="mt-20 lg:items-start">
          <div>
            <H3>Keeping it cheap to run</H3>
            <P className="mt-4">
              <Rich>
                An AI-maintained base can quietly become expensive if every task
                starts by reading everything. One rule sits behind all of the
                levers: **load the smallest thing that answers the question.**
                Token savings never override identity checks, governance, source
                grounding, validation or memory updates.
              </Rich>
            </P>
          </div>
          <DataTable headers={["Lever", "How it works"]} rows={efficiency} />
        </TwoCol>
      </Section>

      {/* ----------------------------- 10 Governance ---------------------------- */}
      <Section n="13" label="Governance" tone="muted">
        <H2>Ownership you can enforce, not just agree on</H2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            <P>
              <Rich>
                Six domain PMs **self-serve their own area**: they write and
                publish directly, with no steward review. Anything that touches
                another owner’s area, shared content or governance becomes a
                **proposal** that every affected owner approves. A change set
                that mixes permitted and prohibited paths fails entirely.
              </Rich>
            </P>
            <P>
              <Rich>
                Enforcement is layered because an assistant’s confirmation is a
                convenience, not a control: **identity checks and write hooks**
                on the AI side, **CODEOWNERS** and a **CI action** as the
                backstop on the repo side. Every governance choice is appended
                to a decision log (24 entries so far).
              </Rich>
            </P>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["3,000+", "files in the repository (estimate: Quality counted at about 2,300, the other five areas sized like Planning, from an Oct 2026 snapshot)"],
              ["6", "domain PMs onboarded, each owning an area"],
              ["23", "pull requests closed through the ownership-checked workflow (as of Nov 2026)"],
              ["10", "demo-ready AI agents built on top of the base"],
              ["55/55", "automated governance and routing checks passing (at last count)"],
            ].map(([v, l]) => (
              <Card key={l} className="p-5 sm:p-6">
                <p className="text-3xl font-bold tracking-tight text-indigo-500">{v}</p>
                <p className="mt-2 text-sm text-muted-foreground">{l}</p>
              </Card>
            ))}
            <p className="text-xs leading-relaxed text-muted-foreground sm:col-span-2">
              <strong className="text-foreground">Activity in the git history</strong>{" "}
              (GitHub Insights, code frequency): the base grew in bursts, with
              about 18,000 lines added in the week of 2 Aug, 111,000 in the
              week of 16 Aug and 139,000 in the week of 30 Aug, then small,
              steady edits, for example about 5,800 in the week of 15 Nov. Lines
              added overstate real growth, because the 30 Aug week includes a
              folder rename that git counts as both an addition and a deletion.
              Read it as proof the base is still being maintained, not as a
              measure of value.
            </p>
          </div>
        </div>
        <H3 className="mt-16">Who needs what from the base</H3>
        <DataTable
          className="mt-6"
          wide
          headers={["Stakeholder", "What they need", "Where it stands"]}
          rows={stakeholders}
        />
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Rollout so far.</strong> I started
          with the structure and rules, seeded one area from real sources, then
          opened each domain PM’s own area to them, and only then built agents
          on top (see the build timeline). What that proves is access and
          working governance. It does not prove usage: I have no usage data
          yet, so adoption is an open question, not a result.
        </p>

        <H3 className="mt-16">Risks I am managing</H3>
        <DataTable
          className="mt-6"
          wide
          headers={["Risk", "How it is handled", "Status"]}
          rows={risks}
        />
      </Section>

      {/* ------------------------------ The base today -------------------------- */}
      <Section n="14" label="The base today" tone="dark">
        <H2>The base as it stands: real numbers from the repository</H2>
        <P className="mt-8 max-w-4xl">
          <Rich>
            I would rather show the baseline than a flattering story. These
            numbers come from a snapshot of the repository taken on **2 October
            2026**. They are my starting line for the measurement plan, and they
            show clearly where the work is.
          </Rich>
        </P>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#14141a]">
          <Image
            src="/case-studies/product-knowledge/graph.webp"
            alt="Link graph of the knowledge base: each dot is a note, coloured by product area, with hub-and-spoke clusters around each index page"
            width={2400}
            height={1150}
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="h-auto w-full"
          />
        </div>
        <div className="mt-4 grid gap-6 text-sm text-white/70 lg:grid-cols-[1fr_1fr]">
          <p>
            <strong className="text-white">The base drawn from its own links.</strong>{" "}
            Each dot is a note and each line is a link between notes, coloured by
            product area (labels removed). 2,498 markdown notes, 2,540 internal
            links.
          </p>
          <p>
            <strong className="text-white">What the shape says.</strong> The big
            wheels are index pages fanning out to hundreds of feature notes.
            That is good for navigation, but notes average about two links and
            685 (27%) have none, so the lateral links a PRD match depends on are
            still sparse.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <H3>What the notes are about</H3>
            <p className="mt-3 text-sm text-white/65">1,673 content notes by category (index, memory and session files excluded).</p>
            <div className="mt-6 text-white">
              <CompositionBars rows={composition} />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-lg font-semibold">So what</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              About 83% of content notes describe features, mostly in one product
              area. That is the backbone, but the categories that feed a PRD
              match, use cases, demo scenarios and customer questions, are
              thin. My next seeding effort should go there, not into more
              feature pages.
            </p>
          </div>
        </div>

        <H3 className="mt-20">How trustworthy is it today?</H3>
        <p className="mt-3 max-w-3xl text-sm text-white/65">
          Share of the 1,673 content notes (format check across all 2,498).
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Gauge pct={99} label="Valid note format" detail="2,477 of 2,498 notes carry the required frontmatter" color="#2dd4bf" />
          <Gauge pct={58} label="Link at least one source" detail="963 notes; the rest are gaps still to source" color="#818cf8" />
          <Gauge pct={44} label="Have a citations section" detail="740 notes" color="#fbbf24" />
          <Gauge pct={1} label="Approved" detail="20 notes. 942 are drafts and about 670 carry no status yet" color="#f472b6" />
        </div>
        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-white/70">
          <Rich>
            **The honest reading:** the format is enforced, sources are
            present on a majority of notes, and the promotion gate has barely
            been used. Most knowledge is still draft. That is the first thing I
            would fix, because an approved note is the only kind I want agents
            and the Q&A assistant to rely on. Only 2 notes are release-tagged
            today, which is why the release-to-visibility gap is still open.
          </Rich>
        </p>
      </Section>

      {/* ------------------------------ Design principles ----------------------- */}
      <Section n="15" label="Design principles">
        <H2>Eight failure modes I designed against</H2>
        <P className="mt-8 max-w-4xl">
          Most knowledge bases fail in a small number of known ways. These are
          the ones I designed against, and each has a mechanism behind it
          rather than an intention. How well the mechanisms hold is what the
          audit and the baseline above measure.
        </P>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((d, i) => (
            <PrincipleCard key={d.t} n={i + 1} title={d.t} how={d.how} prevents={d.solves} />
          ))}
        </div>
      </Section>

      {/* ----------------------------- 12 PM impact ----------------------------- */}
      <Section n="16" label="What it changes for PMs" tone="tint">
        <H2>The product management job, before and after</H2>
        <DataTable
          className="mt-10"
          wide
          headers={["PM job", "Before", "With the knowledge layer", "Metric to watch"]}
          rows={jobs}
        />
      </Section>

      {/* --------------------------- 13 Expert audit ---------------------------- */}
      <Section n="17" label="The audit">
        <H2>Reviewing my own build as an AI-native PM</H2>
        <P className="mt-8 max-w-4xl">
          A good build is not a proven product. I scored the base on six
          dimensions, on my own judgement, against what the benchmarks suggest
          good looks like. The pattern is typical: strong on structure and trust
          by design, thin on measurement and freshness.
        </P>
        <div className="mt-10">
          <Scorecard rows={scores} />
        </div>

        <H3 className="mt-20">The improvement backlog</H3>
        <P className="mt-4 max-w-4xl">
          Ordered by impact on trust first, then on measurement. P0 items make
          the base provable; P1 hard-wires it into delivery; P2 widens adoption.
        </P>
        <DataTable
          className="mt-8"
          wide
          headers={["Priority", "Improvement", "What it involves", "Benchmark or evidence"]}
          rows={improvements}
        />
      </Section>

      {/* ---------------------------- 14 Measurement ---------------------------- */}
      <Section n="18" label="Measurement" tone="muted">
        <H2>How I would prove it works</H2>
        <P className="mt-8 max-w-4xl">
          <Rich>
            I have not yet measured outcomes, and I would rather say so than
            invent them. Here is the measurement plan: each metric anchored to a
            public benchmark where one exists, with a **proposed target that is
            a hypothesis**, to be replaced by a real baseline in the first
            release cycle.
          </Rich>
        </P>
        <DataTable
          className="mt-10"
          wide
          headers={["Metric", "How to measure", "Anchor", "Proposed target"]}
          rows={kpis}
        />

        <H3 className="mt-20">What it could be worth: an interactive model</H3>
        <P className="mt-4 max-w-4xl">
          Adjust the sliders to your own organisation. The assumptions behind
          the maths are stated under the result.
        </P>
        <div className="mt-10">
          <RoiCalculator />
        </div>
      </Section>

      {/* ---------------------------- 15 Lessons -------------------------------- */}
      <Section n="19" label="Lessons and playbook" tone="lavender">
        <H2>Lessons, and how another PM team could start</H2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map(([t, s], i) => (
            <NumberCard key={t} n={String(i + 1).padStart(2, "0")} title={t}>
              {s}
            </NumberCard>
          ))}
        </div>

        <H3 className="mt-16">A six-step start</H3>
        <ol className="mt-6 max-w-4xl list-decimal space-y-3 pl-6 text-base opacity-85 sm:text-lg">
          <li>List each team’s most common questions, including your most repeated questionnaire questions.</li>
          <li>Fix the taxonomy, note format and indexes before anyone writes.</li>
          <li>Name an owner per area and turn on required reviews.</li>
          <li>Seed one area, starting with feature documentation and customer questions.</li>
          <li>Add ingest, validate and diff-first refresh, then schedule the refresh.</li>
          <li>Open a read-only, cite-or-abstain Q&amp;A assistant and test it against your question list.</li>
        </ol>
        <p className="mt-12 max-w-4xl text-xl font-medium leading-relaxed sm:text-2xl">
          Product knowledge is a product in its own right, with users, owners
          and a release cadence. Build it that way, and the organisation stops
          asking “who knows about this?” and starts asking “what does the
          knowledge base say, and where did it get that?”
        </p>
      </Section>

      {/* ---------------------------- Glossary ---------------------------------- */}
      <Section label="Plain-language glossary" tone="muted" className="py-12 sm:py-16">
        <DataTable headers={["Term", "Meaning here"]} rows={glossary} />
      </Section>

      {/* ---------------------------- Sources ----------------------------------- */}
      <Section label="Sources" className="py-12 sm:py-16">
        <ul className="grid gap-x-10 gap-y-3 text-sm sm:grid-cols-2">
          {sources.map(([t, href]) => (
            <li key={href}>
              <SourceLink href={href}>{t}</SourceLink>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-4xl text-xs leading-relaxed opacity-70">
          Industry adoption figures are directional and come from different
          populations and definitions. Internal descriptions are based on
          company documentation as of October 2026. The scorecard, targets and
          the interactive model are my own judgement and illustration, not
          measured results.
        </p>
      </Section>
    </CaseStudyPage>
  );
}
