import { remark } from "remark";
import html from "remark-html";

import { ArticleType, ContentType } from "@/types/content";

const baseUrl = "https://content.oneedo.ng/api";

const payload =
  "populate[submenus][on][shared.service-page][populate][page][fields][0]=name&populate[submenus][on][shared.service-page][populate][page][fields][1]=description&populate[submenus][on][shared.service-page][populate][page][fields][2]=slug&populate[submenus][on][shared.service-page][populate][page][fields][3]=shortDescription&populate[submenus][on][shared.article][populate][article][fields][0]=title&populate[submenus][on][shared.article][populate][article][fields][1]=description&populate[submenus][on][shared.article][populate][article][fields][2]=slug&populate[breadcrumbs][populate][page][fields][0]=name&populate[breadcrumbs][populate][page][fields][1]=slug&populate[popularsuggestion][populate][page][fields][0]=title&populate[popularsuggestion][populate][page][fields][1]=slug";

const articlesPayload =
  "populate[breadcrumbs][on][shared.service-page][populate][page][fields][0]=name&populate[breadcrumbs][on][shared.service-page][populate][page][fields][1]=description&populate[breadcrumbs][on][shared.service-page][populate][page][fields][2]=slug";

export const getPageFromSlug = async (slug: string): Promise<ContentType> => {
  const url = `${baseUrl}/categories/${slug}?${payload}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
};

export const getArticlesFromSlug = async (
  slug: string
): Promise<ArticleType> => {
  const url = `${baseUrl}/articles/${slug}?${articlesPayload}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
};

export const getHtmlContent = async (content: string) => {
  const result = await remark().use(html).process(content);
  return result.toString();
};