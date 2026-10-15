import {
  ADSENSE_CLIENT,
  CONSENT_STORAGE_KEY,
  EEA_UK_CH_REGIONS,
  GA_MEASUREMENT_ID,
} from "@/lib/consentConfig";
import {
  ADS_DENY_EXACT,
  ADS_DENY_PREFIXES,
  getIndexableProgramSlugs,
  getIndexableUniversitySlugs,
} from "@/lib/contentQuality";

function jsonForInlineScript(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

/**
 * Runs from a blocking inline script in <head>, before gtag.js and
 * adsbygoogle.js. Consent defaults are queued first. Thin and empty
 * pages pause AdSense requests so auto ads cannot fill there.
 */
export function buildConsentHeadScript() {
  const regions = jsonForInlineScript(EEA_UK_CH_REGIONS);
  const richPrograms = jsonForInlineScript([...getIndexableProgramSlugs()]);
  const richUniversities = jsonForInlineScript([
    ...getIndexableUniversitySlugs(),
  ]);
  const denyExact = jsonForInlineScript(ADS_DENY_EXACT);
  const denyPrefixes = jsonForInlineScript(ADS_DENY_PREFIXES);
  const storageKey = jsonForInlineScript(CONSENT_STORAGE_KEY);
  const gaId = jsonForInlineScript(GA_MEASUREMENT_ID);

  return `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500,
  region: ${regions}
});
gtag('consent', 'default', {
  ad_storage: 'granted',
  analytics_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  functionality_storage: 'granted',
  security_storage: 'granted'
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
try {
  var stored = localStorage.getItem(${storageKey});
  if (stored) {
    var choice = JSON.parse(stored);
    var ads = choice.ads === true ? 'granted' : 'denied';
    var analytics = choice.analytics === true ? 'granted' : 'denied';
    gtag('consent', 'update', {
      ad_storage: ads,
      ad_user_data: ads,
      ad_personalization: ads,
      analytics_storage: analytics
    });
  }
} catch (e) {}
gtag('js', new Date());
gtag('config', ${gaId});
(function () {
  var richPrograms = new Set(${richPrograms});
  var richUniversities = new Set(${richUniversities});
  var denyExact = new Set(${denyExact});
  var denyPrefixes = ${denyPrefixes};
  var path = location.pathname || '/';
  try { path = decodeURIComponent(path); } catch (e) {}
  path = path.split('?')[0].split('#')[0];
  if (path.length > 1 && path.charAt(path.length - 1) === '/') path = path.slice(0, -1);
  if (!path) path = '/';
  var blocked = denyExact.has(path);
  if (!blocked) {
    for (var i = 0; i < denyPrefixes.length; i++) {
      var prefix = denyPrefixes[i];
      if (path === prefix || path.indexOf(prefix + '/') === 0) {
        blocked = true;
        break;
      }
    }
  }
  var program = path.match(/^\\/programs\\/([^/]+)$/);
  if (program && !richPrograms.has(program[1])) blocked = true;
  var university = path.match(/^\\/universities\\/([^/]+)$/);
  if (university && !richUniversities.has(university[1])) blocked = true;
  window.adsbygoogle = window.adsbygoogle || [];
  if (blocked) window.adsbygoogle.pauseAdRequests = 1;
})();
`.trim();
}

export const ADSENSE_SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
export const GTAG_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
