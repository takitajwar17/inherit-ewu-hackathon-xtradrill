"use client";
import { CODE_SNIPPETS } from "@/app/constants";
import { generateReview } from "@/lib/actions/question";
import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleReview = () => {
    console.log(value);
    generateReview(value);
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  useEffect(() => {
    const resizer = document.querySelector(".cursor-ew-resize");
    const leftPanel = resizer.previousElementSibling;
    const rightPanel = resizer.nextElementSibling;

    const handleMouseDown = (event) => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event) => {
      const newWidth = event.clientX - leftPanel.getBoundingClientRect().left;
      leftPanel.style.width = `${newWidth}px`;
      rightPanel.style.width = `calc(100% - ${newWidth}px - 0.25rem)`; // Adjust for the width of the resizer (0.25rem = 1px)
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    resizer.addEventListener("mousedown", handleMouseDown);

    return () => {
      resizer.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div className="flex flex-col bg-white">
      <div className="h-3/5 p-4 bg-gray-200 shadow-md">
        <div className="flex flex-row gap-6">
          <LanguageSelector language={language} onSelect={onSelect} />
          <button
            className="border-blue-600 border-2 text-blue-600 px-0.5 py-1 mb-2 rounded hover:bg-blue-700 hover:text-white transition duration-200"
            onClick={handleReview}
          >
            Code Review
          </button>
        </div>
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
          }}
          height="75vh"
          theme="vs-light"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(newValue) => {
            console.log(newValue);
            setValue(newValue);
          }}
        />
      </div>
      <Output editorRef={editorRef} language={language} />
    </div>
  );
};

export default CodeEditor;
