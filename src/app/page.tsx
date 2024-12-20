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
      <div className="lg:flex justify-center lg:w-full lg:h-auto bg-primary-600">
        <div className="lg:max-w-[960px] border-red lg:w-full lg:flex lg:flex-row">
          <TopSection
            content="home"
            title={content?.description}
            body={content?.shortDescription || ""}
          />
          <Suggestions
            showTitle={false}
            pageType="home"
            items={content?.popularsuggestion}
            subHeader={content?.shortDescription || ""}
          />
        </div>
      </div>
      <ServiceList popular services={content?.submenus} />
      <Footer />
    </ContentLayout>
  );
};

export default Home;
