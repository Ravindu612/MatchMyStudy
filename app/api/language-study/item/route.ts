import { readOptionalUser, serviceDeps } from "@/lib/languageStudy/context";
import { handleItemView } from "@/lib/languageStudy/service";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const actor = await readOptionalUser(request);

  if (!actor.ok) {
    return NextResponse.json(
      { ok: false, message: actor.message, task: null, feedback: null },
      { status: actor.status }
    );
  }

  const body = await request.json().catch(() => null);
  const taskId = body && typeof body.taskId === "string" ? body.taskId : "";
  const result = await handleItemView(serviceDeps(), { userId: actor.userId, taskId });

  return NextResponse.json(result.body, { status: result.status });
}
