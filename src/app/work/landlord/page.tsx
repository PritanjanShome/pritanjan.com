import {
  Card,
  CaseStudyPage,
  DataTable,
  Fig,
  H1,
  H2,
  H3,
  H4,
  Lane,
  NumberCard,
  P,
  alwaysInvert,
  darkInvert,
  Rich,
  ScrollFig,
  Section,
  TicketCard,
  TwoCol,
} from "@/components/case-study/ui";
import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const M = "/case-studies/move-out";

export const metadata: Metadata = {
  title: "Optimising & Streamlining the Move-Out Process",
  description:
    "A digital move-out feature for student housing that saved €77,840 and lifted pre-move-out completion by 65%.",
  openGraph: {
    title: "Optimising & Streamlining the Move-Out Process",
    description:
      "A digital move-out feature for student housing that saved €77,840 and lifted pre-move-out completion by 65%.",
    type: "article",
    images: [{ url: "/MoveOut.png" }],
  },
};

/* ------------------------------- content ---------------------------------- */

const stakeholderRows: ReactNode[][] = [
  [
    "Initiate Pre-Moveout",
    "-",
    "Notify tenants and schedule preliminary move-out activities.",
    "-",
    "Receive notifications to initiate pre-moveout activities.",
  ],
  [
    "Complete Pre-Moveout Checklist",
    "-",
    "Review submitted checklists and handle any discrepancies or issues.",
    "-",
    "Complete and submit the checklist detailing the condition of the apartment.",
  ],
  [
    "Schedule and Confirm Move-Out Dates",
    "-",
    "Directly interact with tenants to finalise move-out dates.",
    "-",
    "Agree upon and confirm the scheduled dates for move-out.",
  ],
  [
    "Move-Out Day Operations",
    "-",
    "Supervise the move-out process, ensuring all activities are conducted smoothly.",
    "Execute cleaning and repairs as per the finalised checklist.",
    "Perform final move-out duties including property handover.",
  ],
  [
    "Post Move-Out Assessments",
    "Oversee the assessment of the property and documentation of its condition.",
    "Ensure all documentation is complete and stored appropriately.",
    "-",
    "-",
  ],
  [
    "Post Move-Out Assessments",
    "Process security deposits and finalise the tenant's account.",
    "-",
    "-",
    "Provide bank details for the deposit return and confirm the closure of their tenancy agreement.",
  ],
];

type Persona = {
  photo: string;
  name: string;
  meta: string;
  bio: string;
  details: [string, string][];
  goalsTitle: string;
  goals: string[];
  pains: string[];
  traits: string[];
  scenarios: string[];
};

const personas: Persona[] = [
  {
    photo: "thomas",
    name: "Thomas King",
    meta: "49 / Male",
    bio: "Thomas has over 20 years of experience in property management, overseeing multiple residential complexes. He is focused on maximizing property value and ensuring smooth operations to boost profitability.",
    details: [
      ["Age", "49 y.o."],
      ["Name", "Thomas King"],
      ["Occupation", "Senior Property Manager"],
      ["Location", "Berlin, Germany"],
      ["Education", "Master’s in operations"],
    ],
    goalsTitle: "Professional Goals",
    goals: [
      "Enhance property value through diligent maintenance and upgrades.",
      "Achieve cost efficiencies in operations and maintenance.",
      "Improve tenant satisfaction and retention rates.",
    ],
    pains: [
      "High maintenance costs and managing budgets.",
      "Coordinating with various teams for efficient move-outs and repairs.",
      "Ensuring all property data is accurately reported for compliance and decision-making.",
    ],
    traits: [
      "Decisive",
      "Strategic",
      "Technologically Savvy",
      "Leadership",
      "Communication",
    ],
    scenarios: [
      "Preparing annual property performance reports that reflect maintenance status and profitability.",
      "Handling emergency maintenance issues efficiently to minimize tenant disruption and property damage.",
    ],
  },
  {
    photo: "lisa",
    name: "Lisa Moreno",
    meta: "38 / Female",
    bio: "Lisa coordinates day-to-day operations and is the main point of contact for tenants during the move-out process. She prides herself on maintaining high standards for property readiness.",
    details: [
      ["Age", "38 y.o."],
      ["Name", "Lisa Moreno"],
      ["Occupation", "Operations Manager"],
      ["Location", "Berlin, Germany"],
      ["Education", "Bachelor’s in administration"],
    ],
    goalsTitle: "Professional Goals",
    goals: [
      "Streamline the move-out and move-in processes to minimize vacancy periods.",
      "Maintain excellent communication between tenants and the maintenance team.",
    ],
    pains: [
      "Frequent scheduling conflicts and last-minute changes.",
      "Miscommunications leading to inefficiencies and tenant dissatisfaction.",
    ],
    traits: ["Proactive", "Organized", "Communicative", "Patient", "Problem Solver"],
    scenarios: [
      "Coordinating multiple move-outs in a single day, ensuring each is executed smoothly.",
      "Dealing with tenant complaints regarding move-out schedules or property conditions.",
    ],
  },
  {
    photo: "michael",
    name: "Michael Johnson",
    meta: "32 / Male",
    bio: "Michael leads a team responsible for the cleaning and repair tasks necessary for apartment turnovers. He is committed to high-quality standards and quick turnarounds.",
    details: [
      ["Age", "32 y.o."],
      ["Name", "Michael Johnson"],
      ["Occupation", "Head of Maintenance"],
      ["Location", "Berlin, Germany"],
      ["Education", "Technical Diploma"],
    ],
    goalsTitle: "Professional Goals",
    goals: [
      "Ensure all apartments are impeccably clean and fully functional for new tenants.",
      "Improve team efficiency and job satisfaction through better resource management.",
    ],
    pains: [
      "Short lead times and high expectations for apartment readiness.",
      "Limited resources and occasional shortages of necessary supplies.",
    ],
    traits: [
      "Hands-on",
      "Efficient",
      "Stress Management",
      "Team Player",
      "Resourceful",
    ],
    scenarios: [
      "Preparing multiple apartments for new tenants in a single day under tight deadlines.",
      "Managing unexpected repair issues while keeping to the move-out schedule.",
    ],
  },
  {
    photo: "emily",
    name: "Emily Carter",
    meta: "27 / Female",
    bio: "Emily is a young professional who values transparency and efficiency in her interactions with property management. She expects clear communication and a hassle-free move-out process.",
    details: [
      ["Age", "27 y.o."],
      ["Name", "Emily Carter"],
      ["Occupation", "Marketing Professional"],
      ["Location", "Wernigerode, Germany"],
      ["Education", "Bachelor’s in Marketing"],
    ],
    goalsTitle: "Goals",
    goals: [
      "Successfully relocate to a new apartment without disputes or unexpected costs.",
      "Ensure the move-out process is handled fairly, particularly concerning the security deposit.",
    ],
    pains: [
      "Unclear move-out procedures and unexpected costs that arise during the process.",
      "Concerns about the full return of the security deposit and the fairness of damage assessments.",
    ],
    traits: [
      "Responsible",
      "Digital Native",
      "Technologically Savvy",
      "Concerned",
      "Communication",
    ],
    scenarios: [
      "Completing the pre-moveout checklist and scheduling the final inspection.",
      "Resolving discrepancies in the move-out report to ensure a fair deposit return.",
    ],
  },
];

