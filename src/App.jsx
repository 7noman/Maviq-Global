import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import CoreServices from './sections/CoreServices';
import TalentOutsourcing from './sections/TalentOutsourcing';
import ManagedServices from './sections/ManagedServices';
import Industries from './sections/Industries';
import WhyMaviq from './sections/WhyMaviq';
import RegionalPresence from './sections/RegionalPresence';
import Contact from './sections/Contact';
import Careers from './sections/Careers';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#careers' ? 'careers' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#careers') {
        setCurrentPage('careers');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page, sectionHash) => {
    setCurrentPage(page);
    if (page === 'careers') {
      if (window.location.hash !== '#careers') {
        window.history.pushState(null, '', '#careers');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetHash = sectionHash || '#home';
      if (window.location.hash !== targetHash) {
        window.history.pushState(null, '', targetHash);
      }
      if (sectionHash && sectionHash !== '#home') {
        setTimeout(() => {
          const el = document.querySelector(sectionHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="site-wrapper">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main id="main-content">
        {currentPage === 'careers' ? (
          <Careers navigateTo={navigateTo} />
        ) : (
          <>
            <Hero />
            <About />
            <CoreServices />
            <TalentOutsourcing />
            <ManagedServices />
            <Industries />
            <WhyMaviq />
            <RegionalPresence />
            <Contact />
          </>
        )}
      </main>
      <Footer currentPage={currentPage} navigateTo={navigateTo} />
    </div>
  );
}
