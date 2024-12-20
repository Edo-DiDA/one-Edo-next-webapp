import Footer from "@/components/component/footer";
import ServiceList from "@/components/contents/service-list";
import { getPageFromSlug } from "@/lib/functions/get-service";
import AllSerivcesTopSection from "@/components/contents/all-services-top";

export const revalidate = 3;

const AllServicesPage = async () => {
  const content = await getPageFromSlug("home");
  return (
    <>
      <div className="bg-primary-600 text-white ">
        <AllSerivcesTopSection
          title="Browse all available services"
          body={`${content?.submenus?.length} services`}
          content="all"
        />
      </div>
      <ServiceList services={content?.submenus} />
      <Footer />
    </>
  );
};

export default AllServicesPage;
