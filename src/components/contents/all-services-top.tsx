import { PageContent } from "@/types/content";

type TopSectionProps = {
  title: string;
  body: string;
  content?: PageContent;
};

const AllSerivcesTopSection = ({ title, body }: TopSectionProps) => {
  return (
    <div
      className="h-[160px] px-4 lg:px-0 md:px-[40px] lg:justify-center py-6
         lg:h-[165px] md:h-[122px] md:w-full md:flex md:flex-row md:pt-4 lg:w-full lg:flex lg:items-center bg-primary-600 lg:flex-row"
    >
      <div className="lg:w-[960px]">
        <h2 className="font-bold text-2xl md:max-w-[528px] lg:w-full">
          {title}
        </h2>
        <p className="mt-2 font-light text-mdd md:max-w-[440px] text-neutral-200 md:mt-2 font-light">
          {body}
        </p>
      </div>
    </div>
  );
};

export default AllSerivcesTopSection;
