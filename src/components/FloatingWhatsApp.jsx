import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { profileData } from '../data/profile';

export function FloatingWhatsApp() {
  return (
    <a
      href={profileData.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with Md. Ahsanul Haque on WhatsApp"
      title={`Chat on WhatsApp (${profileData.phone})`}
    >
      <WhatsAppIcon size={28} color="#ffffff" />
      <span className="floating-whatsapp-tooltip">Chat on WhatsApp</span>
    </a>
  );
}

