import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { companyDetails, coreServices } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    serviceInterest: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Please enter your business email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please provide a valid email format.';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Please enter your organization name.';
    }
    if (!formData.serviceInterest) {
      newErrors.serviceInterest = 'Please select a service of interest.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your requirements.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Honest handling per R-26 / C-2 / Prompt:
    // This creates an encoded mailto link so the inquiry immediately opens the user's email client
    const subject = encodeURIComponent(`Consulting Inquiry: ${formData.companyName} - ${formData.serviceInterest}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\n` +
      `Company: ${formData.companyName}\n` +
      `Email: ${formData.businessEmail}\n` +
      `Service: ${formData.serviceInterest}\n\n` +
      `Requirements / Message:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${companyDetails.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section section-bg-cool" aria-label="Contact Maviq Global Consulting">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <RevealOnScroll>
            <span className="section-eyebrow">Direct Inquiries</span>
            <h2 className="section-title">Let's Discuss Your Business Requirements.</h2>
            <p className="section-subtitle" style={{ maxWidth: '44rem' }}>
              Tell us about your technology, talent, or workforce requirements. Our team can be contacted directly using the verified details below.
            </p>
          </RevealOnScroll>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Communication Channels & Support Image */}
          <div className="contact-info-col">
            <RevealOnScroll>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                Official Regional Contacts
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-supporting-text)' }}>
                Reach our regional consulting desks directly by telephone or dispatch an inquiry to our central corporate email.
              </p>

              <div className="contact-channels-list">
                {companyDetails.regions.map((reg) => (
                  <a
                    key={reg.code}
                    href={`tel:${reg.phoneRaw}`}
                    className="contact-channel-item"
                    aria-label={`Call ${reg.country} office at ${reg.phone}`}
                  >
                    <div className="contact-channel-icon-box">
                      <Phone size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="contact-channel-label">{reg.country} Direct Line</span>
                      <span className="contact-channel-value">{reg.phone}</span>
                    </div>
                  </a>
                ))}

                <a
                  href={`mailto:${companyDetails.email}`}
                  className="contact-channel-item"
                  aria-label={`Send email to ${companyDetails.email}`}
                >
                  <div className="contact-channel-icon-box">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="contact-channel-label">Central Corporate Email</span>
                    <span className="contact-channel-value">{companyDetails.email}</span>
                  </div>
                </a>

                <a
                  href={companyDetails.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                  aria-label={`Visit official website ${companyDetails.displayWebsite}`}
                >
                  <div className="contact-channel-icon-box">
                    <Globe size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="contact-channel-label">Official Web Portal</span>
                    <span className="contact-channel-value">{companyDetails.displayWebsite}</span>
                  </div>
                </a>
              </div>

              <div className="contact-postal-badge">
                <MapPin size={20} color="#1557A6" style={{ flexShrink: 0 }} aria-hidden="true" />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.8125rem', textTransform: 'uppercase', color: 'var(--color-supporting-text)' }}>
                    Corporate Mailing Address
                  </strong>
                  <span>{companyDetails.postalAddress}</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Accessible Business Inquiry Form */}
          <div>
            <RevealOnScroll delay={150}>
              <div className="contact-form-card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  Submit Requirements
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-supporting-text)', marginBottom: '1.5rem' }}>
                  Complete this brief form to launch a structured email to our regional consulting team.
                </p>

                {submitted && (
                  <div className="form-feedback-banner success" role="alert">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', fontWeight: '600' }}>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>Ready in your email application</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.8125rem' }}>
                      Your email client has been opened with your prefilled inquiry. You can also write directly to <a href={`mailto:${companyDetails.email}`} style={{ fontWeight: '600' }}>{companyDetails.email}</a>.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="required" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Al-Mansoor"
                      className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <span id="fullName-error" className="form-error-msg">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Business Email */}
                  <div className="form-group">
                    <label htmlFor="businessEmail" className="form-label">
                      Business Email <span className="required" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      placeholder="e.g. s.mansoor@enterprise.com"
                      className={`form-input ${errors.businessEmail ? 'has-error' : ''}`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.businessEmail)}
                      aria-describedby={errors.businessEmail ? 'businessEmail-error' : undefined}
                    />
                    {errors.businessEmail && (
                      <span id="businessEmail-error" className="form-error-msg">
                        {errors.businessEmail}
                      </span>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="form-group">
                    <label htmlFor="companyName" className="form-label">
                      Company / Organization Name <span className="required" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Gulf Financial Holdings"
                      className={`form-input ${errors.companyName ? 'has-error' : ''}`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.companyName)}
                      aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                    />
                    {errors.companyName && (
                      <span id="companyName-error" className="form-error-msg">
                        {errors.companyName}
                      </span>
                    )}
                  </div>

                  {/* Service of Interest */}
                  <div className="form-group">
                    <label htmlFor="serviceInterest" className="form-label">
                      Service Area of Interest <span className="required" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className={`form-select ${errors.serviceInterest ? 'has-error' : ''}`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.serviceInterest)}
                      aria-describedby={errors.serviceInterest ? 'serviceInterest-error' : undefined}
                    >
                      <option value="">Select a service category</option>
                      {coreServices.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                      <option value="Executive Search">Executive Search</option>
                      <option value="Workforce & Payroll Solutions">Workforce & Payroll Solutions</option>
                      <option value="General Corporate Advisory">General Corporate Advisory</option>
                    </select>
                    {errors.serviceInterest && (
                      <span id="serviceInterest-error" className="form-error-msg">
                        {errors.serviceInterest}
                      </span>
                    )}
                  </div>

                  {/* Message / Scope */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Requirements & Project Scope <span className="required" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your technology requirements, talent profiles, or engagement timeline..."
                      className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <span id="message-error" className="form-error-msg">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    <span>Dispatch Requirements via Email</span>
                    <Send size={18} aria-hidden="true" />
                  </button>

                  <p className="form-disclaimer">
                    Note: Submitting this form prepares a formatted email dispatch directly to {companyDetails.email} using your preferred email software. No third-party data broker is involved.
                  </p>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

