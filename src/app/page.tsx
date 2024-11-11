import {
  Banknote,
  CourseUp,
  Gavel,
  HandHeart,
  MoneyBag,
} from "@/assets/vectors";
import Image from "next/image";
import NewsCard from "../components/utilities/news-card";
import ServiceAccordion from "../components/utilities/service-accordion";
import Tags from "../components/utilities/tags";

const Home = () => {
  return (
    <div>
      <div className="py-[26px] pl-4 pr-[28px] flex-row w-full flex justify-between items-center">
        <p className="font-bold text-black text-md">oneEdo</p>
        <Image
          src={"/hamburger-menu.svg"}
          alt="hambuger menu"
          height={24}
          width={24}
          className="cursor-pointer"
        />
      </div>
      <div className="w-full h-[46px] bg-neutral-900 flex items-center pl-4">
        <p className="text-white text-xxs font-light">
          News updates for residents to access
        </p>
      </div>
      <div className="min-h-[304px] px-4 pt-[24px] bg-neutral-800 w-full">
        <p className="text-md text-neutral-50 font-bold mb-2">
          Access ALL government services in Edo State
        </p>
        <p className="font-medium text-neutral-50 text-xs mb-[40px]">
          Ask oneEdo, here to help you
        </p>
        <div className="flex flex-row w-full bg-neutral-100 h-[48px] items-center justify-between pr-[2px] rounded overflow-hidden mb-[40px]">
          <div className="flex flex-row items-center">
            <Image
              src="/magnifer.svg"
              alt="magnifer icon"
              width={24}
              height={24}
              className="mx-[12px]"
            />
            <input
              className="bg-neutral-100 h-full"
              placeholder="What do you need?"
              type="text"
            />
          </div>

          <button className="h-[44px] w-[44px] justify-self-end bg-button-primary rounded flex items-center justify-center ">
            <Image
              src="/arrow-right.svg"
              alt="arrow right icon"
              height={20}
              width={20}
            />
          </button>
        </div>

        <Tags />
      </div>

      <div className="h-[84px] items-center flex w-full overflow-x-auto bg-neutral-900 px-4">
        <ul className="flex align-center space-x-[24px] whitespace-nowrap">
          <li className="w-[200px] h-[52px] mr-[24px] bg-white rounded" />
          <li className="w-[200px] h-[52px] mr-[24px] bg-white rounded" />
        </ul>
      </div>

      <div className="min-h-[394px] bg-white px-[16px] pt-[24px]">
        <div className="text-black font-medium text-xrs">POPULAR SERVICES</div>

        <div className="mt-[8px]">
          <ServiceAccordion icon={<Banknote />} title="Financial Assistance" />
          <ServiceAccordion
            icon={<HandHeart />}
            title="Social Services and Welfare"
          />
          <ServiceAccordion icon={<MoneyBag />} title="Employment" />
          <ServiceAccordion icon={<CourseUp />} title="Business Services" />
          <ServiceAccordion
            icon={<Gavel />}
            title="Citizens Rights and Processes"
          />
        </div>
      </div>

      <div className="w-full">
        <p className="ml-4 text-xrs text-black font-medium">LATEST UPDATES</p>

        <div className="mt-[24px] overflow-x-auto pl-4">
          <div className="flex space-x-4 whitespace-nowrap">
            <NewsCard
              title="Edo State Govt giving jobs to people living with disabilities"
              body="The Minister of Social Development and Gender issues announced
                  on Monday 4th..."
            />

            <NewsCard
              title="Edo State Govt giving jobs to people living with disabilities"
              body="The Minister of Social Development and Gender issues announced
                  on Monday 4th..."
            />
          </div>
        </div>
      </div>

      <div className="h-[142px] w-full bg-primary-900" />
    </div>
  );
};

export default Home;
