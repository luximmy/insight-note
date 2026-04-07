import { UIMessage } from "ai";

export async function POST(req: Request) {
  const body = (await req.json()) as { messages: UIMessage[] };
  const messages = body.messages ?? [];

  const lastUser = [...messages].reverse().find((message) => message.role === "user");

  const lastUserMessage =
    lastUser?.parts
      .filter((p) => p.type === "text")
      .map((p) => p.text)
      .join("") || "你好";

  const text = `你刚刚说的是：${String(lastUserMessage)}`;
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      let i = 0;
      const timer = setInterval(() => {
        if (i >= text.length) {
          clearInterval(timer);
          controller.close();
          return;
        }
        controller.enqueue(encoder.encode(text[i]));
        i += 1;
      }, 20);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
