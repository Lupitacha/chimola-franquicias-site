import Image from "next/image";

import TrackableAnchor from "@/components/trackable-anchor";

const fitList = {
  yes: [
    "Ya conocés tu plaza y querés validar encaje real.",
    "Buscás una marca con diseño, calendario y lectura comercial clara.",
    "Querés operar un negocio con involucramiento y timing concreto.",
  ],
  no: [
    "Estás explorando sin capital, sin plaza o sin horizonte de apertura.",
    "Buscás una franquicia de bajo involucramiento o sólo reventa de producto.",
    "Tu decisión depende únicamente del costo inicial.",
  ],
};

const metrics = [
  { value: "+10 años", label: "de trayectoria de marca" },
  { value: "70 m2+", label: "de local sugerido más depósito" },
  { value: "Sin regalías", label: "y fee mensual de referencia" },
];

export function Hero() {
  return (
    <section id="hero" className="shell pb-10 pt-6 md:pb-16 md:pt-10">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">Espacios exclusivos Chimola</span>
          <div className="space-y-4">
            <h1 className="section-title max-w-4xl">
              Una marca con identidad y una herramienta concreta para evaluar si tu
              plaza tiene fit comercial.
            </h1>
            <p className="section-copy max-w-2xl">
              Chimola desarrolla espacios exclusivos para operadores que buscan una
              propuesta visualmente sólida, con categorías complementarias y un
              calendario activo durante todo el año.
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

          <div className="flex flex-wrap gap-2">
            {metrics.map((metric) => (
              <div key={metric.value} className="chip gap-2 px-4 py-2 text-left">
                <span className="font-display text-sm font-semibold text-[var(--ink)]">
                  {metric.value}
                </span>
                <span className="text-[0.72rem] font-medium text-[var(--muted)]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="card border-transparent bg-[linear-gradient(180deg,rgba(248,221,233,0.9),rgba(255,255,255,0.82))]">
              <p className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]">
                Esto es para vos si
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {fitList.yes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--ink)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card border-transparent bg-[linear-gradient(180deg,rgba(217,241,236,0.9),rgba(255,255,255,0.82))]">
              <p className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]">
                No es para vos si
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {fitList.no.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--ink)]/45" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_0.74fr] md:grid-rows-[1fr_auto]">
          <div className="panel relative min-h-[360px] overflow-hidden md:row-span-2">
            <Image
              src="/assets/chimola/hero-editorial.jpg"
              alt="Imagen editorial de Chimola con universo de producto y marca."
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
                Dejate llevar. Chimola va con vos.
              </p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/90 md:text-base">
                Una propuesta pensada para vender con marca, exhibición y criterio
                comercial, no sólo con surtido.
              </p>
            </div>
          </div>

          <div className="panel relative min-h-[168px] overflow-hidden">
            <Image
              src="/assets/chimola/storefront.jpg"
              alt="Fachada de un local Chimola con identidad clara."
              fill
              className="object-cover"
            />
          </div>

          <div className="card bg-[linear-gradient(180deg,rgba(235,224,251,0.85),rgba(255,255,255,0.82))]">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
              Qué busca esta página
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--ink)]">
              Ordenar la conversación comercial desde el inicio: plaza, timing,
              capital, perfil operativo y nivel de fit preliminar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
