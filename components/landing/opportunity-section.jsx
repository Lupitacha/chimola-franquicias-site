const stats = [
  {
    value: "15+ países",
    label: "presencia internacional",
    body: "Una marca argentina con desarrollo local y expansión en más de 15 países.",
  },
  {
    value: "+20 diseñadores in-house",
    label: "desarrollo de producto propio",
    body: "Pensado por y para el mercado argentino.",
  },
  {
    value: "Marketing + Brand",
    label: "decisiones basadas en data",
    body: "Equipo interno para sostener identidad, comunicación y consistencia.",
  },
  {
    value: "En expansión",
    label: "etapa actual",
    body: "La marca atraviesa una etapa de expansión que busca plazas con criterio y operadores sólidos.",
  },
];

const reasons = [
  "La oportunidad nace de una marca que ya tiene identidad, amplitud de categorías y desarrollo propio.",
  "El formato exclusivo permite trabajar mejor producto, visual merchandising y experiencia de tienda.",
  "La expansión se plantea con criterio, buscando socios que puedan sostener una propuesta de valor real.",
];

export function OpportunitySection() {
  return (
    <section id="oportunidad" className="shell py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-4">
          <span className="eyebrow">Una marca en expansión</span>
          <h2 className="section-title">
            Una marca argentina con desarrollo propio, estructura interna y proyección internacional
          </h2>
          <p className="section-copy">
            Detrás de la propuesta hay desarrollo propio, equipo interno y una visión
            de crecimiento que permite pensar expansión con más consistencia y mejor
            lectura comercial.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {stats.map((item) => (
            <article key={item.label} className="card h-full">
              <p className="font-display text-[1.72rem] leading-tight font-semibold tracking-tight text-[var(--ink)] md:text-[2rem]">
                {item.value}
              </p>
              <p className="mt-2 text-[0.72rem] leading-5 font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                {item.label}
              </p>
              <p className="mt-3 text-[0.98rem] leading-7 text-[var(--muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 card bg-[linear-gradient(180deg,rgba(235,224,251,0.26),rgba(255,255,255,0.96))]">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
          Por qué este modelo tiene sentido hoy
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
