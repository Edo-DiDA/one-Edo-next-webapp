import Link from "next/link";

import { isNotLastOnList } from "@/lib/functions";

const bottomNav = [
  { name: "Work", link: "work" },
  { name: "Business", link: "business" },
  { name: "Social Welfare and Benefits", link: "social-welfare-and-benefits" },
  { name: "Health", link: "health" },
];

const otherNavs = [
  { name: "Privacy", link: "privacy" },
  { name: "Terms and conditions", link: "terms" },
];

const Footer = () => {
  return (
    <footer className="h-[438px]  bg-primary-900 py-10 px-4 md:py-20 lg:pl-20 xl:pl-40 ">
      <div className="flex flex-col  md:flex-row-reverse md:justify-end md:gap-[20%]">
        <div className="flex flex-col  md:flex-row justify-between md:gap-[30%]">
          <div className="md:w-[450px]">
            <h4 className="text-white font-bold text-sm mb-3">Services</h4>
            <ul className="list-none pb-4 border-b-[0.5px] md:border-none border-neutral-800">
              {bottomNav.map(({ name, link }, index) => (
                <li className="mb-4" key={index}>
                  <Link
                    href={`/services/${link}`}
                    className="text-xxs text-white font-light"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="list-none pb-4 -mb-4 border-neutral-800 mt-6 md:mt-0 md:w-[300px]">
              {otherNavs.map(({ name, link }, index) => (
                <li
                  className={
                    isNotLastOnList(index, otherNavs.length) ? "mb-4" : "mb-0"
                  }
                  key={index}
                >
                  <Link
                    href={`/services/${link}`}
                    className="text-xxs text-white font-light"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="text-md text-bold text-neutral-50 mt-6 md:text-5xl">
            oneEdo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
