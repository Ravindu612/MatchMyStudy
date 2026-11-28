import ProgressProvider from "@/components/languageStudy/ProgressProvider";

export default function LanguageStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProgressProvider>{children}</ProgressProvider>;
}
