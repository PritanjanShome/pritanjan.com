import { Card, CaseStudyPage, DataTable, H1, H2, H3, NumberCard, P, Rich, Section, TwoCol } from "@/components/case-study/ui";
import { ActivityChart, Chip, DemandLoop, VotingFlow, BenchCard, BigStat, BranchesPanel, BuildTimeline, CompanionLink, CompositionBars, ContentMap, Expandable, Gauge, IndexMap, LayerStack, LifecycleSteps, ObsidianMock, OperatingModelDiagram, PrincipleCard, RefreshLoop, Scorecard, ScrollBox, SourceLink, StatTile, StepGrid, TaxonomyMap } from "@/components/case-study/pk-visuals";
import { RoiCalculator } from "@/components/case-study/roi-calculator";
import { ChapterNav } from "@/components/case-study/chapter-nav";
import { alternatives, benchmarks, composition, efficiency, glossary, improvements, kpis, lessons, lifeSteps, mistakes, okf, painTable, phases, principles, risks, scores, skills, sources, stakeholders, timeline } from "@/data/product-knowledge";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Building a Product Knowledge Base",
  description:
    "How I designed, built and governed a cited, owned Product Knowledge Base that Product, Sales, Services and AI assistants can trust, with an honest baseline, an audit and a measurement plan.",
  openGraph: {
    title: "Building a Product Knowledge Base",
    description:
      "How I designed, built and governed a cited, owned Product Knowledge Base that Product, Sales, Services and AI assistants can trust, with an honest baseline, an audit and a measurement plan.",
    type: "article",
    images: [{ url: "/pk-cover-build.png" }],
  },
};

const pkChapters = [
  { id: "in-one-minute", label: "In one minute", phase: "Overview" },
  { id: "reported-outcomes", label: "Reported outcomes", phase: "Overview" },
  { id: "the-problem", label: "The problem and benchmarks", phase: "Overview" },
  { id: "what-goes-inside", label: "What goes inside", phase: "Concept" },
  { id: "design-principles", label: "Design principles", phase: "Concept" },
  { id: "how-it-was-built", label: "How it was built", phase: "Build" },
  { id: "the-operating-model", label: "The operating model", phase: "Build" },
  { id: "an-agent-for-every-job", label: "An agent for every job", phase: "Build" },
  { id: "the-front-door", label: "The front door", phase: "Build" },
  { id: "the-note-format", label: "The note format", phase: "Standards" },
  { id: "indexing-and-routing", label: "Indexing and routing", phase: "Standards" },
  { id: "governance", label: "Governance", phase: "Standards" },
  { id: "the-base-today", label: "The base today", phase: "Results" },
  { id: "the-audit", label: "The audit", phase: "Results" },
  { id: "measurement", label: "Measurement and value model", phase: "Results" },
  { id: "lessons-and-playbook", label: "Lessons and playbook", phase: "Results" },
];
const pkPhases = ["Overview", "Concept", "Build", "Standards", "Results"];

