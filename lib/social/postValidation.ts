import type { PostVisibility } from "@/types/social";

export const POST_BODY_MAX_LENGTH = 5000;
export const POST_IMAGE_MAX_COUNT = 4;
export const POST_TAG_MAX_COUNT = 8;
export const POST_IMAGE_MAX_BYTES = 5 * 1024 * 1024;
export const POST_MEDIA_BUCKET = "post-media";

const USER_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function validatePostBody(
  value: string
): { ok: true; body: string } | { ok: false; message: string } {
  const body = value.trim();

  if (!body) {
    return { ok: false, message: "Write something to post." };
  }

  if (body.length > POST_BODY_MAX_LENGTH) {
    return {
      ok: false,
      message: `Posts can be up to ${POST_BODY_MAX_LENGTH.toLocaleString("en-US")} characters.`,
    };
  }

  return { ok: true, body };
}

export function validatePostVisibility(
  value: string
): { ok: true; visibility: PostVisibility } | { ok: false; message: string } {
  if (value === "public" || value === "followers") {
    return { ok: true, visibility: value };
  }

  return { ok: false, message: "Choose public or followers-only." };
}

export function isUserId(value: string): boolean {
  return USER_ID_PATTERN.test(value);
}

/**
 * Storage object name for the post-media bucket. The first folder is the
 * author id, which is what the storage policy allows them to write.
 */
export function newPostMediaPath(
  userId: string,
  extension: "jpg" | "png" | "webp" | "gif"
): string {
  if (!isUserId(userId)) {
    throw new Error("Invalid account.");
  }

  return `${userId}/${crypto.randomUUID()}.${extension}`;
}

/** True when the path is exactly `<user id>/<file>` and the file name is safe. */
export function isOwnPostMediaPath(path: string, userId: string): boolean {
  if (!isUserId(userId) || !path.startsWith(`${userId}/`)) {
    return false;
  }

  const fileName = path.slice(userId.length + 1);

  return (
    fileName.length > 0 &&
    /^[A-Za-z0-9._-]+$/.test(fileName) &&
    !fileName.includes("..")
  );
}

export function messageForPostError(error: unknown, fallback: string): string {
  const raw = errorText(error);

  if (/rate limit/i.test(raw)) {
    return "You've posted a lot in the last hour. Try again later.";
  }

  if (/jwt|not authenticated|auth session missing|invalid claim/i.test(raw)) {
    return "Log in to post.";
  }

  if (
    raw &&
    raw.length <= 180 &&
    !/relation |syntax error|stack|password|secret|key/i.test(raw)
  ) {
    return raw;
  }

  return fallback;
}

function errorText(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }

  return "";
}
