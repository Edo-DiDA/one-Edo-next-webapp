import { getTopSectionConfig } from "@/lib/functions";
import { PageContent } from "@/types/content";

type TopSectionProps = {
  title: string;
  body: string;
  content?: PageContent;
};

const TopSection = ({ title, body, content = "service" }: TopSectionProps) => {
  const config = getTopSectionConfig();
  return (
    <div className="h-auto px-4 pt-4 lg:p-0 lg:h-[344px] md:w-full lg:w-[50%] md:flex md:flex-row md:justify-center md:pt-4 lg:justify-start lg:items-center">
      <div className="">
        <h2
          className={`text-xxl text-center font-bold md:text-center md:text-xxxl lg:text-xl lg:text-left md:max-w-[528px] lg:max-w-[440px] ${config[content].title}`}
        >
          {title}
        </h2>
        <p
          className={`mt-2 text-center font-medium text-md md:mt-4 md:text-mdd md:text-neutral-300 md:mb-4 text-sm font-light ${config[content].little}`}
        >
          {body}
        </p>
      </div>
    </div>
  );
};

export default TopSection;
