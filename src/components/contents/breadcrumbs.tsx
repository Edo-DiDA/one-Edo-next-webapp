import { ChevronRight } from "@/assets/vectors";

type BreadcrumbsProps = {
  breadcrumbs: string[];
};

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <div className="h-[72px] px-4 flex items-center">
      <div className="flex flex-row items-center h-full">
        {breadcrumbs.map((name, index) => (
          <>
            <span
              key={index}
              className={`text-xxs text-${
                index === 0 ? "primary" : "secondary"
              }-500 font-light`}
            >
              {name}
            </span>
            {index < breadcrumbs.length - 1 && <ChevronRight />}
          </>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
