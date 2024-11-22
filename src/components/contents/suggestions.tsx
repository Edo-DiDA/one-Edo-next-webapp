"use client";

import { PopularSuggestionType, SuggestionInfo } from "@/types/content";

type SuggestionsProp = {
  title?: string;
  showNew?: boolean;
  showTitle?: boolean;
  suggestions?: SuggestionInfo[];
  items?: PopularSuggestionType[];
};

const Suggestions = ({
  items,
  suggestions,
  showTitle = true,
  showNew = false,
  title = "Popular suggestions",
}: SuggestionsProp) => {
  return (
    <div className="min-h-[160px] p-4 bg-primary-800">
      {showTitle && (
        <h6 className="text-xs mb-3 text-white font-light">{title}</h6>
      )}
      <div className="flex flex-row flex-wrap -mr-3">
        {showNew && items
          ? items.map(({ title }, index) => (
              <button
                key={index}
                onClick={() => {}}
                className="h-[40px] rounded bg-primary-700 px-3 text-neutral-50 mr-3 mb-3 truncate"
              >
                {title}
              </button>
            ))
          : suggestions?.map(({ name, action }, index) => (
              <button
                key={index}
                onClick={action}
                className="h-[40px] rounded bg-primary-700 px-3 text-neutral-50 mr-3 mb-3"
              >
                {name}
              </button>
            ))}
      </div>
    </div>
  );
};

export default Suggestions;
