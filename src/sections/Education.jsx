import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';
import { GraduationCap, BookOpen, Clock, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export function Education() {
  return (
    <section id="education" className="section section-alt" aria-label="Education and Academic Background">
      <div className="container">
        <SectionHeader
          tag="Academic Qualifications"
          title="Education & Academic Journey"
          subtitle="Combining professional medical qualification (DMF) with social sciences (BSS), specialized MEAL credentials, and ongoing governance studies."
          id="education"
        />

        <div className="education-grid">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className={`education-card ${edu.isOngoing ? 'ongoing' : 'completed'}`}
            >
              <div className="education-card-header">
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-institution">
                    <GraduationCap size={16} />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <Badge variant={edu.isOngoing ? 'ongoing' : 'completed'}>
                  {edu.isOngoing ? <Clock size={12} /> : <Award size={12} />}
                  <span>{edu.status}</span>
                </Badge>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="education-year-badge">Year / Period: {edu.year}</span>
                {edu.grade && (
                  <span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
                    {edu.grade}
                  </span>
                )}
              </div>

              <p className="education-details">{edu.details}</p>

              <div className="education-highlights-list">
                {edu.highlights.map((item, idx) => (
                  <div key={idx} className="education-highlight-item">
                    <CheckCircle2 size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                    <span>{item}</span>
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
