import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="section" aria-label="Professional Experience">
      <div className="container">
        <SectionHeader
          tag="Career Timeline"
          title="Professional Experience"
          subtitle="Approximately 7 years of progressive track record in health program leadership, MEAL execution, and frontline medical service."
          id="experience"
        />

        <div className="experience-timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="timeline-dot" aria-hidden="true" />

              <div className="experience-header">
                <div>
                  <h3 className="experience-role-title">{exp.role}</h3>
                  <div className="experience-org">{exp.organization}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    <MapPin size={14} style={{ color: 'var(--primary)' }} />
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.type}</span>
                  </div>
                </div>

                <div className="experience-period-badge">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="experience-summary">{exp.summary}</p>

              <div className="experience-duties-list">
                {exp.responsibilities.map((duty, idx) => (
                  <div key={idx} className="experience-duty-item">
                    <CheckCircle2 size={16} className="duty-bullet" />
                    <span>{duty}</span>
                  </div>
                ))}
              </div>

              <div className="experience-tags">
                {exp.tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
