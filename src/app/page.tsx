"use client";

import Image from "next/image";
import { useState } from "react";
import Tags from "./_components/Tags";

const Home = () => {
  const [showTags, setShowTags] = useState<boolean>(true);

  const toogleTags = () => setShowTags(!showTags);

  return (
    <div>
      <div className="py-[26px] pl-4 pr-[28px] flex-row w-full flex justify-between items-center">
        <p className="font-bold text-black text-md">oneEdo</p>
        <Image
          src={"/HamburgerMenu.svg"}
          alt="hambuger menu"
          height={24}
          width={24}
          className="cursor-pointer"
        />
      </div>
      <div className="h-[452px] px-4 pt-[24px] bg-neutral-800 w-full">
        <p className="text-md text-neutral-50 font-bold mb-2">
          Access ALL government services in Edo State
        </p>
        <p className="font-medium text-neutral-50 text-xs mb-[40px]">
          Ask oneEdo, here to help you
        </p>
        <div className="flex flex-row w-full bg-neutral-100 h-[48px] items-center justify-between pr-[2px] rounded overflow-hidden mb-[40px]">
          <div className="flex flex-row items-center">
            <Image
              src="/magnifer.svg"
              alt="magnifer icon"
              width={24}
              height={24}
              className="mx-[12px]"
            />
            <input
              className="bg-neutral-100 h-full"
              placeholder="What do you need?"
              type="text"
            />
          </div>

          <button className="h-[44px] w-[44px] justify-self-end bg-button-primary rounded flex items-center justify-center ">
            <Image
              src="/arrowRight.svg"
              alt="arrow right icon"
              height={20}
              width={20}
            />
          </button>
        </div>

        {showTags && (
          <div className="mb-[40px]">
            <Tags> Money for my business</Tags>
            <Tags>Internet</Tags>
            <Tags>I need a job</Tags>
            <Tags>I have a disability</Tags>
          </div>
        )}

        <div
          className="cursor-pointer flex flex-row items-center"
          onClick={toogleTags}
          role="button"
        >
          <p className="underline text-neutral-100 font-light text-xs mr-[8px]">
            {showTags ? "Hide" : "Show"} suggestions
          </p>
          <Image src="/chevronUp.svg" alt="Chevron Up" height={20} width={20} />
        </div>
      </div>
    </div>
  );
};

export default Home;
