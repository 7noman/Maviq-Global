import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { companyDetails } from '../data/companyData';

export default function LegalModal({ isOpen, type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {type === 'terms' ? (
              <FileText size={24} color="#1557A6" aria-hidden="true" />
            ) : (
              <ShieldCheck size={24} color="#1557A6" aria-hidden="true" />
            )}
            <h3 id="legal-modal-title" className="modal-title">
              {type === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <div className="modal-body">
          {type === 'terms' ? (
            <div>
              <p>
                <strong>Effective Date:</strong> {new Date().getFullYear()} | <strong>Entity:</strong> {companyDetails.legalEntity}
              </p>
              <p>
                Welcome to the official website of {companyDetails.name}. By accessing or using this website (www.maviqglobal.com), you acknowledge and agree to comply with the following operational terms and conditions.
              </p>

              <h4>1. Professional Scope</h4>
              <p>
                {companyDetails.name} provides technology staffing, talent augmentation, IT executive recruitment, project-based outsourcing, and managed IT services to corporate clients across the United Arab Emirates, Qatar, and Saudi Arabia. Website information is provided for corporate informational and introductory purposes.
              </p>

              <h4>2. Engagement Agreements</h4>
              <p>
                All talent placements, staff augmentation contracts, managed services agreements, and outsourced deliverables are governed by formal, mutually executed Master Services Agreements (MSAs), Statements of Work (SOWs), or Service Level Agreements (SLAs). Nothing on this website constitutes a binding contractual guarantee or unilateral offer of employment.
              </p>

              <h4>3. Intellectual Property</h4>
              <p>
                All company trademarks, logo artwork, written content, service descriptions, and media assets published on this website are the proprietary property of {companyDetails.name} or used under authorized license. Unauthorized reproduction or commercial redistribution without prior written consent is strictly prohibited.
              </p>

              <h4>4. Regional Regulatory Compliance</h4>
              <p>
                Services delivered within the UAE, Qatar, and Saudi Arabia comply with relevant commercial licensing, labor regulations, and corporate compliance standards established in each operating jurisdiction.
              </p>

              <h4>5. Inquiries & Contact</h4>
              <p>
                For questions regarding these operational terms, please contact our administrative team at <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a> or write to {companyDetails.postalAddress}.
              </p>
            </div>
          ) : (
            <div>
              <p>
                <strong>Effective Date:</strong> {new Date().getFullYear()} | <strong>Entity:</strong> {companyDetails.legalEntity}
              </p>
              <p>
                {companyDetails.name} is dedicated to safeguarding the privacy and confidentiality of corporate partners, client representatives, and prospective candidates who interact with our firm.
              </p>

              <h4>1. Information Collection</h4>
              <p>
                We collect business contact information (including names, corporate email addresses, telephone numbers, and inquiry details) submitted voluntarily through our inquiry channels or direct communications.
              </p>

              <h4>2. Purpose of Processing</h4>
              <p>
                Collected information is utilized strictly to:
              </p>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
                <li>Evaluate and respond to corporate technology staffing and consulting requirements.</li>
                <li>Coordinate talent matching, candidate evaluations, and project scopes.</li>
                <li>Maintain necessary business communication regarding contracted engagements.</li>
              </ul>

              <h4>3. Data Confidentiality & Non-Disclosure</h4>
              <p>
                We do not sell, rent, or monetize client or candidate data. Personal and corporate data is treated with professional non-disclosure standards and shared only with authorized personnel, verified client partners, or statutory authorities where required by applicable law.
              </p>

              <h4>4. Regional Jurisdiction & Rights</h4>
              <p>
                Data handling adheres to regional regulatory frameworks across the UAE, Qatar, and Saudi Arabia. You may request access, correction, or deletion of your business contact information by submitting a request to <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a>.
              </p>

              <h4>5. Data Protection Inquiries</h4>
              <p>
                For data privacy requests or inquiries, reach out to our privacy coordinator at <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a>.
              </p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

