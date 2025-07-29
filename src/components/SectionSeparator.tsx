import React from 'react';

const SectionSeparator = () => (
  <div className="w-full h-16 relative flex items-center justify-center overflow-hidden -mb-8">
    <div
      className="absolute left-1/2 -translate-x-1/2 w-[90vw] h-16 rounded-full pointer-events-none"
      style={{
        background: 'linear-gradient(90deg, #d1fae5 0%, #bfdbfe 100%)',
        filter: 'blur(24px)', // Strong Gaussian blur
        opacity: 0.7,
      }}
    />
  </div>
);

export default SectionSeparator; 