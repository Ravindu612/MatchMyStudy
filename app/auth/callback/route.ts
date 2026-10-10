import {
  createServerClient,
  type CookieOptions,
} from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { User } from "@supabase/supabase-js";
import {
  GOOGLE_OAUTH_COOKIE_NAME,
  OAUTH_NEXT_COOKIE,
  SIGNUP_ROLE_COOKIE,
  parseSignupRole,
  safeNextPath,
  shouldApplySignupRole,
} from "@/lib/signupRole";

export const dynamic = "force-dynamic";

type PendingCookie = {
  name: string;
  value: string;
  options: CookieOptions;
};

/**
 * Google returns here with ?code=. Exchange it for a session, apply a
 * student/consultant signup role when one was chosen, then hand the session
 * to the browser client the rest of the app already uses.
 */
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const oauthError = url.searchParams.get("error");
  const nextPath = safeNextPath(
    request.cookies.get(OAUTH_NEXT_COOKIE)?.value
  );
  const signupRole = parseSignupRole(
    request.cookies.get(SIGNUP_ROLE_COOKIE)?.value
  );

  const cookieJar = new Map<string, PendingCookie>();
  let cacheHeaders: Record<string, string> = {};

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookieEncoding: "base64url",
      cookieOptions: {
        name: GOOGLE_OAUTH_COOKIE_NAME,
      },
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach((cookie) => {
            cookieJar.set(cookie.name, cookie);
            request.cookies.set(cookie.name, cookie.value);
          });
          cacheHeaders = {
            ...cacheHeaders,
            ...headers,
          };
        },
      },
    }
  );

  if (oauthError || !code) {
    return redirectToLogin(url.origin, nextPath);
  }

  const { data, error } =
    await supabase.auth.exchangeCodeForSession(code);

  const user = data.session?.user ?? data.user;

  if (error || !user) {
    console.error("Google code exchange failed:", error);
    return redirectToLogin(url.origin, nextPath);
  }

  if (signupRole && shouldApplySignupRole(user)) {
    await applyGoogleSignupRole(user, signupRole);
  }

  const sessionUrl = new URL("/auth/session", url.origin);
  sessionUrl.searchParams.set("next", nextPath);

  return withAuthCookies(
    NextResponse.redirect(sessionUrl),
    cookieJar,
    cacheHeaders
  );
}

function redirectToLogin(origin: string, nextPath: string) {
  const login = new URL("/login", origin);
  login.searchParams.set("error", "google");

  if (nextPath !== "/consultants") {
    login.searchParams.set("redirect", nextPath);
  }

  const response = NextResponse.redirect(login);
  clearOAuthCookies(response);
  return response;
}

function withAuthCookies(
  response: NextResponse,
  cookieJar: Map<string, PendingCookie>,
  cacheHeaders: Record<string, string>
) {
  cookieJar.forEach(({ name, value, options }) => {
    response.cookies.set(name, value, options);
  });

  for (const [key, value] of Object.entries(cacheHeaders)) {
    response.headers.set(key, value);
  }

  clearOAuthCookies(response);
  return response;
}

function clearOAuthCookies(response: NextResponse) {
  response.cookies.set(SIGNUP_ROLE_COOKIE, "", {
    path: "/",
    maxAge: 0,
  });
  response.cookies.set(OAUTH_NEXT_COOKIE, "", {
    path: "/",
    maxAge: 0,
  });
}

/**
 * handle_new_user() already inserted the profile as student, because Google
 * sign-in cannot send signup metadata. profiles_protect then ignores role
 * changes from a normal user session, so this uses the service role and only
 * for a brand-new student profile. Admin is not a SignupRole.
 */
async function applyGoogleSignupRole(
  user: User,
  requestedRole: string
) {
  const role = parseSignupRole(requestedRole);

  if (!role) {
    return;
  }

  if (
    !process.env.SUPABASE_SERVICE_ROLE_KEY ||
    !process.env.NEXT_PUBLIC_SUPABASE_URL
  ) {
    console.error(
      "SUPABASE_SERVICE_ROLE_KEY is required to apply a Google signup role."
    );
    return;
  }

  const { supabaseAdmin } = await import("@/lib/supabaseAdmin");

  const accountType =
    role === "consultant" ? "consultant" : "student";

  const { data: updated, error } = await supabaseAdmin
    .from("profiles")
    .update({ role })
    .eq("id", user.id)
    .eq("role", "student")
    .select("id");

  if (error) {
    console.error("Google signup role update failed:", error);
    return;
  }

  if (!updated?.length) {
    console.error(
      "Google signup role was not applied because the profile was not a new student account."
    );
    return;
  }

  const { error: accountTypeError } = await supabaseAdmin
    .from("profiles")
    .update({ account_type: accountType })
    .eq("id", user.id);

  if (accountTypeError) {
    console.error(
      "Google signup account type update failed:",
      accountTypeError
    );
  }

  const { error: metadataError } =
    await supabaseAdmin.auth.admin.updateUserById(user.id, {
      user_metadata: {
        ...user.user_metadata,
        role,
      },
    });

  if (metadataError) {
    console.error(
      "Google signup role metadata update failed:",
      metadataError
    );
  }
}
