import { Search } from "@/assets/vectors";
import Header from "@/components/component/header";

type ContentLayoutProp = {
  children: React.ReactNode;
};

const ContentLayout = ({ children }: ContentLayoutProp) => {
  return (
    <div>
      <Header showSearch={false} />
      <div className="h-[64px] px-4 py-2">
        <div className="bg-neutral-100 flex flex-row w-full h-full items-center rounded pl-3">
          <Search />
          <input
            type="text"
            placeholder="What do you need?"
            className="bg-inherit ml-[12px] h-full w-full focus:outline-none"
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default ContentLayout;
