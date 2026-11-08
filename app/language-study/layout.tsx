import DevelopmentNotice from "@/components/languageStudy/DevelopmentNotice";

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
