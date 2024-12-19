import Link from "next/link";

import { ArrowRightGreen } from "@/assets/vectors";
import { SubmenuType } from "@/types/content";
import { buildReferenceUrl } from "@/lib/functions";

type RefrencesProp = {
  showNew?: boolean;
  items?: SubmenuType[];
};

const References = ({ items }: RefrencesProp) => {
  return (
    <div className="h-auto px-4 pt-6 pb-10 -mb-6 md:px-10 lg:py-20 lg:px-14  lg:mx-auto  lg:max-w-5xl">
      {items?.map(({ id, page, article, __component }) => (
        <Link
          href={buildReferenceUrl(article?.slug || page?.slug, __component)}
          key={id}
          className="flex flex-row justify-between cursor-pointer border-neutral-200 border h-auto py-3 items-center px-4 mb-6 rounded md:max-w-[632px]"
        >
          <div className="w-11/12">
            <h3 className="text-sm font-bold text-primary-500 active:primary-800 inline-block hover:border-b hover:border-primary-600">
              {article?.title || page?.name}
            </h3>
            {(article?.description || page?.shortDescription) && (
              <p className="text-xs text-black mt-1 font-light">
                {article?.description || page?.shortDescription}
              </p>
            )}
          </div>

          <ArrowRightGreen />
        </Link>
      ))}
    </div>
  );
};

export default References;
