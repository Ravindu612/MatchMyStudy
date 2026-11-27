import { normalizeLeadEmail } from "@/lib/chat/leads";
import type { SupabaseClient } from "@supabase/supabase-js";

const LEAD_COLUMNS =
  "id, name, email, country_of_interest, study_level, message, consent, contacted, contacted_at, created_at";

function isMissingRelation(error: { code?: string; message?: string }): boolean {
  return (
    error.code === "42P01" ||
    error.code === "PGRST205" ||
    /does not exist|schema cache/i.test(error.message ?? "")
  );
}

export async function chatLeadsForEmail(admin: SupabaseClient, email: string | null | undefined) {
  const normalized = normalizeLeadEmail(email);

  if (!normalized) {
    return {
      note: "This account has no email address, so chat contact requests cannot be matched.",
      leads: [],
    };
  }

  const { data, error } = await admin
    .from("chat_leads")
    .select(LEAD_COLUMNS)
    .eq("email", normalized)
    .order("created_at", { ascending: true });

  if (error) {
    if (isMissingRelation(error)) {
      return {
        note: "Chat contact storage is not installed.",
        leads: [],
      };
    }

    throw error;
  }

  return {
    note: "Contact requests whose email matches this account. Requests sent from a different email are not included.",
    leads: data ?? [],
  };
}

export async function deleteChatLeadsForEmail(
  admin: SupabaseClient,
  email: string | null | undefined
): Promise<void> {
  const normalized = normalizeLeadEmail(email);

  if (!normalized) {
    return;
  }

  const { error } = await admin.from("chat_leads").delete().eq("email", normalized);

  if (error && !isMissingRelation(error)) {
    throw error;
  }
}
