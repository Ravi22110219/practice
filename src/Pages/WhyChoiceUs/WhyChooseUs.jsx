import React from 'react';
import styles from './WhyChooseUs.module.css';
import 'animate.css';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const features = [
  {
    title: "Excellent Faculty",
    description: "Expert faculty with years of experience. Outstanding and highly qualified faculty members who help students in every aspect of their study life.",
    image: "https://images.ctfassets.net/2htm8llflwdx/5u2aV3rSMUUwTsf6hyfx5F/b8a0330066d3891c658b890b42425e1a/Shorelight_Education_Majors.jpg?fit=thumb",
  },
  {
    title: "Excellent Faculty",
    description: "Expert faculty with years of experience. Outstanding and highly qualified faculty members who help students in every aspect of their study life.",
    image: "https://images.ctfassets.net/2htm8llflwdx/5u2aV3rSMUUwTsf6hyfx5F/b8a0330066d3891c658b890b42425e1a/Shorelight_Education_Majors.jpg?fit=thumb",
  },
  {
    title: "Excellent Faculty",
    description: "Expert faculty with years of experience. Outstanding and highly qualified faculty members who help students in every aspect of their study life.",
    image: "https://images.ctfassets.net/2htm8llflwdx/5u2aV3rSMUUwTsf6hyfx5F/b8a0330066d3891c658b890b42425e1a/Shorelight_Education_Majors.jpg?fit=thumb",
  },
  {
    title: "Excellent Faculty",
    description: "Expert faculty with years of experience. Outstanding and highly qualified faculty members who help students in every aspect of their study life.",
    image: "https://images.ctfassets.net/2htm8llflwdx/5u2aV3rSMUUwTsf6hyfx5F/b8a0330066d3891c658b890b42425e1a/Shorelight_Education_Majors.jpg?fit=thumb",
  },
  // Add other features here
];

const WhyChooseUs = () => {
  return (
    <section className={styles.whyUsHome}>
    <section className={styles.whyWeContainer}>
      {/* Page 1 */}
      <div className={styles.mainContHeading}>
        <div className={styles.mainContHeadText}>
          <h1 className="animate__animated animate__fadeInLeft">Why Choose Us?</h1>
          <p className="animate__animated animate__fadeInLeft">Infinite Eduverse</p>
        </div>
        <div className={styles.mainContArrow}>
          <a href="#"><FaArrowDown /></a>
        </div>
      </div>

      <section id="about">
        {features.map((feature, index) => (
          <div className={`${styles.aboutBox} animate__animated animate__fadeInRight`} key={index}>
            <div className={styles.aboutImg}>
              <img src={feature.image} alt={feature.title} className={styles.imgHover} />
            </div>
            <div className={styles.abouts}>
              <div className={styles.aboutsDesc}>
                <h2>{feature.title}</h2>
                <div className={styles.aboutText}>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className={styles.whyWeInfoCont}>
        <div className={styles.whyWeInfoContRow}>
          <div className={styles.whyWeInfoContCol1}>
            <h2>Daily Practice Problems</h2>
            <p>Daily Practice Problems (DPPs) which contain questions segregated chapter wise and topic-wise. The questions have been carefully picked and set by authors understanding the need of NEET/ JEE aspirants as per their daily preparation schedule.</p>
          </div>
          <div className={styles.whyWeInfoContCol2}>
            <h2>Performance Tracker</h2>
            <p>Every student's progress is tracked by giving a constant feedback on their performance in the tests.</p>
          </div>
          <div className={styles.whyWeInfoContCol3}>
            <h2>Feedback System</h2>
            <p>Regular feedbacks are taken by the students in order to improve the learning process qualitatively and listen to all student's queries.</p>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <section id="about">
        {features.map((feature, index) => (
          <div className={`${styles.aboutBox} animate__animated animate__fadeInRight`} key={index}>
            <div className={styles.aboutImg}>
              <img src={feature.image} alt={feature.title} className={styles.imgHover} />
            </div>
            <div className={styles.abouts}>
              <div className={styles.aboutsDesc}>
                <h2>{feature.title}</h2>
                <div className={styles.aboutText}>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Salient Features */}
      <div className={styles.arrowSection}>
        <div className={styles.upArrow}>
          <a href="#"><FaArrowUp className='text-2xl' /></a>
        </div>
      </div>
    </section>
    </section>
  );
};

export default WhyChooseUs;
