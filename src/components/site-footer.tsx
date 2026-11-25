import { DATA } from "@/data/resume";
import Link from "next/link";
import { ContactDialog } from "./contact-dialog";
import { LocalTime } from "./local-time";
import { Logo } from "./logo";

const quiet = "text-xs text-muted-foreground transition-colors";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer>
      {/* contact: same heading, text and button pattern as the About section */}
      <section id="contact" className="pb-10">
        <h2 className="mb-2 text-xl font-medium">Get in touch</h2>
        <p className="max-w-2xl text-pretty text-sm text-muted-foreground">
          Product leadership, strategy and execution for teams building
          products, and for the people who lead them.
        </p>
        <ContactDialog />
      </section>

      {/* slim bar: one line, same font and size throughout */}
      <div className="flex flex-col gap-3 border-t pt-5 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="flex items-center gap-2">
            <Logo className="size-5" />
            <span className="text-xs font-medium">{DATA.name}</span>
          </span>
          <span className={quiet}>© {year}</span>
          <Link href="/work" className={`${quiet} hover:text-foreground`}>
            Case studies
          </Link>
          <Link href={DATA.resume} target="_blank" className={`${quiet} hover:text-foreground`}>
            Resume
          </Link>
        </div>
        <div className={`flex items-center gap-2 ${quiet}`}>
          <span aria-hidden className="size-1.5 rounded-full bg-indigo-500" />
          <span>Based in Berlin</span>
          <span aria-hidden>·</span>
          <LocalTime timeZone="Europe/Berlin" label="" />
        </div>
      </div>
      <p className="pb-28 text-[11px] leading-relaxed text-muted-foreground">
        Case studies and writing on this site are my own work. Company
        confidential material is never shown.
      </p>
    </footer>
  );
}
