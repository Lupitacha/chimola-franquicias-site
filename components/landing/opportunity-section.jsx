const stats = [
  {
    value: "15+ países",
    label: "presencia comercial",
    body: "Una marca argentina con recorrido y lectura internacional.",
  },
  {
    value: "+20 diseñadores",
    label: "producto propio",
    body: "Desarrollo interno pensado para el mercado argentino y su proyección.",
  },
  {
    value: "+15 personas",
    label: "marketing + brand",
    body: "Equipo interno para sostener identidad, comunicación y consistencia.",
  },
  {
    value: "En expansión",
    label: "estructura de crecimiento",
    body: "Una etapa de desarrollo que busca plazas con criterio y operadores sólidos.",
  },
];

const reasons = [
  "La oportunidad no se apoya en una sola categoría: combina producto, identidad y construcción de marca.",
  "El formato exclusivo permite exhibir mejor, ordenar la propuesta y darle más claridad comercial a cada plaza.",
  "La expansión busca operadores con capacidad real de ejecución y una visión compartida del modelo.",
];

export function OpportunitySection() {
  return (
    <section id="oportunidad" className="shell py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-4">
          <span className="eyebrow">Qué es Chimola hoy</span>
          <h2 className="section-title">
            Una marca argentina con desarrollo propio, estructura interna y ambición de crecimiento
          </h2>
          <p className="section-copy">
            Chimola integra producto, marketing y brand in-house para sostener una
            identidad consistente, desarrollar categorías y crecer con una mirada
            comercial más estable. Esa base es la que hace posible pensar espacios
            exclusivos con una lógica de marca, no sólo de surtido.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {stats.map((item) => (
            <article key={item.label} className="card">
              <p className="font-display text-[2rem] font-semibold tracking-tight text-[var(--ink)] md:text-[2.2rem]">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                {item.label}
              </p>
              <p className="mt-3 text-[0.98rem] leading-7 text-[var(--muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 card bg-[linear-gradient(180deg,rgba(235,224,251,0.26),rgba(255,255,255,0.96))]">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
          Por qué esta oportunidad existe ahora
        </p>
        <ul className="mt-4 space-y-3 text-[0.98rem] leading-7 text-[var(--muted)] md:text-[1.02rem]">
          {reasons.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--ink)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
