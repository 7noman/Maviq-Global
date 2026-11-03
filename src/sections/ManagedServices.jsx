import React from 'react';
import {
  HardDrive,
  Layers,
  CloudCog,
  Headphones,
  ShieldCheck,
  Workflow,
  CheckCircle2
} from 'lucide-react';
import { managedServiceAreas } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';

const iconMap = {
  HardDrive,
  Layers,
  CloudCog,
  Headphones,
  ShieldCheck,
  Workflow,
};

export default function ManagedServices() {
  return (
    <section id="managed-services" className="section section-bg-cool" aria-label="Managed IT Services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <RevealOnScroll>
            <span className="section-eyebrow">Operational Continuity</span>
            <h2 className="section-title">
              Technology Operations That Support Your Business.
            </h2>
            <p className="section-subtitle">
              End-to-end management of technology operations, keeping core enterprise systems resilient, modernized, and aligned with organizational objectives.
            </p>
          </RevealOnScroll>
        </div>

        <div className="managed-grid">
          {/* Left Column: Workplace Corporate Corridor Photography */}
          <div className="managed-image-col">
            <RevealOnScroll>
              <img
                src="./assets/corporate-walking.jpg"
                alt="Corporate technology consultants and operations executives in office corridor"
                className="managed-image"
                width="1500"
                height="985"
                loading="lazy"
              />
            </RevealOnScroll>
          </div>

          {/* Right Column: Structured Managed Services Ledger */}
          <div className="managed-services-list">
            {managedServiceAreas.map((area, index) => {
              const IconComp = iconMap[area.iconName] || CheckCircle2;
              return (
                <RevealOnScroll key={area.id} delay={index * 60}>
                  <div className="managed-service-item">
                    <div className="managed-item-icon-box">
                      <IconComp size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="managed-item-title">{area.title}</h3>
                      <p className="managed-item-desc">{area.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

