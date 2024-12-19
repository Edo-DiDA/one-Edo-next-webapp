import { PageContent } from "@/types/content";

type TopSectionProps = {
  title: string;
  body: string;
  content?: PageContent;
};

const SerivcesTopSection = ({ title, body }: TopSectionProps) => {
  return (
    <div className="h-auto px-4 md:px-[40px] py-6 lg:h-[344px] md:w-full md:flex md:flex-row md:pt-4 lg:w-[50%] lg:flex lg:pl-[240px] lg:items-center bg-neutral-100 lg:flex-row">
      <div className="">
        <h2 className="text-mlg font-bold md:text-xxxl lg:text-xxl md:max-w-[528px] lg:max-w-[440px]">
          {title}
        </h2>
        <p className="mt-2 font-light text-md md:max-w-[440px] md:text-lg text-secondary-500 md:mt-2 text-sm font-light">
          {body}
        </p>
      </div>
    </div>
  );
};

export default SerivcesTopSection;
