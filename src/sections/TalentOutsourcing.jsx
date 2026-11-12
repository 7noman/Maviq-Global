import React from 'react';
import { ArrowRight, UserCheck } from 'lucide-react';
import { talentCategories } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';

export default function TalentOutsourcing() {
  return (
    <section id="talent" className="section" aria-label="Talent Outsourcing Directory">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <RevealOnScroll>
            <span className="section-eyebrow">Technical Capabilities</span>
            <h2 className="section-title">Talent Outsourcing</h2>
            <p className="section-subtitle" style={{ maxWidth: '44rem' }}>
              Providing highly skilled IT professionals and specialized consultants to support business growth, accelerate digital transformation and deliver mission-critical projects across the Middle East.
            </p>
          </RevealOnScroll>
        </div>

        {/* 9 Professional Roles Directory */}
        <div className="talent-directory-grid talent-directory-compact">
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

        {/* CTA - Moved to bottom, text changed */}
        <RevealOnScroll delay={200}>
          <div className="talent-bottom-cta">
            <h3 className="talent-cta-heading">Find the right talent for your team</h3>
            <a href="#contact" className="btn btn-primary btn-lg">
              Discuss Your Talent Requirements
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
