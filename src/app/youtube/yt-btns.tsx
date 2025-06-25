import Link from 'next/link'
import React from 'react'
import { FaYoutube } from 'react-icons/fa'

const YoutubeButtons = () => {
  return (
    <div>
      
    <div className='flex flex-wrap justify-center gap-4 mt-20'>
      {/* youtube */}
      <Link href="#"  className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow">
    <FaYoutube className='text-red-600 text-[26px]'/>
    <span>Youtube.com</span>
  </Link>

  {/* youtube mp3 */}
      <Link href="/yt_mp3"  className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow">
    <FaYoutube className='text-red-600 text-[26px]'/>
    <span>Youtube mp3</span>
  </Link>

  {/* Youtube shorts*/}
      <Link href="/yt_shorts"  className="flex items-center gap-2 bg-lime-100 px-8 py-4 rounded-md shadow">
    <FaYoutube className='text-red-600 text-[26px]'/>
    <span>Youtube Shorts</span>
  </Link>

    </div>
    </div>
  )
}

export default YoutubeButtons
