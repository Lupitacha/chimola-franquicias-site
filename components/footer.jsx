export default function Footer() {
  return (
    <footer className="shell pb-8">
      <div className="panel flex flex-col gap-4 px-5 py-6 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
            chimola
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)] md:text-base">
            Herramienta de precalificación pensada para filtrar mejor, ordenar la
            conversación comercial y priorizar plazas con mayor potencial.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#hero" className="button-secondary">
            Volver arriba
          </a>
          <a href="/privacidad" className="button-secondary">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
