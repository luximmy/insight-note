"use client";
import React, { useState, KeyboardEvent, ChangeEvent } from "react";

interface ChatComposerProps {
  onSend: (content: string) => void;
}

export default function ChatComposer({ onSend }: ChatComposerProps) {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (trimmed.length === 0) return;
    onSend(trimmed);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-border bg-card flex shrink-0 gap-3 border-t p-4">
      <input
        type="text"
        className="border-input bg-background flex-1 rounded-md border px-3 py-2"
        placeholder="输入你的消息…"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="bg-primary text-primary-foreground rounded-md px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={handleSend}
        disabled={input.trim().length === 0}
      >
        发送
      </button>
    </div>
  );
}
