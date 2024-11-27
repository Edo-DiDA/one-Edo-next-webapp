import Breadcrumbs from "@/components/contents/breadcrumbs";
import References from "@/components/contents/references";
import Suggestions from "@/components/contents/suggestions";
import TopSection from "@/components/contents/top-section";
import { getPageFromSlug } from "@/lib/functions/get-service";

type ServicePageProps = {
  params: Promise<{ service: string }>;
};
export const revalidate = 3;

const ServicesPage = async ({ params }: ServicePageProps) => {
  const slug = await params;
  const content = await getPageFromSlug(slug.service);

  return (
    <>
      {content?.breadcrumbs?.length > 0 && (
        <Breadcrumbs items={content.breadcrumbs} />
      )}
      <div className="md:flex md:justify-between">
        <TopSection
          title={content.description}
          body={content.shortDescription || ""}
        />
        <Suggestions items={content?.popularsuggestion} />
      </div>
      <References showNew items={content?.submenus} />
    </>
  );
};

export default ServicesPage;
