import {
  extensionForPostImage,
  preparePostImageBytes,
  type PostImageExtension,
  type PostImageMime,
} from "@/lib/social/postImage";
import { POST_IMAGE_MAX_BYTES } from "@/lib/social/postValidation";

export type PreparedPostImage = {
  file: File;
  mime: PostImageMime;
  extension: PostImageExtension;
  width: number | null;
  height: number | null;
};

/**
 * Prepares one post image in the browser before it is uploaded.
 *
 * JPEG, PNG, and WebP are redrawn so EXIF orientation is applied to the
 * pixels, then container metadata is stripped. GIF is not redrawn (that
 * would drop animation); GIF has no EXIF block, and the bytes are still
 * checked for type and size.
 */
export async function preparePostImage(file: File): Promise<PreparedPostImage> {
  if (file.size > POST_IMAGE_MAX_BYTES) {
    throw new Error("Each image must be 5 MB or smaller.");
  }

  const original = new Uint8Array(await file.arrayBuffer());
  const detected = preparePostImageBytes(original);

  if (detected.mime === "image/gif") {
    const dimensions = await readDimensions(file);

    return {
      file: toFile(detected.bytes, detected.mime, detected.extension),
      mime: detected.mime,
      extension: detected.extension,
      width: dimensions?.width ?? null,
      height: dimensions?.height ?? null,
    };
  }

  try {
    const bitmap = await createImageBitmap(file, {
      imageOrientation: "from-image",
    });

    try {
      const canvas = document.createElement("canvas");
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Could not process this image.");
      }

      context.drawImage(bitmap, 0, 0);
      const blob = await canvasToBlob(canvas, detected.mime);

      if (blob && blob.size > 0 && blob.size <= POST_IMAGE_MAX_BYTES) {
        const redrawn = preparePostImageBytes(new Uint8Array(await blob.arrayBuffer()));

        return {
          file: toFile(redrawn.bytes, redrawn.mime, redrawn.extension),
          mime: redrawn.mime,
          extension: redrawn.extension,
          width: bitmap.width,
          height: bitmap.height,
        };
      }
    } finally {
      bitmap.close();
    }
  } catch (error) {
    if (error instanceof Error && /5 MB|JPEG, PNG, WebP|location data/.test(error.message)) {
      throw error;
    }
  }

  const dimensions = await readDimensions(file);

  return {
    file: toFile(detected.bytes, detected.mime, extensionForPostImage(detected.mime)),
    mime: detected.mime,
    extension: detected.extension,
    width: dimensions?.width ?? null,
    height: dimensions?.height ?? null,
  };
}

function toFile(
  bytes: Uint8Array,
  mime: PostImageMime,
  extension: PostImageExtension
): File {
  const copy = bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength
  ) as ArrayBuffer;

  return new File([copy], `post.${extension}`, { type: mime });
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  mime: PostImageMime
): Promise<Blob | null> {
  const quality = mime === "image/png" ? undefined : 0.92;

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), mime, quality);
  });
}

function readDimensions(
  file: Blob
): Promise<{ width: number; height: number } | null> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(
        image.naturalWidth > 0 && image.naturalHeight > 0
          ? { width: image.naturalWidth, height: image.naturalHeight }
          : null
      );
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(null);
    };

    image.src = url;
  });
}
