"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Youtube", "Facebook", "Instagram", "Twitter", "Tiktok", "Blog"];
const links = ["youtube", "facebook", "instagram", "twitter", "tiktok", "blog"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-2xl text-white py-6 px-6 sm:px-10 md:px-20 flex justify-between items-center">
        {/* Brand Name */}
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-bold text-black">Brand Name</h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-[16px] sm:text-[18px] md:text-[19px] text-black">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`/${links[index]}`}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">{link}</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-lime-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
 className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform transition-transform duration-300 z-40 ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
      >
        <div className="flex flex-col items-start p-6 gap-6 pt-24 text-[18px]">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`/${links[index]}`}
              onClick={() => setMenuOpen(false)}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">{link}</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-lime-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;
