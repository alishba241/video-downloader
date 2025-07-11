import Image from "next/image";
import Link from "next/link";
import React from "react";

const TiktokButtons = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center gap-4 mt-14 sm:mt-20 w-full'>
        {/* Tiktok */}
         <div className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center">
           <Image src='/tiktok.png' alt='tiktok' width={30} height={30}/>
          <span className="text-sm sm:text-base">Tiktok.com</span>
        </div>

        {/* Tiktok mp3 */}
        <Link
          href="/tiktok_mp3"
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center"
        >
           <Image src='/tiktokmp3.jpg' alt='tiktok mp3' width={30} height={30} className="rounded-lg"/>
          <span className="text-sm sm:text-base">Tiktok mp3</span>
        </Link>
      </div>
    </div>
  );
};

export default TiktokButtons;
