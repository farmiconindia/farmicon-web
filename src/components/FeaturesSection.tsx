'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../styles/Features.module.css';
import { useLanguage } from '../contexts/LanguageContext';

const featureKeys = [
  { key: 'droneSpray', image: '/drone.png' },
  { key: 'farmingChatbot', image: '/chat.png' },
  { key: 'cropPrices', image: '/crop price.png' },
  { key: 'soilTesting', image: '/soil testing.png' },
  { key: 'cropDoctor', image: '/crop doctor.png' },
  { key: 'weatherUpdates', image: '/weather.png' },
  { key: 'govtSchemes', image: '/government schemes.png' },
  { key: 'helpServices', image: '/help sevices.png' },
  { key: 'digitalFarming', image: '/digiFarming.gif' },
  { key: 'landMapping', image: '/land mapping.png' },
  { key: 'ledger', image: '/ledger.png' }
];

const FeaturesSection = () => {
  const { t } = useLanguage();
  
  const features = featureKeys.map(({ key, image }) => ({
    name: t(`features.items.${key}.title`),
    desc: t(`features.items.${key}.desc`),
    image
  }));
  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-green-50 text-center relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-green-200 blur-3xl"/>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-blue-200 blur-3xl"/>
      </div>
      
      <div className="relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-green-800 mb-4 ${styles.fadein}`}>
          {t('features.title')}
        </h2>
        <p className={`text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto ${styles.fadeinSlow}`}>
          {t('features.subtitle')}
        </p>
        
        <div className="w-full">
          {/* First Row - Right to Left */}
          <div className={styles.scrollRow}>
            <div className={styles.scrollLeft}>
              <div className={styles.scrollTrack}>
                {features.slice(0, 6).map((feature) => (
                  <div 
                    key={feature.name}
                    className={`${styles.card} group bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col items-center 
                              hover:bg-white hover:shadow-xl transition-all duration-300 ease-out`}
                  >
                    <div className="w-24 h-24 rounded-xl flex items-center justify-center mb-6 
                                bg-gradient-to-br from-green-50 to-blue-50 group-hover:from-green-100 group-hover:to-blue-100 
                                transition-all duration-300 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-3 group-hover:text-green-700 transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className={styles.scrollTrack}>
                {features.slice(0, 6).map((feature) => (
                  <div 
                    key={`${feature.name}-dup`}
                    className={`${styles.card} group bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col items-center 
                              hover:bg-white hover:shadow-xl transition-all duration-300 ease-out`}
                  >
                    <div className="w-24 h-24 rounded-xl flex items-center justify-center mb-6 
                                bg-gradient-to-br from-green-50 to-blue-50 group-hover:from-green-100 group-hover:to-blue-100 
                                transition-all duration-300 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-3 group-hover:text-green-700 transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - Left to Right */}
          <div className={styles.scrollRow}>
            <div className={styles.scrollRight}>
              <div className={styles.scrollTrack}>
                {features.slice(6).map((feature) => (
                  <div 
                    key={feature.name}
                    className={`${styles.card} group bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col items-center 
                              hover:bg-white hover:shadow-xl transition-all duration-300 ease-out`}
                  >
                    <div className="w-24 h-24 rounded-xl flex items-center justify-center mb-6 
                                bg-gradient-to-br from-green-50 to-blue-50 group-hover:from-green-100 group-hover:to-blue-100 
                                transition-all duration-300 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-3 group-hover:text-green-700 transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className={styles.scrollTrack}>
                {features.slice(6).map((feature) => (
                  <div 
                    key={`${feature.name}-dup`}
                    className={`${styles.card} group bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col items-center 
                              hover:bg-white hover:shadow-xl transition-all duration-300 ease-out`}
                  >
                    <div className="w-24 h-24 rounded-xl flex items-center justify-center mb-6 
                                bg-gradient-to-br from-green-50 to-blue-50 group-hover:from-green-100 group-hover:to-blue-100 
                                transition-all duration-300 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-3 group-hover:text-green-700 transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 