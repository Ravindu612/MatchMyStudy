import {
  CHAT_UNAVAILABLE_MESSAGE,
  DAILY_LEAD_LIMIT,
  DAILY_MESSAGE_LIMIT,
  LEAD_LIMIT_MESSAGE,
  LIMIT_REACHED_MESSAGE,
  clientIp,
  hashIp,
} from "@/lib/chat/limits";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

type QuotaKind = "message" | "lead";

export type QuotaResult =
  | { ok: true }
  | { ok: false; message: string };

function pepper(): string {
  const configured = process.env.CHAT_IP_PEPPER?.trim();

  if (configured && configured.length >= 16) {
    return configured;
  }

  return "matchmystudy-chat-v1";
}

function isMissingRelation(error: { code?: string; message?: string }): boolean {
  return (
    error.code === "42883" ||
    error.code === "42P01" ||
    error.code === "PGRST202" ||
    error.code === "PGRST205" ||
    /does not exist|schema cache|could not find the function/i.test(error.message ?? "")
  );
}

export async function consumeChatQuota(
  request: Request,
  kind: QuotaKind
): Promise<QuotaResult> {
  const admin = getSupabaseAdmin();

  if (!admin) {
    return { ok: false, message: CHAT_UNAVAILABLE_MESSAGE };
  }

  const ip = clientIp({
    forwardedFor: request.headers.get("x-forwarded-for"),
    realIp: request.headers.get("x-real-ip"),
  });
  const limit = kind === "message" ? DAILY_MESSAGE_LIMIT : DAILY_LEAD_LIMIT;
  const { data, error } = await admin.rpc("consume_chat_quota", {
    p_ip_hash: hashIp(ip, pepper()),
    p_kind: kind,
    p_limit: limit,
  });

  if (error) {
    if (isMissingRelation(error)) {
      console.error("Chat quota storage is not installed.");
    } else {
      console.error("Chat quota check failed:", error.code ?? "unknown");
    }

    return { ok: false, message: CHAT_UNAVAILABLE_MESSAGE };
  }

  const allowed =
    !!data &&
    typeof data === "object" &&
    !Array.isArray(data) &&
    (data as { allowed?: unknown }).allowed === true;

  if (!allowed) {
    return {
      ok: false,
      message: kind === "message" ? LIMIT_REACHED_MESSAGE : LEAD_LIMIT_MESSAGE,
    };
  }

  return { ok: true };
}
