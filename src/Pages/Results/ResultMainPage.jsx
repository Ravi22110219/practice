import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate
import styles from './ResultMainPage.module.css';

const ResultMainPage = () => {
    window.scrollTo(0, 0);
    const location = useLocation();
    const navigate = useNavigate();
    const selectedResult = location.state?.selectedResult; // Get selectedResult from location state

    if (!selectedResult) {
        return <div>No data available</div>; // Handle case when selectedResult is not available
    }

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className={styles.resultsMainPage}>
            <button className={styles.backButton} onClick={handleBack}>Back to Results Home</button>
            <h2>Student Details for Year {selectedResult.year}</h2>
            <div className={styles.studentDetails}>
                {selectedResult.students?.map((student, index) => (
                    <div key={index} className={styles.studentCard}>
                        <img src={student.image} alt={student.name} className={styles.studentImage} />
                        <div className={styles.studentInfo}>
                            <h4>{student.name}</h4>
                            <p>AIR: {student.air}</p>
                            <p>AF No.: {student.afNo} [{student.category}]</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultMainPage;
