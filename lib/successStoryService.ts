import { supabase } from "@/lib/supabase";
import type { SuccessStory } from "@/types/successStory";

export async function getSuccessStories(
  consultantId: string
): Promise<SuccessStory[]> {
  const { data, error } = await supabase
    .from("consultant_success_stories")
    .select("*")
    .eq("consultant_id", consultantId)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(
      "Get success stories error:",
      error
    );

    return [];
  }

  return (data ?? []).map((story) => ({
    id: story.id,
    consultantId: story.consultant_id,

    studentName: story.student_name,
    university: story.university ?? undefined,
    country: story.country ?? undefined,
    program: story.program ?? undefined,

    story: story.story,

    imageUrl: story.image_url ?? undefined,

    createdAt: story.created_at,
    updatedAt: story.updated_at,
  }));
}


export async function createSuccessStory(
  story: {
    consultantId: string;
    studentName: string;
    university?: string;
    country?: string;
    program?: string;
    story: string;
    imageUrl?: string;
  }
) {
  const { data, error } = await supabase
    .from("consultant_success_stories")
    .insert({
      consultant_id: story.consultantId,
      student_name: story.studentName,
      university: story.university || null,
      country: story.country || null,
      program: story.program || null,
      story: story.story,
      image_url: story.imageUrl || null,
    })
    .select()
    .single();

  if (error) {
    console.error(
      "Create success story error:",
      error
    );

    throw error;
  }

  return {
    id: data.id,
    consultantId: data.consultant_id,

    studentName: data.student_name,
    university: data.university ?? undefined,
    country: data.country ?? undefined,
    program: data.program ?? undefined,

    story: data.story,

    imageUrl: data.image_url ?? undefined,

    createdAt: data.created_at,
    updatedAt: data.updated_at,
  } satisfies SuccessStory;
}

export async function deleteSuccessStory(
  storyId: string
) {
  const { error } = await supabase
    .from("consultant_success_stories")
    .delete()
    .eq("id", storyId);

  if (error) {
    console.error(
      "Delete success story error:",
      error
    );

    throw error;
  }
}