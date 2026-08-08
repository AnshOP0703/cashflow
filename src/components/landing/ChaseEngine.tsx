import { useState } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const tones = {
  Gentle: {
    subject: "Invoice #0042 — whenever you get a moment",
    body: "Hi Priya, hope the launch went well. Invoice #0042 for ₹48,000 was due last Friday — no rush if it's already in the queue. Here's a pay link if it's easier: tagada.pay/0042. Thanks!",
  },
  Standard: {
    subject: "Invoice #0042 is 12 days overdue",
    body: "Hi Priya, invoice #0042 for ₹48,000 was due on 14 March and is now 12 days overdue. You can settle it in two clicks here: tagada.pay/0042. If something's blocking approval on your side, tell me and I'll sort it.",
  },
  Firm: {
    subject: "Action needed: invoice #0042, 12 days overdue",
    body: "Hi Priya, invoice #0042 for ₹48,000 remains unpaid 12 days past its due date. Per our agreed terms, late fees apply from day 15 and new work pauses until the balance clears. Payment link: tagada.pay/0042. Please confirm a payment date today.",
  },
} as const;

type Tone = keyof typeof tones;
const order: Tone[] = ["Gentle", "Standard", "Firm"];

export function ChaseEngine() {
  const [tone, setTone] = useState<Tone>("Standard");

  return (
    <section aria-labelledby="chase-heading" className="border-y border-border bg-ink py-20 text-ink-foreground sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="max-w-xl">
          <p className="text-sm font-medium text-ink-foreground/60">The chase engine</p>
          <h2 id="chase-heading" className="mt-4 text-4xl font-semibold sm:text-6xl">
            Politeness that escalates.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-foreground/70">
            Set the cadence once. Tagada starts friendly and gets firmer on a schedule you
            control — and stops the instant the invoice is paid. No awkward emails from you. No
            relationship damage.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div
            role="tablist"
            aria-label="Reminder tone"
            className="inline-flex rounded-lg border border-ink-foreground/15 p-1"
          >
            {order.map((t) => (
              <button
                key={t}
                role="tab"
                id={`tone-tab-${t}`}
                aria-selected={tone === t}
                aria-controls="tone-panel"
                tabIndex={tone === t ? 0 : -1}
                onClick={() => setTone(t)}
                onKeyDown={(e) => {
                  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                  e.preventDefault();
                  const i = order.indexOf(tone);
                  const next: Tone =
                    e.key === "ArrowRight"
                      ? order[(i + 1) % order.length]!
                      : order[(i - 1 + order.length) % order.length]!;
                  setTone(next);
                  document.getElementById(`tone-tab-${next}`)?.focus();
                }}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ink-foreground/40 focus-visible:outline-none",
                  tone === t
                    ? "bg-ink-foreground text-ink"
                    : "text-ink-foreground/70 hover:text-ink-foreground",
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div
            id="tone-panel"
            role="tabpanel"
            aria-labelledby={`tone-tab-${tone}`}
            className="mt-5 rounded-lg border border-ink-foreground/15 bg-ink-foreground/[0.04] p-6"
          >
            <p className="text-xs tracking-wide text-ink-foreground/50 uppercase">Preview</p>
            <p className="mt-3 font-semibold">{tones[tone].subject}</p>
            <p className="mt-3 leading-relaxed text-ink-foreground/75">{tones[tone].body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}