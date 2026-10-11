import type { User } from "@supabase/supabase-js";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import {
  parseSignupRole,
  type SignupRole,
} from "@/lib/signupRole";

/**
 * handle_new_user() inserts the profile as student, because Google sign-in
 * cannot send signup metadata. profiles_protect then ignores role changes
 * from a normal user session, so this uses the service role and only for a
 * brand-new student profile. Admin is not a SignupRole.
 */
export async function applyGoogleSignupRole(
  user: User,
  requestedRole: SignupRole
): Promise<boolean> {
  const role = parseSignupRole(requestedRole);

  if (!role) {
    return false;
  }

  const supabaseAdmin = getSupabaseAdmin();

  if (!supabaseAdmin) {
    console.error(
      "SUPABASE_SERVICE_ROLE_KEY is required to apply a Google signup role."
    );
    return false;
  }

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
    return false;
  }

  if (!updated?.length) {
    console.error(
      "Google signup role was not applied because the profile was not a new student account."
    );
    return false;
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

  return true;
}
