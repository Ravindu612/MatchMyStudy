"use client";

import { subscribeToBrowserSession } from "@/lib/social/browserSession";
import { messageForMessagingError } from "@/lib/social/messageValidation";
import { startDirectMessage } from "@/lib/social/messages";
import { isUserId } from "@/lib/social/postValidation";
import { loginPathFor } from "@/lib/signupRole";
import { MessageCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MessageButton({ profileId }: { profileId: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [viewerId, setViewerId] = useState<string | null | undefined>(undefined);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return subscribeToBrowserSession((session) => {
      const userId = session?.user?.id;
      setViewerId(userId && isUserId(userId) ? userId : null);
    });
  }, []);

  if (viewerId === profileId) {
    return null;
  }

  if (viewerId === undefined) {
    return <div className="h-10 w-28 animate-pulse rounded-xl bg-slate-100" />;
  }

  async function open() {
    if (!viewerId) {
      window.location.href = loginPathFor(pathname);
      return;
    }

    setBusy(true);
    setError(null);

    try {
      const conversationId = await startDirectMessage(profileId);
      router.push(`/messages/${conversationId}`);
    } catch (openError) {
      setError(messageForMessagingError(openError, "Couldn't open this conversation."));
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => void open()}
        disabled={busy}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 disabled:opacity-50"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        {busy ? "Opening..." : "Message"}
      </button>
      {error ? (
        <p className="basis-full text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </>
  );
}
