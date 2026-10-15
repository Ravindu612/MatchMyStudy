import { getStripe } from "@/lib/stripe";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  isListingObject,
  isUserFolderObject,
  storageObjectFromPublicUrl,
  USER_STORAGE_BUCKETS,
  type StorageObjectRef,
} from "@/lib/account/files";

export class AccountPrivacyError extends Error {
  constructor(
    message: string,
    readonly status: number
  ) {
    super(message);
  }
}

type Row = Record<string, unknown>;

function isMissingRelation(error: { code?: string; message?: string }): boolean {
  return (
    error.code === "42P01" ||
    error.code === "PGRST205" ||
    /does not exist|schema cache/i.test(error.message ?? "")
  );
}

function textList(value: unknown): string[] {
  if (typeof value === "string" && value.trim()) {
    return [value];
  }

  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
}

function addObject(target: Map<string, StorageObjectRef>, userId: string, bucket: string, path: string) {
  const allowed = isUserFolderObject(bucket, path, userId) || isListingObject(bucket, path, userId);

  if (!allowed) {
    return;
  }

  target.set(`${bucket}/${path}`, { bucket, path });
}

function addUrl(target: Map<string, StorageObjectRef>, userId: string, value: string) {
  const object = storageObjectFromPublicUrl(value);

  if (!object) {
    return;
  }

  addObject(target, userId, object.bucket, object.path);
}

async function listUserFolder(
  admin: SupabaseClient,
  bucket: string,
  userId: string
): Promise<StorageObjectRef[]> {
  const found: StorageObjectRef[] = [];
  let offset = 0;

  for (let page = 0; page < 50; page += 1) {
    const { data, error } = await admin.storage.from(bucket).list(userId, {
      limit: 100,
      offset,
    });

    if (error || !data || data.length === 0) {
      break;
    }

    for (const entry of data) {
      if (!entry?.name || !entry.id) {
        continue;
      }

      const path = `${userId}/${entry.name}`;

      if (isUserFolderObject(bucket, path, userId)) {
        found.push({ bucket, path });
      }
    }

    if (data.length < 100) {
      break;
    }

    offset += data.length;
  }

  return found;
}

async function ownedConsultants(admin: SupabaseClient, userId: string): Promise<Row[]> {
  const { data, error } = await admin.from("consultants").select("*").eq("owner_id", userId);

  if (error) {
    if (isMissingRelation(error)) {
      return [];
    }

    console.error("Could not read consultant listings for account deletion:", error);
    throw new AccountPrivacyError("Could not delete your account.", 500);
  }

  return (data ?? []) as Row[];
}

async function childImageUrls(
  admin: SupabaseClient,
  table: "consultant_success_stories" | "consultant_promotional_content",
  consultantIds: string[]
): Promise<string[]> {
  if (consultantIds.length === 0) {
    return [];
  }

  const { data, error } = await admin
    .from(table)
    .select("image_url")
    .in("consultant_id", consultantIds);

  if (error) {
    if (isMissingRelation(error)) {
      return [];
    }

    console.error(`Could not read ${table} for account deletion:`, error);
    throw new AccountPrivacyError("Could not delete your account.", 500);
  }

  return (data ?? []).flatMap((row) => textList((row as Row).image_url));
}

