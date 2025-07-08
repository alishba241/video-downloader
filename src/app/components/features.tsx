import React from 'react';
import { Check } from 'lucide-react';

const Features = () => {
  const features = [
    'Get your favorite content quickly and safely for offline viewing on your device.',
    'No signup is required to use our service. This is free and always will be.',
    'Just copy and paste the URL of your favorite data to get it on your devices.',
    'You can download your data in their original and high definition quality.',
    'With our limitless free service, you can download all your favorite videos.',
    'We offer the fastest speeds, so you don’t need to be stuck in a lazy process.',
  ];

  return (
<div className="bg-lime-500 text-white rounded-2xl px-6 sm:px-8 md:px-10 py-10 max-w-6xl mx-4 sm:mx-auto mt-16 sm:mt-20 shadow-lg">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-8 sm:mb-10 leading-tight">
        Features of SaveFrom pro:
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 sm:gap-x-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
          >
            <Check className="w-5 h-5 text-white mt-1 shrink-0" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
