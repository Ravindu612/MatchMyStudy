import { isDeleteAccountConfirmation } from "@/lib/account/files";
import { AccountPrivacyError, deleteUserAccount } from "@/lib/account/deleteAccount";
import { readBearerSession } from "@/lib/account/session";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await readBearerSession(request);

  if (!session.ok) {
    return NextResponse.json({ error: session.message }, { status: session.status });
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Type DELETE to confirm account deletion." },
      { status: 400 }
    );
  }

  const confirmation =
    body && typeof body === "object" && "confirmation" in body
      ? (body as { confirmation?: unknown }).confirmation
      : null;

  if (!isDeleteAccountConfirmation(confirmation)) {
    return NextResponse.json(
      { error: "Type DELETE to confirm account deletion." },
      { status: 400 }
    );
  }

  try {
    await deleteUserAccount(session.user.id);
  } catch (error) {
    if (error instanceof AccountPrivacyError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    console.error("Account deletion failed:", error);
    return NextResponse.json({ error: "Could not delete your account." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
