import Footer from "@/components/component/footer";
import SearchReferences from "@/components/contents/search-references";
import TopSection from "@/components/contents/top-section";
import { getSearch } from "@/lib/functions/get-service";
import React from "react";

type SearchPageProps = {
  params: Promise<{ search: string }>;
};

const Page = async ({ params }: SearchPageProps) => {
  const { search } = await params;
  const data = await getSearch(search);

  return (
    <div>
      <div className="md:hidden h-[64px]"></div>
      <div className="bg-neutral-100 ">
        <TopSection
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
