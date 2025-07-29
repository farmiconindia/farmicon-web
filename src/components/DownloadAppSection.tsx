import React from 'react';
import Image from 'next/image';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.farmicon.application&pcampaignid=web_shareImpact.com';

const DownloadAppSection = () => {
  return (
    <section id="download" className="py-20 px-4 bg-gradient-to-b from-white to-green-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 [text-shadow:0_2px_10px_rgba(0,0,0,0.1)]">
            Get Farmicon Today
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey towards smarter farming. Download the app now!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* QR Code */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl blur transition duration-1000 group-hover:blur-xl"></div>
            <div className="relative bg-white p-6 rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/Qr.png"
                alt="Download QR Code"
                width={180}
                height={180}
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Download Button */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg font-semibold text-gray-700">Or Download Directly</p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              <span className="text-2xl">🌱</span>
              <span className="group-hover:tracking-wider transition-all duration-300">
                Download on Play Store
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default DownloadAppSection; 