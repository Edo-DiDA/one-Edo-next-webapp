"use client";

import { PopularSuggestionType } from "@/types/content";

type SuggestionsProp = {
  title?: string;
  showTitle?: boolean;
  items?: PopularSuggestionType[];
};

const Suggestions = ({
  items,
  showTitle = true,
  title = "Popular suggestions",
}: SuggestionsProp) => {
  return (
    <div className="min-h-[160px] p-4 bg-primary-800">
      {showTitle && (
        <h6 className="text-xs mb-3 text-white font-light">{title}</h6>
      )}
      <div className="flex flex-row flex-wrap -mr-3">
        {items?.map(({ title }, index) => (
          <button
            key={index}
            onClick={() => {}}
            className="h-[40px] rounded bg-primary-700 px-3 text-neutral-50 mr-3 mb-3 truncate"
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
