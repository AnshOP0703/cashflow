import { WaitlistForm } from "./WaitlistForm";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-heading"
      className="bg-slate px-8 py-[110px] text-center text-white"
    >
      <h2 id="final-heading" className="text-[44px] leading-[1.1] font-[650] tracking-[-0.02em]">
        Stop chasing.
        <br />
        <span className="text-ink-soft">Start collecting.</span>
      </h2>
      <p className="mt-4 text-base text-on-slate-muted">
        Your invoices should follow a process — not your calendar.
      </p>

      <WaitlistForm />

      <div className="mx-auto mt-14 max-w-[340px] rounded-2xl border border-slate-line bg-slate-raised px-8 py-6 text-left">
        <div className="text-[11px] font-bold tracking-[0.08em] text-on-slate-faint">
          INVOICE #0042
        </div>
        <div className="mt-2 text-[30px] font-[650] text-brand">₹48,000</div>
        <div className="mt-3 flex items-center gap-2 text-sm font-semibold">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-xs text-slate">
            ✓
          </span>
          PAID
        </div>
      </div>
    </section>
  );
}
