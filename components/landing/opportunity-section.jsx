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
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
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

        <div className="grid gap-4 md:auto-rows-fr md:grid-cols-2">
          {stats.map((item) => (
            <article key={item.label} className="card h-full">
              <p className="font-display text-[1.5rem] leading-tight font-semibold tracking-tight text-[var(--ink)] md:text-[1.82rem]">
                {item.value}
              </p>
              <p className="label-strong">
                {item.label}
              </p>
              <p className="copy-muted-strong mt-3">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 card bg-[linear-gradient(180deg,rgba(235,224,251,0.26),rgba(255,255,255,0.96))]">
        <p className="label-strong">
          Por qué este modelo tiene sentido hoy
        </p>
        <ul className="mt-4 space-y-3 text-[0.96rem] leading-7 text-[color:rgba(22,22,33,0.76)] md:text-[1rem]">
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
