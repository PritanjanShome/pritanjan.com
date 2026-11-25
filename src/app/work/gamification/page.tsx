import {
  Caption,
  Card,
  CaseStudyPage,
  DataTable,
  Fig,
  H1,
  H2,
  H3,
  Lane,
  NumberCard,
  P,
  Paper,
  darkInvert,
  FigPair,
  FlowFig,
  H4,
  Rich,
  ScrollFig,
  Section,
  TicketCard,
  TwoCol,
} from "@/components/case-study/ui";
import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { ChapterNav } from "@/components/case-study/chapter-nav";
import { AtAGlance, JourneyMap } from "@/components/case-study/overview";
import { GamificationCalculator, MoveOutCalculator } from "@/components/case-study/impact-calculators";
import { cn } from "@/lib/utils";

const A = "/case-studies/gamification";

export const metadata: Metadata = {
  title: "Driving Sustainable Living Through Engagement",
  description:
    "How gamification in the Resi tenant app lifted 7-day engagement by 42% and cut utility consumption by 9%.",
  openGraph: {
    title: "Driving Sustainable Living Through Engagement",
    description:
      "How gamification in the Resi tenant app lifted 7-day engagement by 42% and cut utility consumption by 9%.",
    type: "article",
    images: [{ url: "/Gamification.png" }],
  },
};

/* ------------------------------- content ---------------------------------- */

const findings = [
  {
    title: "Early User Attrition",
    body: "Our cohort analysis highlighted a concerning **35% user drop-off during the first week**, indicating an ineffective onboarding process that failed to demonstrate clear value.",
  },
  {
    title: "Limited User Interaction",
    body: "Beyond essential transactions like rent payments and maintenance requests, **70% of users weren't exploring additional features**. The app lacked engaging elements that would encourage return visits.",
  },
  {
    title: "Community Disconnect",
    body: "A striking **80% of survey respondents** expressed feeling disconnected from other tenants, pointing to insufficient community interaction features.",
  },
  {
    title: "Declining Engagement Patterns",
    body: "**Monthly active user** metrics showed a consistent **25% decline**, highlighting the absence of compelling daily engagement triggers and dynamic content.",
  },
  {
    title: "Missed Re-engagement Opportunities",
    body: "We identified that **68% of disengaged users received no targeted outreach**, resulting in permanent engagement loss.",
  },
  {
    title: "Personalisation Gap",
    body: "The uniform user experience emerged as a key pain point, with **65% of surveyed tenants** expressing **desire for more personalised content.**",
  },
];

const personas = [
  {
    name: "Achievers",
    about:
      "These users are driven by a sense of accomplishment and are motivated by challenges and goals. They enjoy achieving milestones and unlocking rewards.",
    users:
      "20% of respondents identified themselves as primarily motivated by challenges and accomplishments.",
    pain: "Lack of clear goals and milestones.",
  },
  {
    name: "Socialisers",
    about:
      "These users value interaction and community involvement. They are more likely to engage when features enable social interaction or provide community benefits.",
    users:
      "25% were drawn towards social features, community engagement, and interaction.",
    pain: "Limited opportunities for interaction",
  },
  {
    name: "Philanthropists",
    about:
      "Motivated by a desire to help others, these users appreciate features that allow them to contribute positively to the community, such as sustainability initiatives.",
    users: "10% were motivated by altruistic actions and community contributions.",
    pain: "Few features that allowed them to contribute to the community.",
  },
  {
    name: "Free Spirits",
    about:
      "These users enjoy exploring the app at their own pace without strict limitations. They appreciate features that offer flexibility and the freedom to discover content independently.",
    users:
      "15% preferred exploring and discovering the app's content at their own pace.",
    pain: "A rigid app structure without exploratory features.",
  },
  {
    name: "Players",
    about:
      "Motivated by rewards, players seek tangible incentives like points, discounts, and badges. They thrive on a reward-driven experience that provides instant gratification.",
    users:
      "20% showed strong motivation for earning rewards and tangible incentives.",
    pain: "Lack of sufficient tangible rewards and incentives",
  },
  {
    name: "Disruptors",
    about:
      "Disruptors are interested in challenging the status quo and making impactful changes. They enjoy features that allow them to voice opinions or contribute to innovative solutions.",
    users:
      "10% were motivated by a desire to drive changes and challenge existing systems.",
    pain: "Few opportunities to voice opinions.",
  },
];

