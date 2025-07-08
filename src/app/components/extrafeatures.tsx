'use client';

import Image from 'next/image';

export default function ExtraFeatures() {
  return (
    <section className="mt-14 md:mt-28 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* First Feature */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Choose from Multiple Resolutions –<br className="hidden md:block" />
            SD to 4K
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SaveFrom pro supports a variety of video resolutions, including SD, HD, Full HD, 2K, and 4K. The available resolution options depend on the original quality of the video. For instance, if a video is uploaded in 1080p, you can download it in the same high-definition quality.

          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/feature1.jpg" 
            alt=""
            width={400}
            height={400}
            className="w-80 h-auto"
          />
        </div>

        {/* Second Feature */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Works on All Major Browsers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SaveFrom pro is compatible with all popular browsers, including Google Chrome, Mozilla Firefox, Safari, Opera, and other Chromium-based browsers. This ensures a smooth and hassle-free downloading experience, no matter which browser you prefer.

          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/feature2.jpg" 
            alt=""
            width={400}
            height={400}
            className="w-80 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
