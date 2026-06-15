import Sidebar from "../components/sidebar/Sidebar";
import Chat from "../components/chat/chat";
// Fallback inline CodeEditor to avoid missing module import during build
function CodeEditor() {
  return (
    <div className="h-full flex items-center justify-center text-sm text-muted-foreground">Editor</div>
  );
}
import Preview from "../components/preview/Preview";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-64">
        <Sidebar />
      </div>

      <div className="flex-1">
        <CodeEditor />
      </div>

      <div className="w-96 border-l">
        <Chat />
      </div>

      <div className="w-96 border-l">
        <Preview />
      </div>
    </div>
  );
}