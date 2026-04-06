const scaleCards = [
  {
    title: "Escala",
    body: "Un formato pensado para plazas con dimensión comercial, recorrido de tienda y soporte operativo acorde.",
  },
  {
    title: "Estructura",
    body: "Requiere ejecución, orden y capacidad de sostener una propuesta con categorías, exhibición y calendario activo.",
  },
  {
    title: "Selección de plaza",
    body: "La oportunidad se construye mejor cuando plaza, ubicación y formato tienen sentido para el modelo.",
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
        <span className="eyebrow">Escala del formato</span>
        <h2 className="section-title">
          Una propuesta pensada para operadores con capacidad real de ejecución
        </h2>
        <p className="section-copy">
          No se trata sólo de abrir un punto de venta. Se trata de desarrollar un
          espacio con identidad, operación ordenada y capacidad de sostener una
          propuesta comercial de valor.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {scaleCards.map((item) => (
          <article key={item.title} className="card">
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
