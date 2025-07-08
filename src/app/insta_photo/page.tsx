import React from 'react'
import InstaButtons from '../instagram/insta-btns'

const page = () => {
  return (
    <div>
       <div className="flex flex-col justify-center items-center md:mt-40 mt-32 px-4 sm:px-6 md:px-8">
      {/* main heading */}
      <div className="text-center">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold">
          Instagram Photo Downloader
        </h1>
      </div>

      {/* Input */}
      <div className="flex flex-col sm:flex-row w-full max-w-2xl border-2 border-lime-500 rounded-3xl mt-10 overflow-hidden">
        <input
          type="text"
          placeholder="Paste your video link here"
          className="w-full px-4 py-3 focus:outline-none text-sm sm:text-base"
        />

        {/* download btn */}
        <button className="bg-lime-500 text-white px-6 py-3 font-semibold hover:bg-lime-600 sm:rounded-r-2xl">
          Download
        </button>
      </div>
    </div>
    {/* Insta video downloading buttons */}
          <InstaButtons />
    </div>
  )
}

export default page
