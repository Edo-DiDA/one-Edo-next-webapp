"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef } from "react";

import { ChevronDownWhite, Logo } from "@/assets/vectors";
import { EdoLogo } from "@/assets/images";
import { ContentType, SubmenuType } from "@/types/content";

import MenuButton from "../contents/menu-button";
import { getPageFromSlug, getServices } from "@/lib/functions/get-service";

type HeaderProps = {
  links: SubmenuType[];
};

const Header = ({ links }: HeaderProps) => {
  const [content, setContent] = useState<ContentType | null>(null);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceModalRef = useRef<HTMLDivElement | null>(null); // Ref for service modal

  const toggleServiceModal = () => {
    if (isServiceOpen) {
      setIsServiceOpen(false);
      return;
    }
    setIsServiceOpen(true);

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        serviceModalRef.current &&
        !serviceModalRef.current.contains(e.target as Node)
      ) {
        setIsServiceOpen(false); // Close the modal if clicked outside
        document.removeEventListener("mousedown", handleOutsideClick); // Cleanup listener
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
    <header className="flex justify-between items-center p-4 text-gray-800 md:flex-row md:items-center md:w-[45%] xl:pl-0 ">
      {/* Logo and Home Link */}
      <Link href="/" className="flex items-center">
        <Logo />
        <Image
          src={EdoLogo}
          alt="one edo logo"
          className="w-[105px] h-[36px] md:w-[141px] md:h-[42px]"
        />
      </Link>

      {/* Desktop Services Link */}
      <div className="hidden md:block text-white">
        <button
          className="hover:border-b items-center flex gap-2 hover:pb-2 focus:border-b focus:pb-2 active:text-primary-400 active:border-b active:border-primary-400 active:pb-2"
          onClick={toggleServiceModal}
        >
          <p className=""> Services </p>
          <ChevronDownWhite />
        </button>
      </div>

      {isServiceOpen && (
        <div
          className="absolute top-24 left-56 flex items-center justify-center z-50"
          ref={serviceModalRef}
        >
          <div
            className="flex w-[800px] relative "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-primary-50 relative w-[50%] pb-5 p-2">
              <div className="flex flex-col text-primary-800">
                {links.map(({ id, page }) => (
                  <Link
                    key={id}
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

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-5">
        <MenuButton action={toggleMenu} />

        {isMenuOpen && (
          <nav className="absolute top-24 left-0 right-0 bg-primary-600 max-h-[80vh] overflow-y-scroll px-4 pb-5 shadow-lg z-40 text-white">
            <p className="text-neutral-50 text-xs font-medium py-4">Services</p>
            <ul className="flex flex-col">
              {links.map(({ id, page }) => (
                <li key={id} className="py-3">
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
