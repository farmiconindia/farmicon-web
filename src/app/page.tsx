import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
// import MediaMentionsSection from '../components/MediaMentionsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DownloadAppSection from '../components/DownloadAppSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DownloadAppSection />
      {/* <MediaMentionsSection /> */}
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      </main>
  );
}
