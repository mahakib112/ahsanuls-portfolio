import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Award, HeartPulse, ShieldAlert, BookOpen, Stethoscope } from 'lucide-react';
import { trainingsData } from '../data/trainings';

export function Trainings() {
  const getTrainingIcon = (id) => {
    switch (id) {
      case 'bls':
        return <HeartPulse size={20} />;
      case 'cpr-aed-firstaid':
        return <Award size={20} />;
      case 'covid-ipc':
        return <ShieldAlert size={20} />;
      case 'public-health-courses':
        return <BookOpen size={20} />;
      case 'pediatric-palliative':
        return <Stethoscope size={20} />;
      default:
        return <Award size={20} />;
    }
  };

  return (
    <section id="trainings" className="section" aria-label="Training and Certifications">
      <div className="container">
        <SectionHeader
          tag="Professional Credentials"
          title="Training & Certifications"
          subtitle="Continuous specialized capacity enhancement in emergency clinical life support, epidemic containment, and public health."
          id="trainings"
        />

        <div className="training-cards-grid">
          {trainingsData.map((training) => (
            <div key={training.id} className="training-card">
              <div className="card-top-icon">{getTrainingIcon(training.id)}</div>
              <h3 className="card-title-h3">{training.title}</h3>
              <div className="card-meta-text">{training.category}</div>
              <p className="card-desc-p">{training.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
