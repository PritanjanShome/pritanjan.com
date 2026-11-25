"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

const EMAIL = "pritanjan.shome@gmail.com";

const field =
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactDialog({ label = "Start a conversation" }: { label?: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [mailto, setMailto] = useState("");

  const open = () => {
    setStatus("idle");
    ref.current?.showModal();
  };
  const close = () => ref.current?.close();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const data = {
      name: String(f.get("name") ?? ""),
      email: String(f.get("email") ?? ""),
      context: String(f.get("context") ?? ""),
      message: String(f.get("message") ?? ""),
      website: String(f.get("website") ?? ""),
    };
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        formRef.current?.reset();
        return;
      }
    } catch {
      /* fall through to the email-app fallback */
    }
    const body = `Hi Pritanjan,\n\n${data.message}\n\nName: ${data.name}\nEmail: ${data.email}${
      data.context ? `\nWorking on: ${data.context}` : ""
    }`;
    setMailto(
      `mailto:${EMAIL}?subject=${encodeURIComponent(`Message from ${data.name}`)}&body=${encodeURIComponent(body)}`
    );
    setStatus("error");
  }

  return (
    <>
      <RainbowButton type="button" onClick={open} className="mt-4 h-10 px-4 text-sm">
        {label}
      </RainbowButton>

      <dialog
        ref={ref}
        aria-labelledby="contact-title"
        onClick={(e) => {
          if (e.target === ref.current) close();
        }}
        className="m-auto w-[min(34rem,calc(100vw-1.5rem))] rounded-2xl border bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="contact-title" className="text-xl font-medium">
                Start a conversation
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell me what you’re working on and I’ll reply by email.
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              className="shrink-0 rounded-md border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Close
            </button>
          </div>

          {status === "sent" ? (
            <div className="mt-8 rounded-xl border bg-muted/40 p-5">
              <p className="text-sm font-medium">Thanks, your message is on its way.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                I’ll reply to the email you gave. You can close this window.
              </p>
              <button
                type="button"
                onClick={close}
                className="mt-4 rounded-md border px-3 py-1.5 text-sm transition-colors hover:bg-muted"
              >
                Close
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} className="mt-6 space-y-4">
              {/* honeypot */}
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  Name
                  <input name="name" required maxLength={100} autoComplete="name" placeholder="Your name" className={cn(field, "mt-1.5 h-10")} />
                </label>
                <label className="block text-sm font-medium">
                  Email
                  <input name="email" type="email" required maxLength={200} autoComplete="email" placeholder="you@company.com" className={cn(field, "mt-1.5 h-10")} />
                </label>
              </div>
              <label className="block text-sm font-medium">
                What are you working on?
                <input name="context" maxLength={300} placeholder="Product, team or role (optional)" className={cn(field, "mt-1.5 h-10")} />
              </label>
              <label className="block text-sm font-medium">
                Message
                <textarea name="message" required maxLength={4000} rows={5} placeholder="How can I help?" className={cn(field, "mt-1.5 min-h-28 resize-y")} />
              </label>

              {status === "error" && (
                <p role="alert" className="rounded-md border border-amber-500/40 bg-amber-500/10 p-3 text-sm">
                  I couldn’t send that from the page.{" "}
                  <a href={mailto} className="font-medium underline underline-offset-4">
                    Open it in your email app
                  </a>{" "}
                  instead, or write to {EMAIL}.
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <p className="text-xs text-muted-foreground">Your details are only used to reply to you.</p>
                <RainbowButton type="submit" disabled={status === "sending"} className="h-10 px-5 text-sm">
                  {status === "sending" ? "Sending…" : "Send"}
                </RainbowButton>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
