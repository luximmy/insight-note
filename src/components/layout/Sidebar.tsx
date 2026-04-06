export default function Sidebar() {
  return (
    <div className="bg-muted w-64 shrink-0 p-4">
      <div className="text-foreground">
        文档列表
        <div className="flex flex-col gap-2">
          <div className="text-muted-foreground">文档1</div>
          <div className="text-muted-foreground">文档2</div>
          <div className="text-muted-foreground">文档3</div>
          <div className="text-muted-foreground">文档4</div>
          <div className="text-muted-foreground">文档5</div>
        </div>
      </div>
      <div className="text-foreground">
        会话列表
        <div className="flex flex-col gap-2">
          <div className="text-muted-foreground">会话1</div>
          <div className="text-muted-foreground">会话2</div>
          <div className="text-muted-foreground">会话3</div>
          <div className="text-muted-foreground">会话4</div>
          <div className="text-muted-foreground">会话5</div>
        </div>
      </div>
    </div>
  );
}
