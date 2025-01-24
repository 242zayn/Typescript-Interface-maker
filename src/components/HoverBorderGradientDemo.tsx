"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ThemeButtonType } from "@/app/types/types";
import Link from "next/link";

const HoverBorderGradientDemo = ({
  content,
  bg_dark,
  text_dark,
  text_light,
  AceternityLogos,
  herf,
  onclick,
}: ThemeButtonType) => {
  return (
    <div className="mt-10 flex justify-center text-center ">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        onClick={onclick}
        className={`dark:${bg_dark} ${bg_dark} ${text_dark} dark:${text_light} flex items-center space-x-2 `}
      >
        <Link
          href={herf || "#"}
          className={` ${text_light} dark:${text_dark} text-sm md:text-sm  font-medium items-center justify-center `}
        >
          {content}
        </Link>
        {AceternityLogos ? <AceternityLogo /> : ""}
      </HoverBorderGradient>
    </div>
  );
};
export default HoverBorderGradientDemo;

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
