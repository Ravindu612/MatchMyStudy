import { supabase } from "./supabase";
import { v4 as uuidv4 } from "uuid";

export async function uploadImage(
  file: File,
  bucket: string
): Promise<string> {
  const extension = file.name.split(".").pop();

  const fileName = `${uuidv4()}.${extension}`;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file);

  if (error) {
    throw error;
  }

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(fileName);

  return data.publicUrl;
}