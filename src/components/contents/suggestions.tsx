"use client";

import { getSuggestionConfig } from "@/lib/functions";
import { PageContent, PopularSuggestionType } from "@/types/content";

type SuggestionsProp = {
  title?: string;
  showTitle?: boolean;
  pageType?: PageContent;
  items?: PopularSuggestionType[];
};

const Suggestions = ({
  items,
  showTitle = true,
  pageType = "service",
  title = "Popular suggestions",
}: SuggestionsProp) => {
  const config = getSuggestionConfig();

  return (
    <div className={`min-h-[160px] p-4 ${config[pageType].bg}`}>
      {showTitle && (
        <h6 className={`mb-3 ${config[pageType].title}`}>{title}</h6>
      )}
      <div className="flex flex-row flex-wrap -mr-3">
        {items?.map(({ title }, index) => (
          <button
            key={index}
            onClick={() => {}}
            className="h-[40px] rounded bg-primary-400 px-3 text-neutral-50 mr-3 mb-3 truncate"
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
