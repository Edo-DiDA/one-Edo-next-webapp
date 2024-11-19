interface ITagProps {
  action?: () => void;
  children: string;
}

const Tag = ({ action, children }: ITagProps) => {
  return (
    <button
      onClick={action}
      className="h-auto p-2 mb-2 w-auto px-[12px] text-neutral-50 font-light text-xs mr-[8px] rounded bg-neutral-700"
    >
      {children}
    </button>
  );
};

export default Tag;
