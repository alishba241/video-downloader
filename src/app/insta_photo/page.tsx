import React from 'react'

const page = () => {
  return (
    <div>
       <div className="flex flex-col justify-center items-center mt-40">
        {/* main heading */}
        <div>
          <h1 className="text-black text-3xl font-bold ">
            Instagram Photo Downloader
          </h1>
        </div>

        {/* Input  */}
        <div className="flex w-full max-w-2xl border-2 border-lime-500 rounded-3xl mt-10">
          <input
            type="text"
            placeholder="Paste your video link here"
            className="w-full px-4 py-2 focus:outline-none rounded-3xl"
          />

          {/* download btn */}
          <button className="bg-lime-500 text-white px-6 py-3 font-semibold hover:bg-lime-600 rounded-r-2xl">
            Download
          </button>
        </div>
      </div>
    </div>
  )
}

export default page
