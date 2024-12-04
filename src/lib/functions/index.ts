import { Url } from "next/dist/shared/lib/router/router";

export const isNotLastOnList = (index: number, listLength: number) => {
  return index < listLength - 1;
};

export const getSuggestionConfig = () => ({
  service: {
    title: "text-primary-800 text-sm font-bold",
    bg: "bg-primary-50 lg:pl-4 md:w-[50%]",
    little: "text-secondary-500",
    btn: "bg-primary-400",
  },
  home: {
    title: "text-xs text-white font-light ",
    bg: "bg-primary-600 lg:pl-0",
    little: "text-white",
    btn: "text-white bg-primary-700",
  },
  search: {
    title: "text-xs text-white font-light ",
    bg: "bg-primary-600 lg:pl-0",
    little: "text-neutral-100",
    btn: "",
  },
});

export const getTopSectionConfig = () => ({
  service: {
    title: "text-primary-800 text-md md:text-5xl ",
    bg: "  bg-neutral-100 md:w-[50%]",
    little: "text-secondary-500 ",
    btn: "bg-primary-400",
  },
  home: {
    title: "text-neutral-50 lg:w-3/6 text-md md:text-5xl",
    bg: "bg-primary-600",
    little: "text-neutral-100 md:hidden",
    btn: "bg-primary-700",
  },
  search: {
    title: "text-primary-800 text-[28px]",
    bg: "  bg-neutral-100 ",
    little: "text-primary-800",
    btn: "bg-primary-400",
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
