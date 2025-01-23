"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function App() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-black z-40">
        <SelectValue placeholder="Select Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Inter</SelectLabel> */}
          <SelectItem value="interface">Interface</SelectItem>
          <SelectItem value="type">Type</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
