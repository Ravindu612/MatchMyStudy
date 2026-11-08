import { readOptionalUser, serviceDeps } from "@/lib/languageStudy/context";
import { handleOpen } from "@/lib/languageStudy/service";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const actor = await readOptionalUser(request);

  if (!actor.ok) {
    return NextResponse.json(
      { ok: false, charged: false, unlocked: false, feedback: null, message: actor.message },
      { status: actor.status }
    );
  }

  const body = await request.json().catch(() => null);
  const result = await handleOpen(serviceDeps(), { userId: actor.userId, body });

  return NextResponse.json(result.body, { status: result.status });
}
