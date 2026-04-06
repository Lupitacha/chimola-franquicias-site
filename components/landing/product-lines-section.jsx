import Image from "next/image";

export function ProductLinesSection() {
  return (
    <section id="lineas" className="shell py-10 md:py-14">
      <div className="space-y-4 max-w-3xl">
        <span className="eyebrow">Categorías y líneas de producto</span>
        <h2 className="section-title">
          Una arquitectura de líneas pensada para sostener complementariedad y lectura comercial
        </h2>
        <p className="section-copy">
          La propuesta combina líneas pensadas para trabajar categorías complementarias
          y sostener una oferta más clara a lo largo del calendario.
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
