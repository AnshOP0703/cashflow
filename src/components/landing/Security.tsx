import { Reveal } from "./Reveal";

const items = [
  {
    title: "Encrypted end to end",
    body: "Invoice and client data is encrypted in transit and at rest.",
  },
  {
    title: "Read-only connections",
    body: "Bank and payment gateway links are read-only. Tagada can never move money.",
  },
  { title: "Never sold", body: "Your data is never sold or shared with advertisers. Ever." },
  { title: "Export on demand", body: "Download every invoice, client, and payment record anytime." },
];

export function Security() {
  return (
    <section
      aria-labelledby="security-heading"
      className="border-y border-border bg-band py-20 sm:py-24"
    >
      <div className="container-page">
        <Reveal>
          <h2 id="security-heading" className="text-3xl font-semibold sm:text-4xl">
            Security and data.
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i, idx) => (
            <Reveal as="li" key={i.title} delay={idx * 70}>
              <h3 className="font-medium">{i.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{i.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
