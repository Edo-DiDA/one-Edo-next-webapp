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
    <div
      className={`min-h-[124px]  lg:py-20 lg:pl-20 xl:pl-40 ${config[content].bg} p-4`}
    >
      <h2
        className={`text-md md:text-5xl font-bold w-5/6 lg:w-3/6  ${config[content].title}`}
      >
        {title}
      </h2>
      <p
        className={`mt-2 text-sm font-light lg:hidden ${config[content].little}`}
      >
        {body}
      </p>
    </div>
  );
};

export default TopSection;
