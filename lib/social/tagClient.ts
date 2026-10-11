import type { ResolvedTag } from "@/lib/social/postTags";

export async function fetchTagLabels(
  tags: { targetType: string; slug: string }[]
): Promise<ResolvedTag[]> {
  if (tags.length === 0) {
    return [];
  }

  const response = await fetch("/api/social/tags", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      mode: "describe",
      tags: tags.map((tag) => ({
        target_type: tag.targetType,
        target_slug: tag.slug,
      })),
    }),
  });

  if (!response.ok) {
    return [];
  }

  const payload = (await response.json()) as { tags?: ResolvedTag[] };

  return Array.isArray(payload.tags) ? payload.tags : [];
}

export function tagLabelKey(type: string, slug: string): string {
  return `${type}:${slug}`;
}
