import { Card, CaseStudyPage, DataTable, H1, H2, H3, NumberCard, P, Rich, Section } from "@/components/case-study/ui";
import { ArchitectureDiagram, BigStat, AutomationMap, AutonomyLadder, Chip, CompanionLink, FlowStrip, FunnelBars, PipelineStrip, PrdMatch, RoadmapLanes, ScrollBox, SourceLink, StatTile, VerifyLoop } from "@/components/case-study/pk-visuals";
import { SdlcCalculator } from "@/components/case-study/impact-calculators";
import { ChapterNav } from "@/components/case-study/chapter-nav";
import { automationRows, devBenefits, handshakes, jobs, lessons, mistakes, phases, prdRows, skills, sources } from "@/data/product-knowledge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Product Knowledge Base as the Foundation of an AI-Led SDLC",
  description:
    "How a cited Product Knowledge Base, matched against technical knowledge, makes PRDs clearer for an AI-led SDLC, what PM work it automates, and how it can feed independent verification.",
  openGraph: {
    title: "The Product Knowledge Base as the Foundation of an AI-Led SDLC",
    description:
      "How a cited Product Knowledge Base, matched against technical knowledge, makes PRDs clearer for an AI-led SDLC, what PM work it automates, and how it can feed independent verification.",
    type: "article",
    images: [{ url: "/AiSdlcFoundation.png" }],
  },
};

const sdlcChapters = [
  { id: "in-one-minute", label: "In one minute", phase: "Overview" },
  { id: "reported-outcomes", label: "Reported outcomes", phase: "Overview" },
  { id: "why-the-groundwork-matters", label: "Why the groundwork matters", phase: "Why" },
  { id: "the-prd-match", label: "The PRD match", phase: "The match" },
  { id: "what-it-automates", label: "What it automates", phase: "The match" },
  { id: "how-it-fits-together", label: "Architecture and handshakes", phase: "System" },
  { id: "independent-verification", label: "Independent verification", phase: "System" },
  { id: "what-it-changes-for-pms", label: "What it changes for PMs", phase: "Impact" },
  { id: "measuring-the-effect", label: "Measuring the effect", phase: "Impact" },
  { id: "now-next-later", label: "Now, next, later", phase: "Impact" },
  { id: "lessons", label: "Lessons", phase: "Impact" },
];
const sdlcPhases = ["Overview", "Why", "The match", "System", "Impact"];

