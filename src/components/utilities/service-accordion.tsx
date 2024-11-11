"use client";

import { useState } from "react";

import { AltArrowDown, ChevronUp } from "@/assets/vectors";

interface IServiceAccordionProps {
  title: string;
  icon: React.ReactElement;
}

const ServiceAccordion = ({ title, icon }: IServiceAccordionProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toogleTags = () => setShowDetails(!showDetails);

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
    <div className="mt-[16px]">
      <div
        className="w-full pl-4 pr-[12px] cursor-pointer min-h-[48px] bg-neutral-200 rounded"
        role="button"
        onClick={toogleTags}
      >
        <div className="flex flex-row h-[48px] items-center justify-between">
          <div className="flex flex-row items-center">
            {icon}
            <p className="text-xxs font-lighttext-text-primary-light ml-[12px]">
              {title}
            </p>
          </div>
          <div>
            {showDetails ? (
              <ChevronUp className="text-black" />
            ) : (
              <AltArrowDown />
            )}
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="pl-4">
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