const iterations: [string, string, string][] = [
  [
    "Complex Onboarding Flow",
    "Tenants expressed frustration with the onboarding flow, which required them to navigate multiple screens and understand various features without sufficient guidance. This led to a high dropout rate.",
    "We simplified onboarding by breaking it down into a guided walkthrough, focusing on one feature at a time, and providing interactive tooltips. Additionally, onboarding tasks were reduced to make the first interaction lighter and more engaging.",
  ],
  [
    "Confusing Navigation for Gamified Features",
    "Users found it challenging to locate and participate in challenges due to an unclear menu layout and poorly labeled sections.",
    'We redesigned the navigation structure, consolidating all gamified elements under a single "Engage" tab. This made it more intuitive to find and participate in challenges, reducing user confusion.',
  ],
  [
    "Lack of Visual Feedback",
    "During interactions, users reported a lack of visual feedback, such as progress bars or achievement notifications, which left them uncertain whether their actions were successful.",
    "We implemented dynamic visual feedback, such as progress bars for ongoing challenges and pop-up notifications for completed milestones. This provided instant acknowledgment and helped users understand their progress.",
  ],
  [
    "Low Participation in Community Features",
    "Tenants were reluctant to use community features like discussion boards, stating that they didn’t feel encouraged or rewarded for participating.",
    "We added reward points for community interactions, such as posting on discussion boards or participating in events, which could be redeemed for tangible benefits like gift cards. We also added visible contribution badges to recognize active users.",
  ],
  [
    "Overwhelming Information During Onboarding",
    "Tenants noted feeling overwhelmed with too much information during their first use of the app, making it hard to understand the value of each feature.",
    "We reorganized the onboarding experience to focus only on essential features first. Secondary features were introduced gradually through targeted prompts once users had familiarized themselves with the basics.",
  ],
  [
    "Difficulty Understanding Rewards and Progress",
    "Many users didn’t understand how to earn rewards or what specific actions contributed to their progress. This led to frustration and disengagement.",
    'We clarified the reward structure by adding a dedicated "Rewards" page that outlined how points were earned and how they could be redeemed. Progress bars were also added to each challenge to visually track milestones.',
  ],
  [
    "Low Visibility of Active Challenges",
    "Active challenges were hard to find, leading to users struggling to discover new challenges to take on",
    "We introduced a widget on the home screen that highlighted ongoing challenges, making them instantly visible upon app launch. This encouraged tenants to engage right from the start.",
  ],
];

const testimonials = [
  {
    name: "Basti Weber",
    meta: "24yrs, Male",
    avatar: "basti",
    quote:
      "I love the rewards system. It's motivating to get points for things I already do, like paying rent on time.",
  },
  {
    name: "Boyan Lu",
    meta: "20yrs, Male",
    avatar: "boyan",
    quote:
      "The challenges make using the app fun! I find myself logging in more often just to see my progress.",
  },
  {
    name: "Emily Thompson",
    meta: "27yrs, Female",
    avatar: "emily",
    quote:
      "The leaderboard feature makes it really engaging, especially competing with neighbors—it adds a friendly challenge.",
  },
  {
    name: "Hannah Glaser",
    meta: "19yrs, Female",
    avatar: "hannah",
    quote:
      "The community challenges are great. I never thought I'd meet my neighbours through an app, but it’s happening now.",
  },
  {
    name: "Liam Davis",
    meta: "27yrs, Male",
    avatar: "liam",
    quote:
      "The streak feature helps me keep track of my energy usage. It's great to know that I’m staying on target and won’t have surprises at the end of my contract.",
  },
  {
    name: "Joshua Randria",
    meta: "23yrs, Male",
    avatar: "joshua",
    quote:
      "The badges are such a nice touch. I feel accomplished when I see my badges add up over time.",
  },
  {
    name: "Mark Johnson",
    meta: "34yrs, Male",
    avatar: "mark",
    quote:
      "Seeing my eco-score improve week after week makes me feel like I'm really contributing to something bigger.",
  },
];

/* ---------------------------- small local parts --------------------------- */

function Facts({ items }: { items: string[] }) {
  return (
    <div className="space-y-5">
      {items.map((t) => (
        <P key={t}>
          <Rich>{t}</Rich>
        </P>
      ))}
    </div>
  );
}

/** A dark "feature" row: copy on one side, phone mock-ups on the other. */
function Feature({
  title,
  children,
  image,
  imageAlt,
  imageLeft,
  imageW,
  imageH,
}: {
  title: string;
  children: ReactNode;
  image: string;
  imageAlt: string;
  imageLeft?: boolean;
  imageW: number;
  imageH: number;
}) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div className={imageLeft ? "lg:order-2" : undefined}>
        <H2 className="text-3xl sm:text-5xl">{title}</H2>
        <P className="mt-6">{children}</P>
      </div>
      <div className={imageLeft ? "lg:order-1" : undefined}>
        <Fig
          src={`${A}/${image}.webp`}
          w={imageW}
          h={imageH}
          alt={imageAlt}
          sizes="(min-width: 1024px) 540px, 100vw"
          className="mx-auto max-w-xl"
        />
      </div>
    </div>
  );
}

/* -------------------------------- page ------------------------------------ */