const rice: [string, number, number, number, number, string][] = [
  ["Pre-moveout process for tenant assessment", 10, 10, 90, 15, "60"],
  ["Flexible move-out scheduling with tenant input", 9, 9, 80, 20, "32.4"],
  ["Standardization of damage and cleaning charges", 8, 8, 70, 10, "44.8"],
  ["Mandatory tenant bank details collection", 7, 8, 85, 15, "39.2"],
  ["Inventory mapping and damage assessment", 8, 7, 90, 25, "20.16"],
  ["Automated scheduling and notification system", 6, 9, 80, 30, "14.4"],
  ["Training modules for move-out procedures", 5, 8, 75, 40, "7.5"],
];

const issues: string[][] = [
  [
    "Overwhelming Pre-moveout Process",
    "Tenants found the comprehensive pre-moveout checklist overwhelming.",
    "The requirement to check every inventory item and space in the apartment was too demanding.",
    "This could lead to poor completion rates and inaccurate reporting.",
  ],
  [
    "Cleaning Charges Confusion",
    "Landlords expressed confusion about cleaning charges across different property types.",
    "Lack of standardization made it difficult to quickly assign appropriate cleaning costs.",
    "This caused inconsistencies in charging and increased the time needed for move-out processing",
  ],
  [
    "Bank Details Collection Bottleneck",
    "Collecting bank details during final move-out created time delays",
    "Particularly problematic during peak periods with multiple move-outs.",
    "Created a ripple effect of delays throughout the day's scheduled move-outs.",
  ],
  [
    "Rigid Scheduling System",
    "Strict time-specific scheduling led to cascading delays",
    "A single delayed move-out affected all subsequent appointments.",
    "Created stress for both property managers and tenants.",
  ],
];

const solutions: string[][] = [
  [
    "Streamlined Pre-moveout Flow",
    "Redesigned the pre-moveout process to focus on essential questions",
    "Made detailed reporting optional while maintaining key health checks",
    "Better completion rates while still gathering crucial apartment condition data",
  ],
  [
    "Standardized Cleaning Charges",
    "Introduced a session-based cleaning charge structure",
    "Created a dashboard feature where landlords could pre-set cleaning charges for different property types",
    "More consistent and efficient cleaning cost assignments",
  ],
  [
    "Proactive Bank Information Collection",
    "Moved bank detail collection to the pre-moveout phase",
    "Integrated bank information requests into the initial pre-moveout flow",
    "Eliminated a major bottleneck from the final move-out day",
  ],
  [
    "Flexible Time Slot System",
    "Replaced specific times with 3-hour time slots.",
    "Created broader time windows for move-out scheduling",
    "Better buffer for delays and more realistic scheduling expectations",
  ],
];

const tradeoffs = [
  {
    title: "The Standardisation Dilemma",
    body: "One of our most complex challenges was finding the sweet spot between standardization and customization. Our team recognized that while standardized processes could greatly improve efficiency, every property has its unique characteristics. We had to carefully consider how much flexibility to build into the system. The solution? We created a framework that standardized core processes while allowing property managers to customize certain elements to meet their specific needs. It wasn't perfect, but it struck a balance that worked for most situations.",
  },
  {
    title: "Privacy in the Digital Age",
    body: "In today's data-driven world, the tension between comprehensive data collection and privacy protection became a central concern. Our system needed detailed information to function effectively – from damage reports to communication logs. However, with GDPR compliance as a non-negotiable requirement, we had to carefully design our data management systems. Every piece of data we collected needed clear justification and proper protection protocols.",
  },
  {
    title: "The Human Factor",
    body: "Perhaps one of our most interesting challenges was managing the human aspect of technological change. While we were excited about the potential of our digital solution, we knew that implementing new technology would require significant adaptation from staff who were comfortable with existing processes. We had to balance the short-term disruption of change against the long-term benefits of modernisation. This meant creating intuitive interfaces and comprehensive training programs to ease the transition.",
  },
  {
    title: "Automation's Double Edge",
    body: "Finally, we struggled to strike balance between automation and human oversight. While automation promised increased efficiency and reduced errors, we recognised that some situations require human judgment and flexibility. We designed our system to automate routine tasks while preserving human oversight for complex decisions and exceptional cases. This hybrid approach helped us maintain efficiency without sacrificing the ability to handle unique situations appropriately.",
  },
];

