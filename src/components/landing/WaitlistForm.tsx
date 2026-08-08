import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

// TODO(backend): wire this to Lovable Cloud (Supabase) — insert { email } into a
// `waitlist` table here. Until then submissions are kept in local state + logged.
export function WaitlistForm({
  variant = "dark",
  id = "waitlist",
  submitLabel = "Join the waitlist",
  microcopy = "Free during beta. No card required.",
}: {
  variant?: "dark" | "onAccent";
  id?: string;
  submitLabel?: string;
  microcopy?: string | null;
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const onAccent = variant === "onAccent";

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
        className={cn(
          "rounded-lg border px-4 py-3 text-sm",
          onAccent
            ? "border-background/25 bg-background text-foreground"
            : "border-border bg-card text-foreground",
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
            "focus-visible:ring-2 focus-visible:ring-offset-2",
            onAccent
              ? "border-background/25 bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-background focus-visible:ring-offset-primary"
              : "border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-offset-background",
          )}
        />
        <button
          type="submit"
          className={cn(
            "h-12 shrink-0 rounded-lg px-7 text-base font-semibold transition outline-none",
            "focus-visible:ring-2 focus-visible:ring-offset-2",
            onAccent
              ? "bg-background text-foreground hover:bg-background/90 focus-visible:ring-background focus-visible:ring-offset-primary"
              : "bg-primary text-primary-foreground hover:-translate-y-px hover:brightness-110 focus-visible:ring-ring focus-visible:ring-offset-background",
          )}
        >
          {submitLabel}
        </button>
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className={cn("mt-2 text-sm", onAccent ? "text-primary-foreground" : "text-destructive")}
        >
          {error}
        </p>
      )}
      {microcopy && (
        <p
          className={cn(
            "mt-3 text-sm",
            onAccent ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {microcopy}
        </p>
      )}
    </form>
  );
}
