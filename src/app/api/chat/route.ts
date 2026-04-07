interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  const body = (await req.json()) as { messages?: Message[] };
  const messages = body.messages ?? [];

  const modelMessages = messages;
  const lastUserMessage =
    [...modelMessages].reverse().find((message) => message.role === "user")?.content ?? "你好";

  return Response.json({
    role: "assistant",
    content: `你刚刚说的是：${String(lastUserMessage)}`,
  });
}
