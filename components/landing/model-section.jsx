import Image from "next/image";

const cards = [
  {
    title: "Marca con sistema",
    body: "La propuesta se construye desde una identidad clara, con producto, visual y comunicación alineados.",
  },
  {
    title: "Amplitud de categorías",
    body: "El formato articula líneas complementarias para sostener lectura comercial a lo largo del año.",
  },
  {
    title: "Modelo más ordenado",
    body: "Espacio, exhibición y lineamientos visuales se piensan desde el inicio con una lógica más consistente.",
  },
];

export function ModelSection() {
  return (
    <section id="modelo" className="shell py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-5">
          <div className="space-y-4">
            <span className="eyebrow">Qué propone el modelo</span>
            <h2 className="section-title">
              Un espacio exclusivo que reúne universo de marca, producto y experiencia comercial
            </h2>
            <p className="section-copy max-w-2xl">
              Chimola propone un formato pensado para construir una tienda con identidad
              clara, categorías relacionadas y una lectura de negocio más fuerte desde
              el punto de venta.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <article key={card.title} className="card">
                <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-7 text-[var(--muted)]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel overflow-hidden p-0">
          <div className="relative min-h-[360px] md:min-h-[520px]">
            <Image
              src="/assets/chimola-curated/universe-lifestyle.jpg"
              alt="Universo visual Chimola con una escena lifestyle aspiracional."
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
