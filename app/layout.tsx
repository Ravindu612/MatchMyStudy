import AppFrame from "@/components/AppFrame";
import type { Metadata } from "next";
import { DEFAULT_OPEN_GRAPH, DEFAULT_TWITTER } from "@/lib/seo-meta";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        <AppFrame>{children}</AppFrame>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VE9WKS9YNG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VE9WKS9YNG');
          `}
        </Script>
      </body>
    </html>
  );
}
