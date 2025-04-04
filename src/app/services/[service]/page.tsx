import Footer from "@/components/component/footer";
import Breadcrumbs from "@/components/contents/breadcrumbs";
import References from "@/components/contents/references";
import ServiceSuggestions from "@/components/contents/service-suggestions";
import SerivcesTopSection from "@/components/contents/service-top-section";
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
      <div className="">
        {content?.breadcrumbs?.length > 0 && (
          <Breadcrumbs items={content.breadcrumbs} />
        )}
        <div className="lg:flex">
          <SerivcesTopSection
            title={content.description}
            body={content.shortDescription || ""}
          />
          <ServiceSuggestions items={content?.popularsuggestion} />
        </div>
        <References showNew items={content?.submenus} />
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
