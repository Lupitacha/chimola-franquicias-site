import Image from "next/image";

export function YearRoundSection() {
  return (
    <section id="calendario" className="shell py-10 md:py-14">
      <div className="panel overflow-hidden bg-white p-0">
        <div className="relative">
          <Image
            src="/assets/chimola-curated/pdf-page-11-large.png"
            alt="Calendario anual Chimola con campañas y momentos comerciales durante todo el año."
            width={1684}
            height={1190}
            className="h-auto w-full bg-white"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/8 to-transparent" />
          <div className="absolute inset-x-0 top-0 z-10 px-4 pt-4 md:px-8 md:pt-8 lg:px-10 lg:pt-10">
            <div className="max-w-[580px] rounded-[28px] border border-white/16 bg-[linear-gradient(180deg,rgba(22,22,33,0.92),rgba(45,46,66,0.82))] px-5 py-5 shadow-[0_20px_50px_rgba(21,22,33,0.22)] backdrop-blur-sm md:px-6 md:py-6">
              <span className="eyebrow border-white/18 bg-white/12 text-white">
                Trabajo comercial todo el año
              </span>
              <h2 className="mt-4 max-w-[12ch] font-display text-[1.95rem] leading-[1.02] font-semibold tracking-tight text-white md:text-[2.6rem] lg:text-[2.95rem]">
                Un calendario comercial que amplía momentos de producto y oportunidades de venta
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white px-5 pb-5 pt-4 md:px-8 md:pb-8 lg:px-10">
          <div className="max-w-3xl rounded-[24px] border border-black/8 bg-white/96 px-5 py-4 shadow-[0_18px_40px_rgba(21,22,33,0.08)] md:px-6 md:py-5">
            <p className="copy-strong font-medium">
              La propuesta integra campañas, categorías y momentos de producto que
              permiten trabajar la marca con continuidad comercial a lo largo del año.
            </p>
          </div>
          <p className="copy-muted-strong pt-3">
            La propuesta combina líneas permanentes con campañas y estacionalidades complementarias.
          </p>
        </div>
      </div>
    </section>
  );
}
