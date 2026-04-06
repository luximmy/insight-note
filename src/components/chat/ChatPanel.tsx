"use client";
import ChatComposer from "@/components/chat/ChatComposer";
import MessageList from "@/components/chat/MessageList";
import { ChatMessage } from "@/components/chat/MessageTypes";
import { useEffect, useRef, useState } from "react";

function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const timeoutRef = useRef<number | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  useEffect(() => {
    endRef.current?.scrollIntoView({
      block: "end",
    });
  }, [messages.length]);
  const handleSend = (content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        content,
      },
    ]);
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "收到!",
        },
      ]);
    }, 300);
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
