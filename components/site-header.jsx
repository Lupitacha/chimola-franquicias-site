import TrackableAnchor from "@/components/trackable-anchor";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="shell pt-4 md:pt-5">
        <div className="panel flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#hero" className="flex min-w-0 flex-col">
            <span className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
              chimola
            </span>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
              franquicias
            </span>
          </a>

          <nav className="hidden items-center gap-5 text-sm font-semibold text-[var(--muted)] md:flex">
            <a href="#modelo" className="transition hover:text-[var(--ink)]">
              Modelo
            </a>
            <a href="#economia" className="transition hover:text-[var(--ink)]">
              Economía
            </a>
            <a href="#faq" className="transition hover:text-[var(--ink)]">
              FAQ
            </a>
          </nav>

          <TrackableAnchor
            href="#evaluar"
            className="button-primary hidden md:inline-flex"
            eventParams={{ cta_name: "header_eval", cta_location: "header" }}
          >
            Evaluar mi plaza (3 min)
          </TrackableAnchor>
        </div>
      </div>
    </header>
  );
}
