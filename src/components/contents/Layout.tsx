"use client";
import { WhiteMagLens } from "@/assets/vectors";
import Header from "@/components/component/header";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ContentLayoutProp = {
  children: React.ReactNode;
};

const ContentLayout = ({ children }: ContentLayoutProp) => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (search.trim()) {
        router.push(`/search/${search}`);
      }
    }
  };

  return (
    <div className="relative bg-neutral-50 ">
      <div className="sticky lg:px-20 xl:px-40 pt-6 top-0 left-0 right-0 bg-primary-600 md:flex md:border-b-[1px] md:border-neutral-800 md:items-center md:justify-between ">
        <Header />
        <div className="h-[64px] px-4 py-2 border-b-[1px] md:border-none border-neutral-800">
          <div
            className={`bg-top-search flex flex-row w-full h-full items-center rounded pl-3 ${
              search
                ? "border-b-2 border-neutral-50"
                : "border-b border-transparent"
            }`}
          >
            <WhiteMagLens />
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="What do you need?"
              className="caret-neutral-50 text-neutral-50 text-xs font-light bg-transparent placeholder-neutral-200 ml-[12px] h-full w-full lg:w-[400px] focus:outline-none "
            />
            {search && (
              <button
                onClick={() => handleSearchChange("")}
                className="flex items-center justify-center w-6 h-6 bg-neutral-50 text-neutral-800 rounded-full mr-2 hover:bg-neutral-200"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ContentLayout;
