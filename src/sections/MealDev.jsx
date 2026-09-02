import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Activity, FileSearch, UserCheck, BookOpen, CheckCircle2 } from 'lucide-react';
import { mealDevData } from '../data/mealDev';

export function MealDev() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Activity':
        return <Activity size={22} />;
      case 'FileSearch':
        return <FileSearch size={22} />;
      case 'UsersCheck':
        return <UserCheck size={22} />;
      case 'BookOpenCheck':
        return <BookOpen size={22} />;
      default:
        return <Activity size={22} />;
    }
  };

  return (
    <section id="meal-dev" className="section" aria-label="MEAL and Development Practice">
      <div className="container">
        <SectionHeader
          tag="Programmatic Rigor"
          title={mealDevData.title}
          subtitle={mealDevData.subtitle}
          id="meal-dev"
        />

        <div className="feature-cards-grid">
          {mealDevData.pillars.map((pillar) => (
            <div key={pillar.id} className="feature-card">
              <div className="feature-card-header">
                <div className="feature-card-icon">{getIcon(pillar.icon)}</div>
                <h3 className="feature-card-title">{pillar.title}</h3>
              </div>

              <p className="feature-card-summary">{pillar.description}</p>

              <div className="feature-items-list">
                {pillar.deliverables.map((item, idx) => (
                  <div key={idx} className="feature-item">
                    <CheckCircle2 size={16} className="feature-item-icon" />
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
