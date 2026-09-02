import React from 'react';

export function Badge({ children, variant = 'default', className = '' }) {
  const variantClass = {
    default: 'badge',
    ongoing: 'badge badge-ongoing',
    completed: 'badge badge-completed',
    primary: 'badge badge-primary'
  }[variant] || 'badge';

  return <span className={`${variantClass} ${className}`}>{children}</span>;
}
