import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = '7240403434'; // Replace with your WhatsApp number
  const message = 'Hello! I would like to inquire about...'; // Replace with your custom message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={styles.whatsAppButtonContainer}>
      <div className={styles.whatsAppButton} onClick={handleClick}>
        <FaWhatsapp size="2em" />
      </div>
      <span className={styles.hoverText}>Hello! You can ask.</span>
    </div>
  );
};

export default WhatsAppButton;
