import Suggestions from "@/components/contents/suggestions";
import TopSection from "@/components/contents/top-section";
import ContentLayout from "@/components/contents/Layout";
import ServiceList from "@/components/contents/service-list";
import { getServicePage } from "@/lib/functions/get-service";

const Home = async () => {
  const content = await getServicePage();

  return (
    <ContentLayout>
      <TopSection
        title={content?.description}
        body={content?.shortDescription || ""}
      />
      <Suggestions showNew={true} items={content?.popularsuggestion} />
      <ServiceList services={content?.submenus} />
    </ContentLayout>
  );
};

export default Home;
