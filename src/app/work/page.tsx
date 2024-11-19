import Breadcrumbs from "@/components/contents/breadcrumbs";
import Suggestions from "@/components/contents/suggestions";
import TopSection from "@/components/contents/top-section";
import { RefernceInfo, SuggestionInfo } from "@/types/content";
import References from "@/components/contents/references";
import ContentLayout from "@/components/contents/Layout";

const Work = () => {
  const crumbs: string[] = ["Home", "Work", "Starting a business"];
  const suggestions: SuggestionInfo[] = [
    { name: "Get career advice" },
    { name: "Find available work" },
    { name: "Skills training" },
  ];

  const references: RefernceInfo[] = [
    {
      title: "Registering my business",
      body: "How to start your business and get the necessary licenses and permits",
    },
    {
      title: " Licensing and Permits",
    },
    {
      title: " Licensing and Permits",
    },
  ];

  return (
    <ContentLayout>
      <Breadcrumbs breadcrumbs={crumbs} />
      <TopSection
        title="Starting a business"
        body="How to start your business and get the licenses and permits"
      />
      <Suggestions suggestions={suggestions} />
      <References references={references} />
    </ContentLayout>
  );
};

export default Work;
