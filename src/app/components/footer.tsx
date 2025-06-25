import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='border border-t mt-14'>
     <footer className="bg-white text-gray-800 py-8 mt-8">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[68px]">
    <div>
      <h1 className="text-2xl font-bold mb-2 text-black">Brand Name</h1>
    </div>
    
    <div>
      <ul className="space-y-2 text-[15px]">
        <li><Link href="/youtube" className="hover:underline">YouTube</Link></li>
        <li><Link href="/yt_shorts" className="hover:underline">YouTube Shorts</Link></li>
        <li><Link href="/yt_mp3" className="hover:underline">YouTube Mp3</Link></li>
        <li><Link href="/tiktok" className="hover:underline">Tiktok</Link></li>
        <li><Link href="/tiktok_mp3" className="hover:underline">Tiktok Mp3</Link></li>  
      </ul>
    </div>

    <div>
      <ul className="space-y-2 text-[15px]">
        <li><Link href="/instagram" className="hover:underline">Instagram</Link></li>
        <li><Link href="/insta_photo" className="hover:underline">Instagram photos</Link></li>
        <li><Link href="/insta_reel" className="hover:underline">Instagram reels</Link></li>
        <li><Link href="/insta_story" className="hover:underline">Instagram stories</Link></li>
      </ul>
    </div>

    <div>
      <ul className="space-y-2 text-[15px]">
        <li><Link href="/facebook" className="hover:underline">Facebook</Link></li>
        <li><Link href="/facebook_reels" className="hover:underline">facebook reels</Link></li>
        <li><Link href="/twitter" className="hover:underline">Twitter</Link></li>
      </ul>
    </div>

    {/* <div>
      <ul className="space-y-2">
        <li><Link href="#" className="hover:underline">For webmasters</Link></li>
        <li><Link href="#" className="hover:underline">Feedback</Link></li>
        <li><Link href="#" className="hover:underline">API</Link></li>
        <li><Link href="#" className="hover:underline">Advertising</Link></li>
        <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
        <li><Link href="#" className="hover:underline">EULA</Link></li>
        <li><Link href="#" className="hover:underline">PP</Link></li>
      </ul>
    </div> */}
  </div>
</footer>

    </div>
  )
}

export default Footer
