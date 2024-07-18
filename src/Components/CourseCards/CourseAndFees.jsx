import React from "react";
import styles from "./Course.module.css";
import { Link, NavLink } from "react-router-dom";


const coursesData = [
    {
        id: 1,
        title: "JEE (Main+Advanced)",
        description: "JEE (Main+Advanced) Courses builds strong subject knowledge and problem-solving skills to help aspirants ace the exams to get enrolled into IITs.",
        link: "/course&batch",
        image: "https://www.allen.ac.in/assets/img/new-homepage/jee-main.png"
    },
    {
        id: 2,
        title: "Pre-Medical/NEET UG",
        description: "NEET-UG Courses sharpen skills essential for medical entrance exams, ensuring students are well-prepared for success in the competitive medical field.",
        link: "/course&batch",
        image: "https://www.allen.ac.in/assets/img/new-homepage/premedical.png"
    },
    {
        id: 3,
        title: "NEET UG",
        description: "NEET-UG Courses sharpen skills essential for medical entrance exams, ensuring students are well-prepared for success in the competitive medical field.",
        link: "/course&batch",
        image: "https://www.allen.ac.in/assets/img/new-homepage/medpg.png"
        
    },
    {
        id: 4,
        title: "JEE (Main)",
        description: "JEE (Main) courses are designed to provide students with a significant competitive edge for achieving success for their path to NITs, IIITs and equivalent colleges.",
        link: "/course&batch",
        image: "https://www.allen.ac.in/assets/img/new-homepage/jeemain.png"
        
    }
];

const CourseAndFees = () => {
    return (
        <section className={styles.courses} id="courses">
            <header className={styles.sectionHeader}>
                <h3>Courses & Batch</h3>
                <h1>Online animation lessons at your pace</h1>
            </header>
            <div className={styles.coursesContents}>
                {coursesData.map((course) => (
                    <div key={course.id} className={styles.courseBox}>
                        <div className={styles.courseBoxTop}>
                            <img src={course.image} alt={course.title} />
                        </div>
                        <div className={styles.courseDesc}>
                            <h2>{course.title}</h2>
                            <p>{course.description}</p>
                            <NavLink to={course.link}>
                                <button className={styles.courseBtn}>Click Here</button>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseAndFees;
