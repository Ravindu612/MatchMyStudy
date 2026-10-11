import {
  describePostTags,
  searchPostTags,
  validatePostTags,
  type TagInput,
} from "@/lib/social/postTags";
import { POST_TAG_MAX_COUNT } from "@/lib/social/postValidation";

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q") ?? "";

  return Response.json({ tags: searchPostTags(query) });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Tags are invalid." }, { status: 400 });
  }

  const record = body && typeof body === "object" ? (body as { mode?: unknown; tags?: unknown }) : null;
  const tags = Array.isArray(record?.tags) ? (record.tags as TagInput[]) : null;

  if (!tags) {
    return Response.json({ error: "Tags are invalid." }, { status: 400 });
  }

  if (record?.mode === "describe") {
    return Response.json({ tags: describePostTags(tags) });
  }

  if (tags.length > POST_TAG_MAX_COUNT) {
    return Response.json(
      { error: `You can add up to ${POST_TAG_MAX_COUNT} tags.` },
      { status: 400 }
    );
  }

  try {
    return Response.json({ tags: validatePostTags(tags) });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Tags are invalid." },
      { status: 400 }
    );
  }
}
