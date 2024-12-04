import Link from "next/link";

import { ArrowRightGreen } from "@/assets/vectors";
import { SearchType, SubmenuType } from "@/types/content";
import { buildReferenceUrl } from "@/lib/functions";

type RefrencesProp = {
  items?: SearchType[];
};

const SearchReferences = ({ items }: RefrencesProp) => {
  return (
    <div className="h-auto px-4 pt-6 pb-10 -mb-6 lg:py-20 lg:px-20 xl:px-40 ">
      {items?.map((item) => (
        <Link
          href={buildReferenceUrl(item.slug, item.documentId)}
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
  );
};

export default SearchReferences;
