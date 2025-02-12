import Footer from "@/components/component/footer";
import ServiceList from "@/components/contents/service-list";
import { getPageFromSlug, getSubMenus } from "@/lib/functions/get-service";
import AllSerivcesTopSection from "@/components/contents/all-services-top";

export const revalidate = 3;

const AllServicesPage = async () => {
  const content = await getSubMenus(false);
  return (
    <>
      <div className="bg-primary-600 text-white ">
        <AllSerivcesTopSection
          title="Browse all available services"
          body={`${content?.length} services`}
          content="all"
        />
      </div>
      <ServiceList services={content} />
      <Footer />
    </>
  );
};

export default AllServicesPage;
