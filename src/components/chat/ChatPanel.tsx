"use client";
import ChatComposer from "@/components/chat/ChatComposer";
import MessageList from "@/components/chat/MessageList";
import { useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";

function ChatPanel() {
  const { messages, sendMessage } = useChat({
    transport: new TextStreamChatTransport({
      api: "/api/chat",
    }),
  });
  const endRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({
      block: "end",
    });
  }, [messages.length]);
  const handleSend = async (content: string) => {
    await sendMessage({
      text: content,
    });
  };
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto">
        <MessageList
          messages={messages
            .filter((m) => m.role === "user" || m.role === "assistant")
            .map((message) => ({
              id: message.id,
              role: message.role === "assistant" ? "assistant" : "user",
              content: message.parts
                .map((part) => (part.type === "text" ? part.text : ""))
                .join(""),
            }))}
        ></MessageList>
        <div ref={endRef} />
      </div>
      <ChatComposer onSend={handleSend}></ChatComposer>
    </div>
  );
}

export default ChatPanel;
