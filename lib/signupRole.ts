export const SIGNUP_ROLE_COOKIE = "mms_signup_role";
export const OAUTH_NEXT_COOKIE = "mms_oauth_next";
export const SIGNUP_ROLE_STORAGE = "mms_signup_role";
export const OAUTH_NEXT_STORAGE = "mms_oauth_next";

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

export function readBrowserCookie(name: string): string | null {
  const prefix = `${name}=`;
  const parts = document.cookie ? document.cookie.split("; ") : [];

  for (const part of parts) {
    if (part.startsWith(prefix)) {
      try {
        return decodeURIComponent(part.slice(prefix.length));
      } catch {
        return null;
      }
    }
  }

  return null;
}

/**
 * Login link for the current page. Client-side navigation does not update
 * document.referrer, so the header passes the page along as `redirect`.
 */
export function loginPathFor(
  pathname: string | null | undefined
): string {
  if (
    !pathname ||
    pathname === "/login" ||
    pathname.startsWith("/auth/") ||
    !pathname.startsWith("/") ||
    pathname.startsWith("//")
  ) {
    return "/login";
  }

  return `/login?redirect=${encodeURIComponent(pathname)}`;
}

/**
 * Where to send someone after Google sign-in. An internal `redirect` query
 * wins. Otherwise use the same-origin page they came from. There is no
 * dashboard route; /consultants is the signed-in home.
 */
export function resolveOAuthNextPath(
  redirectParam: string | null | undefined,
  referrer: string | null | undefined,
  origin: string
): string {
  if (redirectParam) {
    return safeNextPath(redirectParam);
  }

  if (!referrer || !origin) {
    return "/consultants";
  }

  try {
    const url = new URL(referrer);

    if (url.origin !== origin) {
      return "/consultants";
    }

    if (
      url.pathname === "/login" ||
      url.pathname.startsWith("/auth/")
    ) {
      return "/consultants";
    }

    return safeNextPath(`${url.pathname}${url.search}`);
  } catch {
    return "/consultants";
  }
}

function browserStorage() {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

/**
 * Remember the post-login path and signup role across the Google redirect.
 * sessionStorage stays on this tab; the cookies cover a browser that drops
 * sessionStorage. redirectTo itself stays an exact allow-listed URL.
 */
export function rememberOAuthHandoff(
  nextPath: string,
  role: SignupRole | null
) {
  const storage = browserStorage();

  writeBrowserCookie(OAUTH_NEXT_COOKIE, nextPath, 600);
  storage?.setItem(OAUTH_NEXT_STORAGE, nextPath);

  if (role) {
    writeBrowserCookie(SIGNUP_ROLE_COOKIE, role, 600);
    storage?.setItem(SIGNUP_ROLE_STORAGE, role);
    return;
  }

  writeBrowserCookie(SIGNUP_ROLE_COOKIE, "", 0);
  storage?.removeItem(SIGNUP_ROLE_STORAGE);
}

export function readOAuthHandoff(): {
  nextPath: string;
  role: SignupRole | null;
} {
  const storage = browserStorage();
  const storedNext = storage?.getItem(OAUTH_NEXT_STORAGE);
  const storedRole = storage?.getItem(SIGNUP_ROLE_STORAGE);

  return {
    nextPath: safeNextPath(
      storedNext || readBrowserCookie(OAUTH_NEXT_COOKIE)
    ),
    role: parseSignupRole(
      storedRole || readBrowserCookie(SIGNUP_ROLE_COOKIE)
    ),
  };
}

export function clearOAuthHandoff() {
  const storage = browserStorage();

  storage?.removeItem(OAUTH_NEXT_STORAGE);
  storage?.removeItem(SIGNUP_ROLE_STORAGE);
  writeBrowserCookie(OAUTH_NEXT_COOKIE, "", 0);
  writeBrowserCookie(SIGNUP_ROLE_COOKIE, "", 0);
}
