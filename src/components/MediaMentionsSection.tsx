import React from 'react';
import Marquee from 'react-fast-marquee';

const media = [
  { name: 'AgriTech Awards 2024' },
  { name: 'Startup India' },
  { name: 'The Hindu' },
  { name: 'YourStory' },
  { name: 'Times of India' },
];

const MediaMentionsSection = () => {
  return (
    <section id="media" className="py-16 px-4 bg-blue-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">In the News & Recognized By</h2>
      <Marquee gradient={false} speed={40} pauseOnHover>
        {media.map((item) => (
          <div key={item.name} className="mx-8 inline-block">
            <div className="w-40 h-20 bg-white rounded-lg shadow flex items-center justify-center text-lg font-semibold text-blue-700 hover:scale-110 transition-transform cursor-pointer">
              {item.name}
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MediaMentionsSection; 