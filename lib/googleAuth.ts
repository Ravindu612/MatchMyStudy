import { createClient } from "@supabase/supabase-js";

/**
 * Storage key used by the app client in lib/supabase.ts.
 * @supabase/supabase-js derives this from the project hostname.
 */
export function appAuthStorageKey(supabaseUrl: string) {
  const hostname = new URL(supabaseUrl).hostname;
  const projectRef = hostname.split(".")[0];

  return `sb-${projectRef}-auth-token`;
}

/**
 * Starts Google sign-in with PKCE and stores the code verifier in the same
 * localStorage entry the rest of the app reads. The callback page then calls
 * exchangeCodeForSession on that app client, so the header sees the user.
 *
 * A second client is required because the shared client stays on the implicit
 * flow for email confirmation links. persistSession must stay on: with it
 * off, supabase-js ignores the storage adapter and keeps the PKCE verifier
 * in memory, which disappears on the redirect. skipAutoInitialize keeps this
 * client from loading or refreshing the saved session.
 */
export async function signInWithGoogle(redirectTo: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabase = createClient(
    supabaseUrl,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        flowType: "pkce",
        storageKey: appAuthStorageKey(supabaseUrl),
        storage: window.localStorage,
        persistSession: true,
        autoRefreshToken: false,
        detectSessionInUrl: false,
        skipAutoInitialize: true,
      },
    }
  );

  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
      queryParams: {
        prompt: "select_account",
      },
    },
  });
}
