import { supabase } from "@/lib/supabase";
import { newAvatarObjectPath, ownAvatarObjectPath } from "@/lib/social/avatarPath";
import { finalizeProfileImage } from "@/lib/social/imageMetadata";
import {
  formatProfileSaveError,
  isAccountType,
  toProfileUpdate,
  type ProfileSettingsValues,
} from "@/lib/social/profileValidation";
import type { Profile, PublicProfile } from "@/types/social";

const AVATARS_BUCKET = "avatars";

const OWN_PROFILE_COLUMNS =
  "id, handle, display_name, account_type, headline, bio, country, target_countries, avatar_url, cover_url, updated_at";

export type OwnProfile = Pick<
  Profile,
  | "id"
  | "handle"
  | "display_name"
  | "account_type"
  | "headline"
  | "bio"
  | "country"
  | "target_countries"
  | "avatar_url"
  | "cover_url"
  | "updated_at"
>;

export type DirectoryBadges = Pick<
  PublicProfile,
  "consultant_slug" | "is_verified" | "is_upgraded"
>;

export async function loadOwnProfile(userId: string): Promise<OwnProfile> {
  const { data, error } = await supabase
    .from("profiles")
    .select(OWN_PROFILE_COLUMNS)
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    throw new Error(settingsLoadMessage(error.message));
  }

  const profile = normalizeOwnProfile(data);

  if (!profile) {
    throw new Error("We couldn't find a profile for this account.");
  }

  return profile;
}

export async function loadDirectoryBadges(
  userId: string
): Promise<DirectoryBadges> {
  const { data, error } = await supabase
    .from("public_profiles")
    .select("consultant_slug, is_verified, is_upgraded")
    .eq("id", userId)
    .maybeSingle();

  if (error || !data) {
    return {
      consultant_slug: null,
      is_verified: false,
      is_upgraded: false,
    };
  }

  const row = data as Partial<DirectoryBadges>;

  return {
    consultant_slug:
      typeof row.consultant_slug === "string" ? row.consultant_slug : null,
    is_verified: row.is_verified === true,
    is_upgraded: row.is_upgraded === true,
  };
}

export async function usernameTaken(
  handle: string,
  userId: string
): Promise<boolean> {
  const { data, error } = await supabase
    .from("public_profiles")
    .select("id")
    .eq("handle", handle)
    .maybeSingle();

  if (error || !data) {
    return false;
  }

  const row = data as { id?: string };
  return typeof row.id === "string" && row.id !== userId;
}

export async function saveProfileChanges(input: {
  userId: string;
  values: ProfileSettingsValues;
  avatarFile: File | null;
  coverFile: File | null;
  removeAvatar: boolean;
  removeCover: boolean;
  previousAvatarUrl: string | null;
  previousCoverUrl: string | null;
}): Promise<OwnProfile> {
  let avatarUrl = input.removeAvatar ? null : input.previousAvatarUrl;
  let coverUrl = input.removeCover ? null : input.previousCoverUrl;
  let uploadedAvatarUrl: string | null = null;
  let uploadedCoverUrl: string | null = null;

  try {
    if (input.avatarFile) {
      avatarUrl = await uploadProfileImage(
        input.userId,
        "avatar",
        input.avatarFile
      );
      uploadedAvatarUrl = avatarUrl;
    }

    if (input.coverFile) {
      coverUrl = await uploadProfileImage(input.userId, "cover", input.coverFile);
      uploadedCoverUrl = coverUrl;
    }

    const update = toProfileUpdate(input.values, {
      avatar_url: avatarUrl,
      cover_url: coverUrl,
    });

    const { data, error } = await supabase
      .from("profiles")
      .update(update)
      .eq("id", input.userId)
      .select(OWN_PROFILE_COLUMNS)
      .maybeSingle();

    if (error) {
      throw new Error(formatProfileSaveError(error));
    }

    const profile = normalizeOwnProfile(data);

    if (!profile) {
      throw new Error("Could not save your profile. Please try again.");
    }

    uploadedAvatarUrl = null;
    uploadedCoverUrl = null;

    if (avatarUrl && input.previousAvatarUrl && input.previousAvatarUrl !== avatarUrl) {
      await deleteOwnAvatar(input.previousAvatarUrl, input.userId);
    } else if (input.removeAvatar && !input.avatarFile) {
      await deleteOwnAvatar(input.previousAvatarUrl, input.userId);
    }

    if (coverUrl && input.previousCoverUrl && input.previousCoverUrl !== coverUrl) {
      await deleteOwnAvatar(input.previousCoverUrl, input.userId);
    } else if (input.removeCover && !input.coverFile) {
      await deleteOwnAvatar(input.previousCoverUrl, input.userId);
    }

    return profile;
  } catch (error) {
    if (uploadedAvatarUrl) {
      await deleteOwnAvatar(uploadedAvatarUrl, input.userId);
    }

    if (uploadedCoverUrl) {
      await deleteOwnAvatar(uploadedCoverUrl, input.userId);
    }

    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Could not save your profile. Please try again.");
  }
}

