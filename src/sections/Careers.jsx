import React, { useState, useRef } from 'react';
import {
  Briefcase,
  Globe2,
  TrendingUp,
  Users,
  Upload,
  FileText,
  Send,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  Info
} from 'lucide-react';
import { companyDetails, talentCategories } from '../data/companyData';
import CountryFlag from '../components/CountryFlag';
import RevealOnScroll from '../components/RevealOnScroll';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];

export default function Careers({ navigateTo }) {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    positionAppliedFor: '',
    additionalMessage: '',
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const careerHighlights = [
    {
      icon: Globe2,
      title: 'Regional Enterprise Exposure',
      description: 'Work alongside technology teams and enterprise organizations across the United Arab Emirates, Qatar, and Saudi Arabia.',
    },
    {
      icon: TrendingUp,
      title: 'High-Impact Technology Roles',
      description: 'Contribute to digital transformation initiatives across cloud, DevOps, AI/ML, ERP, cybersecurity, and software engineering.',
    },
    {
      icon: Users,
      title: 'Consultative Placement Support',
      description: 'Partner with a dedicated recruitment team focused on matching technical specialization with meaningful business objectives.',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setResumeFile(null);
      return;
    }

    const fileNameLower = file.name.toLowerCase();
    const hasValidExt = ALLOWED_EXTENSIONS.some((ext) => fileNameLower.endsWith(ext));

    if (!hasValidExt) {
      setResumeFile(null);
      setErrors((prev) => ({
        ...prev,
        resume: 'Please upload a valid PDF, DOC, or DOCX file.',
      }));
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setResumeFile(null);
      setErrors((prev) => ({
        ...prev,
        resume: 'File size must not exceed 5 MB.',
      }));
      return;
    }

    setResumeFile(file);
    setErrors((prev) => ({ ...prev, resume: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    }
    if (!formData.positionAppliedFor.trim()) {
      newErrors.positionAppliedFor = 'Please specify the position or technical domain you are applying for.';
    }
    if (!resumeFile) {
      newErrors.resume = 'Please select your Resume / CV (PDF, DOC, or DOCX).';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(
      `Career Application: ${formData.positionAppliedFor} - ${formData.fullName}`
    );
    const body = encodeURIComponent(
      `Candidate Application Details\n` +
      `-----------------------------\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Position Applied For: ${formData.positionAppliedFor}\n` +
      `Selected Resume File: ${resumeFile ? resumeFile.name : 'Not selected'} (Please attach this file before sending)\n\n` +
      `Additional Message:\n${formData.additionalMessage.trim() || 'No additional message provided.'}\n`
    );

    window.location.href = `mailto:${companyDetails.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="careers-page-wrapper">
      {/* Careers Hero Header */}
      <section className="careers-hero" aria-label="Careers at Maviq Global">
        <div className="container">
          <button
            type="button"
            className="careers-back-link"
            onClick={() => navigateTo('home', '#home')}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <div className="careers-hero-content">
            <span className="section-eyebrow">Careers at Maviq Global</span>
            <h1 className="careers-hero-title">Build Your Career with Maviq Global</h1>
            <p className="careers-hero-subtitle">
              Join our growing network of technology consultants, software specialists, and delivery professionals supporting digital transformation across the UAE, Qatar, and Saudi Arabia.
            </p>
            <div className="careers-regions-row">
              <span className="hero-country-item">
                <CountryFlag code="UAE" size="sm" />
                <span>UAE</span>
              </span>
              <span className="hero-country-divider" aria-hidden="true">|</span>
              <span className="hero-country-item">
                <CountryFlag code="QATAR" size="sm" />
                <span>QATAR</span>
              </span>
              <span className="hero-country-divider" aria-hidden="true">|</span>
              <span className="hero-country-item">
                <CountryFlag code="SAUDI ARABIA" size="sm" />
                <span>SAUDI ARABIA</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Maviq Global */}
      <section className="section section-compact" aria-label="Why Work With Maviq Global">
        <div className="container">
          <div className="section-header section-header-compact">
            <RevealOnScroll>
              <span className="section-eyebrow">Our Culture & Growth</span>
              <h2 className="section-title">Why Work With Maviq Global</h2>
              <p className="section-subtitle" style={{ maxWidth: '46rem' }}>
                We connect talented technology professionals with mission-critical engagements across banking, government, energy, healthcare, logistics, and enterprise IT.
              </p>
            </RevealOnScroll>
          </div>

          <div className="careers-highlights-grid">
            {careerHighlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <RevealOnScroll key={idx} delay={idx * 70}>
                  <div className="careers-highlight-card">
                    <div className="service-card-icon-wrap">
                      <IconComp size={22} aria-hidden="true" />
                    </div>
                    <h3 className="service-card-title">{item.title}</h3>
                    <p className="service-card-desc" style={{ marginBottom: 0 }}>
                      {item.description}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Talent Opportunities & Resume Application Form */}
      <section className="section section-bg-cool" aria-label="Submit Your Resume">
        <div className="container">
          <div className="careers-application-grid">
            {/* Left Column: Current Opportunities Overview */}
            <div>
              <RevealOnScroll>
                <span className="section-eyebrow">Opportunities</span>
                <h2 className="section-title">Open Roles & Talent Network</h2>
                <p className="careers-intro-text">
                  Maviq Global Consulting continuously recruits experienced IT specialists for permanent, contract, and project-based roles across our core practice areas.
                </p>

                <div className="careers-notice-box">
                  <div className="careers-notice-header">
                    <Briefcase size={20} color="#1557A6" aria-hidden="true" />
                    <h3>Submit Your CV for Current & Upcoming Roles</h3>
                  </div>
                  <p>
                    Specific enterprise openings are matched continuously with our active client requirements across the Middle East. Submit your resume using the application form so our talent team can consider your profile for relevant consulting and technology placements.
                  </p>
                </div>

                <h4 className="careers-domains-heading">Core Technical Domains We Recruit For:</h4>
                <div className="careers-domains-chips">
                  {talentCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      className="careers-domain-pill"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, positionAppliedFor: cat.role }));
                        if (errors.positionAppliedFor) {
                          setErrors((prev) => ({ ...prev, positionAppliedFor: '' }));
                        }
                      }}
                    >
                      {cat.role}
                    </button>
                  ))}
                </div>
                <p className="careers-domains-hint">
                  Tip: Click any domain above to populate "Position Applied For".
                </p>
              </RevealOnScroll>
            </div>

            {/* Right Column: Candidate Application Form */}
            <div>
              <RevealOnScroll delay={120}>
                <div className="contact-form-card">
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                    Candidate Application Form
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-supporting-text)', marginBottom: '1.5rem' }}>
                    Complete your details and select your resume to prepare an application email to our recruitment desk.
                  </p>

                  {submitted && (
                    <div className="form-feedback-banner warning" role="alert">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', fontWeight: '700' }}>
                        <CheckCircle2 size={18} aria-hidden="true" />
                        <span>Email client opened. One manual step required:</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.8125rem', lineHeight: 1.5 }}>
                        Your email client has been opened with your application details addressed to{' '}
                        <a href={`mailto:${companyDetails.email}`} style={{ fontWeight: '600' }}>
                          {companyDetails.email}
                        </a>. Because this website uses direct email dispatch without server file storage, please attach your selected resume file (
                        <strong>{resumeFile?.name}</strong>) directly in your email window before clicking Send.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Full Name */}
                    <div className="form-group">
                      <label htmlFor="careers-fullName" className="form-label">
                        Full Name <span className="required" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="careers-fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                        aria-required="true"
                        aria-invalid={Boolean(errors.fullName)}
                      />
                      {errors.fullName && (
                        <span className="form-error-msg">{errors.fullName}</span>
                      )}
                    </div>

                    {/* Email & Phone Row */}
                    <div className="careers-form-row">
                      <div className="form-group">
                        <label htmlFor="careers-email" className="form-label">
                          Email <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="email"
                          id="careers-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className={`form-input ${errors.email ? 'has-error' : ''}`}
                          aria-required="true"
                          aria-invalid={Boolean(errors.email)}
                        />
                        {errors.email && (
                          <span className="form-error-msg">{errors.email}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="careers-phone" className="form-label">
                          Phone <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="tel"
                          id="careers-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 ..."
                          className={`form-input ${errors.phone ? 'has-error' : ''}`}
                          aria-required="true"
                          aria-invalid={Boolean(errors.phone)}
                        />
                        {errors.phone && (
                          <span className="form-error-msg">{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    {/* Position Applied For */}
                    <div className="form-group">
                      <label htmlFor="careers-position" className="form-label">
                        Position Applied For <span className="required" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="careers-position"
                        name="positionAppliedFor"
                        value={formData.positionAppliedFor}
                        onChange={handleChange}
                        placeholder="e.g. Cloud Engineer, DevOps Engineer, Software Developer"
                        className={`form-input ${errors.positionAppliedFor ? 'has-error' : ''}`}
                        aria-required="true"
                        aria-invalid={Boolean(errors.positionAppliedFor)}
                      />
                      {errors.positionAppliedFor && (
                        <span className="form-error-msg">{errors.positionAppliedFor}</span>
                      )}
                    </div>

                    {/* Resume / CV Upload */}
                    <div className="form-group">
                      <label htmlFor="careers-resume" className="form-label">
                        Resume / CV Upload (PDF, DOC, DOCX, max 5 MB){' '}
                        <span className="required" aria-hidden="true">*</span>
                      </label>
                      <div
                        className={`file-upload-dropzone ${errors.resume ? 'has-error' : ''} ${resumeFile ? 'has-file' : ''}`}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          id="careers-resume"
                          name="resume"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          onChange={handleFileChange}
                          className="sr-only-file-input"
                          aria-required="true"
                        />
                        {resumeFile ? (
                          <div className="file-selected-info">
                            <FileText size={22} color="#1557A6" aria-hidden="true" />
                            <div>
                              <span className="file-selected-name">{resumeFile.name}</span>
                              <span className="file-selected-size">
                                {(resumeFile.size / 1024).toFixed(0)} KB · Click to replace
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="file-placeholder-info">
                            <Upload size={22} color="#1557A6" aria-hidden="true" />
                            <span>Click to choose your Resume / CV file</span>
                            <span className="file-types-hint">Accepted formats: PDF, DOC, DOCX (Max 5 MB)</span>
                          </div>
                        )}
                      </div>
                      {errors.resume && (
                        <span className="form-error-msg">{errors.resume}</span>
                      )}
                    </div>

                    {/* Additional Message (optional) */}
                    <div className="form-group">
                      <label htmlFor="careers-message" className="form-label">
                        Additional Message <span className="optional-label">(optional)</span>
                      </label>
                      <textarea
                        id="careers-message"
                        name="additionalMessage"
                        value={formData.additionalMessage}
                        onChange={handleChange}
                        placeholder="Share availability, notice period, preferred region, or a brief summary of your experience..."
                        className="form-textarea"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block btn-lg">
                      <span>SUBMIT APPLICATION</span>
                      <Send size={18} aria-hidden="true" />
                    </button>

                    <div className="careers-mailto-note">
                      <Info size={15} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                      <span>
                        Note: This static website dispatches applications via your email client to {companyDetails.email}. You will need to attach your CV file inside your email client before sending.
                      </span>
                    </div>
                  </form>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

