const economyCards = [
  {
    title: "Escala base",
    body: "Tomá como punto de partida locales desde 70 m2 más depósito. El modelo gana potencia cuando la plaza y la ubicación acompañan el estándar de marca.",
  },
  {
    title: "Armado + apertura",
    body: "El armado comercial parte desde USD 700 por m2 + IVA y la mercadería inicial desde ARS 60M, según metros, estado del local y mix de apertura.",
  },
  {
    title: "Estructura mensual",
    body: "No hay regalías. La referencia mensual actual es un fee de USD 300. El recupero es orientativo y depende de ejecución, plaza y velocidad de rotación.",
  },
];

const assumptions = [
  "La validación final depende de plaza, ubicación y frente comercial.",
  "La compra inicial se ajusta al mix y a la escala de apertura.",
  "El score del formulario es una precalificación: no reemplaza la validación comercial.",
];

const operatorFit = [
  "Experiencia operando retail o equipos comerciales.",
  "Decisión con timing concreto, idealmente dentro de 6 meses.",
  "Involucramiento operativo o mixto durante la apertura.",
  "Interés en construir marca, no sólo vender stock.",
];

export function EconomicsSection() {
  return (
    <section id="economia" className="shell py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="space-y-5">
          <div className="space-y-4">
            <span className="eyebrow">Economía en rangos + supuestos</span>
            <h2 className="section-title">
              Claridad económica para filtrar rápido, sin prometer de más.
            </h2>
            <p className="section-copy max-w-2xl">
              La idea es bajar una referencia realista desde el primer contacto: qué
              escala requiere, qué variables cambian por plaza y qué supuestos conviene
              validar antes de avanzar.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {economyCards.map((item) => (
              <article key={item.title} className="card">
                <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <article className="card bg-[linear-gradient(180deg,rgba(219,233,255,0.72),rgba(255,255,255,0.82))]">
            <p className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Supuestos que ordenan la conversación
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
              {assumptions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--ink)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card bg-[linear-gradient(180deg,rgba(248,221,233,0.72),rgba(255,255,255,0.82))]">
            <p className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Perfil que más fit tiene
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
              {operatorFit.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--ink)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
