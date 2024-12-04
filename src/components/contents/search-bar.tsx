"use client";
import { WhiteMagLens } from "@/assets/vectors";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = ({}) => {
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
    <div className="bg-top-search flex flex-row w-full h-full items-center rounded pl-3">
      <WhiteMagLens />
      <input
        type="text"
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
        onKeyDown={handleSearchKeyDown}
        placeholder="What do you need?"
        className="caret-neutral-50 text-neutral-50 text-xs font-light bg-inherit placeholder-neutral-200 ml-[12px] h-full w-full lg:w-[400px]  focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
