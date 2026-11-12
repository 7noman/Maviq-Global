import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import CountryFlag from '../components/CountryFlag';

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
                Technology talent + Strategic expertise + Workforce solutions built around your business
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

            {/* Country Display: UAE | QATAR | SAUDI ARABIA */}
            <RevealOnScroll delay={300}>
              <div className="hero-regions-strip">
                <div className="hero-country-display" aria-label="Operating Regions: UAE, Qatar, Saudi Arabia">
                  <span className="hero-country-item">
                    <CountryFlag code="UAE" size="sm" />
                    <span className="hero-country-name">UAE</span>
                  </span>
                  <span className="hero-country-divider" aria-hidden="true">|</span>
                  <span className="hero-country-item">
                    <CountryFlag code="QATAR" size="sm" />
                    <span className="hero-country-name">QATAR</span>
                  </span>
                  <span className="hero-country-divider" aria-hidden="true">|</span>
                  <span className="hero-country-item">
                    <CountryFlag code="SAUDI ARABIA" size="sm" />
                    <span className="hero-country-name">SAUDI ARABIA</span>
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="hero-visual-frame">
            <RevealOnScroll delay={200}>
              <div className="hero-visual-stack">
                <div className="hero-main-card">
                  <img
                    src="./assets/hero-recruitment.jpg"
                    alt="Technology recruitment and talent acquisition consultation meeting"
                    className="hero-image"
                    width="1200"
                    height="800"
                    fetchPriority="high"
                  />
                </div>

                {/* Strategic Value Card positioned cleanly below the hero image */}
                <div className="hero-floating-card">
                  <h4 className="floating-card-title">Strategic Value</h4>
                  <p className="floating-card-text">
                    Technology Talent + Strategic Expertise + Workforce Solutions built around your business
                  </p>
                  <div className="floating-card-meta">
                    <CheckCircle2 size={15} color="#D5A84B" aria-hidden="true" />
                    <span>UAE · Qatar · Saudi Arabia</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
