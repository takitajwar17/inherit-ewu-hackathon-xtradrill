import { useState } from "react";
import { executeCode } from "@/app/api/Piston/api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      alert("An error occurred: " + (error.message || "Unable to run code"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md">
      <span className="mb-2 text-black text-lg font-semibold">Output</span>
      <div className="flex justify-end mb-4">
        <button
          className="border border-blue-500 bg-blue-500 px-4 py-2 rounded hover:bg-blue-400 text-white transition duration-200"
          disabled={isLoading}
          onClick={runCode}
        >
          {isLoading ? "Running..." : "Run Code"}
        </button>
      </div>
      <div
        className={`h-75vh p-2 border rounded-md ${
          isError ? "border-red-500" : "border-gray-300"
        } bg-gray-100`}
      >
        {output
          ? output.map((line, i) => (
              <p key={i} className="text-black">
                {line}
              </p>
            ))
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
