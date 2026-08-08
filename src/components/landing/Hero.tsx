import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";

const timeline = [
  { day: "Day 1", label: "Invoice sent", note: "Email + WhatsApp delivery" },
  { day: "Day 7", label: "Gentle reminder", note: "Friendly, one line" },
  { day: "Day 14", label: "WhatsApp nudge", note: "Pay-now link attached" },
  { day: "Day 21", label: "Firm follow-up", note: "Terms restated" },
];

export function Hero() {
  return (
    <section id="top" className="container-page grid gap-14 pt-14 pb-20 lg:grid-cols-2 lg:gap-16 lg:pt-24 lg:pb-28">
      <Reveal className="max-w-xl">
        <p className="text-sm font-medium tracking-tight text-primary">
          Invoicing + collections for people who hate both
        </p>
        <h1 className="mt-4 text-[2.5rem] leading-[1.02] font-semibold sm:text-6xl lg:text-[4.25rem]">
          Stop chasing. Start collecting.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Tagada sends the invoice, then follows up on it — over email, WhatsApp, and SMS —
          until the money lands. You do nothing.
        </p>
        <div id="waitlist" className="mt-8 max-w-md scroll-mt-24">
          <WaitlistForm id="hero" />
          <p className="mt-3 text-sm text-muted-foreground">
            Free during beta. India and global. No card required.
          </p>
        </div>
      </Reveal>

      <Reveal delay={120} className="lg:pl-6">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-7">
          <article aria-label="Example overdue invoice">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-4">
              <div>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">Invoice #0042</p>
                <p className="mt-1 text-2xl font-semibold">₹48,000</p>
              </div>
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-foreground">
                12 days overdue
              </span>
            </div>

            <ol className="mt-6 space-y-5">
              {timeline.map((t) => (
                <li key={t.day} className="relative flex gap-4 pb-1 last:pb-0">
                  <span aria-hidden="true" className="relative flex w-4 justify-center">
                    <span className="absolute top-4 bottom-[-1.4rem] w-px bg-border" />
                    <span className="mt-1.5 size-2.5 rounded-full border border-border bg-background" />
                  </span>
                  <span className="flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-sm font-semibold">{t.label}</span>
                      <span className="text-xs text-muted-foreground">{t.day}</span>
                    </span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{t.note}</span>
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-4">
                <span aria-hidden="true" className="flex w-4 justify-center">
                  <span className="size-2.5 rounded-full bg-primary" />
                </span>
                <span className="rounded-md bg-primary px-3 py-1 text-sm font-bold tracking-wide text-primary-foreground">
                  PAID
                </span>
                <span className="text-sm text-muted-foreground">Chase stops automatically</span>
              </li>
            </ol>
          </article>
        </div>
      </Reveal>
    </section>
  );
}