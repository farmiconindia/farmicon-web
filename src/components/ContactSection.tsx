'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 px-4 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/testi.png"
        alt="Background"
        fill
        className="object-cover opacity-10 blur-sm"
        priority
      />

      {/* Glassmorphic Contact Card */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-white/30 rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
          {/* Animated Shine Effect */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div 
              className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] animate-shine"
              style={{
                background: 'linear-gradient(120deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.3) 100%)',
                filter: 'blur(8px)',
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-3">{t('contact.title')}</h2>
                <p className="text-slate-800">{t('contact.subtitle')}</p>
              </div>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder={t('contact.form.name')}
                  className="w-full p-3 rounded-xl bg-white/70 border border-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-300 placeholder:text-slate-600"
                />
                <input 
                  type="email" 
                  placeholder={t('contact.form.email')}
                  className="w-full p-3 rounded-xl bg-white/70 border border-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-300 placeholder:text-slate-600"
                />
                <textarea 
                  placeholder={t('contact.form.message')}
                  rows={4} 
                  className="w-full p-3 rounded-xl bg-white/70 border border-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-300 placeholder:text-slate-600"
                />
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 text-left">
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{t('contact.contactDetails')}</h3>
                <div className="space-y-3 text-slate-800">
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:farmiconindia@gmail.com" className="hover:text-green-700 transition-colors">
                      farmiconindia@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+91 8650505520</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{t('contact.address.title')}</h3>
                <p className="flex items-start gap-2 text-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>
                    {t('contact.address.line1')}<br />
                    {t('contact.address.line2')}<br />
                    {t('contact.address.line3')}
                  </span>
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <p className="text-sm text-slate-600 italic flex-1">
                  {t('contact.responseTime')}
                </p>
                {/* Download App Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.farmicon.application&pcampaignid=web_shareImpact.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-[0.98] transition-all duration-200"
                >
                  <div className="w-4 h-4 relative">
                    <Image
                      src="/logo.png"
                      alt="Farmicon Logo"
                      fill
                      sizes="16px"
                      className="object-contain"
                    />
                  </div>
                  <span>{t('nav.downloadApp')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 