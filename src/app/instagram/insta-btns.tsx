import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstaButtons = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mt-20">
        {/* Instagram */}
        <Link
          href="#"
          className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow"
        >
          <FaInstagram className="text-pink-500 text-[26px]" />
          <span>Instagram.com</span>
        </Link>

        {/* Instagram Photo*/}
        <Link
          href="/insta_photo"
          className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow"
        >
          <FaInstagram className="text-pink-500 text-[26px]" />
          <span>Instagram Photo</span>
        </Link>

        {/* Instagram Reel */}
        <Link
          href="/insta_reel"
          className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow"
        >
          <FaInstagram className="text-pink-500 text-[26px]" />
          <span>Instagram Reel</span>
        </Link>

        {/* Instagram Story */}
        <Link
          href="/insta_story"
          className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow"
        >
          <FaInstagram className="text-pink-500 text-[26px]" />
          <span>Instagram Story</span>
        </Link>
      </div>
    </div>
  );
};

export default InstaButtons;
