'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-[60] w-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-between shadow-xl bg-gradient-to-r from-green-50 to-blue-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 relative">
          <Image
            src="/logo.png"
            alt="Farmicon Logo"
            fill
            sizes="(max-width: 768px) 32px, 32px"
            priority
            className="object-contain"
          />
        </div>
        <span className="font-extrabold text-2xl text-green-900">Farmicon</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center">
        <div className="flex items-center space-x-8 mr-8">
          {['About', 'Features', 'How It Works', 'Media', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '')}`}
              className="font-medium text-slate-800 hover:text-green-600 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Download Button - Desktop */}
        <a
          href="https://play.google.com/store/apps/details?id=com.farmicon.application&pcampaignid=web_shareImpact.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-[0.98] transition-all duration-200 border border-white/10"
        >
          <div className="w-5 h-5 relative">
            <Image
              src="/logo.png"
              alt="Farmicon Logo"
              fill
              sizes="20px"
              className="object-contain"
            />
          </div>
          <span>Download App</span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 rounded-lg transition-colors hover:bg-black/5"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-green-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
          />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-[70]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`
          fixed top-0 left-0 w-[85vw] max-w-[320px] h-[100dvh] bg-white shadow-2xl transform transition-all duration-500 ease-out z-[80] md:hidden
          ${isMenuOpen ? 'translate-x-0 opacity-100 shadow-2xl' : '-translate-x-full opacity-0 shadow-none'}
        `}
      >
        <style jsx global>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for IE, Edge and Firefox */
          .scrollbar-none {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>

        <div className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 relative">
                <Image
                  src="/logo.png"
                  alt="Farmicon Logo"
                  fill
                  sizes="28px"
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-xl text-green-900">Farmicon</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-black/5 active:bg-black/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-green-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 bg-white overflow-y-auto scrollbar-none">
            <div className="py-2">
              {['About', 'Features', 'How It Works', 'Media', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '')}`}
                  className="block px-6 py-3.5 text-slate-800 text-lg font-medium hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 active:from-green-100 active:to-blue-100 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Download Section */}
          <div className="flex-shrink-0 w-full border-t border-gray-100 bg-gradient-to-br from-green-50/80 to-blue-50/80">
            <div className="p-6 space-y-4 text-center">
              <h3 className="text-xl text-green-900 font-bold">Get the Farmicon App</h3>
              
              {/* QR Code */}
              <div className="bg-white mx-auto w-48 h-48 p-3 rounded-2xl shadow-lg">
                <Image
                  src="/Qr.png"
                  alt="Download QR Code"
                  width={168}
                  height={168}
                  className="w-full h-full rounded-xl"
                />
              </div>
              
              {/* Download Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.farmicon.application&pcampaignid=web_shareImpact.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src="/logo.png"
                  alt="Farmicon Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span>Download App</span>
              </a>
              
              <p className="text-sm text-slate-600">Scan QR code or tap to download</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
