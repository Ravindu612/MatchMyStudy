import MessagesScreen from "@/components/social/MessagesScreen";
import SocialShell from "@/components/social/SocialShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversation | MatchMyStudy",
  robots: { index: false, follow: false },
};

type Props = {
  params: Promise<{
    conversationId: string;
  }>;
};

export default async function ConversationPage({ params }: Props) {
  const { conversationId } = await params;

  return (
    <SocialShell>
      <MessagesScreen conversationId={conversationId} />
    </SocialShell>
  );
}
