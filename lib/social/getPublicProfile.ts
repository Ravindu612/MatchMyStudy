import { cache } from "react";
import { createSupabaseServerClient } from "@/lib/supabaseServer";
import { isAccountType } from "@/lib/social/profileValidation";
import type { PublicProfile } from "@/types/social";

const PUBLIC_PROFILE_COLUMNS =
  "id, handle, display_name, account_type, headline, bio, country, target_countries, avatar_url, cover_url, is_verified, is_upgraded, consultant_slug, created_at";

export type PublicProfileResult =
  | { status: "ok"; profile: PublicProfile }
  | { status: "not_found" }
  | { status: "error" };

/**
 * Reads the email-free directory view. profiles itself stays private.
 */
export const getPublicProfileByHandle = cache(
  async (handle: string): Promise<PublicProfileResult> => {
    const trimmed = handle.trim();

    if (!/^[A-Za-z0-9_]{3,30}$/.test(trimmed)) {
      return { status: "not_found" };
    }

    try {
      const supabase = await createSupabaseServerClient();
      const { data, error } = await supabase
        .from("public_profiles")
        .select(PUBLIC_PROFILE_COLUMNS)
        .eq("handle", trimmed)
        .maybeSingle();

      if (error) {
        console.error("Load public profile error:", error.code ?? error.message);
        return { status: "error" };
      }

      const profile = normalizePublicProfile(data);

      if (!profile) {
        return { status: "not_found" };
      }

      return { status: "ok", profile };
    } catch (error) {
      console.error(
        "Load public profile error:",
        error instanceof Error ? error.message : "unknown"
      );
      return { status: "error" };
    }

  }
);

function normalizePublicProfile(value: unknown): PublicProfile | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const row = value as Record<string, unknown>;

  if (typeof row.id !== "string" || typeof row.handle !== "string") {
    return null;
  }

  const accountType = typeof row.account_type === "string" ? row.account_type : "";

  if (typeof row.display_name !== "string" || !isAccountType(accountType)) {
    return null;
  }

  return {
    id: row.id,
    handle: row.handle,
    display_name: row.display_name,
    account_type: accountType,
    headline: optionalText(row.headline),
    bio: optionalText(row.bio),
    country: optionalText(row.country),
    target_countries: stringList(row.target_countries),
    avatar_url: optionalText(row.avatar_url),
    cover_url: optionalText(row.cover_url),
    is_verified: row.is_verified === true,
    is_upgraded: row.is_upgraded === true,
    consultant_slug: optionalText(row.consultant_slug),
    created_at: typeof row.created_at === "string" ? row.created_at : "",
  };
}

function optionalText(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value : null;
}

function stringList(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(
    (item): item is string => typeof item === "string" && item.trim() !== ""
  );
}
