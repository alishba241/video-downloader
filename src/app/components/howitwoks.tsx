'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const steps = [
  {
    title: 'Step: 1',
    heading: 'Copy the link',
    description:
      'Start with Copying the Video URL you want to download.  Open the post you want to save, click the share button and proceed to the Copy link option to copy the link.',
  },
  {
    title: 'Step: 2',
    heading: 'Paste your link',
    description:
      'Now open SaveFrom pro in the web browser and paste the copied link into the search bar. Our fast and efficient servers will quickly get the data and prepare the link for you.',
  },
  {
    title: 'Step: 3',
    heading: 'Format options',
    description:
      'Here are the format options for saving your favorite data to your device. You can choose the best format suitable to your needs from the given options. This process will take just a few seconds.',
  },
  {
    title: 'Step: 4',
    heading: 'Your file is ready',
    description:
      'Your file is ready. Click the Download button to get your favorite clip to your device, enjoy it and share it with your family and friends.',
  },
];

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 md:mt-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        How does <span className="text-lime-500">SaveFrom pro</span> work?
      </h2>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-4 gap-8 cursor-pointer">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative border-2 border-lime-500 rounded-lg p-6 bg-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-lime-500 font-bold mb-2">{step.title}</h3>
            <h4 className="text-lg font-semibold mb-2">{step.heading}</h4>
            <p className="text-gray-700 text-sm">{step.description}</p>

            {/* Arrow for large screens */}
            {index < steps.length - 1 && (
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-lime-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden">
        <Swiper spaceBetween={16} slidesPerView={1.1}>
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="border-2 border-lime-500 rounded-lg p-6 bg-white shadow-md transition-transform duration-300 hover:scale-105 mx-2">
                <h3 className="text-lime-600 font-bold mb-2">{step.title}</h3>
                <h4 className="text-lg font-semibold mb-2">{step.heading}</h4>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HowItWorks;
