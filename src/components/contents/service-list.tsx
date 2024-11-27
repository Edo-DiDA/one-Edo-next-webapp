import Link from "next/link";
import { SubmenuType } from "@/types/content";
import { ArrowRightGreen } from "@/assets/vectors";

type ServiceListProp = {
  services: SubmenuType[];
};

const ServiceList = ({ services }: ServiceListProp) => {
  return (
    <div className="pt-6 px-4">
      <h4 className="text-black font-medium text-xrs pb-6">POPULAR SERVICES</h4>

      <div className="flex flex-row flex-wrap -mb-4 -mr-4">
        {services.map(({ page }, index) => (
          <Link
            href={`/services/${page?.slug}`}
            key={index}
            className="h-[208px] rounded mb-4 bg-primary-50 w-[45%] mr-4 p-4 flex flex-col justify-between"
          >
            <div>
              <h6 className="text-sm font-medium text-primary-800">
                {page?.name}
              </h6>
              <p className="pt-1 text-secondary-500 text-xs font-light">
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
