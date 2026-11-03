import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { engagementModels } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';

export default function EngagementModels() {
  return (
    <section id="engagement-models" className="section section-bg-cool" aria-label="Engagement Models">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <RevealOnScroll>
            <span className="section-eyebrow">Engagement Frameworks</span>
            <h2 className="section-title">Engagement Models</h2>
            <p className="section-subtitle">
              Structured hiring, outsourcing, and management models designed to give organizations complete flexibility across project phases and workforce requirements.
            </p>
          </RevealOnScroll>
        </div>

        {/* 6 Models Grid */}
        <div className="models-grid">
          {engagementModels.map((model, index) => (
            <RevealOnScroll key={model.id} delay={index * 60}>
              <div className="model-card">
                <span className="model-badge">{model.badge}</span>
                <h3 className="model-title">{model.title}</h3>
                <p className="model-desc">{model.description}</p>
                <p className="model-details">{model.details}</p>

                <ul className="model-features-list">
                  {model.keyCharacteristics.map((char, cIdx) => (
                    <li key={cIdx} className="model-feature-item">
                      <Check size={14} color="#1557A6" style={{ flexShrink: 0 }} aria-hidden="true" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Section CTA */}
        <RevealOnScroll delay={200}>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <a href="#contact" className="btn btn-primary btn-lg">
              Discuss Your Engagement Structure
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

