import Image from "next/image";

const cards = [
  {
    title: "Universo de marca completo",
    body: "Marroquinería, indumentaria, travel, escolar, bazar y regalables en una sola lectura comercial.",
  },
  {
    title: "Calendario activo todo el año",
    body: "La propuesta reparte momentos de venta entre vuelta al cole, temporadas AW/SS, gifting y categorías permanentes.",
  },
  {
    title: "Acompañamiento con estándar",
    body: "Proyecto de tienda, lineamiento visual, materiales oficiales y un marco más ordenado que la multimarca tradicional.",
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
      <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="panel relative min-h-[340px] overflow-hidden">
          <Image
            src="/assets/chimola/store-interior.png"
            alt="Interior de tienda Chimola con visual merchandising ordenado."
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/18 to-transparent p-6 text-white md:p-8">
            <span className="eyebrow border-white/15 bg-white/10 text-white/80">
              El modelo
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-4xl">
              Menos brochure. Más propuesta de negocio clara.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/88 md:text-base">
              La oportunidad está en una tienda que se entiende rápido: marca
              reconocible, surtido complementario y una experiencia visual que ayuda a
              vender mejor.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-4">
            <span className="eyebrow">Qué propone Chimola</span>
            <h2 className="section-title">
              Una expansión selectiva para operadores con foco real en ejecución.
            </h2>
            <p className="section-copy max-w-2xl">
              Esta propuesta no busca volumen indiscriminado. Busca plazas bien
              evaluadas, ubicaciones con sentido y socios que puedan operar con
              involucramiento, estándar y timing.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <article key={card.title} className="card">
                <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>

          <div className="card">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Categorías y campañas que sostienen la venta
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
