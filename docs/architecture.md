# InsightNote 技术架构设计

## 1. 核心链路（真 RAG）

- **解析层**：服务端接收 PDF（如 Server Action / Route Handler）→ 抽取**可检索文本**。**MVP 假设文本型 PDF**；非文本层 PDF 不在范围内。
- **分块层**：文本 → 带 overlap 的 chunks；块大小与策略在代码中有显式约定，便于调参与面试讲解。
- **向量层**：chunk → Embedding API → 写入**持久化向量数据库**（如 Supabase pgvector / Pinecone 等，选型以仓库实现为准）。
- **检索层**：用户问题 → query embedding → **top-k 语义检索** → 得到与问题最相关的若干 chunk。
- **生成层**：将 **检索到的 chunk 文本**（及必要系统提示）注入大模型调用；回答须可追溯到这些片段（PRD 要求可感知佐证）。

> **反模式（禁止冒充真 RAG）**：只做 Embedding 入库，但对话时不查库、不把检索结果传入模型。

## 2. 交互层（Generative UI）

- 使用 **Vercel AI SDK** 与模型通信（`useChat`、Tool Calling、`streamUI` 等以实际选型为准）。
- **Tools**：例如图表 Tool 返回**结构化 JSON**（数据点、轴标签等），由前端 **React 组件**（如 Recharts）渲染；MVP 至少 **图表 1 类**；表格类可放 V1.1。

## 3. 设计语言

- **Tailwind CSS + Shadcn UI**：统一交互与无障碍基线。
- **Framer Motion**（可选）：对话与组件出现的动效，属加分项。

## 4. 与 PRD 的对应关系

| PRD 要求                | 架构落点                                             |
| ----------------------- | ---------------------------------------------------- |
| 真 RAG 四要素           | §1 解析 → 分块 → 向量 → 检索 → 生成                  |
| 至少一种生成式 UI（图） | §2 图表 Tool + 前端组件                              |
| 5 分钟上手              | 部署与配置文档、单 PDF 单会话 MVP 路径（非本节详述） |
