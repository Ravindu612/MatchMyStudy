export const SIGNUP_ROLE_COOKIE = "mms_signup_role";
export const OAUTH_NEXT_COOKIE = "mms_oauth_next";

/**
 * Cookie name shared by the browser client that starts Google sign-in and the
 * server client that exchanges the auth code. Kept separate from the app's
 * localStorage session key so the two clients do not share a refresh token.
 */
export const GOOGLE_OAUTH_COOKIE_NAME = "sb-google-oauth";

export type SignupRole = "student" | "consultant";

const NEW_ACCOUNT_WINDOW_MS = 60 * 60 * 1000;

/**
 * Roles a person may choose at signup. Admin is never accepted from the
 * browser, a cookie, or OAuth metadata.
 */
export function parseSignupRole(
  value: string | null | undefined
): SignupRole | null {
  const normalized = value?.trim().toLowerCase();

  if (normalized === "student" || normalized === "consultant") {
    return normalized;
  }

  return null;
}

/**
 * Only same-origin paths. Rejects protocol-relative and absolute URLs.
 */
export function safeNextPath(
  value: string | null | undefined
): string {
  if (!value) {
    return "/consultants";
  }

  let path = value;

  try {
    path = decodeURIComponent(value);
  } catch {
    return "/consultants";
  }

  if (
    !path.startsWith("/") ||
    path.startsWith("//") ||
    path.includes("\\") ||
    path.includes("://") ||
    path.includes("\0") ||
    /[\s;]/.test(path)
  ) {
    return "/consultants";
  }

  return path;
}

export function isNewAuthUser(
  createdAt: string | undefined,
  now = Date.now()
): boolean {
  if (!createdAt) {
    return false;
  }

  const created = Date.parse(createdAt);

  if (Number.isNaN(created)) {
    return false;
  }

  const age = now - created;

  return age >= -60_000 && age <= NEW_ACCOUNT_WINDOW_MS;
}

/**
 * Google sign-up cannot put a role in the auth user before handle_new_user
 * runs, so the callback applies the chosen role afterwards. Skip that when
 * the account is not new, or when metadata already has a role (email signup,
 * or anything that already asked for admin).
 */
export function shouldApplySignupRole(
  user: {
    created_at?: string;
    user_metadata?: Record<string, unknown> | null;
  },
  now = Date.now()
): boolean {
  if (!isNewAuthUser(user.created_at, now)) {
    return false;
  }

  const existing = user.user_metadata?.role;

  if (
    existing === "student" ||
    existing === "consultant" ||
    existing === "admin"
  ) {
    return false;
  }

  return true;
}

export function writeBrowserCookie(
  name: string,
  value: string,
  maxAgeSeconds: number
) {
  const secure =
    window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax${secure}`;
}
