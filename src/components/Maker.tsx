/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";

const Home = () => {
  const [interfaceName, setInterfaceName] = useState("Root");
  const [jsonInput, setJsonInput] = useState(`{
  "id": 1,
  "name": "John Doe",
  "isActive": true,
  "price": 99.99,
  "tags": ["developer", "typescript", "nextjs"],
  "details": {
    "address": "123 Main St",
    "city": "New York",
    "zipCode": 10001,
    "preferences": {
      "theme": "dark",
      "notifications": false
    }
  },
  "metadata": null,
  "createdAt": "2023-01-01T00:00:00Z"
}`);
  const [generatedInterface, setGeneratedInterface] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const generateInterface = () => {
    console.log(generatedInterface);
    try {
      const parsedJson = JSON.parse(jsonInput);
      const interfaces: string[] = [];

      const getType = (value: any): string => {
        if (Array.isArray(value)) {
          if (value.length === 0) return "any[]";
          return `${getType(value[0])}[]`;
        }
        if (value === null) return "null";
        if (typeof value === "object") return "object";
        return typeof value;
      };

      const generateInterfaceString = (obj: any, name: string): void => {
        let interfaceString = `export interface ${name} {\n`;
        Object.keys(obj).forEach((key) => {
          const value = obj[key];
          if (value && typeof value === "object" && !Array.isArray(value)) {
            const subInterfaceName = key.charAt(0).toUpperCase() + key.slice(1);
            generateInterfaceString(value, subInterfaceName);
            interfaceString += `  ${key}: ${subInterfaceName};\n`;
          } else {
            const type = getType(value);
            interfaceString += `  ${key}: ${type};\n`;
          }
        });
        interfaceString += `}\n`;
        interfaces.push(interfaceString);
      };

      generateInterfaceString(parsedJson, interfaceName);
      setGeneratedInterface(interfaces.reverse().join("\n"));
      setCopySuccess(false); // Reset copy status after new generation
    } catch (error) {
      alert("Invalid JSON input. Please check your JSON and try again.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedInterface).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">
        JSON to TypeScript Interface Generator
      </h1>
      <label className="block mb-2 text-lg font-medium">
        Interface Name:
        <input
          type="text"
          value={interfaceName}
          onChange={(e) => setInterfaceName(e.target.value)}
          className="block w-full p-2 mt-1 border rounded"
          placeholder="Enter interface name"
        />
      </label>
      <label className="block mb-2 text-lg font-medium">
        Paste JSON:
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          rows={10}
          className="block w-full p-2 mt-1 border rounded"
          placeholder="Paste your JSON here"
        />
      </label>
      <button
        onClick={generateInterface}
        className="px-4 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Generate Interface
      </button>
      {generatedInterface && (
        <div className="mt-8 p-4 bg-gray-100 border rounded w-full">
          <h2 className="text-xl font-bold mb-4">
            Generated TypeScript Interface
          </h2>
          <textarea
            value={generatedInterface}
            readOnly
            className="w-full p-2 border rounded bg-gray-200 cursor-text"
            rows={generatedInterface.split("\n").length}
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              {copySuccess ? "Copied!" : "Copy to Clipboard"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
