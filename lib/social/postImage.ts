import {
  finalizeProfileImage,
  jpegHasApp1,
} from "@/lib/social/imageMetadata";
import { POST_IMAGE_MAX_BYTES } from "@/lib/social/postValidation";

export const POST_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
] as const;

export type PostImageMime = (typeof POST_IMAGE_TYPES)[number];
export type PostImageExtension = "jpg" | "png" | "webp" | "gif";

/**
 * Bytes that are safe to upload: a real JPEG, PNG, WebP, or GIF, at most
 * 5 MB, with location metadata removed.
 *
 * GIF has no EXIF segment. The bytes are kept so the animation survives.
 * JPEG, PNG, and WebP go through the same segment stripper used for profile
 * photos (EXIF, XMP, IPTC, PNG text, WebP EXIF/XMP).
 */
export function preparePostImageBytes(bytes: Uint8Array): {
  bytes: Uint8Array;
  mime: PostImageMime;
  extension: PostImageExtension;
} {
  if (bytes.byteLength > POST_IMAGE_MAX_BYTES) {
    throw new Error("Each image must be 5 MB or smaller.");
  }

  const mime = detectPostImageMime(bytes);

  if (!mime) {
    throw new Error("Use a JPEG, PNG, WebP, or GIF image.");
  }

  const stripped = mime === "image/gif" ? bytes : finalizeProfileImage(bytes, mime);

  if (mime === "image/jpeg" && jpegHasApp1(stripped)) {
    throw new Error("Could not remove location data from this photo.");
  }

  if (stripped.byteLength > POST_IMAGE_MAX_BYTES) {
    throw new Error("Each image must be 5 MB or smaller.");
  }

  return {
    bytes: stripped,
    mime,
    extension: extensionForPostImage(mime),
  };
}

export function detectPostImageMime(bytes: Uint8Array): PostImageMime | null {
  if (
    bytes.length >= 3 &&
    bytes[0] === 0xff &&
    bytes[1] === 0xd8 &&
    bytes[2] === 0xff
  ) {
    return "image/jpeg";
  }

  if (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return "image/png";
  }

  if (
    bytes.length >= 12 &&
    latin1(bytes, 0, 4) === "RIFF" &&
    latin1(bytes, 8, 4) === "WEBP"
  ) {
    return "image/webp";
  }

  if (
    bytes.length >= 6 &&
    bytes[0] === 0x47 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x38 &&
    (bytes[4] === 0x37 || bytes[4] === 0x39) &&
    bytes[5] === 0x61
  ) {
    return "image/gif";
  }

  return null;
}

export function extensionForPostImage(mime: PostImageMime): PostImageExtension {
  if (mime === "image/jpeg") {
    return "jpg";
  }

  if (mime === "image/png") {
    return "png";
  }

  if (mime === "image/webp") {
    return "webp";
  }

  return "gif";
}

function latin1(input: Uint8Array, offset: number, length: number): string {
  let text = "";

  for (let index = 0; index < length; index += 1) {
    text += String.fromCharCode(input[offset + index] ?? 0);
  }

  return text;
}
