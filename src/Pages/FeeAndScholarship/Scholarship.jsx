import React from 'react';
import styles from './Scholarship.module.css';


const Scholarship = () => {
    return ( 
        <>  
          
            <div className="w-full bg-gray-800 h-40 mt-20 flex items-center justify-center">
            <div className="w-5/6 mx-auto">
                <h1 className="text-center text-white text-4xl">Scholarship</h1>
            </div>
        </div>
            <div className={styles.scholarshipSection}>
                <div className={styles.tableContainer}>
                    <h2>Scholarship (on Tuition Fee)</h2>
                    <p>On the basis of Board Results</p>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Criteria</th>
                                <th>Scholarship</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>&ge; 95% in 10<sup>th</sup> & 12<sup>th</sup> Board Exams</td>
                                <td>90%</td>
                            </tr>
                            <tr>
                                <td>90-95% in 10<sup>th</sup> & 12<sup>th</sup> Board Exams</td>
                                <td>60%</td>
                            </tr>
                            <tr>
                                <td>85-90% in 10<sup>th</sup> & 12<sup>th</sup> Board Exams</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>80-85% in 10<sup>th</sup> & 12<sup>th</sup> Board Exams</td>
                                <td>10%</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.additionalInfo}>
                        <p>Upto <span className={styles.highlight}>90%</span> Scholarship</p>
                        <p>50% Scholarship for Blood Relative of Defence & Police</p>
                    </div>
                </div>
            </div>
          
        </> 
    );
};

export default Scholarship;
