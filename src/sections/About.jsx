import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';

export default function About() {
  const focusAreas = [
    'Technology staff augmentation',
    'Permanent recruitment & search',
    'Project-based technology delivery',
    'IT talent outsourcing',
    'Technology & digital consulting',
    'Managed IT services & operations',
  ];

  return (
    <section id="about" className="section" aria-label="About Maviq Global Consulting">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Editorial Content */}
          <div className="about-content-col">
            <RevealOnScroll>
              <span className="section-eyebrow">About Maviq Global</span>
              <h2 className="section-title">
                Talent and Technology, Aligned with Business Goals.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <p className="about-lead-copy">
                Maviq Global Consulting is a technology staffing and recruitment consulting firm supporting businesses across the Middle East with skilled IT professionals and tailored workforce solutions.
              </p>
              <p className="about-body-copy">
                We specialize in technology staff augmentation, permanent recruitment, project-based hiring, and IT outsourcing to support organizations in finding the right talent to meet their business and technology objectives. Our focus is on delivering quality talent, flexible staffing solutions, and reliable recruitment support across diverse industries.
              </p>
            </RevealOnScroll>

            {/* Official Mission Card */}
            <RevealOnScroll delay={150}>
              <div className="mission-highlight-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                  <Target size={18} color="#1557A6" aria-hidden="true" />
                  <span className="mission-label">Our Mission</span>
                </div>
                <p className="mission-statement">
                  "{companyDetails.mission}"
                </p>
              </div>
            </RevealOnScroll>

            {/* Core Specialization List */}
            <RevealOnScroll delay={200}>
              <h3 className="about-capabilities-heading">
                Core Capabilities & Delivery Focus:
              </h3>
              <div className="about-pillars-list">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="about-pillar-item">
                    <CheckCircle2 size={16} color="#1557A6" style={{ flexShrink: 0 }} aria-hidden="true" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Cleanly Aligned Visual Composition without Overlap */}
          <div className="about-visual-col">
            <RevealOnScroll delay={200}>
              <div className="about-image-card">
                <div className="about-image-wrapper">
                  <img
                    src="./assets/consulting-meeting.jpg"
                    alt="Maviq Global enterprise consulting and talent alignment meeting"
                    className="about-image"
                    width="1008"
                    height="1337"
                    loading="lazy"
                  />
                </div>

                {/* Official Brand Message Strip cleanly aligned beneath image */}
                <div className="about-brand-badge">
                  <div className="about-badge-quote">
                    "The Right Talent. The Right Time. The Right Impact."
                  </div>
                  <p className="about-badge-sub">
                    Technology Consulting · Talent Outsourcing · Managed Services
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
