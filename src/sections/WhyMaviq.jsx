import React from 'react';
import {
  Globe2,
  Zap,
  TrendingUp,
  MapPin,
  Award,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { differentiators } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';

const iconMap = {
  Globe2,
  Zap,
  TrendingUp,
  MapPin,
  Award,
  Sliders,
};

export default function WhyMaviq() {
  return (
    <section id="why-maviq" className="section why-section" aria-label="Why Choose Maviq Global">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <RevealOnScroll>
            <span className="section-eyebrow gold">Strategic Differentiators</span>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              What Makes Us Different?
            </h2>
            <p className="section-subtitle" style={{ color: '#B2C5DA', maxWidth: '44rem', margin: '0 auto' }}>
              We go beyond conventional staffing by combining a deep understanding of technology, a talent-focused approach, and a commitment to delivering value to our clients.
            </p>
          </RevealOnScroll>
        </div>

        {/* Official Banner Quote from Page 8 */}
        <RevealOnScroll delay={100}>
          <div className="why-quote-banner">
            <p className="why-quote-text">
              "Beyond Staffing: We Deliver the Talent and Expertise That Move Your Business Forward."
            </p>
            <p className="why-quote-supporting">
              Connecting business challenges with the right technology and talent across the United Arab Emirates, Qatar, and Saudi Arabia.
            </p>
          </div>
        </RevealOnScroll>

        {/* 6 Differentiators Grid */}
        <div className="why-pillars-grid">
          {differentiators.map((item, index) => {
            const IconComp = iconMap[item.iconName] || CheckCircle2;
            return (
              <RevealOnScroll key={item.number} delay={index * 60}>
                <div className="why-pillar-card">
                  <div className="why-pillar-header">
                    <span className="why-pillar-number">{item.number}</span>
                    <IconComp size={24} className="why-pillar-icon" aria-hidden="true" />
                  </div>
                  <h3 className="why-pillar-title">{item.title}</h3>
                  {item.subtitle && (
                    <p style={{ fontSize: '0.8125rem', color: '#D5A84B', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {item.subtitle}
                    </p>
                  )}
                  <p className="why-pillar-desc">{item.description}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Corporate Workspace Banner Image from Page 8 */}
        <RevealOnScroll delay={200}>
          <div style={{ marginTop: '3.5rem', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <img
              src="./assets/modern-office-wide.jpg"
              alt="Modern corporate executive workspace representing international standard operations"
              style={{ width: '100%', height: 'auto', maxHeight: '380px', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

