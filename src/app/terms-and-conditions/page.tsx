'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../contexts/LanguageContext';

export default function TermsAndConditionsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-white to-green-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 text-center">{t('pages.termsAndConditions')}</h1>

          <div className="prose-lg max-w-none">
            <div className="text-gray-700 space-y-6 mb-12 max-w-3xl mx-auto">
              <ol className="list-decimal pl-6 space-y-6 text-justify">
                <li className="leading-relaxed">
                  {t('pages.termsContent.intro.li1')}
                </li>
                <li className="leading-relaxed">
                  {t('pages.termsContent.intro.li2')}
                </li>
                <li className="leading-relaxed">
                  {t('pages.termsContent.intro.li3')}
                </li>
                <li className="leading-relaxed">
                  {t('pages.termsContent.intro.li4')}
                </li>
                <li className="leading-relaxed">
                  {t('pages.termsContent.intro.li5')}
                </li>
                <li className="leading-relaxed font-bold">
                  {t('pages.termsContent.intro.li6')}
                </li>
                <li className="leading-relaxed">
                  {t('pages.termsContent.usage.intro')}
                  <ol className="list-decimal pl-6 space-y-4 mt-4">
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li1')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li2')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li3')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li4')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li5')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li6')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li7')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li8')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li9')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li10')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li11')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li12')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li13')}
                    </li>
                    <li className="leading-relaxed">
                      {t('pages.termsContent.usage.li14')}
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
