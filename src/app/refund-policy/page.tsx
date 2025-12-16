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
                                This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service that you have purchased through the Platform. Under this policy:
                            </p>
                        </div>

                        <div className="text-gray-700 space-y-4 mb-8 max-w-3xl mx-auto">
                            <ul className="list-disc pl-6 space-y-4 text-justify">
                                <li className="leading-relaxed">
                                    Cancellations will only be considered if the request is made 7 days of placing the order. However, cancellation requests may not be entertained if the orders have been communicated to such sellers / merchant(s) listed on the Platform and they have initiated the process of shipping them, or the product is out for delivery. In such an event, you may choose to reject the product at the doorstep.
                                </li>
                                <li className="leading-relaxed">
                                    Farmicon India Private Limited does not accept cancellation requests for perishable items like flowers, eatables, etc. However, the refund / replacement can be made if the user establishes that the quality of the product delivered is not good.
                                </li>
                                <li className="leading-relaxed">
                                    In case of receipt of damaged or defective items, please report to our customer service team. The request would be entertained once the seller/ merchant listed on the Platform, has checked and determined the same at its own end. This should be reported within 7 days of receipt of products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the product. The customer service team after looking into your complaint will take an appropriate decision.
                                </li>
                                <li className="leading-relaxed">
                                    In case of complaints regarding the products that come with a warranty from the manufacturers, please refer the issue to them.
                                </li>
                                <li className="leading-relaxed">
                                    In case of any refunds approved by Farmicon India Private Limited, it will take 7 days for the refund to be processed to you.
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-green-800 mt-12 mb-4 text-center">Return Policy</h2>
                        <div className="text-gray-700 space-y-4 mb-8 max-w-3xl mx-auto">
                            <p className="text-justify leading-relaxed">
                                We offer refund / exchange within first 7 days from the date of your purchase. If 7 days have passed since your purchase, you will not be offered a return, exchange or refund of any kind. In order to become eligible for a return or an exchange, (i) the purchased item should be unused and in the same condition as you received it, (ii) the item must have original packaging, (iii) if the item that you purchased on a sale, then the item may not be eligible for a return / exchange. Further, only such items are replaced by us (based on an exchange request), if such items are found defective or damaged.
                            </p>
                            <p className="text-justify leading-relaxed">
                                You agree that there may be a certain category of products / items that are exempted from returns or refunds. Such categories of the products would be identified to you at the item of purchase. For exchange / return accepted request(s) (as applicable), once your returned product / item is received and inspected by us, we will send you an email to notify you about receipt of the returned / exchanged product. Further. If the same has been approved after the quality check at our end, your request (i.e. return / exchange) will be processed in accordance with our policies.
                            </p>
                        </div>

                        {/* <h2 className="text-2xl font-bold text-green-800 mt-12 mb-4 text-center">Shipping Policy</h2>
                        <div className="text-gray-700 space-y-4 mb-8 max-w-3xl mx-auto">
                            <p className="text-justify leading-relaxed">
                                The orders for the user are shipped through registered domestic courier companies and/or speed post only. Orders are shipped within 7 days from the date of the order and/or payment or as per the delivery date agreed at the time of order confirmation and delivering of the shipment, subject to courier company / post office norms. Platform Owner shall not be liable for any delay in delivery by the courier company / postal authority. Delivery of all orders will be made to the address provided by the buyer at the time of purchase. Delivery of our services will be confirmed on your email ID as specified at the time of registration. If there are any shipping cost(s) levied by the seller or the Platform Owner (as the case be), the same is not refundable.
                            </p>
                        </div> */}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
