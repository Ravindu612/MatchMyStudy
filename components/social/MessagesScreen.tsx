"use client";

import ConversationList from "@/components/social/ConversationList";
import ConversationThread from "@/components/social/ConversationThread";
import { useConversations } from "@/components/social/useConversations";
import { usePathname } from "next/navigation";

export default function MessagesScreen({ conversationId }: { conversationId?: string }) {
  const pathname = usePathname() ?? "/messages";
  const inbox = useConversations();

  return (
    <div className="grid gap-4 lg:h-[calc(100dvh-6.5rem)] lg:grid-cols-[320px_minmax(0,1fr)]">
      <div className={conversationId ? "hidden min-h-0 lg:block" : "min-h-[70vh] lg:min-h-0"}>
        <ConversationList
          viewerId={inbox.viewerId}
          conversations={inbox.conversations}
          status={inbox.status}
          error={inbox.error}
          activeId={conversationId}
          pathname={pathname}
        />
      </div>
      <div className={conversationId ? "min-h-0" : "hidden min-h-0 lg:block"}>
        {conversationId ? (
          <ConversationThread
            key={conversationId}
            conversationId={conversationId}
            viewerId={inbox.viewerId}
            pathname={pathname}
          />
        ) : (
          <section className="hidden h-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center lg:flex">
            <div>
              <h1 className="text-lg font-bold text-slate-900">Your messages</h1>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Choose a conversation, or message someone from their profile.
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
