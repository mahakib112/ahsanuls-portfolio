import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Users, DollarSign, Award, Building2, ShieldCheck, Droplets, CheckCircle, BarChart3 } from 'lucide-react';
import { impactData } from '../data/impact';

export function Impact() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Users':
        return <Users size={24} />;
      case 'DollarSign':
        return <DollarSign size={24} />;
      case 'Award':
        return <Award size={24} />;
      case 'Building2':
        return <Building2 size={24} />;
      default:
        return <BarChart3 size={24} />;
    }
  };

  const pillarIcons = [
    <Users size={20} />,
    <Droplets size={20} />,
    <ShieldCheck size={20} />,
    <CheckCircle size={20} />
  ];

  return (
    <section id="impact" className="section section-alt" aria-label="Key Impact and Achievements">
      <div className="container">
        <SectionHeader
          tag="Verified Outcomes"
          title={impactData.headline}
          subtitle={impactData.subheadline}
          id="impact"
        />

        {/* Primary Metrics Grid */}
        <div className="impact-metrics-grid">
          {impactData.primaryMetrics.map((metric) => (
            <div key={metric.id} className="impact-card">
              <div className="impact-icon-wrapper">{getIcon(metric.icon)}</div>
              <div className="impact-value">{metric.value}</div>
              <h3 className="impact-title">{metric.title}</h3>
              <div className="impact-subtitle">{metric.subtitle}</div>
              <p className="impact-description">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Pillars Grid */}
        <div className="pillars-grid">
          {impactData.pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-card-icon">{pillarIcons[idx % pillarIcons.length]}</div>
              <div>
                <h4 className="pillar-card-title">{pillar.title}</h4>
                <p className="pillar-card-desc">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
