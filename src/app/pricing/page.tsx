'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../contexts/LanguageContext';

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-green-500 mx-auto"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const MinusIcon = () => (
    <div className="w-4 h-0.5 bg-gray-300 mx-auto rounded-full" />
);

const PricingPage = () => {
    const { t } = useLanguage();

    const features = [
        {
            category: t('pricing.features.farmerManagement'),
            items: [
                { name: "Farmer Onboarding", basic: "Up to 150", premium: "Unlimited" },
                { name: "Farms per Farmer", basic: "Unlimited", premium: "Multiple" },
                { name: "Bulk Upload (Excel)", basic: false, premium: true },
                { name: "Analytics & Insights", basic: false, premium: true },
            ]
        },
        {
            category: t('pricing.features.machineryServices'),
            items: [
                { name: "Listings", basic: "Up to 5", premium: "Unlimited" },
                { name: "Pricing & Availability Control", basic: false, premium: true },
            ]
        },
        {
            category: t('pricing.features.tradeInventory'),
            items: [
                { name: "Crop Listings", basic: "Up to 10", premium: "Unlimited" },
                { name: "Inventory Management", basic: "Basic", premium: "Full" },
                { name: "Priority Buyer Notifications", basic: false, premium: true },
            ]
        },
        {
            category: t('pricing.features.advisoryCommunication'),
            items: [
                { name: "Advisories per Month", basic: "15", premium: "Unlimited" },
                { name: "Group-based Advisories", basic: false, premium: true },
            ]
        },
        {
            category: t('pricing.features.supportOthers'),
            items: [
                { name: "Sell Support", basic: true, premium: true },
                { name: "Reports Download", basic: false, premium: true },
                { name: "Data Backup", basic: false, premium: true },
                { name: "Customer Support", basic: "Standard", premium: "Priority" },
            ]
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-white to-green-50 pt-24 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-green-900 mb-4"
                        >
                            {t('pricing.title')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600"
                        >
                            {t('pricing.subtitle')}
                        </motion.p>
                    </div>

                    {/* Plan Overview Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                        {/* Basic Plan Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl p-8 shadow-lg border border-green-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                        >
                            <h2 className="text-2xl font-bold text-green-900 mb-2">{t('pricing.basic.name')}</h2>
                            <div className="text-5xl font-bold text-green-600 mb-4">{t('pricing.basic.price')}</div>
                            <p className="text-gray-600 mb-8">{t('pricing.basic.description')}</p>
                            <Link href="/" className="w-full py-3 px-6 rounded-xl border-2 border-green-600 text-green-700 font-bold hover:bg-green-50 transition-colors duration-200 block">
                                {t('pricing.basic.cta')}
                            </Link>
                        </motion.div>

                        {/* Premium Plan Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-green-900 to-green-800 rounded-3xl p-8 shadow-xl text-white flex flex-col items-center text-center relative overflow-hidden transform md:-translate-y-4 group"
                        >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                            </div>

                            {/* Sparkle particles */}
                            <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
                            <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-green-300 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                            <div className="absolute bottom-12 left-8 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                            <div className="absolute top-1/3 right-4 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse" style={{ animationDuration: '1.5s' }} />
                            <div className="absolute bottom-20 right-12 w-1 h-1 bg-green-200 rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />

                            {/* Glow border effect */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-green-400/30 animate-pulse" style={{ animationDuration: '3s' }} />

                            <div className="absolute top-0 right-0 bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                                {t('pricing.premium.recommended')}
                            </div>
                            <h2 className="text-2xl font-bold mb-2 relative z-10">{t('pricing.premium.name')}</h2>
                            <div className="text-5xl font-bold text-green-100 mb-4 relative z-10">{t('pricing.premium.price')}</div>
                            <p className="text-green-100 mb-8 relative z-10">{t('pricing.premium.description')} (Upto Rs 999 /Month)</p>
                            <Link href="/#contact" className="w-full py-3 px-6 rounded-xl bg-white text-green-900 font-bold hover:bg-green-50 transition-colors duration-200 block relative z-10 hover:scale-105 transform transition-transform">
                                {t('pricing.premium.cta')}
                            </Link>
                        </motion.div>
                    </div>

                    {/* Feature Comparison Table */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <h3 className="text-3xl font-bold text-center text-green-900 mb-12">{t('pricing.compareFeatures')}</h3>

                        <div className="bg-white rounded-3xl shadow-lg border border-green-100 overflow-hidden">
                            {/* Table Header */}
                            <div className="grid grid-cols-3 bg-green-50/50 p-6 border-b border-green-100">
                                <div className="font-bold text-gray-500">Features</div>
                                <div className="text-center font-bold text-green-800 text-lg">{t('pricing.basic.name')}</div>
                                <div className="text-center font-bold text-green-900 text-lg">{t('pricing.premium.name')}</div>
                            </div>

                            {/* Table Body */}
                            <div className="divide-y divide-gray-100">
                                {features.map((category, catIndex) => (
                                    <React.Fragment key={catIndex}>
                                        {/* Category Header */}
                                        <div className="bg-gray-50/50 px-6 py-3 text-sm font-bold text-gray-500 uppercase tracking-wider">
                                            {category.category}
                                        </div>

                                        {/* Category Items */}
                                        {category.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="grid grid-cols-3 px-6 py-4 hover:bg-green-50/30 transition-colors duration-150">
                                                <div className="text-gray-700 font-medium flex items-center">{item.name}</div>

                                                {/* Basic Value */}
                                                <div className="text-center flex items-center justify-center text-gray-600">
                                                    {typeof item.basic === 'boolean' ? (
                                                        item.basic ? <CheckIcon /> : <MinusIcon />
                                                    ) : (
                                                        <span className="font-medium">{item.basic}</span>
                                                    )}
                                                </div>

                                                {/* Premium Value */}
                                                <div className="text-center flex items-center justify-center text-green-900">
                                                    {typeof item.premium === 'boolean' ? (
                                                        item.premium ? <CheckIcon /> : <MinusIcon />
                                                    ) : (
                                                        <span className="font-bold">{item.premium}</span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </main>
            <Footer />
        </>
    );
};

export default PricingPage;
