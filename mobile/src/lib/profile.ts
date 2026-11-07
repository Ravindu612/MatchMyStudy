import * as Crypto from "expo-crypto";
import { SaveFormat, manipulateAsync } from "expo-image-manipulator";

import { safeHttpsUrl } from "@/lib/format";
import { getSupabase } from "@/lib/supabase";
import { isHandle, parseBio } from "@/lib/validation";

const AVATARS_BUCKET = "avatars";
const AVATARS_PUBLIC_MARKER = "/storage/v1/object/public/avatars/";
const USER_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const PUBLIC_COLUMNS =
  "id, handle, display_name, account_type, headline, bio, country, target_countries, avatar_url, cover_url, is_verified, is_upgraded, created_at";

export type DirectoryProfile = {
  id: string;
  handle: string;
  displayName: string;
  accountType: string;
  headline: string | null;
  bio: string | null;
  country: string | null;
  targetCountries: string[];
  avatarUrl: string | null;
  coverUrl: string | null;
  isVerified: boolean;
  isUpgraded: boolean;
  createdAt: string;
};

export async function loadProfileByHandle(
  handle: string
): Promise<
  { ok: true; profile: DirectoryProfile } | { ok: false; message: string; missing?: boolean }
> {
  const trimmed = handle.trim();
  if (!isHandle(trimmed)) {
    return { ok: false, message: "That profile doesn't exist.", missing: true };
  }

  const { data, error } = await getSupabase()
    .from("public_profiles")
    .select(PUBLIC_COLUMNS)
    .eq("handle", trimmed)
    .maybeSingle();

  if (error) {
    return { ok: false, message: "Couldn't load this profile." };
  }

  const profile = normalizeProfile(data);
  if (!profile) {
    return { ok: false, message: "That profile doesn't exist.", missing: true };
  }

  return { ok: true, profile };
}

export async function loadProfileById(
  userId: string
): Promise<{ ok: true; profile: DirectoryProfile } | { ok: false; message: string }> {
  const { data, error } = await getSupabase()
    .from("public_profiles")
    .select(PUBLIC_COLUMNS)
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    return { ok: false, message: "Couldn't load your profile." };
  }

  const profile = normalizeProfile(data);
  if (!profile) {
    return { ok: false, message: "We couldn't find a profile for this account." };
  }

  return { ok: true, profile };
}

/**
 * Re-encoding to JPEG drops location EXIF before the photo is stored.
 * The avatars bucket only accepts JPEG, PNG, and WebP, and files must sit in
 * the signed-in user's own folder.
 */
export async function prepareAvatar(uri: string): Promise<string> {
  const image = await manipulateAsync(uri, [{ resize: { width: 1024 } }], {
    compress: 0.82,
    format: SaveFormat.JPEG,
    base64: true,
  });

  if (!image.base64) {
    throw new Error("Could not read that photo.");
  }

  return image.base64;
}

export async function saveBioAndAvatar(input: {
  userId: string;
  bio: string;
  previousAvatarUrl: string | null;
  nextAvatarBase64: string | null;
  removeAvatar: boolean;
}): Promise<DirectoryProfile> {
  const parsed = parseBio(input.bio);
  if (!parsed.ok) {
    throw new Error(parsed.message);
  }

  let avatarUrl = input.removeAvatar ? null : input.previousAvatarUrl;
  let uploadedPath: string | null = null;

  try {
    if (input.nextAvatarBase64) {
      const uploaded = await uploadAvatar(input.userId, input.nextAvatarBase64);
      avatarUrl = uploaded.url;
      uploadedPath = uploaded.path;
    }

    const { error } = await getSupabase()
      .from("profiles")
      .update({ bio: parsed.bio, avatar_url: avatarUrl })
      .eq("id", input.userId);

    if (error) {
      throw new Error(profileError(error));
    }

    if (input.previousAvatarUrl && input.previousAvatarUrl !== avatarUrl) {
      await deleteOwnAvatar(input.previousAvatarUrl, input.userId);
    }

    const refreshed = await loadProfileById(input.userId);
    if (!refreshed.ok) {
      throw new Error(refreshed.message);
    }

    return refreshed.profile;
  } catch (error) {
    if (uploadedPath) {
      await getSupabase().storage.from(AVATARS_BUCKET).remove([uploadedPath]);
    }

    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Could not save your profile. Please try again.");
  }
}

