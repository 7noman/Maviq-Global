import React from 'react';
import { companyDetails } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';
import CountryFlag from '../components/CountryFlag';

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
              Serving enterprise clients and technology leaders across three major commercial economies across the Gulf region.
            </p>
          </RevealOnScroll>
        </div>

        {/* 3 Regional Cards (Flags & Country Info without phone numbers) */}
        <div className="regions-grid">
          {companyDetails.regions.map((reg, index) => (
            <RevealOnScroll key={reg.code} delay={index * 80}>
              <div className="region-card">
                <div className="region-flag-box">
                  <CountryFlag code={reg.code} size="lg" />
                </div>
                <h3 className="region-country-name">{reg.country}</h3>
                <p className="region-desc">{reg.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
