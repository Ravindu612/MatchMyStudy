import { createClient, type SupabaseClient, type User } from "@supabase/supabase-js";

export type BearerSession =
  | {
      ok: true;
      user: User;
      client: SupabaseClient;
      supabaseUrl: string;
    }
  | {
      ok: false;
      status: number;
      message: string;
    };

export function bearerToken(request: Request): string | null {
  const header = request.headers.get("authorization");

  if (!header?.startsWith("Bearer ")) {
    return null;
  }

  const token = header.slice("Bearer ".length).trim();

  return token || null;
}

/**
 * Verifies the caller's access token and returns a client that sends that
 * token, so Postgres sees auth.uid() and row level security applies.
 * The public env vars are read here, not at import time.
 */
export async function readBearerSession(request: Request): Promise<BearerSession> {
  const token = bearerToken(request);

  if (!token) {
    return {
      ok: false,
      status: 401,
      message: "You need to be signed in.",
    };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !anonKey) {
    return {
      ok: false,
      status: 503,
      message: "Account tools are not configured.",
    };
  }

  const client = createClient(supabaseUrl, anonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const {
    data: { user },
    error,
  } = await client.auth.getUser(token);

  if (error || !user) {
    return {
      ok: false,
      status: 401,
      message: "Your login session has expired. Sign in again.",
    };
  }

  return {
    ok: true,
    user,
    client,
    supabaseUrl,
  };
}
