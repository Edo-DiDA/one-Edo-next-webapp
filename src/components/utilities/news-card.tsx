"use client";

interface INewsCardProps {
  title: string;
  body: string;
  link?: string;
}

const NewsCard = ({ title, body }: INewsCardProps) => {
  return (
    <div className="shadow h-[174px] w-[306px]  mr-4 mb-[24px] rounded-lg p-[12px] flex-shrink-0">
      <p className="text-xs text-neutral-800 leading-6 font-medium mb-1 whitespace-normal break-words min-w-0">
        {title}
      </p>
      <p className="text-neutral-700 text-xxs whitespace-normal font-light break-words min-w-0">
        {body}
      </p>
      <button className="w-full mt-4 h-[38px] bg-primary-500 rounded text-neutral-50 font-medium text-xxs">
        Read more
      </button>
    </div>
  );
};

export default NewsCard;
