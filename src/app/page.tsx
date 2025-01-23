import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";
import React from "react";

const page = () => {
  return (
    <div className=" relative h-screen ">
      <ModeToggle/>
      <Hero />
    </div>
  );
};

export default page;
