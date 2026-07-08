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
    <main className="bg-white min-h-screen font-sans selection:bg-[#F8991D] selection:text-white overflow-x-hidden">
      <Navbar />
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
  );
}

export default App;
