/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";

import { CodeBlock } from "@/components/ui/code-block";

import { CodeBlockDemoProps } from "@/app/types/types";

export function CodeBlockDemo({ code }: CodeBlockDemoProps) {
  const [codes, setCode] = useState(`cexport interface Weather {
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

  return (
    <div className="max-w-3xl  mx-auto w-full">
      <CodeBlock
        language="tsx"
        filename="DummyComponent.jsx"
        highlightLines={[9, 13, 14, 18]}
        code={code}
      />
    </div>
  );
}
