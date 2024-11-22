import Link from "next/link";
import { RefernceInfo } from "@/types/content";
import { ArrowRightGreen } from "@/assets/vectors";
import { Url } from "next/dist/shared/lib/router/router";

type ServiceListProp = {
  services: RefernceInfo[];
};

const ServiceList = ({ services }: ServiceListProp) => {
  return (
    <div className="pt-6 px-4">
      <h4 className="text-black font-medium text-xrs pb-6">POPULAR SERVICES</h4>

      <div className="flex flex-row flex-wrap -mb-4 -mr-4">
        {services.map(({ title, body, link = "/" }, index) => (
          //   <Link className="" href={link as Url} key={index}>
          <Link
            href={link as Url}
            key={index}
            className="h-[208px] rounded mb-4 bg-primary-50 w-[45%] mr-4 p-4 flex flex-col justify-between"
          >
            <div>
              <h6 className="text-sm font-medium text-primary-800">{title}</h6>
              <p className="pt-1 text-secondary-500 text-xs font-light">
                {body}
              </p>
            </div>
            <div className="flex self-end">
              <ArrowRightGreen />
            </div>
            {/* </div> */}
          </Link>
        ))}

        {/* <div className="h-[208px] h-[208px] rounded mb-4 bg-primary-50 w-[45%] mr-4 p-4 flex flex-col justify-between">
          <div>
            <h6 className="text-sm font-medium text-primary-800">Business</h6>
            <p className="pt-1 text-secondary-500 text-xs font-light">
              Get support for starting, managing, and growing my business.
            </p>
          </div>
          <div className="flex self-end">
            <ArrowRightGreen />
          </div>
        </div>

        <div className="h-[208px] h-[208px] rounded mb-4 bg-primary-50 w-[45%] mr-4 p-4 flex flex-col justify-between">
          <div>
            <h6 className="text-sm font-medium text-primary-800">Business</h6>
            <p className="pt-1 text-secondary-500 text-xs font-light">
              Get support for starting, managing, and growing my business.
            </p>
          </div>
          <div className="flex self-end">
            <ArrowRightGreen />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceList;
