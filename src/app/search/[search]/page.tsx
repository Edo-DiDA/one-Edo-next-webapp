import Footer from "@/components/component/footer";
import SearchReferences from "@/components/contents/search-references";
import SerivcesTopSection from "@/components/contents/service-top-section";
import { getSearch } from "@/lib/functions/get-service";
import React from "react";

type SearchPageProps = {
  params: Promise<{ search: string }>;
};

const Page = async ({ params }: SearchPageProps) => {
  const { search } = await params;
  const data = await getSearch(search);

  return (
    <div className="">
      <div className="md:h-[64] h-[64px]"></div>
      <div className="bg-neutral-100 ">
        <SerivcesTopSection
          title="Search Results"
          body={`${data.length} result for "${search}"`}
          content="search"
        />
      </div>
      <SearchReferences items={data} />

      <Footer />
    </div>
  );
};

export default Page;
