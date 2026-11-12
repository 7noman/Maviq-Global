import React from 'react';
import {
  Users,
  Search,
  FolderKanban,
  Compass,
  Server,
  Briefcase,
  BadgeDollarSign,
  Globe,
  Check
} from 'lucide-react';
import { coreServices } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';

// Map icon names to Lucide icons
const iconMap = {
  Users,
  Search,
  FolderKanban,
  Compass,
  Server,
  Briefcase,
  BadgeDollarSign,
  Globe,
};

export default function CoreServices() {
  return (
    <section id="services" className="section section-compact section-bg-cool" aria-label="Core Services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header section-header-compact text-center">
          <RevealOnScroll>
            <span className="section-eyebrow">Enterprise Solutions</span>
            <h2 className="section-title">Core Services</h2>
            <p className="section-subtitle">
              Comprehensive technology staffing, consulting, and workforce solutions designed to meet the evolving demands of Middle Eastern enterprises.
            </p>
          </RevealOnScroll>
        </div>

        {/* 8-Service Compact Grid */}
        <div className="services-grid">
          {coreServices.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Users;
            return (
              <RevealOnScroll key={service.id} delay={index * 50}>
                <div className="service-card">
                  <div className="service-card-icon-wrap">
                    <IconComponent size={22} aria-hidden="true" />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>

                  <ul className="service-scope-list">
                    {service.scopePoints.map((point, idx) => (
                      <li key={idx} className="service-scope-item">
                        <Check size={14} className="service-scope-icon" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
