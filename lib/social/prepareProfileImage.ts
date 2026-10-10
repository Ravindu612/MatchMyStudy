import { finalizeProfileImage } from "@/lib/social/imageMetadata";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_INPUT_BYTES = 20 * 1024 * 1024;
const MAX_EDGE = {
  avatar: 800,
  cover: 1920,
} as const;
const MAX_PIXELS = 40_000_000;

/**
 * Redraws a profile photo in the browser, then strips container metadata.
 *
 * Drawing onto a canvas writes a new file, so the original EXIF orientation
 * is applied to the pixels and the GPS IFD is not copied. finalizeProfileImage
 * then removes any APP1, IPTC, PNG text, or WebP EXIF/XMP segment before the
 * bytes can be uploaded.
 */
export async function prepareProfileImage(
  file: File,
  kind: "avatar" | "cover"
): Promise<File> {
  if (isHeic(file)) {
    throw new Error(
      "HEIC photos can't be uploaded. Export the photo as JPEG and try again."
    );
  }

  const mime = sniffMime(file);

  if (!mime) {
    throw new Error("Use a JPEG, PNG, or WebP image.");
  }

  if (file.size > MAX_INPUT_BYTES) {
    throw new Error("That image is too large. Please choose one under 20 MB.");
  }

  const bitmap = await createImageBitmap(file, {
    imageOrientation: "from-image",
  });

  try {
    if (
      bitmap.width < 1 ||
      bitmap.height < 1 ||
      bitmap.width * bitmap.height > MAX_PIXELS
    ) {
      throw new Error("That image is too large. Try a smaller photo.");
    }

    const maxEdge = MAX_EDGE[kind];
    const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Could not process this image.");
    }

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
    context.drawImage(bitmap, 0, 0, width, height);

    const encoded = await encodeCanvas(canvas);
    const stripped = finalizeProfileImage(
      new Uint8Array(await encoded.blob.arrayBuffer()),
      encoded.mime
    );
    const extension = encoded.mime === "image/webp" ? "webp" : "jpg";

    return new File([toArrayBuffer(stripped)], `${kind}.${extension}`, {
      type: encoded.mime,
    });
  } finally {
    bitmap.close();
  }
}

async function encodeCanvas(
  canvas: HTMLCanvasElement
): Promise<{ blob: Blob; mime: "image/webp" | "image/jpeg" }> {
  const qualities = [0.86, 0.74, 0.62, 0.5];

  for (const quality of qualities) {
    const webp = await canvasToBlob(canvas, "image/webp", quality);

    if (
      webp &&
      webp.type === "image/webp" &&
      webp.size <= 5 * 1024 * 1024
    ) {
      return { blob: webp, mime: "image/webp" };
    }
  }

  for (const quality of qualities) {
    const jpeg = await canvasToBlob(canvas, "image/jpeg", quality);

    if (jpeg && jpeg.size > 0 && jpeg.size <= 5 * 1024 * 1024) {
      return { blob: jpeg, mime: "image/jpeg" };
    }
  }

  throw new Error("Could not compress this image under 5 MB.");
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  type: string,
  quality: number
): Promise<Blob | null> {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), type, quality);
  });
}

function sniffMime(file: File): string | null {
  if (ALLOWED_TYPES.has(file.type)) {
    return file.type;
  }

  const name = file.name.toLowerCase();

  if (name.endsWith(".jpg") || name.endsWith(".jpeg")) {
    return "image/jpeg";
  }

  if (name.endsWith(".png")) {
    return "image/png";
  }

  if (name.endsWith(".webp")) {
    return "image/webp";
  }

  return null;
}

function isHeic(file: File): boolean {
  const name = file.name.toLowerCase();

  return (
    file.type === "image/heic" ||
    file.type === "image/heif" ||
    name.endsWith(".heic") ||
    name.endsWith(".heif")
  );
}

function toArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength
  ) as ArrayBuffer;
}
