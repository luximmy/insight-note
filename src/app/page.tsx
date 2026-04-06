"use client";
import ChatComposer from "@/components/chat/ChatComposer";
import MessageList from "@/components/chat/MessageList";
import { ChatMessage } from "@/components/chat/MessageTypes";
import Sidebar from "@/components/layout/Sidebar";
export default function Home() {
  const mockMessages: ChatMessage[] = [
    {
      id: "1",
      role: "assistant",
      content: "你好",
    },
    {
      id: "12",
      role: "user",
      content: "你是谁",
    },
    {
      id: "13",
      role: "assistant",
      content: "我是ai助手",
    },
    {
      id: "14",
      role: "user",
      content: "帮我整理资料",
    },
    {
      id: "15",
      role: "assistant",
      content: "资料整理完毕",
    },
  ];
  return (
    <div className="bg-background text-foreground flex h-dvh min-h-0">
      <Sidebar />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <MessageList messages={mockMessages}></MessageList>
        <ChatComposer onSend={(content) => console.log(content)}></ChatComposer>
      </div>
    </div>
  );
}
