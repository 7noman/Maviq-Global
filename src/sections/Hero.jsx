import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Messaging & CTAs */}
          <div className="hero-content">
            <RevealOnScroll>
              <div className="hero-badge-pill">
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1557A6' }}></span>
                <span>Regional Technology & Workforce Partner</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <h1 className="hero-title">
                Connecting Businesses with the Technology Talent They Need.
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <p className="hero-lead-highlight">
                Technology talent. Strategic expertise. Workforce solutions built around your business.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="hero-description">
                Maviq Global Consulting helps organizations across the Middle East access skilled IT professionals, flexible staffing solutions, and technology consulting expertise to support their business objectives.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={250}>
              <div className="hero-cta-group">
                <a href="#contact" className="btn btn-primary btn-lg">
                  Discuss Your Requirements
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a href="#services" className="btn btn-secondary btn-lg">
                  Explore Our Services
                </a>
              </div>
            </RevealOnScroll>

            {/* Regional Presence Bar */}
            <RevealOnScroll delay={300}>
              <div className="hero-regions-strip">
                <span className="region-label">Operating Across:</span>
                <div className="region-badges">
                  {companyDetails.regions.map((region) => (
                    <span key={region.code} className="region-chip">
                      <span>{region.flag}</span>
                      <span>{region.country}</span>
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="hero-visual-frame">
            <RevealOnScroll delay={200}>
              <div className="hero-main-card">
                <img
                  src="./assets/consulting-meeting.jpg"
                  alt="Maviq Global consulting team in a collaborative strategy session"
                  className="hero-image"
                  width="1008"
                  height="1337"
                  fetchPriority="high"
                />
              </div>

              {/* Floating Strategic Value Card */}
              <div className="hero-floating-card">
                <h4 className="floating-card-title">Strategic Value</h4>
                <p className="floating-card-text">
                  "The Right Talent. The Right Time. The Right Impact."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.625rem' }}>
                  <CheckCircle2 size={15} color="#D5A84B" aria-hidden="true" />
                  <span style={{ fontSize: '0.75rem', color: '#D3DFEB', fontWeight: '500' }}>
                    UAE · Qatar · Saudi Arabia
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

