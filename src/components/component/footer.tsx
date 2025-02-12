import Link from "next/link";

import { isNotLastOnList } from "@/lib/functions";
import Image from "next/image";
import { FooterLogo } from "@/assets/images";
import { getSubMenus } from "@/lib/functions/get-service";

const otherNavs = [
  { name: "Privacy", link: "privacy" },
  { name: "Terms and conditions", link: "terms" },
];

const Footer = async () => {
  const bottomNav = await getSubMenus(true);

  return (
    <footer className="flex-col px-4 flex h-[438px] md:h-[266px] lg:h-[266px] lg:flex md:flex md:flex-row md:px-[40px] lg:flex-row md:justify-between lg:justify-between md:items-start lg:items-start bg-primary-900 lg:px-[240px] py-10">
      <div className="flex items-center hidden md:block">
        <Image
          src={FooterLogo}
          alt="one edo logo"
          className="lg:w-[240px] lg:h-[72px] md:w-[150px] md:h-[45px]"
        />
      </div>

      <div className="">
        <h4 className="text-white font-bold text-sm mb-3">Services</h4>
        <ul className="list-none -pb-4 border-b-[0.5px] md:border-none border-neutral-800">
          {bottomNav.map(({ name, slug }, index) => (
            <li className="mb-4" key={index}>
              <Link
                href={`/services/${slug}`}
                className="text-xxs text-white font-light"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="list-none pb-4 -mb-4 border-neutral-800 mt-6 md:mt-0 md:w-auto lg:w-auto">
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

      <div className="lg:hidden md:hidden pt-[33px]">
        <Image
          src={FooterLogo}
          alt="one edo logo"
          className="w-[150px] h-[45px]"
        />
      </div>
    </footer>
  );
};

export default Footer;
