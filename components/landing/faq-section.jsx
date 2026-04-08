const faqs = [
  {
    question: "¿Qué evalúa esta instancia inicial?",
    answer:
      "Evaluamos plaza, timing, capital disponible, experiencia operativa, rol previsto y tipo de ubicación para ordenar la conversación comercial y priorizar casos con mayor encaje.",
  },
  {
    question: "¿Completar la evaluación implica un compromiso?",
    answer:
      "No. Es sólo un primer filtro para entender si existe alineación antes de pasar a una siguiente instancia.",
  },
  {
    question: "¿Cuándo pasamos a una conversación económica?",
    answer:
      "Primero validamos encaje comercial; después profundizamos las variables concretas del proyecto.",
  },
  {
    question: "¿Puedo aplicar si todavía no tengo el local identificado?",
    answer:
      "Sí. Tener plaza definida o local en análisis acelera la lectura, pero también podemos evaluar casos en una etapa anterior.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="shell py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Preguntas frecuentes</h2>
          <p className="section-copy">
            Una primera guía para ordenar expectativas y entender cómo sigue el proceso.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details key={item.question} className="card group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold tracking-tight text-[var(--ink)]">
                <span>{item.question}</span>
                <span className="faq-plus inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-xl transition-transform">
                  +
                </span>
              </summary>
              <p className="pt-4 text-sm leading-7 text-[var(--muted)] md:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
