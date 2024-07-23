import React from 'react';
import styles from './LocationSection.module.css';

const LocationSection =  () =>  {
  return ( 
    <section className={styles.locContainer}>
      <header className={styles.sectionHeader}>
        <h3>Google Map</h3>
        <h1>Find Us With Map</h1>
      </header>
      <div className={styles.locImg}>
       await <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.527493305124!2d75.16355247492008!3d27.624233229153287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cbb9cec1325fb%3A0xc0ac5b6a0927015!2sInfinite%20EduVerse%2C%20Sikar!5e1!3m2!1sen!2sin!4v1720690743206!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationSection;
