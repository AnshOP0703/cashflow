import { useState } from "react";

export const faqs = [
  {
    q: "Will reminders annoy my clients?",
    a: "Tone starts friendly and only escalates if needed — most clients never notice a difference from a well-written email.",
  },
  {
    q: "Which channels does it use?",
    a: "Email, WhatsApp and SMS, sent in the sequence you choose.",
  },
  {
    q: "How do clients pay?",
    a: "UPI, cards, and bank transfer via a secure payment link attached to every reminder.",
  },
  {
    q: "Does it handle GST?",
    a: "Yes — invoices include GST fields and calculate tax automatically.",
  },
  {
    q: "What does it cost during beta?",
    a: "Free access to every plan while we're in beta. No card required.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto grid max-w-[1000px] grid-cols-[280px_1fr] gap-12 px-8 pt-15 pb-[120px] max-[760px]:grid-cols-1"
    >
      <h2 id="faq-heading" className="text-4xl font-[650] tracking-[-0.02em]">
        Questions
      </h2>

      <div>
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q} className="border-b border-line">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between border-none bg-transparent py-5 text-left text-base font-semibold text-ink"
              >
                {faq.q}
                <span
                  aria-hidden="true"
                  className="text-sm text-ink-faint transition-transform duration-[250ms]"
                  style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
                >
                  ⌄
                </span>
              </button>
              {isOpen && (
                <p className="max-w-[560px] pb-5 text-[15px] leading-[1.7] text-ink-muted">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
