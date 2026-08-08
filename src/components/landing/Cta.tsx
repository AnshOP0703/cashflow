import { cn } from "@/lib/utils";

/** Primary amber call to action used at the inline touchpoints between sections. */
export function CtaLink({
  label,
  note,
  className,
}: {
  label: string;
  note?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-5 gap-y-3", className)}>
      <a
        href="#waitlist"
        className="rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition hover:-translate-y-px hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        {label}
      </a>
      {note && <p className="text-sm text-muted-foreground">{note}</p>}
    </div>
  );
}
