import { Url } from "next/dist/shared/lib/router/router";

export const isNotLastOnList = (index: number, listLength: number) => {
  return index < listLength - 1;
};

export const getSuggestionConfig = () => ({
  service: {
    title: "text-primary-800 text-sm font-bold",
    bg: "bg-primary-50 lg:pl-4 md:w-[50%] ",
  },
  home: {
    title: "text-xs text-white font-light",
    bg: "bg-primary-600 lg:pl-0",
  },
});

export const getTopSectionConfig = () => ({
  service: {
    title: "text-primary-800 ",
    bg: "  bg-neutral-50 md:w-[50%]",
    little: "text-secondary-500",
  },
  home: {
    title: "text-neutral-50 lg:w-3/6",
    bg: "bg-primary-600",
    little: "text-neutral-100 ",
  },
});

export const buildReferenceUrl = (
  slug: string = "",
  component: string
): Url => {
  let url: Url;
  switch (component) {
    case "shared.service-page":
      url = `/services/${slug}`;
      break;

    case "shared.article":
      url = `/articles/${slug}`;
      break;

    default:
      url = `/services/${slug}`;
      break;
  }

  return url;
};
