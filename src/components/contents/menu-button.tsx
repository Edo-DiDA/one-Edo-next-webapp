"use client";

type MenuButtonProps = {
  text?: string;
  action?: () => void;
};

const MenuButton = ({ text = "Menu", action }: MenuButtonProps) => {
  return (
    <button
      onClick={action}
      className="w-20 h-12 rounded bg-primary-500 font-medium text-xs text-neutral-50"
    >
      {text}
    </button>
  );
};

export default MenuButton;