'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../styles/Testimonials.module.css';
import { useLanguage } from '../contexts/LanguageContext';

const testimonials = [
  {
    key: 'user1',
    name: 'Ramesh Kumar',
    location: 'Uttarakhand',
    role: 'Wheat Farmer',
    rating: 5
  },
  {
    key: 'user2',
    name: 'Sita Patel',
    location: 'Maharashtra',
    role: 'Cotton Farmer',
    rating: 5
  },
  {
    key: 'user3',
    name: 'Ajay Singh',
    location: 'Punjab',
    role: 'Progressive Farmer',
    rating: 5
  }
];

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.farmicon.application&pcampaignid=web_shareImpact.com';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="testimonials" className={`${styles.section} py-24 relative min-h-screen`}>
      {/* Background Image with Overlay */}
      <div className={styles.gradientBg} aria-hidden="true" />
      
      {/* Floating Download Button */}
      <a 
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingDownload}
        aria-label="Download Farmicon App"
      >
        <Image
          src="/logo.png"
          alt="Farmicon Logo"
          width={28}
          height={28}
          className="w-7 h-7"
        />
        <span className="font-semibold">Get the App</span>
      </a>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 relative">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg md:text-xl text-green-700 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testi, idx) => (
            <div 
              key={testi.key}
              className={`${styles.card} rounded-2xl p-8 flex flex-col min-h-[400px]`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <div className={`${styles.quote} mb-8 flex-grow`}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t(`testimonials.users.${testi.key}.quote`)}
                </p>
              </div>

              {/* User Info */}
              <div className="mt-auto">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-green-700 rounded-full mb-4"></div>
                <h3 className="font-semibold text-xl text-green-800 mb-1">{testi.name}</h3>
                <p className="text-green-700">{testi.role}</p>
                <p className="text-sm text-green-600">{testi.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
