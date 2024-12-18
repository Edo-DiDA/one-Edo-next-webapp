import { Url } from "next/dist/shared/lib/router/router";
import {
  BreadcrumbType,
  HighlightItem,
  PageContributors,
  RelatedPages,
} from "@/types/content";

export const isNotLastOnList = (index: number, listLength: number) => {
  return index < listLength - 1;
};

/**
 * The purpose of the style modifiers (getSuggestionConfig and getTopSectionConfig)
 * is to return colors or physical changes in the components based on the type of page
 * (service, home et.c) it is been used. Do not return responsive styles
 */

export const getSuggestionConfig = () => ({
  service: {
    title: "text-primary-800 text-sm font-bold",
    bg: "bg-primary-50",
    little: "text-secondary-500",
    btn: "bg-primary-400 ",
  },
  home: {
    title: "text-xs text-white font-light",
    bg: "bg-primary-600",
    little: "text-white",
    btn: "text-white bg-primary-700 hover:border-primary-200",
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
    title: "text-primary-800 text-md md:text-5xl",
    bg: "bg-neutral-100",
    little: "text-secondary-500 ",
    btn: "bg-primary-400",
  },
  home: {
    title: "text-neutral-50",
    bg: "",
    little: "text-neutral-100 lg:hidden md:text-center ",
    btn: "bg-primary-700",
  },
  search: {
    title: "text-primary-800 text-[28px]",
    bg: "lg:mx-auto lg:max-w-5xl",
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

export const processBreadcrumbs = (arr: BreadcrumbType[]): BreadcrumbType[] => {
  return arr.length > 3 ? [arr[0], ...arr.slice(-2)] : arr;
};

export const transformArticleToHighlight = (
  articles: RelatedPages[]
): HighlightItem[] => {
  return articles.map(({ article }) => ({
    id: article?.documentId,
    title: article?.title,
    link: article.slug ? `/articles/${article.slug}` : undefined,
  }));
};

export const transformContributorsToHighlight = (
  contributors: PageContributors[]
): HighlightItem[] => {
  return contributors.map((contributor) => ({
    id: contributor?.id?.toString(),
    title: contributor?.name,
    link: contributor.website || "",
  }));
};
