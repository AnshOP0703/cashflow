import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Do I need to know accounting to use this?",
    a: "No. Tagada is built for business owners who are not accountants and do not want to become one. You enter line items and a client, and Tagada handles tax calculation, numbering, and the payment record behind the scenes.",
  },
  {
    q: "Will the reminders annoy my clients?",
    a: "Reminder frequency and tone are set by you, and Tagada starts polite by default. Every reminder stops automatically the moment the invoice is paid, so no client ever gets chased for money they already sent.",
  },
  {
    q: "Does it handle GST?",
    a: "Yes. Tagada produces GST-compliant invoices for Indian businesses, including GSTIN, HSN or SAC codes, and correct CGST, SGST, or IGST splits based on the place of supply. US and global users get sales tax and VAT handling instead.",
  },
  {
    q: "Which payment gateways are supported?",
    a: "Razorpay and UPI for India, and Stripe and PayPal for the US and the rest of the world. Every invoice carries a pay-now link, so a client can settle it in two clicks without creating an account.",
  },
  {
    q: "Can I import invoices from Zoho or Excel?",
    a: "Yes. Tagada imports existing invoices and clients from a CSV or Excel export, including files exported from Zoho Invoice, Wave, and FreshBooks. Outstanding invoices carry their due dates over, so the chase engine can pick them up immediately.",
  },
  {
    q: "What happens to my data if I leave?",
    a: "Your data is yours. You can export every invoice, client, and payment record to CSV and PDF at any time, including on the free plan. If you delete your account, records are permanently removed after a 30-day grace period.",
  },
];

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-y border-border bg-band py-20 scroll-mt-20 sm:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
        <Reveal>
          <h2 id="faq-heading" className="text-3xl font-semibold sm:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}