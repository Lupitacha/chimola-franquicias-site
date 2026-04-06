import Image from "next/image";

const pillars = [
  "Lectura clara de categorías.",
  "Visual merchandising con identidad.",
  "Recorrido más ordenado para exhibir y vender.",
];

export function StoreSection() {
  return (
    <section id="espacio" className="shell py-10 md:py-14">
      <div className="space-y-4 max-w-3xl">
        <span className="eyebrow">Experiencia de tienda</span>
        <h2 className="section-title">
          Un formato que potencia producto, exhibición y percepción de marca
        </h2>
        <p className="section-copy">
          La propuesta de tienda busca mejorar lectura, circulación y presentación para
          reforzar la experiencia de marca y acompañar la rotación de cada temporada.
        </p>
      </div>

      <div className="mt-8 panel overflow-hidden p-0">
        <Image
          src="/assets/chimola-curated/store-overview.png"
          alt="Interior de tienda Chimola con visual merchandising ordenado y fuerte identidad de marca."
          width={1235}
          height={687}
          className="w-full h-auto"
        />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {pillars.map((item) => (
          <article key={item} className="card">
            <p className="text-[0.98rem] leading-7 text-[var(--ink)]">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
