import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Users, Megaphone, HeartHandshake, CalendarCheck, Droplets } from 'lucide-react';
import { leadershipData } from '../data/leadership';

export function Leadership() {
  const getLeadershipIcon = (id) => {
    switch (id) {
      case 'health-campaigns':
        return <Megaphone size={20} />;
      case 'youth-mentorship':
        return <Users size={20} />;
      case 'public-health-fundraising':
        return <HeartHandshake size={20} />;
      case 'event-management':
        return <CalendarCheck size={20} />;
      case 'waterborne-prevention':
        return <Droplets size={20} />;
      default:
        return <Users size={20} />;
    }
  };

  return (
    <section id="leadership" className="section section-alt" aria-label="Leadership and Volunteerism">
      <div className="container">
        <SectionHeader
          tag="Community Action"
          title="Leadership & Volunteerism"
          subtitle="Mobilizing youth networks, grassroots committees, and community stakeholders for impactful public health causes."
          id="leadership"
        />

        <div className="leadership-cards-grid">
          {leadershipData.map((item) => (
            <div key={item.id} className="leadership-card">
              <div className="card-top-icon">{getLeadershipIcon(item.id)}</div>
              <h3 className="card-title-h3">{item.title}</h3>
              <div className="card-meta-text">{item.role} • {item.organization}</div>
              <p className="card-desc-p">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
