import { readOptionalUser, serviceDeps } from "@/lib/languageStudy/context";
import { handleProgress } from "@/lib/languageStudy/service";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  const actor = await readOptionalUser(request);

  if (!actor.ok) {
    return NextResponse.json({ ok: false, message: actor.message, attempts: [] }, { status: actor.status });
  }

  const result = await handleProgress(serviceDeps(), actor.userId);

  return NextResponse.json(result.body, { status: result.status });
}
