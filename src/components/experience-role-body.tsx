import { ExpandArea } from "./experience-collapsible";

/** Description area for one role; hidden until its company card is expanded. */
export function RoleBody({
  descriptions,
  highlight,
}: {
  descriptions: readonly string[];
  highlight?: { type: string; message: string };
}) {
  if (!descriptions.length) return null;

  return (
    <ExpandArea>
      <div className="pt-3 text-sm leading-relaxed">
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
      </div>
    </ExpandArea>
  );
}
