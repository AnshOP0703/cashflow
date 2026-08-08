import { User, Users, Building2, Briefcase } from "lucide-react";
import { Reveal } from "./Reveal";

const segments = [
  {
    icon: User,
    label: "Freelancers",
    body: "One client goes quiet and your month is gone. You either nag or eat it.",
  },
  {
    icon: Users,
    label: "Agencies",
    body: "Retainers, milestones, and six clients on different terms. Nobody owns follow-up.",
  },
  {
    icon: Building2,
    label: "Small businesses",
    body: 'Fifty open invoices in a spreadsheet with a column called "check karna hai."',
  },
  {
    icon: Briefcase,
    label: "Consultants",
    body: "Long payment cycles, senior clients, and no comfortable way to ask twice.",
  },
];

export function WhoItsFor() {
  return (
    <section aria-labelledby="who-heading" className="container-page py-24 sm:py-32">
      <Reveal>
        <h2 id="who-heading" className="max-w-2xl text-3xl font-semibold sm:text-5xl">
          Built for whoever sends the invoice.
        </h2>
      </Reveal>
      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {segments.map((s, i) => (
          <Reveal as="li" key={s.label} delay={i * 70}>
            <s.icon aria-hidden="true" strokeWidth={1.5} className="size-5 text-muted-foreground" />
            <h3 className="mt-4 font-medium">{s.label}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
