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
    <div className="h-auto px-4 md:pl-10 pt-6 pb-10 -mb-6 lg:pt-6 lg:pl-[240px] lg:max-w-5xl">
      {items?.map(({ id, page, article, __component }) => (
        <Link
          href={buildReferenceUrl(article?.slug || page?.slug, __component)}
          key={id}
          className="flex md:max-w-[632px] flex-row justify-between cursor-pointer border-neutral-200 border h-auto py-3 items-center px-3 mb-6 rounded lg:max-w-2xl"
        >
          <div className="w-11/12">
            <h3 className="text-sm font-bold text-primary-500 active:primary-800">
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
