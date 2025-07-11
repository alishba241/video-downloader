import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const FacebookButton = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mt-14 sm:mt-20 w-full">
        {/* Facebook */}
        <div
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center"
        >
          <FaFacebook className="text-blue-500 text-[28px]" />
          <span className="text-sm sm:text-base">facebook.com</span>
        </div>

        {/* facebook Reels */}
        <Link
          href="/facebook_reels"
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center"
        >
           <Image src='/facebookreels.png' alt='facebook reels' width={30} height={30}/>
          <span className="text-sm sm:text-base">facebook Reels</span>
        </Link>
      </div>
    </div>
  );
};

export default FacebookButton;
