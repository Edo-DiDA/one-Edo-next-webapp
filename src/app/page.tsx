import Suggestions from "@/components/contents/suggestions";
import TopSection from "@/components/contents/top-section";
import { RefernceInfo, SuggestionInfo } from "@/types/content";
import ContentLayout from "@/components/contents/Layout";
import { ArrowRightGreen } from "@/assets/vectors";
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
      title: "Business",
      body: "Get support for starting, managing, and growing my business.",
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
      <div className="pt-6 px-4">
        <h4 className="text-black font-medium text-xrs pb-6">
          POPULAR SERVICES
        </h4>

        <div className="flex flex-row flex-wrap -mb-4 -mr-4">
          <div className="h-[208px] h-[208px] rounded mb-4 bg-primary-50 w-[45%] mr-4 p-4 flex flex-col justify-between">
            <div>
              <h6 className="text-sm font-medium text-primary-800">Work</h6>
              <p className="pt-1 text-secondary-500 text-xs font-light">
                Find work and support to build my career.
              </p>
            </div>
            <div className="flex self-end">
              <ArrowRightGreen />
            </div>
          </div>

          <div className="h-[208px] h-[208px] rounded mb-4 bg-primary-50 w-[45%] mr-4 p-4 flex flex-col justify-between">
            <div>
              <h6 className="text-sm font-medium text-primary-800">Business</h6>
              <p className="pt-1 text-secondary-500 text-xs font-light">
                Get support for starting, managing, and growing my business.
              </p>
            </div>
            <div className="flex self-end">
              <ArrowRightGreen />
            </div>
          </div>

          <div className="h-[208px] h-[208px] rounded mb-4 bg-primary-50 w-[45%] mr-4 p-4 flex flex-col justify-between">
            <div>
              <h6 className="text-sm font-medium text-primary-800">Business</h6>
              <p className="pt-1 text-secondary-500 text-xs font-light">
                Get support for starting, managing, and growing my business.
              </p>
            </div>
            <div className="flex self-end">
              <ArrowRightGreen />
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Home;
