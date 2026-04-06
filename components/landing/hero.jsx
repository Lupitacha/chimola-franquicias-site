import Image from "next/image";

import TrackableAnchor from "@/components/trackable-anchor";

const fitGroups = [
  {
    title: "Esto es para vos si",
    items: [
      "Buscás una marca con identidad propia y no un formato genérico.",
      "Tenés capacidad de ejecución, timing real y lectura comercial de plaza.",
      "Querés desarrollar un espacio más ordenado que la multimarca tradicional.",
    ],
  },
  {
    title: "No es para vos si",
    items: [
      "Estás explorando sin foco, sin timing o sin una plaza posible en análisis.",
      "Buscás una propuesta de entrada baja o una franquicia masiva sin criterio de marca.",
      "Priorizás una oportunidad oportunista por encima de una construcción comercial consistente.",
    ],
  },
];

export function Hero() {
  return (
    <section id="hero" className="shell pb-12 pt-6 md:pb-20 md:pt-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <span className="eyebrow">Chimola</span>

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

          <div className="grid gap-3 md:grid-cols-2">
            {fitGroups.map((group) => (
              <article
                key={group.title}
                className="card bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,250,246,0.98))]"
              >
                <p className="text-[0.76rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-3 text-[0.98rem] leading-7 text-[var(--muted)]">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--ink)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
