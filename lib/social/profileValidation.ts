import type { ProfileUpdate, SocialAccountType } from "@/types/social";

export const SOCIAL_ACCOUNT_TYPES = [
  "student",
  "current_student",
  "consultant",
  "education_provider",
  "other",
] as const satisfies readonly SocialAccountType[];

export const HANDLE_PATTERN = /^[A-Za-z0-9_]{3,30}$/;
export const CONSULTANT_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const DISPLAY_NAME_MAX = 80;
const HEADLINE_MAX = 160;
const BIO_MAX = 2000;
const COUNTRY_MAX = 80;
const TARGET_COUNTRY_MAX = 120;

const PROTECTED_PROFILE_FIELDS = [
  "role",
  "email",
  "is_verified",
  "is_upgraded",
  "id",
] as const;

export type ProfileSettingsValues = {
  handle: string;
  display_name: string;
  account_type: SocialAccountType;
  headline: string | null;
  bio: string | null;
  country: string | null;
  target_countries: string[];
};

export type ProfileSettingsInput = {
  handle: string;
  displayName: string;
  accountType: string;
  headline: string;
  bio: string;
  country: string;
  targetCountries: readonly string[];
};

type AllowedCountries = {
  homeCountries: readonly string[];
  targetCountries: readonly string[];
};

export type ProfileFieldUpdate = Pick<
  ProfileUpdate,
  | "handle"
  | "display_name"
  | "account_type"
  | "headline"
  | "bio"
  | "country"
  | "target_countries"
  | "avatar_url"
  | "cover_url"
>;

export function validateProfileSettings(
  input: ProfileSettingsInput,
  allowed: AllowedCountries
): { ok: true; value: ProfileSettingsValues } | { ok: false; message: string } {
  const handle = input.handle.trim();

  if (!HANDLE_PATTERN.test(handle)) {
    return {
      ok: false,
      message:
        "Usernames are 3–30 characters and can use letters, numbers, and underscores.",
    };
  }

  const displayName = input.displayName.trim();

  if (displayName.length < 1 || displayName.length > DISPLAY_NAME_MAX) {
    return {
      ok: false,
      message: "Name must be 1–80 characters.",
    };
  }

  if (!isAccountType(input.accountType)) {
    return {
      ok: false,
      message: "Choose a valid account type.",
    };
  }

  const headline = emptyToNull(input.headline);

  if (headline && headline.length > HEADLINE_MAX) {
    return {
      ok: false,
      message: "Headline must be 160 characters or fewer.",
    };
  }

  const bio = emptyToNull(input.bio.replace(/\r\n/g, "\n"));

  if (bio && bio.length > BIO_MAX) {
    return {
      ok: false,
      message: "Bio must be 2000 characters or fewer.",
    };
  }

  const country = emptyToNull(input.country);

  if (country && (country.length > COUNTRY_MAX || !allowed.homeCountries.includes(country))) {
    return {
      ok: false,
      message: "Choose a home country from the list.",
    };
  }

  const targetCountries: string[] = [];

  for (const raw of input.targetCountries) {
    const name = raw.trim();

    if (!name || targetCountries.includes(name)) {
      continue;
    }

    if (name.length > COUNTRY_MAX || !allowed.targetCountries.includes(name)) {
      return {
        ok: false,
        message: "Choose target countries from the list.",
      };
    }

    targetCountries.push(name);
  }

  if (targetCountries.length > TARGET_COUNTRY_MAX) {
    return {
      ok: false,
      message: "Choose fewer target countries.",
    };
  }

  return {
    ok: true,
    value: {
      handle,
      display_name: displayName,
      account_type: input.accountType,
      headline,
      bio,
      country,
      target_countries: targetCountries,
    },
  };
}

export function toProfileUpdate(
  values: ProfileSettingsValues,
  images: { avatar_url: string | null; cover_url: string | null }
): ProfileFieldUpdate {
  const update: ProfileFieldUpdate = {
    handle: values.handle,
    display_name: values.display_name,
    account_type: values.account_type,
    headline: values.headline,
    bio: values.bio,
    country: values.country,
    target_countries: values.target_countries,
    avatar_url: images.avatar_url,
    cover_url: images.cover_url,
  };

  for (const field of PROTECTED_PROFILE_FIELDS) {
    if (field in update) {
      throw new Error("Profile update included a protected field.");
    }
  }

  return update;
}

export function formatProfileSaveError(error: {
  code?: string;
  message?: string;
}): string {
  const message = error.message ?? "";

  if (error.code === "23505" || message.includes("profiles_handle_key")) {
    return "That username is already taken.";
  }

  if (message.includes("profiles_handle_format")) {
    return "Usernames are 3–30 characters and can use letters, numbers, and underscores.";
  }

  if (message.includes("profiles_display_name_len")) {
    return "Name must be 1–80 characters.";
  }

  if (message.includes("profiles_headline_len")) {
    return "Headline must be 160 characters or fewer.";
  }

  if (message.includes("profiles_bio_len")) {
    return "Bio must be 2000 characters or fewer.";
  }

  if (error.code === "42501") {
    return "You don't have permission to update this profile.";
  }

  return "Could not save your profile. Please try again.";
}

export function consultantPath(slug: string | null | undefined): string | null {
  if (!slug || !CONSULTANT_SLUG_PATTERN.test(slug)) {
    return null;
  }

  return `/consultants/${slug}`;
}

export function isAccountType(value: string): value is SocialAccountType {
  return (SOCIAL_ACCOUNT_TYPES as readonly string[]).includes(value);
}

function emptyToNull(value: string): string | null {
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}
