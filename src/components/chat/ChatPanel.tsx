"use client";
import ChatComposer from "@/components/chat/ChatComposer";
import MessageList from "@/components/chat/MessageList";
import { ChatMessage } from "@/components/chat/MessageTypes";
import { useEffect, useRef, useState } from "react";

function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const endRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({
      block: "end",
    });
  }, [messages.length]);
  const handleSend = async (content: string) => {
    const nextMessages: ChatMessage[] = [
      ...messages,
      {
        id: crypto.randomUUID(),
        role: "user",
        content,
      },
    ];
    setMessages(nextMessages);
    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: nextMessages }),
    });
    const data = await response.json();
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...data,
      },
    ]);
  };
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto">
        <MessageList messages={messages}></MessageList>
        <div ref={endRef} />
      </div>
      <ChatComposer onSend={handleSend}></ChatComposer>
    </div>
  );
}

export default ChatPanel;
