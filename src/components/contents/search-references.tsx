import Link from "next/link";

import { ArrowRightGreen } from "@/assets/vectors";
import { SearchType } from "@/types/content";

type RefrencesProp = {
  items?: SearchType[];
};

const SearchReferences = ({ items }: RefrencesProp) => {
  return (
    <div className="pb-10">
      {items && items?.length > 1 ? (
        <div className="h-auto px-4 pt-6 -mb-6 lg:py-20 lg:px-20 xl:px-40 ">
          {items.map((item) => (
            <Link
              href={`/articles/${item?.slug}`}
              key={item.id}
              className="flex flex-row justify-between cursor-pointer border-neutral-200 border h-auto py-3 items-center px-3 mb-6 rounded"
            >
              <div className="w-11/12">
                <h3 className="text-sm font-bold text-primary-500 active:primary-800">
                  {item?.title}
                </h3>
                {item?.description && (
                  <p className="text-xs text-black mt-1 font-light">
                    {item?.description}
                  </p>
                )}
              </div>

              <ArrowRightGreen />
            </Link>
          ))}
        </div>
      ) : (
        <div className="px-4 pt-6 bg-neutral-50 md:w-full md:flex md:flex-col md:justify-center md:items-center md:h-[385px]">
          <p className="text-xs font-light text-primary-800 mb-4">
            Unfortunately, we do not have any information on your search request
            at the moment.
          </p>

          <p className="text-xs font-light text-primary-800">
            We are currently working on providing you with this service.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchReferences;
