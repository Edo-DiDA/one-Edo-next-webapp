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
    <header className="p flex justify-between items-center text-gray-800 p-4 md:px-14">
      <div className="hidden md:flex">
        <Link href="#services" className="hover:underline">
          Services
        </Link>
      </div>
      <span className="font-bold text-md md:text-xl">oneEdo</span>
      <div className="hidden md:flex space-x-20">
        <Link href="#archives" className="hover:underline">
          Archives
        </Link>
        <Link href="#contacts" className="hover:underline">
          Contacts
        </Link>
      </div>
      <div className="md:hidden flex items-center gap-5">
        <MenuButton action={openMenu} />

        {isMenuOpen && (
          <div className="absolute top-16 right-4 bg-gray-800 text-white rounded shadow-lg md:hidden">
            <nav className="flex flex-col space-y-2 p-4">
              <a href="#services" className="hover:underline">
                Services
              </a>
              <a href="#archives" className="hover:underline">
                Archives
              </a>
              <a href="#contacts" className="hover:underline">
                Contacts
              </a>
              <a href="/work" className="hover:underline">
                Work
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
