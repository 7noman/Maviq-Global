import React from 'react';
import { Phone, Building, ExternalLink } from 'lucide-react';
import { companyDetails } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';

export default function RegionalPresence() {
  return (
    <section className="section" aria-label="Regional Presence in the Middle East">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <RevealOnScroll>
            <span className="section-eyebrow">Middle East Operations</span>
            <h2 className="section-title">Regional Footprint</h2>
            <p className="section-subtitle">
              Serving enterprise clients and technology leaders across three major commercial economies with dedicated regional communication lines.
            </p>
          </RevealOnScroll>
        </div>

        {/* 3 Regional Cards */}
        <div className="regions-grid">
          {companyDetails.regions.map((reg, index) => (
            <RevealOnScroll key={reg.code} delay={index * 80}>
              <div className="region-card">
                <div className="region-flag-box" aria-hidden="true">
                  {reg.flag}
                </div>
                <h3 className="region-country-name">{reg.country}</h3>
                <p className="region-desc">{reg.description}</p>

                <a href={`tel:${reg.phoneRaw}`} className="region-phone-link">
                  <Phone size={18} aria-hidden="true" />
                  <span>{reg.phone}</span>
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

