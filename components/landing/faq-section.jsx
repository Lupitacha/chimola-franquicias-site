const faqs = [
  {
    question: "¿Qué evalúa esta instancia inicial?",
    answer:
      "Plaza, timing, capital disponible, experiencia operativa, rol previsto y tipo de ubicación. Sirve para ordenar la conversación comercial y priorizar casos con mayor encaje.",
  },
  {
    question: "¿Completar la evaluación implica un compromiso?",
    answer:
      "No. Es una instancia breve para validar si vale la pena avanzar a una conversación comercial más profunda y a una revisión específica de plaza y local.",
  },
  {
    question: "¿Cuándo pasamos a una conversación económica?",
    answer:
      "Una vez revisados el tipo de plaza, el tamaño estimado, la ubicación y el estado real del proyecto. La evaluación inicial ordena primero el encaje comercial.",
  },
  {
    question: "¿Puedo aplicar si todavía no tengo el local identificado?",
    answer:
      "Podés completar la evaluación igual. La prioridad sube cuando ya existe plaza definida o local en vista, pero el formulario también ayuda a detectar oportunidades en etapa previa.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="shell py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Preguntas frecuentes antes de avanzar.</h2>
          <p className="section-copy">
            La idea es despejar dudas de entrada para que la conversación comercial
            sea más clara y más productiva.
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
