import Suggestions from "@/components/contents/suggestions";
import TopSection from "@/components/contents/top-section";
import { SuggestionInfo } from "@/types/content";
import ContentLayout from "@/components/contents/Layout";
import ServiceList from "@/components/contents/service-list";
import { getServicePage } from "@/lib/functions/get-service";

const Home = async () => {
  const content = await getServicePage();

  const suggestions: SuggestionInfo[] = [
    { name: "Money for my business" },
    { name: "Find work" },
    { name: "Visually impaired" },
    { name: "Register my business" },
    { name: "Physically challenged" },
    { name: "Speak to someone about my career" },
  ];

  return (
    <ContentLayout>
      <TopSection
        title="Access ALL government services in one place"
        body={content.description}
      />
      <Suggestions
        showNew={true}
        items={content?.popularsuggestion}
        suggestions={suggestions}
        showTitle={false}
      />
      <ServiceList services={content?.submenus} />
    </ContentLayout>
  );
};

export default Home;
