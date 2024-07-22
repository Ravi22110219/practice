import React, { useState, useEffect, useRef } from 'react';
import styles from './OurMotivation.module.css';


const OurMotivation = () => {
  window.scrollTo(0, 0);

  const sectionRefs = useRef([]);

  useEffect(() => {
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

    sectionRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const sections = [
    {
      title: 'VISION',
      image: "https://metalus.qc.ca/wp-content/uploads/2019/10/Vision.jpg",
      text: [
        'Our primary vision is to prepare the students for the upcoming world of globalization. We are obliged to make our students capable enough to compete in the challenges of 2035, whether they want to see themselves in the job sector, corporate, or in businesses. And being one of India\'s leading institutions, we will leave no stone unturned to fulfil it. Moreover, the institution will build on its innovation, problem-solving, and interdisciplinary collaboration traditions to meet society\'s changing needs. The community will look up to us for future trends and innovations in Education, research, and technology.',
        'In a consistently safe and healthy environment, all students can become responsible, respectful, and resourceful. We believe students learn best when they are actively engaged in the learning process. Education is a collaborative partnership involving school, family, and community. Infinite EduVerse strives to build lasting relationships among students and staff that encourage open discussion and provide activities that develop our students\' strengths.'
      ]
    },
    {
      title: 'OBJECTIVE',
      image: "https://davidsummertonconsulting.co.uk/wp-content/uploads/2017/11/management-objectives.jpg",
      text: [
        'Our more specific, measurable objectives for graduates of our institute curriculum are the following: they recognize that they acquired a high-quality, rigorous technical education. They recognize that they have acquired a broader body of knowledge, in addition to their technical knowledge, that allows them to understand the larger context of the problems they must address during their career. They use their technical foundation and broader knowledge base to succeed in a diverse collection of individual careers inside and outside the profession.'
      ]
    },
    {
      title: 'MISSION',
      image: "https://media.licdn.com/dms/image/D4E12AQHgMxo-g7BYsw/article-cover_image-shrink_720_1280/0/1658422953944?e=2147483647&v=beta&t=cbUAMWH281ZrksBTR63LDIweFkMUqiWhVA7CobvLCwY",
      text: [
        'Our mission is to provide a safe, disciplined learning environment that empowers all students to develop their full potential. We feel strongly about helping build leaders who can succeed in whatever endeavour they undertake. Common standards keep us focused on learning appropriate content and preparing our students to graduate.',
        'Infinite EduVerse shall provide a dynamic, challenging, and ethical environment for pursuing high-quality teaching, research, learning, and service across all areas of the institute, where students with the fundamental knowledge, interdisciplinary problem-solving skills, societal & Business awareness and confidence are required to excel in their chosen professions and be leaders in a global environment.'
      ]
    }
  ];

  return (
    <section className={styles.motivationSection}>
      <div className={styles.mainContHeading}>
        <div className={styles.mainContHeadText}>
          <h1 className={styles.motivationHeading}>Our Motivation</h1>
        </div>
      </div>
      <div id="about" className={styles.about}>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${styles.row} ${index % 2 === 0 ? styles.rowEven : styles.rowOdd}`}
            ref={el => (sectionRefs.current[index] = el)}
          >
            <div className={styles.col1}>
              <img src={section.image} alt={section.title} />
            </div>
            <div className={styles.col2}>
              <h1 className={styles.title}>{section.title}</h1>
              {section.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMotivation;
