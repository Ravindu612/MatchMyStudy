import { supabase } from "@/lib/supabase";
import { safeImageUrl } from "@/lib/social/avatarPath";
import { isUserId } from "@/lib/social/postValidation";
import { requireUserId } from "@/lib/social/requireUser";
import {
  messageForSocialError,
  socialErrorCode,
} from "@/lib/social/socialErrors";
import {
  rankSuggestions,
  type SuggestionPerson,
  type SuggestionViewer,
} from "@/lib/social/suggestions";
import type { Block, Follow, PublicProfile } from "@/types/social";

const PROFILE_COLUMNS =
  "id, handle, display_name, account_type, headline, bio, country, target_countries, avatar_url, cover_url, is_verified, is_upgraded, consultant_slug, created_at";

export type ConnectionSummary = {
  followers: number;
  following: number;
  followingThem: boolean;
  blockedByMe: boolean;
};

export type DirectoryPerson = {
  id: string;
  handle: string;
  displayName: string;
  accountType: string;
  headline: string | null;
  avatarUrl: string | null;
  isVerified: boolean;
  isUpgraded: boolean;
};

export async function getConnectionSummary(profileId: string): Promise<ConnectionSummary> {
  if (!isUserId(profileId)) {
    return { followers: 0, following: 0, followingThem: false, blockedByMe: false };
  }

  const viewerId = await currentUserId();
  const [followers, following, relation, block] = await Promise.all([
    supabase
      .from("follows")
      .select("follower_id", { count: "exact", head: true })
      .eq("following_id", profileId),
    supabase
      .from("follows")
      .select("following_id", { count: "exact", head: true })
      .eq("follower_id", profileId),
    viewerId
      ? supabase
          .from("follows")
          .select("follower_id")
          .eq("follower_id", viewerId)
          .eq("following_id", profileId)
          .maybeSingle()
      : Promise.resolve({ data: null, error: null }),
    viewerId
      ? supabase
          .from("blocks")
          .select("blocker_id")
          .eq("blocker_id", viewerId)
          .eq("blocked_id", profileId)
          .maybeSingle()
      : Promise.resolve({ data: null, error: null }),
  ]);

  if (followers.error || following.error) {
    throw new Error("Couldn't load follow counts.");
  }

  return {
    followers: followers.count ?? 0,
    following: following.count ?? 0,
    followingThem: Boolean(relation.data),
    blockedByMe: Boolean(block.data),
  };
}

export async function followProfile(profileId: string): Promise<void> {
  const userId = await requireUserId();

  if (!isUserId(profileId)) {
    throw new Error("That profile is unavailable.");
  }

  if (userId === profileId) {
    throw new Error("You can't follow yourself.");
  }

  const row: Pick<Follow, "follower_id" | "following_id"> = {
    follower_id: userId,
    following_id: profileId,
  };
  const { error } = await supabase.from("follows").insert(row).select("follower_id").maybeSingle();

  if (error && socialErrorCode(error) !== "23505") {
    throw new Error(messageForSocialError(error, "You can't follow this account."));
  }
}

export async function unfollowProfile(profileId: string): Promise<void> {
  const userId = await requireUserId();

  if (!isUserId(profileId)) {
    throw new Error("That profile is unavailable.");
  }

  const { error } = await supabase
    .from("follows")
    .delete()
    .eq("follower_id", userId)
    .eq("following_id", profileId);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't unfollow this account."));
  }
}

export async function blockProfile(profileId: string): Promise<void> {
  const userId = await requireUserId();

  if (!isUserId(profileId)) {
    throw new Error("That profile is unavailable.");
  }

  if (userId === profileId) {
    throw new Error("You can't block yourself.");
  }

  const row: Pick<Block, "blocker_id" | "blocked_id"> = {
    blocker_id: userId,
    blocked_id: profileId,
  };
  const { error } = await supabase.from("blocks").insert(row).select("blocker_id").maybeSingle();

  if (error && socialErrorCode(error) !== "23505") {
    throw new Error(messageForSocialError(error, "Couldn't block this account."));
  }

  const { error: unfollowError } = await supabase
    .from("follows")
    .delete()
    .eq("follower_id", userId)
    .eq("following_id", profileId);

  if (unfollowError) {
    throw new Error(messageForSocialError(unfollowError, "Couldn't block this account."));
  }
}

export async function unblockProfile(profileId: string): Promise<void> {
  const userId = await requireUserId();

  if (!isUserId(profileId)) {
    throw new Error("That profile is unavailable.");
  }

  const { error } = await supabase
    .from("blocks")
    .delete()
    .eq("blocker_id", userId)
    .eq("blocked_id", profileId);

  if (error) {
    throw new Error(messageForSocialError(error, "Couldn't unblock this account."));
  }
}

export async function listConnections(
  profileId: string,
  mode: "followers" | "following"
): Promise<DirectoryPerson[]> {
  if (!isUserId(profileId)) {
    return [];
  }

  const query =
    mode === "followers"
      ? supabase
          .from("follows")
          .select("follower_id, created_at")
          .eq("following_id", profileId)
          .order("created_at", { ascending: false })
          .limit(100)
      : supabase
          .from("follows")
          .select("following_id, created_at")
          .eq("follower_id", profileId)
          .order("created_at", { ascending: false })
          .limit(100);
  const { data, error } = await query;

  if (error) {
    throw new Error("Couldn't load this list.");
  }

  const ids = (Array.isArray(data) ? data : []).flatMap((row) => {
    if (!row || typeof row !== "object") {
      return [];
    }

    const record = row as Record<string, unknown>;
    const id = mode === "followers" ? record.follower_id : record.following_id;

    return typeof id === "string" ? [id] : [];
  });

  return loadDirectory(ids);
}

