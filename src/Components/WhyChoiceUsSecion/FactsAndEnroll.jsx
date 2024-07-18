import React, { useEffect, useRef } from 'react';
import styles from './FactsAndEnroll.module.css'; // Import the CSS file

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
              <h3>Events</h3>
              <p className={styles.factNumber} data-count="540">0</p>
            </div>
            <div className={styles.factItem}>
              <h3>Skilled Tutors</h3>
              <p className={styles.factNumber} data-count="80">0</p>
            </div>
            <div className={styles.factItem}>
              <h3>Online Courses</h3>
              <p className={styles.factNumber} data-count="200">0</p>
            </div>
            <div className={styles.factItem}>
              <h3>Students</h3>
              <p className={styles.factNumber} data-count="73000">0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enroll Section */}
      <section className={styles.enroll} id="enroll">
        <div className={styles.enrollContents}>
          <div className={styles.enrollText}>
            <h3>Learn from expert tutors</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.</p>
          </div>
          <button className={`${styles.btn} `}>Enroll Now</button>
        </div>
      </section>
    </>
  );
};

export default FactsAndEnrollSections;
