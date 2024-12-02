import Link from "next/link";
import { SubmenuType } from "@/types/content";
import { ArrowRightGreen } from "@/assets/vectors";

type ServiceListProp = {
  services: SubmenuType[];
};

const ServiceList = ({ services }: ServiceListProp) => {
  return (
    <div className="pt-6 px-4 lg:px-20 mb-16 xl:px-40">
      <h4 className="text-black font-medium text-xrs pb-6 md:text-xxs">
        POPULAR SERVICES
      </h4>

      <div className="flex flex-row flex-wrap -mb-4 -mr-4">
        {services.map(({ page }, index) => (
          <Link
            href={`/services/${page?.slug}`}
            key={index}
            className="h-[208px] rounded mb-4 bg-primary-50 md:bg-transparent md:rounded-none w-[45%] md:w-[30%] mr-4 p-4 flex flex-col justify-between active:bg-primary-100"
          >
            <div>
              <h6 className="text-sm font-medium text-primary-800 active:text-primary-800 md:text-lg md:font-semibold">
                {page?.name}
              </h6>
              <p className="pt-1 text-secondary-500 text-xs font-light active:text-secondary-500 md:pt-2">
                {page?.shortDescription}
              </p>
            </div>
            <div className="flex self-end">
              <ArrowRightGreen />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
