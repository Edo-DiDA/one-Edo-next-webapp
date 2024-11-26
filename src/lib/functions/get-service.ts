import { ContentType } from "@/types/content";

const baseUrl = "https://content.oneedo.ng/api/categories/";

const payload =
  "populate[submenus][on][shared.service-page][populate][page][fields][0]=name&populate[submenus][on][shared.service-page][populate][page][fields][1]=description&populate[submenus][on][shared.service-page][populate][page][fields][2]=slug&populate[submenus][on][shared.service-page][populate][page][fields][3]=shortDescription&populate[submenus][on][shared.article][populate][article][fields][0]=title&populate[submenus][on][shared.article][populate][article][fields][1]=description&populate[submenus][on][shared.article][populate][article][fields][2]=slug&populate[breadcrumbs][populate][page][fields][0]=name&populate[breadcrumbs][populate][page][fields][1]=slug&populate[popularsuggestion][populate][page][fields][0]=title&populate[popularsuggestion][populate][page][fields][1]=slug";

const staticUrl =
  "https://content.oneedo.ng/api/categories/home?populate[submenus][on][shared.service-page][populate][page][fields][0]=name&populate[submenus][on][shared.service-page][populate][page][fields][1]=description&populate[submenus][on][shared.service-page][populate][page][fields][2]=slug&populate[submenus][on][shared.service-page][populate][page][fields][3]=shortDescription&populate[submenus][on][shared.article][populate][article][fields][0]=title&populate[submenus][on][shared.article][populate][article][fields][1]=description&populate[submenus][on][shared.article][populate][article][fields][2]=slug&populate[breadcrumbs][populate][page][fields][0]=name&populate[breadcrumbs][populate][page][fields][1]=slug&populate[popularsuggestion][populate][page][fields][0]=title&populate[popularsuggestion][populate][page][fields][1]=slug";

export const getPageFromSlug = async (slug: string): Promise<ContentType> => {
  const url = `${baseUrl}${slug}?${payload}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
};

export const getServicePage = async (): Promise<ContentType> => {
  const res = await fetch(staticUrl);
  const data = await res.json();

  return data.data;
};