export default function ProductKnowledgeCaseStudy() {
  return (
    <CaseStudyPage>
      <ChapterNav chapters={pkChapters} phases={pkPhases} extra={{ href: "#roi-model", label: "Try the value model" }} />

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
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">Product Knowledge Base · the build</p>
          <H1 className="mt-6 max-w-5xl">Building a Product Knowledge Base: one cited, governed source of product truth</H1>
          <p className="mt-6 max-w-3xl text-xl text-white/75 sm:text-2xl">How I designed, built and governed a knowledge base that Product, Sales, Services and AI assistants can all trust, what it looks like today, and what I would improve next.</p>
          <a
            href="#roi-model"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
          >
            Try the interactive value model <span aria-hidden>↓</span>
          </a>
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

      {/* ------------------------- Scope note ------------------------- */}
      <Section className="py-10 sm:py-12">
        <p className="max-w-4xl rounded-2xl border border-dashed p-5 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Scope and confidentiality.</strong>{" "}
          The Product Knowledge Base is my build. The repository is internal to my company, so this case study covers its purpose, design and governance and shows no product content, customers, roadmap items or colleagues. Benchmarks come from public sources and are labelled by how much weight they can bear.
        </p>
      </Section>


      {/* ------------------------------ One minute ------------------------------ */}
      <Section id="in-one-minute" label="In one minute" className="py-14 sm:py-20">
        <H2 className="max-w-5xl">
          One cited, governed, owned source of product truth that Product, Sales, Services and AI assistants can all use.
        </H2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <BigStat value="1,673" label="content notes, each cited or marked as a gap" />
          <BigStat value="13" label="standard categories, identical in every product area" />
          <BigStat value="6" label="domain PMs working in one shared repository" />
          <BigStat value="20" label="AI skills that run ingestion, validation, refresh and memory" />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["What it is", "A layer above the systems of record, in plain markdown and git, shared on GitHub and maintained by PMs working locally with agents."],
            ["Why it is built this way", "Open format, fixed taxonomy, named owners, cite or abstain, and agents for every repeatable job, so it can be trusted and kept current."],
            ["The honest baseline", "The structure works and early outcomes are encouraging (self-reported, below). Most notes are still drafts and 58% link a source. The audit shows the plan."],
          ].map(([t, s2]) => (
            <Card key={t} className="p-6">
              <p className="text-lg font-semibold">{t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s2}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ------------------------------ Reported outcomes ----------------------- */}
      <Section id="reported-outcomes" label="Reported outcomes" tone="tint">
        <H2 className="max-w-5xl">What it has changed so far, as I measure it</H2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <BigStat value="−90%" label="AI context consumption, from index-first reading, compact memory and model routing" />
          <BigStat value="3–4 h → 20–25 min" label="to update the knowledge base from its sources, with diff-first refresh" />
          <BigStat value="8–10 days → 3 h" label="to create a PRD, because the evidence is already curated and cited" />
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">How to read these.</strong> Self-reported from my own team’s workflow. I have not yet published the measurement method or run an independent before-and-after check, so read them as encouraging early results, not audited ones.
        </p>
      </Section>

      {/* ------------------------------ Problem --------------------------------- */}
      <Section id="the-problem" label="The problem" tone="muted">
        <H2 className="max-w-5xl">Product knowledge rarely goes missing. It scatters, goes stale and ends up owned by nobody.</H2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painTable.map(([who, pain]) => (
            <div key={who} className="rounded-3xl border bg-card p-5 text-card-foreground">
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">{who}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pain}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <BigStat value="~19%" label="of the workweek goes on searching for and gathering information (McKinsey Global Institute, 2012; directional)" />
          <BigStat value="+25% → −7.2%" label="a 25% rise in AI adoption correlated with a 7.2% drop in delivery stability (DORA 2024). Speed without verification just makes mistakes faster." />
        </div>

        <h3 className="mt-16 text-xl font-semibold tracking-tight sm:text-2xl">What good looks like: five public reference points</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <BenchCard big="55%" what="faster to a new engineer’s 10th merged PR after Spotify rolled out Backstage (Spotify-reported; also 60 to 20 days)" borrowed="One activation metric, and make the governed path the easiest path." source="Spotify Backstage docs" href="https://backstage.io/docs/overview/adopting" />
          <BenchCard big="2,000+" what="pages in GitLab’s public handbook, written as plain text and changed through merge requests" borrowed="Docs-as-code: markdown in git, every change reviewed." source="GitLab Handbook" href="https://handbook.gitlab.com/handbook/about/" />
          <BenchCard big="+43%" what="more proposals submitted by teams using RFP response software (Responsive survey; Loopio found about +10%)" borrowed="Answer once, approve it, reuse it: the customer-questions category." source="Responsive" href="https://www.responsive.io/blog/rfp-response-automation-stats-rev-up-sales-engine" />
          <BenchCard big="51.5%" what="of generated sentences were fully supported by their citations in public generative search" borrowed="A citation is not proof. Cite or abstain, then verify." source="Liu et al., 2023" href="https://arxiv.org/abs/2304.09848" />
          <BenchCard big="up to 57%" what="of citations in a RAG test were post-rationalised (adversarial setup, an upper bound)" borrowed="Validate at write time, and test answers at read time." source="Wallat et al., 2024" href="https://arxiv.org/abs/2412.18004" />
          <div className="flex flex-col justify-center rounded-3xl border border-dashed p-6 text-sm leading-relaxed text-muted-foreground">
            Spotify’s figures are self-reported, the RFP savings are vendor
            claims and the Stripe onboarding figure is an anecdote. I cite them
            for the lesson, not as proof of my own results.
          </div>
        </div>
        <Expandable summary="The full benchmark table, with what differs in my build">
          <DataTable
            wide
            headers={["Reference", "What the numbers show", "What I borrowed", "Where mine differs"]}
            rows={benchmarks}
          />
        </Expandable>
      </Section>      {/* ------------------------------ What goes inside ------------------------ */}
      <Section id="what-goes-inside" label="What goes inside" tone="tint">
        <H2 className="max-w-5xl">Four lenses, thirteen categories, one taxonomy</H2>
        <P className="mt-6 max-w-3xl">
          <Rich>
            The base holds the **distilled, current understanding** of each
            product, and where it is going. It is sorted into the same
            standard categories in every product area, and every note points
            back to the system of record it came from.
          </Rich>
        </P>
        <div className="mt-10">
          <ContentMap />
        </div>
        <H3 className="mt-16">One tree, separate homes</H3>
        <P className="mt-4 max-w-4xl">
          <Rich>
            Every product uses the **same categories, the same note template,
            the same status lifecycle and the same review rules**. Knowledge is
            only useful across an organisation if it is predictable.
          </Rich>
        </P>
        <div className="mt-8">
          <TaxonomyMap />
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

      {/* ------------------------------ Design principles ----------------------- */}
      <Section label="Design principles">
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
      {/* ----------------------------- 07 How built ----------------------------- */}
      <Section label="How it was built">
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
      <Section label="The operating model" tone="tint">
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
      <Section label="An agent for every job">
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
      {/* ------------------------------ Front door ------------------------------ */}
      <Section id="the-front-door" label="The front door" tone="tint">
        <div className="flex flex-wrap items-center gap-3">
          <Chip tone="live">Implemented</Chip>
        </div>
        <H2 className="mt-4 max-w-5xl">A self-service front door that turns every unanswered question into a routed ticket</H2>
        <P className="mt-6 max-w-3xl">
          <Rich>
            The base is not only read by people who know where to look.
            Employees, Sales, Services and customers go to the product’s
            **Help and Resource** section, search it, or **ask an AI chatbot**
            that answers from the base and shows its source. When nothing
            relevant is found, the system does the work a PM used to do as a
            help desk.
          </Rich>
        </P>
        <div className="mt-10">
          <DemandLoop />
        </div>
        <H3 className="mt-16">Community-driven feature development</H3>
        <P className="mt-4 max-w-3xl">
          <Rich>
            A new feature request does not just land in a backlog. It goes
            through a **voting system**: the community backs the requests they
            also need, and the **most requested features rise to the top**.
            That ranking is demand I can observe rather than guess, so it
            becomes one of the inputs to **market research**, and from there
            part of the **PRD**. Once the feature is built it is added to the
            base, published as a new feature in the Help and Resource section,
            and included in the **release documentation**.
          </Rich>
        </P>
        <div className="mt-8">
          <VotingFlow />
        </div>
        <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
          Votes are evidence, not the decision. Prioritisation still weighs
          them against strategy, effort and risk.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["Why it matters", "Unanswered questions become a demand signal instead of a PM’s inbox. Requests arrive typed, owned and with the customer attached, and every shipped feature lands in the base with its release version, which closes the release-to-visibility gap by construction."],
            ["What it is built on", "Notes rendered from the base as an interactive page in the product’s Help and Resource section, an AI chatbot grounded on those notes, a ticket flow that asks the right questions, and routing to the relevant PM or PO from the ownership map."],
            ["Risks I manage", "Wrong routing, ticket noise and a chatbot that guesses. Answers cite their source or say nothing, and each PM owns triage for their area. Customer-facing access needs tiers so internal notes never leak."],
          ].map(([t, s2]) => (
            <Card key={t} className="p-6">
              <p className="text-lg font-semibold">{t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s2}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">What I would measure.</strong>{" "}
          The share of questions answered with a source, tickets by type, the
          share routed to the right PM first time, time to publish after a
          release, and the number of PM interruptions it removes. I have not
          yet published usage figures for it.
        </p>
      </Section>

      {/* ----------------------------- 08 OKF ----------------------------------- */}
      <Section label="The note format" tone="tint">
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
      <Section label="Indexing and routing">
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
      {/* Governance */}
      <Section label="Governance" tone="muted">
        <H2>Ownership you can enforce, not just agree on</H2>
        <div className="mt-10">
          <LayerStack />
        </div>
        <P className="mt-8 max-w-4xl">
          <Rich>
            Six domain PMs **self-serve their own area**. Anything that touches
            another owner’s area, shared content or governance becomes a
            **proposal** that every affected owner approves. Every governance
            choice goes into a decision log (24 entries so far).
          </Rich>
        </P>
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
      <Section label="The base today" tone="dark">
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

        <H3 className="mt-20">Scale and activity</H3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <BigStat value="3,000+" label="files in one shared repository" />
          <BigStat value="6" label="domain PMs, each owning an area" />
          <BigStat value="23" label="pull requests closed (as of Nov 2026)" />
          <BigStat value="10" label="demo-ready AI agents built on the base" />
          <BigStat value="55/55" label="automated governance and routing checks (at last count)" />
        </div>
        <div className="mt-8">
          <ActivityChart />
        </div>
      </Section>
      {/* --------------------------- 13 Expert audit ---------------------------- */}
      <Section label="The audit">
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
      <Section label="Measurement" tone="muted">
        <H2>How I would prove it works</H2>
        <P className="mt-8 max-w-4xl">
          <Rich>
            My reported outcomes are self-reported, and I would rather say so
            than overstate them. Here is the measurement plan for making them
            rigorous: each metric anchored to a
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

        <span id="roi-model" className="mt-20 block scroll-mt-24" />
        <H3>What it could be worth: an interactive model</H3>
        <P className="mt-4 max-w-4xl">
          Adjust the sliders to your own organisation. The assumptions behind
          the maths are stated under the result.
        </P>
        <div className="mt-10">
          <RoiCalculator />
        </div>
      </Section>
      {/* ---------------------------- 15 Lessons -------------------------------- */}
      <Section label="Lessons and playbook" tone="lavender">
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
      {/* ------------------------------ Companion ------------------------------- */}
      <Section className="py-12 sm:py-16">
        <CompanionLink
          href="/work/ai-sdlc-foundation"
          kicker="Next case study"
          title="How the Product Knowledge Base becomes the foundation of an AI-led SDLC"
          body="Matching direction, market and customer evidence against technical knowledge to write clearer PRDs, what product-management work it automates, and how it feeds independent verification."
        />
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
