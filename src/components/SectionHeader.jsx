import React from 'react';

export function SectionHeader({ tag, title, subtitle, id }) {
  return (
    <div className="section-header">
      {tag && <span className="section-tag">{tag}</span>}
      <h2 id={id ? `${id}-heading` : undefined} className="section-title">
        {title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
