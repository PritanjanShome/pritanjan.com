"use client";

import { useState } from "react";

/**
 * Description area for one role. Collapsed it shows the first line clamped to
 * two lines with a "…more" link, like LinkedIn; expanded it lists every point.
 */
export function RoleBody({
  descriptions,
  highlight,
}: {
  descriptions: readonly string[];
  highlight?: { type: string; message: string };
}) {
  const [open, setOpen] = useState(false);
  const expandable = descriptions.length > 1 || Boolean(highlight);

  if (!descriptions.length) return null;

  if (!expandable) {
    return <p className="mt-3 text-sm leading-relaxed">1. {descriptions[0]}</p>;
  }

  return (
    <div className="mt-3 text-sm leading-relaxed">
      {open ? (
        <>
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
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-2 text-muted-foreground hover:text-foreground"
          >
            Show less
          </button>
        </>
      ) : (
        <>
          <p className="line-clamp-2">1. {descriptions[0]}</p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={false}
            className="mt-1 text-muted-foreground hover:text-foreground"
          >
            …more
          </button>
        </>
      )}
    </div>
  );
}
