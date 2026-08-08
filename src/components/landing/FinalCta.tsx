import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";

export function FinalCta() {
  return (
    <section id="final-cta" aria-labelledby="cta-heading" className="scroll-mt-20 bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="container-page max-w-3xl text-center">
        <Reveal>
          <h2 id="cta-heading" className="text-3xl font-semibold sm:text-5xl">
            Your money is sitting in someone else's account.
          </h2>
          <p className="mt-4 text-lg">Let's go get it.</p>
          <div className="mx-auto mt-8 max-w-md text-left">
            <WaitlistForm id="cta" variant="onAccent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}