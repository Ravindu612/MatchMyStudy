export const DELETE_ACCOUNT_CONFIRMATION = "DELETE";

const PUBLIC_MARKER = "/storage/v1/object/public/";

const USER_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const USER_STORAGE_BUCKETS = ["avatars", "post-media", "chat-media"] as const;

export const LISTING_STORAGE_BUCKETS = [
  "consultant-logos",
  "consultant-banners",
  "consultant-success-stories",
  "consultant-promotional-content",
] as const;

export type StorageObjectRef = {
  bucket: string;
  path: string;
};

export type ExportFile = {
  bucket: string | null;
  path: string | null;
  url: string;
};

export function isDeleteAccountConfirmation(value: unknown): boolean {
  return typeof value === "string" && value.trim() === DELETE_ACCOUNT_CONFIRMATION;
}

export function storageObjectFromPublicUrl(
  value: string | null | undefined
): StorageObjectRef | null {
  if (!value || !value.includes(PUBLIC_MARKER)) {
    return null;
  }

  let url: URL;

  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    return null;
  }

  const index = url.pathname.indexOf(PUBLIC_MARKER);

  if (index === -1) {
    return null;
  }

  let tail = url.pathname.slice(index + PUBLIC_MARKER.length);

  try {
    tail = decodeURIComponent(tail);
  } catch {
    return null;
  }

  tail = tail.replace(/^\/+/, "");
  const slash = tail.indexOf("/");

  if (slash <= 0) {
    return null;
  }

  const bucket = tail.slice(0, slash);
  const path = tail.slice(slash + 1);

  if (!bucket || !path || path.includes("..") || path.includes("\\")) {
    return null;
  }

  return { bucket, path };
}

export function isUserFolderObject(bucket: string, path: string, userId: string): boolean {
  if (!USER_ID_PATTERN.test(userId)) {
    return false;
  }

  if (!(USER_STORAGE_BUCKETS as readonly string[]).includes(bucket)) {
    return false;
  }

  const prefix = `${userId}/`;

  if (!path.startsWith(prefix) || path.includes("..") || path.includes("\\")) {
    return false;
  }

  const fileName = path.slice(prefix.length);

  return fileName.length > 0 && !fileName.includes("/");
}

export function isListingObject(bucket: string, path: string, userId: string): boolean {
  if (!USER_ID_PATTERN.test(userId)) {
    return false;
  }

  if (!(LISTING_STORAGE_BUCKETS as readonly string[]).includes(bucket)) {
    return false;
  }

  if (!path || path.includes("..") || path.includes("\\") || path.startsWith("/")) {
    return false;
  }

  const first = path.split("/")[0] ?? "";

  if (USER_ID_PATTERN.test(first) && first.toLowerCase() !== userId.toLowerCase()) {
    return false;
  }

  return true;
}

export function publicObjectUrl(supabaseUrl: string, bucket: string, path: string): string {
  const base = supabaseUrl.replace(/\/$/, "");
  const encodedPath = path
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");

  return `${base}/storage/v1/object/public/${encodeURIComponent(bucket)}/${encodedPath}`;
}

function textValues(value: unknown): string[] {
  if (typeof value === "string" && value.trim()) {
    return [value];
  }

  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
}

function recordList(value: unknown): Record<string, unknown>[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is Record<string, unknown> => !!item && typeof item === "object");
}

export function filesForExport(input: {
  supabaseUrl: string | null;
  userId: string;
  profile: unknown;
  postMedia: unknown;
  consultants: unknown;
  stories: unknown;
  promotional: unknown;
  folderObjects: StorageObjectRef[];
}): ExportFile[] {
  const files = new Map<string, ExportFile>();

  function addObject(bucket: string, path: string) {
    const allowed =
      isUserFolderObject(bucket, path, input.userId) ||
      isListingObject(bucket, path, input.userId);

    if (!allowed) {
      return;
    }

    const url = input.supabaseUrl
      ? publicObjectUrl(input.supabaseUrl, bucket, path)
      : `storage://${bucket}/${path}`;
    const key = `${bucket}/${path}`;

    if (!files.has(key)) {
      files.set(key, { bucket, path, url });
    }
  }

  function addReference(value: string) {
    const object = storageObjectFromPublicUrl(value);

    if (object) {
      addObject(object.bucket, object.path);
      return;
    }

    if (!value.startsWith("https://")) {
      return;
    }

    if (!files.has(value)) {
      files.set(value, { bucket: null, path: null, url: value });
    }
  }

  for (const object of input.folderObjects) {
    addObject(object.bucket, object.path);
  }

  const profile =
    input.profile && typeof input.profile === "object"
      ? (input.profile as Record<string, unknown>)
      : null;

  if (profile) {
    for (const value of [...textValues(profile.avatar_url), ...textValues(profile.cover_url)]) {
      addReference(value);
    }
  }

  for (const media of recordList(input.postMedia)) {
    const storagePath = media.storage_path;

    if (typeof storagePath !== "string") {
      continue;
    }

    if (storagePath.includes(PUBLIC_MARKER)) {
      addReference(storagePath);
    } else {
      addObject("post-media", storagePath);
    }
  }

  const ownedIds = new Set<string>();

  for (const consultant of recordList(input.consultants)) {
    if (typeof consultant.id === "string") {
      ownedIds.add(consultant.id);
    }

    for (const value of [
      ...textValues(consultant.logo),
      ...textValues(consultant.banner),
      ...textValues(consultant.gallery),
    ]) {
      addReference(value);
    }
  }

  for (const story of [...recordList(input.stories), ...recordList(input.promotional)]) {
    const consultantId = story.consultant_id;

    if (typeof consultantId === "string" && ownedIds.size > 0 && !ownedIds.has(consultantId)) {
      continue;
    }

    for (const value of textValues(story.image_url)) {
      addReference(value);
    }
  }

  return [...files.values()];
}