export async function listSuggestions(): Promise<{
  viewer: SuggestionViewer | null;
  people: SuggestionPerson[];
}> {
  const viewerId = await currentUserId();
  const viewerProfile = viewerId ? await loadSuggestionViewer(viewerId) : null;
  const [candidates, followingIds, blockedIds] = await Promise.all([
    loadCandidateProfiles(viewerId),
    viewerId ? loadIdSet("follows", "following_id", "follower_id", viewerId) : Promise.resolve(new Set<string>()),
    viewerId ? loadIdSet("blocks", "blocked_id", "blocker_id", viewerId) : Promise.resolve(new Set<string>()),
  ]);

  return {
    viewer: viewerProfile,
    people: rankSuggestions(viewerProfile, candidates, followingIds, blockedIds, 12),
  };
}

export async function loadDirectory(ids: string[]): Promise<DirectoryPerson[]> {
  const unique = [...new Set(ids.filter((id) => isUserId(id)))];

  if (unique.length === 0) {
    return [];
  }

  const { data, error } = await supabase
    .from("public_profiles")
    .select("id, handle, display_name, account_type, headline, avatar_url, is_verified, is_upgraded")
    .in("id", unique);

  if (error) {
    throw new Error("Couldn't load profiles.");
  }

  const byId = new Map<string, DirectoryPerson>();

  for (const row of Array.isArray(data) ? data : []) {
    const person = normalizeDirectory(row);

    if (person) {
      byId.set(person.id, person);
    }
  }

  return unique.flatMap((id) => {
    const person = byId.get(id);
    return person ? [person] : [];
  });
}

async function loadCandidateProfiles(viewerId: string | null): Promise<SuggestionPerson[]> {
  let query = supabase
    .from("public_profiles")
    .select(PROFILE_COLUMNS)
    .order("is_upgraded", { ascending: false })
    .order("is_verified", { ascending: false })
    .limit(80);

  if (viewerId) {
    query = query.neq("id", viewerId);
  }

  const { data, error } = await query;

  if (error || !Array.isArray(data)) {
    return [];
  }

  return data.flatMap(normalizeSuggestion);
}

async function loadSuggestionViewer(viewerId: string): Promise<SuggestionViewer | null> {
  const { data, error } = await supabase
    .from("public_profiles")
    .select("id, country, target_countries")
    .eq("id", viewerId)
    .maybeSingle();

  if (error || !data || typeof data.id !== "string") {
    return { id: viewerId, country: null, targetCountries: [] };
  }

  return {
    id: data.id,
    country: typeof data.country === "string" ? data.country : null,
    targetCountries: Array.isArray(data.target_countries)
      ? data.target_countries.filter((item): item is string => typeof item === "string")
      : [],
  };
}

async function loadIdSet(
  table: "follows" | "blocks",
  column: "following_id" | "blocked_id",
  ownerColumn: "follower_id" | "blocker_id",
  ownerId: string
): Promise<Set<string>> {
  const { data, error } = await supabase.from(table).select(column).eq(ownerColumn, ownerId).limit(500);

  if (error || !Array.isArray(data)) {
    return new Set();
  }

  return new Set(
    data.flatMap((row) => {
      if (!row || typeof row !== "object") {
        return [];
      }

      const id = (row as Record<string, unknown>)[column];
      return typeof id === "string" ? [id] : [];
    })
  );
}

async function currentUserId(): Promise<string | null> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isUserId(user.id)) {
    return null;
  }

  return user.id;
}

function normalizeDirectory(value: unknown): DirectoryPerson | null {
  const [person] = normalizeSuggestion(value);

  if (!person) {
    return null;
  }

  return {
    id: person.id,
    handle: person.handle,
    displayName: person.displayName,
    accountType: person.accountType,
    headline: person.headline,
    avatarUrl: person.avatarUrl,
    isVerified: person.isVerified,
    isUpgraded: person.isUpgraded,
  };
}

function normalizeSuggestion(value: unknown): SuggestionPerson[] {
  if (!value || typeof value !== "object") {
    return [];
  }

  const row = value as Partial<PublicProfile> & Record<string, unknown>;

  if (
    typeof row.id !== "string" ||
    typeof row.handle !== "string" ||
    typeof row.display_name !== "string"
  ) {
    return [];
  }

  return [
    {
      id: row.id,
      handle: row.handle,
      displayName: row.display_name,
      accountType: typeof row.account_type === "string" ? row.account_type : "other",
      headline: typeof row.headline === "string" ? row.headline : null,
      country: typeof row.country === "string" ? row.country : null,
      targetCountries: Array.isArray(row.target_countries)
        ? row.target_countries.filter((item): item is string => typeof item === "string")
        : [],
      avatarUrl: safeImageUrl(typeof row.avatar_url === "string" ? row.avatar_url : null),
      isVerified: row.is_verified === true,
      isUpgraded: row.is_upgraded === true,
    },
  ];
}
