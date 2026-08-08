import { FileText, RefreshCcw, Users, LineChart, Receipt, CreditCard } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  { icon: FileText, title: "Invoices in a minute", body: "Templates, logo, line items, done." },
  { icon: RefreshCcw, title: "Auto-reconciliation", body: "Payments match themselves to invoices." },
  { icon: Users, title: "Client memory", body: "Every invoice, payment, and reminder per client in one view." },
  { icon: LineChart, title: "Cash flow at a glance", body: "What's in, what's out, what's overdue." },
  { icon: Receipt, title: "Tax that behaves", body: "GST for India, sales tax for the US. Correct by default." },
  { icon: CreditCard, title: "Pay-now links", body: "Razorpay, Stripe, PayPal. Client pays in two clicks." },
];

export function Features() {
  return (
    <section aria-labelledby="features-heading" className="container-page py-20 sm:py-28">
      <Reveal>
        <h2 id="features-heading" className="max-w-2xl text-3xl font-semibold sm:text-5xl">
          The rest of it, handled.
        </h2>
      </Reveal>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal as="li" key={f.title} delay={(i % 3) * 80}>
            <article className="h-full rounded-xl border border-border bg-card p-6">
              <f.icon aria-hidden="true" className="size-5 text-primary" />
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1.5 leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}