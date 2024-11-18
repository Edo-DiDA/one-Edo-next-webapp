import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

import { ArrowRightGreen } from "@/assets/vectors";
import { RefernceInfo } from "@/types/content";

type RefrencesProp = {
  references: RefernceInfo[];
};

const References = ({ references }: RefrencesProp) => {
  return (
    <div className="h-auto px-4 pt-6 pb-10 -mb-6">
      {references.map(({ title, body, link = "/" }, index) => (
        <Link
          href={link as Url}
          key={index}
          className="flex flex-row justify-between cursor-pointer border-neutral-200 border h-auto py-3 items-center px-3 mb-6 rounded"
        >
          <div className="w-11/12">
            <h3 className="text-sm font-bold text-primary-500">{title}</h3>
            {body && (
              <p className="text-xs text-black mt-1 font-light">
                How to start your business and get the necessary licenses and
                permits
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
