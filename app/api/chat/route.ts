import { CHAT_INSTRUCTIONS } from "@/lib/chat/prompt";
import { LIMIT_REACHED_MESSAGE } from "@/lib/chat/constants";
import {
  CHAT_MODEL,
  MAX_REQUEST_BYTES,
  reviewChatTurns,
  type ChatTurn,
} from "@/lib/chat/limits";
import { chatTools } from "@/lib/chat/tools";
import { consumeChatQuota } from "@/lib/chat/usage";
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  isStepCount,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const KNOWN_TOOL_PARTS = new Set(["tool-searchSite", "tool-showContactForm"]);

function textResponse(message: string, status: number) {
  return new Response(message, {
    status,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function messageText(parts: UIMessage["parts"]): string {
  return parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
}

function sanitizeMessages(input: unknown): UIMessage[] | null {
  if (!Array.isArray(input)) {
    return null;
  }

  const messages: UIMessage[] = [];

  for (const item of input) {
    if (!item || typeof item !== "object") {
      return null;
    }

    const record = item as {
      id?: unknown;
      role?: unknown;
      parts?: unknown;
    };

    if (record.role !== "user" && record.role !== "assistant") {
      return null;
    }

    if (!Array.isArray(record.parts)) {
      return null;
    }

    const parts = record.parts.filter((part) => {
      if (!part || typeof part !== "object") {
        return false;
      }

      const type = (part as { type?: unknown }).type;

      if (type === "text") {
        return typeof (part as { text?: unknown }).text === "string";
      }

      return typeof type === "string" && KNOWN_TOOL_PARTS.has(type);
    });

    messages.push({
      id: typeof record.id === "string" ? record.id : crypto.randomUUID(),
      role: record.role,
      parts: parts as UIMessage["parts"],
    });
  }

  return messages;
}

export async function POST(request: Request) {
  let raw = "";

  try {
    raw = await request.text();
  } catch {
    return textResponse("Send a question to continue.", 400);
  }

  if (raw.length > MAX_REQUEST_BYTES) {
    return textResponse(
      "This conversation is too large. Start a new chat with a shorter question.",
      400
    );
  }

  let body: unknown;

  try {
    body = JSON.parse(raw);
  } catch {
    return textResponse("Send a question to continue.", 400);
  }

  const messages = sanitizeMessages(
    body && typeof body === "object" && "messages" in body
      ? (body as { messages?: unknown }).messages
      : null
  );

  if (!messages) {
    return textResponse("Send a question to continue.", 400);
  }

  const turns: ChatTurn[] = messages.map((message) => ({
    role: message.role,
    text: messageText(message.parts),
  }));
  const review = reviewChatTurns(turns);

  if (!review.ok) {
    return textResponse(review.message, 400);
  }

  const quota = await consumeChatQuota(request, "message");

  if (!quota.ok) {
    return textResponse(quota.message, quota.message === LIMIT_REACHED_MESSAGE ? 429 : 503);
  }

  try {
    const result = streamText({
      model: CHAT_MODEL,
      instructions: CHAT_INSTRUCTIONS,
      messages: await convertToModelMessages(messages, {
        tools: chatTools,
        ignoreIncompleteToolCalls: true,
      }),
      tools: chatTools,
      stopWhen: isStepCount(4),
      maxOutputTokens: 700,
      reasoning: "minimal",
    });

    return createUIMessageStreamResponse({
      stream: toUIMessageStream({
        stream: result.stream,
        onError: () =>
          "The assistant is unavailable right now. Please try again in a moment.",
      }),
      headers: {
        "cache-control": "no-store",
      },
    });
  } catch (error) {
    console.error(
      "Chat request failed:",
      error instanceof Error ? error.name : "unknown"
    );

    return textResponse(
      "The assistant is unavailable right now. Please try again in a moment.",
      503
    );
  }
}
