import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Send it.",
    body: "Create an invoice in under a minute. Templates, your logo, GST or sales tax handled automatically.",
  },
  {
    n: "02",
    title: "Forget it.",
    body: "Tagada takes over. Reminders go out on a schedule you set, in a tone you choose, across email, WhatsApp, and SMS.",
  },
  {
    n: "03",
    title: "Get paid.",
    body: "Client clicks, pays through Razorpay or Stripe, and the invoice reconciles itself. You get a notification, not a spreadsheet.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="container-page scroll-mt-20 py-20 sm:py-28">
      <Reveal>
        <h2 id="how-heading" className="max-w-2xl text-3xl font-semibold sm:text-5xl">
          Three steps. Then nothing.
        </h2>
      </Reveal>
      <ol className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 90}>
            <div className="h-full border-t border-border pt-6">
              <p className="font-mono text-sm text-primary">{s.n}</p>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}