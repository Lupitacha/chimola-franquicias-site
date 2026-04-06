import Image from "next/image";

const cards = [
  {
    title: "Categorías complementarias",
    body: "Marroquinería, indumentaria, travel, escolar, bazar y regalables en una sola propuesta de marca.",
  },
  {
    title: "Calendario activo",
    body: "La marca distribuye momentos de venta entre temporadas, escolar, gifting y categorías permanentes.",
  },
  {
    title: "Acompañamiento con estándar",
    body: "Proyecto de tienda, lineamientos visuales y una lectura comercial más ordenada desde el inicio.",
  },
];

const chips = [
  "Back to school",
  "Marroquinería AW / SS",
  "Indumentaria AW / SS",
  "Travel",
  "Bazar y regalería",
  "Complementos",
];

export function ModelSection() {
  return (
    <section id="modelo" className="shell py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <div className="space-y-5">
          <div className="space-y-4">
            <span className="eyebrow">La propuesta</span>
            <h2 className="section-title">
              Producto, diseño y moda pensada por y para el mercado argentino.
            </h2>
            <p className="section-copy max-w-2xl">
              Un modelo de marca que combina un desarrollo propio pensado para este
              contexto desafiante.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <article key={card.title} className="card">
                <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>

          <div className="card">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Categorías y líneas de producto
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-[0.88fr_1.12fr] md:items-center">
              <div className="panel relative min-h-[172px] overflow-hidden rounded-[24px] border border-black/8 bg-black">
                <Image
                  src="/assets/chimola-curated/pdf-page-9.png"
                  alt="Líneas de producto Chimola organizadas por categorías."
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="text-sm leading-7 text-[var(--muted)]">
                La propuesta combina líneas de producto pensadas para trabajar categorías
                complementarias y sostener lectura comercial a lo largo del calendario.
              </p>
            </div>
          </div>
        </div>

        <div className="panel overflow-hidden p-0">
          <div className="relative min-h-[340px] md:min-h-[520px]">
            <Image
              src="/assets/chimola-curated/universe-lifestyle.jpg"
              alt="Universo visual Chimola con una escena lifestyle aspiracional."
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
