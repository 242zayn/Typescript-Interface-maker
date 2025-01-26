"use client";

import React from "react";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

interface CodeEditorProps {
  initialCode?: string | string[];
  onCodeChange?: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode = "",
  onCodeChange,
}) => {
  const [code, setCode] = useState(
    Array.isArray(initialCode) ? initialCode.join("\n") : initialCode
  );

  const handleChange = (value: string) => {
    setCode(value);
    if (onCodeChange) {
      onCodeChange(value);
    }
  };

  return (
    <div>
      <CodeMirror
        value={code}
        height="400px"
        theme={oneDark}
        extensions={[javascript()]}
        onChange={(value) => handleChange(value)}
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          highlightActiveLine: true,
        }}
        style={{
          borderRadius: "8px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default CodeEditor;
