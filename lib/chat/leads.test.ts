import assert from "node:assert/strict";
import test from "node:test";
import { parseLeadInput } from "./leads";

const valid = {
  name: "Amina Rahman",
  email: "Amina@Example.com",
  countryOfInterest: "Canada",
  studyLevel: "Master",
  message: "I need help choosing a program.",
  consent: true,
};

test("lead capture requires an unticked-by-default consent flag", () => {
  assert.equal(parseLeadInput({ ...valid, consent: false }).ok, false);
  assert.equal(parseLeadInput({ ...valid, consent: "true" }).ok, false);
  assert.match(
    parseLeadInput({ ...valid, consent: false }).ok
      ? ""
      : (parseLeadInput({ ...valid, consent: false }) as { message: string }).message,
    /consent/i
  );
});

test("lead capture stores a normalized email and rejects bad contact details", () => {
  const parsed = parseLeadInput(valid);

  assert.equal(parsed.ok, true);

  if (parsed.ok) {
    assert.equal(parsed.lead.email, "amina@example.com");
    assert.equal(parsed.lead.countryOfInterest, "Canada");
  }

  assert.equal(parseLeadInput({ ...valid, email: "not-an-email" }).ok, false);
  assert.equal(parseLeadInput({ ...valid, name: "  " }).ok, false);
  assert.equal(parseLeadInput({ ...valid, message: "" }).ok, false);
  assert.equal(
    parseLeadInput({ ...valid, countryOfInterest: "" }).ok,
    true
  );
});
