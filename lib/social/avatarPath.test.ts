import assert from "node:assert/strict";
import test from "node:test";
import { newAvatarObjectPath, ownAvatarObjectPath, safeImageUrl } from "./avatarPath";

const USER = "11111111-1111-4111-8111-111111111111";
const OTHER = "22222222-2222-4222-8222-222222222222";

test("own avatar path accepts only this user's file in the avatars bucket", () => {
  const url = `https://example.supabase.co/storage/v1/object/public/avatars/${USER}/avatar-abc.webp`;

  assert.equal(ownAvatarObjectPath(url, USER), `${USER}/avatar-abc.webp`);
  assert.equal(ownAvatarObjectPath(url, OTHER), null);
  assert.equal(
    ownAvatarObjectPath(
      `https://example.supabase.co/storage/v1/object/public/post-media/${USER}/pic.webp`,
      USER
    ),
    null
  );
  assert.equal(
    ownAvatarObjectPath(
      `https://example.supabase.co/storage/v1/object/public/avatars/${USER}/nested/pic.webp`,
      USER
    ),
    null
  );
  assert.equal(
    ownAvatarObjectPath(
      `https://example.supabase.co/storage/v1/object/public/avatars/${USER}/../${OTHER}/pic.webp`,
      USER
    ),
    null
  );
  assert.equal(
    ownAvatarObjectPath("https://lh3.googleusercontent.com/a/photo", USER),
    null
  );
  assert.equal(ownAvatarObjectPath("javascript:alert(1)", USER), null);
});

test("new avatar paths stay inside the user's folder", () => {
  const path = newAvatarObjectPath(USER, "cover", "webp");

  assert.match(path, new RegExp(`^${USER}/cover-[0-9a-f-]{36}\\.webp$`));
  assert.throws(() => newAvatarObjectPath("../etc", "avatar", "jpg"));
});

test("safe image urls are https only", () => {
  assert.equal(
    safeImageUrl("https://cdn.example.com/a.png"),
    "https://cdn.example.com/a.png"
  );
  assert.equal(safeImageUrl("http://cdn.example.com/a.png"), null);
  assert.equal(safeImageUrl("javascript:alert(1)"), null);
  assert.equal(safeImageUrl("data:image/png;base64,aaaa"), null);
  assert.equal(safeImageUrl(null), null);
});
