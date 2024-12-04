import Header from "@/components/component/header";
import { getServices } from "@/lib/functions/get-service";
import SearchBar from "./search-bar";

type ContentLayoutProp = {
  children: React.ReactNode;
};

const ContentLayout = async ({ children }: ContentLayoutProp) => {
  const data = await getServices();
  return (
    <div className="relative bg-neutral-50 ">
      <div className="sticky lg:px-20 xl:px-40 pt-6 top-0 left-0 right-0 bg-primary-600 md:flex md:border-b-[1px] md:border-neutral-800 md:items-center md:justify-between">
        <Header links={data} />
        <div className="h-[64px] px-4 py-2 border-b-[1px] md:border-none border-neutral-800">
          <SearchBar />
        </div>
      </div>
      {children}
    </div>
  );
};

export default ContentLayout;
