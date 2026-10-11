import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { applyGoogleSignupRole } from "@/lib/applySignupRole";
import {
  parseSignupRole,
  shouldApplySignupRole,
} from "@/lib/signupRole";

export const dynamic = "force-dynamic";

/**
 * Applies a student or consultant role after the browser has stored the
 * Google session. The service role is optional: without it the account
 * stays the student created by handle_new_user.
 */
export async function POST(request: Request) {
  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const accessToken = authorization.slice("Bearer ".length);
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser(accessToken);

  if (userError || !user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  let body: { role?: unknown } = {};

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid role" },
      { status: 400 }
    );
  }

  const role = parseSignupRole(
    typeof body.role === "string" ? body.role : null
  );

  if (!role) {
    return NextResponse.json(
      { error: "Invalid role" },
      { status: 400 }
    );
  }

  if (!shouldApplySignupRole(user)) {
    return NextResponse.json({ applied: false });
  }

  const applied = await applyGoogleSignupRole(user, role);

  return NextResponse.json({ applied });
}
