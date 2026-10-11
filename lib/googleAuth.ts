import { createBrowserClient } from "@supabase/ssr";
import { GOOGLE_OAUTH_COOKIE_NAME } from "@/lib/signupRole";

/**
 * Browser client used only to start and finish the Google PKCE handshake.
 * The rest of the app keeps using the localStorage client in lib/supabase.ts.
 */
export function createGoogleOAuthBrowserClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      isSingleton: false,
      cookieEncoding: "base64url",
      cookieOptions: {
        name: GOOGLE_OAUTH_COOKIE_NAME,
      },
      auth: {
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    }
  );
}

export async function signInWithGoogle(redirectTo: string) {
  const supabase = createGoogleOAuthBrowserClient();

  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
    },
  });
}
