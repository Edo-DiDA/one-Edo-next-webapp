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
      className={`min-h-[124px] md:py-20 lg:flex lg:flex-col  lg:flex-1 ${config[content].bg} p-4`}
    >
      <div className="">
        <h2 className={`font-bold w-5/6 lg:w-auto ${config[content].title}`}>
          {title}
        </h2>
        <p className={`mt-2 text-sm font-light ${config[content].little}`}>
          {body}
        </p>
      </div>
    </div>
  );
};

export default TopSection;
