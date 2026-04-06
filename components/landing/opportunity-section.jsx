const reasons = [
  {
    title: "Qué es Chimola",
    body: "Una marca argentina con diseño propio, categorías complementarias y una identidad visual capaz de construir experiencia de tienda.",
  },
  {
    title: "Por qué esta oportunidad existe",
    body: "Porque combina marca, producto y calendario comercial en un formato más ordenado que la multimarca tradicional.",
  },
  {
    title: "Qué busca la marca",
    body: "Plazas con potencial, ubicaciones con sentido y operadores que puedan ejecutar con involucramiento real.",
  },
];

const fitList = {
  yes: [
    "Tenés plaza definida o capacidad real de evaluarla.",
    "Querés operar un espacio con identidad de marca y criterio comercial.",
    "Buscás una propuesta para trabajar temporadas, categorías y calendario completo.",
  ],
  no: [
    "Estás explorando sin plaza, sin timing o sin capacidad de ejecución.",
    "Buscás sólo reventa de producto o una oportunidad de bajo involucramiento.",
    "Tu decisión depende únicamente del costo inicial.",
  ],
};

export function OpportunitySection() {
  return (
    <section id="oportunidad" className="shell py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-4">
          <span className="eyebrow">La oportunidad</span>
          <h2 className="section-title">
            Qué es Chimola y por qué este formato tiene sentido hoy
          </h2>
          <p className="section-copy">
            La propuesta no parte sólo de producto. Parte de una marca con identidad,
            categorías que se complementan y un formato capaz de ordenar mejor la venta
            durante todo el año.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reasons.map((item) => (
            <article key={item.title} className="card">
              <p className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="card bg-[linear-gradient(180deg,rgba(248,221,233,0.88),rgba(255,255,255,0.92))]">
          <p className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
            Esto es para vos si
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
            {fitList.yes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--ink)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="card bg-[linear-gradient(180deg,rgba(235,224,251,0.88),rgba(255,255,255,0.92))]">
          <p className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
            No es para vos si
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
            {fitList.no.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--ink)]/55" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
