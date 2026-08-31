import type { Consultant } from "@/types/consultant";
import { getCurrentUserProfile } from "@/lib/auth";

export async function getConsultantPermissions(
  consultant: Consultant
) {
  const profile =
    await getCurrentUserProfile();

  // Nobody logged in
  if (!profile) {
    return {
      isLoggedIn: false,
      isStudent: false,
      isConsultant: false,
      isAdmin: false,
      isOwner: false,
    };
  }

  const isAdmin =
    profile.role === "admin";

  const isConsultant =
    profile.role === "consultant";

  const isStudent =
    profile.role === "student";

  const isOwner =
    consultant.ownerId === profile.id;

  return {
    isLoggedIn: true,
    isStudent,
    isConsultant,
    isAdmin,
    isOwner,
  };
}