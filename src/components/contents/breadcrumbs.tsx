import Link from "next/link";

import { ChevronRight } from "@/assets/vectors";
import { BreadcrumbType } from "@/types/content";
import { isNotLastOnList, processBreadcrumbs } from "@/lib/functions";

type BreadcrumbsProps = {
  items: BreadcrumbType[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="h-[64px] md:h-[54px] px-4 md:px-10 flex lg:px-[240px]">
      <div className="hidden md:flex flex-row items-center h-full">
        {items?.length > 0 &&
          items.map(({ id, page }, index) => (
            <>
              <Link
                key={id}
                href={
                  page?.name.toLowerCase() === "home"
                    ? "/"
                    : `/services/${page?.slug}`
                }
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

      {/* show below on mobile only */}

      <div className="flex flex-row items-center h-full md:hidden lg:hidden">
        {items?.length > 0 &&
          processBreadcrumbs(items).map(({ id, page }, index) => (
            <>
              <Link
                key={id}
                href={
                  page?.name.toLowerCase() === "home"
                    ? "/"
                    : `/services/${page?.slug}`
                }
                className={`text-xxs text-${
                  isNotLastOnList(index, items.length) ? "primary" : "secondary"
                }-500 font-light`}
              >
                {page?.name}
              </Link>
              {isNotLastOnList(index, processBreadcrumbs(items).length) && (
                <ChevronRight />
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
