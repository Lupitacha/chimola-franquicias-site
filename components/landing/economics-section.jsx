import Image from "next/image";

const economyCards = [
  {
    value: "+80 m2 + depósito",
    title: "Metraje base sugerido",
    body: "Una escala pensada para desarrollar exhibición, mezcla de categorías y recorrido comercial.",
  },
  {
    value: "USD 700 / m2 + IVA",
    title: "Armado comercial",
    body: "Referencia de armado y acondicionamiento, sujeta a metros, estado del local y configuración final.",
  },
  {
    value: "ARS 60M + stock inicial",
    title: "Mercadería de apertura",
    body: "Base orientativa para construir una apertura consistente con el formato y el mix de categorías.",
  },
];

const assumptions = [
  "La validación final depende de plaza, ubicación, frente comercial y metros reales.",
  "No hay regalías. La referencia mensual actual es un fee de USD 300.",
  "El recupero es orientativo y depende de ejecución, mix inicial y velocidad de rotación.",
];

const responseDrivers = [
  "Plaza definida o local identificado.",
  "Timing de apertura menor a 6 meses.",
  "Capital ya pensado para obra y stock inicial.",
  "Participación operativa o mixta durante el lanzamiento.",
];

export function EconomicsSection() {
  return (
    <section id="economia" className="shell py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
        <div className="space-y-4">
          <span className="eyebrow">Inversión</span>
          <h2 className="section-title">
            Una escala pensada para operadores con capacidad de llevar adelante una
            propuesta de alto valor
          </h2>
          <p className="section-copy max-w-2xl">
            La inversión se ordena sobre una base orientativa y se ajusta según plaza,
            ubicación, metros y configuración comercial del espacio.
          </p>
        </div>

        <div className="card grid gap-4 bg-[linear-gradient(180deg,rgba(245,243,255,0.82),rgba(255,255,255,0.94))] md:grid-cols-[0.76fr_1.24fr] md:items-center">
          <div className="panel relative min-h-[150px] overflow-hidden rounded-[22px] border border-black/8">
            <Image
              src="/assets/chimola-curated/economy-focus.jpg"
              alt="Producto Chimola usado como apoyo visual del bloque de inversión."
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-2">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
              Base orientativa
            </p>
            <p className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)]">
              +80 m2 + depósito
            </p>
            <p className="text-sm leading-7 text-[var(--muted)]">
              Escala recomendada para sostener amplitud de exhibición, mezcla de
              producto y una experiencia consistente con el formato.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {economyCards.map((item) => (
          <article key={item.title} className="card">
            <p className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
              {item.value}
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              {item.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="card bg-[linear-gradient(180deg,rgba(219,233,255,0.72),rgba(255,255,255,0.92))]">
          <p className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
            Supuestos que ordenan la conversación
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {assumptions.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--ink)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="card bg-[linear-gradient(180deg,rgba(248,221,233,0.72),rgba(255,255,255,0.92))]">
          <p className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
            Qué acelera una respuesta útil
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {responseDrivers.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--ink)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
