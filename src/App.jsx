import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import CoreServices from './sections/CoreServices';
import TalentOutsourcing from './sections/TalentOutsourcing';
import ManagedServices from './sections/ManagedServices';
import Industries from './sections/Industries';
import EngagementModels from './sections/EngagementModels';
import WhyMaviq from './sections/WhyMaviq';
import RegionalPresence from './sections/RegionalPresence';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <CoreServices />
        <TalentOutsourcing />
        <ManagedServices />
        <Industries />
        <EngagementModels />
        <WhyMaviq />
        <RegionalPresence />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

