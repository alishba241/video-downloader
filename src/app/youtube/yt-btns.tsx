import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaYoutube } from 'react-icons/fa'

const YoutubeButtons = () => {
  return (
    <div>
      
      <div className='flex flex-wrap justify-center gap-4 mt-14 sm:mt-20 w-full'>
      {/* youtube */}
      <div className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center">
    <FaYoutube className='text-red-600 text-[26px]'/>
    <span className="text-sm sm:text-base">Youtube.com</span>
  </div>

  {/* youtube mp3 */}
      <Link href="/yt_mp3"  
          className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center">
     <Image src='/Youtube_Music.png' alt='' width={26} height={26}/>
    <span className="text-sm sm:text-base">Youtube mp3</span>
  </Link>

  {/* Youtube shorts*/}
      <Link href="/yt_shorts" 
       className="flex items-center gap-2 bg-lime-100 px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow w-[70%] sm:w-auto justify-center">
      <Image src='/Youtube_shorts.png' alt='' width={20} height={20}/>
    <span className="text-sm sm:text-base">Youtube Shorts</span>
  </Link>

    </div>
    </div>
  )
}

export default YoutubeButtons
