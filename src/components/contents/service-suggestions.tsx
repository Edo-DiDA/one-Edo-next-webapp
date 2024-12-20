"use client";

import { PageContent, PopularSuggestionType } from "@/types/content";
import { useRouter } from "next/navigation";

type SuggestionsProp = {
  title?: string;
  subHeader?: string;
  showTitle?: boolean;
  pageType?: PageContent;
  items?: PopularSuggestionType[];
};

const ServiceSuggestions = ({
  items,
  showTitle = true,
  title = "How can Edo state help you?",
}: SuggestionsProp) => {
  const router = useRouter();

  return (
    <div className="bg-primary-50 lg:w-[50%] px-4 py-4 md:px-10 lg:py-0 lg:px-10 lg:h-[344px] lg:mt-0 lg:mb-0 lg:flex lg:flex-col lg:justify-center">
      <div className="lg:w-[480px]">
        {showTitle && (
          <h6 className="mb-4 text-md font-medium md:text-mdd lg:text-lg">
            {title}
          </h6>
        )}
        <div className="flex flex-row flex-wrap md:w-full md:max-w-[528px] lg:max-w-[440px] -mb-3 -mr-3">
          {items?.map(({ title, page }, index) => (
            <button
              key={index}
              onClick={() => router.push(`/articles/${page?.slug}`)}
              className="bg-primary-400 h-[40px] rounded px-3 text-neutral-50 mr-3 mb-3 truncate border border-transparent active:bg-primary-500"
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSuggestions;
