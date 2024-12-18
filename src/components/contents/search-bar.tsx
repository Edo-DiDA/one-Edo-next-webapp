"use client";
import {
  ArrowRightGreen,
  ArrowRightWhite,
  WhiteMagLens,
} from "@/assets/vectors";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/search/${search}`);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleFocus = () => {
    setIsSearchBarActive(true);
  };

  const handleBlur = () => {
    if (!search.trim()) {
      setIsSearchBarActive(false);
    }
  };

  return (
    <div className="flex lg:h-[80px] lg:flex lg:items-center">
      <div
        className={`bg-top-search flex flex-row lg:h-[44px] w-full h-full items-center rounded pl-3 ${
          isSearchBarActive
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
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="What do you need?"
          className="caret-neutral-50 text-neutral-50 text-xs font-light bg-inherit placeholder-neutral-200 ml-[12px] lg:h-full h-11 flex-1 lg:w-[400px] focus:outline-none"
        />{" "}
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
      {isSearchBarActive && (
        <div
          className={`ml-2 p-3 rounded text-gray-900 hover:bg-primary-600 ${
            search ? "bg-primary-50" : "bg-primary-500"
          }`}
          onClick={handleSearch}
        >
          {search ? <ArrowRightGreen /> : <ArrowRightWhite />}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
