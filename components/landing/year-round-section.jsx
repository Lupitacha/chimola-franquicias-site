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
            <h2 className="font-display text-[2.15rem] leading-[1.02] font-semibold tracking-tight md:text-[3.35rem]">
              Un calendario que permite trabajar la marca con distintos momentos de producto a lo largo del año
            </h2>
            <p className="max-w-2xl text-[1rem] leading-7 text-white/82 md:text-[1.08rem] md:leading-8">
              La oportunidad no se apoya en una sola temporada. Chimola combina líneas,
              campañas y categorías complementarias para sostener actividad comercial durante todo el calendario.
            </p>
          </div>
        </div>

        <div className="bg-white pt-[220px] md:pt-[300px] lg:pt-[340px]">
          <Image
            src="/assets/chimola-curated/pdf-page-11-large.png"
            alt="Calendario anual Chimola con campañas y momentos comerciales durante todo el año."
            width={1684}
            height={1190}
            className="w-full h-auto bg-white"
          />
        </div>
      </div>
    </section>
  );
}
