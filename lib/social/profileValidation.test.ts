import assert from "node:assert/strict";
import test from "node:test";
import {
  consultantPath,
  formatProfileSaveError,
  toProfileUpdate,
  validateProfileSettings,
} from "./profileValidation";

const allowed = {
  homeCountries: ["Finland", "Sri Lanka"],
  targetCountries: ["Finland", "Germany"],
};

const validInput = {
  handle: "amaya_p",
  displayName: "Amaya Perera",
  accountType: "student",
  headline: "Master's applicant",
  bio: "Looking at universities in Finland.",
  country: "Sri Lanka",
  targetCountries: ["Finland", "Finland", "Germany"],
};

test("profile settings accept a public username and drop protected fields", () => {
  const result = validateProfileSettings(validInput, allowed);

  assert.equal(result.ok, true);

  if (!result.ok) {
    return;
  }

  assert.deepEqual(result.value.target_countries, ["Finland", "Germany"]);

  const update = toProfileUpdate(result.value, {
    avatar_url: "https://example.supabase.co/a.webp",
    cover_url: null,
  });

  assert.deepEqual(Object.keys(update).sort(), [
    "account_type",
    "avatar_url",
    "bio",
    "country",
    "cover_url",
    "display_name",
    "handle",
    "headline",
    "target_countries",
  ]);
  assert.equal("role" in update, false);
  assert.equal("email" in update, false);
  assert.equal("is_verified" in update, false);
  assert.equal("is_upgraded" in update, false);
});

test("username rules match the database constraint", () => {
  for (const handle of ["ab", "has-hyphen", "has space", "ämy", "a".repeat(31)]) {
    const result = validateProfileSettings({ ...validInput, handle }, allowed);
    assert.equal(result.ok, false, handle);
  }
});

test("account type has to be one of the social identities", () => {
  const result = validateProfileSettings(
    { ...validInput, accountType: "admin" },
    allowed
  );

  assert.equal(result.ok, false);
});

test("empty optional text is stored as null", () => {
  const result = validateProfileSettings(
    {
      ...validInput,
      headline: "   ",
      bio: "\n",
      country: "",
      targetCountries: [],
    },
    allowed
  );

  assert.equal(result.ok, true);

  if (result.ok) {
    assert.equal(result.value.headline, null);
    assert.equal(result.value.bio, null);
    assert.equal(result.value.country, null);
    assert.deepEqual(result.value.target_countries, []);
  }
});

test("save errors for a taken username stay specific", () => {
  assert.match(
    formatProfileSaveError({
      code: "23505",
      message: 'duplicate key value violates unique constraint "profiles_handle_key"',
    }),
    /already taken/
  );
});

test("consultant links only use a listing slug", () => {
  assert.equal(consultantPath("global-path"), "/consultants/global-path");
  assert.equal(consultantPath("../admin"), null);
  assert.equal(consultantPath("Has Spaces"), null);
  assert.equal(consultantPath(null), null);
});
