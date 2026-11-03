import React from 'react';
import { ArrowRight, UserCheck, Shield } from 'lucide-react';
import { talentCategories } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';

export default function TalentOutsourcing() {
  return (
    <section id="talent" className="section" aria-label="Talent Outsourcing Directory">
      <div className="container">
        <div className="talent-layout-grid">
          {/* Left Column: Context & Visual Sticky Card */}
          <div className="talent-sticky-side">
            <RevealOnScroll>
              <span className="section-eyebrow">Technical Capabilities</span>
              <h2 className="section-title">Talent Outsourcing</h2>
              <p className="lead">
                Providing highly skilled IT professionals and specialized consultants to support business growth, accelerate digital transformation and deliver mission-critical projects across the Middle East.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-supporting-text)' }}>
                Our talent outsourcing model bridges specialized engineering capability gaps, pairing enterprises with screened professionals across critical digital domains.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <div className="talent-visual-card">
                <img
                  src="./assets/software-engineering.jpg"
                  alt="Specialized software developers and engineers coding collaboratively"
                  className="talent-image"
                  width="570"
                  height="845"
                  loading="lazy"
                />
              </div>

              <div style={{ marginTop: '1.75rem' }}>
                <a href="#contact" className="btn btn-primary btn-block">
                  Discuss Your Talent Requirements
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: 9 Professional Roles Directory */}
          <div>
            <RevealOnScroll delay={100}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-blue-corporate)' }}>
                  Professional Roster (9 Core Domains)
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-supporting-text)' }}>
                  Vetted Technical Profiles
                </span>
              </div>
            </RevealOnScroll>

            <div className="talent-directory-grid">
              {talentCategories.map((item, idx) => (
                <RevealOnScroll key={item.id} delay={idx * 50}>
                  <div className="talent-role-card">
                    <div className="talent-role-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        <UserCheck size={18} color="#1557A6" aria-hidden="true" />
                        <h3 className="talent-role-title">{item.role}</h3>
                      </div>
                      <span className="talent-discipline-tag">{item.discipline}</span>
                    </div>

                    <p className="talent-role-desc">{item.description}</p>

                    <div className="talent-tech-chips">
                      {item.techTokens.map((chip, cIdx) => (
                        <span key={cIdx} className="tech-chip">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

