import type { Metadata } from "next";
import DevelopmentNotice from "@/components/languageStudy/DevelopmentNotice";

// Language Study is still under development, so keep every page in this
// section out of Google (links are still followed). Child pages inherit
// this unless they set their own `robots`.
// AT LAUNCH: remove this `robots` setting AND add
// `...languageStudySitemapPaths()` back to app/sitemap.ts.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function LanguageStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DevelopmentNotice />
      {children}
    </>
  );
}
