export const LEAD_NAME_MAX = 80;
export const LEAD_EMAIL_MAX = 160;
export const LEAD_COUNTRY_MAX = 80;
export const LEAD_LEVEL_MAX = 40;
export const LEAD_MESSAGE_MAX = 1000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type LeadInput = {
  name: string;
  email: string;
  countryOfInterest: string | null;
  studyLevel: string | null;
  message: string;
};

export type LeadParseResult =
  | { ok: true; lead: LeadInput }
  | { ok: false; message: string };

function cleanLine(value: unknown, max: number): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const cleaned = value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();

  if (!cleaned || cleaned.length > max) {
    return null;
  }

  return cleaned;
}

export function normalizeLeadEmail(value: string | null | undefined): string | null {
  const cleaned = cleanLine(value ?? "", LEAD_EMAIL_MAX);

  if (!cleaned) {
    return null;
  }

  const email = cleaned.toLowerCase();

  if (!EMAIL_PATTERN.test(email)) {
    return null;
  }

  return email;
}

export function parseLeadInput(body: unknown): LeadParseResult {
  if (!body || typeof body !== "object") {
    return { ok: false, message: "Enter your details to continue." };
  }

  const record = body as Record<string, unknown>;

  if (record.consent !== true) {
    return {
      ok: false,
      message: "Tick the privacy consent box before sending.",
    };
  }

  const name = cleanLine(record.name, LEAD_NAME_MAX);
  const email = normalizeLeadEmail(
    typeof record.email === "string" ? record.email : ""
  );
  const message = cleanLine(record.message, LEAD_MESSAGE_MAX);
  const country = cleanLine(record.countryOfInterest, LEAD_COUNTRY_MAX);
  const level = cleanLine(record.studyLevel, LEAD_LEVEL_MAX);

  if (typeof record.countryOfInterest === "string" && record.countryOfInterest.trim() && !country) {
    return { ok: false, message: "Country of interest is too long." };
  }

  if (typeof record.studyLevel === "string" && record.studyLevel.trim() && !level) {
    return { ok: false, message: "Study level is too long." };
  }

  if (!name) {
    return { ok: false, message: "Enter your name (80 characters or fewer)." };
  }

  if (!email) {
    return { ok: false, message: "Enter a valid email address." };
  }

  if (!message) {
    return {
      ok: false,
      message: "Add a short message (1,000 characters or fewer).",
    };
  }

  return {
    ok: true,
    lead: {
      name,
      email,
      countryOfInterest: country,
      studyLevel: level,
      message,
    },
  };
}
