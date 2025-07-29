import React from 'react';
import styles from '../styles/HowItWorks.module.css';

const HowItWorksSection = () => {
  const steps = [
    { 
      title: 'Download the App',
      desc: 'Get Farmicon from the Play Store.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16V8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Sign Up',
      desc: 'Register as a farmer, FPO, or mandi seller.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M5 19C5 16.2386 8.13401 14 12 14C15.866 14 19 16.2386 19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Explore Services',
      desc: 'Access tools, prices, and expert help.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 21L3.5 3M3.5 12H14M14 12L9 7M14 12L9 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.5 21V3M17 12H20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Grow & Profit',
      desc: 'Make informed decisions and boost your yield.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C12 3 8 7 8 13C8 17 10 21 12 21M12 3C12 3 16 7 16 13C16 17 14 21 12 21M12 3V21" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 13C3 13 7 14 12 14M21 13C21 13 17 14 12 14" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <section id="how" className={`${styles.section} py-20 px-4 relative`}>
      {/* Animated Background */}
      <div className={styles.bgGradient}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        {/* Glassmorphic Background */}
        <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-b from-white/40 to-green-50/30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 text-center [text-shadow:0_2px_10px_rgba(0,0,0,0.1)]">
          How Farmicon Works
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-16 text-center max-w-2xl mx-auto">
          Get started with Farmicon in four simple steps
        </p>
        <div className={`${styles.stepsContainer} flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative`}>
          {steps.map((step, idx) => (
            <div 
              key={step.title} 
              className={`${styles.stepItem} flex flex-col items-center text-center relative`}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className={`${styles.stepIcon} w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center mb-6 text-green-600 hover:text-green-700 transition-all duration-500 group relative backdrop-blur-xl`}>
                <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                  {step.icon}
                </div>
              </div>
              <div className={`${styles.stepContent} backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20`}>
                <h3 className="text-xl font-bold text-green-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 max-w-[200px] mx-auto">{step.desc}</p>
              </div>
              
              {idx < steps.length - 1 && (
                <div className={`${styles.connector} hidden md:block absolute top-10 left-[calc(100%_-_2rem)] w-[calc(100%_-_4rem)] h-0.5 backdrop-blur-sm`}>
                  <div className={`${styles.connectorLine} h-full bg-gradient-to-r from-green-200/50 to-blue-200/50`} 
                       style={{ animationDelay: `${(idx * 200) + 400}ms` }}/>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;