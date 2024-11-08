"use client";
import React, { useRef, useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { io } from "socket.io-client";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { CODE_SNIPPETS } from "@/app/constants";
import Output from "@/components/ui/Output";

const CodeEditor = ({ roomId }) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const socketRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    // Initialize Socket.IO client
    socketRef.current = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL, {
      query: { roomId },
    });

    // Listen for code updates from other collaborators
    socketRef.current.on("codeUpdate", (newCode) => {
      setCode(newCode);
    });

    // Cleanup on component unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const handleEditorChange = (newCode) => {
    setCode(newCode);
    // Emit code updates to other collaborators
    socketRef.current.emit("codeUpdate", newCode);
  };

  const onSelect = (language) => {
    setLanguage(language);
    setCode(CODE_SNIPPETS[language]);
  };

  return (
    <div className="h-full w-full border border-gray-300 rounded">
      <LanguageSelector language={language} onSelect={onSelect} />
      <Editor
        height="90vh"
        defaultLanguage={language}
        defaultValue={CODE_SNIPPETS[language]}
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
        onMount={(editor) => (editorRef.current = editor)}
      />
      <Output editorRef={editorRef} language={language} />
    </div>
  );
};

export default CodeEditor;
