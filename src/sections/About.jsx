import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { HeartPulse, Target, Users, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';

export function About() {
  const pillars = [
    {
      icon: <HeartPulse size={18} />,
      title: 'Clinical & Community Health',
      description: 'Grounded in formal DMF medical training with hands-on hospital triage and rural primary health consultations.'
    },
    {
      icon: <Target size={18} />,
      title: 'Program Coordination & MEAL',
      description: 'Managing $150k+ in program portfolios, logframe indicator tracking, baseline/endline data, and donor reporting.'
    },
    {
      icon: <Users size={18} />,
      title: 'Community & Youth Engagement',
      description: 'Facilitating grassroots health education, youth club coordination, and local government (DGHS/UHC) partnerships.'
    },
    {
      icon: <ShieldCheck size={18} />,
      title: 'Governance & Accountability',
      description: 'Strengthening beneficiary feedback loops (CFM) while pursuing Master’s studies in Governance & Development.'
    }
  ];

  return (
    <section id="about" className="section section-alt" aria-label="About Me">
      <div className="container">
        <SectionHeader
          tag="Professional Profile"
          title="About Me"
          subtitle="Connecting frontline medical expertise with strategic NGO program coordination and MEAL frameworks."
          id="about"
        />

        <div className="about-grid">
          {/* First-person professional narrative */}
          <div className="about-text-content">
            <p>
              I am a <strong>Medical Assistant and Health & Development Professional</strong> with
              approximately 7 years of field-tested experience in community healthcare,
              non-governmental organization (NGO) program implementation, and development initiatives
              in Bangladesh.
            </p>
            <p>
              My professional journey began with frontline medical practice—earning my{' '}
              <strong>Diploma in Medical Faculty (DMF)</strong> from the State Medical Faculty of
              Bangladesh and serving as a Sub-Assistant Community Medical Officer (SACMO) and hospital
              intern. These roles provided me with deep clinical acumen in outpatient diagnosis,
              emergency triage, maternal-child healthcare (MNCH), and epidemic response in rural
              health centers.
            </p>
            <p>
              Over the years, I transitioned this grassroots clinical foundation into large-scale{' '}
              <strong>NGO Program Management and MEAL (Monitoring, Evaluation, Accountability, and Learning)</strong>.
              Serving as Officer – Health at Good Neighbors Bangladesh, I directed health and WASH
              projects reaching over 10,000 beneficiaries and managed project budgets of $150,000,
              ensuring 100% compliance with international donor guidelines.
            </p>
            <p>
              To continually elevate my strategic impact, I completed a <strong>Post Graduate Diploma (PGD) in MEAL</strong>{' '}
              and am currently enrolled in the <strong>Professional Masters in Governance & Development Studies (PMGDS)</strong>{' '}
              at Jahangirnagar University. My goal is to work collaboratively with INGOs, donor-funded
              missions, and public health institutions to build resilient, transparent, and
              community-centered health solutions.
            </p>
          </div>

          {/* Pillars Card */}
          <div className="about-pillars-card">
            <h3 className="about-pillars-title">
              <span>Core Focus Areas</span>
            </h3>
            <div className="about-pillars-list">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="about-pillar-item">
                  <div className="about-pillar-icon">{pillar.icon}</div>
                  <div className="about-pillar-content">
                    <h4>{pillar.title}</h4>
                    <p>{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
