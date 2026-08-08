import { Reveal } from "./Reveal";

const india = [
  "GST-compliant invoices with HSN/SAC codes",
  "Razorpay and UPI collections",
  "WhatsApp reminders",
  "INR-first pricing and reporting",
];

const global = [
  "Stripe and PayPal collections",
  "Sales tax and VAT handling",
  "Email and SMS reminders",
  "Multi-currency invoicing",
];

export function Markets() {
  return (
    <section aria-labelledby="markets-heading" className="border-y border-border bg-band py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <h2 id="markets-heading" className="max-w-2xl text-3xl font-semibold sm:text-5xl">
            Two markets, one product.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Tagada runs in India and globally from day one. Neither market is an afterthought.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            { title: "India", items: india },
            { title: "Global", items: global },
          ].map((col, i) => (
            <Reveal key={col.title} delay={i * 90}>
              <article className="h-full rounded-lg border border-border bg-card p-7">
                <h3 className="text-xl font-semibold">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
            {["Razorpay", "UPI", "Stripe", "PayPal", "WhatsApp"].map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}