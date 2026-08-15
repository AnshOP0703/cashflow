import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

const invoiceDefs = [
  {
    client: "Northline Creative",
    due: "14 Mar",
    amount: "₹48,000",
    status: "Paid ✓",
    tone: "paid",
  },
  {
    client: "Vertex Labs",
    due: "02 Mar",
    amount: "₹1,20,000",
    status: "Reminder sent",
    tone: "open",
  },
  { client: "Patel & Sons", due: "18 Feb", amount: "₹86,500", status: "Paid ✓", tone: "paid" },
  {
    client: "Mira Interiors",
    due: "31 Jan",
    amount: "₹2,12,167",
    status: "Overdue",
    tone: "overdue",
  },
] as const;

const statusClass = {
  paid: "bg-brand-subtle font-semibold text-brand-deep",
  overdue: "bg-danger-subtle font-semibold text-danger",
  open: "bg-surface-muted text-ink-secondary",
} as const;

const COUNT_MS = 1300;

export function Metrics({ onEnter }: { onEnter?: () => void }) {
  const { ref, inView } = useInView<HTMLElement>(0.4);
  const [counts, setCounts] = useState({ outstanding: 0, received: 0, rate: 0 });

  useEffect(() => {
    if (!inView) return;
    onEnter?.();

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / COUNT_MS);
      setCounts({
        outstanding: Math.round(466667 * p),
        received: Math.round(48000 * p),
        rate: Math.round(92 * p),
      });
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, onEnter]);

  const tiles = [
    {
      label: "OUTSTANDING",
      value: `₹${counts.outstanding.toLocaleString("en-IN")}`,
      sub: "12 invoices · 3 overdue",
      accent: false,
    },
    {
      label: "RECEIVED TODAY",
      value: `₹${counts.received.toLocaleString("en-IN")}`,
      sub: "Northline Creative · UPI",
      accent: true,
    },
    { label: "COLLECTION RATE", value: `${counts.rate}%`, sub: "within 30 days", accent: false },
  ];

  return (
    <section
      ref={ref}
      aria-labelledby="dash-heading"
      className="mx-auto max-w-[1160px] px-8 py-[110px]"
    >
      <h2 id="dash-heading" className="text-[40px] leading-[1.1] font-[650] tracking-[-0.02em]">
        Everything after the invoice.
        <br />
        <span className="text-ink-soft">Handled.</span>
      </h2>

      <div className="mt-14 overflow-hidden rounded-[20px] border border-line bg-surface shadow-[0_20px_60px_rgba(17,17,17,0.05)]">
        <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[760px]:grid-cols-1">
          {tiles.map((tile, i) => (
            <div
              key={tile.label}
              className={`px-[30px] py-7 ${i < tiles.length - 1 ? "border-r border-line-subtle max-[760px]:border-r-0 max-[760px]:border-b" : ""}`}
            >
              <div className="text-[11px] font-bold tracking-[0.08em] text-ink-faint">
                {tile.label}
              </div>
              <div
                className={`mt-2 text-[32px] font-[650] ${tile.accent ? "text-brand-deep" : ""}`}
              >
                {tile.value}
              </div>
              <div className="mt-1 text-[13px] text-ink-faint">{tile.sub}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-line-subtle px-[30px] py-7">
          <div className="mb-4 text-[11px] font-bold tracking-[0.08em] text-ink-faint">
            OPEN INVOICES
          </div>
          <div className="overflow-x-auto">
            <div className="grid min-w-[480px] grid-cols-[2fr_1fr_1fr_1fr] border-b border-line-subtle pb-2.5 text-xs text-ink-faint">
              <span>Client</span>
              <span>Due</span>
              <span>Amount</span>
              <span>Status</span>
            </div>
            {invoiceDefs.map((row) => (
              <div
                key={row.client}
                className="grid min-w-[480px] grid-cols-[2fr_1fr_1fr_1fr] items-center border-b border-line-faintest py-3.5 text-sm"
              >
                <span className="font-semibold">{row.client}</span>
                <span className="text-ink-muted">{row.due}</span>
                <span>{row.amount}</span>
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[13px] ${statusClass[row.tone]}`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
