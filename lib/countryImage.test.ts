import assert from "node:assert/strict";
import { existsSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { countries } from "../data/countries";
import {
  COUNTRY_CARD_IMAGE_FILES,
  COUNTRY_IMAGE_SLUG_ALIASES,
  countryCardImageAlt,
  countryCardImageFile,
  countryCardImageSrc,
} from "./countryImage";

const cardsDir = path.join(process.cwd(), "public/images/countries/cards");
const originalsDir = path.join(process.cwd(), "public/images/countries");

test("multi-word slugs map to the photo filenames on disk", () => {
  assert.equal(countryCardImageFile("southkorea"), "south-korea");
  assert.equal(countryCardImageFile("saudiarabia"), "saudi-arabia");
  assert.equal(countryCardImageFile("hongkong"), "hong-kong");
  assert.equal(
    countryCardImageSrc("hongkong"),
    "/images/countries/cards/hong-kong.jpg"
  );
  assert.equal(countryCardImageFile("unitedkingdom"), "unitedkingdom");
  assert.equal(countryCardImageFile("newzealand"), "newzealand");
  assert.equal(countryCardImageFile("czech-republic"), "czech-republic");
  assert.equal(countryCardImageFile("south-africa"), "south-africa");
  assert.equal(countryCardImageFile("usa"), "usa");
  assert.equal(countryCardImageFile("canada"), "canada");
});

test("countries without a photo fall back to no image src", () => {
  assert.equal(countryCardImageFile("vietnam"), null);
  assert.equal(countryCardImageSrc("brazil"), null);
  assert.equal(countryCardImageSrc(""), null);
});

test("alt text names the study destination", () => {
  assert.equal(countryCardImageAlt("Canada"), "Study in Canada");
  assert.equal(countryCardImageAlt("United Kingdom"), "Study in United Kingdom");
});

test("every available country has a card image and every card file is listed", () => {
  for (const country of countries) {
    if (country.status !== "available") continue;
    const file = countryCardImageFile(country.slug);
    assert.ok(file, `missing card image for available country ${country.slug}`);
    assert.equal(
      existsSync(path.join(cardsDir, `${file}.jpg`)),
      true,
      file
    );
  }

  const onDisk = readdirSync(cardsDir)
    .filter((name) => name.endsWith(".jpg"))
    .map((name) => name.replace(/\.jpg$/, ""))
    .sort();
  assert.deepEqual(onDisk, [...COUNTRY_CARD_IMAGE_FILES].sort());
});

test("card derivatives stay small and match the original set", () => {
  const originals = readdirSync(originalsDir)
    .filter((name) => name.endsWith(".jpg"))
    .sort();
  const cards = readdirSync(cardsDir)
    .filter((name) => name.endsWith(".jpg"))
    .sort();
  assert.deepEqual(cards, originals);

  for (const name of cards) {
    const bytes = statSync(path.join(cardsDir, name)).size;
    assert.ok(bytes < 250 * 1024, `${name} is ${bytes} bytes`);
  }

  for (const file of Object.values(COUNTRY_IMAGE_SLUG_ALIASES)) {
    assert.equal(originals.includes(`${file}.jpg`), true, file);
  }
});
