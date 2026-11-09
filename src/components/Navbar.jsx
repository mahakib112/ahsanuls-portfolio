import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileDown, HeartPulse } from 'lucide-react';
import { profileData } from '../data/profile';

export function Navbar({ activeSection, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'impact', label: 'Impact' },
    { id: 'skills', label: 'Skills' },
    { id: 'health-wash', label: 'Health & WASH' },
    { id: 'meal-dev', label: 'MEAL' },
    { id: 'education', label: 'Education' },
    { id: 'trainings', label: 'Certifications' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header" role="banner">
        <div className="container header-container">
        {/* Brand / Logo */}
        <a href="#hero" className="brand" aria-label="Md. Ahsanul Haque Home">
          <div className="brand-icon" aria-hidden="true">
            <HeartPulse size={20} />
          </div>
          <div className="brand-text">
            <span className="brand-name">{profileData.name}</span>
            <span className="brand-role">Health & Development Professional</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions (Theme toggle, Download CV, Mobile toggle) */}
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={profileData.cvPath}
            download="Md-Ahsanul-Haque-CV.pdf"
            className="btn btn-primary btn-sm"
            style={{ display: 'none' }}
            id="nav-cv-btn"
          >
            <FileDown size={15} />
            <span>CV</span>
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Drawer Overlay */}
    <div
      className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
      onClick={() => setMobileMenuOpen(false)}
      aria-hidden="true"
    />

    {/* Mobile Drawer */}
    <div
      className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Drawer"
    >
      <div className="mobile-drawer-header">
        <div className="brand">
          <div className="brand-icon" aria-hidden="true">
            <HeartPulse size={18} />
          </div>
          <div className="brand-text">
            <span className="brand-name">{profileData.name}</span>
          </div>
        </div>
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </div>

      <nav className="mobile-nav-links" aria-label="Mobile Navigation">
        <a
          href="#hero"
          className={`mobile-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
          onClick={handleLinkClick}
        >
          <span>Home</span>
        </a>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mobile-drawer-footer">
        <a
          href={profileData.cvPath}
          download="Md-Ahsanul-Haque-CV.pdf"
          className="btn btn-primary"
          onClick={handleLinkClick}
        >
          <FileDown size={18} />
          <span>Download Official CV</span>
        </a>
        <a
          href="#contact"
          className="btn btn-secondary"
          onClick={handleLinkClick}
        >
          <span>Get in Touch</span>
        </a>
      </div>
    </div>
  </>
);
}
