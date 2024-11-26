import Link from "next/link";

import { ChevronRight } from "@/assets/vectors";
import { BreadcrumbType } from "@/types/content";

type BreadcrumbsProps = {
  items: BreadcrumbType[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="h-[72px] px-4 flex items-center">
      <div className="flex flex-row items-center h-full">
        {items?.length > 0 &&
          items.map(({ id, page }, index) => (
            <>
              <Link
                key={id}
                href={`/${page?.slug}`}
                className={`text-xxs text-${
                  index === 0 ? "primary" : "secondary"
                }-500 font-light`}
              >
                {page?.name}
              </Link>
              {index < items.length - 1 && <ChevronRight />}
            </>
          ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