const gamiChapters = [
  { id: "introduction", label: "Introduction", phase: "Discover" },
  { id: "problem-analysis", label: "Problem analysis", phase: "Discover" },
  { id: "user-engagement-analysis", label: "Engagement analysis", phase: "Discover" },
  { id: "why-gamification", label: "Why gamification", phase: "Define" },
  { id: "user-persona", label: "User personas", phase: "Define" },
  { id: "gamification-elements", label: "Gamification elements", phase: "Define" },
  { id: "user-flows", label: "User flows", phase: "Design" },
  { id: "wireframe-and-prototypes", label: "Wireframes and prototype tests", phase: "Design" },
  { id: "components", label: "Components", phase: "Design" },
  { id: "main-features", label: "Main features", phase: "Launch" },
  { id: "strategies", label: "Strategy and A/B tests", phase: "Launch" },
  { id: "feedback", label: "Tenant feedback", phase: "Launch" },
  { id: "outcomes", label: "Outcomes", phase: "Results" },
  { id: "impact-model", label: "Impact model", phase: "Results" },
  { id: "conclusion-and-next-steps", label: "Conclusion and next steps", phase: "Next" },
];
const gamiPhases = ["Discover", "Define", "Design", "Launch", "Results", "Next"];

export default function GamificationCaseStudy() {
  return (
    <CaseStudyPage>      {/* ------------------------------ Hero ------------------------------ */}
      <section className="w-full overflow-hidden bg-[#202024] text-white">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-6 pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-0 lg:pt-28">
          <div className="pb-2 lg:pb-24">
            <Image
              src={`${A}/resi-icon.webp`}
              width={82}
              height={91}
              alt="Resi app icon"
              className="mb-8 h-14 w-auto"
            />
            <H1>Driving Sustainable Living Through Engagement</H1>
            <p className="mt-6 text-xl opacity-80 sm:text-2xl">
              Using Gamification in a Tenant Mobile App
            </p>
          </div>
          <div className="-mx-6 lg:mx-0 lg:-mr-24">
            <Image
              src={`${A}/hero-phones.webp`}
              width={1133}
              height={845}
              alt="Resi app: the Levels screen and the home screen with an Earn Points with Challenges card"
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="h-auto w-full [-webkit-mask-image:linear-gradient(to_right,transparent,black_22%)] [mask-image:linear-gradient(to_right,transparent,black_22%)]"
            />
          </div>
        </div>
      </section>

      <ChapterNav chapters={gamiChapters} phases={gamiPhases} extra={{ href: "#impact-model", label: "Impact model" }} />
      <AtAGlance
        context="Resi, a tenant mobile app for residential property management. The question: how do you keep tenants engaged beyond paying rent and logging repairs?"
        problem="35% of new users dropped off in week one and 70% never went beyond rent payments and maintenance requests, so the app did little for community or for saving energy."
        approach="I interviewed 30 tenants, surveyed users and analysed a three-month cohort, segmented tenants with the HEXAD framework, then designed levels, badges, streaks, challenges and rewards, and tested prototypes and A/B flows."
        results={[
          { value: "+42%", label: "7-day engagement (target was 25%)" },
          { value: "+58%", label: "participation in community challenges" },
          { value: "−9%", label: "utility consumption across the property" },
          { value: "3.4×", label: "customer ROI, up from 2.4×" },
        ]}
        link={{ href: "#impact-model", label: "Try the impact model with your own numbers" }}
      />
      <JourneyMap chapters={gamiChapters} phases={gamiPhases} />


      {/* ----------------------------- Headline stat ---------------------------- */}
      <Section className="py-12 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <H2 className="text-3xl sm:text-4xl">
              The Resi tenant app reduces 9% utility cost for properties
            </H2>
            <P className="mt-6">
              <Rich>
                A study conducted* by Hasso Plattner Institut in Potsdam found
                that the app is effective in **reducing energy** consumption for
                **properties by 9%**.
              </Rich>
            </P>
            <p className="mt-6 text-xs opacity-70">
              * Full research paper to be published in Dec, 2024.
            </p>
          </div>
          <Paper className="mx-auto w-full max-w-sm lg:ml-auto">
            <Fig
              src={`${A}/hpi-logo.webp`}
              w={385}
              h={225}
              alt="Hasso Plattner Institut, Digital Engineering, Universität Potsdam"
              sizes="384px"
            />
          </Paper>
        </div>
      </Section>

      {/* ----------------------------- 01 Introduction -------------------------- */}
      <Section n="01" label="Introduction" tone="muted">
        <H2>Introduction</H2>
        <P className="mt-8 max-w-4xl">
          In the traditionally conservative real estate sector, gamification
          presented a strategic opportunity for digital innovation. Our tenant
          app integration of gamification elements aimed to address a persistent
          challenge: while users would download the app for essential tasks,
          sustained engagement remained elusive. Our focus centered on improving
          the 7-day engagement rate to foster deeper tenant connections.
        </P>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <H3>The Challenge</H3>
            <P className="mt-4">
              Low engagement rates directly impacted the app&apos;s
              effectiveness in driving community involvement and energy-saving
              behaviors, consequently affecting landlord profitability.
              Enhancing the 7-day engagement rate became crucial for improving
              these metrics and ensuring continued user engagement.
            </P>
          </div>
          <div>
            <H3>Our Approach</H3>
            <P className="mt-4">
              We began by collecting comprehensive data through user interviews,
              surveys, and cohort analysis to identify critical engagement
              patterns and their underlying causes. Our investigation combined
              behavioral metrics, session analysis, and user feedback to
              pinpoint where and why users were disengaging from the app. By
              analyzing these multiple data sources, we aimed to uncover
              specific pain points in the user experience and identify
              opportunities to enhance engagement through targeted improvements.
            </P>
          </div>
        </div>
      </Section>

      {/* -------------------------- 02 Problem analysis ------------------------- */}
      <Section n="02" label="Problem Analysis" tone="tint">
        <TwoCol>
          <div>
            <H2>Understanding User Engagement Challenges</H2>
            <div className="mt-8 space-y-5">
              <P>
                <Rich>
                  To gain a comprehensive understanding of our engagement
                  challenge, we implemented a multi-faceted research approach.
                  Our investigation combined **quantitative and qualitative
                  methods** to uncover not just what was happening, but why it
                  was happening. First, we conducted **in-depth interviews**
                  with **30 users across 4 properties with varying demographics
                  of age**, gender, occupation, etc., seeking to understand
                  their app usage patterns and pain points. These conversations
                  revealed valuable insights into user expectations and
                  frustrations.
                </Rich>
              </P>
              <P>
                We then supplemented these qualitative findings with extensive
                survey data, reaching out to both active and dormant users. This
                helped us quantify the issues and identify common patterns
                across our user base.
              </P>
              <P>
                <Rich>
                  We dove deep into **cohort analysis**, examining **user
                  behaviour patterns for 3 months (Apr-Jun 2023)**. They tracked
                  key metrics like session length, feature usage, and retention
                  rates to identify critical drop-off points in the user
                  journey.
                </Rich>
              </P>
              <P>
                Finally, we analysed behavioural data metrics, looking at how
                users interacted with different features, which paths they took
                through the app, and where they encountered friction. This gave
                us a clear picture of the user experience in action.
              </P>
            </div>
          </div>
          <FigPair
            src={`${A}/research-methods.webp`}
            darkSrc={`${A}/research-methods-dark.webp`}
            w={711}
            h={343}
            alt="Research methods: survey, interviews, and cohort analysis with behavioural data"
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </TwoCol>
      </Section>

      {/* ------------------------ 03 Engagement analysis ------------------------ */}
      <Section n="03" label="User Engagement Analysis" tone="muted">
        <H2>Results of User Engagement Analysis</H2>
        <P className="mt-6">
          Our analysis revealed several critical findings that were impacting
          user engagement:
        </P>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {findings.map((f, i) => (
            <NumberCard
              key={f.title}
              n={String(i + 1).padStart(2, "0")}
              title={f.title}
            >
              <Rich>{f.body}</Rich>
            </NumberCard>
          ))}
        </div>

        <H3 className="mt-16">Defining Key Issues and Prioritizing</H3>
        <div className="mt-4 max-w-4xl space-y-5">
          <P>
            After the finding our Root Cause Analysis, we sat as a team to
            prioritise the pain points, while discussing possible solutions to
            address these pain points.
          </P>
          <P>
            Based on this root cause analysis, we focused on integrating
            gamification elements that would create intrinsic motivation, foster
            emotional engagement, personalize user experiences, and facilitate
            community integration, all of which were aimed at driving repeated
            app usage and higher tenant satisfaction.
          </P>
        </div>

        <div className="mt-10 grid items-start gap-4 md:grid-cols-3">
          <Lane>
            <TicketCard
              priority="High"
              title="Effective Onboarding"
              description="Addressing the 35% drop-off rate requires improving the onboarding experience to ensure users understand the app's value."
              ticket="RESI-272"
            />
            <TicketCard
              priority="High"
              title="Motivational Features"
              description="Introducing non-transactional, engaging content to shift the app away from being purely utility-based."
              ticket="RESI-273"
            />
          </Lane>
          <Lane>
            <TicketCard
              priority="Medium"
              title="Re-engagement Campaigns"
              description="Developing campaigns to reach out to disengaged users and bring them back."
              ticket="RESI-274"
            />
            <TicketCard
              priority="Medium"
              title="Personalization"
              description="Providing personalized recommendations and content to improve user satisfaction and retention."
              ticket="RESI-275"
            />
            <TicketCard
              priority="Medium"
              title="Habit Formation Mechanisms"
              description="Adding gamified features such as streaks, badges, and points to foster habit formation."
              ticket="RESI-275"
            />
          </Lane>
          <Lane>
            <TicketCard
              priority="Low"
              title="Community Features"
              description="Adding community engagement elements to connect tenants with each other."
              ticket="RESI-276"
            />
          </Lane>
        </div>

        <H3 className="mt-16">Metrics to check effectiveness</H3>
        <P className="mt-4">
          We focused on several key metrics to determine the effectiveness of
          our strategy.
        </P>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <NumberCard n="01" title="7-Day Engagement Rate">
            <Rich>
              **Target 01: Increase the 7-day engagement rate by 25%**,
              indicating that users were more likely to return within their
              first week of app use.
            </Rich>
          </NumberCard>
          <NumberCard n="02" title="Feature Utilisation">
            <Rich>
              **Target 02:** Increase **tenant participation** in community
              challenges and maintenance issue reporting **by 30%.**
            </Rich>
          </NumberCard>
        </div>
      </Section>

      {/* --------------------------- 04 Why gamification ------------------------ */}
      <Section n="04" label="Why Gamification?">
        <TwoCol>
          <div>
            <H2>Why Gamification Was Chosen as an Engagement Strategy?</H2>
            <div className="mt-8 space-y-5">
              <P>
                <Rich>
                  We decided to go with gamification as our core strategy to
                  boost engagement because it taps into what truly motivates
                  people—things like competition, achievement, and feeling part
                  of a community. Drawing from **Self-Determination Theory
                  (SDT)**, we knew that to make the app compelling, we had to
                  meet tenants’ needs for competence, autonomy, and
                  relatedness. By adding challenges and progression, we made
                  users feel competent; by offering personalised goals, we gave
                  them autonomy; and by integrating social features like
                  leaderboards and group challenges, we built a sense of
                  belonging.
                </Rich>
              </P>
              <P>
                This choice was also influenced by what we&apos;ve seen work in
                other areas—whether it&apos;s education or online communities,
                gamification has consistently led to better engagement. Our goal
                wasn&apos;t just about getting tenants to use the app more
                frequently but about making each interaction rewarding and fun.
                Gamification helped us move from a purely functional app to one
                that tenants genuinely enjoy coming back to—a tool that’s not
                only useful but also adds a bit of fun and connection to their
                everyday routines.
              </P>
            </div>
          </div>
          <FigPair
            src={`${A}/sdt-venn.webp`}
            darkSrc={`${A}/sdt-venn-dark.webp`}
            w={536}
            h={609}
            alt="Self-Determination Theory: autonomy, competence and relatedness"
            sizes="(min-width: 1024px) 420px, 90vw"
            className="mx-auto max-w-md"
          />
        </TwoCol>
      </Section>

      {/* ----------------------------- 06 User personas ------------------------- */}
      <Section n="05" label="User Persona" tone="tint">
        <TwoCol>
          <div>
            <H2>User Personas</H2>
            <div className="mt-8 space-y-5">
              <P>
                To ensure we designed gamification features that resonated well
                with our tenants, we conducted a survey (to find gamification
                persona of our user base) to segment our users into six
                different persona types using the HEXAD framework.
              </P>
              <P>
                This helped us not just to understand their motivations, but
                also to tailor features accordingly to their pain points,
                ultimately fostering greater engagement and user satisfaction
              </P>
              <P>
                The survey indicated that users were more likely to engage if
                they felt they could contribute to a community or achieve
                personal milestones. There was also a clear preference for
                tangible rewards, such as discounts or vouchers.
              </P>
            </div>
          </div>
          <Fig
            src={`${A}/persona-orbit.webp`}
            w={594}
            h={594}
            alt="Illustrated avatars orbiting the Resi logo, representing the six HEXAD persona types"
            sizes="(min-width: 1024px) 480px, 80vw"
            className="mx-auto max-w-md"
          />
        </TwoCol>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {personas.map((p) => (
            <Card key={p.name} className="flex flex-col">
              <H3>{p.name}</H3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
                {p.about}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-5 text-sm">
                <div>
                  <p className="font-medium">Users in the app</p>
                  <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {p.users}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Pain Point</p>
                  <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {p.pain}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ------------------------- 05 Gamification elements --------------------- */}
      <Section n="06" label="Gamification elements" tone="muted">
        <H2>Finding gamification elements</H2>
        <P className="mt-8 max-w-4xl">
          The issues found during our root cause analysis session were
          crystallised into questions using the “how might we…” method.
        </P>
        <div className="mt-12 max-w-4xl space-y-10">
          <div>
            <H3>6 HMWs</H3>
            <P className="mt-3">
              We explored 6 HMWs how to provide the correct set of elements for
              gamification that would drive engagement for all the personas
              while boosting our core goals.
            </P>
          </div>
          <div>
            <H3>Crazy-8s</H3>
            <P className="mt-3">
              Our way of trying to brainstorm these problems. We got out of the
              office together, folded a sheet of paper to make eight different
              sections, and sketched new ideas on each fold.
            </P>
          </div>
          <div>
            <H3>Marczewski’s User Type Reverse Analysis Tool</H3>
            <P className="mt-3">
              Using Marczewski’s User Type Reverse Analysis Tool and
              brainstorming techniques like Crazy 8s, we identified game
              elements that would appeal to each persona type. We then
              prioritised these elements based on their potential impact on
              engagement and ease of implementation.
            </P>
          </div>
        </div>
      </Section>

      {/* ------------------------------ 07 User flows --------------------------- */}
      <Section n="07" label="User flows" tone="muted">
        <H2>The Gamification Flows</H2>
        <P className="mt-8 max-w-4xl">
          To ensure a seamless and intuitive experience for the users of our
          platform, we mapped the user journey of each gamification metric that
          would help users navigate effortlessly and quickly.
        </P>
        <H4 className="mt-12">Global entities</H4>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <FlowFig
            name="gm-entry"
            w={615}
            h={260}
            alt="Onboarding assigns XP, sends a welcome greeting and schedules drip communication; landing on the profile page shows the gamification menus"
            minWidth={520}
          />
          <FlowFig
            name="gm-xp"
            w={816}
            h={271}
            alt="Assigning XP feeds badges, level (and avatar), easter eggs, streak, challenges and the monthly eco-score level"
            minWidth={620}
          />
        </div>
        <H4 className="mt-14">Contract entities</H4>
        <div className="mt-6 grid items-start gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-sm font-medium opacity-70">Goals</p>
            <FlowFig name="gm-goals" w={250} h={625} alt="Goals flow: set up, choose type, configure, start and end a goal" />
          </div>
          <div>
            <p className="mb-3 text-sm font-medium opacity-70">Challenges</p>
            <FlowFig name="gm-challenges" w={236} h={642} alt="Challenges flow: set up, assign type, configure, start and end a challenge" />
          </div>
          <div>
            <p className="mb-3 text-sm font-medium opacity-70">Levels and rewards</p>
            <FlowFig name="gm-levels" w={520} h={1010} alt="Levels flow: check user action, assign XP, unlock the next level and reward, claim the reward" />
          </div>
          <div>
            <p className="mb-3 text-sm font-medium opacity-70">Leaderboard</p>
            <FlowFig name="gm-leaderboard" w={458} h={652} alt="Leaderboard flow: monthly ranking, top three winners, email and physical rewards" />
          </div>
          <div>
            <p className="mb-3 text-sm font-medium opacity-70">Badges</p>
            <FlowFig name="gm-badges" w={493} h={532} alt="Badges flow: check user action, assign XP, unlock a badge, drip communication" />
          </div>
          <div>
            <p className="mb-3 text-sm font-medium opacity-70">Streak</p>
            <FlowFig name="gm-streak" w={461} h={532} alt="Streak flow: check event, increment streak count, break or achieve the streak" />
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <p className="mb-3 text-sm font-medium opacity-70">Feed</p>
            <FlowFig name="gm-feed" w={611} h={381} alt="Challenge end, next level, leaderboard winners, badges and streaks all push to the feed, which lists by time and can be shared" />
          </div>
        </div>
      </Section>

      {/* -------------------------- 08 Wireframes & testing --------------------- */}
      <Section n="08" label="Wireframe and prototypes" tone="tint">
        <H2>Developing wireframe and prototypes</H2>
        <P className="mt-8 max-w-4xl">
          We developed wireframes and interactive prototypes to visualize how
          gamified features would be integrated. These prototypes were tested
          with select tenants, and iterative feedback was used to enhance
          usability, engagement flows, and overall user experience.
        </P>
        <ScrollFig
          src={`${A}/wireframes.webp`}
          w={1615}
          h={829}
          alt="Low-fidelity wireframes for profile, challenges, goals, badges, rewards, leaderboard and arcade screens"
          minWidth={900}
          className="mt-10"
        />

        <H3 className="mt-16">Iterations after Prototype testing</H3>
        <P className="mt-4 max-w-4xl">
          During the prototype testing phase, several concrete pain points
          emerged based on tenant feedback. These issues were directly related
          to the usability, navigation, and user experience of the prototype.
          Below are the key problems identified along with the corresponding
          iterations:
        </P>
        <DataTable
          className="mt-8"
          headers={["Pain points", "Description", "Iterations"]}
          rows={iterations}
        />
      </Section>

      {/* ----------------------------- 09 Components ---------------------------- */}
      <Section n="09" label="Components">
        <TwoCol className="lg:items-start">
          <H2>The Gamification Components</H2>
          <div className="space-y-5">
            <P>
              The redesign process of the product’s visuals and features
              involved utilising the basic brand guidelines, which includes
              colours, fonts, and illustration styles that already established
              in the design system.
            </P>
            <P>
              We’re all added new components into the existing set of components
              in the design system that bolstered the brand identity and create
              a unified look.
            </P>
          </div>
        </TwoCol>
        <ScrollFig
          src={`${A}/component-library.webp`}
          w={1620}
          h={1118}
          alt="Gamification component library: level progress, cards, buttons and badges"
          minWidth={820}
          frame={false}
          className="mt-12"
        />

        <H2 className="mt-20 text-3xl sm:text-4xl">Some Gamification Elements</H2>

        {/* Game levels */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <H3>Game Levels</H3>
            <div className="mt-6">
              <Facts
                items={[
                  "**Mechanism:** Game levels guided users on a journey from beginner to expert, using experience points (XP) earned through everyday actions like energy-saving or challenge participation.",
                  "**Types:** Users started at a **Primitive Cave** and could level up to a **Cozy Cottage**, then onward to a **Luxurious Mansion**, and eventually to a **Grand Palace**.",
                  "**Progression:** To move up, users had to collect XP through regular engagement. With each level, they unlocked new rewards and features, making the journey feel rewarding and visually stimulating.",
                ]}
              />
            </div>
          </div>
          <Fig
            src={`${A}/game-levels.webp`}
            w={902}
            h={509}
            alt="Level screens: Primitive Cave, Cozy Cottage, Modern Villa, Luxurious Mansion and Grand Palace"
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </div>

        {/* Badges */}
        <div className="mt-16 grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <Fig
            src={`${A}/badges.webp`}
            w={864}
            h={522}
            alt="Repeating, special and milestone badges"
            sizes="(min-width: 1024px) 540px, 100vw"
            className="lg:order-1"
          />
          <div className="lg:order-2">
            <H3>Badges</H3>
            <div className="mt-6">
              <Facts
                items={[
                  "**Mechanism:** Badges served as visual milestones celebrating users’ achievements and consistent behaviours.",
                  "**Types:** There were **Repeating Badges** for hitting goals repeatedly, **Special Badges** for exceptional feats, and **Milestone Badges** for long-term achievements, like six months of energy-saving consistency.",
                  "**Progression:** Users earned badges by **meeting targets**, such as **energy reduction** over weeks or participating in **community activities**. Progressing meant upgrading badges, like going from **1 star** to **4 stars** as users kept hitting the same achievements.",
                ]}
              />
            </div>
          </div>
        </div>

        {/* Streaks */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <H3>Streaks</H3>
            <div className="mt-6">
              <Facts
                items={[
                  "**Mechanism:** Streaks reward consistency, highlighting each week a tenant stays within their energy goal.",
                  "**Types:** Streaks tied to a weekly consumption limit set by the tenant, and streaks shown alongside the Eco-Score on the home screen.",
                  "**Progression:** Every consecutive week extends the streak and unlocks the next one. Missing a week breaks it, nudging tenants to build a lasting habit.",
                ]}
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <figure>
              <Fig
                src={`${A}/streak-goal.webp`}
                w={426}
                h={325}
                alt="Weekly streak row above a consumption card showing 18 of a 20 kWh limit used"
                sizes="(min-width: 640px) 260px, 100vw"
                className="rounded-2xl"
              />
              <Caption>Streaks with Goal Settings</Caption>
            </figure>
            <figure>
              <Fig
                src={`${A}/streak-ecoscore.webp`}
                w={422}
                h={315}
                alt="Weekly streak row above an Eco-Score card showing an A rating"
                sizes="(min-width: 640px) 260px, 100vw"
                className="rounded-2xl"
              />
              <Caption>Streaks with Eco-Score on Home Screen</Caption>
            </figure>
          </div>
        </div>
      </Section>

      {/* ---------------------------- 10 Main features -------------------------- */}
      <Section n="10" label="Main Features" tone="dark" className="space-y-24 sm:space-y-32">
        <Feature
          title="Home & Consumption screens"
          image="phones-home"
          imageW={856}
          imageH={724}
          imageAlt="Consumption report, home screen with Earn Points with Challenges card, and heating report"
        >
          We revamped the home screen to introduce an &apos;eco-score,&apos;
          which rated tenants from A to F based on their consumption compared to
          others. Individual scores for electricity, water, and heating also
          motivate better usage habits. Streaks were added to highlight when
          tenants met their goals, while quick challenge cards on the home
          screen made energy-saving activities more engaging. On the report
          page, tenants could see how many trees are needed to offset their
          energy consumption, adding a meaningful visual impact.
        </Feature>
        <Feature
          title="Community Challenges"
          image="phones-challenges"
          imageW={856}
          imageH={725}
          imageLeft
          imageAlt="Challenges list, a challenge detail with a Swipe To Join action, and challenge progress tracker"
        >
          Tenants participate in building-wide challenges, fostering a sense of
          community through collective goals, such as recycling initiatives or
          charity events.
        </Feature>
        <Feature
          title="Personalised Rewards"
          image="phones-rewards"
          imageW={856}
          imageH={724}
          imageAlt="Rewards wallet, Your Journey profile with level progress, and an Amazon gift card raffle"
        >
          The users were incentivised to unlock new levels to reach rewards.
          These were tailored to individual tenant behaviour, offering
          incentives like discounts, badges, and local partnerships based on
          engagement patterns.
        </Feature>
        <Feature
          title="Engagement & Community Elements"
          image="phones-community"
          imageW={856}
          imageH={724}
          imageLeft
          imageAlt="Badge page, monthly leaderboard, and an Easter egg found screen"
        >
          We introduced various fun elements such as leaderboards, Easter eggs,
          and badges. Leaderboards fostered healthy competition, Easter eggs
          offered surprise rewards, and badges recognised achievements, making
          the tenant experience more interactive and enjoyable.
        </Feature>
      </Section>

      {/* ------------------------------ 11 Strategies --------------------------- */}
      <Section n="11" label="Strategies">
        <TwoCol className="lg:items-start">
          <div>
            <H2>Solution &amp; Strategy to Drive Engagement</H2>
            <P className="mt-8">
              Our strategy involved continuously refining the engagement flows
              based on user feedback and engagement metrics. We utilized
              Mixpanel to track user behavior and iterated on features that
              showed lower engagement.
            </P>
            <H3 className="mt-12">Multiple Engagement Flows for Testing</H3>
            <P className="mt-3">
              We tested multiple engagement flows using an A/B testing method:
            </P>
            <ul className="mt-3 space-y-1 text-base opacity-80 sm:text-lg">
              <li>
                <Rich>**Flow A:** Focused on individual rewards and achievement badges.</Rich>
              </li>
              <li>
                <Rich>**Flow B:** Emphasised community challenges and leaderboards.</Rich>
              </li>
            </ul>
            <H3 className="mt-12">Testing of the Strategy/Metrics</H3>
            <P className="mt-3">
              We conducted A/B tests to compare the different engagement flows
              and measured success using metrics such as the 7-day engagement
              rate, feature adoption, and user satisfaction.
            </P>
          </div>
          <Fig
            src={`${A}/mixpanel.webp`}
            w={790}
            h={955}
            alt="Mixpanel report comparing user landings across two weeks as grouped bars"
            sizes="(min-width: 1024px) 520px, 100vw"
            className={cn("rounded-2xl", darkInvert)}
          />
        </TwoCol>
      </Section>

      {/* ------------------------------- Feedback ------------------------------- */}
      <Section tone="dark" id="feedback" className="text-center">
        <H2>User feedback from our awesome tenant community</H2>
        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-80">
          Surveys conducted post-launch indicated several positive comments from
          tenants about the gamified features.
        </p>
        <ul className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="rounded-3xl bg-white p-6 text-neutral-900"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={`${A}/avatar-${t.avatar}.webp`}
                  width={75}
                  height={75}
                  alt=""
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-medium leading-tight">{t.name}</p>
                  <p className="text-sm text-neutral-600">{t.meta}</p>
                </div>
              </div>
              <blockquote className="mt-4 leading-relaxed text-neutral-700">
                {t.quote}
              </blockquote>
            </li>
          ))}
        </ul>
      </Section>

      {/* ------------------------------- 12 Outcomes ---------------------------- */}
      <Section n="12" label="Outcomes" tone="tint">
        <H2>Outcomes</H2>
        <P className="mt-8 max-w-4xl">
          The outcomes of our gamification strategy clearly demonstrate the
          positive impact on tenant engagement, utility consumption, and
          community involvement. These results show that gamification not only
          increased user interaction but also contributed tangible financial
          benefits, making it a valuable addition to the property management
          experience.
        </P>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <NumberCard n="01" title="Increased Engagement">
            <Rich>
              After three months, the 7-day engagement rate increased by **42%,
              significantly exceeding our initial target of 25%**. Tenants who
              interacted with gamification features logged in nearly twice as
              often as those who did not.
            </Rich>
          </NumberCard>
          <NumberCard n="02" title="Enhanced Feature Utilization">
            <Rich>
              Participation in **community challenges rose by 58%**, and
              **maintenance issue reporting increased by 35%**, contributing to
              an overall improvement in property upkeep and tenant satisfaction.
            </Rich>
          </NumberCard>
          <NumberCard n="03" title="Utility Consumption Reduction">
            <Rich>
              A study conducted by the Hasso Plattner Institute in Potsdam
              measured the effectiveness of our gamification strategy to reduce
              consumption. It found that increased engagement led to a **9%
              reduction in utility consumption** across the property. For 2,027
              apartments, this equated to an average saving of **€47 per
              apartment annually**, resulting in a total saving of
              approximately €95,269. From an **ROI** perspective, this
              increased the return on investment for our customers **from 2.4X
              to 3.4X**.
            </Rich>
          </NumberCard>
        </div>
      </Section>

      {/* ------------------------------ Impact model ---------------------------- */}
      <Section id="impact-model" n="13" label="Impact model" tone="muted">
        <H2>What the results are worth: an interactive model</H2>
        <P className="mt-8 max-w-4xl">
          The published savings came from one property. Change the inputs to
          see what the same engagement lift could mean for another.
        </P>
        <div className="mt-10">
          <GamificationCalculator />
        </div>
      </Section>


      {/* ------------------------------ 13 Conclusion --------------------------- */}
      <Section n="14" label="Conclusion and Next Steps" tone="indigo">
        <H2>Conclusion</H2>
        <P className="mt-8 max-w-4xl">
          The introduction of gamification features in our tenant app
          successfully boosted user engagement and enhanced the overall user
          experience. By tapping into intrinsic motivations such as achievement,
          competition, and community, we were able to foster a more interactive
          and connected tenant environment. Moving forward, we plan to further
          refine these features, focusing on personalization and expanding the
          rewards system to cater to a broader range of tenant interests.
        </P>
        <H2 className="mt-16">Next Steps</H2>
        <div className="mt-8 max-w-4xl space-y-5">
          <P>
            <Rich>
              **Personalised Challenges:** Develop AI-driven challenges that
              cater to individual tenant preferences, further enhancing the
              personalized experience.
            </Rich>
          </P>
          <P>
            <Rich>
              **Community Events:** Expand the scope of community-driven quests
              to involve more real-life interactions, such as building-wide
              events or eco-friendly initiatives.
            </Rich>
          </P>
          <P>
            <Rich>
              **Continuous Feedback Loop:** Maintain regular surveys and focus
              groups to keep refining the gamified elements based on tenant
              needs and preferences.
            </Rich>
          </P>
        </div>
      </Section>
    </CaseStudyPage>
  );
}
