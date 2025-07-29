import React from 'react';
import Image from 'next/image';
import styles from '../styles/Features.module.css';

const features = [
  { name: 'Drone Spray', desc: 'Precision crop spraying for healthier yields.', image: '/drone.png' },
  { name: 'Farming Chatbot', desc: '24/7 audio-supported help in your language.', image: '/chat.png' },
  { name: 'Crop Prices', desc: 'Live mandi prices at your fingertips.', image: '/crop price.png' },
  { name: 'Soil Testing', desc: 'Know your soil, grow better crops.', image: '/soil testing.png' },
  { name: 'Crop Doctor', desc: 'Diagnose and treat crop issues instantly.', image: '/crop doctor.png' },
  { name: 'Weather Updates', desc: 'Stay ahead with real-time forecasts.', image: '/weather.png' },
  { name: 'Govt. Schemes', desc: 'Easy access to the latest government schemes.', image: '/government schemes.png' },
  { name: 'Help Services', desc: 'Find and rent modern farming equipment.', image: '/help sevices.png' },
  { name: 'Digital Farming', desc: 'Expert tips and best practices.', image: '/digiFarming.gif' },
  { name: 'Land Mapping', desc: 'Smart tools for land management.', image: '/land mapping.png' },
  { name: 'Ledger', desc: 'Simple digital record-keeping for your farm.', image: '/ledger.png' },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-green-50 text-center relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-green-200 blur-3xl"/>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-blue-200 blur-3xl"/>
      </div>
      
      <div className="relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-green-800 mb-4 ${styles.fadein}`}>
          Our Services
        </h2>
        <p className={`text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto ${styles.fadeinSlow}`}>
          Comprehensive farming solutions powered by technology
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