"use client";

import { getSuggestionConfig, getTopSectionConfig } from "@/lib/functions";
import { PageContent, PopularSuggestionType } from "@/types/content";

type SuggestionsProp = {
  title?: string;
  showTitle?: boolean;
  pageType?: PageContent;
  items?: PopularSuggestionType[];
  body?: string;
};

const Suggestions = ({
  items,
  body,
  showTitle = true,
  pageType = "service",
  title = "Popular suggestions",
}: SuggestionsProp) => {
  const config = getSuggestionConfig();
  const bodyConfig = getTopSectionConfig();
  return (
    <div
      className={`h-auto p-4 md:py-20 lg:pr-20  xl:pr-48 ${config[pageType].bg}`}
    >
      {showTitle && (
        <h6 className={`mb-3 ${config[pageType].title}`}>{title}</h6>
      )}
      {body && (
        <p
          className={`hidden  mt-2 text-sm   lg:text-2xl font-semibold md:block lg:pb-[19px] ${bodyConfig[pageType].little}`}
        >
          {body}
        </p>
      )}
      <div className="flex flex-row flex-wrap -mb-3 -mr-3">
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
