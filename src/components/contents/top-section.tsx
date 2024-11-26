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
    <div className={`min-h-[124px] ${config[content].bg} p-4`}>
      <h2 className={`text-md font-bold w-5/6 ${config[content].title}`}>
        {title}
      </h2>
      <p className={`mt-2 text-sm font-light ${config[content].little}`}>
        {body}
      </p>
    </div>
  );
};

export default TopSection;
