import Image from "next/image";

const pillars = [
  "Lectura clara de categorías",
  "Visual merchandising con identidad",
  "Un espacio diseñado para acompañar la venta",
];

export function StoreSection() {
  return (
    <section id="espacio" className="shell py-10 md:py-14">
      <div className="max-w-3xl space-y-4">
        <span className="eyebrow">Experiencia de tienda</span>
        <h2 className="section-title">
          Un espacio que mejora la experiencia, la lectura comercial y la percepción de marca
        </h2>
        <p className="section-copy">
          El espacio se diseña para ordenar categorías, mejorar exhibición y darle más
          claridad a la propuesta desde el primer contacto.
        </p>
      </div>

      <div className="mt-8 panel overflow-hidden p-0">
        <div className="relative aspect-[16/10] md:aspect-[16/9]">
          <Image
            src="/assets/chimola-curated/store-overview.png"
            alt="Interior de tienda Chimola con visual merchandising ordenado y fuerte identidad de marca."
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:auto-rows-fr md:grid-cols-3">
        {pillars.map((item) => (
          <article key={item} className="card h-full">
            <p className="text-[0.96rem] leading-7 text-[var(--ink)]">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
