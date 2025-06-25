import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTiktok} from "react-icons/fa";


const Buttons = () => {
  return (
    <div>

        {/* grid 1 */}

    <div className='flex flex-wrap justify-center gap-4 mt-20'>
      {/* Facebook */}
      <Link href="/facebook"  className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow">
    <FaFacebook className='text-blue-700 text-[26px]' />
    <span>facebook.com</span>
  </Link>

  {/* Instagram */}
      <Link href="/instagram"  className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow">
    <FaInstagram className='text-pink-500 text-[26px]'/>
    <span>instagram.com</span>
  </Link>

  {/* Youtube */}
      <Link href="/youtube"  className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow">
    <FaYoutube className='text-red-600 text-[26px]'/>
    <span>youtube.com</span>
  </Link>

    </div>

    {/* grid 2 */}

    <div className='flex flex-wrap justify-center gap-4 mt-8'>
         {/* Twitter */}
      <Link href="/twitter"  className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow">
    <FaTwitter className='text-blue-500 text-[26px]'/>
    <span>twitter.com</span>
  </Link>

  {/* Tiktok */}
      <Link href="/tiktok"  className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow">
    <FaTiktok className='text-black text-[26px]'/>
    <span>tiktok.com</span>
  </Link>
        </div>
    </div>
  )
}

export default Buttons
