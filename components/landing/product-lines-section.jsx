import Image from "next/image";

export function ProductLinesSection() {
  return (
    <section id="lineas" className="shell py-10 md:py-14">
      <div className="space-y-4 max-w-3xl">
        <span className="eyebrow">Universo de producto</span>
        <h2 className="section-title">
          Una propuesta de producto amplia, complementaria y pensada para convivir en un mismo espacio
        </h2>
        <p className="section-copy">
          La amplitud de producto permite construir una tienda con más profundidad
          comercial, mejor lectura de categorías y mayor continuidad a lo largo del calendario.
        </p>
        <p className="max-w-2xl text-[0.98rem] leading-7 text-[var(--muted)]">
          No se trata de una sola categoría. Se trata de un universo de producto con
          lógica de convivencia.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-[30px] border border-black/8 bg-white shadow-[0_22px_60px_rgba(21,22,33,0.05)]">
        <Image
          src="/assets/chimola-curated/pdf-page-9.png"
          alt="Líneas de producto Chimola organizadas por categorías."
          width={842}
          height={595}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
