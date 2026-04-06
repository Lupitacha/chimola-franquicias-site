export function pushDataLayer(event, params = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params,
  });
}

export function trackLeadEvent(event, payload) {
  pushDataLayer(event, payload);
}