async function collectStorageObjects(admin: SupabaseClient, userId: string): Promise<StorageObjectRef[]> {
  const objects = new Map<string, StorageObjectRef>();

  for (const bucket of USER_STORAGE_BUCKETS) {
    for (const object of await listUserFolder(admin, bucket, userId)) {
      addObject(objects, userId, object.bucket, object.path);
    }
  }

  const { data: profile, error: profileError } = await admin
    .from("profiles")
    .select("avatar_url, cover_url")
    .eq("id", userId)
    .maybeSingle();

  if (profileError) {
    console.error("Could not read profile files for account deletion:", profileError);
    throw new AccountPrivacyError("Could not delete your account.", 500);
  }

  for (const value of textList(profile?.avatar_url).concat(textList(profile?.cover_url))) {
    addUrl(objects, userId, value);
  }

  const { data: posts, error: postError } = await admin.from("posts").select("id").eq("author_id", userId);

  if (postError) {
    console.error("Could not read posts for account deletion:", postError);
    throw new AccountPrivacyError("Could not delete your account.", 500);
  }

  const postIds = (posts ?? [])
    .map((post) => (post as Row).id)
    .filter((id): id is string => typeof id === "string");

  if (postIds.length > 0) {
    const { data: media, error: mediaError } = await admin
      .from("post_media")
      .select("storage_path")
      .in("post_id", postIds);

    if (mediaError) {
      console.error("Could not read post media for account deletion:", mediaError);
      throw new AccountPrivacyError("Could not delete your account.", 500);
    }

    for (const row of media ?? []) {
      const storagePath = (row as Row).storage_path;

      if (typeof storagePath !== "string") {
        continue;
      }

      if (storagePath.includes("/storage/v1/object/public/")) {
        addUrl(objects, userId, storagePath);
      } else {
        addObject(objects, userId, "post-media", storagePath);
      }
    }
  }

  const consultants = await ownedConsultants(admin, userId);
  const createdIds = consultants
    .filter((row) => row.created_by_consultant === true && typeof row.id === "string")
    .map((row) => row.id as string);

  for (const consultant of consultants) {
    if (consultant.created_by_consultant !== true) {
      continue;
    }

    for (const value of [
      ...textList(consultant.logo),
      ...textList(consultant.banner),
      ...textList(consultant.gallery),
    ]) {
      addUrl(objects, userId, value);
    }
  }

  const storyUrls = await childImageUrls(admin, "consultant_success_stories", createdIds);
  const promoUrls = await childImageUrls(admin, "consultant_promotional_content", createdIds);

  for (const value of [...storyUrls, ...promoUrls]) {
    addUrl(objects, userId, value);
  }

  return [...objects.values()];
}

async function removeStorageObjects(admin: SupabaseClient, objects: StorageObjectRef[]) {
  const byBucket = new Map<string, string[]>();

  for (const object of objects) {
    const paths = byBucket.get(object.bucket) ?? [];
    paths.push(object.path);
    byBucket.set(object.bucket, paths);
  }

  for (const [bucket, paths] of byBucket) {
    for (let index = 0; index < paths.length; index += 100) {
      const chunk = paths.slice(index, index + 100);
      const { error } = await admin.storage.from(bucket).remove(chunk);

      if (error) {
        if (/bucket not found|not found/i.test(error.message)) {
          continue;
        }

        console.error("Could not delete storage objects:", bucket, error);
        throw new AccountPrivacyError("Could not delete your uploaded files.", 500);
      }
    }
  }
}

async function cancelOwnedSubscriptions(rows: Row[]) {
  const subscriptionIds = [
    ...new Set(
      rows
        .map((row) => row.stripe_subscription_id)
        .filter((id): id is string => typeof id === "string" && id.length > 0)
    ),
  ];

  if (subscriptionIds.length === 0) {
    return;
  }

  const stripe = getStripe();

  if (!stripe) {
    console.error(
      "Account deletion could not cancel Stripe subscriptions because STRIPE_SECRET_KEY is not configured:",
      subscriptionIds
    );
    return;
  }

  for (const subscriptionId of subscriptionIds) {
    try {
      await stripe.subscriptions.cancel(subscriptionId);
    } catch (error) {
      const code =
        error && typeof error === "object" && "code" in error
          ? String((error as { code: unknown }).code)
          : "";

      if (code === "resource_missing") {
        continue;
      }

      console.error("Could not cancel Stripe subscription during account deletion:", subscriptionId, error);
    }
  }
}

/**
 * Deletes stored files, consultant ownership, the profile row, and the auth
 * user. The service role client is created inside getSupabaseAdmin on first
 * use. Call this only after the session token has been verified.
 */
export async function deleteUserAccount(userId: string): Promise<void> {
  const admin = getSupabaseAdmin();

  if (!admin) {
    console.error("Account deletion is unavailable because SUPABASE_SERVICE_ROLE_KEY is not configured.");
    throw new AccountPrivacyError("Account deletion is temporarily unavailable.", 503);
  }

  const consultants = await ownedConsultants(admin, userId);
  const objects = await collectStorageObjects(admin, userId);

  await cancelOwnedSubscriptions(consultants);
  await removeStorageObjects(admin, objects);

  const { error: deleteError } = await admin.rpc("delete_user_account", {
    p_uid: userId,
  });

  if (deleteError) {
    console.error("delete_user_account failed:", deleteError);
    throw new AccountPrivacyError("Could not delete your account.", 500);
  }

  const { error: authError } = await admin.auth.admin.deleteUser(userId);

  if (authError && !/not found/i.test(authError.message)) {
    console.error("auth.admin.deleteUser failed:", authError);
    throw new AccountPrivacyError("Could not delete your login. Try again.", 500);
  }
}
