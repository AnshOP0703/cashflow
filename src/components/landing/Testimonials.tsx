import { Reveal } from "./Reveal";

// PLACEHOLDER TESTIMONIALS — replace with real, attributed quotes post-launch.
const quotes = [
  {
    quote:
      "I stopped writing 'just following up' emails entirely. Two clients who always paid late now pay in the first week.",
    name: "Ananya Rao",
    role: "Founder",
    company: "Studio Kadak",
  },
  {
    quote:
      "The WhatsApp nudge is the whole product. Email gets ignored; a WhatsApp message with a pay link does not.",
    name: "Marcus Bell",
    role: "Managing Director",
    company: "Northline Creative",
  },
  {
    quote:
      "Reconciliation used to eat a full afternoon each month. Now the invoices close themselves and I just read the notification.",
    name: "Sofia Duarte",
    role: "Independent consultant",
    company: "Duarte Advisory",
  },
];

export function Testimonials() {
  return (
    <section aria-labelledby="proof-heading" className="border-y border-border bg-band py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <h2 id="proof-heading" className="max-w-2xl text-3xl font-semibold sm:text-5xl">
            People who got paid.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal as="li" key={q.name} delay={i * 90}>
              <figure className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-6">
                <blockquote className="leading-relaxed">"{q.quote}"</blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{q.name}</span> — {q.role},{" "}
                  {q.company}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}