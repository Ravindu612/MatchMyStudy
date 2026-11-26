/**
 * Commercial providers linked from the resource guides.
 *
 * `url` is the plain official website. When an affiliate agreement is
 * approved, replace that provider's `url` with the affiliate link and set
 * `isAffiliate` to true. The card then uses rel="sponsored noopener" and
 * shows the affiliate disclosure. Until then the link is a normal outbound
 * link and the disclosure stays hidden.
 */

export type Partner = {
  id: string;
  name: string;
  category: string;
  url: string;
  isAffiliate: boolean;
  summary: string;
};

export type PartnerId =
  | "amber"
  | "housinganywhere"
  | "uniplaces"
  | "wise"
  | "remitly"
  | "magoosh";

export const PLAIN_LINK_REL = "noopener noreferrer";
export const AFFILIATE_LINK_REL = "sponsored noopener";

export const partners: Record<PartnerId, Partner> = {
  amber: {
    id: "amber",
    name: "Amber",
    category: "Student housing",
    // TODO(affiliate): After Amber approves a partnership, replace this URL
    // with the affiliate link and set isAffiliate to true.
    url: "https://amberstudent.com",
    isAffiliate: false,
    summary:
      "Amber lists student rooms and residences in university cities and lets you ask about a room or book on its website. It is a booking platform, not your university housing office. Confirm the property, the contract, and who you are paying before you send any money.",
  },
  housinganywhere: {
    id: "housinganywhere",
    name: "HousingAnywhere",
    category: "Student housing",
    // TODO(affiliate): After HousingAnywhere approves a partnership, replace this URL
    // with the affiliate link and set isAffiliate to true.
    url: "https://housinganywhere.com",
    isAffiliate: false,
    summary:
      "HousingAnywhere lists furnished rooms and apartments for mid-term stays: longer than a hotel, and often shorter than a standard year-long lease. Listings come from landlords and from people moving out. Read the length of stay, what is included in the rent, and the cancellation terms on the listing.",
  },
  uniplaces: {
    id: "uniplaces",
    name: "Uniplaces",
    category: "Student housing",
    // TODO(affiliate): After Uniplaces approves a partnership, replace this URL
    // with the affiliate link and set isAffiliate to true.
    url: "https://uniplaces.com",
    isAffiliate: false,
    summary:
      "Uniplaces lists student rooms and apartments and handles the booking steps on its website. Treat each listing on its own. Check the dates, the bills, and the name of the person or company you would pay.",
  },
  wise: {
    id: "wise",
    name: "Wise",
    category: "Money transfer",
    // TODO(affiliate): After Wise approves a partnership, replace this URL
    // with the affiliate link and set isAffiliate to true.
    url: "https://wise.com",
    isAffiliate: false,
    summary:
      "Wise sends money to bank accounts abroad and can hold a balance in more than one currency. Before you confirm, the site shows the fee and the exchange rate for that transfer. Check that your university or landlord accepts a payment sent this way, and that the sender name matches what the invoice asks for.",
  },
  remitly: {
    id: "remitly",
    name: "Remitly",
    category: "Money transfer",
    // TODO(affiliate): After Remitly approves a partnership, replace this URL
    // with the affiliate link and set isAffiliate to true.
    url: "https://remitly.com",
    isAffiliate: false,
    summary:
      "Remitly sends money to other countries, including to bank accounts and, on some routes, cash pickup. The fee, the exchange rate, and the arrival time depend on the countries and the option you choose, and they are shown before you pay. Use it only when the payout method matches how your university or landlord wants to be paid.",
  },
  magoosh: {
    id: "magoosh",
    name: "Magoosh",
    category: "GRE, GMAT, SAT, and ACT prep",
    // TODO(affiliate): After Magoosh approves a partnership, replace this URL
    // with the affiliate link and set isAffiliate to true.
    url: "https://magoosh.com",
    isAffiliate: false,
    summary:
      "Magoosh offers online lessons and practice questions for the GRE, GMAT, SAT, and ACT. See the site for which exams are currently offered and what a subscription includes. A prep course does not register you for a test, and it does not issue an official score.",
  },
};

export function isAffiliatePartner(partner: {
  isAffiliate?: boolean;
}): boolean {
  return partner.isAffiliate === true;
}

/** Affiliate links are sponsored. Plain official links use the site's normal rel. */
export function partnerLinkRel(partner: { isAffiliate?: boolean }): string {
  return isAffiliatePartner(partner) ? AFFILIATE_LINK_REL : PLAIN_LINK_REL;
}

export const housingPartners = [
  partners.amber,
  partners.housinganywhere,
  partners.uniplaces,
] as const;

export const moneyTransferPartners = [partners.wise, partners.remitly] as const;

export const testPrepPartners = [partners.magoosh] as const;
