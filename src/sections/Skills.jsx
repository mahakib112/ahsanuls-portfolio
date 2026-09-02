import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { skillsData } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="section" aria-label="Skills and Core Competencies">
      <div className="container">
        <SectionHeader
          tag="Core Competencies"
          title="Skills & Professional Expertise"
          subtitle="A comprehensive toolkit spanning public health program management, MEAL methodologies, community engagement, and clinical practice."
          id="skills"
        />

        <div className="skills-categories-grid">
          {skillsData.categories.map((category) => (
            <div key={category.id} className="skill-category-card">
              <h3 className="skill-cat-title">{category.title}</h3>
              <p className="skill-cat-desc">{category.description}</p>

              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level-badge">{skill.level}</span>
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