const outcomes = [
  {
    title: "€19,200 saved in labour cost",
    body: "Prior to our solution, our client struggled with seasonal staffing challenges. Every peak move-out period, they hired six temporary workers just to manage the paperwork and coordination. \"We were spending a fortune on training temporary staff, only to lose them after the rush,\" their operations manager had told us. After implementing our digital system, they completely eliminated the need for seasonal hires, saving €19,200 in direct labour costs. More importantly, their permanent staff reported feeling more confident and in control of the process.",
  },
  {
    title: "€50,000 in OpEx",
    body: "The transformation in daily operations was immediate. Where their staff previously spent 35 minutes processing each move-out, they now completed the same tasks in under 10 minutes. \"It's like night and day,\" their property manager shared. \"We used to have queues of frustrated students waiting. Now everything flows smoothly.\" This efficiency wasn't just about time – it translated to €50,000 in labour cost savings across their properties.",
  },
  {
    title: "Tenant pre-move-out completion rates jumped by 65%",
    body: "One of the most exciting improvements came in tenant engagement. Their pre-move-out completion rates jumped by 65%. \"Before, we were lucky if half our tenants completed their pre-move-out checks,\" their tenant coordinator recalled. \"Now, most of them do it without prompting.\" This proactive participation meant their maintenance team could better plan repairs and their cleaning crews could schedule more efficiently.",
  },
  {
    title: "Delayed Move-in cost reduced to only €360",
    body: "Perhaps the most unexpected improvement came in their move-in schedule reliability. Previously, they had struggled with 200 units facing move-in delays due to incomplete or problematic move-outs, costing them €9,000 in lost rental income. After our implementation, this number plummeted to just 8 units, with losses of only €360. \"We used to dread the start of each semester,\" their financial controller admitted. \"Now we look forward to showing new tenants their perfectly prepared apartments.\"",
  },
];

/* ---------------------------- small local parts --------------------------- */

function Bullets({
  items,
  ordered,
}: {
  items: string[];
  ordered?: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={
        ordered
          ? "list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground"
          : "list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground"
      }
    >
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </Tag>
  );
}