export default function AiSdlcFoundationCaseStudy() {
  return (
    <CaseStudyPage>
      <ChapterNav chapters={sdlcChapters} phases={sdlcPhases} extra={{ href: "#sdlc-model", label: "Try the model" }} />

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
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 lg:pt-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">Case study 2 of 2 · AI-native product management</p>
          <H1 className="mt-6 max-w-5xl">How the Product Knowledge Base becomes the foundation of an AI-led SDLC</H1>
          <p className="mt-6 max-w-3xl text-xl text-white/75 sm:text-2xl">When agents build, the PRD is the ceiling. How matching direction, market and customer evidence against technical knowledge makes PRDs clearer, what PM work it automates, and how it can feed independent verification.</p>
          <a
            href="#sdlc-model"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
          >
            Try the interactive model <span aria-hidden>↓</span>
          </a>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatTile value="L4" label="of 5 autonomy levels for the delivery pipeline this feeds" />
            <StatTile value="7" label="PRD sections the match makes sharper" />
            <StatTile value="8" label="PM activities mapped by how automated they are" />
            <StatTile value="6" label="handshakes with delivery, three of them live" />
          </div>
          <dl className="mt-12 grid gap-6 border-t border-white/10 pt-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Role", "Product Manager: designer of the input side"],
              ["Audience", "Product leaders, engineering leaders, and developers in an AI-led SDLC"],
              ["Timeline", "July 2026 to present"],
              ["Related", "Companion: Building a Product Knowledge Base"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-white/50">{k}</dt>
                <dd className="mt-1 font-medium text-white/90">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------- Scope note ------------------------- */}
      <Section className="py-10 sm:py-12">
        <p className="max-w-4xl rounded-2xl border border-dashed p-5 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Scope and confidentiality.</strong>{" "}
          The AI-led delivery pipeline is a company-wide engineering initiative, not my work. This case study covers only the product-side groundwork I built and how it connects to that pipeline. It shows no product content, customers, roadmap items or colleagues.
        </p>
      </Section>


      {/* ------------------------------ One minute ------------------------------ */}
      <Section id="in-one-minute" label="In one minute" className="py-14 sm:py-20">
        <H2 className="max-w-5xl">
          When agents build, the PRD is the ceiling. A knowledge base is how you raise it.
        </H2>
        <div className="mt-10">
          <FlowStrip />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["The thesis", "An AI-led pipeline is only as good as its input. Direction, market and customer evidence, matched against technical knowledge, turns a vague request into a PRD that names fit, gaps and conflicts."],
            ["What it changes", "PMs spend less time assembling and answering, and more time deciding. Developers and agents get cited context and a clearer target before a line is written."],
            ["What is still missing", "Independent verification, and a controlled measurement of the effect on delivery. Both are designed here, neither is claimed as a result."],
          ].map(([t, s2]) => (
            <Card key={t} className="p-6">
              <p className="text-lg font-semibold">{t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s2}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          This is the second of two case studies. The first covers how the
          knowledge base itself was designed and built.
        </p>
      </Section>

      {/* ------------------------------ Reported outcomes ----------------------- */}
      <Section id="reported-outcomes" label="Reported outcomes" tone="tint">
        <H2 className="max-w-5xl">What the matched, cited input has changed so far, as I measure it</H2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <BigStat value="8–10 days → 3 h" label="to create a PRD, because direction, market and customer evidence are already curated and cited" />
          <BigStat value="−90%" label="AI context consumption, so agents work from the smallest cited context that answers the question" />
          <BigStat value="3–4 h → 20–25 min" label="to keep the underlying knowledge current, so PRDs start from true facts" />
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">How to read these.</strong> Self-reported from my own team’s workflow. I have not yet published the measurement method or run an independent before-and-after check, so read them as encouraging early results, not audited ones. The effect on delivery itself (rework, conflicts caught early) is still to be measured.
        </p>
      </Section>

      {/* ----------------------------- 03 Groundwork ---------------------------- */}
      <Section label="Why the groundwork matters" tone="dark">
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
      <Section label="The PRD match">
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
      <Section label="What it automates" tone="muted">
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
          These are the mechanisms. The PRD-creation time above is
          self-reported; I have not yet measured rework or clarification
          questions before and after, so I make no numeric claim about delivery
          here. The “Measuring the effect” section covers it.
        </p>
      </Section>
      {/* --------------------------- 06 Architecture ---------------------------- */}
      <Section label="How it fits together" tone="muted">
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
      {/* ------------------------------ Verification ---------------------------- */}
      <Section id="independent-verification" label="Independent verification" tone="tint">
        <H2 className="max-w-5xl">The next step: let the knowledge base check the build, not just brief it</H2>
        <P className="mt-6 max-w-3xl">
          <Rich>
            Today, tests are written in the same pipeline that writes the code,
            so passing them is weaker evidence than it looks. The curated use
            cases, demo scripts and customer questions are exactly the raw
            material for **acceptance scenarios the building agents cannot
            see**.
          </Rich>
        </P>
        <div className="mt-10">
          <VerifyLoop />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Why it matters", "Without verification the builder cannot trust, an unattended pipeline just produces mistakes faster. DORA 2024 linked a 25% rise in AI adoption to a 7.2% drop in delivery stability."],
            ["Why the knowledge base is the source", "Scenarios grounded in real customer behaviour and real commitments are harder to game than tests the agents wrote themselves."],
            ["What stays human", "People still own intent and final acceptance. The scenarios change what evidence they see, not who decides."],
          ].map(([t, s2]) => (
            <Card key={t} className="p-6">
              <p className="text-lg font-semibold">{t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s2}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ----------------------------- 12 PM impact ----------------------------- */}
      <Section label="What it changes for PMs" tone="tint">
        <H2>The product management job, before and after</H2>
        <DataTable
          className="mt-10"
          wide
          headers={["PM job", "Before", "With the knowledge layer", "Metric to watch"]}
          rows={jobs}
        />
      </Section>
      {/* ------------------------------ Measuring the effect -------------------- */}
      <Section id="measuring-the-effect" label="Measuring the effect" tone="muted">
        <H2 className="max-w-5xl">How I would prove the PRD match makes delivery better</H2>
        <P className="mt-6 max-w-3xl">
          <Rich>
            My reported outcomes are self-reported, and the effect on delivery
            is not yet measured. These are the metrics I would track to make it
            rigorous, with **proposed targets that are hypotheses** to be
            replaced by a real baseline in the first release cycle.
          </Rich>
        </P>
        <DataTable
          className="mt-10"
          wide
          headers={["Metric", "How to measure", "Anchor", "Proposed target"]}
          rows={[
            ["Grounded-spec rate", "Share of spec claims about current behaviour that cite a note", "No public benchmark; baseline first", "≥ 90%, as a gate"],
            ["Rework from unclear input", "Share of specs reworked after build starts because input was wrong or conflicting", "No public benchmark; baseline first", "Halve the baseline"],
            ["Conflicts caught before build", "Conflicts with architecture or prior commitments found at PRD stage vs after", "Baseline first", "A rising share caught early"],
            ["Clarification questions per spec", "Questions asked of PMs once a spec is accepted for build", "Baseline first", "Down by a third"],
            ["Release-to-visibility lag", "Days from release to the feature note being merged", "The gap the base exists to close", "≤ 5 working days"],
            ["Scenario pass rate", "Independent acceptance scenarios passed first time", "Dark-factory teams use holdout scenarios", "Tracked once scenarios exist"],
          ]}
        />
        <span id="sdlc-model" className="mt-20 block scroll-mt-24" />
        <H3>What it could be worth: an interactive model</H3>
        <P className="mt-4 max-w-4xl">
          Adjust the sliders to your own organisation. Every default is an
          assumption, because I have not yet measured rework and question
          volume before and after. Compare the result with the self-reported
          PRD-creation time above.
        </P>
        <div className="mt-10">
          <SdlcCalculator />
        </div>
      </Section>

      {/* ------------------------------ Now next later -------------------------- */}
      <Section id="now-next-later" label="Now, next, later">
        <H2 className="max-w-5xl">What is live, what is designed, and what comes next</H2>
        <div className="mt-10">
          <RoadmapLanes
            lanes={[
              { title: "Live", tone: "live", items: ["Sources curated into one cited, owned base", "PRDs written against the base, PM-led with agent help", "PRDs handed to the AI-led pipeline", "Ownership enforced by hooks, CODEOWNERS and CI", "A self-service Help and Resource front door: unanswered questions become routed tickets, and shipped features are published back with their release version"] },
              { title: "Designed", tone: "designed", items: ["Shipped features published back as release-tagged notes (on request today)", "A scheduled, diff-first refresh that raises owner proposals", "Source-grounded Q&A that cites or abstains"] },
              { title: "Next", tone: "next", items: ["Holdout acceptance scenarios from use cases and customer questions", "Specs that cite note IDs, with the gate failing on uncited claims", "An automated match report for every PRD draft", "Defects traced back to the spec that caused them"] },
            ]}
          />
        </div>
      </Section>

      {/* ------------------------------ Lessons --------------------------------- */}
      <Section id="lessons" label="Lessons" tone="lavender">
        <H2>What I would tell another PM team</H2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["The PRD is the ceiling", "In an AI-led pipeline the limit is not the model. It is the clarity of what you ask for."],
            ["Match before you spec", "Check direction and evidence against what is technically possible before agents start, not during."],
            ["Automate assembly, not judgement", "Rollups, retrieval and consistency are safe to automate. Prioritisation and trade-offs stay with people."],
            ["Do not let builders grade themselves", "Independent scenarios from real use cases are what make autonomy safe."],
            ["Label what is live", "Say what works, what is designed and what is next. A plan mistaken for a capability costs trust."],
            ["Measure before you claim", "I would rather show a baseline and a plan than a flattering number I cannot defend."],
          ].map(([t, s2], i) => (
            <NumberCard key={t} n={String(i + 1).padStart(2, "0")} title={t}>
              {s2}
            </NumberCard>
          ))}
        </div>
        <div className="mt-12">
          <CompanionLink
            href="/work/product-knowledge"
            kicker="Companion case study"
            title="Building a Product Knowledge Base"
            body="How the base was designed, built and governed: taxonomy, open format, indexing, ownership, agents, and an honest baseline."
          />
        </div>
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
