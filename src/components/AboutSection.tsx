import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, #f3fdf8 0%, #f0f9ff 100%)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">About Farmicon</h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
        Farmicon bridges tradition and technology, supporting Indian farmers, FPOs, and mandi sellers with modern tools and knowledge. Our mission is to make farming accessible, profitable, and sustainable for everyone.
      </p>
      {/* Tractor GIF Animation */}
      <div className="mx-auto w-96 h-64 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/tractor.gif"
            alt="Modern farming tractor"
            width={384}
            height={256}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 