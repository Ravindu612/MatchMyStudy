import { supabase } from "@/lib/supabase";
import { isUserId } from "@/lib/social/postValidation";

export async function requireUserId(): Promise<string> {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user || !isUserId(user.id)) {
    throw new Error("Log in to continue.");
  }

  return user.id;
}
