import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AvailableFood from './components/AvailableFood';
import HowItWorks from './components/HowItWorks';
import SupermanDelivery from './components/SupermanDelivery';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import AppDownload from './components/AppDownload';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#F8991D] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AvailableFood />
        <HowItWorks />
        <SupermanDelivery />
        <WhyChooseUs />
        <FAQ />
        <Testimonials />
        <AppDownload />
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
