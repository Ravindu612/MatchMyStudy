import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

import { getSupabase } from "@/lib/supabase";

WebBrowser.maybeCompleteAuthSession();

/** Custom scheme used by a dev build or a store build. Add this in Supabase. */
export const APP_SCHEME_REDIRECT = "matchmystudy://auth/callback";

const exchangedCodes = new Set<string>();

/**
 * Expo Go ignores the custom scheme and returns an exp:// address instead.
 * A dev build or store build uses matchmystudy://auth/callback.
 */
export function authRedirectUrl(): string {
  const runtime = Linking.createURL("auth/callback");
  if (runtime.startsWith("matchmystudy:")) {
    return APP_SCHEME_REDIRECT;
  }
  return runtime;
}

export async function signInWithGoogle(): Promise<{ error?: string }> {
  const redirectTo = authRedirectUrl();
  const supabase = getSupabase();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
      skipBrowserRedirect: true,
      queryParams: { prompt: "select_account" },
    },
  });

  if (error) {
    return { error: error.message };
  }

  if (!data.url) {
    return { error: "Google sign-in could not be started." };
  }

  const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);

  if (result.type === "cancel" || result.type === "dismiss") {
    return { error: "Google sign-in was cancelled." };
  }

  if (result.type !== "success") {
    return { error: "Google sign-in could not be completed. Please try again." };
  }

  const completed = await completeAuthUrl(result.url);
  return completed.error ? { error: completed.error } : {};
}

export async function completeAuthUrl(
  url: string
): Promise<{ handled: boolean; error?: string }> {
  const params = readParams(url);
  if (!params.code && !params.accessToken && !params.error) {
    return { handled: false };
  }

  if (params.error) {
    return { handled: true, error: params.error };
  }

  const supabase = getSupabase();

  if (params.code) {
    if (exchangedCodes.has(params.code)) {
      return { handled: true };
    }
    exchangedCodes.add(params.code);
    const { error } = await supabase.auth.exchangeCodeForSession(params.code);
    if (error) {
      exchangedCodes.delete(params.code);
      return { handled: true, error: error.message };
    }
    return { handled: true };
  }

  if (params.accessToken && params.refreshToken) {
    const { error } = await supabase.auth.setSession({
      access_token: params.accessToken,
      refresh_token: params.refreshToken,
    });
    if (error) {
      return { handled: true, error: error.message };
    }
    return { handled: true };
  }

  return { handled: true, error: "Google sign-in did not return a session." };
}

function readParams(url: string): {
  code?: string;
  accessToken?: string;
  refreshToken?: string;
  error?: string;
} {
  const params = new URLSearchParams();
  const queryIndex = url.indexOf("?");
  const hashIndex = url.indexOf("#");

  if (queryIndex >= 0) {
    const end = hashIndex > queryIndex ? hashIndex : url.length;
    append(params, url.slice(queryIndex + 1, end));
  }

  if (hashIndex >= 0) {
    append(params, url.slice(hashIndex + 1));
  }

  const error =
    params.get("error_description") ?? params.get("error") ?? undefined;

  return {
    code: params.get("code") ?? undefined,
    accessToken: params.get("access_token") ?? undefined,
    refreshToken: params.get("refresh_token") ?? undefined,
    error: error ? decodeURIComponent(error.replace(/\+/g, " ")) : undefined,
  };
}

function append(target: URLSearchParams, raw: string): void {
  const next = new URLSearchParams(raw);
  next.forEach((value, key) => {
    target.set(key, value);
  });
}
