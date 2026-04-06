import Image from "next/image";

import TrackableAnchor from "@/components/trackable-anchor";

const metrics = [
  { value: "+10 años", label: "de trayectoria y construcción de marca" },
  { value: "+80 m2", label: "de metraje sugerido más depósito" },
  { value: "Sin regalías", label: "y fee mensual de referencia" },
];

export function Hero() {
  return (
    <section id="hero" className="shell pb-12 pt-6 md:pb-20 md:pt-10">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="space-y-6">
          <span className="eyebrow">Chimola franquicias</span>

          <div className="space-y-4">
            <h1 className="font-display text-[2.5rem] leading-[0.98] font-semibold tracking-tight text-[var(--ink)] md:text-[4.45rem]">
              Identidad de marca en un concepto de negocio diferente
            </h1>
            <p className="section-copy max-w-xl">
              Chimola desarrolla espacios exclusivos para operadores que buscan una
              propuesta visualmente fuerte, categorías complementarias y una visión
              comercial compartida.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <TrackableAnchor
              href="#evaluar"
              className="button-primary"
              eventParams={{ cta_name: "hero_eval", cta_location: "hero" }}
            >
              Evaluar mi plaza (3 min)
            </TrackableAnchor>
            <TrackableAnchor
              href="#modelo"
              className="button-secondary"
              eventParams={{ cta_name: "hero_model", cta_location: "hero" }}
            >
              Ver el modelo
            </TrackableAnchor>
          </div>

          <p className="text-sm leading-7 text-[var(--muted)]">
            Pensado para operadores con plaza evaluable, timing concreto y capacidad
            real de ejecutar una propuesta de marca.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <article key={metric.value} className="card px-4 py-4">
                <p className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel overflow-hidden p-0">
          <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[580px]">
            <Image
              src="/assets/chimola-curated/hero-main.jpg"
              alt="Imagen editorial de Chimola con presencia de marca y producto."
              fill
              className="object-cover object-[58%_center]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
