import { LEAD_LIMIT_MESSAGE } from "@/lib/chat/constants";
import { parseLeadInput } from "@/lib/chat/leads";
import { consumeChatQuota } from "@/lib/chat/usage";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 8_000;

function textResponse(message: string, status: number) {
  return new Response(message, {
    status,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function isMissingRelation(error: { code?: string; message?: string }): boolean {
  return (
    error.code === "42P01" ||
    error.code === "PGRST205" ||
    /does not exist|schema cache/i.test(error.message ?? "")
  );
}

export async function POST(request: Request) {
  let raw = "";

  try {
    raw = await request.text();
  } catch {
    return textResponse("Enter your details to continue.", 400);
  }

  if (raw.length > MAX_BODY_BYTES) {
    return textResponse("That message is too long.", 400);
  }

  let body: unknown;

  try {
    body = JSON.parse(raw);
  } catch {
    return textResponse("Enter your details to continue.", 400);
  }

  const parsed = parseLeadInput(body);

  if (!parsed.ok) {
    return textResponse(parsed.message, 400);
  }

  const quota = await consumeChatQuota(request, "lead");

  if (!quota.ok) {
    const status = quota.message === LEAD_LIMIT_MESSAGE ? 429 : 503;

    return textResponse(quota.message, status);
  }

  const admin = getSupabaseAdmin();

  if (!admin) {
    return textResponse(
      "Contact requests are temporarily unavailable. Please use the contact page.",
      503
    );
  }

  const { error } = await admin.from("chat_leads").insert({
    name: parsed.lead.name,
    email: parsed.lead.email,
    country_of_interest: parsed.lead.countryOfInterest,
    study_level: parsed.lead.studyLevel,
    message: parsed.lead.message,
    consent: true,
  });

  if (error) {
    if (isMissingRelation(error)) {
      console.error("chat_leads is not installed.");
    } else {
      console.error("Could not save chat lead:", error.code ?? "unknown");
    }

    return textResponse(
      "We couldn't save your details. Please try again, or use the contact page.",
      503
    );
  }

  return Response.json({ ok: true }, { headers: { "cache-control": "no-store" } });
}
