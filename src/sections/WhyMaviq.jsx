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
    <section id="why-maviq" className="section why-section" aria-label="Our Approach and Strategic Differentiators">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <RevealOnScroll>
            <span className="section-eyebrow">Our Approach</span>
            <h2 className="section-title">
              What Makes Us Different?
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '44rem', margin: '0 auto' }}>
              We go beyond conventional staffing by combining a deep understanding of technology, a talent-focused approach, and a commitment to delivering value to our clients.
            </p>
          </RevealOnScroll>
        </div>

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
                    <p className="why-pillar-subtitle">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="why-pillar-desc">{item.description}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Beyond Staffing Closing Heading */}
        <RevealOnScroll delay={150}>
          <div className="beyond-staffing-banner">
            <h3 className="beyond-staffing-heading">
              Beyond Staffing: We Deliver the Talent and Expertise That Move Your Business Forward.
            </h3>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
