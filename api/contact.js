const fs = require("fs");
const path = require("path");

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function validateSubmission(payload) {
  const required = [
    "nombre",
    "email",
    "telefono",
    "plaza",
    "local",
    "experiencia",
    "capital",
    "interes",
  ];

  const cleaned = {};

  for (const field of required) {
    cleaned[field] = String(payload[field] || "").trim();

    if (!cleaned[field]) {
      throw new Error("Completá los campos obligatorios antes de enviar.");
    }
  }

  cleaned.empresa = String(payload.empresa || "").trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned.email)) {
    throw new Error("Ingresá un email válido.");
  }

  return cleaned;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return sendJson(res, 405, { message: "Método no permitido." });
  }

  try {
    const cleaned = validateSubmission(req.body || {});
    const submission = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      ...cleaned,
    };

    const tmpDir = "/tmp/chimola-franquicias";
    fs.mkdirSync(tmpDir, { recursive: true });
    fs.appendFileSync(
      path.join(tmpDir, "contact-submissions.ndjson"),
      `${JSON.stringify(submission)}\n`,
      "utf8",
    );

    return sendJson(res, 201, {
      message:
        "Aplicación enviada. Esta versión compartible registra el envío para revisión de demo.",
    });
  } catch (error) {
    return sendJson(res, 400, {
      message:
        error instanceof Error
          ? error.message
          : "No se pudo procesar la aplicación.",
    });
  }
};
