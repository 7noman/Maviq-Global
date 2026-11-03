import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { companyDetails, coreServices } from '../data/companyData';
import LegalModal from './LegalModal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalType, setModalType] = useState(null);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Core Services', href: '#services' },
    { label: 'Talent Directory', href: '#talent' },
    { label: 'Managed IT Operations', href: '#managed-services' },
    { label: 'Industries We Serve', href: '#industries' },
    { label: 'Engagement Models', href: '#engagement-models' },
    { label: 'Why Maviq Global', href: '#why-maviq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-top-grid">
            {/* Brand & Identity Column */}
            <div className="footer-brand-col">
              <div className="footer-logo-row">
                <img
                  src="./assets/logo.png"
                  alt="Maviq Global Consulting FZC Logo"
                  className="footer-logo-img"
                  width="72"
                  height="48"
                />
                <div>
                  <h3 className="footer-brand-name">Maviq Global</h3>
                  <span className="brand-company-sub" style={{ color: '#D5A84B' }}>Consulting FZC</span>
                </div>
              </div>

              <p className="footer-brand-desc">
                {companyDetails.tagline}. Technology staffing, IT recruitment, talent outsourcing, and managed services supporting business objectives across the Middle East.
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
                <span className="region-label" style={{ color: '#92B4D6' }}>Regional Presence</span>
                <p style={{ fontSize: '0.875rem', color: '#FFFFFF', fontWeight: '600', marginTop: '0.25rem' }}>
                  United Arab Emirates · Qatar · Saudi Arabia
                </p>
              </div>
            </div>

            {/* Navigation Directory */}
            <div>
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-links-list">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="footer-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Services Column */}
            <div>
              <h4 className="footer-col-title">Core Services</h4>
              <ul className="footer-links-list">
                {coreServices.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <a href="#services" className="footer-link">
                      {service.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#engagement-models" className="footer-link">
                    Workforce & Engagement Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Regional Contact Column */}
            <div>
              <h4 className="footer-col-title">Regional Offices</h4>
              
              {companyDetails.regions.map((reg) => (
                <div key={reg.code} className="footer-contact-item">
                  <Phone size={16} color="#D5A84B" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#92B4D6', display: 'block', fontWeight: '600' }}>
                      {reg.country}
                    </span>
                    <a href={`tel:${reg.phoneRaw}`}>{reg.phone}</a>
                  </div>
                </div>
              ))}

              <div className="footer-contact-item" style={{ marginTop: '1rem' }}>
                <Mail size={16} color="#D5A84B" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a>
              </div>

              <div className="footer-contact-item">
                <Globe size={16} color="#D5A84B" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                <a href={companyDetails.website} target="_blank" rel="noopener noreferrer">
                  {companyDetails.displayWebsite}
                </a>
              </div>

              <div className="footer-contact-item">
                <MapPin size={16} color="#D5A84B" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                <span>{companyDetails.postalAddress}</span>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Bar */}
          <div className="footer-bottom-bar">
            <p className="footer-copyright">
              &copy; {currentYear} {companyDetails.legalEntity}. All rights reserved.
            </p>

            <div className="footer-legal-links">
              <button
                type="button"
                className="footer-legal-btn"
                onClick={() => setModalType('terms')}
              >
                Terms & Conditions
              </button>
              <span style={{ color: '#596777' }}>|</span>
              <button
                type="button"
                className="footer-legal-btn"
                onClick={() => setModalType('privacy')}
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal
        isOpen={Boolean(modalType)}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </>
  );
}

