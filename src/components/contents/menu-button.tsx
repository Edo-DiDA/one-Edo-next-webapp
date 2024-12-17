"use client";

import { ChevronDownWhite } from "@/assets/vectors";

type MenuButtonProps = {
  text?: string;
  action?: () => void;
};

const MenuButton = ({ text = "Menu", action }: MenuButtonProps) => {
  return (
    <button
      onClick={action}
      className="w-20 h-12 flex items-center gap-2  font-medium text-xs text-neutral-50 active:bg-primary-800 active:text-neutral-200"
    >
      {text} <ChevronDownWhite />
    </button>
  );
};

export default MenuButton;
