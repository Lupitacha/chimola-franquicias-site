import scoringRules from "@/data/scoring-rules.json";

function toNumber(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  const normalized = Number.parseFloat(String(value).replace(",", "."));
  return Number.isFinite(normalized) ? normalized : null;
}

function getOptionScore(group, value) {
  return scoringRules.weights[group]?.[value] ?? 0;
}

function getSquareMetersScore(squareMeters) {
  const numericValue = toNumber(squareMeters);

  if (numericValue === null) {
    return 0;
  }

  const matchedRule = scoringRules.squareMeters.find(
    (rule) => numericValue >= rule.min && numericValue <= rule.max,
  );

  return matchedRule?.score ?? 0;
}

export function computeLeadScore(lead) {
  const breakdown = {
    plazaStatus: getOptionScore("plazaStatus", lead.plazaStatus),
    timing: getOptionScore("timing", lead.timing),
    capitalRange: getOptionScore("capitalRange", lead.capitalRange),
    retailExperience: getOptionScore("retailExperience", lead.retailExperience),
    role: getOptionScore("role", lead.role),
    locationType: getOptionScore("locationType", lead.locationType),
    squareMeters: getSquareMetersScore(lead.squareMeters),
  };

  const score = Math.min(
    100,
    Math.max(
      0,
      Math.round(Object.values(breakdown).reduce((total, value) => total + value, 0)),
    ),
  );

  return { score, breakdown };
}

export function computeSqlFlag(lead, score) {
  const sqlRules = scoringRules.sql;
  return (
    score >= sqlRules.minimumScore &&
    sqlRules.plazaStatus.includes(lead.plazaStatus) &&
    sqlRules.timing.includes(lead.timing)
  );
}

export { scoringRules };
