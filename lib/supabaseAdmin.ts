import {
  createClient,
  type SupabaseClient,
} from "@supabase/supabase-js";

let adminClient: SupabaseClient | null = null;

/**
 * Returns null when the service role key is not configured.
 * The client is created on first use so `next build` can load routes
 * that import this module without the key present.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  if (!adminClient) {
    adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }

  return adminClient;
}

function requireSupabaseAdmin(): SupabaseClient {
  const client = getSupabaseAdmin();

  if (!client) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is not configured"
    );
  }

  return client;
}

export const supabaseAdmin: SupabaseClient = new Proxy(
  {} as SupabaseClient,
  {
    get(_target, property) {
      const client = requireSupabaseAdmin();
      const value = Reflect.get(client, property, client);

      return typeof value === "function"
        ? value.bind(client)
        : value;
    },
  }
);
