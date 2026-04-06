import Link from "next/link";

export const metadata = {
  title: "Política de privacidad | Chimola Franquicias",
  description:
    "Texto base de privacidad para el formulario de evaluación de plazas de Chimola Franquicias.",
};

const sections = [
  {
    title: "1. Responsable del tratamiento",
    body: "Completar con razón social, CUIT, domicilio legal y datos de contacto del responsable del tratamiento de datos personales.",
  },
  {
    title: "2. Datos que se recopilan",
    body: "Este formulario puede recopilar datos de contacto, ciudad o provincia, información sobre plaza, horizonte de apertura, capacidad de inversión y antecedentes comerciales para evaluar una posible conversación de expansión.",
  },
  {
    title: "3. Finalidad",
    body: "La finalidad es analizar el encaje comercial de cada consulta, priorizar oportunidades con mayor fit y coordinar contacto comercial. Reemplazar o ampliar según política final.",
  },
  {
    title: "4. Base legal y conservación",
    body: "Completar con la base legal aplicable, el plazo de conservación y los criterios para anonimización o eliminación de la información una vez finalizado el proceso.",
  },
  {
    title: "5. Cesiones, encargados y herramientas",
    body: "Identificar proveedores o plataformas que intervengan en el almacenamiento, la analítica, el envío de correos o el seguimiento comercial. Incluir transferencias internacionales si corresponde.",
  },
  {
    title: "6. Derechos de la persona usuaria",
    body: "Indicar cómo ejercer acceso, rectificación, actualización y supresión de datos, incluyendo canal de contacto y tiempos de respuesta.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="shell py-10 md:py-16">
      <div className="panel mx-auto max-w-4xl p-6 md:p-10">
        <div className="mb-8 flex flex-col gap-4">
          <span className="eyebrow">Legal placeholder</span>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
            Política de privacidad
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
            Este texto es una base de trabajo. Antes de publicar, conviene revisar los
            datos del responsable, la base legal, los plazos de conservación y el
            detalle de proveedores con asesoramiento legal.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-black/8 bg-white/70 p-5">
              <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]">
                {section.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)] md:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/" className="button-secondary">
            Volver a la evaluación
          </Link>
          <p className="text-sm text-[var(--muted)]">
            Placeholder legal para completar con el equipo jurídico y el responsable de datos.
          </p>
        </div>
      </div>
    </main>
  );
}
