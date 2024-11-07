import Image from "next/image";

interface Props {
  action?: () => void;
  children: string;
}

const Tags: React.FC<Props> = ({ action, children }) => {
  return (
    <button
      onClick={action}
      className="h-[40px] mb-2 w-auto px-[12px] text-neutral-50 font-light text-xs mr-[8px] rounded bg-neutral-700"
    >
      {children}
    </button>
  );
};

export default Tags;
