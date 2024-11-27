import Link from "next/link";

import { ChevronRight } from "@/assets/vectors";
import { BreadcrumbType } from "@/types/content";
import { isNotLastOnList } from "@/lib/functions";

type BreadcrumbsProps = {
  items: BreadcrumbType[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="h-[72px] px-4 flex items-center lg:pl-20 xl:pl-40">
      <div className="flex flex-row items-center h-full">
        {items?.length > 0 &&
          items.map(({ id, page }, index) => (
            <>
              <Link
                key={id}
                href={`/${page?.slug}`}
                className={`text-xxs text-${
                  isNotLastOnList(index, items.length) ? "primary" : "secondary"
                }-500 font-light`}
              >
                {page?.name}
              </Link>
              {isNotLastOnList(index, items.length) && <ChevronRight />}
            </>
          ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
