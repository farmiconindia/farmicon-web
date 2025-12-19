'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-white to-green-50 py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 text-center">Refund and Cancellation Policy</h1>

                    <div className="prose-lg max-w-none">
                        <div className="text-gray-700 space-y-4 mb-8 max-w-3xl mx-auto">
                            <p className="text-justify leading-relaxed">
                                Farmicon provides digital agricultural services, subscriptions, and on-ground service facilitation through its platform.
                            </p>

                        </div>

                        <h2 className="text-2xl font-bold text-green-800 mt-12 mb-4 text-center">Subscription Services</h2>
                        <div className="text-gray-700 space-y-4 mb-8 max-w-3xl mx-auto">
                            <p className="text-justify leading-relaxed">
                                All subscription fees paid for Farmicon digital services are non-refundable once the subscription is activated. Users may cancel auto-renewal at any time, and the service will remain active until the end of the current billing cycle.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-green-800 mt-12 mb-4 text-center">Service Bookings (Machinery, Drone, or Other Services)</h2>
                        <div className="text-gray-700 space-y-4 mb-8 max-w-3xl mx-auto">
                            <ul className="list-disc pl-6 space-y-4 text-justify">
                                <li className="leading-relaxed">
                                    Cancellations made before service confirmation may be eligible for a refund.
                                </li>
                                <li className="leading-relaxed">
                                    Once a service is confirmed or initiated, no refund will be provided.
                                </li>
                                <li className="leading-relaxed">
                                    In case a service is canceled by the service provider, the paid amount will be refunded or adjusted as per availability.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 my-8 max-w-3xl mx-auto">
                            <h3 className="font-bold text-green-800 mb-2">Note:</h3>
                            <p className="text-justify leading-relaxed text-gray-700 mb-4">
                                If any amount is deducted due to a technical or payment failure, the amount will be refunded to the original payment method within the applicable processing time.
                            </p>
                            <p className="text-justify leading-relaxed text-gray-700">
                                In case of any refunds approved by Farmicon India Private Limited, it will take 7 days for the refund to be credited to you.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-green-800 mt-12 mb-4 text-center">Contact & Support</h2>
                        <div className="text-gray-700 space-y-4 mb-8 max-w-3xl mx-auto">
                            <p className="text-justify leading-relaxed">
                                For refund or cancellation-related queries, users may contact Farmicon support through the app or official communication channels.
                            </p>
                        </div>


                        <div className="text-gray-700 space-y-4 mt-12 mb-8 max-w-3xl mx-auto italic text-center">
                            <p>
                                Farmicon reserves the right to modify this policy at any time without prior notice.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