async function uploadProfileImage(
  userId: string,
  kind: "avatar" | "cover",
  file: File
): Promise<string> {
  const mime = file.type;

  if (mime !== "image/jpeg" && mime !== "image/png" && mime !== "image/webp") {
    throw new Error("Use a JPEG, PNG, or WebP image.");
  }

  const stripped = finalizeProfileImage(
    new Uint8Array(await file.arrayBuffer()),
    mime
  );
  const extension = mime === "image/png" ? "png" : mime === "image/webp" ? "webp" : "jpg";
  const path = newAvatarObjectPath(userId, kind, extension);
  const body = new Blob([toArrayBuffer(stripped)], { type: mime });

  const { error } = await supabase.storage.from(AVATARS_BUCKET).upload(path, body, {
    contentType: mime,
    cacheControl: "3600",
    upsert: false,
  });

  if (error) {
    throw new Error("Could not upload that photo. Please try again.");
  }

  const { data } = supabase.storage.from(AVATARS_BUCKET).getPublicUrl(path);

  if (!ownAvatarObjectPath(data.publicUrl, userId)) {
    await supabase.storage.from(AVATARS_BUCKET).remove([path]);
    throw new Error("Could not store that photo.");
  }

  return data.publicUrl;
}

async function deleteOwnAvatar(
  publicUrl: string | null,
  userId: string
): Promise<void> {
  if (!publicUrl) {
    return;
  }

  const path = ownAvatarObjectPath(publicUrl, userId);

  if (!path) {
    return;
  }

  const { error } = await supabase.storage.from(AVATARS_BUCKET).remove([path]);

  if (error) {
    console.error("Remove old profile image error:", error.message);
  }
}

function normalizeOwnProfile(value: unknown): OwnProfile | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const row = value as Record<string, unknown>;

  const accountType = typeof row.account_type === "string" ? row.account_type : "";

  if (
    typeof row.id !== "string" ||
    typeof row.handle !== "string" ||
    typeof row.display_name !== "string" ||
    !isAccountType(accountType)
  ) {
    return null;
  }

  return {
    id: row.id,
    handle: row.handle,
    display_name: row.display_name,
    account_type: accountType,
    headline: typeof row.headline === "string" ? row.headline : null,
    bio: typeof row.bio === "string" ? row.bio : null,
    country: typeof row.country === "string" ? row.country : null,
    target_countries: Array.isArray(row.target_countries)
      ? row.target_countries.filter(
          (item): item is string => typeof item === "string"
        )
      : [],
    avatar_url: typeof row.avatar_url === "string" ? row.avatar_url : null,
    cover_url: typeof row.cover_url === "string" ? row.cover_url : null,
    updated_at: typeof row.updated_at === "string" ? row.updated_at : "",
  };
}

function settingsLoadMessage(message: string): string {
  if (/column|schema cache|public_profiles|account_type/i.test(message)) {
    return "Profile settings will be available once the social database update is applied.";
  }

  return "Could not load your profile. Please try again.";
}

function toArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength
  ) as ArrayBuffer;
}
