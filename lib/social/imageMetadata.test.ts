import assert from "node:assert/strict";
import test from "node:test";
import {
  finalizeProfileImage,
  jpegHasApp1,
  stripJpegMetadata,
  stripPngMetadata,
  stripWebpMetadata,
} from "./imageMetadata";

const MINIMAL_JPEG = Uint8Array.from(
  Buffer.from(
    "ffd8ffe000104a46494600010100000100010000ffdb004300080606070605080707070909080a0c140d0c0b0b0c1912130f141d1a1f1e1d1a1c1c20242e2720222c231c1c2837292c30313434341f27393d38323c2e333432ffc0000b080001000101011100ffc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffda000800010100003f00fbffd9",
    "hex"
  )
);

test("jpeg stripper drops EXIF and XMP GPS segments and keeps the picture", () => {
  const gpsExif = jpegSegment(
    0xe1,
    Buffer.from("Exif\0\0GPSLatitude=60.1699 GPSLongitude=24.9384", "latin1")
  );
  const xmp = jpegSegment(
    0xe1,
    Buffer.from(
      'http://ns.adobe.com/xap/1.0/\0<exif:GPSLatitude>60,10.5N</exif:GPSLatitude>',
      "latin1"
    )
  );
  const iptc = jpegSegment(0xed, Buffer.from("GPS: Helsinki", "latin1"));
  const comment = jpegSegment(0xfe, Buffer.from("photo taken at home", "latin1"));
  const spliced = concat([
    MINIMAL_JPEG.subarray(0, 2),
    gpsExif,
    xmp,
    iptc,
    comment,
    MINIMAL_JPEG.subarray(2),
  ]);

  assert.equal(contains(spliced, "GPSLatitude"), true);
  assert.equal(jpegHasApp1(spliced), true);

  const stripped = stripJpegMetadata(spliced);

  assert.deepEqual(stripped, MINIMAL_JPEG);
  assert.equal(contains(stripped, "GPSLatitude"), false);
  assert.equal(contains(stripped, "GPSLongitude"), false);
  assert.equal(contains(stripped, "Helsinki"), false);
  assert.equal(jpegHasApp1(stripped), false);
  assert.equal(stripped[0], 0xff);
  assert.equal(stripped[1], 0xd8);
  assert.equal(stripped.at(-2), 0xff);
  assert.equal(stripped.at(-1), 0xd9);
});

test("finalize refuses a truncated jpeg instead of keeping the GPS segment", () => {
  const truncated = concat([
    Uint8Array.from([0xff, 0xd8, 0xff, 0xe1, 0x00, 0x20]),
    Buffer.from("Exif\0\0GPSLatitude", "latin1"),
  ]);

  assert.throws(
    () => finalizeProfileImage(truncated, "image/jpeg"),
    /Could not read this JPEG image|Could not remove location data/
  );
});

test("png stripper drops eXIf and text chunks that can hold GPS", () => {
  const ihdr = pngChunk("IHDR", Buffer.from("KEEP-IHDR"));
  const text = pngChunk("tEXt", Buffer.from("Comment\0GPSLatitude=60.1699", "latin1"));
  const exif = pngChunk("eXIf", Buffer.from("GPSLongitude=24.9384", "latin1"));
  const idat = pngChunk("IDAT", Buffer.from("KEEP-IDAT"));
  const iend = pngChunk("IEND", Buffer.alloc(0));
  const png = concat([
    Uint8Array.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    ihdr,
    text,
    exif,
    idat,
    iend,
  ]);

  const stripped = stripPngMetadata(png);

  assert.equal(contains(stripped, "GPSLatitude"), false);
  assert.equal(contains(stripped, "GPSLongitude"), false);
  assert.equal(contains(stripped, "KEEP-IHDR"), true);
  assert.equal(contains(stripped, "KEEP-IDAT"), true);
  assert.equal(contains(stripped, "IEND"), true);
});

