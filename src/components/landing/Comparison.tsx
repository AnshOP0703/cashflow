import { Reveal } from "./Reveal";

const cols = ["Tagada", "Zoho Invoice", "Wave", "Spreadsheets"];

const rows: { label: string; values: string[] }[] = [
  { label: "Automated escalating reminders", values: ["Built-in, tone-based", "Basic reminders", "Basic reminders", "No"] },
  { label: "WhatsApp follow-ups", values: ["Yes", "Add-on / limited", "No", "Manual"] },
  { label: "Auto-reconciliation", values: ["Yes", "Yes", "Yes (US/CA banks)", "Manual"] },
  { label: "Setup time", values: ["Under 5 minutes", "An afternoon", "About an hour", "Depends on your patience"] },
  { label: "Accountant required", values: ["No", "Helpful", "No", "Eventually"] },
  { label: "Price", values: ["Free during beta", "From ₹749 / $15", "Free core plan", "Free, plus your weekends"] },
];

export function Comparison() {
  return (
    <section aria-labelledby="compare-heading" className="container-page py-20 sm:py-28">
      <Reveal>
        <h2 id="compare-heading" className="max-w-2xl text-3xl font-semibold sm:text-5xl">
          How Tagada compares.
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          Every tool below creates a decent invoice. Tagada is the one built to collect it.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <caption className="sr-only">
            Feature comparison of Tagada, Zoho Invoice, Wave, and spreadsheets
          </caption>
          <thead>
            <tr>
              <th scope="col" className="w-56 border-b border-border py-4 pr-4 font-medium text-muted-foreground">
                Feature
              </th>
              {cols.map((c) => (
                <th
                  key={c}
                  scope="col"
                  className={
                    c === "Tagada"
                      ? "border-b-2 border-primary bg-primary/10 px-4 py-4 font-semibold"
                      : "border-b border-border px-4 py-4 font-medium text-muted-foreground"
                  }
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <th scope="row" className="border-b border-border py-4 pr-4 font-medium">
                  {r.label}
                </th>
                {r.values.map((v, i) => (
                  <td
                    key={cols[i]}
                    className={
                      i === 0
                        ? "border-b border-border bg-primary/10 px-4 py-4 font-semibold"
                        : "border-b border-border px-4 py-4 text-muted-foreground"
                    }
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}