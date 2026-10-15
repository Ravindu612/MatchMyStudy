"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  CONSENT_OPEN_EVENT,
  CONSENT_STORAGE_KEY,
  type ConsentChoice,
  parseConsent,
  serializeConsent,
} from "@/lib/consentConfig";

const SERVER_SNAPSHOT = "__server__";

const listeners = new Set<() => void>();

function emitConsentChange() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function readRawConsent() {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return "";
  }
}

function applyConsent(choice: ConsentChoice) {
  const ads = choice.ads ? "granted" : "denied";
  const analytics = choice.analytics ? "granted" : "denied";

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      // gtag.js reads the arguments object from dataLayer.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
  }

  window.gtag("consent", "update", {
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
    analytics_storage: analytics,
  });

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, serializeConsent(choice));
  } catch {
    // Storage can be blocked; Consent Mode is still updated for this page.
  }

  emitConsentChange();
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

export default function CookieConsent() {
  const stored = useSyncExternalStore(subscribe, readRawConsent, () => SERVER_SNAPSHOT);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    function openSettings() {
      const current = parseConsent(readRawConsent());
      setAnalytics(current?.analytics ?? false);
      setAds(current?.ads ?? false);
      setSettingsOpen(true);
    }

    window.addEventListener(CONSENT_OPEN_EVENT, openSettings);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, openSettings);
  }, []);

  const pending = stored === SERVER_SNAPSHOT;
  const choice = pending ? null : parseConsent(stored);
  const visible = !pending && (settingsOpen || choice === null);

  if (!visible) return null;

  function acceptAll() {
    applyConsent({ analytics: true, ads: true });
    setSettingsOpen(false);
  }

  function rejectNonEssential() {
    applyConsent({ analytics: false, ads: false });
    setSettingsOpen(false);
  }

  function saveSettings() {
    applyConsent({ analytics, ads });
    setSettingsOpen(false);
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-700 bg-slate-950 text-white shadow-2xl"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl space-y-2">
          <p className="font-semibold">Cookies on MatchMyStudy</p>
          <p className="text-sm leading-6 text-slate-300">
            We use cookies to measure visits and to show ads. In the
            European Economic Area, the United Kingdom, and Switzerland,
            analytics and advertising cookies stay off until you accept.
            You can change this choice at any time.{" "}
            <Link href="/privacy" className="text-blue-300 underline">
              Privacy Policy
            </Link>
          </p>

          {settingsOpen && (
            <div className="space-y-2 pt-2 text-sm text-slate-200">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                />
                <span>Analytics (analytics_storage)</span>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={ads}
                  onChange={(event) => setAds(event.target.checked)}
                />
                <span>
                  Advertising (ad_storage, ad_user_data, ad_personalization)
                </span>
              </label>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {settingsOpen ? (
            <button
              type="button"
              onClick={saveSettings}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950"
            >
              Save choices
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setAnalytics(choice?.analytics ?? false);
                setAds(choice?.ads ?? false);
                setSettingsOpen(true);
              }}
              className="rounded-xl border border-slate-500 px-4 py-2 text-sm font-semibold text-white"
            >
              Customize
            </button>
          )}
          <button
            type="button"
            onClick={rejectNonEssential}
            className="rounded-xl border border-slate-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
