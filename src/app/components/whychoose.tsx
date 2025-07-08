import React from 'react';

const Whychoose = () => {
  return (
    <div className="bg-white mt-10 md:mt-20 sm:mt-20 px-4 sm:px-6 md:px-0 max-w-6xl mx-4 sm:mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 leading-snug">
        Why Choose <span className="text-lime-500">SaveFrompro.com?</span>
      </h2>

      <ul className="space-y-4 text-sm sm:text-base text-gray-700 list-disc list-inside leading-relaxed">
        <li>
          <strong>Fast and Easy:</strong> No complicated steps—just copy, paste, and download.
        </li>
        <li>
          <strong>High-Quality Downloads:</strong> Enjoy videos in HD, Full HD, or even 4K resolution.
        </li>
        <li>
          <strong>Browser-Friendly:</strong> Works seamlessly across all major browsers.
        </li>
        <li>
          <strong>Offline Access:</strong> Save your favorite videos and watch them anytime, even without an internet connection.
        </li>
      </ul>
    </div>
  );
};

export default Whychoose;
