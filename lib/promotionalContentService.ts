import { supabase } from "@/lib/supabase";
import type { PromotionalContent } from "@/types/promotionalContent";

export async function getPromotionalContent(
  consultantId: string
): Promise<PromotionalContent[]> {
  const { data, error } = await supabase
    .from("consultant_promotional_content")
    .select("*")
    .eq("consultant_id", consultantId)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(
      "Get promotional content error:",
      error
    );

    return [];
  }

  return (data ?? []).map((item) => ({
    id: item.id,
    consultantId: item.consultant_id,

    title: item.title,

    description:
      item.description ?? undefined,

    imageUrl:
      item.image_url ?? undefined,

    createdAt: item.created_at,
    updatedAt: item.updated_at,
  }));
}


export async function createPromotionalContent(
  content: {
    consultantId: string;
    title: string;
    description?: string;
    imageUrl?: string;
  }
): Promise<PromotionalContent> {

  const { data, error } = await supabase
    .from("consultant_promotional_content")
    .insert({
      consultant_id: content.consultantId,
      title: content.title,
      description:
        content.description || null,
      image_url:
        content.imageUrl || null,
    })
    .select()
    .single();

  if (error) {
    console.error(
      "Create promotional content error:",
      error
    );

    throw error;
  }

  return {
    id: data.id,
    consultantId: data.consultant_id,

    title: data.title,

    description:
      data.description ?? undefined,

    imageUrl:
      data.image_url ?? undefined,

    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}


export async function deletePromotionalContent(
  contentId: string
) {
  const { error } = await supabase
    .from("consultant_promotional_content")
    .delete()
    .eq("id", contentId);

  if (error) {
    console.error(
      "Delete promotional content error:",
      error
    );

    throw error;
  }
}