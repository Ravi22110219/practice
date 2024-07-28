import React, { useEffect, useRef } from 'react';
import styles from './FactsAndEnroll.module.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const FactsAndEnrollSections = () => {
  const factsSectionRef = useRef(null);

  useEffect(() => {
    const section = factsSectionRef.current;

    // Initialize IntersectionObserver to check when the section comes into view
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Custom counter-up animation
          const counters = document.querySelectorAll(`.${styles.factNumber}`);
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            let count = 0;
            const increment = target / 200; // Adjust increment value for speed

            const updateCount = () => {
              if (count < target) {
                count += increment;
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCount); // Efficiently update the count
              } else {
                counter.textContent = target;
              }
            };
            updateCount();
          });

          // Stop observing once the animation has been triggered
          observer.unobserve(section);
        }
      });
    }, { threshold: 0.1 }); // Trigger the callback when 10% of the section is visible

    if (section) {
      observer.observe(section);
    }

    // Cleanup observer on component unmount
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      {/* Facts Section */}
      <section className={styles.facts} ref={factsSectionRef}>
        <div className={styles.factContents}>
          <h2>We strive to be the best in our field to make you even more comfortable</h2>
          <div className={styles.factBox}>
            <div className={styles.factItem}>
              <h3>Start In</h3>
              <p className={styles.factNumber} data-count="2020">0</p>
            </div>
            <div className={styles.factItem}>
              <h3>Skilled Tutors & Staff</h3>
              <p className={styles.factNumber} data-count="20">0</p>
            </div>
            <div className={styles.factItem}>
              <h3>Online Free Classes</h3>
              <p className={styles.factNumber} data-count="200">0</p>
            </div>
            <div className={styles.factItem}>
              <h3>Students</h3>
              <p className={styles.factNumber} data-count="3000">0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enroll Section */}
      <section className={styles.enroll} id="enroll">
        <div className={styles.enrollContents}>
          <div className={styles.enrollText}>
            <h3>Learn from expert tutors</h3>
            <p>Our dedicated team of expert educators and our advanced, student-centered learning system ensure a comprehensive and effective educational experience tailored to individual needs.</p>
          </div>
          <Link to={"/directorsandteachers"}>
          <button className={`${styles.btn} `}>Enroll Now</button></Link>
        </div>
      </section>
    </>
  );
};

export default FactsAndEnrollSections;
