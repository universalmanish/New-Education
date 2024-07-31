"use client";

import { HomeShinyButton } from "./home-shiny-button";
import { TypewriterEffect } from "./ui/typewritter-effect";


export function Typewriter() {
  const words = [
    {
      text: "Enter",
      className: "text-white"
    },
    {
      text: "The",
      className: "text-white"
    },
    {
      text: "New",
      className: "text-white"
    },
    {
      text: "World",
      className: "text-white"
    },
    {
      text: "of",
      className: "text-white"
    },
    {
      text: "The",
      className: "text-white"
    },
    {
      text: "Education.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <HomeShinyButton />
      </div>
    </div>
  );
}
