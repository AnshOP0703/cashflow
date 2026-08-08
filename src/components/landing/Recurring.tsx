import { Reveal } from "./Reveal";

const months = ["March", "April", "May", "June"];

export function Recurring() {
  return (
    <section
      aria-labelledby="recurring-heading"
      className="border-y border-border bg-band py-24 sm:py-32"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="rounded-lg border border-border bg-background p-5 sm:p-6">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              Retainer · Northline Creative · ₹60,000 / month
            </p>
            <ol className="mt-5 space-y-3">
              {months.map((m, i) => (
                <li
                  key={m}
                  className="flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-3"
                >
                  <span className="text-sm">{m} 1 — invoice raised automatically</span>
                  <span className="text-xs text-muted-foreground">
                    {i < 2 ? "Paid" : "Scheduled"}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 max-w-xl lg:order-2">
          <h2 id="recurring-heading" className="text-3xl font-semibold sm:text-5xl">
            Set it once. Bill it forever.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Monthly retainers, annual subscriptions, milestone schedules — set the terms once and
            Tagada raises the invoice, sends it, and chases it every cycle without being asked.
            Change the amount mid-contract and future invoices adjust themselves.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
