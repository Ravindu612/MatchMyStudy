/**
 * Removes container metadata from profile photos before they are uploaded.
 *
 * GPS coordinates live in the JPEG EXIF APP1 segment (and sometimes XMP,
 * which is also APP1), PNG eXIf/text chunks, and WebP EXIF/XMP chunks.
 * Dropping those segments keeps the image pixels and discards location data.
 * This runs in the browser on the bytes that will be uploaded. It does not
 * upload the original file.
 */

const JPEG_SOI = 0xd8;
const JPEG_SOS = 0xda;
const JPEG_EOI = 0xd9;
const JPEG_APP1 = 0xe1;

/** APP1 is EXIF and XMP. APP13 is IPTC. COM is a comment. All can carry location. */
const JPEG_STRIP_MARKERS = new Set<number>([JPEG_APP1, 0xed, 0xfe]);

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const PNG_STRIP_TYPES = new Set(["eXIf", "tEXt", "iTXt", "zTXt", "tIME"]);

const WEBP_STRIP_CHUNKS = new Set(["EXIF", "XMP "]);

export const PROFILE_IMAGE_MAX_BYTES = 5 * 1024 * 1024;

export function stripJpegMetadata(input: Uint8Array): Uint8Array {
  const parts = walkJpeg(input, "strip");
  return concatBytes(parts);
}

/**
 * True when an APP1 segment is still present before the entropy scan.
 * Unreadable files are treated as still containing metadata so the caller
 * refuses the upload instead of sending the original bytes.
 */
export function jpegHasApp1(input: Uint8Array): boolean {
  try {
    return walkJpeg(input, "detect-app1");
  } catch {
    return true;
  }
}

export function stripPngMetadata(input: Uint8Array): Uint8Array {
  if (!hasPngSignature(input)) {
    throw new Error("Not a PNG image.");
  }

  const parts: Uint8Array[] = [input.subarray(0, 8)];
  let offset = 8;

  while (offset + 8 <= input.length) {
    const length = readUint32BE(input, offset);
    const type = latin1(input, offset + 4, 4);
    const chunkEnd = offset + 12 + length;

    if (length < 0 || chunkEnd > input.length) {
      throw new Error("Could not read this PNG image.");
    }

    if (!PNG_STRIP_TYPES.has(type)) {
      parts.push(input.subarray(offset, chunkEnd));
    }

    offset = chunkEnd;

    if (type === "IEND") {
      break;
    }
  }

  if (offset !== input.length && offset + 8 <= input.length) {
    throw new Error("Could not read this PNG image.");
  }

  return concatBytes(parts);
}

export function stripWebpMetadata(input: Uint8Array): Uint8Array {
  if (!hasWebpSignature(input)) {
    throw new Error("Not a WebP image.");
  }

  const chunks: Uint8Array[] = [];
  let offset = 12;

  while (offset + 8 <= input.length) {
    const fourcc = latin1(input, offset, 4);
    const size = readUint32LE(input, offset + 4);
    const dataEnd = offset + 8 + size;
    const paddedEnd = dataEnd + (size % 2);

    if (size < 0 || dataEnd > input.length) {
      throw new Error("Could not read this WebP image.");
    }

    if (!WEBP_STRIP_CHUNKS.has(fourcc)) {
      const end = Math.min(paddedEnd, input.length);
      chunks.push(input.subarray(offset, end));
    }

    offset = Math.min(paddedEnd, input.length);
  }

  if (offset !== input.length) {
    throw new Error("Could not read this WebP image.");
  }

  const payload = concatBytes(chunks);
  const header = new Uint8Array(12);
  header.set([0x52, 0x49, 0x46, 0x46], 0);
  const riffSize = payload.length + 4;
  header[4] = riffSize & 0xff;
  header[5] = (riffSize >>> 8) & 0xff;
  header[6] = (riffSize >>> 16) & 0xff;
  header[7] = (riffSize >>> 24) & 0xff;
  header.set([0x57, 0x45, 0x42, 0x50], 8);

  return concatBytes([header, payload]);
}

export function stripContainerMetadata(
  bytes: Uint8Array,
  mime: string
): Uint8Array {
  if (mime === "image/jpeg") {
    return stripJpegMetadata(bytes);
  }

  if (mime === "image/png") {
    return stripPngMetadata(bytes);
  }

  if (mime === "image/webp") {
    return stripWebpMetadata(bytes);
  }

  throw new Error("Use a JPEG, PNG, or WebP image.");
}

