"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const ChatWidget = dynamic(() => import("@/components/chat/ChatWidget"));

export default function ChatWidgetGate() {
  const pathname = usePathname() ?? "";

  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return null;
  }

  return <ChatWidget />;
}
