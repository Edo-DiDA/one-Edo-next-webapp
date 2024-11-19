"use client";
import React, { useState } from "react";
import ServiceAccordion from "../utilities/service-accordion";
import {
  Banknote,
  CourseUp,
  Gavel,
  HandHeart,
  MoneyBag,
} from "@/assets/vectors";

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const services = [
    { label: "I need money for my business", link: "https://example.com" },
    {
      label: "Pay small-small for hospital bills",
      link: "https://example.com",
    },
    { label: "Pay less for school fees", link: "https://example.com" },
    { label: "Get subsidized transport", link: "https://example.com" },
    { label: "Housing assistance", link: "https://example.com" },
  ];

  const handleAccordionClick = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="md:flex md:justify-around">
      <div className="flex flex-col gap-4  md:w-[50%]">
        <ServiceAccordion
          icon={<Banknote />}
          title="Financial Assistance"
          onClick={() => handleAccordionClick(0)}
          showDetails={activeAccordion === 0}
        />
        <ServiceAccordion
          icon={<HandHeart />}
          title="Social Services and Welfare"
          onClick={() => handleAccordionClick(1)}
          showDetails={activeAccordion === 1}
        />
        <ServiceAccordion
          icon={<MoneyBag />}
          title="Employment"
          onClick={() => handleAccordionClick(2)}
          showDetails={activeAccordion === 2}
        />
        <ServiceAccordion
          icon={<CourseUp />}
          title="Business Services"
          onClick={() => handleAccordionClick(3)}
          showDetails={activeAccordion === 3}
        />
        <ServiceAccordion
          icon={<Gavel />}
          title="Citizens Rights and Processes"
          onClick={() => handleAccordionClick(4)}
          showDetails={activeAccordion === 4}
        />
      </div>
      <div className="hidden md:flex w-[40%] bg-gray-200 rounded-lg justify-around items-center">
        {activeAccordion !== null && (
          <ul className="my-[16px]">
            {services.map(({ label, link }, index) => (
              <li key={index} className="mb-[16px]">
                <a
                  href={link}
                  className="underline text-xxs text-primary-500 font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Services;
