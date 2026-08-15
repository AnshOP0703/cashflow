import { useState } from "react";

const chipsByRegion = {
  india: ["₹", "GST", "UPI", "WhatsApp"],
  global: ["$", "Stripe", "PayPal", "Email"],
} as const;

type Region = keyof typeof chipsByRegion;

export function Regions() {
  const [region, setRegion] = useState<Region>("india");

  return (
    <section
      aria-labelledby="region-heading"
      className="mx-auto grid max-w-[1160px] grid-cols-[1fr_1.2fr] items-center gap-12 px-8 py-15 max-[760px]:grid-cols-1"
    >
      <div>
        <h2 id="region-heading" className="text-[34px] leading-[1.1] font-[650] tracking-[-0.02em]">
          Built for India.
          <br />
          <span className="text-ink-soft">Ready for the world.</span>
        </h2>
      </div>

      <div>
        <div
          role="tablist"
          aria-label="Region"
          className="mb-5 inline-flex rounded-full bg-surface-muted p-1"
        >
          {(Object.keys(chipsByRegion) as Region[]).map((key) => {
            const selected = region === key;
            return (
              <button
                key={key}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setRegion(key)}
                className={`rounded-full px-[22px] py-2.5 text-sm font-semibold capitalize transition-all duration-[250ms] ${
                  selected ? "bg-ink text-white" : "bg-transparent text-ink-secondary"
                }`}
              >
                {key}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-4 gap-3 max-[520px]:grid-cols-2">
          {chipsByRegion[region].map((chip) => (
            <div
              key={chip}
              className="rounded-xl border border-line bg-surface px-2 py-[18px] text-center text-[15px] font-[650]"
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
