const AVATARS_PUBLIC_MARKER = "/storage/v1/object/public/avatars/";

const USER_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * Storage object path for a public avatars URL, only when it sits in this
 * user's own folder. Other buckets, other users, and nested paths are ignored
 * so a profile update cannot delete someone else's file.
 */
export function ownAvatarObjectPath(
  publicUrl: string,
  userId: string
): string | null {
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

export function newAvatarObjectPath(
  userId: string,
  kind: "avatar" | "cover",
  extension: "jpg" | "png" | "webp"
): string {
  if (!USER_ID_PATTERN.test(userId)) {
    throw new Error("Invalid account.");
  }

  return `${userId}/${kind}-${crypto.randomUUID()}.${extension}`;
}

/** Only https image URLs are rendered. Blocks javascript: and data: URLs. */
export function safeImageUrl(value: string | null | undefined): string | null {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);

    if (url.protocol !== "https:") {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}
