import { HeroUIProvider } from "@heroui/react";
import React from "react";

function NextUIProvider({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}

export default NextUIProvider;
