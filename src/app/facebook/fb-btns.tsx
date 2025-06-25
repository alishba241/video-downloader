import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const FacebookButton = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 mt-20">
        {/* Facebook */}
        <Link
          href="#"
          className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow"
        >
          <FaFacebook className="text-blue-700 text-[26px]" />
          <span>facebook.com</span>
        </Link>

        {/* facebook Reels */}
        <Link
          href="/facebook_reels"
          className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow"
        >
          <FaFacebook className="text-blue-700 text-[26px]" />
          <span>facebook Reels</span>
        </Link>
      </div>
    </div>
  );
};

export default FacebookButton;
