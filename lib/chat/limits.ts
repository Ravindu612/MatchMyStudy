import { createHash } from "node:crypto";
import {
  CONVERSATION_LIMIT_MESSAGE,
  MAX_MESSAGES,
  MAX_USER_MESSAGE_CHARS,
  MAX_USER_MESSAGES,
  MESSAGE_TOO_LONG,
} from "@/lib/chat/constants";

export {
  CHAT_MODEL,
  CHAT_UNAVAILABLE_MESSAGE,
  CONVERSATION_LIMIT_MESSAGE,
  DAILY_LEAD_LIMIT,
  DAILY_MESSAGE_LIMIT,
  LEAD_LIMIT_MESSAGE,
  LIMIT_REACHED_MESSAGE,
  MAX_MESSAGES,
  MAX_REQUEST_BYTES,
  MAX_USER_MESSAGE_CHARS,
  MAX_USER_MESSAGES,
  MESSAGE_TOO_LONG,
} from "@/lib/chat/constants";

const STOPWORDS = new Set([
  "a",
  "an",
  "and",
  "at",
  "college",
  "colleges",
  "course",
  "courses",
  "for",
  "in",
  "me",
  "my",
  "of",
  "on",
  "or",
  "program",
  "programme",
  "programmes",
  "programs",
  "school",
  "schools",
  "the",
  "to",
  "with",
]);

export type ChatTurn = {
  role: string;
  text: string;
};

export function reviewChatTurns(
  turns: ChatTurn[]
): { ok: true } | { ok: false; message: string } {
  if (turns.length === 0 || turns.length > MAX_MESSAGES) {
    return { ok: false, message: CONVERSATION_LIMIT_MESSAGE };
  }

  const userTurns = turns.filter((turn) => turn.role === "user");

  if (userTurns.length === 0 || userTurns.length > MAX_USER_MESSAGES) {
    return { ok: false, message: CONVERSATION_LIMIT_MESSAGE };
  }

  if (turns[turns.length - 1]?.role !== "user") {
    return {
      ok: false,
      message: "Send a question to continue.",
    };
  }

  for (const turn of userTurns) {
    const text = turn.text.trim();

    if (text.length > MAX_USER_MESSAGE_CHARS) {
      return { ok: false, message: MESSAGE_TOO_LONG };
    }
  }

  const latest = userTurns[userTurns.length - 1]?.text.trim() ?? "";

  if (latest.length === 0) {
    return { ok: false, message: "Type a question to continue." };
  }

  return { ok: true };
}

export function clientIp(headerValue: {
  forwardedFor: string | null;
  realIp: string | null;
}): string {
  const realIp = headerValue.realIp?.trim();

  if (realIp) {
    return realIp.slice(0, 128);
  }

  const forwarded = headerValue.forwardedFor?.split(",")[0]?.trim();

  if (forwarded) {
    return forwarded.slice(0, 128);
  }

  return "local";
}

export function hashIp(ip: string, pepper: string): string {
  return createHash("sha256").update(`${pepper}\n${ip}`).digest("hex");
}

export function normalizeSearchText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const QUERY_ALIASES: Record<string, string[]> = {
  usa: ["united", "states"],
  america: ["united", "states"],
  uk: ["united", "kingdom"],
  britain: ["united", "kingdom"],
  england: ["united", "kingdom"],
  uae: ["united", "arab", "emirates"],
  emirates: ["united", "arab"],
  korea: ["south", "korea"],
  czechia: ["czech", "republic"],
  hk: ["hong", "kong"],
  nz: ["new", "zealand"],
};

export function queryTokens(value: string): string[] {
  const tokens = normalizeSearchText(value)
    .split(" ")
    .filter((token) => token.length > 1 && !STOPWORDS.has(token));
  const expanded = new Set(tokens);

  for (const token of tokens) {
    for (const alias of QUERY_ALIASES[token] ?? []) {
      expanded.add(alias);
    }
  }

  return [...expanded];
}
