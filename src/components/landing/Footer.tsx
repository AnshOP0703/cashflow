const columns = [
  { title: "Product", links: ["How it works", "Pricing", "FAQ"] },
  { title: "Company", links: ["About", "Blog", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms", "Security"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <p className="text-lg font-semibold tracking-tight">
            Tagada<span className="text-primary">.</span>
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Invoicing that chases unpaid invoices for you, in India and worldwide.
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-semibold">{col.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {col.links.map((l) => (
                <li key={l}>
                  {/* TODO: replace placeholder hrefs with real pages */}
                  <a
                    href="#"
                    className="rounded transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container-page mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Tagada. All rights reserved.</p>
      </div>
    </footer>
  );
}