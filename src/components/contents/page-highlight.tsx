import Link from "next/link";

import { HighlightItem } from "@/types/content";

type PageHighlightProps = {
  title: string;
  height?: string;
  background?: string;
  addBullets?: boolean;
  bottomBorder?: boolean;
  items: HighlightItem[];
};

const PageHighlight = ({
  items,
  title,
  height = "auto",
  addBullets = false,
  bottomBorder = false,
  background = "neutral-50",
}: PageHighlightProps) => {
  const border = bottomBorder ? "border-b border-neutral-200" : "";
  const bullets = addBullets ? "list-disc ml-4 marker:text-primary-500" : "";
  return (
    <>
      <div className={`py-6 h-${height} bg-${background} px-4 ${border}`}>
        <p className="text-md text-primary-800 font-bold mb-3">{title}</p>
        <ul className={bullets}>
          {items.map(({ title, link }, index) => (
            <li key={index} className="mb-1">
              <Link
                href={`/${link}`}
                className="underline text-primary-500 text-sm"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PageHighlight;
