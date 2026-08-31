import { createSupabaseServerClient } from "@/lib/supabaseServer";

export async function getCurrentUserProfileServer() {
  const supabase =
    await createSupabaseServerClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return null;
  }

  const { data, error } =
    await supabase
      .from("profiles")
      .select("id, email, role")
      .eq("id", user.id)
      .maybeSingle();

  if (error) {
    console.error(
      "Get server user profile error:",
      error
    );

    return null;
  }

  return data as {
    id: string;
    email: string | null;
    role:
      | "student"
      | "consultant"
      | "admin";
  };
}