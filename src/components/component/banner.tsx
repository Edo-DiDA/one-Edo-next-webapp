"use client";
import { Close } from "@/assets/vectors";
import React, { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#AF7304]">
      <div className="flex lg:max-w-[960px] mx-auto items-center justify-between text-white lg:px-0 md:px-10 p-4 relative">
        <div className="flex items-center gap-3 md:max-w-[85%] max-w-[90%] text-xxs">
          <span className="border border-[#ffffff] border-opacity-50 p-2 rounded-lg">
            Beta
          </span>
          <p>
            We are actively fine-tuning this platform and adding more services.{" "}
            <a href="#" className="underline text-white hover:text-gray-300">
              Tell us what you think here
            </a>
          </p>
        </div>

        <div
          className="w-6 h-6 flex-none focus:outline-none flex items-center justify-center transition-colors duration-200"
          onClick={handleClose}
          aria-label="Close"
        >
          <Close />
        </div>
      </div>
    </div>
  );
};

export default Banner;
