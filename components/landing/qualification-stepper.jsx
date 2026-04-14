"use client";

import { useState } from "react";
import Link from "next/link";

import { computeLeadScore, computeSqlFlag } from "@/lib/scoring";
import { trackLeadEvent } from "@/lib/tracking";

const formType = "evaluar_mi_plaza_stepper";
const slaHours = 24;
const whatsappNumber = "5491144090974";
const contactEmail = "achaul@lautin.com.ar";
const schedulerUrl =
  process.env.NEXT_PUBLIC_SCHEDULER_URL || "https://example.com/agendar-llamada";

const plazaOptions = [
  { value: "", label: "Seleccionar" },
  { value: "local_identificado", label: "Tengo local identificado" },
  { value: "plaza_definida", label: "Tengo plaza definida, local en búsqueda" },
  { value: "evaluando", label: "Estoy evaluando plaza" },
];

const timingOptions = [
  { value: "", label: "Seleccionar" },
  { value: "0_3", label: "0 a 3 meses" },
  { value: "3_6", label: "3 a 6 meses" },
  { value: "6_12", label: "6 a 12 meses" },
  { value: "12_plus", label: "Más de 12 meses" },
];

const capitalOptions = [
  { value: "", label: "Seleccionar" },
  { value: "ready", label: "Capital asignado para apertura y stock inicial" },
  { value: "estimated", label: "Capital disponible, con variables por cerrar" },
  { value: "needs_review", label: "Necesito estructurar parte de la inversión" },
  { value: "exploratory", label: "Estoy explorando sin capital asignado" },
];

const experienceOptions = [
  { value: "", label: "Seleccionar" },
  { value: "multi_local", label: "Opero varios locales o franquicias" },
  { value: "single_local", label: "Opero un local o emprendimiento retail" },
  { value: "category_experience", label: "Tengo experiencia comercial en otra categoría" },
  { value: "none", label: "No tengo experiencia operando retail" },
];

const roleOptions = [
  { value: "", label: "Seleccionar" },
  { value: "operativo", label: "Operativo" },
  { value: "mixto", label: "Mixto" },
  { value: "pasivo", label: "Pasivo" },
];

const locationOptions = [
  { value: "", label: "Seleccionar" },
  { value: "shopping", label: "Shopping" },
  { value: "street_premium", label: "Avenida o calle comercial principal" },
  { value: "strip_center", label: "Strip center o corredor barrial" },
  { value: "to_define", label: "Todavía a definir" },
];

const labels = {
  plazaStatus: Object.fromEntries(plazaOptions.map((option) => [option.value, option.label])),
  timing: Object.fromEntries(timingOptions.map((option) => [option.value, option.label])),
  capitalRange: Object.fromEntries(capitalOptions.map((option) => [option.value, option.label])),
  retailExperience: Object.fromEntries(
    experienceOptions.map((option) => [option.value, option.label]),
  ),
  role: Object.fromEntries(roleOptions.map((option) => [option.value, option.label])),
  locationType: Object.fromEntries(
    locationOptions.map((option) => [option.value, option.label]),
  ),
};

const initialValues = {
  name: "",
  whatsapp: "",
  cityProvince: "",
  plazaStatus: "",
  timing: "",
  capitalRange: "",
  consent: false,
  retailExperience: "",
  role: "",
  locationType: "",
  squareMeters: "",
  motivation: "",
};

function validateStepOne(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Completá tu nombre.";
  if (!values.whatsapp.trim()) errors.whatsapp = "Completá tu WhatsApp.";
  if (!values.cityProvince.trim()) errors.cityProvince = "Indicá ciudad y provincia.";
  if (!values.plazaStatus) errors.plazaStatus = "Elegí el estado de tu plaza.";
  if (!values.timing) errors.timing = "Seleccioná tu timing.";
  if (!values.capitalRange) errors.capitalRange = "Seleccioná un rango de capital.";
  if (!values.consent) {
    errors.consent = "Necesitamos tu consentimiento para procesar la evaluación.";
  }

  return errors;
}

function validateStepTwo(values) {
  const errors = {};

  if (!values.retailExperience) {
    errors.retailExperience = "Seleccioná tu experiencia en retail.";
  }

  if (!values.role) errors.role = "Indicá tu rol en el proyecto.";
  if (!values.locationType) {
    errors.locationType = "Seleccioná el tipo de ubicación.";
  }
  if (!values.motivation.trim()) {
    errors.motivation = "Contanos brevemente por qué te interesa Chimola.";
  }

  return errors;
}

