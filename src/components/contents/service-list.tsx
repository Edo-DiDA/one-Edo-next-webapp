import Link from "next/link";
import { SubmenuType } from "@/types/content";
import { ArrowRightDeepGreen, ArrowRightGreen } from "@/assets/vectors";

type ServiceListProp = {
  services: SubmenuType[];
};

const ServiceList = ({ services }: ServiceListProp) => {
  return (
    <div className="pt-6 px-4  mb-16 lg:mx-auto  lg:max-w-6xl">
      <div className="lg:mx-auto ">
        <h4 className="text-black font-medium text-xrs pb-6 md:text-xxs">
          POPULAR SERVICES
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ page }, index) => (
            <Link
              href={`/services/${page?.slug}`}
              key={index}
              className="h-[208px] rounded bg-neutral-100 md:hover:bg-transparent p-4 flex flex-col justify-between active:bg-primary-50 md:active:bg-primary-50"
            >
              <div>
                <h6 className="text-sm font-medium text-primary-800 md:active:text-primary-800 md:hover:text-primary-500 active:text-primary-800 md:text-lg md:font-semibold">
                  {page?.name}
                </h6>
                <p className="pt-1 text-secondary-500 text-xs font-light active:text-secondary-500 md:pt-2">
                  {page?.shortDescription}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
