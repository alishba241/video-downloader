import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='border-t mt-14'>
      <footer className="bg-white text-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-8">
          
          {/* Column 1 - Logo & Description */}
          <div className="text-sm text-gray-600 leading-6 max-w-sm">
            <Link href="/">
              <h1 className='text-[22px] md:text-[28px] font-bold text-lime-500 mb-2'>
                SaveFrom Pro
              </h1>
            </Link>
            <p>
              SaveFrom Pro is an independent tool and is not affiliated with or endorsed by YouTube, Facebook, Instagram, TikTok, Twitter, or any other platform. Use it responsibly and respect content creators&apos; rights. We are not liable for misuse of downloaded content.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold mb-3">Navigations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/youtube" className="hover:underline">YouTube</Link></li>
              <li><Link href="/yt_shorts" className="hover:underline">YouTube Shorts</Link></li>
              <li><Link href="/yt_mp3" className="hover:underline">YouTube Mp3</Link></li>
              <li><Link href="/tiktok" className="hover:underline">Tiktok</Link></li>
              <li><Link href="/tiktok_mp3" className="hover:underline">Tiktok Mp3</Link></li>
              <li><Link href="/twitter" className="hover:underline">Twitter</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold mb-3">More Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/instagram" className="hover:underline">Instagram</Link></li>
              <li><Link href="/insta_photo" className="hover:underline">Instagram photos</Link></li>
              <li><Link href="/insta_reel" className="hover:underline">Instagram reels</Link></li>
              <li><Link href="/insta_story" className="hover:underline">Instagram stories</Link></li>
              <li><Link href="/facebook" className="hover:underline">Facebook</Link></li>
              <li><Link href="/facebook_reels" className="hover:underline">Facebook reels</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-3">Legal Pages</h4>
            <ul className="space-y-2 text-sm">
              
              <li><Link href="/blog" className="hover:underline">Blogs</Link></li>
              <li><Link href="/terms_of_service" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/contact_us" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/privacy_policy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t mt-10 pt-10 text-center text-sm md:text-md text-gray-500">
          © {new Date().getFullYear()}
          <Link href="/" className="hover:underline text-blue-500 font-bold"> SaveFrom Pro</Link> All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
