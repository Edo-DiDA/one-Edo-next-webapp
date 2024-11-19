"use client";

import { useState } from "react";

import Tag from "./tag";
import { ChevronDownWhite, ChevronUp } from "@/assets/vectors";

const tags: string[] = [
  "Money for my business",
  "Internet",
  "I need a job",
  "I have a disability",
];

const Tags = () => {
  const [showTags, setShowTags] = useState<boolean>(true);

  const toogleTags = () => setShowTags(!showTags);

  return (
    <div>
      {showTags && (
        <div className="mb-[40px]">
          {tags.map((name, index) => (
            <Tag key={index}>{name}</Tag>
          ))}
        </div>
      )}

      <div
        className="md:hidden cursor-pointer pb-[40px] flex flex-row items-center"
        onClick={toogleTags}
        role="button"
      >
        <p className="underline text-neutral-100 font-light text-xs mr-[8px]">
          {showTags ? "Hide" : "Show"} suggestions
        </p>
        {showTags ? <ChevronDownWhite /> : <ChevronUp />}
      </div>
    </div>
  );
};

export default Tags;
