"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { useState, type MouseEvent, type ReactNode } from "react";

/**
 * Click-to-expand wrapper for one company. The children are rendered on the
 * server; this only flips `data-open`, and anything inside can react to it with
 * the `group-data-[open=true]/co:` variant (see ExpandArea).
 */
export function ExperienceCollapsible({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  const [open, setOpen] = useState(false);

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    // Let the logo link open the company site instead of toggling.
    if ((e.target as HTMLElement).closest("a")) return;
    setOpen((o) => !o);
  };

  return (
    <div
      data-open={open}
      onClick={onClick}
      className="group/co relative cursor-pointer"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-label={`${open ? "Collapse" : "Expand"} ${label}`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className="absolute right-0 top-0 flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <ChevronDownIcon
          className={cn(
            "size-4 transition-transform duration-300 ease-out",
            open && "rotate-180"
          )}
        />
      </button>
      <div className="pr-9">{children}</div>
    </div>
  );
}

/** Smoothly grows from 0 to full height when the parent company is open. */
export function ExpandArea({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-out group-data-[open=true]/co:grid-rows-[1fr] group-data-[open=true]/co:opacity-100">
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}
