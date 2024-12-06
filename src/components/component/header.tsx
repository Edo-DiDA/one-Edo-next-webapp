"use client";
import { Logo, LogoText } from "@/assets/vectors";
import { SubmenuType } from "@/types/content";
import Link from "next/link";
import React, { useState } from "react";

import MenuButton from "../contents/menu-button";

type HeaderProps = {
  links: SubmenuType[];
};

const Header = ({ links }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center text-gray-800 p-4  xl:pl-0 md:pr-14 md:gap-[70%]">
      <Link
        href="/"
        className="text-neutral-50 font-bold text-md md:text-xl md:flex md:flex-row"
      >
        <Logo />
        <div className="hidden md:block">
          <LogoText />
        </div>
      </Link>
      <div className="hidden md:flex text-white">
        <Link href="#services" className="hover:underline">
          Services
        </Link>
      </div>

      <div className="md:hidden flex items-center gap-5">
        <MenuButton action={openMenu} />

        {isMenuOpen && (
          <nav className="absolute overflow-y-scroll bg-primary-600 max-h-[80vh] top-24 px-4 pb-5 left-0 right-0 w-full text-white shadow-lg md:hidden">
            <p className="text-neutral-50 text-xs font-medium py-4">Services</p>
            <ul className="flex overflow-y-scroll flex-col -pb-3">
              {links.map(({ id, page }) => (
                <li key={id} className="py-3">
                  <Link
                    href={`/services/${page?.slug}`}
                    className="md:hover:underline active:underline"
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
