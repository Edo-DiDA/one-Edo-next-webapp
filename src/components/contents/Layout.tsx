import Header from "@/components/component/header";
import { getServices } from "@/lib/functions/get-service";
import FooterButton from "./footer-button";
import SearchBar from "./search-bar";

type ContentLayoutProp = {
  children: React.ReactNode;
};

const ContentLayout = async ({ children }: ContentLayoutProp) => {
  const data = await getServices();

  return (
    <div className="relative bg-neutral-50">
      <div className="sticky lg:h-[80px] top-0 left-0 right-0 bg-primary-600 pb-2 lg:pb-0">
        <div className="px-4 md:flex lg:h-[100%] md:w-[100%] md:px-[40px] lg:px-[240px] md:flex-col lg:flex-row md:justify-between">
          <Header links={data} />
          <div className="md:border-none">
            <SearchBar />
          </div>
        </div>
      </div>
      {children}
      <FooterButton />
    </div>
  );
};

export default ContentLayout;
