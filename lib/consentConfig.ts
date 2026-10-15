/**
 * First-party cookie banner + Google Consent Mode v2.
 *
 * AdSense Privacy & messaging (Google's certified CMP) only shows a
 * message after one is published for an approved AdSense account. This
 * site was rejected on 12 October 2026, so the banner has to work before
 * that message exists. The Consent Mode defaults in the document head
 * stay either way; a certified CMP can replace the banner later.
 */

export const ADSENSE_PUBLISHER_ID = "pub-4896816042515108";
export const ADSENSE_CLIENT = "ca-pub-4896816042515108";
export const GA_MEASUREMENT_ID = "G-VE9WKS9YNG";
export const CONSENT_STORAGE_KEY = "mms-consent-v1";
export const CONSENT_OPEN_EVENT = "mms-open-cookie-settings";

/**
 * EEA (EU 27 + Iceland, Liechtenstein, Norway), the UK (GB), and
 * Switzerland. Google's EU user-consent policy covers all three.
 * Region codes are ISO 3166-1 alpha-2.
 */
export const EEA_UK_CH_REGIONS = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "IS",
  "LI",
  "NO",
  "GB",
  "CH",
] as const;

export type ConsentChoice = {
  analytics: boolean;
  ads: boolean;
};

export function parseConsent(raw: string | null): ConsentChoice | null {
  if (!raw) return null;

  try {
    const value = JSON.parse(raw) as {
      analytics?: unknown;
      ads?: unknown;
    };

    if (typeof value.analytics !== "boolean" || typeof value.ads !== "boolean") {
      return null;
    }

    return { analytics: value.analytics, ads: value.ads };
  } catch {
    return null;
  }
}

export function serializeConsent(choice: ConsentChoice) {
  return JSON.stringify({
    analytics: choice.analytics,
    ads: choice.ads,
    updatedAt: new Date().toISOString(),
  });
}
