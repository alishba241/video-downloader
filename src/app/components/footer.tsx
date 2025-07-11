import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='border border-t mt-14'>
      <footer className="bg-white text-gray-800 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div>
 <Link href="/">
<Image
  src="/logo.png"
  alt="logo"
  width={250}
  height={250}
  className="w-[150px] md:w-[250px] h-auto"
/>
        </Link>         
        </div>

          <div>
            <ul className="space-y-2 text-sm sm:text-[15px]">
              <li><Link href="/youtube" className="hover:underline">YouTube</Link></li>
              <li><Link href="/yt_shorts" className="hover:underline">YouTube Shorts</Link></li>
              <li><Link href="/yt_mp3" className="hover:underline">YouTube Mp3</Link></li>
              <li><Link href="/tiktok" className="hover:underline">Tiktok</Link></li>
              <li><Link href="/tiktok_mp3" className="hover:underline">Tiktok Mp3</Link></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-sm sm:text-[15px]">
              <li><Link href="/instagram" className="hover:underline">Instagram</Link></li>
              <li><Link href="/insta_photo" className="hover:underline">Instagram photos</Link></li>
              <li><Link href="/insta_reel" className="hover:underline">Instagram reels</Link></li>
              <li><Link href="/insta_story" className="hover:underline">Instagram stories</Link></li>
               <li><Link href="/facebook" className="hover:underline">Facebook</Link></li>
              <li><Link href="/facebook_reels" className="hover:underline">Facebook reels</Link></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-sm sm:text-[15px]">
             
              <li><Link href="/twitter" className="hover:underline">Twitter</Link></li>
              <li><Link href="/blog" className="hover:underline">Blogs</Link></li>
              <li><Link href="/terms_of_service" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/contact_us" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer
