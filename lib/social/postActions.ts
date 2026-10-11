import { supabase } from "@/lib/supabase";
import { preparePostImage } from "@/lib/social/preparePostImage";
import type { TagInput } from "@/lib/social/postTags";
import {
  isOwnPostMediaPath,
  isUserId,
  messageForPostError,
  newPostMediaPath,
  POST_IMAGE_MAX_COUNT,
  POST_MEDIA_BUCKET,
  validatePostBody,
  validatePostVisibility,
} from "@/lib/social/postValidation";
import type { PostVisibility } from "@/types/social";

export type PostDraft = {
  body: string;
  visibility: PostVisibility;
  tags: TagInput[];
  images: File[];
};

export async function createPost(draft: PostDraft): Promise<{ id: string }> {
  const prepared = await prepareDraft(draft);
  const userId = await requireUserId();
  const { data, error } = await supabase
    .from("posts")
    .insert({
      author_id: userId,
      body: prepared.body,
      visibility: prepared.visibility,
      status: "active",
    })
    .select("id")
    .single();

  if (error || !data?.id) {
    throw new Error(
      messageForPostError(error, "Couldn't publish this post.")
    );
  }

  const postId = String(data.id);
  const uploaded: string[] = [];

  try {
    await attachImages(postId, userId, prepared.images, 0, uploaded);
    await replaceTags(postId, prepared.tags);
  } catch (error) {
    await supabase.from("posts").delete().eq("id", postId).eq("author_id", userId);

    if (uploaded.length > 0) {
      await supabase.storage.from(POST_MEDIA_BUCKET).remove(uploaded);
    }

    throw new Error(messageForPostError(error, "Couldn't publish this post."));
  }

  return { id: postId };
}

export async function updatePost(input: {
  id: string;
  body: string;
  visibility: PostVisibility;
  tags: TagInput[];
  keptMediaIds: string[];
  images: File[];
}): Promise<void> {
  const prepared = await prepareDraft({
    body: input.body,
    visibility: input.visibility,
    tags: input.tags,
    images: input.images,
  });
  const userId = await requireUserId();
  const existing = await loadOwnedPost(input.id, userId);
  const existingMedia = await loadOwnedMedia(input.id);
  const kept = input.keptMediaIds.map((id) => {
    const media = existingMedia.find((item) => item.id === id);

    if (!media) {
      throw new Error("One of the photos on this post could not be kept.");
    }

    return media;
  });

  if (kept.length + prepared.images.length > POST_IMAGE_MAX_COUNT) {
    throw new Error(`You can add up to ${POST_IMAGE_MAX_COUNT} images.`);
  }

  const removed = existingMedia.filter(
    (media) => !kept.some((item) => item.id === media.id)
  );
  const uploaded: string[] = [];

  try {
    const paths = await uploadImages(userId, prepared.images, uploaded);
    const { error } = await supabase
      .from("posts")
      .update({
        body: prepared.body,
        visibility: prepared.visibility,
        edited_at: new Date().toISOString(),
      })
      .eq("id", existing.id)
      .eq("author_id", userId)
      .is("deleted_at", null);

    if (error) {
      throw error;
    }

    await replaceTags(existing.id, prepared.tags);
    await removeMedia(userId, removed);

    for (let index = 0; index < kept.length; index += 1) {
      const media = kept[index]!;

      if (media.position !== index) {
        const { error: positionError } = await supabase
          .from("post_media")
          .update({ position: index })
          .eq("id", media.id)
          .eq("post_id", existing.id);

        if (positionError) {
          throw positionError;
        }
      }
    }

    if (paths.length > 0) {
      const { error: mediaError } = await supabase.from("post_media").insert(
        paths.map((path, index) => ({
          post_id: existing.id,
          storage_path: path,
          media_type: "image",
          width: prepared.images[index]?.width ?? null,
          height: prepared.images[index]?.height ?? null,
          position: kept.length + index,
        }))
      );

      if (mediaError) {
        throw mediaError;
      }
    }
  } catch (error) {
    if (uploaded.length > 0) {
      await supabase.storage.from(POST_MEDIA_BUCKET).remove(uploaded);
    }

    throw new Error(messageForPostError(error, "Couldn't save this post."));
  }
}

export async function softDeletePost(id: string): Promise<void> {
  const userId = await requireUserId();
  const existing = await loadOwnedPost(id, userId);
  const { data, error } = await supabase
    .from("posts")
    .update({ deleted_at: new Date().toISOString() })
    .eq("id", existing.id)
    .eq("author_id", userId)
    .is("deleted_at", null)
    .select("id")
    .maybeSingle();

  if (error || !data) {
    throw new Error(messageForPostError(error, "Couldn't delete this post."));
  }
}

async function prepareDraft(draft: PostDraft): Promise<{
  body: string;
  visibility: PostVisibility;
  tags: TagInput[];
  images: Awaited<ReturnType<typeof preparePostImage>>[];
}> {
  const body = validatePostBody(draft.body);

  if (!body.ok) {
    throw new Error(body.message);
  }

  const visibility = validatePostVisibility(draft.visibility);

  if (!visibility.ok) {
    throw new Error(visibility.message);
  }

  if (draft.images.length > POST_IMAGE_MAX_COUNT) {
    throw new Error(`You can add up to ${POST_IMAGE_MAX_COUNT} images.`);
  }

  const tags = await validateTags(draft.tags);
  const images = [];

  for (const image of draft.images) {
    images.push(await preparePostImage(image));
  }

  return {
    body: body.body,
    visibility: visibility.visibility,
    tags,
    images,
  };
}

async function validateTags(tags: TagInput[]): Promise<TagInput[]> {
  const response = await fetch("/api/social/tags", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ mode: "validate", tags }),
  });
  const payload = (await response.json().catch(() => null)) as
    | { tags?: TagInput[]; error?: string }
    | null;

  if (!response.ok || !payload?.tags) {
    throw new Error(payload?.error || "Check the tags and try again.");
  }

  return payload.tags.map((tag) => ({
    target_type: tag.target_type,
    target_slug: tag.target_slug,
  }));
}

async function requireUserId(): Promise<string> {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user || !isUserId(user.id)) {
    throw new Error("Log in to post.");
  }

  return user.id;
}

async function loadOwnedPost(
  id: string,
  userId: string
): Promise<{ id: string }> {
  const { data, error } = await supabase
    .from("posts")
    .select("id, author_id")
    .eq("id", id)
    .eq("author_id", userId)
    .is("deleted_at", null)
    .maybeSingle();

  if (error || !data?.id || data.author_id !== userId) {
    throw new Error("You can only change your own posts.");
  }

  return { id: String(data.id) };
}

async function loadOwnedMedia(
  postId: string
): Promise<{ id: string; storagePath: string; position: number }[]> {
  const { data, error } = await supabase
    .from("post_media")
    .select("id, storage_path, position")
    .eq("post_id", postId)
    .order("position", { ascending: true });

  if (error) {
    throw error;
  }

  return (Array.isArray(data) ? data : [])
    .filter(
      (row): row is { id: string; storage_path: string; position: number } =>
        typeof row?.id === "string" && typeof row.storage_path === "string"
    )
    .map((row) => ({
      id: row.id,
      storagePath: row.storage_path,
      position: typeof row.position === "number" ? row.position : 0,
    }));
}

async function uploadImages(
  userId: string,
  images: Awaited<ReturnType<typeof preparePostImage>>[],
  uploaded: string[]
): Promise<string[]> {
  const paths: string[] = [];

  for (const image of images) {
    const path = newPostMediaPath(userId, image.extension);
    const { error } = await supabase.storage.from(POST_MEDIA_BUCKET).upload(path, image.file, {
      contentType: image.mime,
      upsert: false,
    });

    if (error) {
      throw error;
    }

    uploaded.push(path);
    paths.push(path);
  }

  return paths;
}

async function attachImages(
  postId: string,
  userId: string,
  images: Awaited<ReturnType<typeof preparePostImage>>[],
  positionOffset: number,
  uploaded: string[]
): Promise<void> {
  const paths = await uploadImages(userId, images, uploaded);

  if (paths.length === 0) {
    return;
  }

  const { error } = await supabase.from("post_media").insert(
    paths.map((path, index) => ({
      post_id: postId,
      storage_path: path,
      media_type: "image",
      width: images[index]?.width ?? null,
      height: images[index]?.height ?? null,
      position: positionOffset + index,
    }))
  );

  if (error) {
    throw error;
  }
}

async function replaceTags(postId: string, tags: TagInput[]): Promise<void> {
  const { data, error } = await supabase
    .from("post_tags")
    .select("target_type, target_slug")
    .eq("post_id", postId);

  if (error) {
    throw error;
  }

  const current = (Array.isArray(data) ? data : []).filter(
    (row): row is { target_type: string; target_slug: string } =>
      typeof row?.target_type === "string" && typeof row.target_slug === "string"
  );
  const desired = new Set(tags.map((tag) => `${tag.target_type}:${tag.target_slug}`));
  const currentKeys = new Set(
    current.map((tag) => `${tag.target_type}:${tag.target_slug}`)
  );

  for (const tag of current) {
    if (desired.has(`${tag.target_type}:${tag.target_slug}`)) {
      continue;
    }

    const { error: deleteError } = await supabase
      .from("post_tags")
      .delete()
      .eq("post_id", postId)
      .eq("target_type", tag.target_type)
      .eq("target_slug", tag.target_slug);

    if (deleteError) {
      throw deleteError;
    }
  }

  const inserted = tags.filter(
    (tag) => !currentKeys.has(`${tag.target_type}:${tag.target_slug}`)
  );

  if (inserted.length === 0) {
    return;
  }

  const { error: insertError } = await supabase.from("post_tags").insert(
    inserted.map((tag) => ({
      post_id: postId,
      target_type: tag.target_type,
      target_slug: tag.target_slug,
    }))
  );

  if (insertError) {
    throw insertError;
  }
}

async function removeMedia(
  userId: string,
  media: { id: string; storagePath: string }[]
): Promise<void> {
  if (media.length === 0) {
    return;
  }

  const { error } = await supabase
    .from("post_media")
    .delete()
    .in(
      "id",
      media.map((item) => item.id)
    );

  if (error) {
    throw error;
  }

  const paths = media
    .map((item) => item.storagePath)
    .filter((path) => isOwnPostMediaPath(path, userId));

  if (paths.length > 0) {
    await supabase.storage.from(POST_MEDIA_BUCKET).remove(paths);
  }
}
