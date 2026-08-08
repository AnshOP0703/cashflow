import { Reveal } from "./Reveal";

// PLACEHOLDER STATS — swap for cited figures before launch.
const stats = [
  { value: "14+ hours", copy: "Small businesses spend 14+ hours a month chasing payments." },
  { value: "21 days", copy: "A typical invoice is paid 21 days late." },
  { value: "2 reminders", copy: "Most owners give up after the second reminder." },
];

export function ProblemStrip() {
  return (
    <section aria-labelledby="problem-heading" className="border-y border-border bg-band py-16 sm:py-20">
      <div className="container-page">
        <h2 id="problem-heading" className="sr-only">
          The cost of chasing unpaid invoices
        </h2>
        <ul className="grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.value} delay={i * 90}>
              <div className="h-full rounded-lg border border-border bg-card p-6">
                <p className="text-3xl font-semibold tracking-tight text-foreground">{s.value}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}