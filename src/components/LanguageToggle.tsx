'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      className="group px-2 py-0.5 text-xs md:text-sm font-medium text-slate-800 bg-white border border-green-500 rounded-full hover:bg-green-50 hover:border-green-600 transition-all duration-200 flex items-center gap-1 shadow-sm hover:shadow-md"
      aria-label={`Change language to ${language === 'en' ? 'Hindi' : 'English'}`}
    >
      <span className="group-hover:scale-105 transition-transform leading-none">{language === 'en' ? 'हिंदी' : 'EN'}</span>
    </button>
  );
}
