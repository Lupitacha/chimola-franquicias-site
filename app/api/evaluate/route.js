import { NextResponse } from "next/server";

import { computeLeadScore, computeSqlFlag } from "@/lib/scoring";

const REQUIRED_FIELDS = [
  "name",
  "whatsapp",
  "cityProvince",
  "plazaStatus",
  "timing",
  "capitalRange",
  "retailExperience",
  "role",
  "locationType",
  "motivation",
];

const CONTACT_EMAIL = "achaul@lautin.com.ar";

function validateLead(payload) {
  const cleaned = {};

  for (const field of REQUIRED_FIELDS) {
    cleaned[field] = String(payload[field] || "").trim();

    if (!cleaned[field]) {
      throw new Error("Completá los campos obligatorios antes de enviar.");
    }
  }

  cleaned.squareMeters = String(payload.squareMeters || "").trim();
  cleaned.consent = Boolean(payload.consent);

  if (!cleaned.consent) {
    throw new Error("Necesitamos tu consentimiento para procesar la evaluación.");
  }

  return cleaned;
}

function humanize(value) {
  const dictionary = {
    local_identificado: "Local identificado",
    plaza_definida: "Plaza definida, local en búsqueda",
    evaluando: "Evaluando plaza",
    "0_3": "0 a 3 meses",
    "3_6": "3 a 6 meses",
    "6_12": "6 a 12 meses",
    "12_plus": "Más de 12 meses",
    ready: "Capital asignado para apertura y stock inicial",
    estimated: "Capital disponible, con variables por cerrar",
    needs_review: "Necesita estructurar parte de la inversión",
    exploratory: "Explorando sin capital asignado",
    multi_local: "Opera varios locales o franquicias",
    single_local: "Opera un local o emprendimiento retail",
    category_experience: "Tiene experiencia comercial en otra categoría",
    none: "Sin experiencia operando retail",
    operativo: "Operativo",
    mixto: "Mixto",
    pasivo: "Pasivo",
    shopping: "Shopping",
    street_premium: "Avenida o calle comercial principal",
    strip_center: "Strip center o corredor barrial",
    to_define: "A definir",
  };

  return dictionary[value] || value;
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const lead = validateLead(payload);

    const { score, breakdown } = computeLeadScore(lead);
    const isSql = computeSqlFlag(lead, score);

    const formData = new FormData();
    formData.set("_subject", `Nueva evaluación Chimola | ${lead.cityProvince} | ${score}/100`);
    formData.set("_template", "table");
    formData.set("Nombre", lead.name);
    formData.set("WhatsApp", lead.whatsapp);
    formData.set("Ciudad / provincia", lead.cityProvince);
    formData.set("Plaza / local", humanize(lead.plazaStatus));
    formData.set("Timing", humanize(lead.timing));
    formData.set("Capital", humanize(lead.capitalRange));
    formData.set("Experiencia retail", humanize(lead.retailExperience));
    formData.set("Rol", humanize(lead.role));
    formData.set("Tipo de ubicación", humanize(lead.locationType));
    formData.set("m2 estimados", lead.squareMeters || "No informado");
    formData.set("Motivación", lead.motivation);
    formData.set("Consentimiento", lead.consent ? "Sí" : "No");
    formData.set("Score", String(score));
    formData.set("SQL", isSql ? "Sí" : "No");
    formData.set("Breakdown", JSON.stringify(breakdown));

    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || "No se pudo enviar la evaluación.");
    }

    return NextResponse.json({
      message: "Evaluación enviada. Te respondemos dentro de 24 hs hábiles.",
      score,
      isSql,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "No se pudo procesar la evaluación.",
      },
      { status: 400 },
    );
  }
}
