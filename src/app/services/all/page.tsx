import Footer from "@/components/component/footer";
import ServiceList from "@/components/contents/service-list";
import { getSubMenus } from "@/lib/functions/get-service";
import AllSerivcesTopSection from "@/components/contents/all-services-top";

export const revalidate = 3;

const AllServicesPage = async () => {
  const content = await getSubMenus(false);
  const filtered = content.filter(
    (service) => service.name.toLowerCase() !== "home"
  );
  return (
    <>
      <div className="bg-primary-600 text-white ">
        <AllSerivcesTopSection
          title="Browse all available services"
          body={`${filtered?.length} services`}
          content="all"
        />
      </div>
      <ServiceList services={filtered} />
      <Footer />
    </>
  );
};

export default AllServicesPage;
