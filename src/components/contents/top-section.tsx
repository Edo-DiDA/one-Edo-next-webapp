type TopSectionProps = {
  title: string;
  body: string;
};

const TopSection = ({ title, body }: TopSectionProps) => {
  return (
    <div className="h-[124px] p-4">
      <h2 className="text-md text-primary-800 font-bold">{title}</h2>
      <p className="mt-2 text-sm font-light text-secondary-500">{body}</p>
    </div>
  );
};

export default TopSection;
