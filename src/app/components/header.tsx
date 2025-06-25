import Link from "next/link";
import React from "react";

const navLinks = ["Youtube", "Facebook", "Instagram", "Twitter", "Tiktok"];
const links = ["youtube", "facebook", "instagram", "twitter", "tiktok"];

const Header = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-2xl text-white py-10 px-20 flex justify-between items-center">
        {/* Brand Name */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-black">Brand Name</h1>
        </Link>

        {/* Nav Items */}
        <div className="flex space-x-10 text-[19px] text-black">
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
      </div>
    </div>
  );
};

export default Header;
