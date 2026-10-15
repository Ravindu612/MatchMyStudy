import assert from "node:assert/strict";
import test from "node:test";
import {
  DELETE_ACCOUNT_CONFIRMATION,
  filesForExport,
  isDeleteAccountConfirmation,
  isListingObject,
  isUserFolderObject,
  storageObjectFromPublicUrl,
} from "./files";

const userId = "11111111-1111-4111-8111-111111111111";
const otherId = "22222222-2222-4222-8222-222222222222";

test("account deletion accepts only the exact confirmation", () => {
  assert.equal(isDeleteAccountConfirmation(DELETE_ACCOUNT_CONFIRMATION), true);
  assert.equal(isDeleteAccountConfirmation("  DELETE  "), true);
  assert.equal(isDeleteAccountConfirmation("delete"), false);
  assert.equal(isDeleteAccountConfirmation("DELETE MY ACCOUNT"), false);
  assert.equal(isDeleteAccountConfirmation(null), false);
});

test("storage urls parse to a bucket and path", () => {
  assert.deepEqual(
    storageObjectFromPublicUrl(
      "https://example.supabase.co/storage/v1/object/public/avatars/11111111-1111-4111-8111-111111111111/avatar.jpg"
    ),
    {
      bucket: "avatars",
      path: "11111111-1111-4111-8111-111111111111/avatar.jpg",
    }
  );
  assert.equal(storageObjectFromPublicUrl("https://lh3.googleusercontent.com/a/photo"), null);
  assert.equal(
    storageObjectFromPublicUrl(
      "https://example.supabase.co/storage/v1/object/public/avatars/../../secret"
    ),
    null
  );
});

test("user folders and listing objects stay inside the owner's files", () => {
  assert.equal(
    isUserFolderObject("avatars", `${userId}/avatar.jpg`, userId),
    true
  );
  assert.equal(isUserFolderObject("avatars", `${otherId}/avatar.jpg`, userId), false);
  assert.equal(isUserFolderObject("post-media", `${userId}/a/b.jpg`, userId), false);
  assert.equal(isListingObject("consultant-logos", "logo.png", userId), true);
  assert.equal(isListingObject("consultant-logos", `${otherId}/logo.png`, userId), false);
  assert.equal(isListingObject("avatars", `${userId}/avatar.jpg`, userId), false);
});

test("an export lists the user's files and skips someone else's object", () => {
  const files = filesForExport({
    supabaseUrl: "https://example.supabase.co",
    userId,
    profile: {
      avatar_url: `https://example.supabase.co/storage/v1/object/public/avatars/${userId}/avatar.jpg`,
      cover_url: "https://lh3.googleusercontent.com/a/photo",
    },
    postMedia: [{ storage_path: `${userId}/post.png` }, { storage_path: `${otherId}/secret.png` }],
    consultants: [
      {
        id: "listing-1",
        logo: "https://example.supabase.co/storage/v1/object/public/consultant-logos/logo.png",
        gallery: ["https://cdn.example.com/gallery.jpg"],
      },
    ],
    stories: [
      {
        consultant_id: "listing-1",
        image_url:
          "https://example.supabase.co/storage/v1/object/public/consultant-success-stories/story.jpg",
      },
      {
        consultant_id: "someone-else",
        image_url:
          "https://example.supabase.co/storage/v1/object/public/consultant-success-stories/other.jpg",
      },
    ],
    promotional: [],
    folderObjects: [{ bucket: "chat-media", path: `${userId}/clip.webm` }],
  });

  const urls = files.map((file) => file.url);

  assert.ok(urls.some((url) => url.includes(`/avatars/${userId}/avatar.jpg`)));
  assert.ok(urls.includes("https://lh3.googleusercontent.com/a/photo"));
  assert.ok(urls.some((url) => url.includes(`/post-media/${userId}/post.png`)));
  assert.equal(urls.some((url) => url.includes(otherId)), false);
  assert.ok(urls.some((url) => url.includes("/consultant-logos/logo.png")));
  assert.ok(urls.includes("https://cdn.example.com/gallery.jpg"));
  assert.ok(urls.some((url) => url.includes("/consultant-success-stories/story.jpg")));
  assert.equal(urls.some((url) => url.includes("other.jpg")), false);
  assert.ok(urls.some((url) => url.includes(`/chat-media/${userId}/clip.webm`)));
});
