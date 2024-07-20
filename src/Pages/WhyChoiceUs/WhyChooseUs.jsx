import React, { useEffect, useRef } from 'react';
import styles from './WhyChooseUs.module.css';
import 'animate.css';
import Excellent_Faculty from '../../assets/photoes/Excellent_Faculty_img.png';
import Doubt_img from '../../assets/photoes/Doubt_Img.png';
import Computer_img from '../../assets/photoes/Computer_img.png';
import Personal_mentorship_img from '../../assets/photoes/Personal_mentorship_img.png';
import Test_Series_img from '../../assets/photoes/Test_Series_img.png';
import Board_Exam_img from '../../assets/photoes/Board_Exam_img.png';
import True_Teachers_img from '../../assets/photoes/Founder_invol_img.png';
import Safety_img from '../../assets/photoes/Safety_img.png';
import Help_Desk_img from '../../assets/photoes/Help_Desk_img.png';
import Beyond_Books_img from '../../assets/photoes/Beyond_Books_img.png';
import Reward_img from '../../assets/photoes/Reward_img.png';
import Classroom_img from '../../assets/photoes/Classroom.png';

const features = [
  {
    title: "Excellent Faculty",
    description: "Expert faculty with years of experience. Outstanding and highly qualified faculty members who help students in every aspect of their study life.",
    image: Excellent_Faculty
  },
  {
    title: "Doubt Classes",
    description: "Special doubt-clearing sessions are held to address individual queries of students to ensure comprehensive understanding of concepts.",
    image: Doubt_img,
  },
  {
    title: "Computer Based Tests",
    description: "Regular computer-based tests are conducted to simulate the actual exam environment and enhance students' test-taking skills.",
    image: Computer_img,
  },
  {
    title: "Personal Mentorship",
    description: "One-on-one mentoring sessions are conducted to provide personalized guidance and support to each student.",
    image: Personal_mentorship_img,
  },
  {
    title: "Regular Test Series",
    description: "Regular computer-based tests are conducted to simulate the actual exam environment and enhance students' test-taking skills.",
    image: Test_Series_img,
  },
  {
    title: "Board Exam Preparation",
    description: "(For 12th Board Students) On the basis of NCERT and State Boards, worksheets for stodents are created. This run parallel with the course curriculum of NEET/JEE",
    image: Board_Exam_img,
  },
  {
    title: "True Teachers",
    description: "Regular Involvement of Founder Team in Academics",
    image: True_Teachers_img,
  },
  {
    title: "Providing 24*7 Safety",
    description: "You can trust our eyes. Invisible protector of students",
    image: Safety_img,
  },
  {
    title: "Help Desk",
    description: "Culture of helping students regarding their day to day problems and Helping staff are very capable to make better understanding.",
    image: Help_Desk_img,
  },
  {
    title: "Beyond Books",
    description: "Providing Study Material Notes & Regular Test Series.",
    image: Beyond_Books_img,
  },
  {
    title: "Reward System",
    description: "Students have a variety of Awards & Scholarships available basis on their regular class test performance.",
    image: Reward_img,
  },
  {
    title: "Classroom",
    description: "Spacious Classrooms with comfortable proper sitting arrangement for long duration classes.",
    image: Classroom_img,
  }
];



const WhyChooseUs = () => {
  const featureRefs = useRef([]);
  window.scrollTo(0, 0);
  
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

    featureRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      featureRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (<>
    <section className={styles.whyUsSection}>
      <div className={styles.mainContHeading}>
        <div className={styles.mainContHeadText}>
          <h1 className={styles.heading}>Why Choose Us?</h1>
        </div>
      </div>
      <div id="about" className={styles.about}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.row} ${index % 2 === 0 ? styles.rowEven : styles.rowOdd}`}
            ref={el => (featureRefs.current[index] = el)}
          >
            <div className={styles.col1}>
              <img src={feature.image} alt={feature.title} />
            </div>
            <div className={styles.col2}>
              <h1 className={styles.title}>{feature.title}</h1>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
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

     
      </>
  );
};

export default WhyChooseUs;
