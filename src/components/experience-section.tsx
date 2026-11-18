import BlurFade from "@/components/magicui/blur-fade";
import {
  companyDuration,
  formatPeriod,
  roleDuration,
  type Company,
  type Role,
} from "@/lib/experience";
import { BLUR_FADE_DELAY, cn } from "@/lib/utils";
import Image from "next/image";
import { ExperienceCollapsible } from "./experience-collapsible";
import { RoleBody } from "./experience-role-body";

function Logo({ company }: { company: Company }) {
  const box =
    "flex size-12 flex-none items-center justify-center overflow-hidden rounded-md border bg-white";
  const inner = company.logoUrl ? (
    <Image
      src={company.logoUrl}
      alt={`${company.company} logo`}
      width={48}
      height={48}
      className="size-full object-contain p-1"
    />
  ) : (
    <span className="text-lg font-medium text-neutral-500">
      {company.company[0]}
    </span>
  );

  if (company.href && company.href !== "#") {
    return (
      <a
        href={company.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${company.company} website`}
        className={box}
      >
        {inner}
      </a>
    );
  }
  return <div className={box}>{inner}</div>;
}

function PresentPill() {
  return (
    <span className="flex-none rounded bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
      Present
    </span>
  );
}

function RoleHeading({
  role,
  subtitle,
}: {
  role: Role;
  subtitle?: string;
}) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-base font-semibold leading-snug">{role.title}</h4>
        {!role.end && <PresentPill />}
      </div>
      {subtitle && <p className="text-sm">{subtitle}</p>}
      <p className="text-sm text-muted-foreground">
        {formatPeriod(role)} · {roleDuration(role)}
      </p>
      {role.note && <p className="text-sm">{role.note}</p>}
      {role.location && (
        <p className="text-sm text-muted-foreground">{role.location}</p>
      )}
    </>
  );
}

function CompanyBlock({ company }: { company: Company }) {
  const multi = company.roles.length > 1;

  if (!multi) {
    const role = company.roles[0];
    const subtitle = [company.company, company.employmentType]
      .filter(Boolean)
      .join(" · ");
    return (
      <div className="flex gap-4">
        <Logo company={company} />
        <div className="min-w-0 flex-1">
          <RoleHeading role={role} subtitle={subtitle} />
          {company.location && !role.location && (
            <p className="text-sm text-muted-foreground">{company.location}</p>
          )}
          <RoleBody
            descriptions={role.descriptions}
            highlight={role.highlight}
          />
        </div>
      </div>
    );
  }

  const meta = [company.employmentType, companyDuration(company.roles)]
    .filter(Boolean)
    .join(" · ");

  return (
    <div>
      <div className="flex gap-4">
        <Logo company={company} />
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-snug">
            {company.company}
          </h3>
          <p className="text-sm">{meta}</p>
          {company.location && (
            <p className="text-sm text-muted-foreground">{company.location}</p>
          )}
        </div>
      </div>

      <ol className="mt-4">
        {company.roles.map((role, i) => {
          const last = i === company.roles.length - 1;
          return (
            <li key={`${role.title}-${role.start}`} className="flex gap-4">
              <div
                aria-hidden
                className="flex w-12 flex-none flex-col items-center"
              >
                <span className="mt-2 size-2.5 rounded-full bg-muted-foreground/60" />
                {!last && (
                  <span className="mt-1 w-0.5 flex-1 rounded bg-muted-foreground/25" />
                )}
              </div>
              <div className={cn("min-w-0 flex-1", !last && "pb-7")}>
                <RoleHeading role={role} />
                <RoleBody
                  descriptions={role.descriptions}
                  highlight={role.highlight}
                />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** LinkedIn-style experience list: grouped by company, roles on a timeline. */
export function ExperienceList({
  items,
  baseDelay = BLUR_FADE_DELAY * 6,
}: {
  items: readonly Company[];
  baseDelay?: number;
}) {
  return (
    <ul className="divide-y">
      {items.map((company, i) => (
        <li key={company.company} className="py-6 first:pt-2 last:pb-0">
          <BlurFade delay={baseDelay + i * 0.05}>
            <ExperienceCollapsible label={company.company}>
              <CompanyBlock company={company} />
            </ExperienceCollapsible>
          </BlurFade>
        </li>
      ))}
    </ul>
  );
}
