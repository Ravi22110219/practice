import React from 'react';
import styles from './AboutSection.module.css'; 
import { Link } from 'react-router-dom';


const AboutSection = () => {
  return (
    <section className={styles.about} id="about">
      {/* === Left Side Starts === */}
      <div className={styles.aboutImg}>
        <iframe className={styles.youtubeShort} src="https://www.youtube-nocookie.com/embed/l9sMIx9mYvc?si=pvSoy3CzaBg4Oc5t&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      {/* === Left Side Ends === */}
      {/* === Right Side Starts === */}
      <div className={styles.aboutText}>
        {/* === Section Header Starts === */}
        <header className={styles.sectionHeader}>
          <h3>Why Choose Us</h3>
          <h1>The best course in animation</h1>
        </header>
        {/* === Section Header Ends === */}
        <p>
        Our exceptional faculty and comprehensive curriculum ensure that you receive the highest quality education. With personalized guidance and state-of-the-art facilities.
        </p>
        <ul className={styles.aboutList}>
          <li check="&#10004;">Excellent Faculty Team
          </li>
          <li check="&#10004;">Regular Involvement of Founder Team in Academics.

 </li>
          <li check="&#10004;">Regular Test Series</li>
          <li check="&#10004;">Students have a variety of
          Awards & Scholarships available</li>
        </ul>
        <button className={`${styles.btn} ${styles.aboutBtn}`}><Link to={"/whychoiceus"}>Read More</Link></button>
      </div>
      {/* === Right Side Ends === */}
    </section>
  );
};

export default AboutSection;
