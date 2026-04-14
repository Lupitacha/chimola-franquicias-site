import Image from "next/image";

import TrackableAnchor from "@/components/trackable-anchor";

const fitGroups = [
  {
    title: "Esto es para vos si",
    items: [
      "Ves valor en una propuesta con categorías complementarias y marca fuerte.",
      "Tenés criterio comercial para evaluar plaza, formato y oportunidad.",
      "Querés desarrollar un negocio con una visión compartida con la marca.",
    ],
  },
  {
    title: "No es para vos si",
    items: [
      "Todavía no tenés claridad sobre plaza, timing o capacidad de ejecución.",
      "Estás buscando una oportunidad rápida, de baja complejidad o baja inversión.",
      "Priorizás volumen antes que identidad, experiencia y orden comercial.",
    ],
  },
];

export function Hero() {
  return (
    <section id="hero" className="shell pb-12 pt-6 md:pb-16 md:pt-10">
      <div className="grid gap-7 lg:grid-cols-[0.94fr_1.06fr] lg:items-start xl:gap-10">
        <div className="space-y-5">
          <span className="eyebrow">Chimola</span>

          <div className="space-y-4">
            <h1 className="max-w-[12.4ch] font-display text-[2.28rem] leading-[0.98] font-semibold tracking-tight text-[var(--ink)] md:text-[3.3rem] lg:text-[3.45rem] xl:text-[3.8rem]">
              Diseño, marca y negocio en un formato comercial sólido en cualquier contexto.
            </h1>
            <p className="section-copy max-w-[42rem]">
              Un formato pensado para operadores que valoran marca, exhibición y una
              propuesta más ordenada que la multimarca tradicional.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <TrackableAnchor
              href="#evaluar"
              className="button-primary"
              eventParams={{ cta_name: "hero_eval", cta_location: "hero" }}
            >
              Evaluar mi plaza
            </TrackableAnchor>
            <TrackableAnchor
              href="#modelo"
              className="button-secondary"
              eventParams={{ cta_name: "hero_model", cta_location: "hero" }}
            >
              Cómo funciona
            </TrackableAnchor>
          </div>

          <div className="grid gap-3 md:auto-rows-fr md:grid-cols-2">
            {fitGroups.map((group) => (
              <article
                key={group.title}
                className="card h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,250,246,0.98))]"
              >
                <p className="label-strong">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-3.5 text-[0.96rem] leading-7 text-[color:rgba(22,22,33,0.76)]">
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

        <div className="panel overflow-hidden p-0 lg:mt-1">
          <div className="relative min-h-[380px] sm:min-h-[500px] lg:min-h-[610px] xl:min-h-[640px]">
            <Image
              src="/assets/chimola-curated/hero-img221.jpg"
              alt="Fachada de espacio exclusivo Chimola con identidad de marca visible y propuesta comercial clara."
              fill
              className="object-cover object-[center_68%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
