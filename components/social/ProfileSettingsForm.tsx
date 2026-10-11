"use client";

import ProfileHeader from "@/components/social/ProfileHeader";
import { ACCOUNT_TYPE_OPTIONS } from "@/lib/social/accountType";
import { prepareProfileImage } from "@/lib/social/prepareProfileImage";
import {
  homeCountryNames,
  targetCountryNames,
} from "@/lib/social/profileOptions";
import {
  consultantPath,
  HANDLE_PATTERN,
  validateProfileSettings,
} from "@/lib/social/profileValidation";
import {
  loadDirectoryBadges,
  loadOwnProfile,
  saveProfileChanges,
  usernameTaken,
  type DirectoryBadges,
  type OwnProfile,
} from "@/lib/social/profileSettings";
import { supabase } from "@/lib/supabase";
import type { SocialAccountType } from "@/types/social";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";

type Draft = {
  handle: string;
  displayName: string;
  accountType: SocialAccountType;
  headline: string;
  bio: string;
  country: string;
  targetCountries: string[];
};

export default function ProfileSettingsForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [profile, setProfile] = useState<OwnProfile | null>(null);
  const [badges, setBadges] = useState<DirectoryBadges>({
    consultant_slug: null,
    is_verified: false,
    is_upgraded: false,
  });
  const [draft, setDraft] = useState<Draft | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [removeAvatar, setRemoveAvatar] = useState(false);
  const [removeCover, setRemoveCover] = useState(false);
  const [preparing, setPreparing] = useState<"avatar" | "cover" | null>(null);
  const avatarRequest = useRef(0);
  const coverRequest = useRef(0);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const {
          data: { user },
        } = await withTimeout(supabase.auth.getUser(), 8000);

        if (!user) {
          window.location.assign("/login?redirect=/settings/profile");
          return;
        }

        const [ownProfile, directory] = await Promise.all([
          loadOwnProfile(user.id),
          loadDirectoryBadges(user.id),
        ]);

        if (!active) {
          return;
        }

        setProfile(ownProfile);
        setBadges(directory);
        setDraft(toDraft(ownProfile));
        setLoading(false);
      } catch (loadError) {
        if (!active) {
          return;
        }

        setError(
          loadError instanceof Error
            ? loadError.message
            : "Could not load your profile. Please try again."
        );
        setLoading(false);
      }
    }

    load();

    return () => {
      active = false;
    };
  }, []);

  const avatarPreviewRef = useRef<string | null>(null);
  const coverPreviewRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (avatarPreviewRef.current) {
        URL.revokeObjectURL(avatarPreviewRef.current);
      }

      if (coverPreviewRef.current) {
        URL.revokeObjectURL(coverPreviewRef.current);
      }
    };
  }, []);

  async function onImagePicked(
    kind: "avatar" | "cover",
    file: File | undefined
  ) {
    if (!file) {
      return;
    }

    const requestId =
      kind === "avatar" ? ++avatarRequest.current : ++coverRequest.current;

    setPreparing(kind);
    setError("");
    setSuccess("");

    try {
      const prepared = await prepareProfileImage(file, kind);

      if (
        (kind === "avatar" && requestId !== avatarRequest.current) ||
        (kind === "cover" && requestId !== coverRequest.current)
      ) {
        return;
      }

      const preview = URL.createObjectURL(prepared);

      if (kind === "avatar") {
        if (avatarPreviewRef.current) {
          URL.revokeObjectURL(avatarPreviewRef.current);
        }

        avatarPreviewRef.current = preview;
        setAvatarFile(prepared);
        setAvatarPreview(preview);
        setRemoveAvatar(false);
      } else {
        if (coverPreviewRef.current) {
          URL.revokeObjectURL(coverPreviewRef.current);
        }

        coverPreviewRef.current = preview;
        setCoverFile(prepared);
        setCoverPreview(preview);
        setRemoveCover(false);
      }
    } catch (prepareError) {
      if (
        (kind === "avatar" && requestId !== avatarRequest.current) ||
        (kind === "cover" && requestId !== coverRequest.current)
      ) {
        return;
      }

      setError(
        prepareError instanceof Error
          ? prepareError.message
          : "Could not process that image."
      );
    } finally {
      if (
        (kind === "avatar" && requestId === avatarRequest.current) ||
        (kind === "cover" && requestId === coverRequest.current)
      ) {
        setPreparing(null);
      }
    }
  }

  function clearImage(kind: "avatar" | "cover") {
    if (kind === "avatar") {
      avatarRequest.current += 1;

      if (avatarPreviewRef.current) {
        URL.revokeObjectURL(avatarPreviewRef.current);
        avatarPreviewRef.current = null;
      }

      setAvatarFile(null);
      setAvatarPreview(null);
      setRemoveAvatar(true);
      return;
    }

    coverRequest.current += 1;

    if (coverPreviewRef.current) {
      URL.revokeObjectURL(coverPreviewRef.current);
      coverPreviewRef.current = null;
    }

    setCoverFile(null);
    setCoverPreview(null);
    setRemoveCover(true);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!draft || !profile || saving || preparing) {
      return;
    }

    setError("");
    setSuccess("");

    const homeCountries = homeCountryNames(profile.country);
    const destinations = targetCountryNames(profile.target_countries);
    const validated = validateProfileSettings(
      {
        handle: draft.handle,
        displayName: draft.displayName,
        accountType: draft.accountType,
        headline: draft.headline,
        bio: draft.bio,
        country: draft.country,
        targetCountries: draft.targetCountries,
      },
      { homeCountries, targetCountries: destinations }
    );

    if (!validated.ok) {
      setError(validated.message);
      return;
    }

    setSaving(true);

    try {
      const {
        data: { user },
      } = await withTimeout(supabase.auth.getUser(), 8000);

      if (!user) {
        router.replace("/login?redirect=/settings/profile");
        return;
      }

      if (await usernameTaken(validated.value.handle, user.id)) {
        setError("That username is already taken.");
        return;
      }

      const saved = await saveProfileChanges({
        userId: user.id,
        values: validated.value,
        avatarFile,
        coverFile,
        removeAvatar,
        removeCover,
        previousAvatarUrl: profile.avatar_url,
        previousCoverUrl: profile.cover_url,
      });

      setProfile(saved);
      setDraft(toDraft(saved));
      setAvatarFile(null);
      setCoverFile(null);

      if (avatarPreviewRef.current) {
        URL.revokeObjectURL(avatarPreviewRef.current);
        avatarPreviewRef.current = null;
      }

      if (coverPreviewRef.current) {
        URL.revokeObjectURL(coverPreviewRef.current);
        coverPreviewRef.current = null;
      }

      setAvatarPreview(null);
      setCoverPreview(null);
      setRemoveAvatar(false);
      setRemoveCover(false);
      setSuccess("Profile saved.");
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Could not save your profile. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-16">
        <p className="text-center text-slate-500">Loading your profile…</p>
      </main>
    );
  }

  if (!draft || !profile) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">Profile settings</h1>
          <p className="mt-3 text-slate-600">
            {error || "Could not load your profile. Please try again."}
          </p>
        </div>
      </main>
    );
  }

  const homeCountries = homeCountryNames(profile.country);
  const destinations = targetCountryNames(profile.target_countries);
  const listingPath = consultantPath(badges.consultant_slug);
  const shownAvatar = avatarPreview ?? (removeAvatar ? null : profile.avatar_url);
  const shownCover = coverPreview ?? (removeCover ? null : profile.cover_url);
  const publicHandle = HANDLE_PATTERN.test(draft.handle.trim())
    ? draft.handle.trim()
    : profile.handle;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Profile settings</h1>
          <p className="mt-2 text-slate-600">
            This is what people see at your public profile.
          </p>
        </div>

        <ProfileHeader
          displayName={draft.displayName.trim() || "Your name"}
          handle={publicHandle}
          accountType={draft.accountType}
          headline={draft.headline.trim()}
          avatarUrl={shownAvatar}
          coverUrl={shownCover}
          isVerified={badges.is_verified}
          isUpgraded={badges.is_upgraded}
          consultantSlug={badges.consultant_slug}
        />

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          {error ? (
            <p
              role="alert"
              className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </p>
          ) : null}

          {success ? (
            <p
              role="status"
              className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
            >
              {success}{" "}
              <Link
                href={`/u/${profile.handle}`}
                className="font-semibold underline"
              >
                View public profile
              </Link>
            </p>
          ) : null}

          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block font-semibold text-slate-900">
                Name
              </span>
              <input
                value={draft.displayName}
                onChange={(event) =>
                  setDraft({ ...draft, displayName: event.target.value })
                }
                maxLength={80}
                required
                autoComplete="name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-semibold text-slate-900">
                Username
              </span>
              <input
                value={draft.handle}
                onChange={(event) =>
                  setDraft({ ...draft, handle: event.target.value })
                }
                maxLength={30}
                required
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                aria-describedby="username-help"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
              <span id="username-help" className="mt-2 block text-sm text-slate-500">
                Public address: /u/{publicHandle}. Letters, numbers, and
                underscores, 3–30 characters.
              </span>
            </label>
          </div>

          <label className="mt-6 block">
            <span className="mb-2 block font-semibold text-slate-900">
              Account type
            </span>
            <select
              value={draft.accountType}
              onChange={(event) =>
                setDraft({
                  ...draft,
                  accountType: event.target.value as SocialAccountType,
                })
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            >
              {ACCOUNT_TYPE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className="mt-2 block text-sm text-slate-500">
              This is how you appear on MatchMyStudy. It does not change your
              login permissions. Verified and Pro badges come from your
              consultant listing.
              {listingPath ? (
                <>
                  {" "}
                  <Link href={listingPath} className="font-medium text-blue-600 hover:underline">
                    View consultant page
                  </Link>
                </>
              ) : null}
              {draft.accountType === "consultant" && !listingPath ? (
                <>
                  {" "}
                  <Link
                    href="/consultants/apply"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Apply for a consultant listing
                  </Link>
                </>
              ) : null}
            </span>
          </label>

          <label className="mt-6 block">
            <span className="mb-2 block font-semibold text-slate-900">
              Headline
            </span>
            <input
              value={draft.headline}
              onChange={(event) =>
                setDraft({ ...draft, headline: event.target.value })
              }
              maxLength={160}
              placeholder="Master's applicant · Helsinki"
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </label>

          <label className="mt-6 block">
            <span className="mb-2 flex items-center justify-between font-semibold text-slate-900">
              Bio
              <span className="text-sm font-normal text-slate-500">
                {draft.bio.length}/2000
              </span>
            </span>
            <textarea
              value={draft.bio}
              onChange={(event) =>
                setDraft({ ...draft, bio: event.target.value })
              }
              maxLength={2000}
              rows={6}
              placeholder="Share a bit about your study abroad plans."
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </label>

          <label className="mt-6 block">
            <span className="mb-2 block font-semibold text-slate-900">
              Home country
            </span>
            <select
              value={draft.country}
              onChange={(event) =>
                setDraft({ ...draft, country: event.target.value })
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            >
              <option value="">Select country</option>
              {homeCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>

          <fieldset className="mt-8">
            <legend className="mb-2 font-semibold text-slate-900">
              Target countries
            </legend>
            <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
              {destinations.map((country) => (
                <label
                  key={country}
                  className="flex cursor-pointer items-center gap-2 rounded-lg p-2 hover:bg-slate-50"
                >
                  <input
                    type="checkbox"
                    checked={draft.targetCountries.includes(country)}
                    onChange={() =>
                      setDraft({
                        ...draft,
                        targetCountries: draft.targetCountries.includes(country)
                          ? draft.targetCountries.filter(
                              (item) => item !== country
                            )
                          : [...draft.targetCountries, country],
                      })
                    }
                    className="h-4 w-4"
                  />
                  <span className="text-sm">{country}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ImageField
              label="Profile photo"
              help="Shown on your profile. Location data is removed in your browser before upload. JPEG, PNG, or WebP, up to 5 MB."
              preparing={preparing === "avatar"}
              hasImage={Boolean(shownAvatar)}
              onPick={(file) => onImagePicked("avatar", file)}
              onRemove={() => clearImage("avatar")}
            />
            <ImageField
              label="Cover photo"
              help="A wide photo for the top of your profile. Location data is removed in your browser before upload."
              preparing={preparing === "cover"}
              hasImage={Boolean(shownCover)}
              onPick={(file) => onImagePicked("cover", file)}
              onRemove={() => clearImage("cover")}
            />
          </div>

          <button
            type="submit"
            disabled={saving || preparing !== null}
            className="mt-8 w-full rounded-xl bg-blue-500 px-4 py-3 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {saving ? "Saving…" : preparing ? "Preparing photo…" : "Save profile"}
          </button>
        </form>
      </div>
    </main>
  );
}

function ImageField({
  label,
  help,
  preparing,
  hasImage,
  onPick,
  onRemove,
}: {
  label: string;
  help: string;
  preparing: boolean;
  hasImage: boolean;
  onPick: (file: File | undefined) => void;
  onRemove: () => void;
}) {
  return (
    <div>
      <span className="mb-2 block font-semibold text-slate-900">{label}</span>
      <input
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={(event) => {
          const file = event.target.files?.[0];
          event.target.value = "";
          onPick(file);
        }}
        className="block w-full rounded-xl border border-slate-300 px-4 py-3"
      />
      <p className="mt-2 text-sm text-slate-500">
        {preparing ? "Removing location data…" : help}
      </p>
      {hasImage ? (
        <button
          type="button"
          onClick={onRemove}
          className="mt-2 text-sm font-medium text-red-600 hover:text-red-700"
        >
          Remove
        </button>
      ) : null}
    </div>
  );
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Could not reach the account service. Please try again."));
    }, ms);

    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error: unknown) => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });
}

function toDraft(profile: OwnProfile): Draft {
  return {
    handle: profile.handle,
    displayName: profile.display_name,
    accountType: profile.account_type,
    headline: profile.headline ?? "",
    bio: profile.bio ?? "",
    country: profile.country ?? "",
    targetCountries: profile.target_countries ?? [],
  };
}
