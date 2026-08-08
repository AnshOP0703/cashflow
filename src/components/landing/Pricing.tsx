import { useState } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Currency = "INR" | "USD";

const tiers = [
  {
    name: "Free",
    price: { INR: "₹0", USD: "$0" },
    tagline: "For your first few invoices.",
    features: ["Up to 5 invoices a month", "Email reminders", "One payment gateway"],
    popular: false,
  },
  {
    name: "Pro",
    price: { INR: "₹799", USD: "$19" },
    tagline: "For anyone tired of chasing.",
    features: ["Unlimited invoices", "WhatsApp + SMS chasing", "Auto-reconciliation", "All gateways"],
    popular: true,
  },
  {
    name: "Business",
    price: { INR: "₹1,999", USD: "$49" },
    tagline: "For teams with real volume.",
    features: ["Multi-user access", "Multi-currency", "Custom reminder rules", "Priority support"],
    popular: false,
  },
];

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("INR");

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="container-page scroll-mt-20 py-20 sm:py-28">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 id="pricing-heading" className="text-3xl font-semibold sm:text-5xl">
            Pricing without homework.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Every plan is free while Tagada is in beta. Prices below are what you'll pay after.
          </p>
        </div>
        <div
          role="group"
          aria-label="Currency"
          className="inline-flex rounded-lg border border-border bg-card p-1"
        >
          {(["INR", "USD"] as Currency[]).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={currency === c}
              onClick={() => setCurrency(c)}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                currency === c ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {c === "INR" ? "INR ₹" : "USD $"}
            </button>
          ))}
        </div>
      </Reveal>

      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 90}>
            <article
              className={cn(
                "flex h-full flex-col rounded-lg border bg-card p-7",
                t.popular ? "border-primary" : "border-border",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                {t.popular && (
                  <span className="rounded-md bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-4 text-4xl font-semibold tracking-tight">
                {t.price[currency]}
                <span className="ml-1 text-base font-normal text-muted-foreground">/ month</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{t.tagline}</p>
              <span className="mt-4 w-fit rounded-md border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                Free during beta
              </span>
              <ul className="mt-6 flex-1 space-y-3 text-muted-foreground">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#final-cta"
                className={cn(
                  "mt-8 rounded-lg px-4 py-3 text-center text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
                  t.popular
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border hover:bg-secondary",
                )}
              >
                Claim your spot
              </a>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}