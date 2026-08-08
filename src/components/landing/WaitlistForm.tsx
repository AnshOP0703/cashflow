import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

// TODO(backend): wire this to Lovable Cloud (Supabase) — insert { email } into a
// `waitlist` table here. Until then submissions are kept in local state + logged.
export function WaitlistForm({
  variant = "light",
  id = "waitlist",
}: {
  variant?: "light" | "onAccent";
  id?: string;
}) {
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

  const onAccent = variant === "onAccent";

  if (done) {
    return (
      <p
        role="status"
        className={cn(
          "rounded-lg border px-4 py-3 text-sm font-medium",
          onAccent
            ? "border-ink/20 bg-ink text-ink-foreground"
            : "border-border bg-secondary text-foreground",
        )}
      >
        You're on the list. We'll email you when Tagada opens up.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={`${id}-email`} className="sr-only">
          Email address
        </label>
        <input
          id={`${id}-email`}
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "h-12 w-full flex-1 rounded-lg border px-4 text-base outline-none transition-colors",
            "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            onAccent
              ? "border-ink/25 bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-ink"
              : "border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-ring",
          )}
        />
        <button
          type="submit"
          className={cn(
            "h-12 shrink-0 rounded-lg px-6 text-base font-semibold transition outline-none",
            "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            onAccent
              ? "bg-ink text-ink-foreground hover:bg-ink/90 focus-visible:ring-ink"
              : "bg-primary text-primary-foreground hover:brightness-95 focus-visible:ring-ring",
          )}
        >
          Join the waitlist
        </button>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </form>
  );
}