import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import PartnerCard from "../components/resources/PartnerCard";
import {
  AFFILIATE_LINK_REL,
  PLAIN_LINK_REL,
  housingPartners,
  isAffiliatePartner,
  moneyTransferPartners,
  partnerLinkRel,
  partners,
  testPrepPartners,
} from "../data/partners";
import { resourceGuides } from "../data/resourceGuides";

const officialUrls: Record<keyof typeof partners, string> = {
  amber: "https://amberstudent.com",
  housinganywhere: "https://housinganywhere.com",
  uniplaces: "https://uniplaces.com",
  wise: "https://wise.com",
  remitly: "https://remitly.com",
  magoosh: "https://magoosh.com",
};

test("partner links stay plain official URLs until an affiliate deal is approved", () => {
  for (const [id, url] of Object.entries(officialUrls)) {
    const partner = partners[id as keyof typeof partners];

    assert.equal(partner.url, url);
    assert.equal(partner.isAffiliate, false);
    assert.equal(isAffiliatePartner(partner), false);
    assert.equal(partnerLinkRel(partner), PLAIN_LINK_REL);
  }

  assert.equal(partnerLinkRel({ isAffiliate: true }), AFFILIATE_LINK_REL);
  assert.equal(partnerLinkRel({}), PLAIN_LINK_REL);
  assert.equal(AFFILIATE_LINK_REL, "sponsored noopener");
  assert.equal(PLAIN_LINK_REL, "noopener noreferrer");
});

test("each partner has a TODO for the future affiliate URL", () => {
  const source = readFileSync(
    new URL("../data/partners.ts", import.meta.url),
    "utf8"
  );
  const todos = source.match(/TODO\(affiliate\)/g);

  assert.equal(todos?.length, Object.keys(partners).length);
});

test("provider cards disclose affiliate links only when the flag is set", () => {
  const plain = renderToStaticMarkup(
    createElement(PartnerCard, { partner: partners.amber })
  );

  assert.match(plain, /href="https:\/\/amberstudent.com"/);
  assert.match(plain, /rel="noopener noreferrer"/);
  assert.doesNotMatch(plain, /sponsored/);
  assert.doesNotMatch(plain, /affiliate-disclosure/);

  const affiliate = renderToStaticMarkup(
    createElement(PartnerCard, {
      partner: { ...partners.wise, isAffiliate: true },
    })
  );

  assert.match(affiliate, /rel="sponsored noopener"/);
  assert.match(affiliate, /href="\/affiliate-disclosure"/);
});

test("guide pages take commercial provider URLs from the partner config", () => {
  const pages = [
    ["../app/student-housing/page.tsx", housingPartners],
    ["../app/money-transfer/page.tsx", moneyTransferPartners],
    ["../app/test-prep/page.tsx", testPrepPartners],
  ] as const;

  for (const [file, group] of pages) {
    const source = readFileSync(new URL(file, import.meta.url), "utf8");

    assert.match(source, /@\/data\/partners/);
    for (const partner of group) {
      assert.doesNotMatch(source, new RegExp(partner.url.replaceAll(".", "\\.")));
    }
  }

  const partnerSource = readFileSync(
    new URL("../data/partners.ts", import.meta.url),
    "utf8"
  );
  for (const url of Object.values(officialUrls)) {
    assert.match(partnerSource, new RegExp(url.replaceAll(".", "\\.")));
  }
});

test("navbar, footer, and sitemap share the resource guide list", () => {
  const menu = readFileSync(
    new URL("../components/ResourcesMenu.tsx", import.meta.url),
    "utf8"
  );
  const footer = readFileSync(
    new URL("../components/Footer.tsx", import.meta.url),
    "utf8"
  );
  const sitemap = readFileSync(
    new URL("../app/sitemap.ts", import.meta.url),
    "utf8"
  );
  const navbar = readFileSync(
    new URL("../components/Navbar.tsx", import.meta.url),
    "utf8"
  );

  assert.match(menu, /resourceGuides/);
  assert.match(footer, /resourceGuides/);
  assert.match(sitemap, /resourceGuides/);
  assert.match(navbar, /ResourcesMenu/);

  assert.deepEqual(
    resourceGuides.map((guide) => guide.href),
    ["/student-housing", "/money-transfer", "/test-prep"]
  );
});
