import { useEffect, useState } from "react";

const testimonialDefs = [
  {
    quote: "Clients pay faster and nobody feels chased.",
    author: "Dan Okoro · Consultant, Okoro & Co.",
  },
  {
    quote: "It's the first invoicing tool that does something after sending.",
    author: "Ritu Shah · Ops lead, Northline Creative",
  },
  {
    quote: "I stopped writing awkward follow-up emails entirely.",
    author: "Ananya Rao · Brand designer, Freelance",
  },
  {
    quote: "Our average payment time went from 38 days to 11.",
    author: "Marcus Feld · Founder, Vertex Labs",
  },
];

const ROTATE_MS = 5200;

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % testimonialDefs.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(timer);
  }, []);

  const active = testimonialDefs[index]!;

  return (
    <section
      aria-labelledby="proof-heading"
      className="mx-auto max-w-[800px] px-8 py-25 text-center"
    >
      <h2 id="proof-heading" className="text-xs font-bold tracking-[0.08em] text-ink-faint">
        FROM EARLY USERS
      </h2>

      <figure>
        <blockquote className="mt-6 min-h-[110px] text-[28px] leading-[1.4] font-semibold tracking-[-0.01em] text-ink">
          "{active.quote}"
        </blockquote>
        <figcaption className="mt-[18px] text-sm text-ink-muted">{active.author}</figcaption>
      </figure>

      <div className="mt-6 flex justify-center gap-2">
        {testimonialDefs.map((testimonial, i) => (
          <button
            key={testimonial.author}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className="h-[7px] w-[7px] rounded-full border-none p-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-deep"
            style={{ background: i === index ? "var(--brand)" : "var(--line)" }}
          />
        ))}
      </div>
    </section>
  );
}