function PersonaCard({ p }: { p: Persona }) {
  return (
    <Card className="grid gap-8 lg:grid-cols-3 lg:gap-0 lg:p-0">
      <div className="lg:p-8">
        <div className="flex items-center gap-4">
          <Image
            src={`${M}/persona-${p.photo}.webp`}
            width={85}
            height={85}
            alt={`Portrait of ${p.name}`}
            className="size-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold leading-tight">{p.name}</h3>
            <p className="text-sm text-muted-foreground">{p.meta}</p>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          {p.bio}
        </p>
        <h4 className="mt-6 font-semibold text-indigo-500">Details</h4>
        <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
          {p.details.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="font-medium">{k}:</dt>
              <dd className="text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="space-y-6 border-t pt-8 lg:border-l lg:border-t-0 lg:p-8">
        <div>
          <h4 className="mb-3 font-semibold text-indigo-500">{p.goalsTitle}:</h4>
          <Bullets items={p.goals} ordered />
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-indigo-500">Pain Points:</h4>
          <Bullets items={p.pains} />
        </div>
      </div>

      <div className="space-y-6 border-t pt-8 lg:border-l lg:border-t-0 lg:p-8">
        <div>
          <h4 className="mb-3 font-semibold text-indigo-500">
            Behavioral Traits:
          </h4>
          <ul className="flex flex-wrap gap-2">
            {p.traits.map((t) => (
              <li
                key={t}
                className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-indigo-500">Scenarios:</h4>
          <Bullets items={p.scenarios} />
        </div>
      </div>
    </Card>
  );
}

function Competitor({
  logo,
  logoW,
  logoH,
  name,
  url,
  what,
  edge,
}: {
  logo: string;
  logoW: number;
  logoH: number;
  name: string;
  url: string;
  what: string;
  edge: string;
}) {
  return (
    <Card className="flex flex-col">
      <div className="flex h-12 items-center">
        <Image
          src={`${M}/${logo}.webp`}
          width={logoW}
          height={logoH}
          alt={`${name} logo`}
          className="h-auto max-h-10 w-auto rounded-sm bg-white"
        />
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight">{name}</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 break-all text-xs text-muted-foreground underline underline-offset-4"
      >
        {url}
      </a>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        {what}
      </p>
      <h4 className="mt-6 text-sm font-semibold">Competitive Edge</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {edge}
      </p>
    </Card>
  );
}

function PainCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 text-sm font-medium">Pain Point</p>
      <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-base leading-relaxed text-muted-foreground">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ol>
    </Card>
  );
}

/* -------------------------------- page ------------------------------------ */

export default function MoveOutCaseStudy() {
  return (
    <CaseStudyPage>
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="w-full overflow-hidden bg-[#202024] text-white">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-6 pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-0 lg:pt-28">
          <div className="pb-2 lg:pb-24">
            <Image
              src={`${M}/resi-logo.webp`}
              width={180}
              height={55}
              alt="Resi"
              className={cn("mb-8 h-10 w-auto sm:h-12", alwaysInvert)}
            />
            <H1>Streamlining the Move-Out Process</H1>
            <p className="mt-6 text-xl opacity-80 sm:text-2xl">
              Enhancing Tenant Experience and Operational Efficiency
            </p>
          </div>
          <div className="-mx-6 lg:mx-0 lg:-mr-24">
            <Fig
              src={`${M}/hero-skyline.webp`}
              w={1410}
              h={395}
              alt="Illustration of a city skyline of blue apartment buildings"
              priority
              sizes="(min-width: 1024px) 700px, 100vw"
              className={cn(
                "h-52 object-cover object-right sm:h-72 lg:h-[22rem]",
                alwaysInvert,
                "[-webkit-mask-image:linear-gradient(to_right,transparent,black_22%)] [mask-image:linear-gradient(to_right,transparent,black_22%)]"
              )}
            />
          </div>
        </div>
      </section>

      {/* ------------------------------ 01 Problem ------------------------------ */}
      <Section n="01" label="Problem">
        <H2>The Problem</H2>
        <P className="mt-8 max-w-4xl">
          As the product designer and manager at Retrac, I was tasked with
          enhancing our flagship feature which digitalises the move-in and
          move-out processes for student accommodations. Managing mass move-outs
          efficiently is critical for large student accommodation owners as it
          directly affects their Net Operating Income (NOI).
        </P>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <H3>Background</H3>
            <P className="mt-4">
              Retrac is a property management platform for landlords to manage
              student accommodations. Of the many features Retrac offers,
              move-in and move-out processes are its flagship. These processes
              are crucial, as they ensure operational efficiency and
              significantly affect landlords&apos; net operating income (NOI).
              In Germany, most student move-outs occur between March and April
              and September and October, coinciding with the academic calendar.
            </P>
          </div>
          <div>
            <H3>Necessity</H3>
            <P className="mt-4">
              This feature is critical because of its direct impact on
              profitability, for example, 4 properties with 2000 units might
              experience 20-25 move-outs daily in September. Thus, Landlords
              face the seasonal challenge of handling mass move-outs, where
              traditional methods involve either hiring temporary workers—who
              require substantial training—or increasing permanent staff, both
              of which are costly and impact margins.
            </P>
          </div>
        </div>
      </Section>

      {/* ----------------------------- 02 Questions ----------------------------- */}
      <Section n="02" label="Questions" tone="tint">
        <H2>Follow up questions</H2>
        <P className="mt-8">
          To guide our development process, we focused on finding answers to a
          key few questions first:
        </P>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <NumberCard n="01" title="Who is this feature for?">
            Primarily for landlords to optimize move-out operations, directly
            affecting their bottom line, while also simplifying the process for
            tenants, ensuring a smoother transition.
          </NumberCard>
          <NumberCard n="02" title="What is the business impact?">
            Optimizing move-outs influences several business aspects. Improper
            planning can lead to unnecessary hiring, additional costs, and
            potential revenue loss if apartments are not ready for new tenants.
            Thus, efficient scheduling and damage reporting will save time and
            money, while bulk repair planning ensures competitive quotes from
            service providers.
          </NumberCard>
          <NumberCard n="03" title="Frequency of move-outs in a property?">
            Especially in student accommodations, move-outs are frequent and
            seasonal, with days where over 20-25 move-outs might occur (per
            employee), stressing the need for efficient digital processes.
          </NumberCard>
          <NumberCard n="04" title="Level of user training needed">
            Peak seasons bring temporary workers and new hires who need to be
            productive quickly. The feature had to be intuitive enough for them
            to run move-outs with minimal training, supported by in-app
            guidance and short training modules for move-out procedures.
          </NumberCard>
        </div>
      </Section>

      {/* ------------------------------- 03 Goals ------------------------------- */}
      <Section n="03" label="Goals" tone="indigo">
        <H2>Goals</H2>
        <P className="mt-8">
          Based on our analysis, we set four primary goals to solve this
          problem.
        </P>
        <ol className="mt-10 max-w-4xl list-decimal space-y-3 pl-8 text-2xl font-semibold leading-snug tracking-tight sm:text-4xl sm:leading-tight">
          <li>Reduce operational redundancies.</li>
          <li>Enhance the tenant experience during move-out.</li>
          <li>Provide early assessments of apartment conditions.</li>
          <li>
            Offer insights for follow-up tasks to minimise downtime before the
            next move-in.
          </li>
        </ol>
      </Section>

      {/* --------------------------- 04 Terminologies --------------------------- */}
      <Section n="04" label="Terminologies">
        <TwoCol className="lg:items-start">
          <div>
            <H2>Few terminologies</H2>
            <P className="mt-8">
              To ensure clarity across our team and with stakeholders, we
              defined key terms. This made sure that we all referred to the same
              jargon while understanding the steps further.
            </P>
            <dl className="mt-10 space-y-8">
              {[
                ["Inventory", "Movable items like furniture, appliances, and fixtures."],
                [
                  "Space Types",
                  "Immovable structural elements like doors, walls, ceilings, and windows.",
                ],
                [
                  "Pre-moveout Report",
                  "A document created by tenants detailing the existing condition of the apartment.",
                ],
                [
                  "Statuses for Landlords",
                  "Categories like Pending, Scheduled, and Completed for tracking move-out processes.",
                ],
              ].map(([term, def]) => (
                <div key={term}>
                  <dt className="text-xl font-semibold">{term}</dt>
                  <dd className="mt-2 opacity-80">{def}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Fig
            src={`${M}/terminology-building.webp`}
            w={447}
            h={623}
            alt=""
            sizes="400px"
            className={cn("mx-auto hidden max-w-sm lg:block", darkInvert)}
          />
        </TwoCol>
      </Section>

      {/* ----------------------------- 05 Competitors --------------------------- */}
      <Section n="05" label="Competitors" tone="tint">
        <H2>Our Competitors</H2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Competitor
            logo="logo-turbotenant"
            logoW={120}
            logoH={48}
            name="TurboTenant"
            url="https://www.turbotenant.com/"
            what="Offers digital move-in/move-out reports with photo evidence to resolve disputes and streamline the inspection process."
            edge="Strong in documenting the property state but may not provide real-time scheduling and interactive move-out coordination."
          />
          <Competitor
            logo="logo-rentec"
            logoW={150}
            logoH={42}
            name="Rentec Direct"
            url="https://www.rentecdirect.com/"
            what="Provides mobile rental inspection capabilities which facilitate the move-in and move-out processes with inspection checklists."
            edge="Focuses on inspections but less on integrated scheduling and tenant-landlord communication throughout the move-out process."
          />
          <Competitor
            logo="logo-zillow"
            logoW={100}
            logoH={42}
            name="Zillow Rental Manager"
            url="https://www.zillow.com/rental-manager/"
            what="Helps manage listings, collects rent, and provides a tenant move-out checklist to track the condition of rental properties."
            edge="Provides a broad platform but may not offer the deep customization and tenant-specific features that facilitate a personalised move-out experience."
          />
        </div>
      </Section>

      {/* ----------------------------- 06 Stakeholders -------------------------- */}
      <Section n="06" label="Stakeholders">
        <H2>Stakeholders and User segments</H2>
        <div className="mt-8 max-w-4xl space-y-4">
          <P>
            To solve the problem, it was very important to know all the
            stakeholders of the move-out process and we listed them in primarily
            4 different types.
          </P>
          <P>
            <Rich>
              **Landlord/operation/ client heads:** Focused on maintaining the
              overall health of property inventory for accurate annual reporting
              and efficient bulk ordering, reducing the need for extensive
              hiring and training.
            </Rich>
          </P>
          <P>
            <Rich>
              **Operation house masters:** They manage daily operations,
              coordinate move-out dates, and ensure that the property is
              prepared for new tenants while handling multiple move-outs per
              day.
            </Rich>
          </P>
          <P>
            <Rich>
              **Cleaning and repair staff:** Quickly prepare apartments for new
              tenants, often with minimal lead time.
            </Rich>
          </P>
          <P>
            <Rich>
              **Tenants:** Need a smooth and well-organized move-out process to
              minimize disruption during this transitional period.
            </Rich>
          </P>
        </div>

        <H3 className="mt-16">Digital Move-Out Process Flow (Stakeholder map)</H3>
        <P className="mt-4 max-w-4xl">
          A detailed stakeholder map outlines the responsibilities and
          interactions of each group. This helped us break down individual steps
          of the moveout process for our biggest client.
        </P>
        <DataTable
          wide
          className="mt-8"
          headers={[
            "The general flow",
            "Landlord/ operation heads",
            "Operation house masters",
            "Cleaning and repair staff",
            "Tenants",
          ]}
          rows={stakeholderRows}
        />
      </Section>

      {/* ------------------------------ 07 Personas ----------------------------- */}
      <Section n="07" label="Stakeholder Persona" tone="tint">
        <H2>Stakeholder Persona</H2>
        <P className="mt-8 max-w-4xl">
          After each stakeholder of the move-out process was identified along
          with their roles in different steps of the move-out lifecycle, it was
          important to interview people from each stakeholder to define a
          persona and understand their pain points.
        </P>
        <div className="mt-12 space-y-6">
          {personas.map((p) => (
            <PersonaCard key={p.name} p={p} />
          ))}
        </div>
      </Section>

      {/* ------------------------- 08 Pain points & solutions ------------------- */}
      <Section n="08" label="Pain Points and Solutions" tone="muted">
        <H2>Pain points</H2>
        <P className="mt-8 max-w-4xl">
          After conducting multiple interviews with all the stakeholders, our
          team broke down the most important pain points in the current process
          and also we set a priority number for each of these pain points.
        </P>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <PainCard
            title="Landlord/Operation/Client Heads"
            items={[
              "No knowledge of the overall health of a property.",
              "Many move-ins do not happen on the scheduled move-in date.",
              "Inaccurate bank account details collected",
              "Non-standardized charges for damages and cleaning",
              "Need for additional hires during peak move-out periods",
              "Training new hires on move-out procedures",
            ]}
          />
          <PainCard
            title="Operation House Masters"
            items={[
              "Uncertainty about when to initiate move-out discussions.",
              "Challenges in deciding on move-out dates with tenants.",
              "Managing multiple move-outs on a single day.",
              "Uncertainty in charging for specific damages.",
              "Handling unexpected repair issues.",
              "Issues with accurately reporting bank details.",
            ]}
          />
          <PainCard
            title="Cleaning and Repair Staff"
            items={[
              "Lack of clarity on task assignments.",
              "Constant need for schedule coordination",
            ]}
          />
        </div>

        <H2 className="mt-24 text-3xl sm:text-4xl">Solutions Proposed</H2>
        <P className="mt-6 max-w-4xl">
          After listing all the pain points and their associated priority
          numbers, the team was ready to find solutions for the highest-priority
          pain points. The table below lists all the solutions to their
          corresponding pain points and also associates a number to prioritise
          the solution.
        </P>
        <div className="mt-10 grid items-start gap-4 md:grid-cols-3">
          <Lane>
            <TicketCard
              priority="Low"
              rank="Priority: 01"
              title="Pre-moveout process for tenant assessment"
              description="Ensures properties are maintained and ready for the next tenant while accessing the problems at the earliest."
              painPoint="No knowledge of the overall health of a property."
              ticket="RESI-176"
            />
            <TicketCard
              priority="Low"
              rank="Priority: 02"
              title="Flexible move-out scheduling with tenant input"
              description="Improves tenant satisfaction and operational efficiency."
              painPoint="No knowledge of the overall health of a property."
              ticket="RESI-177"
            />
          </Lane>
          <Lane>
            <TicketCard
              priority="Medium"
              rank="Priority: 04"
              title="Standardisation of damage and cleaning charges"
              description="Reduces disputes and streamlines billing processes."
              painPoint="Non-standardized charges for damages and cleaning."
              ticket="RESI-178"
            />
            <TicketCard
              priority="Medium"
              rank="Priority: 04"
              title="Inventory mapping and damage assessment"
              description="Provides clear guidelines for assessing apartment conditions."
              painPoint="Uncertainty in charging for specific damages."
              ticket="RESI-179"
            />
            <TicketCard
              priority="Medium"
              rank="Priority: 03"
              title="Mandatory tenant bank details collection"
              description="Ensures efficient and accurate processing of security deposits."
              painPoint="Inaccurate bank account details collected."
              ticket="RESI-180"
            />
          </Lane>
          <Lane>
            <TicketCard
              priority="High"
              rank="Priority: 05"
              title="Automated scheduling and notification system"
              description="Reduces the workload of managing multiple move-outs."
              painPoint="Managing multiple move-outs on a single day"
              ticket="RESI-181"
            />
            <TicketCard
              priority="High"
              rank="Priority: 06"
              title="Training modules for move-out procedures"
              description="Enhances the skill set and efficiency of new hires."
              painPoint="Training new hires on move-out procedures"
              ticket="RESI-181"
            />
          </Lane>
        </div>

        <H3 className="mt-16">Prioritisation of Solutions Using RICE Framework</H3>
        <DataTable
          numeric
          className="mt-8"
          headers={["Solution", "Reach", "Impact", "Confidence", "Effort", "RICE Score"]}
          rows={rice.map(([name, r, i, c, e, score]) => [
            name,
            r,
            i,
            c,
            e,
            <strong key="s" className="font-semibold text-foreground">
              {score}
            </strong>,
          ])}
        />
      </Section>

      {/* ------------------------------ 09 User flows --------------------------- */}
      <Section n="09" label="User flows">
        <H2>User Flow: Mapping the Journey</H2>
        <P className="mt-8 max-w-4xl">
          After prioritizing our solutions using the RICE matrix, our next
          crucial step was creating comprehensive user flows. This phase brought
          our tech and product teams together, allowing us to visualize the
          optimal path for each stakeholder. These flows served as the
          foundation for our low-fidelity prototypes, enabling us to test our
          solutions and iterate at the prototype stage while ensuring technical
          feasibility.
        </P>
        <H3 className="mt-14">Wireframe: Tenant app</H3>
        <ScrollFig
          src={`${M}/flow-tenant.webp`}
          w={895}
          h={935}
          alt="Tenant app flow: contract end date check, pre-moveout notification, time slot selection, pre-check, and landlord confirmation"
          minWidth={720}
          className="mt-6"
        />
        <H3 className="mt-14">Wireframe: Landlord app</H3>
        <ScrollFig
          src={`${M}/flow-landlord.webp`}
          w={1180}
          h={1745}
          alt="Landlord app flow: pending, scheduled and completed move-outs, room checks, damage tickets, charge summary and signatures"
          minWidth={900}
          className="mt-6"
        />
      </Section>

      {/* ----------------------------- 10 Wireframes ---------------------------- */}
      <Section n="10" label="Wireframe and prototypes" tone="tint">
        <H2>Developing wireframe and prototypes</H2>
        <P className="mt-8 max-w-4xl">
          After developing our initial prototype, my team and I conducted
          extensive testing sessions with all stakeholder groups. This phase
          proved invaluable, revealing several critical issues that needed
          addressing before the final implementation.
        </P>
        <H4 className="mt-12">Tenant app wireframe</H4>
        <ScrollFig
          src={`${M}/wireframes-tenant.webp`}
          w={1190}
          h={708}
          alt="Annotated low-fidelity wireframes of the tenant app move-out flow"
          minWidth={900}
          className="mt-4"
        />
        <H4 className="mt-12">Landlord app wireframe</H4>
        <ScrollFig
          src={`${M}/wireframes-landlord.webp`}
          w={1190}
          h={642}
          alt="Annotated low-fidelity wireframes of the landlord app move-out flow"
          minWidth={900}
          className="mt-4"
        />

        <H3 className="mt-16">Key Issues Discovered</H3>
        <P className="mt-3">
          During our testing phase, we identified four major challenges.
        </P>
        <DataTable
          wide
          className="mt-8"
          headers={["Issue", "Problem", "Pain point", "Impact"]}
          rows={issues}
        />

        <H3 className="mt-16">Iterative Solutions</H3>
        <P className="mt-3">
          Working closely with our development team, we implemented targeted
          solutions for each issue.
        </P>
        <DataTable
          wide
          className="mt-8"
          headers={["Solution", "Changes", "Implementation", "Result"]}
          rows={solutions}
        />
        <P className="mt-8 max-w-4xl">
          These iterations demonstrated the value of our user-centric design
          approach and agile development process. By actively listening to user
          feedback and quickly implementing solutions, we were able to transform
          potential roadblocks into opportunities for improvement. The final
          design not only addressed these specific issues but created a more
          robust and user-friendly system overall.
        </P>
      </Section>

      {/* ---------------------------- 11 Design process ------------------------- */}
      <Section n="11" label="Design process">
        <TwoCol className="lg:items-start">
          <H2>The Design process</H2>
          <div className="space-y-5">
            <P>
              The redesign process of the product’s visuals and features
              involved utilising the basic brand guidelines, which includes
              colours, fonts, and illustration styles that already established
              in the design system.
            </P>
            <P>
              <Rich>
                We’re all added new components into the existing set of
                components and used the principles of **Atomic Design** to
                develop the feature screens.
              </Rich>
            </P>
          </div>
        </TwoCol>

        <H3 className="mt-16">The Components Developed</H3>
        <ScrollFig
          src={`${M}/components.webp`}
          w={1190}
          h={650}
          alt="Component library: lists and cards, tabs, top bars, drop scroll, date tab, timeline, tags and snackbars"
          minWidth={820}
          frame={false}
          className="mt-6"
        />

        <H3 className="mt-16">Atomic Design</H3>
        <P className="mt-3">
          The principles of Atomic Design was used to develop the feature
          screens.
        </P>
        <ScrollFig
          src={`${M}/atomic-design.webp`}
          w={1190}
          h={1058}
          alt="Atomic design from atoms and molecules up to organisms, templates and pages"
          minWidth={820}
          frame={false}
          className="mt-6"
        />
      </Section>

      {/* ---------------------------- 12 Main features -------------------------- */}
      <Section n="12" label="The Main Features" tone="muted">
        <TwoCol className="lg:items-start">
          <H2>The Tenant App</H2>
          <P>
            <Rich>
              The Tenant App was designed with the goal of simplifying the
              tenant’s move-out experience while addressing key pain points
              identified during the research phase. The design process focused
              on creating **an intuitive interface and seamless workflows to
              reduce friction for tenants** during this transition.
            </Rich>
          </P>
        </TwoCol>
        <ScrollFig
          src={`${M}/app-tenant.webp`}
          w={1190}
          h={780}
          alt="Tenant app screens: home with Schedule Moveout card, date proposals, pre-move-out check, bank details and available time slots"
          minWidth={760}
          frame={false}
          className="mt-10"
        />

        <div className="mt-24">
          <TwoCol className="lg:items-start">
            <H2>The Landlord App</H2>
            <P>
              <Rich>
                The Landlord App was designed with a clear **focus on
                functionality to address the complex operational requirements**
                of landlords and property managers during the move-out process.
                The app prioritised **efficiency, control, and adaptability**,
                ensuring landlords have the tools they need to handle a variety
                of situations effectively.
              </Rich>
            </P>
          </TwoCol>
          <ScrollFig
            src={`${M}/app-landlord.webp`}
            w={1190}
            h={780}
            alt="Landlord app screens: move-outs by status, move-out review, room-by-room inventory check, charges and signatures"
            minWidth={760}
            frame={false}
            className="mt-10"
          />
        </div>
      </Section>

      {/* ---------------------------- 13 Considerations ------------------------- */}
      <Section n="13" label="Considerations" tone="tint">
        <H2>Impact and Design Considerations</H2>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <H3>Impact</H3>
            <div className="mt-6 space-y-8">
              <div>
                <H4>Data-Driven Insights:</H4>
                <ol className="mt-2 list-decimal space-y-2 pl-5 opacity-80">
                  <li>
                    <Rich>
                      **Enhanced Decision Making:** The aggregation and analysis
                      of move-out data provides valuable insights into common
                      issues and tenant behaviours, enabling property managers
                      to make informed decisions about maintenance and services.
                    </Rich>
                  </li>
                  <li>
                    By focusing on these design considerations, the digital
                    move-out feature not only simplifies the move-out process
                    but also builds a foundation for continuous improvement and
                    adaptation, ensuring long-term relevance and user
                    satisfaction.
                  </li>
                </ol>
              </div>
              <div>
                <H4>Operational Efficiency:</H4>
                <ol className="mt-2 list-decimal space-y-2 pl-5 opacity-80">
                  <li>
                    Reduced Processing Time: Streamlined workflows
                    significantly cuts down the time needed for managing
                    move-outs, enabling quicker turnovers and reducing periods
                    when the property is vacant.
                  </li>
                  <li>
                    Optimised Resource Utilisation: Clear scheduling and status
                    tracking allow for better allocation of cleaning and
                    maintenance services, optimising resource use and reducing
                    overhead costs.
                  </li>
                </ol>
              </div>
              <div>
                <H4>Tenant and Landlord Satisfaction</H4>
                <ol className="mt-2 list-decimal space-y-2 pl-5 opacity-80">
                  <li>
                    Transparent Interactions and mistake proofing: With upfront
                    cost displays for damages and easy-to-understand processes,
                    both tenants and landlords experience increased satisfaction
                    due to reduced misunderstandings and clearer
                    communications.
                  </li>
                  <li>
                    Empowerment Through Information: Providing users with tools
                    to manage their part of the move-out process empowers them,
                    enhancing their overall experience and satisfaction with the
                    management services.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <Fig
            src={`${M}/impact-building-1.webp`}
            w={447}
            h={603}
            alt=""
            sizes="400px"
            className={cn("mx-auto hidden max-w-sm lg:block", darkInvert)}
          />
        </div>

        <div className="mt-20 grid items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Fig
            src={`${M}/impact-building-2.webp`}
            w={447}
            h={630}
            alt=""
            sizes="400px"
            className={cn("mx-auto hidden max-w-sm lg:block", darkInvert)}
          />
          <div>
            <H3>Design considerations</H3>
            <div className="mt-6 space-y-8">
              <P>
                As the product head, I approached the move-out process design
                with a strong focus on user-centric principles. By incorporating
                key UX laws, we created an interface that minimised choices,
                chunked information effectively, and maintained familiar
                patterns. Our goal was to reduce cognitive load while ensuring
                complex tasks remained intuitive and manageable.
              </P>
              <div className="space-y-3">
                <H4>Minimising Choices Through Hick&apos;s Law</H4>
                <P className="!text-base">
                  One of our key design decisions was implementing context-aware
                  options to reduce user cognitive load:
                </P>
                <P className="!text-base">
                  When landlords needed to report issues during the moveout
                  inspection, the app presented options related to specific
                  parts of the apartment they were inspecting. For instance, if
                  selecting issues in the kitchen, only relevant options like
                  appliance damage or plumbing issues appear. On the contrary,
                  it was not mandatory for the tenant to check every inventory
                  during the pre-moveout process, but only raise issues for the
                  relevant ones.
                </P>
                <P className="!text-base">
                  This targeted approach significantly reduced decision fatigue
                  and improved accuracy in reporting.
                </P>
              </div>
              <div className="space-y-3">
                <H4>Implementing Miller&apos;s Law through Chunking</H4>
                <P className="!text-base">
                  We organised information into digestible groups to enhance
                  user comprehension. When damage report within the app, the
                  damage types were effectively grouped into categories such as
                  &apos;Damaged&apos;, &apos;not usable&apos;,
                  &apos;scratched&apos;, etc. Each inventory had its own list of
                  potential damage types, which made it easier for users to
                  quickly find and select the correct type of damage and
                  simplifying the reporting process.
                </P>
              </div>
              <div className="space-y-3">
                <H4>Leverage Familiar Design Patterns (Jakob’s Law)</H4>
                <P className="!text-base">
                  To minimise the learning curve, we incorporated familiar
                  design patterns such as a tabbed interface for navigating
                  between different stages of the move-out process
                  —&apos;Pending&apos;, &apos;Scheduled&apos;, and
                  &apos;Completed&apos;. This familiarity and clear segregation
                  of different stages of move-outs helped users intuitively
                  understand how to navigate the app, reducing the learning
                  curve and enhancing user efficiency.
                </P>
              </div>
              <div className="space-y-3">
                <H4>Progressive Disclosure</H4>
                <P className="!text-base">
                  To prevent information overload, we carefully timed the
                  presentation of information, for e.g. during the move-out
                  process, detailed information about cleaning procedures and
                  damage charges were displayed only after all the other rooms
                  were checked. This prevented the screen from being cluttered
                  with information until it is necessary, helping users to
                  manage one task at a time and reducing cognitive load.
                </P>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------ 14 Trade-offs --------------------------- */}
      <Section n="14" label="Trade-offs">
        <H2>Navigating Trade-offs: Finding the Right Balance</H2>
        <P className="mt-8 max-w-4xl">
          As we developed our digital move-out solution, our team faced several
          critical decisions that required careful balancing of competing
          priorities. Let me walk you through the key trade-offs we navigated
          and how we approached each one.
        </P>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
          {tradeoffs.map((t) => (
            <div key={t.title}>
              <H3>{t.title}</H3>
              <P className="mt-4 !text-base">{t.body}</P>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------ 15 Outcomes ----------------------------- */}
      <Section n="15" label="Outcomes" tone="indigo">
        <H2>Outcomes</H2>
        <P className="mt-8 max-w-4xl">
          When we implemented our digital move-out solution for one of our
          largest student housing clients managing 2,000+ units across four
          properties in Germany, we were confident in our solution but even we
          were surprised by the transformative impact.
        </P>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {outcomes.map((o, i) => (
            <NumberCard
              key={o.title}
              n={String(i + 1).padStart(2, "0")}
              title={o.title}
            >
              {o.body}
            </NumberCard>
          ))}
        </div>
        <p className="mt-14 text-2xl font-light sm:text-4xl">
          The Bottom Line Impact:{" "}
          <span className="font-bold">€77,840</span> in combined savings
        </p>
      </Section>

      {/* ----------------------------- 16 Conclusion ---------------------------- */}
      <Section n="16" label="Conclusion">
        <H2>Conclusion</H2>
        <div className="mt-8 max-w-4xl space-y-5">
          <P>
            The real success story wasn&apos;t just in the numbers. Our
            client&apos;s entire team reported feeling more empowered and
            professional. Their property managers gained real-time visibility
            into the move-out process. Staff stress levels decreased
            significantly during peak periods and tenant satisfaction scores
            improved.
          </P>
          <P>
            &quot;What impressed us most,&quot; their regional director shared
            during our six-month review, &quot;wasn&apos;t just the cost
            savings, though those were substantial. It was how the entire
            move-out experience was transformed from a dreaded administrative
            burden into a smooth, professional process that actually enhanced
            our brand reputation in the student housing market.&quot;
          </P>
          <P>
            This success story became a benchmark for our other clients,
            demonstrating how digital transformation could not only improve
            operational efficiency but also enhance the entire property
            management experience for all stakeholders involved. The client has
            since expanded the use of our platform to their newer properties,
            citing the move-out solution as a key factor in their decision to
            grow with us.
          </P>
        </div>
      </Section>
    </CaseStudyPage>
  );
}
