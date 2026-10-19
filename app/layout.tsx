import AppFrame from "@/components/AppFrame";
import CookieConsent from "@/components/CookieConsent";
import type { Metadata } from "next";
import { DEFAULT_OPEN_GRAPH, DEFAULT_TWITTER } from "@/lib/seo-meta";
import {
  ADSENSE_SCRIPT_SRC,
  buildConsentHeadScript,
  GTAG_SCRIPT_SRC,
} from "@/lib/googleHeadScript";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.matchmystudy.com"),
  title: "Study Abroad: Find Universities, Programs & Consultants | MatchMyStudy",
  description:
    "Find the right country, university, study program, and education consultant for your study abroad journey with MatchMyStudy.",
  // Defaults for pages that don't set their own share tags.
  // (No canonical here: every page would inherit it.)
  openGraph: DEFAULT_OPEN_GRAPH,
  twitter: DEFAULT_TWITTER,
  other: {
    'impact-site-verification':
      'd2209eba-7be8-49d2-bb97-0eba8c811381',
  },
};

/**
 * Consent defaults must run before gtag.js and adsbygoogle.js execute.
 * React 19 hoists `<script async src>` ahead of an inline head script, and
 * `next/script` preloads external `beforeInteractive` URLs into `<head>`
 * first. This blocking inline script queues the defaults, then inserts both
 * libraries so neither URL can start loading before that.
 */
function buildOrderedGoogleHeadScript() {
  return `${buildConsentHeadScript()}
(function () {
  var parent = document.head || document.documentElement;
  var ga = document.createElement('script');
  ga.async = true;
  ga.id = 'google-analytics';
  ga.src = ${JSON.stringify(GTAG_SCRIPT_SRC)};
  var ads = document.createElement('script');
  ads.async = true;
  ads.id = 'google-adsense';
  ads.src = ${JSON.stringify(ADSENSE_SCRIPT_SRC)};
  ads.crossOrigin = 'anonymous';
  parent.appendChild(ga);
  parent.appendChild(ads);
})();`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          id="google-consent"
          dangerouslySetInnerHTML={{ __html: buildOrderedGoogleHeadScript() }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AppFrame>{children}</AppFrame>
        <CookieConsent />
      </body>
    </html>
  );
}
