import Link from "next/link";
import React from "react";
import { FaTiktok } from "react-icons/fa";

const TiktokButtons = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 mt-20">
        {/* Tiktok */}
        <Link
          href="#"
          className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow"
        >
          <FaTiktok className="text-black text-[26px]" />
          <span>Tiktok.com</span>
        </Link>

        {/* Tiktok mp3 */}
        <Link
          href="/tiktok_mp3"
          className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow"
        >
          <FaTiktok className="text-black text-[26px]" />
          <span>Tiktok mp3</span>
        </Link>
      </div>
    </div>
  );
};

export default TiktokButtons;
