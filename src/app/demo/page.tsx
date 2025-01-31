import { DialogDemo } from "@/components/DialogDemo";
import Joblist from "@/components/Joblist";
import React from "react";

const page = () => {
  return (
    <div className="w-full   antialiased pt-10">
      <div className=" max-w-[90%] m-auto  ">
        <div className="max-w-5xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Generate your Data Structure in{" "}
            <span className=" text-sky-600 dark:text-blue-500">Interface</span>{" "}
          </h1>
        </div>
        <DialogDemo />
        <div className="w-full py-3">
          <div>
            <Joblist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
