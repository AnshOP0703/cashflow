import { useState } from "react";
import { Reveal } from "./Reveal";
import { CtaLink } from "./Cta";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function Calculator() {
  const [monthly, setMonthly] = useState(400000);
  const [days, setDays] = useState(35);

  // Simple, transparent math: locked-up cash = monthly billing x (days waited / 30).
  const lockedUp = Math.round((monthly * days) / 30);
  // Follow-up effort assumption: 20 minutes per 10 days of delay, per lakh invoiced.
  const hours = Math.max(1, Math.round((monthly / 100000) * (days / 10) * 0.33));

  return (
    <section
      aria-labelledby="calc-heading"
      className="border-y border-border bg-band py-24 sm:py-32"
    >
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="max-w-xl">
          <h2 id="calc-heading" className="text-3xl font-semibold sm:text-5xl">
            What late payments actually cost you.
          </h2>
          <div className="mt-8 space-y-8">
            <div>
              <label htmlFor="calc-amount" className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly invoiced amount</span>
                <span>{inr.format(monthly)}</span>
              </label>
              <input
                id="calc-amount"
                type="range"
                min={50000}
                max={5000000}
                step={50000}
                value={monthly}
                onChange={(e) => setMonthly(Number(e.target.value))}
                className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              />
            </div>
            <div>
              <label htmlFor="calc-days" className="flex justify-between text-sm">
                <span className="text-muted-foreground">Average days to get paid</span>
                <span>{days} days</span>
              </label>
              <input
                id="calc-days"
                type="range"
                min={5}
                max={120}
                step={1}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-lg border border-border bg-background p-6 sm:p-8">
            <p className="text-sm text-muted-foreground">Cash locked up in unpaid invoices</p>
            <p aria-live="polite" className="mt-2 text-4xl font-semibold text-primary sm:text-5xl">
              {inr.format(lockedUp)}
            </p>
            <p className="mt-8 text-sm text-muted-foreground">Hours a month spent following up</p>
            <p aria-live="polite" className="mt-2 text-4xl font-semibold text-primary sm:text-5xl">
              {hours} hrs
            </p>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Tagada is designed to cut that wait by chasing automatically from day one.
            </p>
            <CtaLink
              className="mt-6"
              label="Get my invoices paid"
              note={`Stop leaving ${inr.format(lockedUp)} with your clients.`}
            />
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Assumption: locked-up cash equals your monthly invoiced amount multiplied by the
              average wait divided by 30 days. Follow-up time assumes roughly 20 minutes of chasing
              per ₹1 lakh invoiced for every 10 days of delay.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
