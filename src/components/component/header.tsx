"use client";
import Link from "next/link";
import React, { useState } from "react";

import MenuButton from "../contents/menu-button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center text-gray-800 p-4  xl:pl-0 md:pr-14 md:gap-[70%]">
      <Link href="/" className="text-neutral-50 font-bold text-md md:text-xl">
        oneEdo
      </Link>
      <div className="hidden md:flex text-white">
        <Link href="#services" className="hover:underline">
          Services
        </Link>
      </div>

      <div className="md:hidden flex items-center gap-5">
        <MenuButton action={openMenu} />

        {isMenuOpen && (
          <div className="absolute top-16 right-4 bg-gray-800 text-white rounded shadow-lg md:hidden">
            <nav className="flex flex-col space-y-2 p-4">
              <Link href="/education" className="hover:underline">
                Education
              </Link>
              <Link href="/health" className="hover:underline">
                Health
              </Link>
              <Link href="/work" className="hover:underline">
                Work
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
