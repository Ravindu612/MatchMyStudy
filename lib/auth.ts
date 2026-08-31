import { supabase } from "@/lib/supabase";

export type UserRole =
  | "student"
  | "consultant"
  | "admin";

export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    // No logged-in user is a normal situation.
    if (error.name === "AuthSessionMissingError") {
      return null;
    }

    console.error(
      "Get current user error:",
      error
    );

    return null;
  }

  return user;
}

export async function getCurrentUserProfile() {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("id, email, role")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    console.error(
      "Get current user profile error:",
      error
    );

    return null;
  }

  return data as {
    id: string;
    email: string | null;
    role: UserRole;
  };
}