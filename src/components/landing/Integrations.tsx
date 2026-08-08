import { Reveal } from "./Reveal";

// LIVE at launch: Gmail, WhatsApp, Stripe, Razorpay, Google Sheets.
// PLANNED: Tally, Zoho Books, QuickBooks.
const tools = [
  "Tally",
  "Zoho Books",
  "Google Sheets",
  "Gmail",
  "WhatsApp",
  "Stripe",
  "Razorpay",
  "QuickBooks",
];

export function Integrations() {
  return (
    <section aria-labelledby="integrations-heading" className="container-page py-20 sm:py-24">
      <Reveal>
        <h2 id="integrations-heading" className="text-lg font-medium">
          Tagada sits on top of your existing setup. Nothing to rip out.
        </h2>
        <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
