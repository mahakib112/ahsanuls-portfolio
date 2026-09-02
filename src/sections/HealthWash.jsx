import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Stethoscope, Droplets, ShieldAlert, GraduationCap, CheckCircle2 } from 'lucide-react';
import { healthWashData } from '../data/healthWash';

export function HealthWash() {
  const getDomainIcon = (iconName) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope size={22} />;
      case 'Droplets':
        return <Droplets size={22} />;
      case 'ShieldAlert':
        return <ShieldAlert size={22} />;
      case 'GraduationCap':
        return <GraduationCap size={22} />;
      default:
        return <Stethoscope size={22} />;
    }
  };

  return (
    <section id="health-wash" className="section section-alt" aria-label="Health and WASH Expertise">
      <div className="container">
        <SectionHeader
          tag="Field Specialization"
          title={healthWashData.title}
          subtitle={healthWashData.subtitle}
          id="health-wash"
        />

        <div className="feature-cards-grid">
          {healthWashData.domains.map((domain) => (
            <div key={domain.id} className="feature-card">
              <div className="feature-card-header">
                <div className="feature-card-icon">{getDomainIcon(domain.icon)}</div>
                <h3 className="feature-card-title">{domain.title}</h3>
              </div>

              <p className="feature-card-summary">{domain.summary}</p>

              <div className="feature-items-list">
                {domain.keyAreas.map((area, idx) => (
                  <div key={idx} className="feature-item">
                    <CheckCircle2 size={16} className="feature-item-icon" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
