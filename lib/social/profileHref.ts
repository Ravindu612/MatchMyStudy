import { loginPathFor } from "../signupRole";

/**
 * Where "My Profile" should go.
 * Signed-out visitors use the login link for the current page.
 * A signed-in person with a handle goes to /u/[handle]; otherwise profile settings.
 */
export function profileHrefFor(input: {
  signedIn: boolean;
  handle: string | null;
  pathname: string;
}): string {
  if (!input.signedIn) {
    return loginPathFor(input.pathname);
  }

  const handle = input.handle?.trim() ?? "";

  if (!handle) {
    return "/settings/profile";
  }

  return `/u/${encodeURIComponent(handle)}`;
}
