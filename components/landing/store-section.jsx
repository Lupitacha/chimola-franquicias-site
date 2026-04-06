import Image from "next/image";

const pillars = [
  "Visual merchandising con identidad clara.",
  "Recorrido pensado para ordenar categorías.",
  "Rotación estacional para sostener el calendario comercial.",
];

export function StoreSection() {
  return (
    <section id="espacio" className="shell py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div className="panel overflow-hidden p-0">
          <div className="relative min-h-[340px] md:min-h-[460px]">
            <Image
              src="/assets/chimola-curated/store-experience.jpg"
              alt="Interior de tienda Chimola con exhibición ordenada por categorías."
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-4">
            <span className="eyebrow">Experiencia de tienda</span>
            <h2 className="section-title">
              Un formato que potencia producto, exhibición y percepción de marca
            </h2>
            <p className="section-copy max-w-2xl">
              La propuesta de tienda busca mejorar lectura, circulación y presentación
              para acompañar la rotación de cada temporada y sostener un calendario
              comercial activo durante todo el año.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((item) => (
              <article key={item} className="card">
                <p className="text-sm leading-7 text-[var(--ink)]">{item}</p>
              </article>
            ))}
          </div>

          <div className="card bg-[linear-gradient(180deg,rgba(235,224,251,0.72),rgba(255,255,255,0.92))]">
            <p className="text-sm leading-7 text-[var(--muted)]">
              El espacio exclusivo ayuda a ordenar categorías, sostener rotación y dar
              una lectura de marca más clara desde la exhibición.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
