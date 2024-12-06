"use client";

import { ArrowUpWhite } from "@/assets/vectors";

const FooterButton = () => {
  const scrollToTop = () => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex justify-center items-center rounded h-[56px] w-[56px] bg-primary-500 fixed bottom-[128px] right-2 md:hidden"
    >
      <ArrowUpWhite />
    </button>
  );
};

export default FooterButton;
