'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Navbar from '../../components/Navbar';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
              {t('pages.privacyPolicy')}
            </h1>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              {/* Intro Section */}
              <section>
                <p className="font-semibold mb-4">{t('pages.privacyContent.intro.p1')}</p>
                <p className="mb-4">{t('pages.privacyContent.intro.p2')}</p>
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="font-bold text-green-800 mb-2">{t('pages.privacyContent.intro.address.title')}</h3>
                  <p>{t('pages.privacyContent.intro.address.line1')}</p>
                  <p>{t('pages.privacyContent.intro.address.line2')}</p>
                  <p>{t('pages.privacyContent.intro.address.line3')}</p>
                  <p>{t('pages.privacyContent.intro.address.line4')}</p>
                  <p className="mt-2 font-medium">{t('pages.privacyContent.intro.address.contact')}</p>
                </div>
              </section>

              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.introduction.title')}</h2>
                <p>{t('pages.privacyContent.introduction.p1')}</p>
              </section>

              {/* Website Visitors */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.websiteVisitors.title')}</h2>
                <p className="mb-4">{t('pages.privacyContent.websiteVisitors.p1')}</p>
                <p>{t('pages.privacyContent.websiteVisitors.p2')}</p>
              </section>

              {/* Sign Up */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.signUp.title')}</h2>
                <p className="mb-4">{t('pages.privacyContent.signUp.p1')}</p>
                <h3 className="text-xl font-semibold text-green-700 mb-3">{t('pages.privacyContent.signUp.subTitle')}</h3>
                <p>{t('pages.privacyContent.signUp.p2')}</p>
              </section>

              {/* Collection */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.collection.title')}</h2>
                <p>{t('pages.privacyContent.collection.p1')}</p>
              </section>

              {/* Usage */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.usageSection.title')}</h2>
                <p>{t('pages.privacyContent.usageSection.p1')}</p>
              </section>

              {/* Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.sharing.title')}</h2>
                <p>{t('pages.privacyContent.sharing.p1')}</p>
              </section>

              {/* Security */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.security.title')}</h2>
                <p>{t('pages.privacyContent.security.p1')}</p>
              </section>

              {/* Security Precautions */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.securityPrecautions.title')}</h2>
                <p>{t('pages.privacyContent.securityPrecautions.p1')}</p>
              </section>

              {/* Advertisements */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.advertisements.title')}</h2>
                <p>{t('pages.privacyContent.advertisements.p1')}</p>
              </section>

              {/* External Links */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.externalLinks.title')}</h2>
                <p className="mb-4">{t('pages.privacyContent.externalLinks.p1')}</p>
                <p className="mb-4 font-medium">{t('pages.privacyContent.externalLinks.p2')}</p>
                <p className="mb-4">{t('pages.privacyContent.externalLinks.p3')}</p>
                <p>{t('pages.privacyContent.externalLinks.p4')}</p>
              </section>

              {/* Protection */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.protection.title')}</h2>
                <p className="mb-4">{t('pages.privacyContent.protection.p1')}</p>
                <p>{t('pages.privacyContent.protection.p2')}</p>
              </section>

              {/* Aggregated Statistics */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.aggregatedStatistics.title')}</h2>
                <p>{t('pages.privacyContent.aggregatedStatistics.p1')}</p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.cookies.title')}</h2>
                <p className="mb-4">{t('pages.privacyContent.cookies.p1')}</p>
                <p className="mb-4">{t('pages.privacyContent.cookies.p2')}</p>
                <p>{t('pages.privacyContent.cookies.p3')}</p>
              </section>

              {/* Business Transfers */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.businessTransfers.title')}</h2>
                <p>{t('pages.privacyContent.businessTransfers.p1')}</p>
              </section>

              {/* Data Deletion */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.dataDeletion.title')}</h2>
                <p>{t('pages.privacyContent.dataDeletion.p1')}</p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.yourRights.title')}</h2>
                <p>{t('pages.privacyContent.yourRights.p1')}</p>
              </section>

              {/* Consent */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.consent.title')}</h2>
                <p>{t('pages.privacyContent.consent.p1')}</p>
              </section>

              {/* Location Data */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.locationData.title')}</h2>
                <p className="mb-4">{t('pages.privacyContent.locationData.p1')}</p>
                <p>{t('pages.privacyContent.locationData.p2')}</p>
              </section>

              {/* Grievance Officer */}
              <section>
                <h2 className="text-2xl font-bold text-green-800 mb-4">{t('pages.privacyContent.grievanceOfficer.title')}</h2>
                <p className="mb-6">{t('pages.privacyContent.grievanceOfficer.p1')}</p>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="font-bold block text-gray-700">{t('pages.privacyContent.grievanceOfficer.details.nameLabel')}</span>
                      <span className="text-gray-600">{t('pages.privacyContent.grievanceOfficer.details.nameValue')}</span>
                    </div>
                    <div>
                      <span className="font-bold block text-gray-700">{t('pages.privacyContent.grievanceOfficer.details.designationLabel')}</span>
                      <span className="text-gray-600">{t('pages.privacyContent.grievanceOfficer.details.designationValue')}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-bold block text-gray-700">{t('pages.privacyContent.grievanceOfficer.details.addressLabel')}</span>
                      <span className="text-gray-600">{t('pages.privacyContent.grievanceOfficer.details.addressValue')}</span>
                    </div>
                    <div>
                      <span className="font-bold block text-gray-700">{t('pages.privacyContent.grievanceOfficer.details.contactLabel')}</span>
                      <a href={`mailto:${t('pages.privacyContent.grievanceOfficer.details.contactValue')}`} className="text-green-600 hover:underline">
                        {t('pages.privacyContent.grievanceOfficer.details.contactValue')}
                      </a>
                    </div>
                    <div>
                      <span className="font-bold block text-gray-700">{t('pages.privacyContent.grievanceOfficer.details.phoneLabel')}</span>
                      <a href={`tel:${t('pages.privacyContent.grievanceOfficer.details.phoneValue')}`} className="text-green-600 hover:underline">
                        {t('pages.privacyContent.grievanceOfficer.details.phoneValue')}
                      </a>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-bold block text-gray-700">{t('pages.privacyContent.grievanceOfficer.details.timeLabel')}</span>
                      <span className="text-gray-600">{t('pages.privacyContent.grievanceOfficer.details.timeValue')}</span>
                    </div>
                  </div>
                </div>
                <p>{t('pages.privacyContent.grievanceOfficer.p2')}</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

