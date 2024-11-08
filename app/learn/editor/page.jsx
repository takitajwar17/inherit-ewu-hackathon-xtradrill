import React from "react";
import CodeEditor from "@/components/ui/CodeEditor";

const EditorPage = () => {
  return (
    <div className="h-full bg-gray-200">
      <div className="min-h-screen bg-[#0f0a19] text-gray-500 px-6 py-8">
        <CodeEditor />
      </div>
    </div>
  );
};

export default EditorPage;
