const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 5173);
const HOST = process.env.HOST || "127.0.0.1";
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const SUBMISSIONS_LOG = path.join(DATA_DIR, "contact-submissions.ndjson");
const SUBMISSIONS_SNAPSHOT = path.join(DATA_DIR, "contact-submissions.latest.json");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

fs.mkdirSync(DATA_DIR, { recursive: true });

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(payload));
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;

      if (body.length > 1_000_000) {
        reject(new Error("El cuerpo del request es demasiado grande."));
        req.destroy();
      }
    });

    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function validateSubmission(payload) {
  const fields = [
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

  for (const field of fields) {
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

function storeSubmission(submission) {
  fs.appendFileSync(SUBMISSIONS_LOG, `${JSON.stringify(submission)}\n`, "utf8");

  let snapshot = [];

  if (fs.existsSync(SUBMISSIONS_SNAPSHOT)) {
    try {
      snapshot = JSON.parse(fs.readFileSync(SUBMISSIONS_SNAPSHOT, "utf8"));
    } catch {
      snapshot = [];
    }
  }

  snapshot.unshift(submission);
  snapshot = snapshot.slice(0, 50);

  fs.writeFileSync(SUBMISSIONS_SNAPSHOT, JSON.stringify(snapshot, null, 2), "utf8");
}

function serveStatic(req, res) {
  const requestPath = req.url === "/" ? "/index.html" : req.url;
  const pathname = decodeURIComponent(requestPath.split("?")[0]);
  const safePath = path.normalize(path.join(ROOT, pathname));

  if (!safePath.startsWith(ROOT)) {
    sendJson(res, 403, { message: "Ruta no permitida." });
    return;
  }

  fs.readFile(safePath, (error, fileBuffer) => {
    if (error) {
      if (error.code === "ENOENT") {
        sendJson(res, 404, { message: "Archivo no encontrado." });
        return;
      }

      sendJson(res, 500, { message: "No se pudo leer el archivo solicitado." });
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, { "Content-Type": contentType });
    res.end(fileBuffer);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/api/contact") {
    try {
      const body = await readRequestBody(req);
      const payload = JSON.parse(body || "{}");
      const cleaned = validateSubmission(payload);

      const submission = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        createdAt: new Date().toISOString(),
        ...cleaned,
      };

      storeSubmission(submission);
      console.log("Nueva aplicación recibida:", submission.nombre, submission.email);

      sendJson(res, 201, {
        message:
          "Aplicación enviada. La guardé localmente para revisión comercial.",
      });
    } catch (error) {
      sendJson(res, 400, {
        message:
          error instanceof Error
            ? error.message
            : "No se pudo procesar la aplicación.",
      });
    }

    return;
  }

  if (req.method === "GET" && req.url === "/api/contact") {
    if (!fs.existsSync(SUBMISSIONS_SNAPSHOT)) {
      sendJson(res, 200, []);
      return;
    }

    try {
      const content = fs.readFileSync(SUBMISSIONS_SNAPSHOT, "utf8");
      sendJson(res, 200, JSON.parse(content));
    } catch {
      sendJson(res, 500, { message: "No se pudo leer la bandeja local." });
    }

    return;
  }

  if (req.method === "GET" || req.method === "HEAD") {
    serveStatic(req, res);
    return;
  }

  sendJson(res, 405, { message: "Método no permitido." });
});

server.listen(PORT, HOST, () => {
  console.log(`Chimola landing lista en http://${HOST}:${PORT}`);
  console.log(`Form submissions: ${SUBMISSIONS_LOG}`);
});
