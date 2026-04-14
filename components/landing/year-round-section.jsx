import Image from "next/image";

export function YearRoundSection() {
  return (
    <section id="calendario" className="shell py-10 md:py-14">
      <div className="panel relative overflow-hidden bg-white p-0">
        <div className="absolute inset-x-0 top-0 z-10">
          <div className="absolute inset-0 h-[240px] bg-gradient-to-b from-black/78 via-black/40 to-transparent md:h-[300px]" />
          <div className="relative max-w-3xl space-y-4 px-5 py-5 text-white md:px-8 md:py-8 lg:px-10 lg:py-10">
            <span className="eyebrow border-white/18 bg-white/12 text-white">
              Trabajo comercial todo el año
            </span>
            <h2 className="max-w-[12ch] font-display text-[2.05rem] leading-[1.02] font-semibold tracking-tight md:text-[3rem] lg:text-[3.25rem]">
              Un calendario comercial que amplía momentos de producto y oportunidades de venta
            </h2>
          </div>
        </div>

        <div className="bg-white pt-[220px] md:pt-[300px] lg:pt-[340px]">
          <div className="px-5 pb-5 md:px-8 lg:px-10">
            <div className="-mt-3 max-w-3xl rounded-[24px] border border-black/8 bg-white/96 px-5 py-4 shadow-[0_18px_40px_rgba(21,22,33,0.08)] md:-mt-5 md:px-6 md:py-5">
              <p className="text-[0.98rem] leading-7 font-medium text-[var(--ink)] md:text-[1.04rem] md:leading-8">
                La propuesta integra campañas, categorías y momentos de producto que
                permiten trabajar la marca con continuidad comercial a lo largo del año.
              </p>
            </div>
          </div>
          <Image
            src="/assets/chimola-curated/pdf-page-11-large.png"
            alt="Calendario anual Chimola con campañas y momentos comerciales durante todo el año."
            width={1684}
            height={1190}
            className="w-full h-auto bg-white"
          />
          <p className="px-5 pb-5 pt-3 text-[0.98rem] leading-7 text-[var(--muted)] md:px-8 md:pb-8">
            La propuesta combina líneas permanentes con campañas y estacionalidades complementarias.
          </p>
        </div>
      </div>
    </section>
  );
}
