"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { ChevronDownWhite, Logo } from "@/assets/vectors";
import { EdoLogo } from "@/assets/images";
import { ContentType, PageType } from "@/types/content";

import MenuButton from "../contents/menu-button";
import { getPageFromSlug } from "@/lib/functions/get-service";

type HeaderProps = {
  links: PageType[];
};

const Header = ({ links }: HeaderProps) => {
  const router = useRouter();
  const [content, setContent] = useState<ContentType | null>(null);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceModalRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsServiceOpen(false);
  }, [pathname]);

  const toggleServiceModal = () => {
    if (isServiceOpen) {
      setIsServiceOpen((prev) => !prev);
      return;
    }
    setIsServiceOpen(true);

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        serviceModalRef.current &&
        !serviceModalRef.current.contains(e.target as Node)
      ) {
        setIsServiceOpen(false);
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleMouseEnter = async (serviceName: string) => {
    const fetchedContent = await getPageFromSlug(serviceName);
    setContent(fetchedContent);
  };

  return (
    <header className="pt-[10px] md:pt-0 lg:pt-0 lg:mb-0 mb-[18px] flex justify-between md:h-[64px] lg:h-full items-center text-gray-800 lg:w-[50%] md:w-[100%] md:mb-[18px] md:flex-row xl:pl-0">
      {/* Logo and Home Link */}
      <Link href="/" className="md:w-[165px] md:h-[44px] flex items-center">
        <Logo />
        <Image
          src={EdoLogo}
          alt="one edo logo"
          className="w-[105px] h-[36px] md:w-[121px] md:h-[42px]"
        />
      </Link>

      {/* Desktop Services Link */}
      <div className="hidden md:hidden lg:flex lg:h-full lg:items-center text-white">
        <button
          className="hover:border-b text-white lg:mr-10 hover:pb-2 active:text-primary-400 "
          onClick={() => router.push("/")}
        >
          Home
        </button>

        <button
          className="hover:border-b items-center flex gap-2 hover:pb-2 focus:border-b focus:pb-2 active:text-primary-400 active:border-b active:border-primary-400 active:pb-2"
          onClick={toggleServiceModal}
        >
          <p className=""> Services </p>
          <ChevronDownWhite />
        </button>

        {isServiceOpen && (
          <div
            className="border shadow-lg border-primary-500 absolute m-auto inset-0 top-56 w-[800px] h-[320px]  flex items-center justify-center z-50"
            ref={serviceModalRef}
          >
            <div
              className="flex w-[500px] lg:w-[800px] h-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-primary-50 relative w-[50%] pb-5 p-2">
                <div className="flex flex-col text-primary-800">
                  {links.map((page, index) => (
                    <Link
                      key={index}
                      href={`/services/${page?.slug}`}
                      className="py-4 px-6 text-left hover:bg-primary-800 hover:text-white rounded-md"
                      onMouseEnter={() =>
                        handleMouseEnter((page?.name || "").toLowerCase())
                      }
                    >
                      {page?.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-primary-600 text-white w-[50%] p-6">
                {content?.submenus && content.submenus.length > 0 && (
                  <div>
                    <div className="font-semibold text-[22px]">
                      {content.name}
                    </div>
                    <div className="flex flex-col">
                      {content.submenus.map((submenu) => (
                        <Link
                          key={submenu.id}
                          href={`/services/${submenu.page?.slug}`}
                          className="block text-left py-2  hover:underline"
                        >
                          {submenu.page?.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="flex lg:hidden items-center gap-5">
        <MenuButton action={toggleMenu} />

        {isMenuOpen && (
          <nav className="absolute top-24 left-0 right-0 bg-primary-600 max-h-[80vh] overflow-y-scroll px-4 pb-5 shadow-lg z-40 text-white">
            <p className="text-neutral-50 text-xs font-medium py-4">Services</p>
            <ul className="flex flex-col">
              {links.map((page, index) => (
                <li key={index} className="py-3">
                  <Link
                    href={`/services/${page?.slug}`}
                    className="hover:underline focus:underline"
                    onMouseEnter={() => handleMouseEnter(page?.name || "")}
                  >
                    {page?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
