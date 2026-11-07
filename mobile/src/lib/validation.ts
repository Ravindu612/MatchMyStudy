export const COMMENT_MAX = 2000;
export const BIO_MAX = 2000;
export const PASSWORD_MIN = 6;

const HANDLE_PATTERN = /^[A-Za-z0-9_]{3,30}$/;
const POST_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type SignupRole = "student" | "consultant";

export function isPostId(value: string): boolean {
  return POST_ID_PATTERN.test(value);
}

export function isHandle(value: string): boolean {
  return HANDLE_PATTERN.test(value);
}

export function parseComment(
  value: string
): { ok: true; body: string } | { ok: false; message: string } {
  const body = value.trim();

  if (!body) {
    return { ok: false, message: "Write a comment before posting." };
  }

  if (body.length > COMMENT_MAX) {
    return { ok: false, message: "Comments can be up to 2,000 characters." };
  }

  return { ok: true, body };
}

export function parseBio(
  value: string
): { ok: true; bio: string | null } | { ok: false; message: string } {
  const bio = value.replace(/\r\n/g, "\n").trim();

  if (bio.length > BIO_MAX) {
    return { ok: false, message: "Bio must be 2,000 characters or fewer." };
  }

  return { ok: true, bio: bio ? bio : null };
}

export function commentWasEdited(createdAt: string, updatedAt: string): boolean {
  const created = Date.parse(createdAt);
  const updated = Date.parse(updatedAt);

  if (Number.isNaN(created) || Number.isNaN(updated)) {
    return false;
  }

  return updated - created > 2000;
}
