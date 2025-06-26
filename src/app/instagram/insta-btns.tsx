import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstaButtons = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center gap-4 mt-14 sm:mt-20 w-full'>
        {/* Instagram */}
        <div
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center"
        >
          <FaInstagram className="text-pink-500 text-[26px]" />
          <span className="text-sm sm:text-base">Instagram.com</span>
        </div>

        {/* Instagram Photo*/}
        <Link
          href="/insta_photo"
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center"
        >
          <Image src='/instaphoto.png' alt='' width={32} height={32}/>
          <span className="text-sm sm:text-base">Instagram Photo</span>
        </Link>

        {/* Instagram Reel */}
        <Link
          href="/insta_reel"
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center"
        >
          <Image src='/instareel.png' alt='' width={30} height={30}/>
          <span className="text-sm sm:text-base">Instagram Reel</span>
        </Link>

        {/* Instagram Story */}
        <Link
          href="/insta_story"
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center"
        >
           <Image src='/instastory.png' alt='' width={36} height={36}/>
          <span className="text-sm sm:text-base">Instagram Story</span>
        </Link>
      </div>
    </div>
  );
};

export default InstaButtons;
