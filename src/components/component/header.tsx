"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import { Logo } from "@/assets/vectors";
import { EdoLogo } from "@/assets/images";
import { SubmenuType } from "@/types/content";

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
    <header className="flex justify-between md:items-center md:flex-row items-center text-gray-800 p-4 md:w-[45%] xl:pl-0">
      <Link href="/" className="flex flex-row items-center">
        <Logo />
        <Image
          src={EdoLogo}
          alt="one edo logo"
          className="w-[105px] h-[36px] md:w-[141px] md:h-[42px]"
        />
      </Link>
      <div className="hidden md:block text-white">
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
