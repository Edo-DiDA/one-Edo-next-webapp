import Suggestions from "@/components/contents/suggestions";
import TopSection from "@/components/contents/top-section";
import { RefernceInfo, SuggestionInfo } from "@/types/content";
import ContentLayout from "@/components/contents/Layout";
import ServiceList from "@/components/contents/service-list";

const Home = () => {
  const suggestions: SuggestionInfo[] = [
    { name: "Money for my business" },
    { name: "Find work" },
    { name: "Visually impaired" },
    { name: "Register my business" },
    { name: "Physically challenged" },
    { name: "Speak to someone about my career" },
  ];

  const services: RefernceInfo[] = [
    {
      title: "Work",
      body: "Find work and support to build my career.",
    },
    {
      title: "Business",
      body: "Get support for starting, managing, and growing my business.",
    },
    {
      title: "Social Welfare and Benefits",
      body: "Get help with medicine, food, rent and more",
    },
  ];

  return (
    <ContentLayout>
      <TopSection
        title="Access ALL government services in one place"
        body="How can Edo state help you?"
      />
      <Suggestions suggestions={suggestions} showTitle={false} />
      <ServiceList services={services} />
    </ContentLayout>
  );
};

export default Home;
