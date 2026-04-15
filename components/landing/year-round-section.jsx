import Image from "next/image";

export function YearRoundSection() {
  return (
    <section id="calendario" className="shell py-10 md:py-14">
      <div className="max-w-3xl space-y-4">
        <span className="eyebrow">Trabajo comercial todo el año</span>
        <h2 className="section-title max-w-[14ch]">
          Un calendario comercial que amplía momentos de producto y oportunidades de venta
        </h2>
      </div>

      <div className="panel mt-8 overflow-hidden bg-white p-3 md:p-5">
        <Image
          src="/assets/chimola-curated/pdf-page-11-large.png"
          alt="Calendario anual Chimola con campañas y momentos comerciales durante todo el año."
          width={1684}
          height={1190}
          className="h-auto w-full rounded-[20px] border border-black/6 bg-white"
        />
      </div>
    </section>
  );
}
