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
  // Split services evenly into two groups aligned with two distinct images
  const firstHalf = managedServiceAreas.slice(0, 3);
  const secondHalf = managedServiceAreas.slice(3);

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

        {/* First Row: Operations Collaboration Image + Services 1-3 */}
        <div className="managed-grid">
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

          <div className="managed-services-list">
            {firstHalf.map((area, index) => {
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

        {/* Second Row: Services 4-6 + Engineering Systems Image */}
        <div className="managed-grid managed-grid-second">
          <div className="managed-services-list">
            {secondHalf.map((area, index) => {
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

          <div className="managed-image-col">
            <RevealOnScroll>
              <img
                src="./assets/software-engineering.jpg"
                alt="Enterprise software engineering, DevOps automation, and systems administration environment"
                className="managed-image"
                width="1200"
                height="675"
                loading="lazy"
              />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
