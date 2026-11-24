import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/companyData';
import RevealOnScroll from '../components/RevealOnScroll';
import CountryFlag from '../components/CountryFlag';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    companyName: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.number.trim()) {
      newErrors.number = 'Please enter your phone number.';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Please enter your company name.';
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

    const subject = encodeURIComponent(`Consulting Inquiry: ${formData.companyName}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone Number: ${formData.number}\n` +
      `Company Name: ${formData.companyName}\n\n` +
      `Notes:\n${formData.notes.trim() || 'No additional notes provided.'}\n`
    );

    const targetEmail = companyDetails.submissionsEmail || 'hussain@maviqglobal.com';
    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
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
          {/* Left Column: Regional Presence, Flags, Addresses & Direct Lines */}
          <div className="contact-info-col">
            <RevealOnScroll>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Regional Presence & Official Contacts
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-supporting-text)' }}>
                Reach our regional consulting desks directly by telephone or dispatch an inquiry to our central corporate email.
              </p>

              {/* Country Addresses & Flags */}
              <div className="contact-regions-list">
                {companyDetails.regions.map((reg) => (
                  <div key={reg.code} className="contact-region-card">
                    <div className="contact-region-header">
                      <CountryFlag code={reg.code} size="md" />
                      <h4 className="contact-region-country">{reg.country}</h4>
                    </div>
                    <div className="contact-region-meta">
                      <div className="contact-region-row">
                        <MapPin size={15} color="#1557A6" style={{ flexShrink: 0 }} aria-hidden="true" />
                        <span>{reg.address}</span>
                      </div>
                      <div className="contact-region-row">
                        <Phone size={15} color="#1557A6" style={{ flexShrink: 0 }} aria-hidden="true" />
                        <a
                          href={`tel:${reg.phoneRaw}`}
                          className="contact-region-phone"
                          aria-label={`Call ${reg.country} office at ${reg.phone}`}
                        >
                          {reg.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Central Email & Web Portal */}
              <div className="contact-channels-list">
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
            </RevealOnScroll>
          </div>

          {/* Right Column: Simplified Business Inquiry Form */}
          <div>
            <RevealOnScroll delay={150}>
              <div className="contact-form-card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  Send Us an Inquiry
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-supporting-text)', marginBottom: '1.5rem' }}>
                  Complete the fields below to prepare a direct email inquiry to our consulting team.
                </p>

                {submitted && (
                  <div className="form-feedback-banner success" role="alert">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', fontWeight: '600' }}>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>Ready in your email application</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.8125rem' }}>
                      Your email client has been opened with your prefilled inquiry addressed to{' '}
                      <strong>{companyDetails.submissionsEmail}</strong>. Please review and click Send in your email application to dispatch. You can also write directly to{' '}
                      <a href={`mailto:${companyDetails.email}`} style={{ fontWeight: '600' }}>
                        {companyDetails.email}
                      </a>.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name <span className="required" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`form-input ${errors.name ? 'has-error' : ''}`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="form-error-msg">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email <span className="required" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`form-input ${errors.email ? 'has-error' : ''}`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="form-error-msg">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Number */}
                  <div className="form-group">
                    <label htmlFor="number" className="form-label">
                      Number <span className="required" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Enter your contact number"
                      className={`form-input ${errors.number ? 'has-error' : ''}`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.number)}
                      aria-describedby={errors.number ? 'number-error' : undefined}
                    />
                    {errors.number && (
                      <span id="number-error" className="form-error-msg">
                        {errors.number}
                      </span>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="form-group">
                    <label htmlFor="companyName" className="form-label">
                      Company Name <span className="required" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Enter your company name"
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

                  {/* Notes (optional) */}
                  <div className="form-group">
                    <label htmlFor="notes" className="form-label">
                      Notes <span className="optional-label">(optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Share any additional details or requirements..."
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    <span>SUBMIT</span>
                    <Send size={18} aria-hidden="true" />
                  </button>

                  <p className="form-disclaimer">
                    Submitting opens your default email client addressed to {companyDetails.submissionsEmail} with your inquiry details prefilled. For general inquiries, you can also contact {companyDetails.email}.
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
