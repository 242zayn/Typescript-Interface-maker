import React from "react";
import HoverBorderGradientDemo from "./HoverBorderGradientDemo";

const Hero = () => {
  return (
    <div>
      <div className=" h-screen w-full  relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-5xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            <span className=" text-sky-600 dark:text-blue-500">Typescript</span>{" "}
            Interfaces Generate for Any Data Structure
          </h1>
          <h2 className=" max-w-4xl m-auto relative z-10 text-lg md:text-xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            {" "}
            Say goodbye to tedious manual coding! Use our intuitive tool to
            create precise, type-safe interfaces that elevate your TypeScript
            projects.
          </h2>

          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            ⚡ Features Easy-to-use interface generator Customizable field types
            and constraints JSON-to-interface conversion in seconds
          </p>
          <div className="flex justify-center items-center gap-5">
            <HoverBorderGradientDemo
              content="Get started"
              bg_dark="bg-black"
              bg_light="bg-white"
              text_dark="text-white"
              text_light="text-black"
              AceternityLogos={true}
            />
            <HoverBorderGradientDemo
              content="Contect us &rarr; "
              bg_dark="bg-black"
              bg_light="bg-white"
              text_dark="text-white"
              text_light="text-black"
              AceternityLogos={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
