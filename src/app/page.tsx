import Sidebar from "@/components/layout/Sidebar";
import ChatPanel from "@/components/chat/ChatPanel";

export default function Home() {
  return (
    <div className="bg-background text-foreground flex h-dvh min-h-0">
      <Sidebar />
      <ChatPanel />
    </div>
  );
}
