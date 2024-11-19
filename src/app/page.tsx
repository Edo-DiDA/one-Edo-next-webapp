import {
  ArrowLeftGreen,
  ArrowRightGreen,
  ArrowRightWhite,
  Search,
} from "@/assets/vectors";
import NewsCard from "../components/utilities/news-card";
import Tags from "../components/utilities/tags";
import Header from "@/components/component/header";
import Button from "@/components/utilities/button";
import Services from "@/components/component/services";

const Home = () => {
  return (
    <div>
      <div className="sm:py-[26px] sm:pl-4 sm:pr-[28px]">
        <Header showHambuger />
      </div>
      <div className="w-full h-[46px] bg-neutral-900 flex items-center pl-4">
        <p className="text-white text-xxs font-light">
          News updates for residents to access
        </p>
      </div>
      <div className="md:flex flex-row bg-neutral-800 md:p-20 gap-[5%] min-h-[304px] ">
        <div>
          <div className=" px-4 pt-[24px]  w-full">
            <p className="text-md text-neutral-50 md:text-4xl lg:text-5xl font-bold mb-2">
              Access ALL government services in Edo State
            </p>
            <p className="font-light text-neutral-50 text-xs md:text-[18px] mb-[40px]">
              Ask <span className="font-medium">oneEdo</span>, here to help you
            </p>
          </div>
          <div className="flex flex-row w-[90%] md:w-fit bg-neutral-100 h-[48px] items-center justify-between pr-[2px] rounded overflow-hidden mb-[40px] mx-4">
            <div className="flex flex-row items-center pl-2">
              <Search />
              <input
                className="ml-[12px] sm:ml-0 bg-neutral-100 h-full md:w-[300px]"
                placeholder="What do you need?"
                type="text"
              />
            </div>

            <Button
              rightIcon={<ArrowRightWhite />}
              className="h-[44px] w-[44px] justify-self-end bg-button-primary rounded flex items-center justify-center "
            />
          </div>
        </div>

        <div className="w-full sm:w-[50%] px-4 md:px-0">
          <h2 className="hidden md:block text-white text-[24px] font-semibold mb-4">
            What can the government do for you?
          </h2>

          <Tags />
        </div>
      </div>
      <div className="h-[84px] md:h-[94px] overflow-x-auto w-full bg-neutral-900 px-0 sm:px-4">
        <ul className="pl-4 h-full sm:h-auto flex items-center -mr-[24px] sm:space-x-[24px] whitespace-nowrap">
          <li className="w-[60%] md:w-[30%] h-[52px] md:h-[70px] mr-[24px] sm:mt-3 bg-white rounded" />
          <li className="w-[200px] md:w-[30%] h-[52px] md:h-[70px] mr-[24px] sm:mt-3 bg-white rounded" />
          <li className="hidden md:block w-[30%] h-[52px] md:h-[70px] mr-[24px] mt-3 bg-white rounded" />
        </ul>
      </div>
      <div className="min-h-[394px] bg-white px-[16px] pt-[24px] md:px-20 md:py-10">
        <div className="text-black font-medium text-xrs md:text-lg md:text-center pb-6">
          POPULAR SERVICES
        </div>
        <Services />
      </div>

      <div className="w-full pt-6 md:px-20 md:py-10">
        <p className="ml-4 text-xrs text-black font-medium md:text-lg md:text-center sm:pb-6">
          LATEST UPDATES
        </p>
        <div className="md:flex md:items-center md:justify-center md:gap-10">
          <div className="hidden md:block">
            <ArrowLeftGreen />
          </div>
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
              <NewsCard
                title="Edo State Govt giving jobs to people living with disabilities"
                body="The Minister of Social Development and Gender issues announced
                  on Monday 4th..."
              />
            </div>
          </div>
          <div className="hidden md:block">
            {" "}
            <ArrowRightGreen />
          </div>
        </div>
      </div>
      <div className="h-[142px] w-full bg-primary-900" />
    </div>
  );
};

export default Home;