/**
 * Last step before upload. Strips metadata and refuses the file if a JPEG
 * still has an EXIF/XMP segment or the result is over the bucket limit.
 */
export function finalizeProfileImage(
  bytes: Uint8Array,
  mime: string
): Uint8Array {
  const stripped = stripContainerMetadata(bytes, mime);

  if (mime === "image/jpeg" && jpegHasApp1(stripped)) {
    throw new Error("Could not remove location data from this photo.");
  }

  if (stripped.byteLength > PROFILE_IMAGE_MAX_BYTES) {
    throw new Error("Image must be 5 MB or smaller.");
  }

  return stripped;
}

function walkJpeg(input: Uint8Array, mode: "strip"): Uint8Array[];
function walkJpeg(input: Uint8Array, mode: "detect-app1"): boolean;
function walkJpeg(
  input: Uint8Array,
  mode: "strip" | "detect-app1"
): Uint8Array[] | boolean {
  if (input.length < 4 || input[0] !== 0xff || input[1] !== JPEG_SOI) {
    throw new Error("Not a JPEG image.");
  }

  const parts: Uint8Array[] = [input.subarray(0, 2)];
  let offset = 2;

  while (offset < input.length) {
    if (input[offset] !== 0xff) {
      throw new Error("Could not read this JPEG image.");
    }

    const markerStart = offset;
    offset += 1;

    while (offset < input.length && input[offset] === 0xff) {
      offset += 1;
    }

    if (offset >= input.length) {
      throw new Error("Could not read this JPEG image.");
    }

    const marker = input[offset];
    offset += 1;

    if (
      marker === JPEG_EOI ||
      marker === 0x01 ||
      (marker >= 0xd0 && marker <= 0xd7)
    ) {
      if (mode === "strip") {
        parts.push(input.subarray(markerStart, offset));
      }

      if (marker === JPEG_EOI) {
        return mode === "strip" ? parts : false;
      }

      continue;
    }

    if (offset + 2 > input.length) {
      throw new Error("Could not read this JPEG image.");
    }

    const length = (input[offset] << 8) | input[offset + 1];

    if (length < 2 || offset + length > input.length) {
      throw new Error("Could not read this JPEG image.");
    }

    const segmentEnd = offset + length;

    if (marker === JPEG_SOS) {
      if (mode === "detect-app1") {
        return false;
      }

      parts.push(input.subarray(markerStart));
      return parts;
    }

    if (mode === "detect-app1") {
      if (marker === JPEG_APP1) {
        return true;
      }
    } else if (!JPEG_STRIP_MARKERS.has(marker)) {
      parts.push(input.subarray(markerStart, segmentEnd));
    }

    offset = segmentEnd;
  }

  return mode === "strip" ? parts : false;
}

function hasPngSignature(input: Uint8Array): boolean {
  if (input.length < PNG_SIGNATURE.length) {
    return false;
  }

  return PNG_SIGNATURE.every((byte, index) => input[index] === byte);
}

function hasWebpSignature(input: Uint8Array): boolean {
  return (
    input.length >= 12 &&
    latin1(input, 0, 4) === "RIFF" &&
    latin1(input, 8, 4) === "WEBP"
  );
}

function readUint32BE(input: Uint8Array, offset: number): number {
  return (
    ((input[offset] << 24) |
      (input[offset + 1] << 16) |
      (input[offset + 2] << 8) |
      input[offset + 3]) >>>
    0
  );
}

function readUint32LE(input: Uint8Array, offset: number): number {
  return (
    (input[offset] |
      (input[offset + 1] << 8) |
      (input[offset + 2] << 16) |
      (input[offset + 3] << 24)) >>>
    0
  );
}

function latin1(input: Uint8Array, offset: number, length: number): string {
  let text = "";

  for (let index = 0; index < length; index += 1) {
    text += String.fromCharCode(input[offset + index] ?? 0);
  }

  return text;
}

function concatBytes(parts: Uint8Array[]): Uint8Array {
  const total = parts.reduce((sum, part) => sum + part.length, 0);
  const out = new Uint8Array(total);
  let written = 0;

  for (const part of parts) {
    out.set(part, written);
    written += part.length;
  }

  return out;
}
