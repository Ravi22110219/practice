import React, { useState, useEffect, useRef } from 'react';
import styles from './DirectorsAndteachers.module.css';
import Ali_sir from '../../assets/photoes/Ali_Sir.png';
import Aakib_sir from '../../assets/photoes/Aakib_sir.png';
import Mohan_Sir from '../../assets/photoes/Mohan_Sir.png';
import Rahul_Sir from '../../assets/photoes/Rahul_Sir.png';
import Sushil_Sir from '../../assets/photoes/raj_Sir.png';


const DirectorsAndteachers = () => {
  window.scrollTo(0, 0);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const teacherRefs = useRef([]);

  const toggleExpanded = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  useEffect(() => {
    window.scroll(0,0);
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    teacherRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      teacherRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const teachers = [
    {
      name: 'NAUSHAD KHAN',
      title: 'Founder Director',
      image: Ali_sir,
      description: [
        'We are thrilled to welcome you to INFINITE EduVerse, where we are dedicated to helping you achieve your goals on NEET & JEE exams.',
        'At INFINITE EduVerse, we believe that every student is unique and has the potential to succeed. That\'s why we offer personalized attention and a customized study plan tailored to each student\'s strengths and weaknesses.'
      ]
    },
    {
      name: 'AAKIB HUSSAIN SIROHA',
      title: 'Founder Director',
      image: Aakib_sir,
      description: [
        'During this boring college life, all of us need that refreshing break that tickles our creativity. Hence, we present, a monthly art challenge!',
        'There will be a new theme every month. Participants will have to create something based on that. Other than this, there is no limitation.'
      ]
    },
    {
      name: 'MOHAN SINGH DEWASI',
      title: 'Managing Director',
      image: Mohan_Sir,
      description: [
        'During this boring college life, all of us need that refreshing break that tickles our creativity. Hence, we present, a monthly art challenge!',
        'There will be a new theme every month. Participants will have to create something based on that. Other than this, there is no limitation.'
      ]
    },
    {
      name: 'RAHUL SHEORAN',
      title: 'Academic Director',
      image: Rahul_Sir,
      description: [
        'During this boring college life, all of us need that refreshing break that tickles our creativity. Hence, we present, a monthly art challenge!',
        'There will be a new theme every month. Participants will have to create something based on that. Other than this, there is no limitation.'
      ]
    },
    {
      name: 'Sushil Sharma',
      title: 'CMO',
      image: Sushil_Sir,
      description: [
        'During this boring college life, all of us need that refreshing break that tickles our creativity. Hence, we present, a monthly art challenge!',
        'There will be a new theme every month. Participants will have to create something based on that. Other than this, there is no limitation.'
      ]
    },
    // Add more teachers here...
  ];

  return (
    <section className={styles.directorsSection}>
      <div className={styles.mainContHeading}>
        <div className={styles.mainContHeadText}>
          <h1 className={styles.directorsHeading}>Message From Director's And Teachers</h1>
        </div>
      </div>
      <div id="about" className={styles.about}>
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className={`${styles.row} ${index % 2 === 0 ? styles.rowEven : styles.rowOdd}`}
            ref={el => (teacherRefs.current[index] = el)}
          >
            <div className={styles.col1}>
              <img src={teacher.image} alt="Image" />
            </div>
            <div className={styles.col2}>
              <h1 className={styles.title}>{teacher.name}</h1>
              <h3 className={styles.subtitle}>{teacher.title}</h3>
              {teacher.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
              {expandedIndex === index && (
                <div className={styles.expandedContent}>
                  <p>Additional content displayed when "Show More" is clicked.</p>
                  <p>You can add more detailed information here.</p>
                </div>
              )}
              <div className={styles.buttonsContainer}>
                <button className={styles.toggleButton} onClick={() => toggleExpanded(index)}>
                  {expandedIndex === index ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DirectorsAndteachers;
