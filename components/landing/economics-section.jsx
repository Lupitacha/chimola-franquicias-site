const scaleCards = [
  {
    title: "Escala",
    body: "Un formato pensado para plazas con dimensión comercial, recorrido de tienda y soporte operativo acorde.",
  },
  {
    title: "Capacidad de ejecución",
    body: "La propuesta necesita gestión, seguimiento y capacidad de llevar adelante una operación cuidada.",
  },
  {
    title: "Plaza y ubicación",
    body: "El modelo necesita una plaza bien evaluada y una ubicación coherente con la propuesta.",
  },
  {
    title: "Capacidad de gestión",
    body: "Busca operadores con criterio comercial, timing real e involucramiento suficiente para desarrollar el espacio.",
  },
];

export function EconomicsSection() {
  return (
    <section id="economia" className="shell py-10 md:py-14">
      <div className="space-y-4 max-w-3xl">
        <span className="eyebrow">Condiciones del modelo</span>
        <h2 className="section-title">
          Una oportunidad para operadores que puedan sostener una propuesta de valor real
        </h2>
        <p className="section-copy">
          El modelo requiere una mirada más amplia que una simple apertura: plaza,
          formato, ejecución y consistencia operativa.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {scaleCards.map((item) => (
          <article key={item.title} className="card h-full">
            <p className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
              {item.title}
            </p>
            <p className="mt-3 text-[0.98rem] leading-7 text-[var(--muted)]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
