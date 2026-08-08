import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const clients = [
  { name: "Northline Creative", days: "3 days", score: "On time", risky: false },
  { name: "Vertex Labs", days: "9 days", score: "On time", risky: false },
  { name: "Patel & Sons Trading", days: "24 days", score: "Slow", risky: false },
  { name: "Mira Interiors", days: "41 days", score: "Risky", risky: true },
];

export function ClientScores() {
  return (
    <section aria-labelledby="scores-heading" className="container-page py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="max-w-xl">
          <h2 id="scores-heading" className="text-3xl font-semibold sm:text-5xl">
            Know who pays late before you invoice them.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every invoice teaches Tagada something. After a few cycles it knows which clients pay on
            day two and which ones need three reminders and a phone call. New job from a chronic
            late payer? Tagada tells you to ask for a deposit — before you've done the work.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-lg border border-border bg-card">
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border px-5 py-3 text-xs tracking-wide text-muted-foreground uppercase">
              <span>Client</span>
              <span>Avg. days to pay</span>
              <span>Score</span>
            </div>
            <ul>
              {clients.map((c) => (
                <li
                  key={c.name}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border px-5 py-4 last:border-b-0"
                >
                  <span className="truncate">{c.name}</span>
                  <span className="text-sm text-muted-foreground">{c.days}</span>
                  <span
                    className={cn(
                      "rounded-md border px-2.5 py-1 text-xs",
                      c.risky
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground",
                    )}
                  >
                    {c.score}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
