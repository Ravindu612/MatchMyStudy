"use client";

import ConversationList from "@/components/social/ConversationList";
import { useConversations } from "@/components/social/useConversations";
import { usePathname } from "next/navigation";

export default function ConversationRail() {
  const pathname = usePathname() ?? "/feed";
  const inbox = useConversations();

  return (
    <div className="max-h-[calc(100vh-6rem)]">
      <ConversationList
        viewerId={inbox.viewerId}
        conversations={inbox.conversations}
        status={inbox.status}
        error={inbox.error}
        pathname={pathname}
      />
    </div>
  );
}
