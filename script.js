const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -6% 0px",
    },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const accordionItems = document.querySelectorAll(".faq-item");

accordionItems.forEach((item) => {
  const trigger = item.querySelector(".faq-trigger");
  const panel = item.querySelector(".faq-panel");

  trigger.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    accordionItems.forEach((otherItem) => {
      const otherTrigger = otherItem.querySelector(".faq-trigger");
      const otherPanel = otherItem.querySelector(".faq-panel");

      otherItem.classList.remove("is-open");
      otherTrigger.setAttribute("aria-expanded", "false");
      otherPanel.style.maxHeight = "0px";
    });

    if (!isOpen) {
      item.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
});

const form = document.querySelector("#apply-form");
const status = document.querySelector("#form-status");

if (form && status) {
  const endpoint = form.dataset.endpoint || "/api/contact";
  const submitButton = form.querySelector('button[type="submit"]');
  const defaultButtonLabel = submitButton?.textContent ?? "Enviar aplicación";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    formData.set("_url", window.location.href);

    status.dataset.state = "loading";
    status.textContent = "Enviando aplicación...";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Enviando...";
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const isJson = response.headers.get("content-type")?.includes("application/json");
      const result = isJson ? await response.json() : null;

      if (!response.ok) {
        throw new Error(result?.message || "No se pudo enviar la aplicación.");
      }

      status.dataset.state = "success";
      status.textContent =
        result?.message ||
        "Aplicación enviada. Revisá tu mail si hace falta confirmar el alta del formulario.";
      form.reset();
    } catch (error) {
      status.dataset.state = "error";
      status.textContent =
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar la aplicación.";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonLabel;
      }
    }
  });
}
