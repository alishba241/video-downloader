import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from "react-icons/fa";

const Buttons = () => {
  return (
    <div className="flex flex-col items-center px-4">
      {/* grid 1 */}
      <div className='flex flex-wrap justify-center gap-4 mt-14 sm:mt-20 w-full'>
        {/* Facebook */}
        <Link
          href="/facebook"
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center"
        >
          <FaFacebook className='text-blue-700 text-[26px]' />
          <span className="text-sm sm:text-base">facebook.com</span>
        </Link>

        {/* Instagram */}
        <Link
          href="/instagram"
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center"
        >
          <FaInstagram className='text-pink-500 text-[26px]' />
          <span className="text-sm sm:text-base">instagram.com</span>
        </Link>

        {/* Youtube */}
        <Link
          href="/youtube"
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center"
        >
          <FaYoutube className='text-red-600 text-[26px]' />
          <span className="text-sm sm:text-base">youtube.com</span>
        </Link>
      </div>

      {/* grid 2 */}
      <div className='flex flex-wrap justify-center gap-4 mt-4 sm:mt-8 w-full'>
        {/* Twitter */}
        <Link
          href="/twitter"
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center"
        >
          <FaTwitter className='text-blue-500 text-[26px]' />
          <span className="text-sm sm:text-base">twitter.com</span>
        </Link>

        {/* Tiktok */}
        <Link
          href="/tiktok"
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center"
        >
          <FaTiktok className='text-black text-[26px]' />
          <span className="text-sm sm:text-base">tiktok.com</span>
        </Link>
      </div>
    </div>
  )
}

export default Buttons
