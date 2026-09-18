"use client";

import { useRouter } from "next/navigation";

type BackToUniversityProps = {
  universityName: string;
};

export default function BackToUniversity({
  universityName,
}: BackToUniversityProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="text-blue-600 font-semibold"
    >
      ← Back to {universityName}
    </button>
  );
}