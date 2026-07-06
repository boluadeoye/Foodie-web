import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AvailableFood from './components/AvailableFood';
import HowItWorks from './components/HowItWorks';
import SupermanDelivery from './components/SupermanDelivery';
import WhyChooseUs from './components/WhyChooseUs';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import AppDownload from './components/AppDownload';

function App() {
  return (
    <main className="min-h-screen bg-[#F9F3E3]">
      <Navbar />
      <Hero />
      <AvailableFood />
      <HowItWorks />
      <SupermanDelivery />
      <SocialProof />
      <WhyChooseUs />
      <FAQ />
      <AppDownload />
    </main>
  );
}

export default App;
