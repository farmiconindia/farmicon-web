'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
    const features = [
        {
            category: "Farmer Management",
            items: [
                { name: "Farmer Onboarding", basic: "Up to 150", premium: "Unlimited" },
                { name: "Farms per Farmer", basic: "Unlimited", premium: "Multiple" },
                { name: "Bulk Upload (Excel)", basic: false, premium: true },
                { name: "Analytics & Insights", basic: false, premium: true },
            ]
        },
        {
            category: "Machinery & Services",
            items: [
                { name: "Listings", basic: "Up to 5", premium: "Unlimited" },
                { name: "Pricing & Availability Control", basic: false, premium: true },
            ]
        },
        {
            category: "Trade & Inventory",
            items: [
                { name: "Crop Listings", basic: "Up to 10", premium: "Unlimited" },
                { name: "Inventory Management", basic: "Basic", premium: "Full" },
                { name: "Priority Buyer Notifications", basic: false, premium: true },
            ]
        },
        {
            category: "Advisory & Communication",
            items: [
                { name: "Advisories per Month", basic: "15", premium: "Unlimited" },
                { name: "Group-based Advisories", basic: false, premium: true },
            ]
        },
        {
            category: "Support & Others",
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
                            Simple, Transparent Pricing
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600"
                        >
                            Choose the plan that fits your FPO&apos;s needs
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
                            <h2 className="text-2xl font-bold text-green-900 mb-2">Basic Plan</h2>
                            <div className="text-5xl font-bold text-green-600 mb-4">Free</div>
                            <p className="text-gray-600 mb-8">Ideal for small & early-stage FPOs starting digital operations.</p>
                            <a href="/" className="w-full py-3 px-6 rounded-xl border-2 border-green-600 text-green-700 font-bold hover:bg-green-50 transition-colors duration-200 block">
                                Get Started
                            </a>
                        </motion.div>

                        {/* Premium Plan Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-green-900 to-green-800 rounded-3xl p-8 shadow-xl text-white flex flex-col items-center text-center relative overflow-hidden transform md:-translate-y-4"
                        >
                            <div className="absolute top-0 right-0 bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                                RECOMMENDED
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
                            <div className="text-5xl font-bold text-green-100 mb-4">Custom</div>
                            <p className="text-green-100 mb-8">Best for growing FPOs handling large farmer bases and trade volumes.</p>
                            <a href="/#contact" className="w-full py-3 px-6 rounded-xl bg-white text-green-900 font-bold hover:bg-green-50 transition-colors duration-200 block">
                                Contact Sales
                            </a>
                        </motion.div>
                    </div>

                    {/* Feature Comparison Table */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <h3 className="text-3xl font-bold text-center text-green-900 mb-12">Compare Features</h3>

                        <div className="bg-white rounded-3xl shadow-lg border border-green-100 overflow-hidden">
                            {/* Table Header */}
                            <div className="grid grid-cols-3 bg-green-50/50 p-6 border-b border-green-100">
                                <div className="font-bold text-gray-500">Features</div>
                                <div className="text-center font-bold text-green-800 text-lg">Basic</div>
                                <div className="text-center font-bold text-green-900 text-lg">Premium</div>
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
