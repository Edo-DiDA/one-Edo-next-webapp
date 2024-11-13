"use client";

import { AltArrowDown, ArrowRightGreen, ChevronUp } from "@/assets/vectors";

interface IServiceAccordionProps {
  title: string;
  icon: React.ReactElement;
  onClick: () => void;
  showDetails: boolean;
}

const ServiceAccordion = ({
  title,
  icon,
  showDetails,
  onClick,
}: IServiceAccordionProps) => {
  const services: { label: string; link: string }[] = [
    {
      label: "I need money for my business",
      link: "https://example.com",
    },
    {
      label: "Pay small-small for hospital bills",
      link: "https://example.com",
    },
    {
      label: "Pay less for school fees",
      link: "https://example.com",
    },
    {
      label: "Pay less for school fees",
      link: "https://example.com",
    },
    {
      label: "Pay less for school fees",
      link: "https://example.com",
    },
  ];

  return (
    <div className="">
      <div
        className="w-[100%] pl-4 pr-[12px] cursor-pointer min-h-[48px] bg-neutral-200 md:bg-white rounded"
        role="button"
        onClick={onClick}
      >
        <div
          className={`flex flex-row h-[48px] items-center justify-between pl-4 ${
            showDetails ? "bg-neutral-200" : " "
          }`}
        >
          <div className="flex flex-row items-center">
            {icon}
            <p className="text-xxs font-light text-primary-light ml-[12px]">
              {title}
            </p>
          </div>
          <div className="md:hidden">
            {showDetails ? (
              <ChevronUp className="text-black" />
            ) : (
              <AltArrowDown />
            )}
          </div>
          <div className="hidden md:block">
            {showDetails ? <></> : <ArrowRightGreen />}
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="md:hidden pl-4">
          <ul className="my-[16px]">
            {services.map(({ label, link }, index) => (
              <li className="mb-[16px]" key={index}>
                <a
                  href={link}
                  className="underline text-xxs text-primary-500 font-medium mb-[16px]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-[16px]" />
        </div>
      )}
    </div>
  );
};

export default ServiceAccordion;
