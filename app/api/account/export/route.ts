import {
  filesForExport,
  isUserFolderObject,
  USER_STORAGE_BUCKETS,
  type StorageObjectRef,
} from "@/lib/account/files";
import { readBearerSession } from "@/lib/account/session";
import { NextResponse } from "next/server";
import type { SupabaseClient, User } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const EXPORT_NOTES = {
  blocks: "Blocks you created. Blocks created by other people are not included.",
  messages:
    "Messages you sent, plus the conversation id, when it was opened, and the participant ids. Messages the other person sent are not included.",
  reports: "Reports you filed.",
};

export async function GET(request: Request) {
  const session = await readBearerSession(request);

  if (!session.ok) {
    return NextResponse.json({ error: session.message }, { status: session.status });
  }

  const { data, error } = await session.client.rpc("export_my_data");

  if (error || !data || typeof data !== "object" || Array.isArray(data)) {
    console.error("export_my_data failed:", error);
    return NextResponse.json({ error: "Could not export your data." }, { status: 500 });
  }

  const record = data as Record<string, unknown>;
  let folderObjects: StorageObjectRef[] = [];

  try {
    folderObjects = (
      await Promise.all(
        USER_STORAGE_BUCKETS.map((bucket) => listOwnFolder(session.client, bucket, session.user.id))
      )
    ).flat();
  } catch (listError) {
    console.error("Could not list storage folders for export:", listError);
  }

  const files = filesForExport({
    supabaseUrl: session.supabaseUrl,
    userId: session.user.id,
    profile: record.profile,
    postMedia: record.post_media,
    consultants: record.consultants,
    stories: record.consultant_success_stories,
    promotional: record.consultant_promotional_content,
    folderObjects,
  });

  const payload = {
    ...record,
    account: accountSection(session.user),
    files,
    notes: EXPORT_NOTES,
  };
  const filename = `matchmystudy-data-${new Date().toISOString().slice(0, 10)}.json`;

  return new NextResponse(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}

function accountSection(user: User) {
  const providers = (user.identities ?? [])
    .map((identity) => identity.provider)
    .filter((provider): provider is string => typeof provider === "string");

  return {
    id: user.id,
    email: user.email ?? null,
    phone: user.phone ?? null,
    created_at: user.created_at,
    last_sign_in_at: user.last_sign_in_at ?? null,
    providers,
  };
}

async function listOwnFolder(
  client: SupabaseClient,
  bucket: string,
  userId: string
): Promise<StorageObjectRef[]> {
  const found: StorageObjectRef[] = [];
  let offset = 0;

  for (let page = 0; page < 50; page += 1) {
    const { data, error } = await client.storage.from(bucket).list(userId, {
      limit: 100,
      offset,
    });

    if (error || !data || data.length === 0) {
      break;
    }

    for (const entry of data) {
      if (!entry?.name || !entry.id) {
        continue;
      }

      const path = `${userId}/${entry.name}`;

      if (isUserFolderObject(bucket, path, userId)) {
        found.push({ bucket, path });
      }
    }

    if (data.length < 100) {
      break;
    }

    offset += data.length;
  }

  return found;
}
