import Suggestions from "@/components/contents/suggestions";
import TopSection from "@/components/contents/top-section";
import ContentLayout from "@/components/contents/Layout";
import ServiceList from "@/components/contents/service-list";
import { getPageFromSlug } from "@/lib/functions/get-service";
import Footer from "@/components/component/footer";

export const revalidate = 3;

const Home = async () => {
  const content = await getPageFromSlug("home");

  return (
    <ContentLayout>
      <div className="lg:flex  lg:justify-center lg:mx-auto bg-primary-600">
        <TopSection
          content="home"
          title={content?.description}
          body={content?.shortDescription || ""}
        />
        <Suggestions
          showTitle={false}
          pageType="home"
          items={content?.popularsuggestion}
          body={content?.shortDescription || ""}
        />
      </div>
      <ServiceList services={content?.submenus} />
      <Footer />
    </ContentLayout>
  );
};

export default Home;