async function uploadAvatar(
  userId: string,
  base64: string
): Promise<{ path: string; url: string }> {
  if (!USER_ID_PATTERN.test(userId)) {
    throw new Error("Invalid account.");
  }

  const bytes = decodeBase64(base64);
  if (bytes.byteLength > 5 * 1024 * 1024) {
    throw new Error("That photo is too large. Try a smaller one.");
  }

  const path = `${userId}/avatar-${Crypto.randomUUID()}.jpg`;
  const { error } = await getSupabase().storage.from(AVATARS_BUCKET).upload(path, bytes, {
    contentType: "image/jpeg",
    cacheControl: "3600",
    upsert: false,
  });

  if (error) {
    throw new Error("Could not upload that photo. Please try again.");
  }

  const { data } = getSupabase().storage.from(AVATARS_BUCKET).getPublicUrl(path);
  if (!ownAvatarObjectPath(data.publicUrl, userId)) {
    await getSupabase().storage.from(AVATARS_BUCKET).remove([path]);
    throw new Error("Could not store that photo.");
  }

  return { path, url: data.publicUrl };
}

async function deleteOwnAvatar(publicUrl: string, userId: string): Promise<void> {
  const path = ownAvatarObjectPath(publicUrl, userId);
  if (!path) {
    return;
  }

  await getSupabase().storage.from(AVATARS_BUCKET).remove([path]);
}

function ownAvatarObjectPath(publicUrl: string, userId: string): string | null {
  if (!USER_ID_PATTERN.test(userId)) {
    return null;
  }

  let url: URL;
  try {
    url = new URL(publicUrl);
  } catch {
    return null;
  }

  if (url.protocol !== "https:") {
    return null;
  }

  const markerIndex = url.pathname.indexOf(AVATARS_PUBLIC_MARKER);
  if (markerIndex === -1) {
    return null;
  }

  let path = decodeURIComponent(
    url.pathname.slice(markerIndex + AVATARS_PUBLIC_MARKER.length)
  );
  if (path.startsWith("/")) {
    path = path.slice(1);
  }

  const folder = `${userId}/`;
  if (!path.startsWith(folder)) {
    return null;
  }

  const fileName = path.slice(folder.length);
  if (
    !fileName ||
    fileName.includes("/") ||
    fileName.includes("\\") ||
    fileName.includes("..")
  ) {
    return null;
  }

  return `${userId}/${fileName}`;
}

function normalizeProfile(value: unknown): DirectoryProfile | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const row = value as Record<string, unknown>;
  if (
    typeof row.id !== "string" ||
    typeof row.handle !== "string" ||
    typeof row.display_name !== "string"
  ) {
    return null;
  }

  return {
    id: row.id,
    handle: row.handle,
    displayName: row.display_name,
    accountType: typeof row.account_type === "string" ? row.account_type : "other",
    headline: optionalText(row.headline),
    bio: optionalText(row.bio),
    country: optionalText(row.country),
    targetCountries: Array.isArray(row.target_countries)
      ? row.target_countries.filter(
          (item): item is string => typeof item === "string" && item.trim() !== ""
        )
      : [],
    avatarUrl: safeHttpsUrl(typeof row.avatar_url === "string" ? row.avatar_url : null),
    coverUrl: safeHttpsUrl(typeof row.cover_url === "string" ? row.cover_url : null),
    isVerified: row.is_verified === true,
    isUpgraded: row.is_upgraded === true,
    createdAt: typeof row.created_at === "string" ? row.created_at : "",
  };
}

function optionalText(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value : null;
}

function decodeBase64(value: string): ArrayBuffer {
  const binary = globalThis.atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes.buffer;
}

function profileError(error: { code?: string; message?: string }): string {
  const message = error.message ?? "";
  if (message.includes("profiles_bio_len")) {
    return "Bio must be 2,000 characters or fewer.";
  }
  if (error.code === "42501") {
    return "You don't have permission to update this profile.";
  }
  return "Could not save your profile. Please try again.";
}
