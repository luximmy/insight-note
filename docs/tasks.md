# InsightNote 开发进度追踪

> **MVP 判据**以 `docs/prd.md` 第 2、4、6 节为准。下表中「MVP 必达」须先于「加分项」完成。

## Phase 1: 基础架构与 UI 骨架 (MVP 必达)

- [ ] **项目初始化与设计规范**
  - [ ] 配置 Tailwind CSS 与全局设计变量（版本以仓库实际为准，参见 `package.json`）
  - [ ] 封装基础响应式 Layout（侧边栏 + AI 对话区）
  - [ ] 按需集成 Shadcn UI 核心组件（Button, ScrollArea, Input 等）
- [ ] **对话界面 (Chat UI)**
  - [ ] 沉浸式对话流布局
  - [ ] AI / 用户消息气泡（AI 侧支持 Markdown）
  - [ ] （加分）Framer Motion 交互动效

## Phase 2: AI 与真 RAG 链路 (MVP 必达)

- [ ] **Vercel AI SDK**
  - [ ] `/api/chat`（或等价 Route Handler）流式对话
  - [ ] 前端 `useChat`（或项目选定 API）接入
- [ ] **RAG 文件处理**
  - [ ] PDF 上传 UI
  - [ ] 服务端解析 PDF 为文本 → 分块 → Embedding → 写入向量库
  - [ ] 对话请求内：对用户问题检索 top-k → 将片段注入 prompt / 工具上下文
- [ ] **可观测性（满足 PRD「真 RAG」第 4 条）**
  - [ ] 开发或产品侧可展示「本次命中的片段」或等价佐证

## Phase 3: Generative UI — MVP 与加分项

### MVP 必达

- [ ] **工具协议**：至少定义并实现 **1 个图表类 Tool**（如趋势/序列数据 → `AnalysisChart`）
- [ ] **组件**：图表组件 + AI 结构化输出对接，端到端可演示（对应 PRD 验收第 3 条）

### V1.1 / 加分（不阻塞 MVP）

- [ ] **表格类 Tool + `ComparisonTable`（财务对比表）**
- [ ] Skeleton → Content 的 View Transition 动效
- [ ] 扩展工具集（Financial Analysis 等命名以最终实现为准）

## Phase 4: 部署与面试准备

- [ ] 部署至 Vercel（及环境变量、向量库连通性）
- [ ] 项目总结与面试话术（与 PRD §7 对齐）
