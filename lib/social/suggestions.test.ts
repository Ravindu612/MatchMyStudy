import assert from "node:assert/strict";
import test from "node:test";
import { rankSuggestions, type SuggestionPerson } from "./suggestions";

function person(overrides: Partial<SuggestionPerson> & Pick<SuggestionPerson, "id" | "displayName">): SuggestionPerson {
  return {
    handle: overrides.id,
    accountType: "student",
    headline: null,
    country: null,
    targetCountries: [],
    avatarUrl: null,
    isVerified: false,
    isUpgraded: false,
    ...overrides,
  };
}

test("suggestions feature upgraded profiles and skip follows and blocks", () => {
  const viewer = {
    id: "me",
    country: "Sri Lanka",
    targetCountries: ["Finland"],
  };
  const ranked = rankSuggestions(
    viewer,
    [
      person({ id: "me", displayName: "Me" }),
      person({ id: "followed", displayName: "Already following", isUpgraded: true }),
      person({ id: "blocked", displayName: "Blocked consultant", accountType: "consultant" }),
      person({ id: "plain", displayName: "Zara Plain", country: "Japan" }),
      person({
        id: "local",
        displayName: "Kasun Silva",
        accountType: "current_student",
        country: "Sri Lanka",
        targetCountries: ["Finland"],
      }),
      person({
        id: "pro",
        displayName: "Global Path",
        accountType: "consultant",
        isVerified: true,
        isUpgraded: true,
        country: "Canada",
      }),
    ],
    new Set(["followed"]),
    new Set(["blocked"]),
    10
  );

  assert.deepEqual(
    ranked.map((item) => item.id),
    ["pro", "local", "plain"]
  );
});

test("anonymous suggestions still prefer verified providers", () => {
  const ranked = rankSuggestions(
    null,
    [
      person({ id: "a", displayName: "Amy", accountType: "student" }),
      person({
        id: "b",
        displayName: "Example University",
        accountType: "education_provider",
        isVerified: true,
      }),
    ],
    new Set(),
    new Set(),
    5
  );

  assert.equal(ranked[0]?.id, "b");
  assert.equal(ranked[1]?.id, "a");
});
