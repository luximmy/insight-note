import { ChatMessage } from "./MessageTypes";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: ChatMessage;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "border-border max-w-[75%] rounded-lg border px-3 py-2 text-sm leading-relaxed",
          message.role === "user"
            ? "bg-primary text-primary-foreground"
            : "bg-card text-card-foreground",
        )}
      >
        {message.content}
      </div>
    </div>
  );
}
