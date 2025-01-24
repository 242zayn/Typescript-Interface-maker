/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import CodeEditor from "@/components/CodeEditor";
import MyDrop from "@/components/MyDrop";
import { CodeBlockDemo } from "@/components/ui/CodeBlockDemo";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { initialCode } from "../data/data";
import HoverBorderGradientDemo from "@/components/HoverBorderGradientDemo";

const Page = () => {
  const [interfaceName, setInterfaceName] = useState("");
  const [interfaceType, setInterfaceType] = useState("");
  const [initialCode, setInitialCode] = useState(`
    {
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
  const [generatedInterface, setGeneratedInterface] =
    useState(`cexport interface Weather {
  id: number;
  name: string;
  isActive: boolean;
  price: number;
  tags?: (string)[] | null;
  details: Details;
  metadata?: null;
  createdAt: string;
}
export interface Details {
  address: string;
  city: string;
  zipCode: number;
  preferences: Preferences;
}
export interface Preferences {
  theme: string;
  notifications: boolean;
}

`);

  const handleCodeChange = (code: string) => {
    setInitialCode(code);
    console.log("Updated Code:", code);
  };
  const handleTypeChange = (value: string) => {
    setInterfaceType(value);
  };
  const generateInterface = () => {
    console.log(generatedInterface);
    try {
      const parsedJson = JSON.parse(initialCode);
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
    } catch (error) {}
  };

  return (
    <div className="">
      <div className=" w-full  relative flex flex-col items-center antialiased pt-10 ">
        <div className="max-w-5xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Generate your Data Structure in{" "}
            <span className=" text-sky-600 dark:text-blue-500">Interface</span>{" "}
          </h1>
        </div>
      </div>
      <div className=" w-full flex px-10 pt-[50px] gap-3 ">
        <div className="  w-1/2   ">
          <div className="flex items-center  justify-between gap-4 pb-2">
            <Input
              type="text"
              defaultValue="Wather"
              value={interfaceName}
              placeholder="Enter data name"
              onChange={(e) => setInterfaceName(e.target.value)}
            />
            <MyDrop value={interfaceType} onValueChange={handleTypeChange} />
          </div>
          <CodeEditor
            initialCode={initialCode}
            onCodeChange={handleCodeChange}
          />
          <HoverBorderGradientDemo
            content="Genrate interface"
            bg_dark="bg-black"
            bg_light="bg-white"
            text_dark="text-white"
            text_light="text-black"
            AceternityLogos={true}
            onclick={generateInterface}
          />
        </div>
        <div className=" w-1/2 ">
          <h3 className="relative z-10 text-lg md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-start font-sans font-bold pb-3">
            Output: TypeScript{" "}
            <span className=" text-sky-600 dark:text-blue-500">Interface</span>{" "}
          </h3>
          <div className="overflow-scroll max-h-[400px]">
            <CodeBlockDemo code={generatedInterface} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
