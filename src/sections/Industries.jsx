import React from 'react';
import {
  Landmark,
  ShoppingBag,
  Activity,
  Truck,
  Building2,
  Factory,
  Flame,
  Cpu
} from 'lucide-react';
import { industriesList } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';

const iconMap = {
  Landmark,
  ShoppingBag,
  Activity,
  Truck,
  Building2,
  Factory,
  Flame,
  Cpu,
};

export default function Industries() {
  return (
    <section id="industries" className="section" aria-label="Industries We Serve">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <RevealOnScroll>
            <span className="section-eyebrow">Sector Expertise</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle" style={{ maxWidth: '42rem' }}>
              Delivering specialized technology talent and tailored workforce strategies across key economic sectors in the Middle East.
            </p>
          </RevealOnScroll>
        </div>

        <div className="industries-editorial-grid">
          {/* Left Column: 8 Industry Cards Matrix */}
          <div className="industries-matrix">
            {industriesList.map((ind, index) => {
              const IconComp = iconMap[ind.iconName] || Cpu;
              return (
                <RevealOnScroll key={ind.id} delay={index * 50}>
                  <div className="industry-card">
                    <div className="industry-icon-row">
                      <div className="industry-icon-box">
                        <IconComp size={18} aria-hidden="true" />
                      </div>
                      <h3 className="industry-title">{ind.title}</h3>
                    </div>
                    <p className="industry-desc">{ind.description}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* Right Column: Corporate Presentation Photo */}
          <div className="industries-visual-side">
            <RevealOnScroll delay={150}>
              <img
                src="./assets/executive-presentation.jpg"
                alt="Corporate analytics presentation and cross-industry technology strategy review"
                className="industries-image"
                width="1251"
                height="1549"
                loading="lazy"
              />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

