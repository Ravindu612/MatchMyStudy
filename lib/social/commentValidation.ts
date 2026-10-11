export const COMMENT_BODY_MAX_LENGTH = 2000;

export function validateCommentBody(
  value: string
): { ok: true; body: string } | { ok: false; message: string } {
  const body = value.trim();

  if (!body) {
    return { ok: false, message: "Write a comment before posting." };
  }

  if (body.length > COMMENT_BODY_MAX_LENGTH) {
    return {
      ok: false,
      message: `Comments can be up to ${COMMENT_BODY_MAX_LENGTH.toLocaleString("en-US")} characters.`,
    };
  }

  return { ok: true, body };
}

export function commentWasEdited(createdAt: string, updatedAt: string): boolean {
  const created = Date.parse(createdAt);
  const updated = Date.parse(updatedAt);

  if (Number.isNaN(created) || Number.isNaN(updated)) {
    return false;
  }

  return updated - created > 2000;
}

export function commentCountLabel(count: number): string {
  const safe = Number.isFinite(count) && count > 0 ? Math.floor(count) : 0;

  return safe === 1 ? "1 comment" : `${safe} comments`;
}
