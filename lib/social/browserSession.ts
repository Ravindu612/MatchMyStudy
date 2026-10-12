import { supabase } from "@/lib/supabase";
import type { Session } from "@supabase/supabase-js";

/**
 * Read the Supabase session from the browser.
 * The server render of a client component cannot see localStorage, so callers
 * subscribe after mount and update links once this fires.
 * Profile queries stay outside onAuthStateChange: that callback holds the
 * auth lock, and awaiting another Supabase call there can stall the update.
 */
export function subscribeToBrowserSession(
  onSession: (session: Session | null) => void
): () => void {
  let cancelled = false;

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((event, session) => {
    if (
      event !== "INITIAL_SESSION" &&
      event !== "SIGNED_IN" &&
      event !== "SIGNED_OUT" &&
      event !== "TOKEN_REFRESHED" &&
      event !== "USER_UPDATED"
    ) {
      return;
    }

    window.setTimeout(() => {
      if (!cancelled) {
        onSession(session);
      }
    }, 0);
  });

  return () => {
    cancelled = true;
    subscription.unsubscribe();
  };
}
