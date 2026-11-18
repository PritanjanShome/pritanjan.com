/**
 * Description area for one role. Closed, it shows the first point clamped to
 * two lines with "…more"; once the company card is open it lists every point.
 * Visibility follows the parent `group/co` (see ExperienceCollapsible).
 */
export function RoleBody({
  descriptions,
  highlight,
}: {
  descriptions: readonly string[];
  highlight?: { type: string; message: string };
}) {
  if (!descriptions.length) return null;

  const expandable = descriptions.length > 1 || Boolean(highlight);

  if (!expandable) {
    return <p className="mt-3 text-sm leading-relaxed">1. {descriptions[0]}</p>;
  }

  return (
    <div className="mt-3 text-sm leading-relaxed">
      <div className="group-data-[open=true]/co:hidden">
        <p className="line-clamp-2">1. {descriptions[0]}</p>
        <p className="mt-1 text-muted-foreground">…more</p>
      </div>
      <div className="hidden group-data-[open=true]/co:block">
        <ol className="list-decimal space-y-1.5 pl-5">
          {descriptions.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ol>
        {highlight && (
          <p className="mt-3 rounded-lg bg-blue-50 p-3 text-xs text-blue-800 dark:bg-gray-800 dark:text-blue-400">
            <span className="font-medium">{highlight.type} </span>
            {highlight.message}
          </p>
        )}
        <p className="mt-2 text-muted-foreground">Show less</p>
      </div>
    </div>
  );
}
