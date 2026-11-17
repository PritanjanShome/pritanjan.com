export type Role = {
  title: string;
  /** Extra line under the title, e.g. the company a role was acquired by. */
  note?: string;
  location?: string;
  /** "Jul 2026" */
  start: string;
  /** "Feb 2025". Leave out for a current role. */
  end?: string;
  descriptions: readonly string[];
  highlight?: { type: string; message: string };
};

export type Company = {
  company: string;
  logoUrl?: string;
  href?: string;
  employmentType?: string;
  location?: string;
  roles: readonly Role[];
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** "Jul 2026" -> months since year 0, so dates can be compared and subtracted. */
function toIndex(value: string): number {
  const [month, year] = value.split(" ");
  return Number(year) * 12 + MONTHS.indexOf(month);
}

function nowIndex(): number {
  const now = new Date();
  return now.getFullYear() * 12 + now.getMonth();
}

/** Inclusive month count, which is how LinkedIn reports tenure. */
export function monthsBetween(start: string, end?: string): number {
  return (end ? toIndex(end) : nowIndex()) - toIndex(start) + 1;
}

export function formatDuration(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months || !years) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}

export function formatPeriod(role: Role): string {
  return `${role.start} - ${role.end ?? "Present"}`;
}

export function roleDuration(role: Role): string {
  return formatDuration(monthsBetween(role.start, role.end));
}

/** Total time at a company: earliest start to latest end across its roles. */
export function companyDuration(roles: readonly Role[]): string {
  const earliest = roles.reduce((a, r) =>
    toIndex(r.start) < toIndex(a.start) ? r : a
  );
  const stillThere = roles.some((r) => !r.end);
  const latestEnd = stillThere
    ? undefined
    : roles.reduce((a, r) => (toIndex(r.end!) > toIndex(a.end!) ? r : a)).end;
  return formatDuration(monthsBetween(earliest.start, latestEnd));
}
