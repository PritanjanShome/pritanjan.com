"use client";

import { useEffect, useState } from "react";

/** Live local time for a city, rendered after mount to avoid a hydration mismatch. */
export function LocalTime({ timeZone, label }: { timeZone: string; label: string }) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span className="tabular-nums">
      {now ?? "--:--"} {label}
    </span>
  );
}
