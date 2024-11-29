import Link from "next/link";

import { HighlightItem } from "@/types/content";

type PageHighlightProps = {
  title: string;
  height?: string;
  background?: string;
  addBullets?: boolean;
  items: HighlightItem[];
};

const PageHighlight = ({
  items,
  title,
  height = "auto",
  background = "neutral-50",
  addBullets = false,
}: PageHighlightProps) => {
  const bullets = addBullets ? "list-disc ml-4 marker:text-primary-500" : "";
  return (
    <>
      <div
        className={`py-6 h-${height} bg-${background} px-4 border-b border-neutral-200`}
      >
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
