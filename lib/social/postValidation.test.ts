import assert from "node:assert/strict";
import test from "node:test";
import { preparePostImageBytes } from "./postImage";
import {
  isOwnPostMediaPath,
  messageForPostError,
  newPostMediaPath,
  validatePostBody,
  validatePostVisibility,
} from "./postValidation";
import { formatPostTime } from "./formatPostTime";
import {
  allPostTags,
  describePostTags,
  searchPostTags,
  validatePostTags,
} from "./postTags";

const USER_ID = "11111111-1111-4111-8111-111111111111";

test("post text is required and capped at 5000 characters", () => {
  assert.equal(validatePostBody("  ").ok, false);
  const trimmed = validatePostBody("  Helsinki  ");
  assert.equal(trimmed.ok, true);

  if (trimmed.ok) {
    assert.equal(trimmed.body, "Helsinki");
  }
  assert.equal(validatePostBody("a".repeat(5000)).ok, true);
  assert.equal(validatePostBody("a".repeat(5001)).ok, false);
});

test("visibility is public or followers", () => {
  assert.deepEqual(validatePostVisibility("public"), {
    ok: true,
    visibility: "public",
  });
  assert.deepEqual(validatePostVisibility("followers"), {
    ok: true,
    visibility: "followers",
  });
  assert.equal(validatePostVisibility("private").ok, false);
});

test("post images drop JPEG EXIF and keep GIF bytes", () => {
  const picture = Uint8Array.from([0xff, 0xd8, 0xff, 0xda, 0x00, 0x04, 0x00, 0x01, 0xff, 0xd9]);
  const exif = jpegApp1("Exif\0\0GPSLatitude=60.1699");
  const withGps = concat([picture.subarray(0, 2), exif, picture.subarray(2)]);
  const stripped = preparePostImageBytes(withGps);

  assert.equal(stripped.mime, "image/jpeg");
  assert.equal(stripped.extension, "jpg");
  assert.equal(Buffer.from(stripped.bytes).includes("GPSLatitude"), false);
  assert.equal(stripped.bytes[0], 0xff);
  assert.equal(stripped.bytes[1], 0xd8);

  const gif = Uint8Array.from([
    0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x3b,
  ]);
  const gifResult = preparePostImageBytes(gif);

  assert.equal(gifResult.mime, "image/gif");
  assert.deepEqual(gifResult.bytes, gif);

  assert.throws(
    () => preparePostImageBytes(Uint8Array.from([1, 2, 3, 4])),
    /JPEG, PNG, WebP, or GIF/
  );

  const huge = new Uint8Array(5 * 1024 * 1024 + 1);
  huge.set([0xff, 0xd8, 0xff]);
  assert.throws(() => preparePostImageBytes(huge), /5 MB/);
});

test("uploaded post images live under the author's folder", () => {
  const path = newPostMediaPath(USER_ID, "webp");

  assert.match(
    path,
    /^11111111-1111-4111-8111-111111111111\/[0-9a-f-]+\.webp$/
  );
  assert.equal(isOwnPostMediaPath(path, USER_ID), true);
  assert.equal(isOwnPostMediaPath(`other/${path}`, USER_ID), false);
  assert.equal(isOwnPostMediaPath(`${USER_ID}/../secret.png`, USER_ID), false);
  assert.throws(() => newPostMediaPath("not-a-user", "jpg"), /Invalid account/);
});

test("tags have to match a country, university, or program slug", () => {
  const tags = validatePostTags([
    { target_type: "country", target_slug: "finland" },
    { target_type: "university", target_slug: "university-of-turku" },
    { target_type: "program", target_slug: "bachelor-accounting-university-of-toronto" },
    { target_type: "country", target_slug: "Finland" },
  ]);

  assert.deepEqual(
    tags.map((tag) => `${tag.target_type}:${tag.target_slug}`),
    [
      "country:finland",
      "university:university-of-turku",
      "program:bachelor-accounting-university-of-toronto",
    ]
  );
  assert.equal(tags[0]?.href, "/finland");
  assert.equal(tags[1]?.name, "University of Turku");

  assert.throws(
    () => validatePostTags([{ target_type: "country", target_slug: "atlantis" }]),
    /Unknown country tag/
  );
  assert.throws(
    () => validatePostTags([{ target_type: "city", target_slug: "helsinki" }]),
    /country, university, or program/
  );
  assert.throws(
    () =>
      validatePostTags(
        Array.from({ length: 9 }, () => ({
          target_type: "country",
          target_slug: "finland",
        }))
      ),
    /up to 8/
  );
});

test("every offered tag slug fits the database check", () => {
  const tags = allPostTags();

  assert.ok(tags.length > 100);

  for (const tag of tags) {
    assert.match(tag.target_slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(tag.href);
  }
});

test("tag search finds static catalog entries and ignores unknown slugs on display", () => {
  const found = searchPostTags("turku");

  assert.ok(found.some((tag) => tag.target_slug === "university-of-turku"));
  assert.deepEqual(searchPostTags("a"), []);

  const described = describePostTags([
    { target_type: "country", target_slug: "canada" },
    { target_type: "university", target_slug: "not-a-real-university" },
  ]);

  assert.equal(described[0]?.name, "Canada");
  assert.equal(described[1]?.href, null);
  assert.equal(described[1]?.name, "not-a-real-university");
});

test("post times use a short relative label", () => {
  const now = Date.parse("2026-10-11T12:00:00Z");

  assert.equal(formatPostTime("2026-10-11T11:00:00Z", now), "1h");
  assert.equal(formatPostTime("2026-10-10T12:00:00Z", now), "1d");
  assert.equal(formatPostTime("2026-10-11T11:59:40Z", now), "Just now");
});

test("rate-limit errors stay readable", () => {
  assert.match(
    messageForPostError(new Error("Rate limit: too many posts, try again later"), "nope"),
    /last hour/
  );
  assert.equal(messageForPostError(new Error("syntax error at relation posts"), "nope"), "nope");
});

function jpegApp1(payload: string): Uint8Array {
  const body = Buffer.from(payload, "latin1");
  const length = body.length + 2;
  const segment = new Uint8Array(4 + body.length);
  segment[0] = 0xff;
  segment[1] = 0xe1;
  segment[2] = (length >> 8) & 0xff;
  segment[3] = length & 0xff;
  segment.set(body, 4);
  return segment;
}

function concat(parts: Uint8Array[]): Uint8Array {
  const out = new Uint8Array(parts.reduce((sum, part) => sum + part.length, 0));
  let offset = 0;

  for (const part of parts) {
    out.set(part, offset);
    offset += part.length;
  }

  return out;
}
