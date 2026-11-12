import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { companyDetails } from '../data/companyData';

export default function Header({ currentPage, navigateTo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Talent', href: '#talent' },
    { label: 'Managed IT', href: '#managed-services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Our Approach', href: '#why-maviq' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#careers', isPage: true },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (link.isPage) {
      navigateTo('careers');
    } else {
      navigateTo('home', link.href);
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigateTo('home', '#home');
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Brand Logo & Title */}
          <a
            href="#home"
            className="header-brand"
            aria-label="Maviq Global Consulting FZC Home"
            onClick={handleBrandClick}
          >
            <img
              src="./assets/logo.png"
              alt="Maviq Global Consulting FZC Logo"
              className="header-logo"
              width="753"
              height="487"
            />
            <div className="brand-text-block">
              <span className="brand-company-name">Maviq Global</span>
              <span className="brand-company-sub">Consulting FZC</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = link.isPage && currentPage === 'careers';
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions & Mobile Toggle */}
          <div className="header-actions">
            <a
              href="#contact"
              className="btn btn-primary header-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('home', '#contact');
              }}
            >
              Discuss Your Requirements
            </a>

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <aside
        id="mobile-navigation-drawer"
        className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <div className="header-brand">
            <img
              src="./assets/logo.png"
              alt="Maviq Global Consulting FZC Logo"
              className="header-logo mobile-drawer-logo"
              width="753"
              height="487"
            />
            <div className="brand-text-block">
              <span className="brand-company-name">Maviq Global</span>
              <span className="brand-company-sub">Consulting FZC</span>
            </div>
          </div>
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile Navigation Links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${link.isPage && currentPage === 'careers' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link)}
            >
              <span>{link.label}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href="#contact"
            className="btn btn-primary btn-block"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              navigateTo('home', '#contact');
            }}
          >
            Discuss Your Requirements
          </a>
          <p className="region-label" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            {companyDetails.regionsSummary}
          </p>
        </div>
      </aside>
    </>
  );
}
