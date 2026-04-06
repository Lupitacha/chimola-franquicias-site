import Image from "next/image";

export function YearRoundSection() {
  return (
    <section id="calendario" className="shell py-10 md:py-14">
      <div className="space-y-5">
        <div className="space-y-4 max-w-3xl">
          <span className="eyebrow">Trabajo comercial todo el año</span>
          <h2 className="section-title">
            Un calendario que permite trabajar la marca con distintos momentos de
            producto a lo largo del año
          </h2>
          <p className="section-copy">
            La oportunidad no se apoya en una sola temporada. Chimola combina líneas,
            campañas y categorías complementarias para sostener actividad comercial
            durante todo el calendario.
          </p>
        </div>

        <article className="card overflow-hidden bg-[var(--ink)] p-3 md:p-4">
          <div className="panel relative min-h-[340px] overflow-hidden rounded-[24px] border border-white/10 bg-black">
            <Image
              src="/assets/chimola-curated/pdf-page-11.png"
              alt="Calendario anual Chimola con campañas y momentos comerciales durante todo el año."
              fill
              className="object-contain p-2 md:p-4"
            />
          </div>
        </article>

        <div className="grid gap-4 md:grid-cols-[0.62fr_1.38fr] md:items-center">
          <div className="panel relative min-h-[180px] overflow-hidden rounded-[24px] border border-black/8 bg-black">
            <Image
              src="/assets/chimola-curated/pdf-page-8.png"
              alt="Unidades de negocio Chimola como respaldo del calendario anual."
              fill
              className="object-contain p-2"
            />
          </div>
          <p className="text-sm leading-6 text-[var(--muted)]">
            La amplitud de unidades de negocio acompaña este calendario y permite
            trabajar con momentos de producto, categorías permanentes y oportunidades
            de venta complementarias.
          </p>
        </div>
      </div>
    </section>
  );
}
