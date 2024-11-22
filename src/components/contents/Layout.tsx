import { Search } from "@/assets/vectors";
import Header from "@/components/component/header";

type ContentLayoutProp = {
  children: React.ReactNode;
};

const ContentLayout = ({ children }: ContentLayoutProp) => {
  return (
    <div className="relative bg-neutral-50">
      <div className="sticky pt-6 top-0 left-0 right-0 bg-neutral-50">
        <Header />
        <div className="h-[64px] px-4 py-2 border-b-[1px] border-neutral-200">
          <div className="bg-neutral-100 flex flex-row w-full h-full items-center rounded pl-3">
            <Search />
            <input
              type="text"
              placeholder="What do you need?"
              className="bg-inherit ml-[12px] h-full w-full focus:outline-none"
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ContentLayout;
