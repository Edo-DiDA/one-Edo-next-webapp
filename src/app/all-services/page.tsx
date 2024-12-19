import ServiceList from "@/components/contents/service-list";
import TopSection from "@/components/contents/top-section";
import { getPageFromSlug } from "@/lib/functions/get-service";

type AllServicePageProps = {
  params: Promise<{ service: string }>;
};
export const revalidate = 3;

const AllServicesPage = async ({ params }: AllServicePageProps) => {
  const content = await getPageFromSlug("home");
  console.log({ content });
  return (
    <>
      <div className="bg-primary-600 text-white ">
        <TopSection
          title="Browse all available services"
          body={` ${content?.submenus?.length} services`}
          content="all"
        />
      </div>
      <ServiceList services={content?.submenus} />
    </>
  );
};

export default AllServicesPage;
