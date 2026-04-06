import Image from "next/image";

export function YearRoundSection() {
  return (
    <section id="calendario" className="py-10 md:py-14">
      <div className="shell space-y-4 max-w-3xl">
        <span className="eyebrow">Trabajo comercial todo el año</span>
        <h2 className="section-title">
          Un calendario que permite trabajar la marca con distintos momentos de
          producto a lo largo del año
        </h2>
        <p className="section-copy">
          La oportunidad no se apoya en una sola temporada. Chimola combina líneas,
          campañas y categorías complementarias para sostener actividad comercial
          durante todo el calendario.
        </p>
      </div>

      <div className="mt-8 bg-black">
        <div className="mx-auto w-full max-w-[1520px] px-0 py-0 md:px-6 md:py-6">
          <Image
            src="/assets/chimola-curated/pdf-page-11.png"
            alt="Calendario anual Chimola con campañas y momentos comerciales durante todo el año."
            width={842}
            height={595}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
