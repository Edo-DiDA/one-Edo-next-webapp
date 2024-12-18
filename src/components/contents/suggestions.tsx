"use client";

import { getSuggestionConfig } from "@/lib/functions";
import { PageContent, PopularSuggestionType } from "@/types/content";
import { useRouter } from "next/navigation";

type SuggestionsProp = {
  title?: string;
  subHeader?: string;
  showTitle?: boolean;
  pageType?: PageContent;
  items?: PopularSuggestionType[];
};

const Suggestions = ({
  items,
  subHeader,
  showTitle = true,
  pageType = "service",
  title = "Popular suggestions",
}: SuggestionsProp) => {
  const config = getSuggestionConfig();
  const router = useRouter();

  return (
    <div
      className={`px-4 py-4 lg:px-0 md:flex md:justify-center lg:py-0 lg:flex-1 lg:h-[344px] md:mt-4 lg:mt-0 md:mb-4 lg:mb-0 lg:flex lg:items-start lg:flex-col lg:justify-center ${config[pageType].bg}`}
    >
      {showTitle && (
        <h6 className={`mb-3 ${config[pageType].title}`}>{title}</h6>
      )}
      {pageType === "home" && subHeader && (
        <p
          className={`hidden text-sm lg:text-lg font-medium lg:block lg:pb-6 text-center lg:text-justify ${config[pageType].little}`}
        >
          {subHeader}
        </p>
      )}
      <div className="justify-center flex flex-row md:justify-center flex-wrap lg:justify-start md:w-full md:max-w-[528px] lg:max-w-[440px] -mb-3 -mr-3">
        {items?.map(({ title, page }, index) => (
          <button
            key={index}
            onClick={() => router.push(`/articles/${page?.slug}`)}
            className={`h-[40px] rounded ${config[pageType].btn} px-3 text-neutral-50 mr-3 mb-3 truncate border border-transparent   active:bg-primary-500`}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
