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
  ArrowRight,
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
    <section id="services" className="section section-bg-cool" aria-label="Core Services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <RevealOnScroll>
            <span className="section-eyebrow">Enterprise Solutions</span>
            <h2 className="section-title">Core Services</h2>
            <p className="section-subtitle">
              Comprehensive technology staffing, consulting, and workforce solutions designed to meet the evolving demands of Middle Eastern enterprises.
            </p>
          </RevealOnScroll>
        </div>

        {/* 8-Service Grid */}
        <div className="services-grid">
          {coreServices.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Users;
            return (
              <RevealOnScroll key={service.id} delay={index * 60}>
                <div className="service-card">
                  <div className="service-card-icon-wrap">
                    <IconComponent size={24} aria-hidden="true" />
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

        {/* Action Callout */}
        <RevealOnScroll delay={200}>
          <div className="services-footer-cta">
            <a href="#contact" className="btn btn-primary btn-lg">
              Find the Right Solution for Your Team
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

