import MyDrop from "@/components/MyDrop";
import { CodeBlockDemo } from "@/components/ui/CodeBlockDemo";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const page = () => {
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
        <div className="  w-1/2  ">
          <div className="flex items-center justify-between gap-4">
            <Input type="text" placeholder="Enter data name" />
            <MyDrop />
          </div>
          <Textarea className="mt-4" placeholder="Past your json code here" />
        </div>
        <div className=" w-1/2 ">
          <h3 className="relative z-10 text-lg md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-start font-sans font-bold py-2">
            Output: TypeScript{" "}
            <span className=" text-sky-600 dark:text-blue-500">Interface</span>{" "}
          </h3>
          <div className="overflow-scroll max-h-[450px]">
            <CodeBlockDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
