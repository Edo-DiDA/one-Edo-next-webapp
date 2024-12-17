import Link from "next/link";
import { SubmenuType } from "@/types/content";
import { ArrowRightDeepGreen, ArrowRightGreen } from "@/assets/vectors";

type ServiceProp = {
  slug: string | undefined;
  name: string | undefined;
  shortDescription: string | undefined;
};

const Service = ({ slug, name, shortDescription }: ServiceProp) => {
  return (
    <Link
      href={`/services/${slug}`}
      className="h-[208px] rounded bg-neutral-100 md:hover:bg-transparent p-4 flex flex-col justify-between active:bg-primary-50 md:active:bg-primary-50"
    >
      <div>
        <h6 className="text-sm font-medium text-primary-800 md:active:text-primary-800 md:hover:text-primary-500 active:text-primary-800 md:text-lg md:font-semibold">
          {name}
        </h6>
        <p className="pt-1 text-secondary-500 text-xs font-light active:text-secondary-500 md:pt-2">
          {shortDescription}
        </p>
      </div>
      <div className="flex self-end">
        <div className="md:hover:hidden md:active:hidden">
          <ArrowRightGreen />
        </div>
        <div className="hidden md:hover:block md:active:block">
          <ArrowRightDeepGreen />
        </div>
      </div>
    </Link>
  );
};

export default Service;
