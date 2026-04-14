import Image from "next/image";

const cards = [
  {
    title: "Lenguaje de marca",
    body: "El espacio expresa una identidad reconocible y ordenada, con criterio visual y comercial.",
  },
  {
    title: "Categorías complementarias",
    body: "El formato articula líneas pensadas para convivir entre sí y sostener actividad durante todo el año.",
  },
  {
    title: "Modelo más ordenado",
    body: "Espacio, exhibición y lineamientos visuales se piensan desde el inicio con una lógica más consistente.",
  },
];

export function ModelSection() {
  return (
    <section id="modelo" className="shell py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div className="space-y-5">
          <div className="space-y-4">
            <span className="eyebrow">El formato</span>
            <h2 className="section-title">
              Una propuesta comercial que integra identidad, categorías y experiencia de tienda
            </h2>
            <p className="section-copy max-w-2xl">
              Un formato pensado para desarrollar una tienda con identidad clara,
              categorías y una lectura comercial sólida desde el punto de venta, con
              soporte permanente de la marca.
            </p>
          </div>

          <div className="grid gap-4 md:auto-rows-fr md:grid-cols-3">
            {cards.map((card) => (
              <article key={card.title} className="card h-full">
                <h3 className="font-display text-[1.12rem] font-semibold tracking-tight text-[var(--ink)] md:text-[1.2rem]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-[var(--muted)]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel overflow-hidden p-0">
          <div className="relative min-h-[340px] md:min-h-[460px] lg:min-h-[500px]">
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
