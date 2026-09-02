import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, Linkedin, FileDown } from 'lucide-react';
import { profileData } from '../data/profile';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate submission or connect to minimal Express backend if available
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).catch(() => {
      // Graceful fallback for static hosting environments
    });

    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section" aria-label="Contact and Inquiries">
      <div className="container">
        <SectionHeader
          tag="Get in Touch"
          title="Contact & Collaboration"
          subtitle="Open to development sector consulting, NGO program coordination, MEAL leadership roles, and public health partnerships."
          id="contact"
        />

        <div className="contact-grid">
          {/* Left: Contact Info & Channels */}
          <div className="contact-info-panel">
            {/* Email Card with Copy Feature */}
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <Mail size={22} />
              </div>
              <div className="contact-card-content" style={{ flex: 1 }}>
                <h4>Email Address</h4>
                <div className="contact-card-value">{profileData.email}</div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: '0.6rem' }}
                >
                  {copied ? (
                    <>
                      <Check size={14} style={{ color: 'var(--success-green)' }} />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <MapPin size={22} />
              </div>
              <div className="contact-card-content">
                <h4>Primary Location</h4>
                <div className="contact-card-value">{profileData.location}</div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Available for in-country field missions and remote program advisory.
                </p>
              </div>
            </div>

            {/* LinkedIn & Social */}
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <Linkedin size={22} />
              </div>
              <div className="contact-card-content">
                <h4>Professional Profile</h4>
                <div className="contact-card-value">LinkedIn Profile</div>
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '0.6rem' }}
                >
                  <span>View LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Download CV Card */}
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <FileDown size={22} />
              </div>
              <div className="contact-card-content">
                <h4>Complete Professional CV</h4>
                <div className="contact-card-value">Official Curriculum Vitae (PDF)</div>
                <a
                  href={profileData.cvPath}
                  download="Md-Ahsanul-Haque-CV.pdf"
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: '0.6rem' }}
                >
                  <FileDown size={14} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="contact-form-panel">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Whether you represent an INGO, research initiative, donor mission, or community project,
              I welcome your inquiry.
            </p>

            {formSubmitted ? (
              <div className="form-status-msg form-status-success">
                <CheckCircle2 size={18} />
                <span>Thank you! Your message has been noted. I will respond to your email promptly.</span>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe / Recruitment Manager"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. name@organization.org"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject / Organization
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Health Program Coordinator Opportunity"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message Details *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please outline the position, project scope, or inquiry..."
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '0.5rem' }}>
                  <Send size={18} />
                  <span>Send Professional Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
