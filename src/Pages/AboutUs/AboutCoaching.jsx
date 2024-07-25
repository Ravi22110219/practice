import React from 'react';
import styles from './AboutCoaching.module.css';
import coachingImg from '../../assets/photoes/Coaching_building_img.png'; // Replace with the path to your image

const AboutCoaching = () => {
    window.scrollTo(0, 0);
    return (
        <div className={styles.aboutCoaching}>
            <div className={styles.imageContainer}>
                <img src={coachingImg} alt="Coaching" className={styles.coachingImg} />
            </div>
            <div className={styles.content}>
                <h1>About Infinite EduVerse JEE & NEET Coaching</h1>
                <p>
                    Infinite EduVerse is a premier coaching institute in Sikar, Rajasthan, dedicated to preparing students for the JEE (Joint Entrance Examination) and NEET (National Eligibility cum Entrance Test) exams. Known for its commitment to academic excellence, Infinite EduVerse offers a comprehensive curriculum designed to cover all aspects of these competitive exams. The institute is equipped with state-of-the-art infrastructure, including modern classrooms, well-equipped laboratories, and extensive libraries, creating an ideal learning environment.
                </p>
                <p>
                    Infinite EduVerse's team of highly qualified and experienced educators employ innovative teaching methodologies to ensure students grasp complex concepts easily. Personalized attention through small batch sizes and individual mentorship helps address unique learning needs, while regular assessments and feedback ensure continuous improvement. The institute also fosters a motivational environment with workshops and seminars to keep students focused and determined. With a proven track record of producing top rankers and successful candidates, Infinite EduVerse stands as a beacon of excellence in JEE and NEET coaching, shaping the future of young aspirants and helping them achieve their academic goals.
                </p>
            </div>
        </div>
    );
};

export default AboutCoaching;
