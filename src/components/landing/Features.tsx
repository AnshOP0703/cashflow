import {
  FileText,
  FileSignature,
  RefreshCcw,
  Users,
  LineChart,
  Receipt,
  CreditCard,
  Download,
} from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  { icon: FileText, title: "Invoices in a minute", body: "Templates, logo, line items, done." },
  { icon: FileSignature, title: "Quotes that convert", body: "Send an estimate, turn it into an invoice with one click." },
  { icon: RefreshCcw, title: "Auto-reconciliation", body: "Payments match themselves to invoices." },
  { icon: Users, title: "Client memory", body: "Every invoice, payment, and reminder per client in one view." },
  { icon: LineChart, title: "Cash flow at a glance", body: "What's in, what's out, what's overdue." },
  { icon: Receipt, title: "Tax that behaves", body: "GST for India, sales tax and VAT for global. Correct by default." },
  { icon: CreditCard, title: "Pay-now links", body: "Razorpay, UPI, Stripe, PayPal. Client pays in two clicks." },
  { icon: Download, title: "Export anything", body: "Hand your accountant a clean file at year end. No lock-in." },
];

export function Features() {
  return (
    <section id="features" aria-labelledby="features-heading" className="container-page scroll-mt-20 py-24 sm:py-32">
      <Reveal>
        <h2 id="features-heading" className="max-w-2xl text-3xl font-semibold sm:text-5xl">
          The rest of it, handled.
        </h2>
      </Reveal>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal as="li" key={f.title} delay={(i % 4) * 70}>
            <article className="h-full rounded-lg border border-border bg-card p-6">
              <f.icon aria-hidden="true" strokeWidth={1.5} className="size-5 text-muted-foreground" />
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-1.5 leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}