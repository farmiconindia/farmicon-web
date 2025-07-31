'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="w-full min-h-screen sm:min-h-[90dvh] !mt-0 flex flex-col items-center justify-start text-center relative overflow-hidden"
    >
      {/* Farm Background Image */}
      <Image
        src="/farm-bg.png"
        alt="Farm background"
        fill
        className="absolute inset-0 object-cover opacity-20 blur-sm pointer-events-none z-0"
        style={{ objectPosition: 'center' }}
        priority
      />
      {/* Glassmorphic Card */}
      <div className="relative z-[8] md:z-10 flex flex-col items-center justify-center w-[95%] sm:w-full max-w-2xl px-3 sm:px-4 md:px-8 py-6 sm:py-8 md:py-12 rounded-3xl shadow-2xl border border-white/30 bg-white/30 backdrop-blur-2xl overflow-hidden mt-28 sm:mt-32">
        {/* Animated Shine */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl">
          <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] animate-shine"
            style={{
              background: 'linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0.25) 100%)',
              filter: 'blur(8px)',
            }}
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 mb-4 animate-fadein drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-2xl text-slate-800 mb-8 max-w-2xl mx-auto animate-fadein-slow">
          {t('hero.subtitle')}
        </p>
        <a
          href="#download"
          className="px-8 py-4 bg-gradient-to-r from-green-50 to-blue-50 text-slate-900 rounded-2xl font-bold shadow-xl hover:scale-105 hover:from-green-100 hover:to-blue-100 transition-all duration-200 border border-blue-100 animate-glow"
        >
          {t('hero.cta')}
        </a>
      </div>
      {/* Farmer Image - Left Side */}
      <div className="absolute -bottom-4 sm:bottom-0 left-0 w-1/2 sm:w-1/3 h-[80%] sm:h-[95%] pointer-events-none z-[15]">
        <div className="relative w-full h-full">
          <Image
            src="/farmer.png"
            alt="Indian Farmer"
            fill
            className="object-contain object-bottom scale-[0.85] sm:scale-[0.9] md:scale-100"
            style={{ transform: 'translateX(-15%)' }}
            priority
          />
        </div>
      </div>

      {/* Drone Camera GIF - Flying around */}
      <div 
        className="absolute pointer-events-none animate-drone-flight z-20" 
        style={{ 
          width: '200px', 
          height: '150px',
          top: '12px',
          right: '5%'
        }}
      >
        <Image
          src="/Drone Camera.gif"
          alt="Drone Camera"
          width={200}
          height={150}
          className="w-full h-full object-contain scale-[0.65] sm:scale-75 md:scale-100"
          priority
        />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 flex items-end justify-center pointer-events-none">
        <div className="w-full h-24 bg-gradient-to-t from-green-50/60 to-transparent rounded-t-full blur-2xl opacity-70"></div>
      </div>
      <style>{`
        @keyframes drone-flight {
          0% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          25% { 
            transform: translate(-40px, 15px) rotate(-3deg); 
          }
          50% { 
            transform: translate(-80px, 5px) rotate(3deg); 
          }
          75% { 
            transform: translate(-40px, 20px) rotate(-2deg); 
          }
          100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
        }
        .animate-drone-flight {
          animation: drone-flight 15s ease-in-out infinite;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadein {
          animation: fadein 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-fadein-slow {
          animation: fadein 2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 24px 0 #bbf7d0, 0 0 0 #bfdbfe; }
          50% { box-shadow: 0 0 48px 8px #bfdbfe, 0 0 24px 0 #bbf7d0; }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-60%) rotate(10deg); opacity: 0.2; }
          50% { transform: translateX(60%) rotate(10deg); opacity: 0.4; }
          100% { transform: translateX(-60%) rotate(10deg); opacity: 0.2; }
        }
        .animate-shine {
          animation: shine 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 