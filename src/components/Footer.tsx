'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Farmicon Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-bold text-2xl">Farmicon</span>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {[
                { key: 'about', link: t('nav.about'), href: '/#about' },
                { key: 'services', link: t('nav.services'), href: '/services' },
                { key: 'howitworks', link: t('nav.howItWorks'), href: '/#howitworks' },
                { key: 'testimonials', link: t('nav.testimonials'), href: '/#testimonials' },
                { key: 'privacy', link: t('footer.legal.privacy'), href: '/privacy-policy' },
                { key: 'terms', link: t('footer.legal.terms'), href: '/terms-and-conditions' },
                { key: 'refund', link: 'Refund Policy', href: '/refund-policy' },
                { key: 'pricing', link: 'Pricing', href: '/pricing' },
                { key: 'contact', link: t('nav.contact'), href: '/#contact' }
              ].map(({ key, link, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-green-100 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contactUs')}</h3>
            <div className="space-y-3 text-green-100">
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:farmiconindia@gmail.com" className="hover:text-white transition-colors duration-200">
                  farmiconindia@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+91 8650505520</span>
              </p>
              <p className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">
                  {t('contact.address.line1')}<br />
                  {t('contact.address.line2')}<br />
                  {t('contact.address.line3')}
                </span>
              </p>
            </div>
          </div>

          {/* Download App Section */}
          <div className="lg:pl-4">
            <h3 className="font-semibold text-lg mb-4">{t('footer.downloadApp')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                {/* QR Code */}
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <Image
                    src="/Qr.png"
                    alt="Download QR Code"
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </div>
                {/* Download Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-green-100 mb-2">{t('footer.scanQrText')}</p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.farmicon.application&pcampaignid=web_shareImpact.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <Image
                      src="/logo.png"
                      alt="Farmicon Logo"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span>{t('nav.downloadApp')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-green-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social links commented out for now */}
          </div>
          <div className="text-center mt-6 text-green-200 text-sm">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;