import Link from "next/link";

import { ArrowRightGreen } from "@/assets/vectors";
import { SubmenuType } from "@/types/content";

type RefrencesProp = {
  showNew?: boolean;
  items?: SubmenuType[];
};

const References = ({ items }: RefrencesProp) => {
  return (
    <div className="h-auto px-4 pt-6 pb-10 -mb-6">
      {items?.map(({ id, article }) => (
        <Link
          href={`/${article?.slug}`}
          key={id}
          className="flex flex-row justify-between cursor-pointer border-neutral-200 border h-auto py-3 items-center px-3 mb-6 rounded"
        >
          <div className="w-11/12">
            <h3 className="text-sm font-bold text-primary-500">
              {article?.title}
            </h3>
            {article?.description && (
              <p className="text-xs text-black mt-1 font-light">
                {article?.description}
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
