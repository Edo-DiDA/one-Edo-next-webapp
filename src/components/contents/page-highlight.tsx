import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

import { HighlightItem } from "@/types/content";

type PageHighlightProps = {
  title: string;
  height?: string;
  background?: string;
  addBullets?: boolean;
  bottomBorder?: boolean;
  items: HighlightItem[];
  useExternalLinks?: boolean;
};

const PageHighlight = ({
  items,
  title,
  height = "auto",
  addBullets = false,
  bottomBorder = false,
  useExternalLinks = false,
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
              {useExternalLinks ? (
                <a
                  href={link}
                  target="_blank"
                  className="underline text-primary-500 text-sm"
                >
                  {title}
                </a>
              ) : (
                <Link
                  href={link as Url}
                  className="underline text-primary-500 text-sm"
                >
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PageHighlight;
