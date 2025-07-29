import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Farmicon Landing Page',
  description: 'All-in-one platform for Indian farmers and the agricultural ecosystem.',
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/favicon.ico' }
    ],
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="relative min-h-screen">
        {/* Full-page fixed animated blurred background */}
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-green-200 rounded-full blur-3xl opacity-60 animate-blob1" />
          <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl opacity-60 animate-blob2" />
          <div className="absolute top-1/3 left-1/2 w-1/3 h-1/3 bg-green-100 rounded-full blur-2xl opacity-40 animate-blob3" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
        <style>{`
          @keyframes blob1 {
            0%, 100% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.1) translateY(-10px); }
          }
          .animate-blob1 {
            animation: blob1 8s ease-in-out infinite;
          }
          @keyframes blob2 {
            0%, 100% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.1) translateY(10px); }
          }
          .animate-blob2 {
            animation: blob2 10s ease-in-out infinite;
          }
          @keyframes blob3 {
            0%, 100% { transform: scale(1) translateX(0); }
            50% { transform: scale(1.1) translateX(10px); }
          }
          .animate-blob3 {
            animation: blob3 12s ease-in-out infinite;
          }
        `}</style>
      </body>
    </html>
  );
}
