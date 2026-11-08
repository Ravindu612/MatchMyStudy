import { LANGUAGE_STUDY_DEVELOPMENT_NOTICE } from "@/lib/languageStudy/developmentNotice";

/**
 * Persistent notice for the Language Study section.
 * It has no close control, so it stays visible on the hub and on direct links.
 */
export default function DevelopmentNotice() {
  return (
    <div className="border-b border-amber-300 bg-amber-100 text-amber-950">
      <p
        role="note"
        className="mx-auto max-w-5xl px-4 py-4 text-base font-medium leading-7 sm:px-6"
      >
        {LANGUAGE_STUDY_DEVELOPMENT_NOTICE}
      </p>
    </div>
  );
}
