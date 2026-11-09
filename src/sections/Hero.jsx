import React from 'react';
import { ArrowRight, FileDown, Mail, MapPin, Award, Users, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export function Hero() {
  return (
    <section id="hero" className="section hero-section" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="hero-content">
            <div className="hero-badge">
              <Award size={16} />
              <span>{profileData.experienceYears} Years in Health & NGO Development</span>
            </div>

            <h1 className="hero-title">{profileData.name}</h1>

            <div className="hero-role">{profileData.headline}</div>

            <p className="hero-description">
              Dedicated NGO Program & MEAL Practitioner with approximately 7 years of hands-on
              experience driving community health initiatives, sustainable WASH interventions,
              multi-stakeholder coordination, and data-driven field accountability.
            </p>

            <div className="hero-actions">
              <a href="#experience" className="btn btn-primary btn-lg">
                <span>View My Experience</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={profileData.cvPath}
                download="Md-Ahsanul-Haque-CV.pdf"
                className="btn btn-secondary btn-lg"
              >
                <FileDown size={18} />
                <span>Download CV</span>
              </a>

              <a href="#contact" className="btn btn-outline btn-lg">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Meta tags bar */}
            <div className="hero-meta-bar">
              <div className="hero-meta-item">
                <MapPin size={16} />
                <span>{profileData.location}</span>
              </div>
              <div className="hero-meta-item">
                <CheckCircle2 size={16} />
                <span>DMF Clinical Medical Foundation</span>
              </div>
              <div className="hero-meta-item">
                <CheckCircle2 size={16} />
                <span>PGD in MEAL Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Profile Highlights Card */}
          <div className="hero-card">
            {/* Profile Photo positioned on top right above details and stats */}
            <div className="hero-photo-wrapper">
              <img
                src={profileData.profilePicture}
                alt={profileData.name}
                className="hero-profile-photo"
              />
            </div>

            <div className="hero-card-header">
              <div className="hero-card-info">
                <h3>{profileData.name}</h3>
                <p>Medical Assistant | Health & Development</p>
                <p style={{ marginTop: '0.25rem', color: 'var(--primary)', fontWeight: 600 }}>
                  NGO Program & MEAL Specialist
                </p>
              </div>
            </div>

            {/* Stats Grid - Clickable cards linked to Experience */}
            <div className="hero-stats-grid">
              {profileData.stats.map((stat, idx) => (
                <a
                  key={idx}
                  href="#experience"
                  className="hero-stat-box"
                  title={`Click to view Experience: ${stat.label}`}
                  aria-label={`View experience section for ${stat.label}`}
                >
                  <div className="hero-stat-val">{stat.value}</div>
                  <div className="hero-stat-lbl">{stat.label}</div>
                  <div className="hero-stat-desc">{stat.description}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
