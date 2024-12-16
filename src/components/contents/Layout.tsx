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
    <div className="relative bg-neutral-50 ">
      <div className="sticky lg:px-20 xl:px-40 pt-6 top-0 left-0 right-0 bg-primary-600">
        <div className=" md:flex   md:items-center md:justify-between lg:mx-auto lg:max-w-5xl">
          <Header links={data} />
          <div className="h-[64px] px-4 py-2 md:border-none">
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