test("webp stripper drops EXIF and XMP and fixes the RIFF size", () => {
  const exif = webpChunk("EXIF", Buffer.from("GPSLatitude=60.1699", "latin1"));
  const image = webpChunk("VP8 ", Buffer.from("KEEP-VP8-PAYLOAD"));
  const xmp = webpChunk(
    "XMP ",
    Buffer.from("<exif:GPSLongitude>24.9384</exif:GPSLongitude>", "latin1")
  );
  const payload = concat([exif, image, xmp]);
  const file = webpFile(payload);

  const stripped = stripWebpMetadata(file);
  const riffSize =
    stripped[4] | (stripped[5] << 8) | (stripped[6] << 16) | (stripped[7] << 24);

  assert.equal(contains(stripped, "GPSLatitude"), false);
  assert.equal(contains(stripped, "GPSLongitude"), false);
  assert.equal(contains(stripped, "KEEP-VP8-PAYLOAD"), true);
  assert.equal(riffSize, stripped.length - 8);
  assert.equal(latin1(stripped, 0, 4), "RIFF");
  assert.equal(latin1(stripped, 8, 4), "WEBP");
});

test("finalize rejects images over 5 MB", () => {
  const chunk = jpegSegment(0xe0, Buffer.alloc(60000, 1));
  const parts: Uint8Array[] = [Uint8Array.from([0xff, 0xd8])];
  let total = 2;

  while (total <= 5 * 1024 * 1024) {
    parts.push(chunk);
    total += chunk.length;
  }

  parts.push(Uint8Array.from([0xff, 0xd9]));

  assert.throws(() => finalizeProfileImage(concat(parts), "image/jpeg"), /5 MB/);
});

function jpegSegment(marker: number, data: Buffer): Uint8Array {
  const length = data.length + 2;
  return concat([
    Uint8Array.from([0xff, marker, (length >> 8) & 0xff, length & 0xff]),
    data,
  ]);
}

function pngChunk(type: string, data: Buffer): Uint8Array {
  const length = new Uint8Array(4);
  length[0] = (data.length >>> 24) & 0xff;
  length[1] = (data.length >>> 16) & 0xff;
  length[2] = (data.length >>> 8) & 0xff;
  length[3] = data.length & 0xff;
  return concat([length, Buffer.from(type, "latin1"), data, new Uint8Array(4)]);
}

function webpChunk(fourcc: string, data: Buffer): Uint8Array {
  const size = new Uint8Array(4);
  size[0] = data.length & 0xff;
  size[1] = (data.length >>> 8) & 0xff;
  size[2] = (data.length >>> 16) & 0xff;
  size[3] = (data.length >>> 24) & 0xff;
  const pad = data.length % 2 === 1 ? new Uint8Array([0]) : new Uint8Array();
  return concat([Buffer.from(fourcc, "latin1"), size, data, pad]);
}

function webpFile(payload: Uint8Array): Uint8Array {
  const size = payload.length + 4;
  const header = new Uint8Array(12);
  header.set(Buffer.from("RIFF", "latin1"));
  header[4] = size & 0xff;
  header[5] = (size >>> 8) & 0xff;
  header[6] = (size >>> 16) & 0xff;
  header[7] = (size >>> 24) & 0xff;
  header.set(Buffer.from("WEBP", "latin1"), 8);
  return concat([header, payload]);
}

function concat(parts: Array<Uint8Array | Buffer>): Uint8Array {
  const bytes = parts.map((part) =>
    part instanceof Uint8Array ? part : new Uint8Array(part)
  );
  const total = bytes.reduce((sum, part) => sum + part.length, 0);
  const out = new Uint8Array(total);
  let written = 0;

  for (const part of bytes) {
    out.set(part, written);
    written += part.length;
  }

  return out;
}

function contains(bytes: Uint8Array, text: string): boolean {
  return latin1(bytes, 0, bytes.length).includes(text);
}

function latin1(bytes: Uint8Array, offset: number, length: number): string {
  return Buffer.from(bytes.subarray(offset, offset + length)).toString("latin1");
}
