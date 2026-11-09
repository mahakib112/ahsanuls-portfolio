import React from 'react';
import { ArrowUp, HeartPulse, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { profileData } from '../data/profile';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <div className="brand" style={{ marginBottom: '1rem' }}>
              <div className="brand-icon" aria-hidden="true">
                <HeartPulse size={20} />
              </div>
              <div className="brand-text">
                <span className="brand-name">{profileData.name}</span>
                <span className="brand-role">Health & Development Professional</span>
              </div>
            </div>
            <p>
              Dedicated to strengthening community health systems, sustainable WASH interventions,
              and accountable MEAL frameworks across the development sector.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Key Sections</h4>
            <div className="footer-links-list">
              <a href="#about" className="footer-link">About Career</a>
              <a href="#experience" className="footer-link">Professional Experience</a>
              <a href="#impact" className="footer-link">Verified Impact</a>
              <a href="#health-wash" className="footer-link">Health & WASH</a>
              <a href="#meal-dev" className="footer-link">MEAL Frameworks</a>
              <a href="#education" className="footer-link">Education & Studies</a>
            </div>
          </div>

          {/* Professional Reach */}
          <div className="footer-col">
            <h4>Contact & Presence</h4>
            <div className="footer-links-list">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>{profileData.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <Mail size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>{profileData.email}</span>
              </div>
              <a
                href={profileData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon size={16} color="#25D366" />
                <span>{profileData.phone} (WhatsApp)</span>
              </a>
              <a
                href={profileData.cvPath}
                download="Md-Ahsanul-Haque-CV.pdf"
                className="footer-link"
                style={{ marginTop: '0.5rem', color: 'var(--primary)', fontWeight: 600 }}
              >
                Download Official CV (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copy-wrapper">
            <div>
              © {new Date().getFullYear()} {profileData.name}. All professional rights reserved.
            </div>
            <div className="footer-developer-credit">
              Developed by{' '}
              <a
                href="https://www.facebook.com/8citsolution"
                target="_blank"
                rel="noopener noreferrer"
                className="developer-link"
              >
                8C IT Solution
              </a>
            </div>
          </div>
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
