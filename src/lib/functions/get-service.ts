import { ContentType } from "@/types/content";

const staticUrl =
  "https://content.oneedo.ng/api/categories/home?populate[submenus][on][shared.service-page][populate][page][fields][0]=name&populate[submenus][on][shared.service-page][populate][page][fields][1]=description&populate[submenus][on][shared.service-page][populate][page][fields][2]=slug&populate[submenus][on][shared.article][populate][article][fields][0]=title&populate[submenus][on][shared.article][populate][article][fields][1]=description&populate[submenus][on][shared.article][populate][article][fields][2]=slug&populate[breadcrumbs][populate][page][fields][0]=name&populate[breadcrumbs][populate][page][fields][1]=slug&populate[popularsuggestion][populate][page][fields][0]=title&populate[popularsuggestion][populate][page][fields][1]=slug";

export const getServicePage = async (): Promise<ContentType> => {
  const res = await fetch(staticUrl);
  const data = await res.json();
  console.log("data", data.data);

  return data.data;
};
