import { Reveal } from "./Reveal";

// PLACEHOLDER COPY — to be rewritten in the founder's own words before launch.
export function FounderNote() {
  return (
    <section aria-labelledby="founder-heading" className="container-page py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl">
        <h2 id="founder-heading" className="text-3xl font-semibold sm:text-4xl">
          Why we built this.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          I watched my father spend an entire Sunday afternoon rewriting the same four sentences to
          eleven different clients, changing only the invoice number and the amount. He wasn't
          short of work. He was short of the money he'd already earned.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Every tool he tried was happy to help him make another invoice. Not one of them would
          make the follow-up call. Tagada exists to do the part nobody wants to do, so that a
          Sunday afternoon can go back to being a Sunday afternoon.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">Placeholder name — Founder, Tagada</p>
      </Reveal>
    </section>
  );
}
