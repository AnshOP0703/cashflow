import { useState, type FormEvent } from "react";
import { EARLY_ACCESS_INPUT_ID } from "./cta";

// TODO(backend): wire this to Lovable Cloud (Supabase) — insert { email } into a
// `waitlist` table here. Until then submissions are kept in local state + logged.
export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setError("That email doesn't look right.");
      return;
    }
    setError(null);
    console.info("[waitlist] signup", value);
    setDone(true);
  }

  if (done) {
    return (
      <p
        role="status"
        className="mx-auto mt-8 w-fit rounded-[10px] border border-slate-line bg-slate-raised px-[18px] py-3.5 text-sm text-on-slate"
      >
        You're on the list. We'll email you when Tagada opens up.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8">
      <div className="flex justify-center gap-2.5 max-[520px]:flex-col max-[520px]:items-stretch">
        <label htmlFor={EARLY_ACCESS_INPUT_ID} className="sr-only">
          Email address
        </label>
        <input
          id={EARLY_ACCESS_INPUT_ID}
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? "waitlist-error" : undefined}
          className="w-[260px] rounded-[10px] border border-slate-input bg-slate-raised px-[18px] py-3.5 text-sm text-on-slate placeholder:text-on-slate-dim focus-visible:border-brand focus-visible:outline-none max-[520px]:w-full"
        />
        <button
          type="submit"
          className="rounded-[10px] bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Get early access
        </button>
      </div>
      {error && (
        <p id="waitlist-error" className="mt-3 text-sm text-on-slate-muted">
          {error}
        </p>
      )}
    </form>
  );
}