function buildWhatsappUrl(values, score, isSql) {
  const message = [
    "Hola, acabo de completar la evaluación de plaza de Chimola.",
    `Ciudad/plaza: ${values.cityProvince}`,
    `Estado de plaza: ${labels.plazaStatus[values.plazaStatus]}`,
    `Timing: ${labels.timing[values.timing]}`,
    `Capital: ${labels.capitalRange[values.capitalRange]}`,
    `Score preliminar: ${score}/100`,
    `SQL: ${isSql ? "Sí" : "No"}`,
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function buildMailtoUrl(values) {
  const subject = `Consulta franquicias Chimola | ${values.cityProvince || "Nueva plaza"}`;
  const body = [
    "Hola, quiero hacer una consulta sobre Chimola Franquicias.",
    "",
    `Nombre: ${values.name || ""}`,
    `WhatsApp: ${values.whatsapp || ""}`,
    `Ciudad / provincia: ${values.cityProvince || ""}`,
    `Plaza / local: ${labels.plazaStatus[values.plazaStatus] || ""}`,
    `Timing: ${labels.timing[values.timing] || ""}`,
    `Capital: ${labels.capitalRange[values.capitalRange] || ""}`,
    "",
    "Consulta:",
  ].join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildSubmissionFormData(values, score, breakdown, isSql) {
  const formData = new FormData();
  formData.set("_subject", `Nueva evaluación Chimola | ${values.cityProvince} | ${score}/100`);
  formData.set("_template", "table");
  formData.set("_captcha", "false");
  formData.set("Nombre", values.name);
  formData.set("WhatsApp", values.whatsapp);
  formData.set("Ciudad / provincia", values.cityProvince);
  formData.set("Plaza / local", labels.plazaStatus[values.plazaStatus]);
  formData.set("Timing", labels.timing[values.timing]);
  formData.set("Capital", labels.capitalRange[values.capitalRange]);
  formData.set(
    "Experiencia retail",
    labels.retailExperience[values.retailExperience] || values.retailExperience,
  );
  formData.set("Rol", labels.role[values.role] || values.role);
  formData.set(
    "Tipo de ubicación",
    labels.locationType[values.locationType] || values.locationType,
  );
  formData.set("m2 estimados", values.squareMeters || "No informado");
  formData.set("Motivación", values.motivation);
  formData.set("Consentimiento", values.consent ? "Sí" : "No");
  formData.set("Score", String(score));
  formData.set("SQL", isSql ? "Sí" : "No");
  formData.set("Breakdown", JSON.stringify(breakdown));

  return formData;
}

function FieldError({ message }) {
  if (!message) {
    return null;
  }

  return <p className="field-error">{message}</p>;
}

function AsideCard({ title, items, tone }) {
  return (
    <div className={`card ${tone}`}>
      <p className="font-display text-[1.35rem] font-semibold tracking-tight text-[var(--ink)] md:text-[1.5rem]">
        {title}
      </p>
      <ul className="mt-4 space-y-3 text-[0.95rem] leading-7 text-[var(--muted)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function QualificationStepper() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasTrackedBeginQuiz, setHasTrackedBeginQuiz] = useState(false);
  const [result, setResult] = useState(null);

  const progressValue = result ? 100 : step === 1 ? 50 : 100;

  function markQuizStarted() {
    if (hasTrackedBeginQuiz) {
      return;
    }

    trackLeadEvent("begin_quiz", { form_type: formType });
    setHasTrackedBeginQuiz(true);
  }

  function updateValue(name, value) {
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  }

  function handleNextStep() {
    markQuizStarted();
    const nextErrors = validateStepOne(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStep(2);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    markQuizStarted();

    const nextErrors = {
      ...validateStepOne(values),
      ...validateStepTwo(values),
    };

    setErrors(nextErrors);
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const { score, breakdown } = computeLeadScore(values);
    const isSql = computeSqlFlag(values, score);

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: buildSubmissionFormData(values, score, breakdown, isSql),
      });

      const data = await response.json();

      if (!response.ok || data.success === "false") {
        throw new Error(data.message || "No se pudo enviar la evaluación.");
      }

      trackLeadEvent("generate_lead", {
        form_type: formType,
        plaza_status: values.plazaStatus,
        timing: values.timing,
        capital_range: values.capitalRange,
        score,
        is_sql: isSql,
      });

      setResult({
        message: `Evaluación enviada a ${contactEmail}.`,
        score,
        isSql,
        whatsappUrl: buildWhatsappUrl(values, score, isSql),
        mailtoUrl: buildMailtoUrl(values),
        summary: {
          cityProvince: values.cityProvince,
          plazaStatus: labels.plazaStatus[values.plazaStatus],
          timing: labels.timing[values.timing],
          capitalRange: labels.capitalRange[values.capitalRange],
        },
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "No se pudo enviar la evaluación.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="evaluar" className="shell py-10 md:py-14">
      <div className="panel mb-6 overflow-hidden bg-[var(--ink)] px-5 py-6 text-white md:px-8 md:py-8">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-4">
            <span className="eyebrow border-white/10 bg-white/10 text-white/70">
              Evaluación inicial
            </span>
            <h2 className="max-w-[12ch] font-display text-[2.05rem] leading-[1.02] font-semibold tracking-tight md:text-[2.85rem] lg:text-[3rem]">
              Un primer paso para ordenar plaza, timing y perfil del operador
            </h2>
            <p className="max-w-2xl text-[0.98rem] leading-7 text-white/76 md:text-[1.04rem] md:leading-8">
              Buscamos ordenar las primeras variables del proyecto para validar si existe
              encaje comercial antes de avanzar a una siguiente instancia.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/10 bg-white/8 px-4 py-4">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white/60">
                Tiempo estimado
              </p>
              <p className="mt-2 font-display text-[1.45rem] font-semibold tracking-tight md:text-[1.6rem]">
                3 minutos
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/8 px-4 py-4">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white/60">
                Próxima respuesta
              </p>
              <p className="mt-2 font-display text-[1.45rem] font-semibold tracking-tight md:text-[1.6rem]">
                {slaHours} hs hábiles
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/8 px-4 py-4 sm:col-span-2">
              <p className="text-sm leading-7 text-white/76">
                Ideal para operadores que ya tienen una plaza en análisis o un proyecto
                con intención real de desarrollo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.16fr_0.84fr]">
        <div className="panel p-5 md:p-7">
          <div className="mb-6 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  {result ? "Evaluación enviada" : `Paso ${step} de 2`}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {result
                    ? "Recibimos tu información y ya quedó lista para revisión comercial."
                    : step === 1
                      ? "Datos básicos para entender plaza, timing y viabilidad inicial."
                      : "Contexto comercial para estimar encaje operativo."}
                </p>
              </div>
              {!result ? (
                <span className="chip">
                  {step === 1 ? "Plaza, timing y capital" : "Operación y contexto"}
                </span>
              ) : null}
            </div>

            <div className="space-y-2">
              <div className="h-2 overflow-hidden rounded-full bg-black/8">
                <div
                  className="h-full rounded-full bg-[var(--ink)] transition-all"
                  style={{ width: `${progressValue}%` }}
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progressValue}
                />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                {progressValue}% completado
              </p>
            </div>
          </div>

          {result ? (
            <div className="space-y-6">
              <div className="card bg-[linear-gradient(180deg,rgba(217,241,236,0.82),rgba(255,255,255,0.92))]">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="chip bg-[var(--ink)] text-white">{result.score}/100</span>
                  <span className="chip">
                    {result.isSql ? "Revisión prioritaria" : "Revisión comercial"}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[1.45rem] font-semibold tracking-tight text-[var(--ink)] md:text-[1.65rem]">
                  {result.isSql
                    ? "Tu caso quedó marcado para una revisión comercial más rápida."
                    : "Tu caso quedó ingresado para revisión comercial."}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">
                  {result.message} Revisamos la información enviada y, si estamos
                  alineados, continuamos con una conversación más concreta sobre plaza y desarrollo.
                </p>
                <p className="mt-3 text-sm font-semibold text-[var(--ink)]">
                  SLA estimado: te respondemos dentro de {slaHours} hs hábiles.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <a
                  href={schedulerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  Agendar llamada
                </a>
                <a
                  href={result.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  WhatsApp
                </a>
              </div>

              <div className="card bg-[linear-gradient(180deg,rgba(248,221,233,0.46),rgba(255,255,255,0.96))]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Consulta directa
                </p>
                <h4 className="mt-3 font-display text-[1.2rem] font-semibold tracking-tight text-[var(--ink)] md:text-[1.35rem]">
                  Si querés despejar dudas puntuales, podés escribirnos directo por email.
                </h4>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)] md:text-base">
                  Además de la evaluación, dejamos un canal directo para consultas
                  comerciales o seguimiento del caso.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href={result.mailtoUrl} className="button-secondary">
                    Enviar email directo
                  </a>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm font-semibold text-[var(--ink)] underline underline-offset-4"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="card">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Resumen enviado
                  </p>
                  <dl className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                    <div>
                      <dt className="font-semibold text-[var(--ink)]">Ciudad / provincia</dt>
                      <dd>{result.summary.cityProvince}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[var(--ink)]">Plaza</dt>
                      <dd>{result.summary.plazaStatus}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[var(--ink)]">Timing</dt>
                      <dd>{result.summary.timing}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[var(--ink)]">Capital</dt>
                      <dd>{result.summary.capitalRange}</dd>
                    </div>
                  </dl>
                </div>

                <div className="card">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Qué sigue
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                    <li>Revisión comercial del proyecto y del estado de la plaza.</li>
                    <li>Contacto inicial para profundizar formato, ubicación y timing.</li>
                    <li>Si hay encaje, armado del siguiente tramo de conversación.</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} onFocusCapture={markQuizStarted}>
              {step === 1 ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="field-label" htmlFor="name">
                      Nombre y apellido
                    </label>
                    <input
                      id="name"
                      className="field"
                      value={values.name}
                      onChange={(event) => updateValue("name", event.target.value)}
                      placeholder="Tu nombre"
                    />
                    <FieldError message={errors.name} />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="whatsapp">
                      WhatsApp
                    </label>
                    <input
                      id="whatsapp"
                      className="field"
                      value={values.whatsapp}
                      onChange={(event) => updateValue("whatsapp", event.target.value)}
                      placeholder="+54 9 11..."
                    />
                    <FieldError message={errors.whatsapp} />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="cityProvince">
                      Ciudad / provincia
                    </label>
                    <input
                      id="cityProvince"
                      className="field"
                      value={values.cityProvince}
                      onChange={(event) => updateValue("cityProvince", event.target.value)}
                      placeholder="Ej. Rosario, Santa Fe"
                    />
                    <FieldError message={errors.cityProvince} />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="plazaStatus">
                      Plaza / local
                    </label>
                    <select
                      id="plazaStatus"
                      className="field"
                      value={values.plazaStatus}
                      onChange={(event) => updateValue("plazaStatus", event.target.value)}
                    >
                      {plazaOptions.map((option) => (
                        <option key={option.value || "empty"} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <FieldError message={errors.plazaStatus} />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="timing">
                      Timing estimado
                    </label>
                    <select
                      id="timing"
                      className="field"
                      value={values.timing}
                      onChange={(event) => updateValue("timing", event.target.value)}
                    >
                      {timingOptions.map((option) => (
                        <option key={option.value || "empty"} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <FieldError message={errors.timing} />
                  </div>

                  <div className="md:col-span-2">
                    <label className="field-label" htmlFor="capitalRange">
                      Capital disponible
                    </label>
                    <select
                      id="capitalRange"
                      className="field"
                      value={values.capitalRange}
                      onChange={(event) => updateValue("capitalRange", event.target.value)}
                    >
                      {capitalOptions.map((option) => (
                        <option key={option.value || "empty"} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      No hace falta un número exacto. Buscamos entender rango y nivel de
                      preparación.
                    </p>
                    <FieldError message={errors.capitalRange} />
                  </div>

                  <div className="md:col-span-2">
                    <label className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-4">
                      <input
                        type="checkbox"
                        checked={values.consent}
                        onChange={(event) => updateValue("consent", event.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-black/20"
                      />
                      <span className="text-sm leading-6 text-[var(--muted)]">
                        Acepto que Chimola utilice esta información para evaluar mi
                        consulta y contactarme sobre el proceso comercial.
                      </span>
                    </label>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      Al enviar la evaluación aceptás nuestra{" "}
                      <Link href="/privacidad" className="font-semibold text-[var(--ink)] underline">
                        política de privacidad
                      </Link>
                      .
                    </p>
                    <FieldError message={errors.consent} />
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="field-label" htmlFor="retailExperience">
                      Experiencia retail
                    </label>
                    <select
                      id="retailExperience"
                      className="field"
                      value={values.retailExperience}
                      onChange={(event) => updateValue("retailExperience", event.target.value)}
                    >
                      {experienceOptions.map((option) => (
                        <option key={option.value || "empty"} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <FieldError message={errors.retailExperience} />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="role">
                      Rol previsto
                    </label>
                    <select
                      id="role"
                      className="field"
                      value={values.role}
                      onChange={(event) => updateValue("role", event.target.value)}
                    >
                      {roleOptions.map((option) => (
                        <option key={option.value || "empty"} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <FieldError message={errors.role} />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="locationType">
                      Tipo de ubicación
                    </label>
                    <select
                      id="locationType"
                      className="field"
                      value={values.locationType}
                      onChange={(event) => updateValue("locationType", event.target.value)}
                    >
                      {locationOptions.map((option) => (
                        <option key={option.value || "empty"} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <FieldError message={errors.locationType} />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="squareMeters">
                      m2 estimados
                    </label>
                    <input
                      id="squareMeters"
                      className="field"
                      inputMode="numeric"
                      value={values.squareMeters}
                      onChange={(event) => updateValue("squareMeters", event.target.value)}
                      placeholder="Opcional"
                    />
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      Si contás con esta referencia, mejora la lectura inicial del formato.
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <label className="field-label" htmlFor="motivation">
                      ¿Por qué te interesa Chimola?
                    </label>
                    <textarea
                      id="motivation"
                      className="field min-h-32 resize-y"
                      value={values.motivation}
                      onChange={(event) => updateValue("motivation", event.target.value)}
                      placeholder="Contanos qué ves en tu plaza, qué timing imaginás y por qué te interesa la propuesta."
                    />
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      Una respuesta breve y concreta nos ayuda a entender mejor la oportunidad.
                    </p>
                    <FieldError message={errors.motivation} />
                  </div>
                </div>
              )}

              {submitError ? (
                <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {submitError}
                </p>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                {step === 2 ? (
                  <button
                    type="button"
                    className="button-secondary"
                    onClick={() => setStep(1)}
                    disabled={isSubmitting}
                  >
                    Volver al paso 1
                  </button>
                ) : (
                  <div className="text-sm text-[var(--muted)]">
                    Te lleva menos de 3 minutos y nos ayuda a responder mejor.
                  </div>
                )}

                {step === 1 ? (
                  <button type="button" className="button-primary" onClick={handleNextStep}>
                    Continuar
                  </button>
                ) : (
                  <button type="submit" className="button-primary" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando evaluación..." : "Enviar evaluación"}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        <div className="grid gap-4">
          <div className="card bg-[linear-gradient(180deg,rgba(255,248,240,0.88),rgba(255,255,255,0.95))]">
            <p className="font-display text-[1.35rem] font-semibold tracking-tight text-[var(--ink)] md:text-[1.5rem]">
              Contacto directo
            </p>
            <p className="mt-4 text-[0.98rem] leading-7 text-[var(--muted)]">
              Si necesitás hacer una consulta puntual antes de completar la evaluación,
              también podés escribirnos directo.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a href={`mailto:${contactEmail}`} className="button-secondary">
                Escribir por email
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm font-semibold text-[var(--ink)] underline underline-offset-4"
              >
                {contactEmail}
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              La evaluación sigue siendo la mejor vía para ordenar plaza, timing y
              contexto del proyecto.
            </p>
          </div>

          <AsideCard
            title="Qué validamos primero"
            tone="bg-[linear-gradient(180deg,rgba(245,243,255,0.86),rgba(255,255,255,0.95))]"
            items={[
              "Estado de plaza y ubicación.",
              "Horizonte de apertura.",
              "Capacidad de inversión.",
              "Perfil operativo del proyecto.",
            ]}
          />

          <AsideCard
            title="Qué ayuda a avanzar más rápido"
            tone="bg-[linear-gradient(180deg,rgba(248,221,233,0.72),rgba(255,255,255,0.9))]"
            items={[
              "Definición comercial de plaza.",
              "Timing razonablemente activo.",
              "Capacidad de ejecución.",
              "Participación real en el desarrollo.",
            ]}
          />

          <AsideCard
            title="Qué pasa después"
            tone="bg-[linear-gradient(180deg,rgba(219,233,255,0.72),rgba(255,255,255,0.9))]"
            items={[
              "Una primera validación del encaje comercial.",
              "Una revisión priorizada si el proyecto está más maduro.",
              "Una base más clara para la siguiente conversación.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
